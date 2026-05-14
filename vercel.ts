import { routes, type VercelConfig } from '@vercel/config/v1';

export const config: VercelConfig = {
  buildCommand: 'pnpm turbo run build --filter=@ielts/web',
  installCommand: 'pnpm install --frozen-lockfile',
  framework: 'nextjs',
  outputDirectory: 'apps/web/.next',

  rewrites: [
    routes.rewrite('/ai-service/(.*)', `${process.env.AI_SERVICE_URL}/$1`),
  ],

  redirects: [
    routes.redirect('/login', '/sign-in', { permanent: true }),
    routes.redirect('/register', '/sign-up', { permanent: true }),
  ],

  headers: [
    routes.cacheControl('/_next/static/(.*)', {
      public: true,
      maxAge: '1 year',
      immutable: true,
    }),
    {
      source: '/(.*)',
      headers: [
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'X-Frame-Options', value: 'DENY' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        { key: 'Permissions-Policy', value: 'camera=(), microphone=(self), geolocation=()' },
        { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
      ],
    },
  ],

  crons: [
    { path: '/api/cron/leaderboard-snapshot', schedule: '0 18 * * *' }, // 00:00 BDT = 18:00 UTC
    { path: '/api/cron/streak-rollover', schedule: '0 18 * * *' },
    { path: '/api/cron/health', schedule: '*/5 * * * *' },
  ],
};
