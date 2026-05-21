export const dynamic = 'force-dynamic';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Mic } from 'lucide-react';

const GROUPS = [
  {
    label: 'English mastery',
    modes: [
      { key: 'free_conversation', name: 'Free conversation', description: 'Chat naturally with an AI partner. The fastest way to lose your speaking anxiety.' },
      { key: 'pronunciation_drill', name: 'Pronunciation drill', description: 'V/W, P/F, S/Sh, schwa, sentence stress — the sounds Bangla speakers mis-form most.' },
      { key: 'shadowing', name: 'Shadowing practice', description: 'Listen to a native sentence, repeat it copying intonation. The single best speaking exercise.' },
      { key: 'read_aloud', name: 'Read aloud', description: 'A short passage, read at conversational speed. Scores fluency and clarity.' },
      { key: 'sixty_second_monologue', name: '60-second monologue', description: 'Random topic, one minute, no stopping. Builds confidence and recovery skills.' },
      { key: 'translate_bn_en', name: 'Bangla → English', description: 'Real Bangla sentences from daily life. Practice direct thinking, not translation.' },
      { key: 'translate_en_bn', name: 'English → Bangla', description: 'Reverse-direction practice. Sharpens both languages.' },
      { key: 'listening_drill', name: 'Listening drill', description: 'Multi-accent passages then comprehension questions. Builds the trained ear.' },
    ],
  },
  {
    label: 'IELTS speaking',
    modes: [
      { key: 'speaking_part_1', name: 'IELTS Speaking · Part 1', description: 'Personal questions, 4-5 minutes. Warm-up, casual register.' },
      { key: 'speaking_part_2', name: 'IELTS Speaking · Part 2', description: 'Cue card, 1-minute prep + 2-minute long turn.' },
      { key: 'speaking_part_3', name: 'IELTS Speaking · Part 3', description: 'Discussion of abstract ideas from your Part 2 topic.' },
    ],
  },
  {
    label: 'TOEFL & PTE speaking',
    modes: [
      { key: 'toefl_independent', name: 'TOEFL · Independent task', description: '15s prep, 45s answer. Pre-built template practice.' },
      { key: 'toefl_integrated', name: 'TOEFL · Integrated tasks', description: 'Read + listen + speak. The hardest combo for most candidates.' },
      { key: 'pte_read_aloud', name: 'PTE · Read Aloud', description: 'AI-graded clarity drill. Volume matters, hesitation kills.' },
      { key: 'pte_describe_image', name: 'PTE · Describe Image', description: '40-second descriptions using a templated structure.' },
      { key: 'pte_retell_lecture', name: 'PTE · Re-tell Lecture', description: '90s lecture → 40s summary in your own words.' },
    ],
  },
] as const;

export default function VoiceModesPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-8 p-6">
      <div>
        <h1 className="text-2xl font-bold">Voice coach</h1>
        <p className="text-sm text-muted-foreground">
          Pick a mode. Your mic stays in your browser — we only stream what you say. Most sessions are 5-15 minutes.
        </p>
      </div>

      {GROUPS.map((group) => (
        <section key={group.label} className="space-y-3">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">{group.label}</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {group.modes.map((m) => (
              <Card key={m.key}>
                <CardHeader>
                  <Mic className="h-5 w-5 text-primary" />
                  <CardTitle className="text-base">{m.name}</CardTitle>
                  <CardDescription>{m.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <Link href={`/voice/session?mode=${m.key}`}>Start</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
