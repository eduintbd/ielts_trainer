import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  transpilePackages: [
    '@ielts/auth',
    '@ielts/db',
    '@ielts/grading',
    '@ielts/shared-types',
    '@ielts/api-client',
    '@ielts/ui',
    '@ielts/analytics-events',
  ],
  experimental: {
    typedRoutes: true,
    serverActions: {
      bodySizeLimit: '10mb', // for audio uploads
    },
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**.public.blob.vercel-storage.com' },
    ],
  },
};

export default nextConfig;
