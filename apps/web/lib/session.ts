import { cache } from 'react';
import { createClient } from '@/lib/supabase/server';
import { getAdminClient } from '@/lib/supabase/admin';
import type { User } from '@supabase/supabase-js';

export interface SessionUser {
  id: string;
  email: string;
  name: string | null;
  image: string | null;
  role: 'student' | 'admin' | 'moderator';
  targetExam: 'IELTS' | 'TOEFL' | 'PTE' | 'undecided';
}

/** Server-side authenticated user, request-deduped via React cache(). */
export const getUser = cache(async (): Promise<User | null> => {
  const supabase = await createClient();
  if (!supabase) return null;
  const { data: { user } } = await supabase.auth.getUser();
  return user;
});

/**
 * Returns the authenticated user with their role from the profiles table.
 * Role is read from the DB, not from user_metadata (which is user-editable).
 */
export async function getSessionUser(): Promise<SessionUser | null> {
  const user = await getUser();
  if (!user) return null;

  const admin = getAdminClient();
  const { data: profile } = admin
    ? await admin
        .from('profiles')
        .select('full_name, avatar_url, role, target_exam')
        .eq('id', user.id)
        .single()
    : { data: null };

  return {
    id: user.id,
    email: user.email ?? '',
    name: profile?.full_name ?? (user.user_metadata?.full_name as string | null) ?? null,
    image: profile?.avatar_url ?? (user.user_metadata?.avatar_url as string | null) ?? null,
    role: (profile?.role as SessionUser['role']) ?? 'student',
    targetExam: (profile?.target_exam as SessionUser['targetExam']) ?? 'IELTS',
  };
}
