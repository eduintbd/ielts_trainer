import { NextResponse } from 'next/server';
import { z } from 'zod';
import { db, schema } from '@ielts/db';
import { StartVoiceSessionSchema } from '@ielts/shared-types';
import { getSessionUser } from '@/lib/session';

export const runtime = 'nodejs';

export async function POST(req: Request) {
  const user = await getSessionUser();
  if (!user) return NextResponse.json({ code: 'unauthorized' }, { status: 401 });

  const body = StartVoiceSessionSchema.parse(await req.json());

  const [session] = await db
    .insert(schema.voiceSessions)
    .values({
      userId: user.id,
      mode: body.mode,
      accent: body.accent,
    })
    .returning({ id: schema.voiceSessions.id });

  return NextResponse.json({ sessionId: session!.id });
}
