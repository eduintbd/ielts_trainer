# IELTS Trainer — Project Reference

## What We Are Building

An English proficiency and exam-prep platform built for Bangladeshi students targeting IELTS, TOEFL, and PTE certification. The platform teaches English first (speaking, writing, listening, reading, grammar, pronunciation) and then layers exam-specific preparation on top of that foundation.

**Target users:** Bangladeshi students (primarily Dhaka-based) who need to sit IELTS, TOEFL, or PTE for university admission abroad or work visas.

**Key differentiator:** Bangla-aware curriculum — explanations, grammar notes, and vocabulary can be toggled to Bangla, and the AI understands common errors Bangla speakers make in English.

---

## Tech Stack

### Monorepo
- **Package manager:** pnpm 9.x with workspaces
- **Build orchestration:** Turborepo 2.x
- **Node requirement:** >=20.11.0

### Web App (`apps/web`)
- **Framework:** Next.js 16 (App Router, Turbopack)
- **Language:** TypeScript 5.x (strict)
- **Styling:** Tailwind CSS 3.x + CSS variables for theming
- **UI primitives:** Radix UI (label, slot, dialog, dropdown-menu, tabs, avatar, toast)
- **Components:** shadcn-style pattern — built locally in `apps/web/components/ui/`
- **State:** Zustand 5 (client state), TanStack React Query 5 (server state)
- **Forms:** React Hook Form 7 + Hookform Resolvers + Zod
- **Auth:** Better Auth 1.x (email/password + OAuth: Google, Facebook)
- **Notifications:** Sonner (toast)
- **Icons:** Lucide React
- **Fonts:** Inter (Latin/UI), Hind Siliguri (Bengali) — both via `next/font/google`
- **Markdown:** react-markdown + remark-gfm

### Mobile App (`apps/mobile`)
- **Framework:** Expo 52 + Expo Router (file-based routing)
- **Language:** TypeScript
- **Styling:** NativeWind 4 (Tailwind for RN)
- **Offline:** Expo SQLite for local DB

### AI Service (`apps/ai-service`)
- **Runtime:** Python on GPU VPS
- **Models:** Llama 3.1 8B (Ollama), Whisper medium (STT), Piper (TTS)
- **Comms:** HMAC-authenticated REST to Vercel

### Database (`packages/db`)
- **ORM:** Drizzle ORM 0.45
- **DB:** PostgreSQL (Neon or self-hosted)
- **Migrations:** `pnpm db:migrate`
- **Studio:** `pnpm db:studio`

### Shared Packages
| Package | Purpose |
|---------|---------|
| `@ielts/db` | Drizzle schema + client |
| `@ielts/auth` | Better Auth server/client/expo adapters |
| `@ielts/ui` | Design tokens (`tokens.ts`) + `cn()` utility |
| `@ielts/grading` | SM-2 spaced repetition, IELTS band scoring, diff, rubrics |
| `@ielts/shared-types` | Zod schemas shared across all apps |
| `@ielts/api-client` | HTTP fetch helpers |
| `@ielts/analytics-events` | Event schema definitions |

### Testing
- **Unit / integration:** Vitest (configured in each package that needs it)
  - `packages/grading` — already has tests (sm2, ielts-bands)
  - `apps/web` — configured at `apps/web/vitest.config.ts`
- **E2E:** Playwright (configured at `apps/web/playwright.config.ts`)
- Run unit tests: `pnpm test` (turbo) or `pnpm --filter @ielts/web test`
- Run E2E: `pnpm --filter @ielts/web test:e2e`

---

## Database Schema (packages/db/src/schema/)

| File | Tables |
|------|--------|
| `auth.ts` | users, sessions, accounts, verifications |
| `exam.ts` | exams, testPapers, testQuestions, testAttempts, attemptResponses |
| `vocab.ts` | vocabDecks, vocabCards, userCardState |
| `gamification.ts` | userGamification, xpEvents, leaderboardSnapshots, badges |
| `forum.ts` | forumTopics, forumReplies, forumVotes, forumReports |
| `content.ts` | lessons, lessonProgress, voiceSessions, aiThreads, aiMessages |
| `analytics.ts` | analyticsEvents, auditLog, notifications |

---

## Features

### ✅ Feature 1 — Mini English Placement Test (`/placement-test`)

A 15-question public quiz that assesses a student's current English level and recommends the right course.

**Implementation:**
- `apps/web/lib/placement.ts` — question bank (grammar × 5, vocabulary × 5, reading comprehension × 5) + scoring logic
- `apps/web/app/placement-test/page.tsx` — interactive quiz UI (client component)
- Results stored in `localStorage` key `ielts_placement_result`
- After completion, redirects to `/placement-test/results`

**Scoring → CEFR level:**
| Score (/ 15) | Level | Label |
|---|---|---|
| 0–4 | A1–A2 | Beginner |
| 5–8 | B1 | Lower Intermediate |
| 9–11 | B2 | Upper Intermediate |
| 12–15 | C1–C2 | Advanced |

**Course recommendations by level:**
- A1–A2 → IELTS/TOEFL/PTE Foundation course
- B1 → Foundation + Intermediate Boost
- B2 → Intermediate course
- C1–C2 → Advanced course

**Tests:**
- Unit: `apps/web/__tests__/placement.test.ts` — scoring function, edge cases, recommendation mapping
- E2E: `apps/web/e2e/placement-test.spec.ts` — complete quiz flow, result persistence

---

### ✅ Feature 2 — Bangla / English Language Toggle

A site-wide language switcher that flips all UI text between English and বাংলা (Bengali). Persists in `localStorage`.

**Implementation:**
- `apps/web/lib/i18n/translations.ts` — flat key-value translation map for `en` and `bn`
- `apps/web/components/providers/language-provider.tsx` — React context (`LanguageContext`) with `lang` state + `t()` function
- `apps/web/components/language-toggle.tsx` — "EN / বাংলা" toggle button used in the site header
- `apps/web/components/site-shell.tsx` — marked `'use client'`; uses `useLanguage()` for nav and footer text
- `apps/web/app/layout.tsx` — wraps app with `<LanguageProvider>`

**Translated surfaces:**
- Site header: logo, nav links, sign-in / get-started CTAs
- Site footer: all section headings and links
- Home page hero, CTA buttons, section titles
- Courses page
- Placement test instructions and UI chrome

**Note:** Placement test *questions* remain in English (they assess English proficiency).

**Tests:**
- Unit: `apps/web/__tests__/i18n.test.ts` — translation key coverage, fallback behaviour
- E2E: `apps/web/e2e/language-toggle.spec.ts` — toggle switches visible text, preference persists on reload

---

### ✅ Feature 3 — Courses Overview & Pricing (`/courses`, `/courses/[exam]`)

Structured exam-prep courses for IELTS, TOEFL, and PTE. Public overview of all modules; content locked behind sign-in + enrollment.

**Implementation:**
- `apps/web/lib/courses.ts` — static course catalogue (no DB; courses seeded to DB later)
- `apps/web/app/courses/page.tsx` — all-courses overview with three exam cards
- `apps/web/app/courses/[exam]/page.tsx` — individual exam page: module list, free/locked indicator, pricing section

**Course structure per exam:**

Each exam has 3 tiers:

| Tier | Price (BDT/month) | Band / Score target |
|------|-------------------|---------------------|
| Foundation | ৳2,999 | IELTS 5.0→6.5 · TOEFL 60→79 · PTE 50→64 |
| Intermediate | ৳4,999 | IELTS 6.5→7.5 · TOEFL 80→99 · PTE 65→79 |
| Advanced | ৳7,999 | IELTS 7.5+ · TOEFL 100+ · PTE 79+ |

**Module access rules:**
- First 2 modules per tier: free preview (visible to everyone)
- Remaining modules: locked (shows lock icon + "Enroll to access")
- Accessing locked content: requires sign-in + enrollment (payment flow TBD)

**Free resources included (no paywall):**
- British Council LearnEnglish (grammar, vocabulary)
- IELTS.org official sample tests
- ETS TOEFL free practice
- Pearson PTE free practice
- BBC Learning English
- Cambridge English YouTube channel

**Tests:**
- Unit: `apps/web/__tests__/courses.test.ts` — course data shape validation, pricing, module counts
- E2E: `apps/web/e2e/courses.spec.ts` — view all courses, visit exam page, verify locked/free modules, pricing visible

---

## Authentication & Enrollment (Planned — not yet implemented)

- **Sign in / Sign up:** Better Auth — email/password + Google + Facebook OAuth
- **Student area** (`/(student)/`): Protected by session middleware
- **Enrollment:** After choosing a course tier, student proceeds to payment (Bkash / card — TBD)
- **Access control:** `enrollments` table (to be added to schema) → gate course content
- **Current state:** Auth routes exist (`/(auth)/sign-in`, `/(auth)/sign-up`) but are wired to stubs

---

## Voice Coach, AI Instructor, Mock Tests (Planned)

These are stubbed routes in `/(student)/`. Full implementation requires:
1. AI service running on GPU VPS (`apps/ai-service`)
2. `.env` variables: `AI_SERVICE_URL`, `AI_SERVICE_TOKEN`, `DATABASE_URL`
3. Vercel Blob for audio storage (`BLOB_READ_WRITE_TOKEN`)

---

## Environment Variables

Copy `.env.example` to `.env.local` in `apps/web`:

```
DATABASE_URL=postgres://...
BETTER_AUTH_SECRET=<random 32-char string>
BETTER_AUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=...
GOOGLE_CLIENT_SECRET=...
AI_SERVICE_URL=http://localhost:8000
AI_SERVICE_TOKEN=...
BLOB_READ_WRITE_TOKEN=...
RESEND_API_KEY=...
POSTHOG_KEY=...
```

---

## Running the Project

```bash
# Install dependencies (first time)
pnpm install

# Start all apps in dev mode
pnpm dev

# Web only
pnpm --filter @ielts/web dev

# Database
pnpm db:generate   # generate migration files
pnpm db:migrate    # apply migrations
pnpm db:studio     # open Drizzle Studio

# Tests
pnpm test                              # all unit tests (turbo)
pnpm --filter @ielts/web test          # web unit tests only
pnpm --filter @ielts/web test:e2e      # web E2E tests (Playwright)
```

---

## Directory Structure (web app)

```
apps/web/
  app/
    (auth)/          sign-in, sign-up
    (student)/       dashboard, tests, lessons, vocab, voice, ai-instructor, forum, leaderboard, onboarding
    admin/           users, papers, analytics
    api/             auth, health, me, grade, ai, voice, vocab, cron
    courses/         [exam]/page.tsx   ← Feature 3
    placement-test/  page.tsx          ← Feature 1
    ielts/ toefl/ pte/ english/ about/ contact/ privacy/ terms/
    layout.tsx       globals.css page.tsx
  components/
    ui/              button, card, input, label
    providers/       theme-provider, query-provider, language-provider  ← Feature 2
    site-shell.tsx   language-toggle.tsx                                ← Feature 2
  lib/
    placement.ts     ← Feature 1
    courses.ts       ← Feature 3
    i18n/            translations.ts index.ts  ← Feature 2
    session.ts  ai-service.ts
  hooks/
    use-language.ts  ← Feature 2
  __tests__/         placement.test.ts  i18n.test.ts  courses.test.ts
  e2e/               placement-test.spec.ts  language-toggle.spec.ts  courses.spec.ts
  vitest.config.ts   playwright.config.ts
```
