import Link from 'next/link';
import { ArrowRight, GraduationCap, Lock, CheckCircle2 } from 'lucide-react';
import { SiteShell, Section } from '@/components/site-shell';
import { Button } from '@/components/ui/button';
import { EXAM_COURSES } from '@/lib/courses';

export const metadata = {
  title: 'Courses · IELTS Trainer',
  description: 'Structured IELTS, TOEFL, and PTE courses for Bangladeshi students. Three tiers per exam — Foundation, Intermediate, Advanced.',
};

const EXAM_META = {
  ielts: {
    badge: 'UK · Australia · Canada',
    color: 'from-teal-50 to-teal-100 border-teal-200',
    accent: 'text-teal-700',
  },
  toefl: {
    badge: 'USA · Graduate Schools',
    color: 'from-blue-50 to-blue-100 border-blue-200',
    accent: 'text-blue-700',
  },
  pte: {
    badge: 'Australia · NZ · Fast Results',
    color: 'from-purple-50 to-purple-100 border-purple-200',
    accent: 'text-purple-700',
  },
} as const;

export default function CoursesPage() {
  return (
    <SiteShell>
      {/* Hero */}
      <section className="mx-auto max-w-4xl px-4 py-14 text-center">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">Courses</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">
          Structured prep. Real results.
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Three tiers for each exam — Foundation, Intermediate, and Advanced. Every tier includes free preview
          modules, AI-graded mock tests, and Bangla-aware explanations.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4 text-primary" /> Free preview modules
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4 text-primary" /> AI mock test grading
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4 text-primary" /> Bangla explanations
          </span>
          <span className="flex items-center gap-1.5">
            <Lock className="h-4 w-4 text-muted-foreground" /> Full content after enrollment
          </span>
        </div>
      </section>

      {/* Exam cards */}
      <Section title="Choose your exam">
        <div className="grid gap-6 md:grid-cols-3">
          {Object.entries(EXAM_COURSES).map(([exam, course]) => {
            const meta = EXAM_META[exam as keyof typeof EXAM_META];
            const freeModuleCount = course.tiers[0].modules.filter((m) => m.free).length;
            const totalModuleCount = course.tiers.reduce((acc, t) => acc + t.modules.length, 0);

            return (
              <div
                key={exam}
                className={`rounded-xl border bg-gradient-to-br p-6 ${meta.color}`}
                data-testid={`exam-card-${exam}`}
              >
                <GraduationCap className={`h-8 w-8 ${meta.accent}`} />
                <p className={`mt-3 text-xs font-semibold uppercase ${meta.accent}`}>{meta.badge}</p>
                <h2 className="mt-1 text-2xl font-bold">{course.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{course.description}</p>

                <div className="mt-4 space-y-1 text-sm">
                  {course.tiers.map((tier) => (
                    <div key={tier.id} className="flex items-center justify-between">
                      <span className="font-medium">{tier.name}</span>
                      <span className="text-muted-foreground">
                        {tier.currency}{tier.price.toLocaleString('en-BD')}/{tier.period}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="mt-4 text-xs text-muted-foreground">
                  {freeModuleCount} free preview modules · {totalModuleCount} total modules
                </p>

                <Button asChild className="mt-5 w-full">
                  <Link href={`/courses/${exam}`}>
                    Explore {exam.toUpperCase()} courses <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Pricing comparison table */}
      <Section title="Pricing at a glance" subtitle="All prices in Bangladeshi Taka (BDT). Cancel any time.">
        <div className="overflow-x-auto rounded-xl border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Tier</th>
                <th className="px-4 py-3 text-center font-semibold">IELTS</th>
                <th className="px-4 py-3 text-center font-semibold">TOEFL</th>
                <th className="px-4 py-3 text-center font-semibold">PTE</th>
                <th className="px-4 py-3 text-left font-semibold">Target</th>
              </tr>
            </thead>
            <tbody>
              {[0, 1, 2].map((tierIdx) => {
                const ieltsTier = EXAM_COURSES.ielts.tiers[tierIdx];
                const toeflTier = EXAM_COURSES.toefl.tiers[tierIdx];
                const pteTier = EXAM_COURSES.pte.tiers[tierIdx];
                return (
                  <tr key={tierIdx} className="border-b last:border-0">
                    <td className="px-4 py-3 font-medium">{ieltsTier.name}</td>
                    <td className="px-4 py-3 text-center">
                      ৳{ieltsTier.price.toLocaleString('en-BD')}/mo
                    </td>
                    <td className="px-4 py-3 text-center">
                      ৳{toeflTier.price.toLocaleString('en-BD')}/mo
                    </td>
                    <td className="px-4 py-3 text-center">
                      ৳{pteTier.price.toLocaleString('en-BD')}/mo
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
        <p className="mt-3 text-xs text-muted-foreground">
          * First 2 modules of any course are always free to preview — no sign-in required.
        </p>
      </Section>

      {/* Placement test nudge */}
      <section className="mx-auto mb-16 max-w-6xl px-4">
        <div className="rounded-2xl border bg-primary p-10 text-center text-primary-foreground">
          <h2 className="text-2xl font-bold">Not sure which tier is right for you?</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm">
            Take our free 5-minute placement test. We'll assess your current English level and tell you
            exactly which course to start with.
          </p>
          <Button asChild size="lg" variant="secondary" className="mt-6">
            <Link href="/placement-test">
              Take the placement test <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </SiteShell>
  );
}
