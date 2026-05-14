import Constants from 'expo-constants';

/**
 * API base URL — set via app.json `extra.apiBaseUrl` or env at build time.
 * Falls back to localhost for Expo Go development.
 */
export const API_BASE_URL =
  (Constants.expoConfig?.extra as { apiBaseUrl?: string } | undefined)?.apiBaseUrl ??
  process.env.EXPO_PUBLIC_API_BASE_URL ??
  'http://localhost:3000';
