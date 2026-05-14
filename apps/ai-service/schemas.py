from __future__ import annotations

from typing import Literal

from pydantic import BaseModel, Field


class ChatMessage(BaseModel):
    role: Literal["system", "user", "assistant"]
    content: str


class ChatRequest(BaseModel):
    systemPrompt: str | None = None
    messages: list[ChatMessage]
    user: dict | None = None
    temperature: float = 0.7
    max_tokens: int = 1024


class WritingBands(BaseModel):
    taskAchievement: float = Field(ge=0, le=9)
    coherence: float = Field(ge=0, le=9)
    lexical: float = Field(ge=0, le=9)
    grammar: float = Field(ge=0, le=9)
    band: float = Field(ge=0, le=9)


class SpeakingBands(BaseModel):
    fluency: float = Field(ge=0, le=9)
    lexical: float = Field(ge=0, le=9)
    grammar: float = Field(ge=0, le=9)
    pronunciation: float = Field(ge=0, le=9)
    band: float = Field(ge=0, le=9)


class Correction(BaseModel):
    original: str
    corrected: str
    reason: str
    category: Literal["grammar", "lexical", "spelling", "punctuation", "style"]
    startIndex: int
    endIndex: int


class GradeWritingRequest(BaseModel):
    rubric: str
    attemptId: str
    questionId: str
    prompt: str
    responseText: str
    taskKind: Literal["task1", "task2", "integrated", "independent"]


class GradeWritingResponse(BaseModel):
    bands: WritingBands
    feedbackMd: str
    corrections: list[Correction] = []
    improvementHints: list[str] = []


class GradeSpeakingRequest(BaseModel):
    rubric: str
    attemptId: str
    questionId: str
    audioBlobKey: str  # Vercel Blob URL
    prompt: str


class GradeSpeakingResponse(BaseModel):
    bands: SpeakingBands
    transcript: str
    wordsPerMinute: float
    fillerCount: int
    pauseCount: int
    feedbackMd: str
    corrections: list[Correction] = []


class TTSRequest(BaseModel):
    text: str
    accent: str = "british"


class VoiceTurnRequest(BaseModel):
    systemPrompt: str
    history: list[dict]
    userText: str
    accent: str = "british"


class VoiceTurnResponse(BaseModel):
    text: str
    ttsBlobKey: str  # public URL of the TTS audio
