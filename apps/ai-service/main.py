"""FastAPI entrypoint for the IELTS Trainer GPU service.

Endpoints:
- POST /llm/chat (SSE stream)         — Llama 3.1 via Ollama
- POST /grade/writing                 — JSON-mode LLM call returning bands + corrections
- POST /grade/speaking                — Whisper STT + LLM grading
- POST /stt/transcribe (multipart)    — audio → transcript
- POST /tts/speak                     — text → audio URL (Piper)
- POST /voice/turn                    — STT + LLM + TTS in one shot for the voice tutor
- GET  /health
"""
from __future__ import annotations

import time
from contextlib import asynccontextmanager
from typing import AsyncIterator

from fastapi import FastAPI, Request
from fastapi.responses import StreamingResponse, JSONResponse

from auth import verify_signature
from llm import chat_stream, grade_writing, grade_speaking
from stt import transcribe_bytes, transcribe_upload
from tts import synthesize, ACCENTS
from schemas import (
    ChatRequest,
    GradeWritingRequest,
    GradeWritingResponse,
    GradeSpeakingRequest,
    GradeSpeakingResponse,
    TTSRequest,
    VoiceTurnRequest,
    VoiceTurnResponse,
)

START_TIME = time.time()


@asynccontextmanager
async def lifespan(app: FastAPI):
    # Warm models on first request, not at boot — keeps the container quick to start.
    yield


app = FastAPI(title="IELTS Trainer AI Service", version="0.1.0", lifespan=lifespan)


@app.middleware("http")
async def hmac_auth_middleware(request: Request, call_next):
    if request.url.path == "/health":
        return await call_next(request)
    body = await request.body()
    ok = verify_signature(
        ts=request.headers.get("X-IELTS-Timestamp", ""),
        sig=request.headers.get("X-IELTS-Signature", ""),
        body=body,
    )
    if not ok:
        return JSONResponse({"code": "forbidden", "message": "bad signature"}, status_code=403)

    async def receive_replay() -> dict:
        return {"type": "http.request", "body": body, "more_body": False}

    request._receive = receive_replay  # type: ignore[attr-defined]
    return await call_next(request)


@app.get("/health")
async def health():
    return {"ok": True, "uptime_s": int(time.time() - START_TIME), "accents": list(ACCENTS.keys())}


@app.post("/llm/chat")
async def llm_chat(req: ChatRequest):
    async def gen() -> AsyncIterator[bytes]:
        async for chunk in chat_stream(req):
            yield chunk.encode("utf-8")

    return StreamingResponse(gen(), media_type="text/plain")


@app.post("/grade/writing", response_model=GradeWritingResponse)
async def writing(req: GradeWritingRequest) -> GradeWritingResponse:
    return await grade_writing(req)


@app.post("/grade/speaking", response_model=GradeSpeakingResponse)
async def speaking(req: GradeSpeakingRequest) -> GradeSpeakingResponse:
    return await grade_speaking(req)


@app.post("/stt/transcribe")
async def stt(request: Request):
    return await transcribe_upload(request)


@app.post("/tts/speak")
async def tts(req: TTSRequest):
    return await synthesize(req)


@app.post("/voice/turn", response_model=VoiceTurnResponse)
async def voice_turn(req: VoiceTurnRequest) -> VoiceTurnResponse:
    """One-shot tutor turn: takes prior history + new user text, returns assistant reply + TTS URL."""
    from llm import voice_tutor_turn

    return await voice_tutor_turn(req)
