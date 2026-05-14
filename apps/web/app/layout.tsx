import type { Metadata, Viewport } from 'next';
import { Inter, Hind_Siliguri } from 'next/font/google';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { QueryProvider } from '@/components/providers/query-provider';
import { Toaster } from 'sonner';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
const hind = Hind_Siliguri({
  subsets: ['bengali'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-bn',
  display: 'swap',
});

export const metadata: Metadata = {
  title: { default: 'IELTS Trainer', template: '%s · IELTS Trainer' },
  description: 'Master IELTS, TOEFL & PTE — built for Bangladeshi students.',
  applicationName: 'IELTS Trainer',
  authors: [{ name: 'Eduint' }],
  keywords: ['IELTS', 'TOEFL', 'PTE', 'Bangladesh', 'mock test', 'speaking practice'],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FFFFFF' },
    { media: '(prefers-color-scheme: dark)', color: '#0F172A' },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${hind.variable}`}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <QueryProvider>
            {children}
            <Toaster richColors position="top-right" />
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
