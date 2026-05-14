"""LLM helpers — Ollama for streaming chat and structured grading."""
from __future__ import annotations

import json
import os
from typing import AsyncIterator

import httpx

from schemas import (
    ChatRequest,
    GradeSpeakingRequest,
    GradeSpeakingResponse,
    GradeWritingRequest,
    GradeWritingResponse,
    SpeakingBands,
    VoiceTurnRequest,
    VoiceTurnResponse,
    WritingBands,
)
from stt import download_and_transcribe
from tts import synthesize_to_blob

OLLAMA_HOST = os.environ.get("OLLAMA_HOST", "http://localhost:11434")
MODEL = os.environ.get("MODEL_NAME", "llama3.1:8b-instruct-q5_K_M")


async def chat_stream(req: ChatRequest) -> AsyncIterator[str]:
    msgs: list[dict] = []
    if req.systemPrompt:
        msgs.append({"role": "system", "content": req.systemPrompt})
    msgs += [m.model_dump() for m in req.messages]

    async with httpx.AsyncClient(timeout=httpx.Timeout(300.0)) as client:
        async with client.stream(
            "POST",
            f"{OLLAMA_HOST}/api/chat",
            json={
                "model": MODEL,
                "messages": msgs,
                "options": {"temperature": req.temperature, "num_predict": req.max_tokens},
                "stream": True,
            },
        ) as r:
            async for line in r.aiter_lines():
                if not line:
                    continue
                try:
                    data = json.loads(line)
                except json.JSONDecodeError:
                    continue
                if data.get("done"):
                    return
                content = data.get("message", {}).get("content")
                if content:
                    yield content


async def chat_complete_json(prompt: str, schema_hint: str) -> dict:
    """Single-turn structured completion. Asks the model to return strict JSON."""
    async with httpx.AsyncClient(timeout=httpx.Timeout(300.0)) as client:
        r = await client.post(
            f"{OLLAMA_HOST}/api/chat",
            json={
                "model": MODEL,
                "messages": [
                    {
                        "role": "system",
                        "content": (
                            "You return ONLY valid JSON matching the requested schema. "
                            "No prose outside the JSON. Schema: " + schema_hint
                        ),
                    },
                    {"role": "user", "content": prompt},
                ],
                "format": "json",
                "stream": False,
                "options": {"temperature": 0.2},
            },
        )
        r.raise_for_status()
        body = r.json()
        return json.loads(body["message"]["content"])


async def grade_writing(req: GradeWritingRequest) -> GradeWritingResponse:
    prompt = f"""{req.rubric}

# Task type
{req.taskKind}

# Prompt
{req.prompt}

# Candidate response
{req.responseText}

Return JSON with this shape:
{{
  "bands": {{ "taskAchievement": number, "coherence": number, "lexical": number, "grammar": number, "band": number }},
  "feedbackMd": "string (Markdown, 200-400 words)",
  "corrections": [{{ "original": "...", "corrected": "...", "reason": "...", "category": "grammar|lexical|spelling|punctuation|style", "startIndex": int, "endIndex": int }}],
  "improvementHints": ["string", "string", "string"]
}}"""

    data = await chat_complete_json(prompt, schema_hint="GradeWritingResponse")
    bands_raw = data["bands"]
    avg = (bands_raw["taskAchievement"] + bands_raw["coherence"] + bands_raw["lexical"] + bands_raw["grammar"]) / 4
    bands_raw["band"] = round(avg * 2) / 2

    return GradeWritingResponse(
        bands=WritingBands(**bands_raw),
        feedbackMd=data["feedbackMd"],
        corrections=data.get("corrections", []),
        improvementHints=data.get("improvementHints", []),
    )


async def grade_speaking(req: GradeSpeakingRequest) -> GradeSpeakingResponse:
    transcript_data = await download_and_transcribe(req.audioBlobKey)
    transcript = transcript_data["text"]
    duration_s = max(transcript_data.get("durationMs", 0) / 1000, 1)

    word_count = len(transcript.split())
    wpm = (word_count / duration_s) * 60
    fillers = sum(1 for w in transcript.lower().split() if w in {"um", "uh", "er", "like"})
    pauses = transcript_data.get("pauseCount", 0)

    prompt = f"""{req.rubric}

# Prompt
{req.prompt}

# Candidate transcript (with timing data)
{transcript}

# Fluency stats
words/minute: {wpm:.1f}
filler count: {fillers}
pause count: {pauses}

Return JSON: {{
  "bands": {{ "fluency": n, "lexical": n, "grammar": n, "pronunciation": n, "band": n }},
  "feedbackMd": "...",
  "corrections": [...]
}}"""

    data = await chat_complete_json(prompt, schema_hint="GradeSpeakingResponse")
    bands_raw = data["bands"]
    avg = (bands_raw["fluency"] + bands_raw["lexical"] + bands_raw["grammar"] + bands_raw["pronunciation"]) / 4
    bands_raw["band"] = round(avg * 2) / 2

    return GradeSpeakingResponse(
        bands=SpeakingBands(**bands_raw),
        transcript=transcript,
        wordsPerMinute=wpm,
        fillerCount=fillers,
        pauseCount=pauses,
        feedbackMd=data["feedbackMd"],
        corrections=data.get("corrections", []),
    )


async def voice_tutor_turn(req: VoiceTurnRequest) -> VoiceTurnResponse:
    msgs: list[dict] = [{"role": "system", "content": req.systemPrompt}]
    for h in req.history[-12:]:  # cap context window
        if h.get("role") in {"user", "assistant"} and h.get("text"):
            msgs.append({"role": h["role"], "content": h["text"]})
    msgs.append({"role": "user", "content": req.userText})

    async with httpx.AsyncClient(timeout=httpx.Timeout(120.0)) as client:
        r = await client.post(
            f"{OLLAMA_HOST}/api/chat",
            json={"model": MODEL, "messages": msgs, "stream": False, "options": {"temperature": 0.7}},
        )
        r.raise_for_status()
        text = r.json()["message"]["content"].strip()

    blob_key = await synthesize_to_blob(text=text, accent=req.accent)
    return VoiceTurnResponse(text=text, ttsBlobKey=blob_key)
