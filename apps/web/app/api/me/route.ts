import { NextResponse } from 'next/server';
import { z } from 'zod';
import { db, schema, eq } from '@ielts/db';
import { getSessionUser } from '@/lib/session';

export const runtime = 'nodejs';

const PatchSchema = z.object({
  targetExam: z.enum(['IELTS', 'TOEFL', 'PTE', 'undecided']).optional(),
  targetBand: z.string().max(8).optional(),
  currentBand: z.string().max(8).optional(),
  nativeLang: z.enum(['bn', 'en', 'hi', 'ur', 'other']).optional(),
});

export async function GET() {
  const user = await getSessionUser();
  if (!user) return NextResponse.json({ code: 'unauthorized' }, { status: 401 });
  return NextResponse.json(user);
}

export async function PATCH(req: Request) {
  const user = await getSessionUser();
  if (!user) return NextResponse.json({ code: 'unauthorized' }, { status: 401 });

  const body = PatchSchema.parse(await req.json());
  await db.update(schema.users).set({ ...body, updatedAt: new Date() }).where(eq(schema.users.id, user.id));
  return NextResponse.json({ ok: true });
}
