'use client';

import Link from 'next/link';
import { ArrowRight, BookOpen } from 'lucide-react';
import { SiteShell, Section, Tile } from '@/components/site-shell';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/providers/language-provider';

const CONTENT = {
  en: {
    badge: 'English Mastery / Reading',
    h1: 'Read for meaning, not for every word.',
    desc: "Bangladeshi students are usually the strongest at reading — but in the wrong way. School trains you to translate every sentence. The exam asks you to find specific information in 700 words in 9 minutes. Different skill. Different muscle.",
    testsCta: 'Reading practice tests',
    startFree: 'Start free',
    fourpass: {
      title: 'The four-pass method',
      subtitle: 'The single technique that unlocks Band 8 reading.',
      p1: 'Pass 1 · 60-second skim',
      p1b: 'Read only the title, first sentence of each paragraph, and the last sentence. Ignore everything else. You are building a mental map of the passage, not understanding it.',
      p2: 'Pass 2 · Read the questions',
      p2b: 'Now read all the questions. Underline keywords — names, numbers, dates, capitalised terms. These are your scan targets.',
      p3: 'Pass 3 · Scan for answers',
      p3b: 'Go question by question. Use your mental map to jump to the right paragraph. Read only the 2-3 sentences around your scan target. Answer. Move on.',
      p4: 'Pass 4 · Verify uncertain answers',
      p4b: 'The questions you weren\'t sure about — these are usually paraphrased. Look for synonyms, not exact wording. "Inexpensive" in the question = "low-cost" in the passage.',
    },
    qtypes: {
      title: 'The five question types and how to crack them',
      t1: 'True / False / Not Given',
      t1b: 'The trap is "Not Given." If the passage doesn\'t say it — even if it sounds plausible — the answer is NG, not False.',
      t2: 'Matching headings',
      t2b: 'Look at the first AND last sentence of each paragraph. The heading is usually a paraphrase of one of these. Eliminate before guessing.',
      t3: 'Sentence completion',
      t3b: 'Match keywords first, then look at grammar. The word you insert must fit grammatically with what\'s around the blank.',
      t4: 'Multiple choice',
      t4b: 'The wrong answers are often half-true. Eliminate before choosing. Two options will sound similar — one of them is the distractor.',
      t5: 'Summary completion',
      t5b: 'The summary is in a different order than the passage. Don\'t expect linearity. Map the keywords first.',
      t6: 'Diagram / flow-chart labels',
      t6b: 'Read the passage in chronological order around the process described. Bangla speakers often skip — don\'t. Process descriptions are linear by design.',
    },
    newspaper: {
      title: 'The two-newspaper rule',
      p1: 'Read two articles per day from the international press. One from a British paper (The Guardian, BBC, The Economist) and one from an American (The Atlantic, NYT, Washington Post). Why two? Different vocabulary, different sentence rhythm, different idioms.',
      p2: 'Spend 5 minutes reading, 2 minutes summarising aloud in English. Do this for a month and the IELTS reading test becomes routine.',
    },
    speed: {
      title: 'Speed targets you should hit before the exam',
      ielts: 'IELTS Academic Reading: 60 minutes, 3 passages, 40 questions. Aim for 18 minutes per passage with 6 minutes left to verify.',
      toefl: 'TOEFL Reading: 35 minutes, 2 passages, 20 questions. ~17 minutes per passage including all questions.',
      pte: 'PTE Reading: Mixed item types, ~30 minutes total. Each item takes 90 seconds to 3 minutes. Speed comes from practising the item types, not from reading faster.',
      cta: 'Take a timed reading test',
    },
  },
  bn: {
    badge: 'ইংরেজি দক্ষতা / রিডিং',
    h1: 'প্রতিটি শব্দ নয়, অর্থের জন্য পড়ুন।',
    desc: "বাংলাদেশি শিক্ষার্থীরা সাধারণত রিডিংয়ে সবচেয়ে শক্তিশালী — কিন্তু ভুলভাবে। স্কুল আপনাকে প্রতিটি বাক্য অনুবাদ করতে প্রশিক্ষণ দেয়। পরীক্ষা চায় ৯ মিনিটে ৭০০ শব্দে নির্দিষ্ট তথ্য খুঁজে বের করতে। ভিন্ন দক্ষতা। ভিন্ন পেশি।",
    testsCta: 'রিডিং প্র্যাকটিস টেস্ট',
    startFree: 'বিনামূল্যে শুরু করুন',
    fourpass: {
      title: 'চার-পাস পদ্ধতি',
      subtitle: 'একটিমাত্র কৌশল যা ব্যান্ড ৮ রিডিং খুলে দেয়।',
      p1: 'পাস ১ · ৬০-সেকেন্ড স্কিম',
      p1b: 'শুধু শিরোনাম, প্রতিটি প্যারাগ্রাফের প্রথম বাক্য এবং শেষ বাক্য পড়ুন। বাকি সব উপেক্ষা করুন। অনুচ্ছেদের মানসিক মানচিত্র তৈরি করছেন, বুঝছেন না।',
      p2: 'পাস ২ · প্রশ্নগুলো পড়ুন',
      p2b: 'এখন সব প্রশ্ন পড়ুন। কীওয়ার্ড আন্ডারলাইন করুন — নাম, সংখ্যা, তারিখ, বড় হাতের শব্দ। এগুলোই আপনার স্ক্যান লক্ষ্য।',
      p3: 'পাস ৩ · উত্তর স্ক্যান করুন',
      p3b: 'প্রশ্ন ধরে ধরে যান। মানসিক মানচিত্র ব্যবহার করে সঠিক প্যারাগ্রাফে যান। স্ক্যান লক্ষ্যের চারপাশে শুধু ২-৩ বাক্য পড়ুন। উত্তর দিন। এগিয়ে যান।',
      p4: 'পাস ৪ · অনিশ্চিত উত্তর যাচাই করুন',
      p4b: 'যে প্রশ্নগুলোতে নিশ্চিত ছিলেন না — এগুলো সাধারণত প্যারাফ্রেজ করা। হুবহু শব্দ নয়, সমার্থক শব্দ খুঁজুন। প্রশ্নে "Inexpensive" = অনুচ্ছেদে "low-cost।"',
    },
    qtypes: {
      title: 'পাঁচটি প্রশ্নের ধরন এবং কীভাবে সমাধান করবেন',
      t1: 'True / False / Not Given',
      t1b: 'ফাঁদ হলো "Not Given।" অনুচ্ছেদে বলা না থাকলে — এমনকি যুক্তিসঙ্গত শোনালেও — উত্তর NG, False নয়।',
      t2: 'Matching headings',
      t2b: 'প্রতিটি প্যারাগ্রাফের প্রথম এবং শেষ বাক্য দেখুন। শিরোনাম সাধারণত এর একটির প্যারাফ্রেজ। অনুমানের আগে বাদ দিন।',
      t3: 'Sentence completion',
      t3b: 'প্রথমে কীওয়ার্ড মেলান, তারপর ব্যাকরণ দেখুন। যে শব্দটি বসাবেন তা আশেপাশের কথার সাথে ব্যাকরণগতভাবে মানানসই হতে হবে।',
      t4: 'Multiple choice',
      t4b: 'ভুল উত্তরগুলো প্রায়ই আংশিক সত্য। বেছে নেওয়ার আগে বাদ দিন। দুটি অপশন একই শোনাবে — একটি বিক্ষেপকারী।',
      t5: 'Summary completion',
      t5b: 'সারসংক্ষেপ অনুচ্ছেদের থেকে ভিন্ন ক্রমে থাকে। রৈখিকতার আশা করবেন না। প্রথমে কীওয়ার্ড ম্যাপ করুন।',
      t6: 'Diagram / flow-chart labels',
      t6b: 'বর্ণিত প্রক্রিয়ার চারপাশে কালানুক্রমিক ক্রমে অনুচ্ছেদ পড়ুন। বাংলাভাষীরা প্রায়ই এড়িয়ে যান — যাবেন না। প্রক্রিয়া বিবরণ রৈখিক।',
    },
    newspaper: {
      title: 'দুই-সংবাদপত্রের নিয়ম',
      p1: 'আন্তর্জাতিক সংবাদমাধ্যম থেকে প্রতিদিন দুটি নিবন্ধ পড়ুন। একটি ব্রিটিশ (The Guardian, BBC, The Economist) এবং একটি আমেরিকান (The Atlantic, NYT, Washington Post) থেকে। কেন দুটি? ভিন্ন শব্দভাণ্ডার, ভিন্ন বাক্যের ছন্দ, ভিন্ন বাগধারা।',
      p2: '৫ মিনিট পড়ুন, ২ মিনিট ইংরেজিতে জোরে সারসংক্ষেপ করুন। এটি এক মাস করলে IELTS রিডিং টেস্ট রুটিন হয়ে যাবে।',
    },
    speed: {
      title: 'পরীক্ষার আগে যে গতি লক্ষ্য করা উচিত',
      ielts: 'IELTS একাডেমিক রিডিং: ৬০ মিনিট, ৩টি অনুচ্ছেদ, ৪০টি প্রশ্ন। প্রতিটি অনুচ্ছেদে ১৮ মিনিট এবং যাচাইয়ের জন্য ৬ মিনিট লক্ষ্য রাখুন।',
      toefl: 'TOEFL রিডিং: ৩৫ মিনিট, ২টি অনুচ্ছেদ, ২০টি প্রশ্ন। সব প্রশ্নসহ প্রতিটি অনুচ্ছেদে ~১৭ মিনিট।',
      pte: 'PTE রিডিং: মিশ্র আইটেম টাইপ, মোট ~৩০ মিনিট। প্রতিটি আইটেমে ৯০ সেকেন্ড থেকে ৩ মিনিট। গতি আসে আইটেম টাইপ অনুশীলন থেকে, দ্রুত পড়া থেকে নয়।',
      cta: 'সময়সীমা রিডিং টেস্ট নিন',
    },
  },
};

export default function ReadingPage() {
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
            <Link href="/tests">
              <BookOpen className="mr-2 h-4 w-4" /> {c.testsCta}
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/sign-up">{c.startFree}</Link>
          </Button>
        </div>
      </section>

      <Section title={c.fourpass.title} subtitle={c.fourpass.subtitle}>
        <ol className="space-y-4">
          {(['p1', 'p2', 'p3', 'p4'] as const).map((p) => (
            <li key={p} className="rounded-lg border bg-card p-5">
              <p className="text-sm font-semibold text-primary">{c.fourpass[p]}</p>
              <p className="mt-2 text-sm text-muted-foreground">{c.fourpass[`${p}b` as `${typeof p}b`]}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section title={c.qtypes.title}>
        <div className="grid gap-4 md:grid-cols-2">
          <Tile title={c.qtypes.t1}>{c.qtypes.t1b}</Tile>
          <Tile title={c.qtypes.t2}>{c.qtypes.t2b}</Tile>
          <Tile title={c.qtypes.t3}>{c.qtypes.t3b}</Tile>
          <Tile title={c.qtypes.t4}>{c.qtypes.t4b}</Tile>
          <Tile title={c.qtypes.t5}>{c.qtypes.t5b}</Tile>
          <Tile title={c.qtypes.t6}>{c.qtypes.t6b}</Tile>
        </div>
      </Section>

      <Section title={c.newspaper.title}>
        <div className="rounded-lg border bg-card p-5">
          <p className="text-sm">
            <span className="font-semibold">
              {lang === 'bn' ? 'প্রতিদিন দুটি নিবন্ধ' : 'two articles per day'}
            </span>{' '}
            {lang === 'bn'
              ? c.newspaper.p1.replace('আন্তর্জাতিক সংবাদমাধ্যম থেকে প্রতিদিন দুটি নিবন্ধ পড়ুন।', '').trim()
              : c.newspaper.p1.replace('Read two articles per day from the international press.', '').trim()}
          </p>
          <p className="mt-3 text-sm">{c.newspaper.p2}</p>
        </div>
      </Section>

      <Section title={c.speed.title}>
        <ul className="space-y-2 text-sm">
          <li className="rounded-lg border bg-card p-4">
            <span className="font-semibold">{lang === 'bn' ? 'IELTS একাডেমিক রিডিং:' : 'IELTS Academic Reading:'}</span>{' '}
            {c.speed.ielts.replace(/^(IELTS Academic Reading:|IELTS একাডেমিক রিডিং:)\s*/, '')}
          </li>
          <li className="rounded-lg border bg-card p-4">
            <span className="font-semibold">{lang === 'bn' ? 'TOEFL রিডিং:' : 'TOEFL Reading:'}</span>{' '}
            {c.speed.toefl.replace(/^(TOEFL Reading:|TOEFL রিডিং:)\s*/, '')}
          </li>
          <li className="rounded-lg border bg-card p-4">
            <span className="font-semibold">{lang === 'bn' ? 'PTE রিডিং:' : 'PTE Reading:'}</span>{' '}
            {c.speed.pte.replace(/^(PTE Reading:|PTE রিডিং:)\s*/, '')}
          </li>
        </ul>
        <Button asChild className="mt-5">
          <Link href="/tests">
            {c.speed.cta} <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </Section>
    </SiteShell>
  );
}
