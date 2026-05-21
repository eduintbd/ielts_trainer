'use client';

export const dynamic = 'force-dynamic';

import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Mic, Square, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type Turn = { role: 'user' | 'assistant'; text: string };

export default function VoiceSessionPage() {
  const params = useSearchParams();
  const mode = params.get('mode') ?? 'free_conversation';

  const [sessionId, setSessionId] = useState<string | null>(null);
  const [recording, setRecording] = useState(false);
  const [busy, setBusy] = useState(false);
  const [turns, setTurns] = useState<Turn[]>([]);
  const recorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const res = await fetch('/api/voice/start', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mode, accent: 'british' }),
      });
      if (!res.ok) {
        toast.error('Could not start voice session.');
        return;
      }
      const data = await res.json();
      if (!cancelled) setSessionId(data.sessionId);
    })();
    return () => {
      cancelled = true;
    };
  }, [mode]);

  async function startRecording() {
    if (!sessionId) return;
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream, { mimeType: 'audio/webm' });
      chunksRef.current = [];
      recorder.ondataavailable = (e) => e.data.size > 0 && chunksRef.current.push(e.data);
      recorder.onstop = onRecordingStopped;
      recorder.start();
      recorderRef.current = recorder;
      setRecording(true);
    } catch {
      toast.error('Microphone permission denied.');
    }
  }

  function stopRecording() {
    recorderRef.current?.stop();
    recorderRef.current?.stream.getTracks().forEach((t) => t.stop());
    setRecording(false);
  }

  async function onRecordingStopped() {
    if (!sessionId) return;
    setBusy(true);
    try {
      const blob = new Blob(chunksRef.current, { type: 'audio/webm' });
      const fd = new FormData();
      fd.append('audio', blob, 'turn.webm');
      fd.append('sessionId', sessionId);

      const res = await fetch('/api/voice/turn', { method: 'POST', body: fd });
      if (!res.ok) throw new Error('voice turn failed');
      const data = (await res.json()) as { userText: string; assistantText: string; ttsUrl?: string };

      setTurns((prev) => [
        ...prev,
        { role: 'user', text: data.userText },
        { role: 'assistant', text: data.assistantText },
      ]);
      if (data.ttsUrl) {
        const audio = new Audio(data.ttsUrl);
        await audio.play().catch(() => {});
      }
    } catch (err) {
      toast.error(err instanceof Error ? err.message : 'Turn failed');
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="mx-auto flex min-h-[calc(100vh-0px)] max-w-3xl flex-col p-6">
      <Card className="flex-1 overflow-hidden">
        <CardHeader>
          <CardTitle>Voice session · {mode.replaceAll('_', ' ')}</CardTitle>
        </CardHeader>
        <CardContent className="flex h-[calc(100vh-220px)] flex-col gap-3 overflow-y-auto">
          {turns.length === 0 ? (
            <p className="m-auto text-sm text-muted-foreground">
              Press the mic and start speaking. Press stop when you&apos;re done with a turn.
            </p>
          ) : (
            turns.map((t, i) => (
              <div
                key={i}
                className={`max-w-[80%] rounded-lg p-3 text-sm ${
                  t.role === 'user' ? 'ml-auto bg-primary text-primary-foreground' : 'bg-muted'
                }`}
              >
                {t.text}
              </div>
            ))
          )}
        </CardContent>
      </Card>

      <div className="mt-4 flex justify-center">
        {recording ? (
          <Button size="lg" variant="destructive" onClick={stopRecording}>
            <Square className="mr-2 h-4 w-4" /> Stop
          </Button>
        ) : (
          <Button size="lg" onClick={startRecording} disabled={!sessionId || busy}>
            {busy ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Mic className="mr-2 h-4 w-4" />}
            {busy ? 'Processing…' : 'Start speaking'}
          </Button>
        )}
      </div>
    </div>
  );
}
