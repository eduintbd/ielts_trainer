---
name: feedback-i18n-pattern
description: How to handle bilingual content — translation keys vs inline CONTENT objects
metadata:
  type: feedback
---

Use **inline `CONTENT = { en: {...}, bn: {...} }` objects** for long-form page content (informational pages, marketing copy, detailed guides). Use **`translations.ts` key-value pairs** only for short, reusable UI strings shared across multiple components (nav, footer, buttons, labels).

**Why:** Adding 100+ keys to translations.ts for a single page's body copy makes the file unwieldy and hard to maintain. Inline content objects keep each page self-contained. This pattern was established and validated across 15+ pages (2026-05-18 to 2026-05-19) without pushback.

**How to apply:**
- Short shared UI strings (nav labels, button text, form labels) → `translations.ts` + `t()` call
- Page-level body content (section titles, paragraphs, tile content, bullet lists) → inline `CONTENT = { en, bn }` at the top of the component file
- To use: `const { lang } = useLanguage(); const c = CONTENT[lang];`
- Pages with inline CONTENT must be `'use client'` — remove `export const metadata` (acceptable SEO trade-off, same as `/courses` page)
- Keep English technical terms (band scores, exam acronyms, phonetic symbols) in both `en` and `bn` objects — don't translate them
