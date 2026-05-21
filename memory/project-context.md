---
name: project-context
description: IELTS Trainer — built features, tech decisions, what's next
metadata:
  type: project
---

## Status as of 2026-05-19

### Features fully implemented and tested

1. **Placement test** (`/placement-test`) — 15-question quiz drawn randomly from a 300-question bank (100 grammar + 100 vocab + 20 reading passages × 5 questions). CEFR scoring, course recommendations stored in localStorage. Back-navigation bug fixed (state resets to intro before pushing to results).

2. **Language toggle** — EN/বাংলা site-wide switcher via `LanguageProvider` context; defaults to Bangla; persisted in localStorage. Translation keys live in `apps/web/lib/i18n/translations.ts`. Long-form page content uses inline `CONTENT = { en, bn }` objects inside each component (see i18n pattern below).

3. **Courses with pricing** — `/courses` overview + `/courses/[exam]` pages for IELTS, TOEFL, PTE. Three tiers per exam at ৳2,999 / ৳4,999 / ৳7,999. First 2 modules per tier are free previews linking to real resources; rest locked behind sign-in + enrollment.

4. **Full bilingual site** — Every public-facing page is now bilingual. Pages converted in three sessions:
   - Session 2 (2026-05-18): home, courses, courses/[exam], placement-test, placement-test/results, site-shell nav/footer.
   - Session 3 (2026-05-19): `/english`, `/ielts`, `/toefl`, `/pte`, all 6 `/english/*` sub-pages, and `/about`, `/contact`, `/privacy`, `/terms`.
   - `/courses` data layer: course titles, descriptions, tier names now go through `t()` with dedicated keys in translations.ts.

### Auth (implemented 2026-05-14)

- Supabase Auth (`@supabase/supabase-js` + `@supabase/ssr`)
- `lib/supabase/client.ts` (browser) + `lib/supabase/server.ts` (server components)
- Middleware refreshes session; graceful no-op if env vars missing
- `app/auth/callback/route.ts` — OAuth code exchange (Google, Facebook)
- `AuthProvider` context exposes `useAuth()` hook
- Header shows Dashboard + Sign out when logged in, Sign in + Get started when not
- **Requires env vars:** `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`

### Tests

- 88 unit tests (Vitest) — all pass. Run: `pnpm --filter @ielts/web test`
- E2E tests (Playwright) configured at `apps/web/playwright.config.ts`

5. **Free Learning Hub** (`/learn`) — Comprehensive module added 2026-05-19 from 5 GitHub repos (COCA, PersonaLingo, awesome-english, awesome-IELTS, IELTS-Grammar):
   - `/learn` hub page — 4 module cards with stats
   - `/learn/vocabulary` — 80 COCA-inspired frequency-ranked words across 4 tiers, filterable + searchable, bilingual
   - `/learn/speaking-topics` — 12 Part 1 topics, 8 Part 2 cue cards, 8 Part 3 discussion topics; expandable cards with band tips + vocab
   - `/learn/resources` — 35 curated free resources across 7 skill categories (listening, speaking, reading, writing, vocabulary, grammar, mock-tests)
   - Nav updated: "Learn Free" added to header + footer in both EN/BN
   - Data files: `apps/web/lib/learn/{vocabulary,speaking-topics,resources}.ts`

### What's next

- Enrollment + payment (Bkash / card)
- Connect AI service for voice coach and grading
- Connect database (PostgreSQL via Drizzle)

**How to apply:** When resuming, check CLAUDE.md in the repo root for the full feature map and directory structure before implementing anything. All public-facing content pages are bilingual — no English-only pages remain.
