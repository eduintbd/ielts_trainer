'use client';

import Link from 'next/link';
import {
  ArrowRight,
  BookOpen,
  Headphones,
  Mic,
  MessageSquare,
  Trophy,
  Globe,
  PenLine,
  Type,
  Languages,
  GraduationCap,
  ClipboardList,
} from 'lucide-react';
import { SiteShell, Section, Tile } from '@/components/site-shell';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/providers/language-provider';

const SKILLS = [
  { href: '/english/speaking', icon: Mic, titleKey: 'footer.speaking' as const, summary: 'Daily voice coach, shadowing, accent training.' },
  { href: '/english/writing', icon: PenLine, titleKey: 'footer.writing' as const, summary: 'Paragraph templates, AI essay feedback.' },
  { href: '/english/listening', icon: Headphones, titleKey: 'footer.listening' as const, summary: 'Five accents, four difficulty tiers.' },
  { href: '/english/reading', icon: BookOpen, titleKey: 'footer.reading' as const, summary: 'Skim, scan, four-pass method.' },
  { href: '/english/grammar', icon: Type, titleKey: 'footer.grammar' as const, summary: 'The 12 leaks Bangla speakers share.' },
  { href: '/english/pronunciation', icon: Languages, titleKey: 'footer.pronunciation' as const, summary: 'V/W, P/F, S/Sh, schwa, stress.' },
];

const EXAMS = [
  {
    href: '/ielts',
    badge: 'For UK · Australia · Canada',
    title: 'IELTS',
    bullets: ['Academic & General Training', 'Computer or paper-delivered', 'Band 5.5 → 8.0 plans'],
  },
  {
    href: '/toefl',
    badge: 'For the US',
    title: 'TOEFL iBT',
    bullets: ['Fully computer-delivered', 'Integrated reading + listening + writing', 'Score 0–120, target 100+'],
  },
  {
    href: '/pte',
    badge: 'Fast results · Australia / NZ',
    title: 'PTE Academic',
    bullets: ['AI-graded, 48-hour results', '20 item types across 3 parts', 'Score 10–90, target 79+'],
  },
];

const FEATURES = [
  { icon: BookOpen, title: 'Full mock tests', description: 'IELTS, TOEFL & PTE — sectioned, timed, scored exactly like the real exam.' },
  { icon: Mic, title: 'AI voice coach', description: 'Practice speaking with multi-accent AI. Real-time pronunciation & grammar correction.' },
  { icon: Headphones, title: 'Listening practice', description: 'British, American, Australian, Indian accents. Difficulty from beginner to expert.' },
  { icon: MessageSquare, title: 'AI Instructor', description: 'Personalised feedback that learns your weak spots over time.' },
  { icon: Trophy, title: 'Gamified progress', description: 'XP, streaks, badges and leaderboards keep you studying daily.' },
  { icon: Globe, title: 'Bangla support', description: 'Bilingual UI. AI translation, mistake explanations in Bangla, native-tone Bangla→English coaching.' },
];

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <SiteShell>
      {/* Hero */}
      <section className="mx-auto max-w-4xl px-4 py-20 text-center">
        <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
          {t('home.hero.line1')}
          <br />
          <span className="text-primary">{t('home.hero.line2')}</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          {t('home.hero.subtitle')}
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Button asChild size="lg">
            <Link href="/sign-up">
              {t('home.hero.cta.start')} <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/english">{t('home.hero.cta.explore')}</Link>
          </Button>
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
          <span>{t('home.hero.pill1')}</span>
          <span aria-hidden>·</span>
          <span>{t('home.hero.pill2')}</span>
          <span aria-hidden>·</span>
          <span>{t('home.hero.pill3')}</span>
        </div>
      </section>

      {/* Placement test CTA banner */}
      <section className="mx-auto max-w-6xl px-4">
        <div className="flex items-center gap-4 rounded-xl border border-primary/20 bg-primary/5 p-5">
          <ClipboardList className="h-8 w-8 shrink-0 text-primary" />
          <div className="flex-1">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">{t('placement.badge')}</p>
            <p className="mt-0.5 font-semibold">{t('placement.title')}</p>
            <p className="text-sm text-muted-foreground">{t('placement.subtitle')}</p>
          </div>
          <Button asChild>
            <Link href="/placement-test">
              {t('placement.cta')} <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Skills */}
      <Section
        title="Step 1 — Master the language"
        subtitle="No test prep platform can shortcut English itself. Speak, write, listen, read — every day. The exam will follow."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map(({ href, icon: Icon, titleKey, summary }) => (
            <Link key={href} href={href} className="block">
              <div className="h-full rounded-lg border bg-card p-5 transition hover:border-primary hover:shadow-sm">
                <Icon className="h-7 w-7 text-primary" />
                <h3 className="mt-3 font-semibold">{t(titleKey)}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{summary}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Button asChild variant="outline">
            <Link href="/english">
              Open the English Mastery hub <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Section>

      {/* Exams */}
      <Section
        title="Step 2 — Choose your exam"
        subtitle="The right test depends on where you're applying. We've broken down each, with realistic targets for Bangladeshi candidates."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {EXAMS.map((exam) => (
            <Link key={exam.href} href={exam.href} className="block">
              <div className="h-full rounded-lg border bg-card p-5 transition hover:border-primary hover:shadow-sm">
                <GraduationCap className="h-7 w-7 text-primary" />
                <p className="mt-3 text-xs font-semibold uppercase text-primary">{exam.badge}</p>
                <h3 className="mt-1 text-xl font-bold">{exam.title}</h3>
                <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                  {exam.bullets.map((b) => (
                    <li key={b}>· {b}</li>
                  ))}
                </ul>
                <p className="mt-4 text-sm font-medium text-primary">Read the guide →</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Button asChild variant="outline">
            <Link href="/courses">
              {t('courses.browse')} <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Section>

      {/* Features */}
      <Section title="Step 3 — Use the tools" subtitle="Built into every plan. Free tier included.">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ icon: Icon, title, description }) => (
            <div key={title} className="rounded-lg border bg-card p-6">
              <Icon className="h-8 w-8 text-primary" />
              <h3 className="mt-4 font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Why */}
      <Section title="Why students keep coming back">
        <div className="grid gap-4 md:grid-cols-3">
          <Tile title="A daily habit, not a course">
            Most prep apps are giant content libraries. We are a 30-minute-a-day discipline. Streaks, leaderboards, and
            the AI tutor's nudges keep you accountable.
          </Tile>
          <Tile title="Feedback in your language">
            Grammar explanations, idiom meanings, and tough vocabulary all come with a Bangla toggle. When you need
            English-only — flip it off.
          </Tile>
          <Tile title="Free tier you can actually use">
            One full IELTS mock, one TOEFL mock, one PTE mock per month — free. Daily voice coach access. Vocabulary
            decks. Forum. You can hit Band 7 without paying us a taka.
          </Tile>
        </div>
      </Section>

      {/* Final CTA */}
      <section className="mx-auto my-12 max-w-6xl px-4">
        <div className="rounded-2xl border bg-primary p-10 text-center text-primary-foreground">
          <h2 className="text-2xl font-bold md:text-3xl">Make tonight count.</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm md:text-base">
            One placement quiz. One personalised 90-day plan. One first mock test. Nothing to install.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Button asChild size="lg" variant="secondary">
              <Link href="/sign-up">
                Create my free account <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10">
              <Link href="/placement-test">
                {t('placement.cta')}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
