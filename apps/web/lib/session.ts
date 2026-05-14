import { headers } from 'next/headers';
import { cache } from 'react';
import { auth } from '@ielts/auth';
import type { SessionUser } from '@ielts/auth';

/** Server-side session lookup, request-deduped via React cache(). */
export const getSession = cache(async () => {
  const session = await auth.api.getSession({ headers: await headers() });
  return session;
});

export async function getSessionUser(): Promise<SessionUser | null> {
  const s = await getSession();
  if (!s?.user) return null;
  const u = s.user as unknown as SessionUser & { role?: string };
  return {
    id: u.id,
    email: u.email,
    name: u.name,
    image: u.image ?? null,
    role: (u.role as SessionUser['role']) ?? 'student',
    country: u.country ?? null,
    nativeLang: u.nativeLang ?? null,
    targetExam: u.targetExam ?? null,
  };
}
