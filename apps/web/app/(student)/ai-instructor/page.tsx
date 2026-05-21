export const dynamic = 'force-dynamic';
'use client';

import { useState, useRef, useEffect } from 'react';
import { Send, Loader2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type Msg = { role: 'user' | 'assistant'; content: string };

export default function AiInstructorPage() {
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: 'assistant',
      content:
        "Hi! I'm your AI Instructor. I can:\n\n- Grade your IELTS / TOEFL / PTE essay (paste it below)\n- Explain a grammar mistake in Bangla or English\n- Build a 7-day study plan from your weakest skill\n- Drill you on Speaking Part 2 with a fresh cue card\n- Translate any tricky Bangla sentence into natural English\n\nWhat do you want to work on tonight?",
    },
  ]);
  const [input, setInput] = useState('');
  const [streaming, setStreaming] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages]);

  async function send() {
    if (!input.trim() || streaming) return;
    const userMsg: Msg = { role: 'user', content: input };
    setMessages((m) => [...m, userMsg, { role: 'assistant', content: '' }]);
    setInput('');
    setStreaming(true);

    try {
      const res = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, userMsg] }),
      });
      if (!res.ok || !res.body) throw new Error('stream failed');
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value);
        setMessages((m) => {
          const next = [...m];
          next[next.length - 1] = { role: 'assistant', content: next[next.length - 1]!.content + chunk };
          return next;
        });
      }
    } catch (err) {
      setMessages((m) => {
        const next = [...m];
        next[next.length - 1] = {
          role: 'assistant',
          content: `Sorry, something went wrong: ${err instanceof Error ? err.message : 'unknown error'}`,
        };
        return next;
      });
    } finally {
      setStreaming(false);
    }
  }

  return (
    <div className="mx-auto flex h-[calc(100vh-0px)] max-w-3xl flex-col p-6">
      <Card className="flex flex-1 flex-col overflow-hidden">
        <CardHeader>
          <CardTitle>AI Instructor</CardTitle>
        </CardHeader>
        <CardContent ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`max-w-[85%] rounded-lg p-3 text-sm ${
                m.role === 'user' ? 'ml-auto bg-primary text-primary-foreground' : 'bg-muted'
              }`}
            >
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{m.content || '…'}</ReactMarkdown>
            </div>
          ))}
        </CardContent>
        <div className="flex gap-2 border-t p-3">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask anything about IELTS, TOEFL, or PTE…"
            onKeyDown={(e) => e.key === 'Enter' && send()}
            disabled={streaming}
          />
          <Button onClick={send} disabled={streaming || !input.trim()}>
            {streaming ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
          </Button>
        </div>
      </Card>
    </div>
  );
}
