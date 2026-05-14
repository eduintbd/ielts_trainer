# IELTS Trainer · AI Service

Python FastAPI service that runs on a single GPU VPS. It exposes:

- `/llm/chat` — streaming chat completions via Ollama (Llama 3.1 8B)
- `/grade/writing` — IELTS-rubric writing grading (structured JSON output)
- `/grade/speaking` — Whisper STT + LLM grading
- `/stt/transcribe` — multipart audio → transcript with word timestamps
- `/tts/speak` — Piper TTS → wav (multi-accent)
- `/voice/turn` — STT + LLM + TTS round trip for the voice tutor
- `/health` — public uptime probe

All endpoints (except `/health`) require an HMAC-signed request from the Next.js
app on Vercel. The shared secret is `AI_SERVICE_TOKEN`.

## Local dev (CPU, slow)

```sh
python -m venv .venv
source .venv/bin/activate    # or: .venv\Scripts\Activate.ps1 on Windows
pip install -e .
ollama pull llama3.1:8b-instruct-q5_K_M
ollama serve  # in another terminal
uvicorn main:app --reload --port 8000
```

## Production (GPU VPS)

```sh
docker compose up -d
# wait for ollama to pull the model on first start, then:
docker compose exec ollama ollama pull llama3.1:8b-instruct-q5_K_M
```

### Sizing recommendation
- **Llama 3.1 8B Q5_K_M** fits in ~6 GB VRAM. Single L4 / RTX 4090 / A10G is plenty.
- **Whisper medium** uses ~5 GB VRAM during transcription (CPU mode is fine for small audio files).
- Concurrency: set `--workers 1` (multi-process won't help with GPU bound work).

### Voice files

Piper voices live in `./piper-voices/`. Download from the [Piper releases](https://github.com/rhasspy/piper/releases) page:

```sh
mkdir -p piper-voices && cd piper-voices
wget https://huggingface.co/rhasspy/piper-voices/resolve/main/en/en_GB/alba/medium/en_GB-alba-medium.onnx
wget https://huggingface.co/rhasspy/piper-voices/resolve/main/en/en_GB/alba/medium/en_GB-alba-medium.onnx.json
# repeat for en_US-amy, en_AU-paige, en_IN-sarah
```

Mind the licenses — some voices are CC0, some CC-BY 4.0.
