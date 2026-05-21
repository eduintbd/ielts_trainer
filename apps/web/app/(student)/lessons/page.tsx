export const dynamic = 'force-dynamic';
import Link from 'next/link';
import {
  BookOpen,
  Mic,
  PenLine,
  Headphones,
  Type,
  Languages,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const TRACKS = [
  {
    href: '/english/speaking',
    icon: Mic,
    title: 'Speaking',
    description: 'Shadowing, voice coach, the daily 60-second monologue habit.',
    lessons: 18,
  },
  {
    href: '/english/writing',
    icon: PenLine,
    title: 'Writing',
    description: 'Paragraph templates, the translation trap, AI essay reviews.',
    lessons: 22,
  },
  {
    href: '/english/listening',
    icon: Headphones,
    title: 'Listening',
    description: 'Four-week ladder across five accents.',
    lessons: 16,
  },
  {
    href: '/english/reading',
    icon: BookOpen,
    title: 'Reading',
    description: 'Skim, scan, the four-pass method, exam-speed practice.',
    lessons: 14,
  },
  {
    href: '/english/grammar',
    icon: Type,
    title: 'Grammar',
    description: 'The 12 leaks Bangla speakers share, fixed once.',
    lessons: 24,
  },
  {
    href: '/english/pronunciation',
    icon: Languages,
    title: 'Pronunciation',
    description: 'V/W, P/F, S/Sh, schwa, sentence stress.',
    lessons: 12,
  },
];

const EXAM_TRACKS = [
  {
    href: '/ielts',
    title: 'IELTS prep track',
    description: 'Academic and General Training. 90-day plan, four modules.',
  },
  {
    href: '/toefl',
    title: 'TOEFL iBT prep track',
    description: 'Integrated tasks, US-academic English, 100+ target plans.',
  },
  {
    href: '/pte',
    title: 'PTE Academic prep track',
    description: 'AI-graded items, 60-day plan, 79+ for Australia PR.',
  },
];

export default function LessonsPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-8 p-6">
      <div>
        <h1 className="text-2xl font-bold">Lessons</h1>
        <p className="text-sm text-muted-foreground">
          Pick a skill to master, or an exam track to follow. Lessons are 5-15 minutes each — short by design.
        </p>
      </div>

      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-primary" />
          <h2 className="text-lg font-semibold">English mastery tracks</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {TRACKS.map(({ href, icon: Icon, title, description, lessons }) => (
            <Card key={href}>
              <CardHeader>
                <Icon className="h-5 w-5 text-primary" />
                <CardTitle className="text-base">{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-3 text-xs text-muted-foreground">{lessons} lessons · self-paced</p>
                <Button asChild variant="outline" className="w-full">
                  <Link href={href}>
                    Open track <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Exam-specific tracks</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {EXAM_TRACKS.map(({ href, title, description }) => (
            <Card key={href}>
              <CardHeader>
                <CardTitle className="text-base">{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link href={href}>Open guide</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <Card>
          <CardHeader>
            <CardTitle>Stuck on what to do first?</CardTitle>
            <CardDescription>
              Take a baseline mock test. The system uses your weakest section to recommend the next lesson.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <Link href="/tests">
                Browse mock tests <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
