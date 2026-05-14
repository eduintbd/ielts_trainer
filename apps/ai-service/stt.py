"""Whisper STT wrapper. Lazily loads the model on first use to save container start time."""
from __future__ import annotations

import io
import os
import tempfile
from typing import Any

import httpx
import whisper
from fastapi import Request
from fastapi.responses import JSONResponse

_MODEL: Any = None
_MODEL_NAME = os.environ.get("WHISPER_MODEL", "medium")


def get_model():
    global _MODEL
    if _MODEL is None:
        _MODEL = whisper.load_model(_MODEL_NAME)
    return _MODEL


def transcribe_bytes(audio_bytes: bytes, language: str | None = None) -> dict:
    with tempfile.NamedTemporaryFile(suffix=".webm", delete=False) as tmp:
        tmp.write(audio_bytes)
        tmp_path = tmp.name
    try:
        model = get_model()
        result = model.transcribe(
            tmp_path,
            language=None if language in (None, "auto") else language,
            word_timestamps=True,
            verbose=False,
        )
    finally:
        try:
            os.remove(tmp_path)
        except OSError:
            pass

    text: str = result.get("text", "").strip()
    detected = result.get("language", language or "en")

    words: list[dict] = []
    pause_count = 0
    last_end = 0.0
    for seg in result.get("segments", []):
        for w in seg.get("words", []) or []:
            start = float(w.get("start", 0.0))
            end = float(w.get("end", 0.0))
            if start - last_end > 0.6:
                pause_count += 1
            last_end = end
            words.append({"word": w.get("word", "").strip(), "startMs": int(start * 1000), "endMs": int(end * 1000)})

    duration_ms = int((words[-1]["endMs"] if words else 0))

    return {
        "text": text,
        "language": detected,
        "durationMs": duration_ms,
        "words": words,
        "pauseCount": pause_count,
    }


async def transcribe_upload(request: Request):
    form = await request.form()
    audio = form.get("audio")
    language = form.get("language", "auto")
    if audio is None or not hasattr(audio, "file"):
        return JSONResponse({"code": "bad_request", "message": "audio required"}, status_code=400)
    blob = await audio.read() if hasattr(audio, "read") else audio.file.read()  # type: ignore[union-attr]
    return transcribe_bytes(blob, language=language if isinstance(language, str) else "auto")


async def download_and_transcribe(blob_url: str) -> dict:
    async with httpx.AsyncClient(timeout=60.0) as client:
        r = await client.get(blob_url)
        r.raise_for_status()
        return transcribe_bytes(r.content, language="auto")
