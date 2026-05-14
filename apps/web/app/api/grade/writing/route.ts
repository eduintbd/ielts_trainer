import { NextResponse } from 'next/server';
import { db, schema, eq } from '@ielts/db';
import { GradeWritingRequestSchema, type GradeWritingResponse } from '@ielts/shared-types';
import { averageWritingBands, IELTS_WRITING_RUBRIC } from '@ielts/grading';
import { getSessionUser } from '@/lib/session';
import { aiService } from '@/lib/ai-service';

export const runtime = 'nodejs';
export const maxDuration = 300;

export async function POST(req: Request) {
  const user = await getSessionUser();
  if (!user) return NextResponse.json({ code: 'unauthorized' }, { status: 401 });

  const body = await req.json();
  const input = GradeWritingRequestSchema.parse(body);

  const llmResponse = await aiService.post<GradeWritingResponse>('/grade/writing', {
    rubric: IELTS_WRITING_RUBRIC,
    ...input,
  });

  const bands = {
    ...llmResponse.bands,
    band: averageWritingBands(llmResponse.bands),
  };

  await db
    .update(schema.attemptResponses)
    .set({
      score: bands.band,
      aiFeedback: llmResponse.feedbackMd,
      correctedTextDiff: llmResponse.corrections,
    })
    .where(eq(schema.attemptResponses.questionId, input.questionId));

  return NextResponse.json({ ...llmResponse, bands });
}
