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
import type { TranslationKey } from '@/lib/i18n';

const SKILLS: { href: string; icon: React.ElementType; titleKey: TranslationKey; summaryKey: TranslationKey }[] = [
  { href: '/english/speaking', icon: Mic, titleKey: 'footer.speaking', summaryKey: 'skill.speaking.summary' },
  { href: '/english/writing', icon: PenLine, titleKey: 'footer.writing', summaryKey: 'skill.writing.summary' },
  { href: '/english/listening', icon: Headphones, titleKey: 'footer.listening', summaryKey: 'skill.listening.summary' },
  { href: '/english/reading', icon: BookOpen, titleKey: 'footer.reading', summaryKey: 'skill.reading.summary' },
  { href: '/english/grammar', icon: Type, titleKey: 'footer.grammar', summaryKey: 'skill.grammar.summary' },
  { href: '/english/pronunciation', icon: Languages, titleKey: 'footer.pronunciation', summaryKey: 'skill.pronunciation.summary' },
];

const EXAMS: {
  href: string;
  badgeKey: TranslationKey;
  title: string;
  bulletKeys: [TranslationKey, TranslationKey, TranslationKey];
}[] = [
  {
    href: '/ielts',
    badgeKey: 'exam.ielts.badge',
    title: 'IELTS',
    bulletKeys: ['exam.ielts.bullet1', 'exam.ielts.bullet2', 'exam.ielts.bullet3'],
  },
  {
    href: '/toefl',
    badgeKey: 'exam.toefl.badge',
    title: 'TOEFL iBT',
    bulletKeys: ['exam.toefl.bullet1', 'exam.toefl.bullet2', 'exam.toefl.bullet3'],
  },
  {
    href: '/pte',
    badgeKey: 'exam.pte.badge',
    title: 'PTE Academic',
    bulletKeys: ['exam.pte.bullet1', 'exam.pte.bullet2', 'exam.pte.bullet3'],
  },
];

const FEATURES: { icon: React.ElementType; titleKey: TranslationKey; descKey: TranslationKey }[] = [
  { icon: BookOpen, titleKey: 'feature.mocks.title', descKey: 'feature.mocks.desc' },
  { icon: Mic, titleKey: 'feature.voice.title', descKey: 'feature.voice.desc' },
  { icon: Headphones, titleKey: 'feature.listening.title', descKey: 'feature.listening.desc' },
  { icon: MessageSquare, titleKey: 'feature.ai.title', descKey: 'feature.ai.desc' },
  { icon: Trophy, titleKey: 'feature.gamify.title', descKey: 'feature.gamify.desc' },
  { icon: Globe, titleKey: 'feature.bangla.title', descKey: 'feature.bangla.desc' },
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
      <Section title={t('home.step1.title')} subtitle={t('home.step1.subtitle')}>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map(({ href, icon: Icon, titleKey, summaryKey }) => (
            <Link key={href} href={href} className="block">
              <div className="h-full rounded-lg border bg-card p-5 transition hover:border-primary hover:shadow-sm">
                <Icon className="h-7 w-7 text-primary" />
                <h3 className="mt-3 font-semibold">{t(titleKey)}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{t(summaryKey)}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Button asChild variant="outline">
            <Link href="/english">
              {t('home.english.link')} <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Section>

      {/* Exams */}
      <Section title={t('home.step2.title')} subtitle={t('home.step2.subtitle')}>
        <div className="grid gap-4 md:grid-cols-3">
          {EXAMS.map((exam) => (
            <Link key={exam.href} href={exam.href} className="block">
              <div className="h-full rounded-lg border bg-card p-5 transition hover:border-primary hover:shadow-sm">
                <GraduationCap className="h-7 w-7 text-primary" />
                <p className="mt-3 text-xs font-semibold uppercase text-primary">{t(exam.badgeKey)}</p>
                <h3 className="mt-1 text-xl font-bold">{exam.title}</h3>
                <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                  {exam.bulletKeys.map((bk) => (
                    <li key={bk}>· {t(bk)}</li>
                  ))}
                </ul>
                <p className="mt-4 text-sm font-medium text-primary">{t('home.exam.guide')}</p>
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
      <Section title={t('home.step3.title')} subtitle={t('home.step3.subtitle')}>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ icon: Icon, titleKey, descKey }) => (
            <div key={titleKey} className="rounded-lg border bg-card p-6">
              <Icon className="h-8 w-8 text-primary" />
              <h3 className="mt-4 font-semibold">{t(titleKey)}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{t(descKey)}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Why */}
      <Section title={t('home.why.title')}>
        <div className="grid gap-4 md:grid-cols-3">
          <Tile title={t('tile.habit.title')}>{t('tile.habit.body')}</Tile>
          <Tile title={t('tile.feedback.title')}>{t('tile.feedback.body')}</Tile>
          <Tile title={t('tile.free.title')}>{t('tile.free.body')}</Tile>
        </div>
      </Section>

      {/* Final CTA */}
      <section className="mx-auto my-12 max-w-6xl px-4">
        <div className="rounded-2xl border bg-primary p-10 text-center text-primary-foreground">
          <h2 className="text-2xl font-bold md:text-3xl">{t('home.cta.title')}</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm md:text-base">{t('home.cta.subtitle')}</p>
          <div className="mt-6 flex justify-center gap-3">
            <Button asChild size="lg" variant="secondary">
              <Link href="/sign-up">
                {t('home.cta.create')} <ArrowRight className="ml-2 h-4 w-4" />
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
