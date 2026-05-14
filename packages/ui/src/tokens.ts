/**
 * Shared design tokens consumed by both web (Tailwind config) and mobile (NativeWind).
 * Keep this list small and semantic — concrete styles live in apps.
 */

export const colors = {
  primary: { DEFAULT: '#0F766E', foreground: '#FFFFFF' }, // teal-700
  accent: { DEFAULT: '#F59E0B', foreground: '#1F2937' },  // amber-500
  bg: { DEFAULT: '#FFFFFF', muted: '#F1F5F9', card: '#FFFFFF' },
  fg: { DEFAULT: '#0F172A', muted: '#475569' },
  border: '#E2E8F0',
  destructive: '#DC2626',
  success: '#059669',
  warning: '#D97706',
} as const;

export const radii = {
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  pill: 9999,
} as const;

export const space = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  '2xl': 48,
} as const;

export const typography = {
  fontFamily: { sans: 'Inter, system-ui, sans-serif', bn: 'Hind Siliguri, sans-serif' },
  size: { xs: 12, sm: 14, base: 16, lg: 18, xl: 20, '2xl': 24, '3xl': 30, '4xl': 36 },
  weight: { regular: '400', medium: '500', semibold: '600', bold: '700' },
} as const;
