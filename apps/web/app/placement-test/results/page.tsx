'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, RefreshCw, GraduationCap } from 'lucide-react';
import { SiteShell } from '@/components/site-shell';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { PlacementResult } from '@/lib/placement';
import { LEVEL_COLORS } from '@/lib/placement';

export default function PlacementResultsPage() {
  const [result, setResult] = useState<PlacementResult | null>(null);

  useEffect(() => {
    const raw = localStorage.getItem('ielts_placement_result');
    if (raw) {
      try {
        setResult(JSON.parse(raw) as PlacementResult);
      } catch {
        // corrupted — ignore
      }
    }
  }, []);

  if (!result) {
    return (
      <SiteShell>
        <section className="mx-auto max-w-lg px-4 py-20 text-center">
          <p className="text-muted-foreground">No result found. Please take the placement test first.</p>
          <Button asChild className="mt-4">
            <Link href="/placement-test">Take the test</Link>
          </Button>
        </section>
      </SiteShell>
    );
  }

  const percentage = Math.round((result.score / result.total) * 100);

  return (
    <SiteShell>
      <section className="mx-auto max-w-3xl px-4 py-12">
        {/* Score summary */}
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Your placement result
          </p>
          <div className="mt-4 flex items-center justify-center gap-4">
            <div className="flex flex-col items-center">
              <span className="text-6xl font-bold text-primary" data-testid="score-display">
                {result.score}
                <span className="text-2xl text-muted-foreground">/{result.total}</span>
              </span>
              <span className="mt-1 text-sm text-muted-foreground">{percentage}% correct</span>
            </div>
          </div>
          <div
            className={`mt-4 inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-semibold ${LEVEL_COLORS[result.level]}`}
            data-testid="level-badge"
          >
            {result.level} — {result.label}
          </div>
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground">{result.description}</p>
        </div>

        {/* Score breakdown bar */}
        <div className="mb-10 rounded-lg border bg-card p-5">
          <p className="mb-3 text-sm font-semibold">Score breakdown</p>
          <div className="space-y-2">
            {(['grammar', 'vocabulary', 'reading'] as const).map((type, sectionIdx) => {
              const start = sectionIdx * 5;
              const qs = Array.from({ length: 5 }, (_, i) => start + i);
              return (
                <div key={type}>
                  <div className="mb-1 flex justify-between text-xs text-muted-foreground">
                    <span className="capitalize">{type}</span>
                    <span>
                      {qs.filter((i) => {
                        const stored = JSON.parse(localStorage.getItem('ielts_placement_result') ?? '{}');
                        return stored.score !== undefined;
                      }).length > 0
                        ? '—'
                        : '—'}
                    </span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full rounded-full bg-primary"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Overall score based on {result.total} questions.
          </p>
        </div>

        {/* Course recommendations */}
        <div>
          <h2 className="mb-1 text-xl font-bold">Recommended for your level</h2>
          <p className="mb-6 text-sm text-muted-foreground">
            Based on your {result.level} ({result.label}) result, here are the courses we recommend.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {result.recommendedCourses.map((course) => (
              <Card key={course.exam} className="transition hover:border-primary">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    <span className="text-xs font-semibold uppercase text-primary">{course.exam}</span>
                  </div>
                  <CardTitle className="mt-1 text-base">{course.tier} Course</CardTitle>
                  <CardDescription className="text-xs">{course.reason}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full" size="sm">
                    <Link href={course.href}>
                      View course <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link href="/courses">
              Browse all courses <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => {
              localStorage.removeItem('ielts_placement_result');
              window.location.href = '/placement-test';
            }}
          >
            <RefreshCw className="mr-2 h-4 w-4" /> Retake the test
          </Button>
        </div>
      </section>
    </SiteShell>
  );
}
