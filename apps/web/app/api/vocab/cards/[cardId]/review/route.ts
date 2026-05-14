import { NextResponse } from 'next/server';
import { z } from 'zod';
import { db, schema, eq, and } from '@ielts/db';
import { reviewCard, type SM2Quality, INITIAL_STATE } from '@ielts/grading';
import { getSessionUser } from '@/lib/session';

export const runtime = 'nodejs';

const Body = z.object({ quality: z.number().int().min(0).max(5) });

export async function POST(req: Request, { params }: { params: Promise<{ cardId: string }> }) {
  const user = await getSessionUser();
  if (!user) return NextResponse.json({ code: 'unauthorized' }, { status: 401 });

  const { cardId } = await params;
  const { quality } = Body.parse(await req.json());

  const existing = await db.query.userCardState.findFirst({
    where: (s, { and, eq }) => and(eq(s.userId, user.id), eq(s.cardId, cardId)),
  });

  const prevState = existing
    ? {
        ease: existing.ease,
        interval: existing.interval,
        repetitions: existing.repetitions,
        lapses: existing.lapses,
        dueAt: existing.dueAt,
      }
    : { ...INITIAL_STATE, dueAt: new Date() };

  const next = reviewCard(prevState, quality as SM2Quality);

  await db
    .insert(schema.userCardState)
    .values({
      userId: user.id,
      cardId,
      ease: next.ease,
      interval: next.interval,
      repetitions: next.repetitions,
      lapses: next.lapses,
      lastReviewedAt: new Date(),
      dueAt: next.dueAt,
    })
    .onConflictDoUpdate({
      target: [schema.userCardState.userId, schema.userCardState.cardId],
      set: {
        ease: next.ease,
        interval: next.interval,
        repetitions: next.repetitions,
        lapses: next.lapses,
        lastReviewedAt: new Date(),
        dueAt: next.dueAt,
      },
    });

  // Reward XP
  await db.insert(schema.xpEvents).values({
    userId: user.id,
    reason: 'vocab_reviewed',
    amount: 5,
    metaJson: { cardId, quality },
  });

  return NextResponse.json({ next });
}
