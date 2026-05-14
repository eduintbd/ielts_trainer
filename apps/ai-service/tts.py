"""Piper TTS wrapper. Voices live in /piper-voices/{accent}.onnx."""
from __future__ import annotations

import io
import os
import subprocess
import tempfile
import uuid
from pathlib import Path

from fastapi.responses import Response, JSONResponse

from schemas import TTSRequest

VOICES_DIR = Path(os.environ.get("PIPER_VOICES_DIR", "/piper-voices"))
PUBLIC_BASE = os.environ.get("TTS_PUBLIC_BASE", "/tts/audio")
OUT_DIR = Path("/tmp/ielts-tts")
OUT_DIR.mkdir(parents=True, exist_ok=True)

# Map our accent enum to Piper voice files (downloaded into VOICES_DIR at deploy time).
ACCENTS = {
    "british": "en_GB-alba-medium.onnx",
    "american": "en_US-amy-medium.onnx",
    "australian": "en_AU-paige-medium.onnx",
    "indian": "en_IN-sarah-medium.onnx",
}


def _voice_path(accent: str) -> Path:
    name = ACCENTS.get(accent, ACCENTS["british"])
    return VOICES_DIR / name


async def synthesize(req: TTSRequest):
    voice = _voice_path(req.accent)
    if not voice.exists():
        return JSONResponse(
            {"code": "voice_missing", "message": f"voice file not found: {voice}"}, status_code=500
        )

    out_path = OUT_DIR / f"{uuid.uuid4().hex}.wav"
    proc = subprocess.run(
        ["piper", "--model", str(voice), "--output_file", str(out_path)],
        input=req.text.encode("utf-8"),
        check=False,
        capture_output=True,
    )
    if proc.returncode != 0:
        return JSONResponse({"code": "tts_failed", "message": proc.stderr.decode("utf-8", errors="replace")}, status_code=500)

    audio = out_path.read_bytes()
    return Response(content=audio, media_type="audio/wav")


async def synthesize_to_blob(*, text: str, accent: str) -> str:
    """For voice/turn — returns a fetchable URL.
    In production this should upload to Vercel Blob; for now we serve from local disk
    behind a path the Next.js app rewrites to via vercel.ts.
    """
    voice = _voice_path(accent)
    if not voice.exists():
        raise FileNotFoundError(str(voice))
    name = f"{uuid.uuid4().hex}.wav"
    out_path = OUT_DIR / name
    subprocess.run(
        ["piper", "--model", str(voice), "--output_file", str(out_path)],
        input=text.encode("utf-8"),
        check=True,
        capture_output=True,
    )
    return f"{PUBLIC_BASE}/{name}"
