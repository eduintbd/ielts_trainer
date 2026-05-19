'use client';

import Link from 'next/link';
import { ArrowRight, Type } from 'lucide-react';
import { SiteShell, Section, Tile } from '@/components/site-shell';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/providers/language-provider';

const LEAKS = {
  en: [
    {
      title: '1. Missing articles',
      wrong: 'Government should reduce traffic in Dhaka.',
      right: 'The government should reduce traffic in Dhaka.',
      fix: 'A specific institution → "the." A generic one of many → "a / an." Use both relentlessly; Bangla speakers under-use both.',
    },
    {
      title: '2. Wrong preposition',
      wrong: 'We discussed about the issue.',
      right: 'We discussed the issue.',
      fix: '"Discuss" takes no preposition. Memorise verb + preposition as fixed pairs (depend on, agree with, listen to).',
    },
    {
      title: '3. Plural -s forgotten',
      wrong: 'Many student face this problem.',
      right: 'Many students face this problem.',
      fix: 'Bangla plurals do not need -s. English plurals after numbers, "many," "several," "few" always do.',
    },
    {
      title: '4. Subject-verb agreement',
      wrong: 'The list of items are long.',
      right: 'The list of items is long.',
      fix: 'The verb agrees with the head noun ("list"), not the nearer noun ("items").',
    },
    {
      title: '5. Tense switching mid-paragraph',
      wrong: 'Yesterday I go to market and bought fish.',
      right: 'Yesterday I went to the market and bought fish.',
      fix: 'Choose a tense per paragraph and stick with it. Time markers ("yesterday") lock the tense.',
    },
    {
      title: '6. Run-on sentences',
      wrong: 'Education is important it helps students get jobs and it improves society and it should be free.',
      right: 'Education is important: it helps students get jobs, improves society, and should therefore be free.',
      fix: 'When you write three "and"s in a row, you need a colon, semicolon, or full stop.',
    },
    {
      title: '7. Double negatives',
      wrong: "I don't know nothing about it.",
      right: "I don't know anything about it.",
      fix: 'English negatives only fire once per clause. Bangla allows double negatives; English does not.',
    },
    {
      title: '8. "Much" vs "many"',
      wrong: 'Many information was shared.',
      right: 'Much information was shared.',
      fix: 'Countable → many. Uncountable (information, advice, traffic, news, equipment) → much.',
    },
    {
      title: '9. "People is" / "Police is"',
      wrong: 'The police is investigating.',
      right: 'The police are investigating.',
      fix: '"Police" and "people" are plural in English regardless of how Bangla treats them.',
    },
    {
      title: '10. "Married with"',
      wrong: 'She is married with a doctor.',
      right: 'She is married to a doctor.',
      fix: 'Married to. Engaged to. Related to. Bangla-speaker default to "with" — rewire it.',
    },
    {
      title: '11. Wrong "since" / "for"',
      wrong: 'I have lived in Dhaka since five years.',
      right: 'I have lived in Dhaka for five years.',
      fix: 'Since + a point in time (2019, Monday). For + a duration (five years, two weeks).',
    },
    {
      title: '12. Comma splices',
      wrong: 'I went to the office, it was closed.',
      right: 'I went to the office, but it was closed.',
      fix: 'Two independent clauses cannot be joined by a comma alone. Use a coordinator (and, but, so) or a full stop.',
    },
  ],
  bn: [
    {
      title: '১. আর্টিকেল বাদ',
      wrong: 'Government should reduce traffic in Dhaka.',
      right: 'The government should reduce traffic in Dhaka.',
      fix: 'নির্দিষ্ট প্রতিষ্ঠানের জন্য "the।" অনেকের মধ্যে একটির জন্য "a / an।" দুটিই নির্বিচারে ব্যবহার করুন; বাংলাভাষীরা দুটিই কম ব্যবহার করেন।',
    },
    {
      title: '২. ভুল Preposition',
      wrong: 'We discussed about the issue.',
      right: 'We discussed the issue.',
      fix: '"Discuss" এর পরে কোনো preposition লাগে না। ক্রিয়া + preposition স্থির জুটি হিসেবে মুখস্থ করুন (depend on, agree with, listen to)।',
    },
    {
      title: '৩. বহুবচন -s ভুলে যাওয়া',
      wrong: 'Many student face this problem.',
      right: 'Many students face this problem.',
      fix: 'বাংলা বহুবচনে -s দরকার হয় না। সংখ্যা, "many," "several," "few" এর পরে ইংরেজি বহুবচনে সবসময় দরকার।',
    },
    {
      title: '৪. Subject-Verb Agreement',
      wrong: 'The list of items are long.',
      right: 'The list of items is long.',
      fix: 'ক্রিয়া মূল বিশেষ্য ("list") এর সাথে মিলে, কাছের বিশেষ্য ("items") এর সাথে নয়।',
    },
    {
      title: '৫. মাঝ-প্যারাগ্রাফে কাল পরিবর্তন',
      wrong: 'Yesterday I go to market and bought fish.',
      right: 'Yesterday I went to the market and bought fish.',
      fix: 'প্রতিটি প্যারাগ্রাফে একটি কাল বেছে নিন এবং মেনে চলুন। সময় নির্দেশক শব্দ ("yesterday") কাল নির্ধারণ করে।',
    },
    {
      title: '৬. Run-on বাক্য',
      wrong: 'Education is important it helps students get jobs and it improves society and it should be free.',
      right: 'Education is important: it helps students get jobs, improves society, and should therefore be free.',
      fix: 'পরপর তিনটি "and" লিখলে কোলন, সেমিকোলন বা পূর্ণ থামা দরকার।',
    },
    {
      title: '৭. Double Negative',
      wrong: "I don't know nothing about it.",
      right: "I don't know anything about it.",
      fix: 'ইংরেজিতে প্রতিটি ক্লজে নেতিবাচক একবারই ব্যবহার হয়। বাংলায় দ্বৈত নেতিবাচক অনুমোদিত; ইংরেজিতে নয়।',
    },
    {
      title: '৮. "Much" বনাম "Many"',
      wrong: 'Many information was shared.',
      right: 'Much information was shared.',
      fix: 'গণনাযোগ্য → many। অগণনীয় (information, advice, traffic, news, equipment) → much।',
    },
    {
      title: '৯. "People is" / "Police is"',
      wrong: 'The police is investigating.',
      right: 'The police are investigating.',
      fix: '"Police" এবং "people" ইংরেজিতে বহুবচন, বাংলায় যেভাবেই বিবেচনা করুন না কেন।',
    },
    {
      title: '১০. "Married with"',
      wrong: 'She is married with a doctor.',
      right: 'She is married to a doctor.',
      fix: 'Married to. Engaged to. Related to. বাংলাভাষীর ডিফল্ট "with" — পুনরায় প্রোগ্রাম করুন।',
    },
    {
      title: '১১. ভুল "Since" / "For"',
      wrong: 'I have lived in Dhaka since five years.',
      right: 'I have lived in Dhaka for five years.',
      fix: 'Since + সময়ের একটি বিন্দু (2019, Monday)। For + একটি সময়কাল (five years, two weeks)।',
    },
    {
      title: '১২. Comma Splice',
      wrong: 'I went to the office, it was closed.',
      right: 'I went to the office, but it was closed.',
      fix: 'দুটি স্বাধীন ক্লজ শুধু কমা দিয়ে যুক্ত করা যায় না। একটি সমন্বয়কারী (and, but, so) বা পূর্ণ থামা ব্যবহার করুন।',
    },
  ],
};

const CONTENT = {
  en: {
    badge: 'English Mastery / Grammar',
    h1: 'The grammar that costs Bangla speakers half a band.',
    desc: 'You do not need to learn "more grammar." You need to fix the same 12 patterns Bangla speakers get wrong in every essay. Once these are repaired, your writing jumps a full band — without any new vocabulary.',
    aiCta: 'Ask the AI tutor',
    startFree: 'Start free',
    leaks: {
      title: 'The 12 leaks',
      subtitle: 'Each example pairs a typical Bangla-speaker error with the fix.',
    },
    drill: {
      title: 'How to drill grammar without dying of boredom',
      t1: 'Edit, don\'t memorise',
      t1b: 'Write a 100-word paragraph, then hunt for one specific leak (say, articles). Fix every instance. Tomorrow, hunt a different leak. After 12 days you have done one focused pass on every common mistake.',
      t2: 'Read aloud what you write',
      t2b: 'Most grammar mistakes are obvious to your ear — but not to your eye. Read each sentence out loud. If it sounds wrong, it probably is.',
      t3: 'One rule per week',
      t3b: "Don't try to fix everything at once. Pick one leak per week. By the time you finish, the first ones have become automatic.",
      t4: 'Use the AI tutor as a sparring partner',
      t4b: 'Paste a paragraph. Ask "find the article errors only." Don\'t ask for everything at once — focused feedback sticks; firehose feedback evaporates.',
    },
    tenses: {
      title: 'Quick reference: tenses Bangla speakers confuse',
      p1bold: 'Present perfect vs simple past.',
      p1: " \"I have visited Cox's Bazar last year\" is wrong — use simple past with a specific past time. \"I have visited Cox's Bazar\" (no time) is right.",
      p2bold: 'Past continuous vs past simple.',
      p2: ' "I was eating when the phone rang." Two actions, one in progress, one interrupted. Don\'t say "I ate when the phone was ringing."',
      p3bold: 'Will vs going to.',
      p3: ' "I will study tonight" is a decision made now. "I am going to study tonight" is a pre-existing plan. Examiners notice.',
      p4bold: 'Conditionals.',
      p4: ' "If I would have time, I will come" is wrong. "If I have time, I will come" (likely future). "If I had time, I would come" (unlikely now).',
      cta: 'Drill with the AI tutor',
    },
  },
  bn: {
    badge: 'ইংরেজি দক্ষতা / গ্রামার',
    h1: 'বাংলাভাষীদের অর্ধ-ব্যান্ড কমানো ব্যাকরণ।',
    desc: '"আরও ব্যাকরণ" শেখার দরকার নেই। বাংলাভাষীরা প্রতিটি রচনায় যে একই ১২টি প্যাটার্ন ভুল করে তা ঠিক করতে হবে। একবার মেরামত হলে কোনো নতুন শব্দভাণ্ডার ছাড়াই লেখা পুরো ব্যান্ড বাড়ে।',
    aiCta: 'AI টিউটর জিজ্ঞেস করুন',
    startFree: 'বিনামূল্যে শুরু করুন',
    leaks: {
      title: '১২টি ফুটো',
      subtitle: 'প্রতিটি উদাহরণে একটি সাধারণ বাংলাভাষী ভুল এবং সংশোধন জুটি দেওয়া আছে।',
    },
    drill: {
      title: 'বিরক্ত না হয়ে ব্যাকরণ ড্রিল করার উপায়',
      t1: 'মুখস্থ করার বদলে সম্পাদনা করুন',
      t1b: '১০০-শব্দের প্যারাগ্রাফ লিখুন, তারপর একটি নির্দিষ্ট ফুটো খুঁজুন (যেমন, articles)। প্রতিটি ঘটনা ঠিক করুন। পরের দিন ভিন্ন ফুটো খুঁজুন। ১২ দিনে প্রতিটি সাধারণ ভুলে একটি মনোযোগী পাস করা হবে।',
      t2: 'যা লিখছেন জোরে পড়ুন',
      t2b: 'বেশিরভাগ ব্যাকরণ ভুল কানে স্পষ্ট — চোখে নয়। প্রতিটি বাক্য জোরে পড়ুন। ভুল শোনালে সম্ভবত ভুল।',
      t3: 'সপ্তাহে একটি নিয়ম',
      t3b: 'একবারে সব ঠিক করার চেষ্টা করবেন না। সপ্তাহে একটি ফুটো বেছে নিন। শেষ করতে করতে প্রথমগুলো স্বয়ংক্রিয় হয়ে যাবে।',
      t4: 'AI টিউটরকে স্পারিং পার্টনার হিসেবে ব্যবহার করুন',
      t4b: 'একটি প্যারাগ্রাফ পেস্ট করুন। "শুধু article ভুলগুলো খুঁজুন" জিজ্ঞেস করুন। সবকিছু একসাথে জিজ্ঞেস করবেন না — মনোযোগী ফিডব্যাক মনে থাকে; ফায়ারহোজ ফিডব্যাক উবে যায়।',
    },
    tenses: {
      title: 'দ্রুত সূত্র: বাংলাভাষীরা যে কালগুলো গুলিয়ে ফেলে',
      p1bold: 'Present perfect বনাম simple past।',
      p1: " \"I have visited Cox's Bazar last year\" ভুল — নির্দিষ্ট অতীত সময়ের সাথে simple past ব্যবহার করুন। \"I have visited Cox's Bazar\" (কোনো সময় উল্লেখ নেই) সঠিক।",
      p2bold: 'Past continuous বনাম past simple।',
      p2: ' "I was eating when the phone rang।" দুটি ক্রিয়া, একটি চলমান, একটি বাধাপ্রাপ্ত। "I ate when the phone was ringing" বলবেন না।',
      p3bold: 'Will বনাম going to।',
      p3: ' "I will study tonight" হলো এখনই নেওয়া সিদ্ধান্ত। "I am going to study tonight" হলো পূর্ব-পরিকল্পনা। পরীক্ষকরা লক্ষ্য করেন।',
      p4bold: 'Conditionals।',
      p4: ' "If I would have time, I will come" ভুল। "If I have time, I will come" (সম্ভাব্য ভবিষ্যৎ)। "If I had time, I would come" (এখন অসম্ভব)।',
      cta: 'AI টিউটর দিয়ে ড্রিল করুন',
    },
  },
};

export default function GrammarPage() {
  const { lang } = useLanguage();
  const c = CONTENT[lang];
  const leaks = LEAKS[lang];

  return (
    <SiteShell>
      <section className="mx-auto max-w-3xl px-4 py-14">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">{c.badge}</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">{c.h1}</h1>
        <p className="mt-4 text-base text-muted-foreground md:text-lg">{c.desc}</p>
        <div className="mt-6 flex gap-3">
          <Button asChild>
            <Link href="/ai-instructor">
              <Type className="mr-2 h-4 w-4" /> {c.aiCta}
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/sign-up">{c.startFree}</Link>
          </Button>
        </div>
      </section>

      <Section title={c.leaks.title} subtitle={c.leaks.subtitle}>
        <div className="space-y-3 text-sm">
          {leaks.map((leak) => (
            <div key={leak.title} className="rounded-lg border bg-card p-4">
              <p className="font-semibold">{leak.title}</p>
              <p className="mt-2 text-muted-foreground"><span className="font-medium text-red-600">✗</span> {leak.wrong}</p>
              <p className="text-muted-foreground"><span className="font-medium text-green-600">✓</span> {leak.right}</p>
              <p className="mt-2 text-xs text-muted-foreground">{leak.fix}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title={c.drill.title}>
        <div className="grid gap-4 md:grid-cols-2">
          <Tile title={c.drill.t1}>{c.drill.t1b}</Tile>
          <Tile title={c.drill.t2}>{c.drill.t2b}</Tile>
          <Tile title={c.drill.t3}>{c.drill.t3b}</Tile>
          <Tile title={c.drill.t4}>{c.drill.t4b}</Tile>
        </div>
      </Section>

      <Section title={c.tenses.title}>
        <div className="rounded-lg border bg-card p-5 text-sm">
          <p><span className="font-semibold">{c.tenses.p1bold}</span>{c.tenses.p1}</p>
          <p className="mt-3"><span className="font-semibold">{c.tenses.p2bold}</span>{c.tenses.p2}</p>
          <p className="mt-3"><span className="font-semibold">{c.tenses.p3bold}</span>{c.tenses.p3}</p>
          <p className="mt-3"><span className="font-semibold">{c.tenses.p4bold}</span>{c.tenses.p4}</p>
        </div>
        <Button asChild className="mt-5">
          <Link href="/ai-instructor">
            {c.tenses.cta} <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </Section>
    </SiteShell>
  );
}
