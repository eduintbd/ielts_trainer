'use client';

import { useState, useMemo } from 'react';
import { SiteShell, Section } from '@/components/site-shell';
import { useLanguage } from '@/components/providers/language-provider';
import { VOCAB_WORDS, VOCAB_TIERS, POS_BADGE } from '@/lib/learn/vocabulary';

const CONTENT = {
  en: {
    badge: 'Free Learning Hub / Vocabulary',
    h1: 'Frequency-ranked vocabulary for IELTS.',
    desc: 'Based on the COCA (Corpus of Contemporary American English) frequency list — 80 high-value words across 4 tiers. Tier 1 is essential for all candidates; Tier 4 differentiates Band 7+ writers.',
    searchPlaceholder: 'Search words…',
    noResults: 'No words match your search.',
    taskBadge: { writing: 'Writing', speaking: 'Speaking', both: 'Both skills' },
    example: 'Example:',
    collocations: 'Key collocations:',
    definition: 'Definition',
  },
  bn: {
    badge: 'বিনামূল্যে লার্নিং হাব / শব্দভাণ্ডার',
    h1: 'IELTS এর জন্য ফ্রিকোয়েন্সি-র‍্যাংকড শব্দভাণ্ডার।',
    desc: 'COCA (Corpus of Contemporary American English) ফ্রিকোয়েন্সি তালিকার উপর ভিত্তি করে — ৪টি স্তরে ৮০টি উচ্চ-মূল্যের শব্দ। স্তর ১ সব প্রার্থীদের জন্য অপরিহার্য; স্তর ৪ Band ৭+ লেখকদের আলাদা করে।',
    searchPlaceholder: 'শব্দ খুঁজুন…',
    noResults: 'আপনার অনুসন্ধানের সাথে কোনো শব্দ মেলে না।',
    taskBadge: { writing: 'লেখা', speaking: 'কথা বলা', both: 'উভয় দক্ষতা' },
    example: 'উদাহরণ:',
    collocations: 'মূল Collocations:',
    definition: 'সংজ্ঞা',
  },
};

const TIER_COLORS: Record<number, string> = {
  1: 'bg-green-100 text-green-800 border-green-200',
  2: 'bg-blue-100 text-blue-800 border-blue-200',
  3: 'bg-purple-100 text-purple-800 border-purple-200',
  4: 'bg-rose-100 text-rose-800 border-rose-200',
};

export default function VocabularyPage() {
  const { lang } = useLanguage();
  const c = CONTENT[lang];
  const [activeTier, setActiveTier] = useState<0 | 1 | 2 | 3 | 4>(0);
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    let words = activeTier === 0 ? VOCAB_WORDS : VOCAB_WORDS.filter(w => w.tier === activeTier);
    if (query.trim()) {
      const q = query.toLowerCase();
      words = words.filter(
        w =>
          w.word.toLowerCase().includes(q) ||
          w.definition.toLowerCase().includes(q) ||
          w.collocations.some(col => col.toLowerCase().includes(q)),
      );
    }
    return words;
  }, [activeTier, query]);

  return (
    <SiteShell>
      <section className="mx-auto max-w-3xl px-4 py-14">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">{c.badge}</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">{c.h1}</h1>
        <p className="mt-4 text-base text-muted-foreground md:text-lg">{c.desc}</p>
      </section>

      <Section title="">
        {/* Tier filter */}
        <div className="mb-5 flex flex-wrap gap-2">
          {VOCAB_TIERS.map((tier) => (
            <button
              key={tier.value}
              onClick={() => setActiveTier(tier.value as 0 | 1 | 2 | 3 | 4)}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                activeTier === tier.value
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'bg-background text-muted-foreground hover:border-primary hover:text-foreground'
              }`}
            >
              {lang === 'en' ? tier.label : tier.labelBn}
              <span className="ml-1.5 text-xs opacity-70">({tier.count})</span>
            </button>
          ))}
        </div>

        {/* Search */}
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={c.searchPlaceholder}
          className="mb-6 w-full max-w-sm rounded-lg border bg-background px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/40"
        />

        {filtered.length === 0 ? (
          <p className="text-sm text-muted-foreground">{c.noResults}</p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((word) => (
              <div key={word.word} className="flex flex-col rounded-xl border bg-card p-5">
                {/* Header */}
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-lg font-bold">{word.word}</p>
                    <div className="mt-1 flex flex-wrap gap-1.5">
                      <span className={`rounded-full border px-2 py-0.5 text-xs font-medium ${POS_BADGE[word.pos]}`}>
                        {word.pos}
                      </span>
                      <span className={`rounded-full border px-2 py-0.5 text-xs font-medium ${TIER_COLORS[word.tier]}`}>
                        T{word.tier}
                      </span>
                      {word.ieltsTask && (
                        <span className="rounded-full border bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                          {c.taskBadge[word.ieltsTask]}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Definition */}
                <p className="mt-3 text-sm font-medium">{lang === 'en' ? word.definition : word.definitionBn}</p>

                {/* Example */}
                <p className="mt-2 text-xs text-muted-foreground">
                  <span className="font-semibold text-foreground">{c.example}</span>{' '}
                  <em>{word.example}</em>
                </p>

                {/* Collocations */}
                <div className="mt-3 flex flex-wrap gap-1">
                  {word.collocations.map((col) => (
                    <span
                      key={col}
                      className="rounded bg-muted px-2 py-0.5 text-xs text-muted-foreground"
                    >
                      {col}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </Section>
    </SiteShell>
  );
}
