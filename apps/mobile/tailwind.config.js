/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#0F766E', foreground: '#FFFFFF' },
        accent: { DEFAULT: '#F59E0B', foreground: '#1F2937' },
        muted: '#F1F5F9',
        border: '#E2E8F0',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui'],
        bn: ['Hind Siliguri', 'sans-serif'],
      },
    },
  },
};
