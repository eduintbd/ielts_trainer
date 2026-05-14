import { NextResponse } from 'next/server';
import { db, schema, eq } from '@ielts/db';
import type { VoiceTurn } from '@ielts/db/schema';
import { put } from '@vercel/blob';
import { getSessionUser } from '@/lib/session';
import { aiService } from '@/lib/ai-service';
import { VOICE_TUTOR_SYSTEM_PROMPTS } from '@ielts/grading';

export const runtime = 'nodejs';
export const maxDuration = 300;

export async function POST(req: Request) {
  const user = await getSessionUser();
  if (!user) return NextResponse.json({ code: 'unauthorized' }, { status: 401 });

  const form = await req.formData();
  const audio = form.get('audio') as File | null;
  const sessionId = form.get('sessionId') as string | null;
  if (!audio || !sessionId) {
    return NextResponse.json({ code: 'bad_request', message: 'audio and sessionId required' }, { status: 400 });
  }

  const session = await db.query.voiceSessions.findFirst({
    where: (s, { eq, and }) => and(eq(s.id, sessionId), eq(s.userId, user.id)),
  });
  if (!session) return NextResponse.json({ code: 'not_found' }, { status: 404 });

  // 1. Upload user audio to Blob (private, signed)
  const audioBuf = await audio.arrayBuffer();
  const userAudioBlob = await put(`voice/${user.id}/${sessionId}/${Date.now()}-user.webm`, audioBuf, {
    access: 'public', // public signed URLs are required for <audio src=...> playback
    contentType: audio.type || 'audio/webm',
  });

  // 2. Transcribe via AI service
  const stt = await aiService.transcribe(audioBuf, 'auto');

  // 3. Build LLM context from prior turns
  const priorTurns: VoiceTurn[] = session.transcriptJson ?? [];
  const systemPrompt = VOICE_TUTOR_SYSTEM_PROMPTS[session.mode] ?? VOICE_TUTOR_SYSTEM_PROMPTS.free_conversation!;

  const llm = await aiService.post<{ text: string; ttsBlobKey: string }>('/voice/turn', {
    systemPrompt,
    history: priorTurns,
    userText: stt.text,
    accent: session.accent,
  });

  // 4. Append to transcript and persist
  const newTurns: VoiceTurn[] = [
    ...priorTurns,
    {
      role: 'user',
      text: stt.text,
      audioBlobKey: userAudioBlob.url,
      startMs: 0,
      endMs: stt.durationMs,
    },
    {
      role: 'assistant',
      text: llm.text,
      audioBlobKey: llm.ttsBlobKey,
      startMs: 0,
      endMs: 0,
    },
  ];

  await db
    .update(schema.voiceSessions)
    .set({
      transcriptJson: newTurns,
      durationSeconds: (session.durationSeconds ?? 0) + Math.round(stt.durationMs / 1000),
    })
    .where(eq(schema.voiceSessions.id, sessionId));

  return NextResponse.json({
    userText: stt.text,
    assistantText: llm.text,
    ttsUrl: llm.ttsBlobKey,
  });
}
