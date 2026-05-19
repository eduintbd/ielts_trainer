'use client';

import Link from 'next/link';
import { ArrowRight, PenLine } from 'lucide-react';
import { SiteShell, Section, Tile } from '@/components/site-shell';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/providers/language-provider';

const CONTENT = {
  en: {
    badge: 'English Mastery / Writing',
    h1: 'Write English without translating from Bangla.',
    desc: "The bad essays Bangladeshi students hand in are not bad because of vocabulary. They are Bangla sentence structures wearing English words. This module rewires the writing process itself.",
    essayCta: 'Get essay feedback',
    startFree: 'Start free',
    trap: {
      title: 'The translation trap',
      subtitle: 'Every Bangla speaker has done this. Recognise it, kill it.',
      banglaThought: 'Bangla thought:',
      literal: 'Translated literally:',
      typed: 'What you typed:',
      band7label: 'What a Band 7 writer types:',
      notice: 'Notice: the Band 7 sentence is shorter, leads with the subject, uses a strong verb (benefits) instead of "is useful," and lands one specific idea instead of a generic claim.',
    },
    templates: {
      title: 'The five paragraph templates you actually need',
      t1: 'Opinion paragraph (PEEL)',
      t1b: 'Point. Explain. Example. Link. Used for Task 2 essays, TOEFL independent writing, PTE essay.',
      t2: 'Compare-and-contrast',
      t2b: 'Two subjects, three points of comparison, one verdict. Used for trend graphs, lifestyle topics, education.',
      t3: 'Problem-solution',
      t3b: 'One paragraph for the problem (with cause), one for solution (with mechanism). Half the IELTS Task 2 prompts.',
      t4: 'Cause-and-effect',
      t4b: 'Two clear causes, two clear effects. Don\'t mix them in one sentence. Use connectors: consequently, as a result, this drives.',
      t5: 'Description (graph / process)',
      t5b: 'Overview sentence → key trend → second trend → small detail. IELTS Task 1 lives or dies on this template.',
      t6: 'Narrative (one paragraph)',
      t6b: 'Setup → turn → outcome → reflection. Rare in exams but priceless for emails, cover letters, and TOEFL integrated tasks.',
    },
    leaks: {
      title: 'The grammar leaks that quietly kill your band',
      l1: 'Articles (a / an / the). Bangla has no articles. English uses them constantly. Rule of thumb: "the" for one specific thing both writer and reader know; "a / an" for one of many; nothing for plurals in general.',
      l2: 'Tense agreement. "Yesterday I go to market and buying fish." You switched tenses three times in one clause. Pick a tense per paragraph and stick to it.',
      l3: 'Pluralisation. "Many student" instead of "many students." Bangla plurals do not require -s. English does.',
      l4: 'Prepositions. "Discuss about," "married with," "different than." All wrong. Learn collocations as fixed units; do not translate.',
      l5: 'Run-on sentences. Bangla allows long flowing clauses joined by commas. English requires a full stop or a semicolon. When in doubt, end the sentence.',
    },
    habit: {
      title: 'The 200-word daily habit',
      desc: 'One opinion paragraph per day, on any topic, submitted to the AI tutor for feedback. After 30 days you will have written 6,000 words — more than your entire previous year of school English.',
      todayLabel: "Today's prompt",
      prompt: '"Some people think social media has weakened real friendships in Bangladesh. Do you agree?"',
      s1: 'Use the PEEL template.',
      s2: 'Aim for 200–230 words.',
      s3: 'Submit to the AI tutor. Read the feedback once. Don\'t argue with it.',
      s4: 'Tomorrow, rewrite the weakest sentence the AI flagged.',
      cta: 'Submit to the AI tutor',
    },
  },
  bn: {
    badge: 'ইংরেজি দক্ষতা / রাইটিং',
    h1: 'বাংলা থেকে অনুবাদ না করে ইংরেজিতে লিখুন।',
    desc: "বাংলাদেশি শিক্ষার্থীরা যে খারাপ রচনা জমা দেয় তা শব্দভাণ্ডারের জন্য খারাপ নয়। সেগুলো ইংরেজি শব্দ পরিধান করা বাংলা বাক্য-গঠন। এই মডিউল লেখার প্রক্রিয়াটিই নতুন করে তৈরি করে।",
    essayCta: 'রচনার ফিডব্যাক নিন',
    startFree: 'বিনামূল্যে শুরু করুন',
    trap: {
      title: 'অনুবাদের ফাঁদ',
      subtitle: 'প্রতিটি বাংলাভাষী এটা করেছে। চিনুন, দূর করুন।',
      banglaThought: 'বাংলা চিন্তা:',
      literal: 'আক্ষরিক অনুবাদ:',
      typed: 'আপনি যা টাইপ করলেন:',
      band7label: 'ব্যান্ড ৭ লেখক যা টাইপ করে:',
      notice: 'লক্ষ্য করুন: ব্যান্ড ৭ বাক্যটি ছোট, বিষয় দিয়ে শুরু, শক্তিশালী ক্রিয়া (benefits) "is useful" এর বদলে, এবং একটি সাধারণ দাবির পরিবর্তে একটি নির্দিষ্ট ধারণা দেয়।',
    },
    templates: {
      title: 'আপনার আসলে যে পাঁচটি প্যারাগ্রাফ টেমপ্লেট দরকার',
      t1: 'মতামত প্যারাগ্রাফ (PEEL)',
      t1b: 'Point. Explain. Example. Link. Task 2 রচনা, TOEFL স্বাধীন রাইটিং, PTE রচনায় ব্যবহৃত।',
      t2: 'তুলনা-বিপরীতকরণ',
      t2b: 'দুটি বিষয়, তিনটি তুলনার পয়েন্ট, একটি রায়। প্রবণতা গ্রাফ, জীবনধারা বিষয়, শিক্ষার জন্য।',
      t3: 'সমস্যা-সমাধান',
      t3b: 'সমস্যার জন্য একটি প্যারাগ্রাফ (কারণ সহ), সমাধানের জন্য একটি (পদ্ধতি সহ)। অর্ধেক IELTS Task 2 প্রম্পট।',
      t4: 'কারণ-প্রতিক্রিয়া',
      t4b: 'দুটি স্পষ্ট কারণ, দুটি স্পষ্ট প্রতিক্রিয়া। এগুলো এক বাক্যে মিশ্রিত করবেন না। সংযোগকারী ব্যবহার করুন: consequently, as a result, this drives।',
      t5: 'বিবরণ (গ্রাফ / প্রক্রিয়া)',
      t5b: 'ওভারভিউ বাক্য → মূল প্রবণতা → দ্বিতীয় প্রবণতা → ছোট বিস্তারিত। IELTS Task 1 এই টেমপ্লেটেই বাঁচে বা মারে।',
      t6: 'বর্ণনা (এক প্যারাগ্রাফ)',
      t6b: 'সেটআপ → মোড় → ফলাফল → প্রতিফলন। পরীক্ষায় বিরল কিন্তু ইমেইল, কভার লেটার এবং TOEFL ইন্টিগ্রেটেড টাস্কে অমূল্য।',
    },
    leaks: {
      title: 'যে ব্যাকরণের ফুটোগুলো চুপচাপ ব্যান্ড মেরে ফেলে',
      l1: 'Articles (a / an / the)। বাংলায় আর্টিকেল নেই। ইংরেজি ক্রমাগত ব্যবহার করে। নিয়ম: নির্দিষ্ট এক জিনিসের জন্য "the"; অনেকের মধ্যে একটির জন্য "a / an"; সাধারণ বহুবচনে কিছু নেই।',
      l2: 'Tense agreement। "Yesterday I go to market and buying fish." এক ক্লজে তিনবার কাল পরিবর্তন। প্রতিটি প্যারাগ্রাফে একটি কাল বেছে নিন এবং মেনে চলুন।',
      l3: 'Pluralisation। "Many student" বলছেন "many students" এর জায়গায়। বাংলা বহুবচনে -s দরকার হয় না। ইংরেজিতে দরকার।',
      l4: 'Prepositions। "Discuss about," "married with," "different than।" সবই ভুল। কোলোকেশন স্থির একক হিসেবে শিখুন; অনুবাদ করবেন না।',
      l5: 'Run-on sentences। বাংলায় কমা দিয়ে যুক্ত দীর্ঘ প্রবাহমান ক্লজ অনুমোদিত। ইংরেজিতে পূর্ণ থামা বা সেমিকোলন দরকার। সন্দেহ হলে বাক্য শেষ করুন।',
    },
    habit: {
      title: '২০০-শব্দের দৈনিক অভ্যাস',
      desc: 'প্রতিদিন যেকোনো বিষয়ে একটি মতামত প্যারাগ্রাফ, AI টিউটরে ফিডব্যাকের জন্য জমা দিন। ৩০ দিন পরে ৬,০০০ শব্দ লেখা হবে — স্কুলের পুরো এক বছরের ইংরেজির চেয়ে বেশি।',
      todayLabel: 'আজকের প্রম্পট',
      prompt: '"Some people think social media has weakened real friendships in Bangladesh. Do you agree?"',
      s1: 'PEEL টেমপ্লেট ব্যবহার করুন।',
      s2: '২০০–২৩০ শব্দের লক্ষ্য রাখুন।',
      s3: 'AI টিউটরে জমা দিন। একবার ফিডব্যাক পড়ুন। তর্ক করবেন না।',
      s4: 'আগামীকাল AI-এর চিহ্নিত দুর্বলতম বাক্যটি পুনরায় লিখুন।',
      cta: 'AI টিউটরে জমা দিন',
    },
  },
};

export default function WritingPage() {
  const { lang } = useLanguage();
  const c = CONTENT[lang];

  return (
    <SiteShell>
      <section className="mx-auto max-w-3xl px-4 py-14">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">{c.badge}</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">{c.h1}</h1>
        <p className="mt-4 text-base text-muted-foreground md:text-lg">{c.desc}</p>
        <div className="mt-6 flex gap-3">
          <Button asChild>
            <Link href="/ai-instructor">
              <PenLine className="mr-2 h-4 w-4" /> {c.essayCta}
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/sign-up">{c.startFree}</Link>
          </Button>
        </div>
      </section>

      <Section title={c.trap.title} subtitle={c.trap.subtitle}>
        <div className="rounded-lg border bg-card p-5">
          <p className="text-sm font-semibold">{c.trap.banglaThought}</p>
          <p className="mt-1 text-sm text-muted-foreground">আমার মতে, প্রযুক্তি ছাত্রদের জন্য খুব উপকারী।</p>
          <p className="mt-4 text-sm font-semibold">{c.trap.literal}</p>
          <p className="mt-1 text-sm text-muted-foreground">
            &ldquo;In my opinion, technology students for very useful is.&rdquo;
          </p>
          <p className="mt-4 text-sm font-semibold">{c.trap.typed}</p>
          <p className="mt-1 text-sm text-muted-foreground">
            &ldquo;In my opinion the technology for the students is very much useful.&rdquo;
          </p>
          <p className="mt-4 text-sm font-semibold text-primary">{c.trap.band7label}</p>
          <p className="mt-1 text-sm">
            &ldquo;Technology benefits students enormously — particularly in self-directed learning.&rdquo;
          </p>
          <p className="mt-4 text-xs text-muted-foreground">{c.trap.notice}</p>
        </div>
      </Section>

      <Section title={c.templates.title}>
        <div className="grid gap-4 md:grid-cols-2">
          <Tile title={c.templates.t1}>{c.templates.t1b}</Tile>
          <Tile title={c.templates.t2}>{c.templates.t2b}</Tile>
          <Tile title={c.templates.t3}>{c.templates.t3b}</Tile>
          <Tile title={c.templates.t4}>{c.templates.t4b}</Tile>
          <Tile title={c.templates.t5}>{c.templates.t5b}</Tile>
          <Tile title={c.templates.t6}>{c.templates.t6b}</Tile>
        </div>
      </Section>

      <Section title={c.leaks.title}>
        <ol className="space-y-3 text-sm">
          {[c.leaks.l1, c.leaks.l2, c.leaks.l3, c.leaks.l4, c.leaks.l5].map((leak, i) => (
            <li key={i} className="rounded-lg border bg-card p-4">{leak}</li>
          ))}
        </ol>
      </Section>

      <Section title={c.habit.title}>
        <p className="text-sm text-muted-foreground">{c.habit.desc}</p>
        <div className="mt-4 rounded-lg border bg-card p-5">
          <p className="text-sm font-semibold">{c.habit.todayLabel}</p>
          <p className="mt-1 text-sm">{c.habit.prompt}</p>
          <ol className="mt-3 list-decimal space-y-1 pl-5 text-xs text-muted-foreground">
            <li>{c.habit.s1}</li>
            <li>{c.habit.s2}</li>
            <li>{c.habit.s3}</li>
            <li>{c.habit.s4}</li>
          </ol>
          <Button asChild className="mt-4">
            <Link href="/ai-instructor">
              {c.habit.cta} <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Section>
    </SiteShell>
  );
}
