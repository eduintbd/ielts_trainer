export const dynamic = 'force-dynamic';
import Link from 'next/link';
import {
  ArrowRight,
  Flame,
  Mic,
  BookOpen,
  Sparkles,
  PenLine,
  Headphones,
  Languages,
  Compass,
} from 'lucide-react';
import { getSessionUser } from '@/lib/session';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default async function DashboardPage() {
  const user = (await getSessionUser())!;
  const exam = user.targetExam ?? 'IELTS';
  const examHref = exam === 'TOEFL' ? '/toefl' : exam === 'PTE' ? '/pte' : '/ielts';

  return (
    <div className="mx-auto max-w-6xl space-y-6 p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold">Welcome back, {user.name.split(' ')[0]}.</h1>
          <p className="text-sm text-muted-foreground">
            Target: <span className="font-medium text-foreground">{exam}</span>
          </p>
        </div>
        <div className="flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1.5 text-sm">
          <Flame className="h-4 w-4 text-accent" />
          <span className="font-medium">0-day streak</span>
        </div>
      </div>

      <Card className="bg-primary/5">
        <CardHeader>
          <CardTitle className="text-base">Today&apos;s 30-minute routine</CardTitle>
          <CardDescription>
            Built around four daily habits. Skip a card if you have already done it elsewhere.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ol className="grid gap-3 md:grid-cols-2">
            <li className="rounded-lg border bg-card p-3 text-sm">
              <span className="font-semibold">10 min</span> · Voice coach — pronunciation or shadowing.{' '}
              <Link href="/voice" className="text-primary hover:underline">Open →</Link>
            </li>
            <li className="rounded-lg border bg-card p-3 text-sm">
              <span className="font-semibold">10 min</span> · One writing paragraph to the AI tutor.{' '}
              <Link href="/ai-instructor" className="text-primary hover:underline">Open →</Link>
            </li>
            <li className="rounded-lg border bg-card p-3 text-sm">
              <span className="font-semibold">5 min</span> · Vocab review — clear today&apos;s due cards.{' '}
              <Link href="/vocab" className="text-primary hover:underline">Open →</Link>
            </li>
            <li className="rounded-lg border bg-card p-3 text-sm">
              <span className="font-semibold">5 min</span> · One BBC clip — listening + read along.{' '}
              <Link href="/english/listening" className="text-primary hover:underline">Open →</Link>
            </li>
          </ol>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <BookOpen className="h-5 w-5 text-primary" />
            <CardTitle>Take a mock test</CardTitle>
            <CardDescription>Full-length, timed, scored.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link href="/tests">Browse tests <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Mic className="h-5 w-5 text-primary" />
            <CardTitle>Practice speaking</CardTitle>
            <CardDescription>15 minutes with the AI examiner.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link href="/voice">Start session <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Sparkles className="h-5 w-5 text-primary" />
            <CardTitle>Vocabulary review</CardTitle>
            <CardDescription>0 cards due today.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild variant="outline" className="w-full">
              <Link href="/vocab">Open vocab <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <Languages className="h-5 w-5 text-primary" />
            <CardTitle>Master English first</CardTitle>
            <CardDescription>The four-skill curriculum built for Bangla speakers.</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-2 text-sm">
            <Link href="/english/speaking" className="rounded-md border p-2 hover:bg-muted">
              <Mic className="mb-1 h-4 w-4 text-primary" /> Speaking
            </Link>
            <Link href="/english/writing" className="rounded-md border p-2 hover:bg-muted">
              <PenLine className="mb-1 h-4 w-4 text-primary" /> Writing
            </Link>
            <Link href="/english/listening" className="rounded-md border p-2 hover:bg-muted">
              <Headphones className="mb-1 h-4 w-4 text-primary" /> Listening
            </Link>
            <Link href="/english/reading" className="rounded-md border p-2 hover:bg-muted">
              <BookOpen className="mb-1 h-4 w-4 text-primary" /> Reading
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Compass className="h-5 w-5 text-primary" />
            <CardTitle>Your exam: {exam}</CardTitle>
            <CardDescription>
              Section-by-section strategy, scoring, and the 90-day plan.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild variant="outline" className="w-full">
              <Link href={examHref}>
                Open the {exam} guide <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent activity</CardTitle>
          <CardDescription>Your tests, lessons, and voice sessions show up here.</CardDescription>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          You haven&apos;t started anything yet. The single best first move is a baseline mock test — it tells the AI
          tutor your weakest skill and unlocks personalised feedback.
        </CardContent>
      </Card>
    </div>
  );
}
