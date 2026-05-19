'use client';

import Link from 'next/link';
import { ArrowRight, GraduationCap, Lock, CheckCircle2 } from 'lucide-react';
import { SiteShell, Section } from '@/components/site-shell';
import { Button } from '@/components/ui/button';
import { EXAM_COURSES } from '@/lib/courses';
import { useLanguage } from '@/components/providers/language-provider';
import type { TranslationKey } from '@/lib/i18n';

const EXAM_META: Record<string, { badgeKey: TranslationKey; titleKey: TranslationKey; descKey: TranslationKey; color: string; accent: string }> = {
  ielts: {
    badgeKey: 'courses.ielts.badge',
    titleKey: 'course.ielts.title',
    descKey: 'course.ielts.desc',
    color: 'from-teal-50 to-teal-100 border-teal-200',
    accent: 'text-teal-700',
  },
  toefl: {
    badgeKey: 'courses.toefl.badge',
    titleKey: 'course.toefl.title',
    descKey: 'course.toefl.desc',
    color: 'from-blue-50 to-blue-100 border-blue-200',
    accent: 'text-blue-700',
  },
  pte: {
    badgeKey: 'courses.pte.badge',
    titleKey: 'course.pte.title',
    descKey: 'course.pte.desc',
    color: 'from-purple-50 to-purple-100 border-purple-200',
    accent: 'text-purple-700',
  },
};

const TIER_KEYS: Record<string, TranslationKey> = {
  Foundation: 'tier.foundation',
  Intermediate: 'tier.intermediate',
  Advanced: 'tier.advanced',
};

export default function CoursesPage() {
  const { t } = useLanguage();

  return (
    <SiteShell>
      {/* Hero */}
      <section className="mx-auto max-w-4xl px-4 py-14 text-center">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">{t('courses.hero.badge')}</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">
          {t('courses.hero.title')}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          {t('courses.hero.subtitle')}
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4 text-primary" /> {t('courses.pill.free')}
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4 text-primary" /> {t('courses.pill.ai')}
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4 text-primary" /> {t('courses.pill.bangla')}
          </span>
          <span className="flex items-center gap-1.5">
            <Lock className="h-4 w-4 text-muted-foreground" /> {t('courses.pill.locked')}
          </span>
        </div>
      </section>

      {/* Exam cards */}
      <Section title={t('courses.choose')}>
        <div className="grid gap-6 md:grid-cols-3">
          {Object.entries(EXAM_COURSES).map(([exam, course]) => {
            const meta = EXAM_META[exam];
            if (!meta) return null;
            const freeModuleCount = course.tiers[0]!.modules.filter((m) => m.free).length;
            const totalModuleCount = course.tiers.reduce((acc, tier) => acc + tier.modules.length, 0);

            return (
              <div
                key={exam}
                className={`rounded-xl border bg-gradient-to-br p-6 ${meta.color}`}
                data-testid={`exam-card-${exam}`}
              >
                <GraduationCap className={`h-8 w-8 ${meta.accent}`} />
                <p className={`mt-3 text-xs font-semibold uppercase ${meta.accent}`}>{t(meta.badgeKey)}</p>
                <h2 className="mt-1 text-2xl font-bold">{t(meta.titleKey)}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{t(meta.descKey)}</p>

                <div className="mt-4 space-y-1 text-sm">
                  {course.tiers.map((tier) => (
                    <div key={tier.id} className="flex items-center justify-between">
                      <span className="font-medium">{t(TIER_KEYS[tier.name] ?? 'tier.foundation')}</span>
                      <span className="text-muted-foreground">
                        {tier.currency}{tier.price.toLocaleString('en-BD')}{t('courses.pricing.mo')}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="mt-4 text-xs text-muted-foreground">
                  {t('courses.modules.info', { free: String(freeModuleCount), total: String(totalModuleCount) })}
                </p>

                <Button asChild className="mt-5 w-full">
                  <Link href={`/courses/${exam}`}>
                    {t('courses.explore', { exam: exam.toUpperCase() })} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Pricing comparison table */}
      <Section title={t('courses.pricing.title')} subtitle={t('courses.pricing.subtitle')}>
        <div className="overflow-x-auto rounded-xl border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">{t('courses.pricing.tier')}</th>
                <th className="px-4 py-3 text-center font-semibold">IELTS</th>
                <th className="px-4 py-3 text-center font-semibold">TOEFL</th>
                <th className="px-4 py-3 text-center font-semibold">PTE</th>
                <th className="px-4 py-3 text-left font-semibold">{t('courses.pricing.target')}</th>
              </tr>
            </thead>
            <tbody>
              {[0, 1, 2].map((tierIdx) => {
                const ieltsTier = EXAM_COURSES.ielts.tiers[tierIdx]!;
                const toeflTier = EXAM_COURSES.toefl.tiers[tierIdx]!;
                const pteTier = EXAM_COURSES.pte.tiers[tierIdx]!;
                return (
                  <tr key={tierIdx} className="border-b last:border-0">
                    <td className="px-4 py-3 font-medium">{t(TIER_KEYS[ieltsTier.name] ?? 'tier.foundation')}</td>
                    <td className="px-4 py-3 text-center">
                      ৳{ieltsTier.price.toLocaleString('en-BD')}{t('courses.pricing.mo')}
                    </td>
                    <td className="px-4 py-3 text-center">
                      ৳{toeflTier.price.toLocaleString('en-BD')}{t('courses.pricing.mo')}
                    </td>
                    <td className="px-4 py-3 text-center">
                      ৳{pteTier.price.toLocaleString('en-BD')}{t('courses.pricing.mo')}
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">
                      {ieltsTier.target} · {toeflTier.target} · {pteTier.target}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">{t('courses.pricing.note')}</p>
      </Section>

      {/* Placement test nudge */}
      <section className="mx-auto mb-16 max-w-6xl px-4">
        <div className="rounded-2xl border bg-primary p-10 text-center text-primary-foreground">
          <h2 className="text-2xl font-bold">{t('courses.cta.title')}</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm">{t('courses.cta.subtitle')}</p>
          <Button asChild size="lg" variant="secondary" className="mt-6">
            <Link href="/placement-test">
              {t('placement.cta')} <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </SiteShell>
  );
}
