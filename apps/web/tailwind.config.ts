import type { Config } from 'tailwindcss';
import { colors, radii, typography } from '@ielts/ui/tokens';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    '../../packages/ui/src/**/*.{ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: colors.primary.DEFAULT, foreground: colors.primary.foreground },
        accent: { DEFAULT: colors.accent.DEFAULT, foreground: colors.accent.foreground },
        background: colors.bg.DEFAULT,
        muted: { DEFAULT: colors.bg.muted, foreground: colors.fg.muted },
        foreground: colors.fg.DEFAULT,
        border: colors.border,
        destructive: { DEFAULT: colors.destructive, foreground: '#FFFFFF' },
        success: colors.success,
        warning: colors.warning,
      },
      borderRadius: {
        sm: `${radii.sm}px`,
        md: `${radii.md}px`,
        lg: `${radii.lg}px`,
        xl: `${radii.xl}px`,
      },
      fontFamily: {
        sans: typography.fontFamily.sans.split(','),
        bn: typography.fontFamily.bn.split(','),
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
