import { NextResponse } from 'next/server';
import { db, schema, eq } from '@ielts/db';
import { GradeSpeakingRequestSchema, type GradeSpeakingResponse } from '@ielts/shared-types';
import { averageSpeakingBands, IELTS_SPEAKING_RUBRIC } from '@ielts/grading';
import { getSessionUser } from '@/lib/session';
import { aiService } from '@/lib/ai-service';

export const runtime = 'nodejs';
export const maxDuration = 300;

export async function POST(req: Request) {
  const user = await getSessionUser();
  if (!user) return NextResponse.json({ code: 'unauthorized' }, { status: 401 });

  const body = await req.json();
  const input = GradeSpeakingRequestSchema.parse(body);

  const result = await aiService.post<GradeSpeakingResponse>('/grade/speaking', {
    rubric: IELTS_SPEAKING_RUBRIC,
    ...input,
  });

  const bands = { ...result.bands, band: averageSpeakingBands(result.bands) };

  await db
    .update(schema.attemptResponses)
    .set({
      score: bands.band,
      aiFeedback: result.feedbackMd,
      transcript: result.transcript,
      correctedTextDiff: result.corrections,
    })
    .where(eq(schema.attemptResponses.questionId, input.questionId));

  return NextResponse.json({ ...result, bands });
}
