# IELTS Trainer

End-to-end IELTS / TOEFL / PTE prep platform for Bangladeshi students.

**Stack:** Next.js 16 (web) + Expo (mobile) + FastAPI (AI service) in a Turborepo monorepo.
Self-hosted Llama 3.1 + Whisper.cpp + Piper TTS on a GPU VPS. Postgres (Neon) + Better Auth + Vercel Blob.

See `C:\Users\Adnan\.claude\plans\i-want-to-build-lucky-squid.md` for the full implementation plan.

## Layout

```
apps/
  web/           Next.js 16 App Router (student + admin)
  mobile/        Expo (React Native, iOS + Android)
  ai-service/    FastAPI on GPU VPS — Ollama + Whisper + Piper
packages/
  db/            Drizzle schema + migrations
  auth/          Better Auth config
  shared-types/  Cross-app TS types
  api-client/    Typed fetch wrapper
  grading/       Pure scoring functions (SM-2, IELTS bands)
  analytics-events/ Typed event names + payloads
  ui/            shadcn-derived components shared web↔mobile
```

## Quickstart

```sh
pnpm install
cp .env.example .env.local
# fill in env vars (DATABASE_URL etc.)
pnpm db:migrate
pnpm dev
```

- Web: http://localhost:3000
- Mobile: `pnpm --filter @ielts/mobile start` then scan QR with Expo Go
- AI service: `cd apps/ai-service && docker compose up`
