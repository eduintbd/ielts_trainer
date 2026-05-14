import { createAuthClient } from 'better-auth/react';

export function makeAuthClient(baseURL: string = '') {
  return createAuthClient({
    baseURL: baseURL || (typeof window !== 'undefined' ? window.location.origin : ''),
  });
}

export const authClient = makeAuthClient();
export const { signIn, signOut, signUp, useSession } = authClient;
