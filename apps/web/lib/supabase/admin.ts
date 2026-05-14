import { createClient as createSbClient, type SupabaseClient } from '@supabase/supabase-js';

// Service-role client — bypasses RLS entirely.
// Server-only: never import this in client components or expose to the browser.
// Lazy so module evaluation doesn't crash when env vars are missing in local dev.

let cached: SupabaseClient | null = null;

export function getAdminClient(): SupabaseClient | null {
  if (cached) return cached;
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  cached = createSbClient(url, key, { auth: { autoRefreshToken: false, persistSession: false } });
  return cached;
}

/**
 * @deprecated Prefer `getAdminClient()` so missing env vars don't crash at import time.
 * Kept as a Proxy so existing `adminClient.from(...)` call sites still work.
 */
export const adminClient = new Proxy({} as SupabaseClient, {
  get(_target, prop) {
    const client = getAdminClient();
    if (!client) {
      throw new Error(
        'Supabase service-role client unavailable: NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY missing.',
      );
    }
    return (client as unknown as Record<string | symbol, unknown>)[prop];
  },
});
