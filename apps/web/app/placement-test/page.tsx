'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight, ArrowLeft, CheckCircle2, ClipboardList } from 'lucide-react';
import { SiteShell } from '@/components/site-shell';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { sampleQuestions, scorePlacement, type PlacementQuestion } from '@/lib/placement';
import { useLanguage } from '@/components/providers/language-provider';
import { cn } from '@ielts/ui';

type Phase = 'intro' | 'quiz';

export default function PlacementTestPage() {
  const router = useRouter();
  const { t } = useLanguage();
  const [phase, setPhase] = useState<Phase>('intro');
  const [questions, setQuestions] = useState<PlacementQuestion[]>([]);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [selected, setSelected] = useState<number | null>(null);

  const question = questions[current];
  const isLast = current === questions.length - 1;
  const progress = questions.length > 0 ? ((current + 1) / questions.length) * 100 : 0;

  const typeLabels: Record<string, string> = {
    grammar: t('placement.type.grammar'),
    vocabulary: t('placement.type.vocabulary'),
    reading: t('placement.type.reading'),
  };

  function handleAnswer(idx: number) {
    if (selected !== null) return;
    setSelected(idx);
  }

  function handleNext() {
    const newAnswers = [...answers];
    newAnswers[current] = selected;
    setAnswers(newAnswers);

    if (isLast) {
      const result = scorePlacement(newAnswers, questions);
      localStorage.setItem('ielts_placement_result', JSON.stringify(result));
      // Reset to intro so back-navigation always shows the start screen
      setPhase('intro');
      setQuestions([]);
      setCurrent(0);
      setAnswers([]);
      setSelected(null);
      router.push('/placement-test/results');
      return;
    }
    setCurrent((c) => c + 1);
    setSelected(null);
  }

  function handleBack() {
    if (current === 0) {
      setPhase('intro');
      return;
    }
    setCurrent((c) => c - 1);
    setSelected(answers[current - 1] ?? null);
  }

  if (phase === 'intro') {
    return (
      <SiteShell>
        <section className="mx-auto max-w-2xl px-4 py-16">
          <div className="mb-6 flex items-center gap-3">
            <ClipboardList className="h-8 w-8 text-primary" />
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              {t('placement.badge')}
            </span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            {t('placement.title')}
          </h1>
          <p className="mt-4 text-muted-foreground">{t('placement.desc')}</p>
          <ul className="mt-6 space-y-2 text-sm">
            {(
              [
                'placement.check.grammar',
                'placement.check.vocab',
                'placement.check.reading',
                'placement.check.result',
                'placement.check.reco',
              ] as const
            ).map((key) => (
              <li key={key} className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                {t(key)}
              </li>
            ))}
          </ul>
          <Button
            size="lg"
            className="mt-8"
            onClick={() => {
              const sampled = sampleQuestions();
              setQuestions(sampled);
              setPhase('quiz');
              setCurrent(0);
              setAnswers(Array(sampled.length).fill(null));
              setSelected(null);
            }}
            data-testid="start-quiz"
          >
            {t('placement.start')} <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </section>
      </SiteShell>
    );
  }

  if (!question) return null;

  return (
    <SiteShell>
      <section className="mx-auto max-w-2xl px-4 py-10">
        {/* Progress bar */}
        <div className="mb-6">
          <div className="mb-2 flex items-center justify-between text-xs text-muted-foreground">
            <span className="font-medium">{typeLabels[question.type] ?? question.type}</span>
            <span>
              {t('placement.quiz.question', {
                current: String(current + 1),
                total: String(questions.length),
              })}
            </span>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-primary transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <Card>
          <CardHeader>
            {question.passage && (
              <div className="mb-4 rounded-lg bg-muted/60 p-4 text-sm leading-relaxed text-foreground">
                <p className="mb-1 text-xs font-semibold uppercase text-muted-foreground">
                  {t('placement.quiz.passage')}
                </p>
                {question.passage}
              </div>
            )}
            <CardTitle className="text-lg leading-snug" data-testid="question-text">
              {question.question}
            </CardTitle>
            <CardDescription>{t('placement.quiz.choosebest')}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {question.options.map((option, idx) => {
              const isChosen = selected === idx;
              const isCorrect = selected !== null && idx === question.answer;
              const isWrong = selected === idx && idx !== question.answer;

              return (
                <button
                  key={idx}
                  onClick={() => handleAnswer(idx)}
                  disabled={selected !== null}
                  data-testid={`option-${idx}`}
                  className={cn(
                    'w-full rounded-lg border px-4 py-3 text-left text-sm transition-colors',
                    selected === null
                      ? 'hover:border-primary hover:bg-primary/5 cursor-pointer'
                      : 'cursor-default',
                    isChosen && !isWrong && isCorrect && 'border-green-500 bg-green-50 text-green-900',
                    isWrong && 'border-red-400 bg-red-50 text-red-900',
                    isCorrect && selected !== null && !isChosen && 'border-green-400 bg-green-50/50',
                    !isChosen && selected !== null && !isCorrect && 'opacity-50',
                  )}
                >
                  <span className="mr-3 font-semibold text-primary">
                    {String.fromCharCode(65 + idx)}.
                  </span>
                  {option}
                </button>
              );
            })}
          </CardContent>
        </Card>

        <div className="mt-6 flex items-center justify-between">
          <Button variant="ghost" onClick={handleBack} size="sm">
            <ArrowLeft className="mr-1 h-4 w-4" /> {t('placement.quiz.back')}
          </Button>
          <Button
            onClick={handleNext}
            disabled={selected === null}
            data-testid="next-button"
          >
            {isLast ? t('placement.quiz.see') : t('placement.quiz.next')}{' '}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </SiteShell>
  );
}
