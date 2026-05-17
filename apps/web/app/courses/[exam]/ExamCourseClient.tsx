'use client';

import Link from 'next/link';
import {
  ArrowRight,
  Lock,
  CheckCircle2,
  ExternalLink,
  Clock,
  BookOpen,
} from 'lucide-react';
import { SiteShell, Section } from '@/components/site-shell';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useLanguage } from '@/components/providers/language-provider';
import { cn } from '@ielts/ui';
import type { CourseTier, CourseModule } from '@/lib/courses';

interface Course {
  title: string;
  description: string;
  badge: string;
  tiers: CourseTier[];
}

interface Props {
  course: Course;
  exam: string;
  freeModuleCount: number;
}

function ModuleRow({ module, index }: { module: CourseModule; index: number }) {
  const { t } = useLanguage();

  return (
    <div
      className={cn(
        'flex items-start gap-4 rounded-lg border p-4',
        module.free ? 'border-primary/20 bg-primary/5' : 'bg-card opacity-90',
      )}
      data-testid={module.free ? 'free-module' : 'locked-module'}
    >
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-bold text-muted-foreground">
        {index + 1}
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <p className="font-medium">{module.title}</p>
          {module.free ? (
            <span className="rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-semibold text-primary">
              {t('exam.module.free')}
            </span>
          ) : (
            <Lock className="h-3.5 w-3.5 text-muted-foreground" />
          )}
        </div>
        <p className="mt-0.5 text-sm text-muted-foreground">{module.description}</p>
        <div className="mt-2 flex items-center gap-4">
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="h-3 w-3" /> {module.duration}
          </span>
          {module.free && module.resourceUrl && (
            <a
              href={module.resourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs text-primary hover:underline"
            >
              <ExternalLink className="h-3 w-3" /> {module.resourceLabel}
            </a>
          )}
        </div>
      </div>
      {!module.free && (
        <Button asChild size="sm" variant="outline" className="shrink-0">
          <Link href="/sign-up">{t('exam.module.enroll')}</Link>
        </Button>
      )}
    </div>
  );
}

function TierCard({ tier }: { tier: CourseTier }) {
  const { t } = useLanguage();
  const freeCount = tier.modules.filter((m) => m.free).length;
  const lockedCount = tier.modules.filter((m) => !m.free).length;

  return (
    <Card className="flex flex-col" data-testid={`tier-${tier.name.toLowerCase()}`}>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle>{tier.name}</CardTitle>
            <CardDescription className="mt-1">{tier.tagline}</CardDescription>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold">
              {tier.currency}{tier.price.toLocaleString('en-BD')}
            </p>
            <p className="text-xs text-muted-foreground">{t('exam.tier.per.month')}</p>
          </div>
        </div>
        <div className="mt-2 inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
          {t('exam.tier.target', { target: tier.target })}
        </div>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-4">
        <ul className="space-y-1.5">
          {tier.features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              {f}
            </li>
          ))}
        </ul>
        <div className="text-xs text-muted-foreground">
          {t('exam.tier.preview.count', { free: String(freeCount), locked: String(lockedCount) })}
        </div>
        <Button asChild className="mt-auto w-full">
          <Link href="/sign-up">
            {t('exam.tier.enroll', { name: tier.name })} <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}

export default function ExamCourseClient({ course, exam, freeModuleCount }: Props) {
  const { t } = useLanguage();
  const allModules = course.tiers.flatMap((tier) => tier.modules);

  const faqs = [
    { q: t('exam.faq.q1'), a: t('exam.faq.a1', { count: String(freeModuleCount) }) },
    { q: t('exam.faq.q2'), a: t('exam.faq.a2') },
    { q: t('exam.faq.q3'), a: t('exam.faq.a3') },
    { q: t('exam.faq.q4'), a: t('exam.faq.a4') },
  ];

  return (
    <SiteShell>
      {/* Hero */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <nav className="mb-4 flex items-center gap-2 text-xs text-muted-foreground">
          <Link href="/courses" className="hover:text-foreground">{t('exam.breadcrumb')}</Link>
          <span>/</span>
          <span className="font-medium text-foreground">{exam.toUpperCase()}</span>
        </nav>
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">{course.badge}</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">{course.title}</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">{course.description}</p>

        <div className="mt-6 flex flex-wrap gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <BookOpen className="h-4 w-4 text-primary" />
            {t('exam.modules.total', { count: String(allModules.length) })}
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4 text-primary" />
            {t('exam.modules.free', { count: String(freeModuleCount) })}
          </span>
          <span className="flex items-center gap-1.5">
            <Lock className="h-4 w-4 text-muted-foreground" />
            {t('exam.modules.locked')}
          </span>
        </div>
      </section>

      {/* Pricing tiers */}
      <Section title={t('exam.tiers.title')} subtitle={t('exam.tiers.subtitle')}>
        <div className="grid gap-6 md:grid-cols-3">
          {course.tiers.map((tier) => (
            <TierCard key={tier.id} tier={tier} />
          ))}
        </div>
      </Section>

      {/* Course modules per tier */}
      {course.tiers.map((tier) => (
        <Section key={tier.id} title={`${tier.name} — ${tier.target}`} subtitle={tier.tagline}>
          <div className="space-y-3">
            {tier.modules.map((module, i) => (
              <ModuleRow key={module.id} module={module} index={i} />
            ))}
          </div>
        </Section>
      ))}

      {/* FAQ */}
      <Section title={t('exam.faq.title')}>
        <div className="space-y-3 text-sm">
          {faqs.map(({ q, a }) => (
            <div key={q} className="rounded-lg border bg-card p-4">
              <p className="font-semibold">{q}</p>
              <p className="mt-1 text-muted-foreground">{a}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Bottom CTA */}
      <section className="mx-auto mb-16 max-w-6xl px-4">
        <div className="rounded-2xl border bg-primary p-10 text-center text-primary-foreground">
          <h2 className="text-2xl font-bold">{t('exam.cta.title')}</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm">{t('exam.cta.subtitle')}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" variant="secondary">
              <Link href="/sign-up">
                {t('exam.cta.create')} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Link href="/placement-test">{t('exam.cta.placement')}</Link>
            </Button>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
