import Link from 'next/link';
import { Mic, PenLine, Headphones, BookOpen, Type, Languages, ArrowRight, Sparkles } from 'lucide-react';
import { SiteShell, Section, Tile } from '@/components/site-shell';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'English Mastery for Bangladeshi Students · IELTS Trainer',
  description:
    'A four-skill English curriculum built specifically for Bangla speakers. Master speaking, writing, listening, and reading before you sit IELTS, TOEFL or PTE.',
};

const SKILLS = [
  {
    href: '/english/speaking',
    icon: Mic,
    title: 'Speaking',
    summary: 'From silent reader to confident speaker in 90 days. Daily shadowing, voice coach, accent training.',
  },
  {
    href: '/english/writing',
    icon: PenLine,
    title: 'Writing',
    summary: 'Stop translating Bangla sentences into English. Learn to think in paragraphs, not words.',
  },
  {
    href: '/english/listening',
    icon: Headphones,
    title: 'Listening',
    summary: 'British, American, Australian, Indian accents. Trained ear in 8 weeks.',
  },
  {
    href: '/english/reading',
    icon: BookOpen,
    title: 'Reading',
    summary: 'Skim, scan, and understand academic English without translating every word.',
  },
  {
    href: '/english/grammar',
    icon: Type,
    title: 'Grammar',
    summary: 'The 20 mistakes that cost Bangla speakers half a band. Fix them once, forever.',
  },
  {
    href: '/english/pronunciation',
    icon: Languages,
    title: 'Pronunciation',
    summary: 'V/W, P/F, S/Sh, schwa, sentence stress — the exact sounds that mark you as a Bangla speaker.',
  },
] as const;

export default function EnglishHubPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-4xl px-4 py-16 text-center">
        <p className="text-sm font-medium uppercase tracking-wide text-primary">English Mastery</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
          Master the language first.
          <br />
          <span className="text-primary">The score will follow.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground md:text-lg">
          IELTS, TOEFL, PTE — none of them are English tests in disguise. They <em>are</em> English tests. If you can
          read a New York Times article, follow a BBC podcast, write a 300-word email, and hold a 10-minute conversation
          without panicking, the exam is a formality. This is where we start.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Button asChild size="lg">
            <Link href="/sign-up">
              Start free <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="#path">See the 90-day path</Link>
          </Button>
        </div>
      </section>

      <Section
        id="skills"
        title="The four core skills, in order"
        subtitle="Most Bangladeshi students are strong in reading, weak in speaking, terrified of writing, and confused by listening. We rebuild each skill independently."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map(({ href, icon: Icon, title, summary }) => (
            <Link key={href} href={href} className="block">
              <div className="h-full rounded-lg border bg-card p-5 transition hover:border-primary hover:shadow-sm">
                <Icon className="h-7 w-7 text-primary" />
                <h3 className="mt-3 font-semibold">{title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{summary}</p>
                <p className="mt-3 text-sm font-medium text-primary">Open module →</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section
        id="path"
        title="The 90-day path from school English to test-ready English"
        subtitle="Built around 30 minutes a day. Yes, only 30. Daily beats marathon — every student we tracked who jumped two bands followed this pattern."
      >
        <ol className="space-y-4">
          <li className="rounded-lg border bg-card p-5">
            <p className="text-xs font-semibold uppercase text-primary">Days 1–14 · Diagnostic + Habit</p>
            <p className="mt-2 text-sm">
              Take a baseline mock test. Set up the voice coach. Build the 10-min/day shadowing habit using BBC Learning
              English. The goal is not progress yet — it is showing up daily.
            </p>
          </li>
          <li className="rounded-lg border bg-card p-5">
            <p className="text-xs font-semibold uppercase text-primary">Days 15–45 · Foundation Repair</p>
            <p className="mt-2 text-sm">
              Plug the leaks. Bangla speakers usually need: tense agreement, articles (a / an / the), preposition
              choice, and pluralisation. The Grammar module drills exactly these.
            </p>
          </li>
          <li className="rounded-lg border bg-card p-5">
            <p className="text-xs font-semibold uppercase text-primary">Days 46–75 · Skill Stack</p>
            <p className="mt-2 text-sm">
              Now we stack: daily shadowing (speaking + listening + pronunciation in one go) plus three 200-word
              opinion paragraphs per week, reviewed by the AI tutor.
            </p>
          </li>
          <li className="rounded-lg border bg-card p-5">
            <p className="text-xs font-semibold uppercase text-primary">Days 76–90 · Exam Tactics</p>
            <p className="mt-2 text-sm">
              Only now do we touch exam tricks — task-1 templates, IELTS speaking part 2 framework, TOEFL integrated
              writing structure, PTE describe-image scripts. Built on top of real skill, not as a substitute.
            </p>
          </li>
        </ol>
      </Section>

      <Section
        title="Why this works for Bangla speakers specifically"
        subtitle="We did not just translate an American curriculum. We rebuilt one."
      >
        <div className="grid gap-4 md:grid-cols-2">
          <Tile title="We know which sounds you struggle with">
            স vs শ does not exist in English, but V/W and P/F do, and Bangla doesn't separate them clearly. The voice
            coach listens for exactly these substitutions and corrects you in real time.
          </Tile>
          <Tile title="We know your translation habit">
            You write a Bangla sentence in your head, then translate. That is why your essays have run-on sentences and
            missing articles. We teach you to draft directly in English using paragraph templates.
          </Tile>
          <Tile title="We give feedback in Bangla when it helps">
            Grammar explanations, idiom meanings, and tough vocabulary all have a Bangla toggle. We don't pretend
            English-only is faster — it isn't, not in the early months.
          </Tile>
          <Tile title="We respect your time">
            School, coaching, family — you are busy. Every lesson is 5–15 minutes. The AI remembers where you stopped.
            Open the app on the bus, close it on arrival.
          </Tile>
        </div>
      </Section>

      <Section
        title="Free habits anyone can start tonight"
        subtitle="If you cannot use IELTS Trainer yet, do these. They are the same habits we built the curriculum around."
      >
        <ul className="grid gap-3 text-sm md:grid-cols-2">
          <li className="flex gap-3 rounded-lg border bg-card p-4">
            <Sparkles className="h-4 w-4 shrink-0 text-primary" />
            <span><span className="font-semibold">Shadow one minute of audio daily.</span> Find a BBC clip, play one
              sentence, pause, repeat it out loud copying the intonation. Repeat for ten minutes.</span>
          </li>
          <li className="flex gap-3 rounded-lg border bg-card p-4">
            <Sparkles className="h-4 w-4 shrink-0 text-primary" />
            <span><span className="font-semibold">Read aloud for ten minutes.</span> The Daily Star editorial works.
              Reading silently builds vocabulary but not speech muscles — your mouth needs to learn the shapes.</span>
          </li>
          <li className="flex gap-3 rounded-lg border bg-card p-4">
            <Sparkles className="h-4 w-4 shrink-0 text-primary" />
            <span><span className="font-semibold">Write a 5-sentence diary entry every night.</span> In English. About
              today. Don't worry about grammar — worry about not skipping a day.</span>
          </li>
          <li className="flex gap-3 rounded-lg border bg-card p-4">
            <Sparkles className="h-4 w-4 shrink-0 text-primary" />
            <span><span className="font-semibold">Switch your phone to English.</span> Free, instant, constant
              exposure. Your friends' WhatsApps will still be in Bangla — that's fine.</span>
          </li>
        </ul>
      </Section>

      <Section title="Ready to start?">
        <div className="rounded-lg border bg-card p-6">
          <h3 className="text-xl font-bold">Take the 5-minute placement quiz</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            We figure out your current level across all four skills, then build a personalised plan. Honest answers
            beat optimistic ones — the system adapts.
          </p>
          <div className="mt-4 flex gap-3">
            <Button asChild>
              <Link href="/sign-up">
                Create free account <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/ielts">I'm targeting IELTS</Link>
            </Button>
          </div>
        </div>
      </Section>
    </SiteShell>
  );
}
