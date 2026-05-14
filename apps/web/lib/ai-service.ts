import crypto from 'node:crypto';

/** Client for the GPU-VPS-hosted FastAPI inference service. */
export class AiServiceClient {
  constructor(
    private readonly baseUrl = process.env.AI_SERVICE_URL ?? 'http://localhost:8000',
    private readonly token = process.env.AI_SERVICE_TOKEN ?? '',
  ) {}

  private signedHeaders(body: string): Record<string, string> {
    const ts = Date.now().toString();
    const mac = crypto
      .createHmac('sha256', this.token)
      .update(`${ts}.${body}`)
      .digest('hex');
    return {
      'Content-Type': 'application/json',
      'X-IELTS-Timestamp': ts,
      'X-IELTS-Signature': mac,
    };
  }

  async post<T>(path: string, body: unknown): Promise<T> {
    const json = JSON.stringify(body);
    const res = await fetch(`${this.baseUrl}${path}`, {
      method: 'POST',
      headers: this.signedHeaders(json),
      body: json,
    });
    if (!res.ok) throw new Error(`AI service ${path} failed: ${res.status} ${await res.text()}`);
    return (await res.json()) as T;
  }

  /** Stream tokens from the LLM endpoint as SSE. */
  async stream(path: string, body: unknown, signal?: AbortSignal): Promise<ReadableStream<Uint8Array>> {
    const json = JSON.stringify(body);
    const res = await fetch(`${this.baseUrl}${path}`, {
      method: 'POST',
      headers: { ...this.signedHeaders(json), Accept: 'text/event-stream' },
      body: json,
      signal,
    });
    if (!res.ok || !res.body) throw new Error(`AI service ${path} failed: ${res.status}`);
    return res.body;
  }

  async transcribe(audio: ArrayBuffer, language: 'auto' | 'en' | 'bn' = 'auto'): Promise<{
    text: string;
    language: string;
    durationMs: number;
    words: Array<{ word: string; startMs: number; endMs: number }>;
  }> {
    const form = new FormData();
    form.append('audio', new Blob([audio]), 'audio.webm');
    form.append('language', language);
    const ts = Date.now().toString();
    const mac = crypto.createHmac('sha256', this.token).update(`${ts}.transcribe`).digest('hex');
    const res = await fetch(`${this.baseUrl}/stt/transcribe`, {
      method: 'POST',
      headers: { 'X-IELTS-Timestamp': ts, 'X-IELTS-Signature': mac },
      body: form,
    });
    if (!res.ok) throw new Error(`STT failed: ${res.status}`);
    return res.json();
  }
}

export const aiService = new AiServiceClient();
