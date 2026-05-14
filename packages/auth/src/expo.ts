import { createAuthClient } from 'better-auth/react';

/**
 * Build a Better Auth client for Expo (mobile). Pass the deployed API URL.
 *
 * Wire up `@better-auth/expo`'s `expoClient` plugin here once you have it installed —
 * it adds SecureStore persistence for sessions. Without it, sessions live only in memory
 * for the current app run, which is fine for early development.
 */
export function makeMobileAuthClient(baseURL: string) {
  return createAuthClient({ baseURL });
}
