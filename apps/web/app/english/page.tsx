'use client';

import Link from 'next/link';
import { Mic, PenLine, Headphones, BookOpen, Type, Languages, ArrowRight, Sparkles } from 'lucide-react';
import { SiteShell, Section, Tile } from '@/components/site-shell';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/providers/language-provider';

const CONTENT = {
  en: {
    badge: 'English Mastery',
    h1a: 'Master the language first.',
    h1b: 'The score will follow.',
    desc: 'IELTS, TOEFL, PTE — none of them are English tests in disguise. They are English tests. If you can read a New York Times article, follow a BBC podcast, write a 300-word email, and hold a 10-minute conversation without panicking, the exam is a formality. This is where we start.',
    cta: 'Start free',
    ctaSecondary: 'See the 90-day path',
    skills: {
      title: 'The four core skills, in order',
      subtitle:
        'Most Bangladeshi students are strong in reading, weak in speaking, terrified of writing, and confused by listening. We rebuild each skill independently.',
      openModule: 'Open module →',
    },
    path: {
      title: 'The 90-day path from school English to test-ready English',
      subtitle:
        'Built around 30 minutes a day. Yes, only 30. Daily beats marathon — every student we tracked who jumped two bands followed this pattern.',
      day1: 'Days 1–14 · Diagnostic + Habit',
      day1Body:
        'Take a baseline mock test. Set up the voice coach. Build the 10-min/day shadowing habit using BBC Learning English. The goal is not progress yet — it is showing up daily.',
      day2: 'Days 15–45 · Foundation Repair',
      day2Body:
        'Plug the leaks. Bangla speakers usually need: tense agreement, articles (a / an / the), preposition choice, and pluralisation. The Grammar module drills exactly these.',
      day3: 'Days 46–75 · Skill Stack',
      day3Body:
        'Now we stack: daily shadowing (speaking + listening + pronunciation in one go) plus three 200-word opinion paragraphs per week, reviewed by the AI tutor.',
      day4: 'Days 76–90 · Exam Tactics',
      day4Body:
        'Only now do we touch exam tricks — task-1 templates, IELTS speaking part 2 framework, TOEFL integrated writing structure, PTE describe-image scripts. Built on top of real skill, not as a substitute.',
    },
    why: {
      title: 'Why this works for Bangla speakers specifically',
      subtitle: 'We did not just translate an American curriculum. We rebuilt one.',
      t1title: 'We know which sounds you struggle with',
      t1body:
        'স vs শ does not exist in English, but V/W and P/F do, and Bangla doesn\'t separate them clearly. The voice coach listens for exactly these substitutions and corrects you in real time.',
      t2title: 'We know your translation habit',
      t2body:
        'You write a Bangla sentence in your head, then translate. That is why your essays have run-on sentences and missing articles. We teach you to draft directly in English using paragraph templates.',
      t3title: 'We give feedback in Bangla when it helps',
      t3body:
        'Grammar explanations, idiom meanings, and tough vocabulary all have a Bangla toggle. We don\'t pretend English-only is faster — it isn\'t, not in the early months.',
      t4title: 'We respect your time',
      t4body:
        'School, coaching, family — you are busy. Every lesson is 5–15 minutes. The AI remembers where you stopped. Open the app on the bus, close it on arrival.',
    },
    habits: {
      title: 'Free habits anyone can start tonight',
      subtitle:
        'If you cannot use IELTS Trainer yet, do these. They are the same habits we built the curriculum around.',
      h1bold: 'Shadow one minute of audio daily.',
      h1rest:
        ' Find a BBC clip, play one sentence, pause, repeat it out loud copying the intonation. Repeat for ten minutes.',
      h2bold: 'Read aloud for ten minutes.',
      h2rest:
        ' The Daily Star editorial works. Reading silently builds vocabulary but not speech muscles — your mouth needs to learn the shapes.',
      h3bold: 'Write a 5-sentence diary entry every night.',
      h3rest: ' In English. About today. Don\'t worry about grammar — worry about not skipping a day.',
      h4bold: 'Switch your phone to English.',
      h4rest: ' Free, instant, constant exposure. Your friends\' WhatsApps will still be in Bangla — that\'s fine.',
    },
    ready: {
      title: 'Ready to start?',
      cardTitle: 'Take the 5-minute placement quiz',
      cardDesc:
        'We figure out your current level across all four skills, then build a personalised plan. Honest answers beat optimistic ones — the system adapts.',
      cta: 'Create free account',
      ielts: 'I\'m targeting IELTS',
    },
  },
  bn: {
    badge: 'ইংরেজি দক্ষতা',
    h1a: 'আগে ভাষা আয়ত্ত করুন।',
    h1b: 'স্কোর এমনিই আসবে।',
    desc: 'IELTS, TOEFL, PTE — এগুলো ছদ্মবেশে কোনো ইংরেজি পরীক্ষা নয়। এগুলো সরাসরি ইংরেজি পরীক্ষা। যদি আপনি New York Times-এর একটি নিবন্ধ পড়তে পারেন, BBC পডকাস্ট অনুসরণ করতে পারেন, ৩০০ শব্দের ইমেইল লিখতে পারেন এবং ১০ মিনিট ঘাবড়ে না গিয়ে কথা বলতে পারেন — তাহলে পরীক্ষাটা একটা আনুষ্ঠানিকতা মাত্র। এখান থেকেই আমরা শুরু করি।',
    cta: 'বিনামূল্যে শুরু করুন',
    ctaSecondary: '৯০ দিনের পথ দেখুন',
    skills: {
      title: 'চারটি মূল দক্ষতা, পর্যায়ক্রমে',
      subtitle:
        'বেশিরভাগ বাংলাদেশি শিক্ষার্থী রিডিংয়ে শক্তিশালী, স্পিকিংয়ে দুর্বল, রাইটিংয়ে ভীত এবং লিসেনিংয়ে বিভ্রান্ত। আমরা প্রতিটি দক্ষতা আলাদাভাবে গড়ে তুলি।',
      openModule: 'মডিউল খুলুন →',
    },
    path: {
      title: 'স্কুলের ইংরেজি থেকে পরীক্ষার জন্য প্রস্তুত ইংরেজিতে ৯০ দিনের পথ',
      subtitle:
        'দিনে মাত্র ৩০ মিনিটের ভিত্তিতে তৈরি। হ্যাঁ, শুধু ৩০। প্রতিদিন মানে ম্যারাথনের চেয়ে ভালো — আমাদের অনুসরণ করা প্রতিটি শিক্ষার্থী যারা দুটি ব্যান্ড বাড়িয়েছে তারা এই পদ্ধতি মেনেছে।',
      day1: 'দিন ১–১৪ · ডায়াগনস্টিক + অভ্যাস',
      day1Body:
        'একটি প্রাথমিক মক টেস্ট দিন। ভয়েস কোচ সেট আপ করুন। BBC Learning English ব্যবহার করে দিনে ১০ মিনিট শ্যাডোয়িংয়ের অভ্যাস তৈরি করুন। এখানে লক্ষ্য উন্নতি নয় — প্রতিদিন অনুশীলন করা।',
      day2: 'দিন ১৫–৪৫ · ভিত্তি মেরামত',
      day2Body:
        'ফাঁকগুলো বন্ধ করুন। বাংলাভাষীদের সাধারণত যা দরকার: কালের সামঞ্জস্য, আর্টিকেল (a / an / the), প্রিপোজিশন এবং বহুবচন। গ্রামার মডিউল ঠিক এগুলো ড্রিল করে।',
      day3: 'দিন ৪৬–৭৫ · দক্ষতা তৈরি',
      day3Body:
        'এখন আমরা স্তূপ করি: প্রতিদিন শ্যাডোয়িং (স্পিকিং + লিসেনিং + উচ্চারণ একসাথে) এবং সপ্তাহে তিনটি ২০০ শব্দের মতামত প্যারাগ্রাফ, AI টিউটর দ্বারা পর্যালোচিত।',
      day4: 'দিন ৭৬–৯০ · পরীক্ষার কৌশল',
      day4Body:
        'কেবল এখন পরীক্ষার কৌশলগুলো — Task 1 টেমপ্লেট, IELTS স্পিকিং পার্ট ২ ফ্রেমওয়ার্ক, TOEFL ইন্টিগ্রেটেড রাইটিং স্ট্রাকচার, PTE ডিসক্রাইব-ইমেজ স্ক্রিপ্ট। বাস্তব দক্ষতার উপরে তৈরি, তার বিকল্প হিসেবে নয়।',
    },
    why: {
      title: 'কেন এটি বাংলাভাষীদের জন্য কাজ করে',
      subtitle: 'আমরা কোনো আমেরিকান পাঠ্যক্রম অনুবাদ করিনি। আমরা নতুন করে তৈরি করেছি।',
      t1title: 'আমরা জানি আপনি কোন শব্দে সংগ্রাম করেন',
      t1body:
        'স vs শ ইংরেজিতে নেই, কিন্তু V/W এবং P/F আছে — বাংলা এগুলো স্পষ্টভাবে আলাদা করে না। ভয়েস কোচ ঠিক এই প্রতিস্থাপনগুলো শোনে এবং রিয়েল-টাইমে সংশোধন করে।',
      t2title: 'আমরা আপনার অনুবাদের অভ্যাস জানি',
      t2body:
        'আপনি মনে মনে বাংলায় বাক্য লেখেন, তারপর অনুবাদ করেন। তাই আপনার রচনায় রান-অন বাক্য এবং আর্টিকেল বাদ পড়ে। আমরা আপনাকে সরাসরি ইংরেজিতে খসড়া লিখতে শেখাই।',
      t3title: 'প্রয়োজনে বাংলায় ফিডব্যাক দিই',
      t3body:
        'ব্যাকরণের ব্যাখ্যা, বাগধারার অর্থ এবং কঠিন শব্দ সবই বাংলায় পাওয়া যায়। আমরা এমন ভান করি না যে শুধু ইংরেজি দ্রুততর — প্রথম কয়েক মাসে এটা নয়।',
      t4title: 'আমরা আপনার সময়কে সম্মান করি',
      t4body:
        'স্কুল, কোচিং, পরিবার — আপনি ব্যস্ত। প্রতিটি পাঠ ৫–১৫ মিনিট। AI মনে রাখে আপনি কোথায় থামলেন। বাসে অ্যাপ খুলুন, গন্তব্যে পৌঁছে বন্ধ করুন।',
    },
    habits: {
      title: 'আজ রাতেই শুরু করা যায় এমন বিনামূল্যের অভ্যাস',
      subtitle:
        'যদি এখনই IELTS Trainer ব্যবহার করতে না পারেন, এগুলো করুন। আমরা এগুলোর চারপাশেই পাঠ্যক্রম তৈরি করেছি।',
      h1bold: 'প্রতিদিন এক মিনিট অডিও শ্যাডো করুন।',
      h1rest:
        ' একটি BBC ক্লিপ খুঁজুন, একটি বাক্য বাজান, থামুন, ইন্টোনেশন অনুসরণ করে জোরে বলুন। দশ মিনিট পুনরাবৃত্তি করুন।',
      h2bold: 'দশ মিনিট জোরে পড়ুন।',
      h2rest:
        ' The Daily Star-এর সম্পাদকীয় কাজ করে। নীরবে পড়লে শব্দভাণ্ডার বাড়ে কিন্তু বক্তৃতার পেশি নয় — আপনার মুখকেও শেপগুলো শিখতে হবে।',
      h3bold: 'প্রতি রাতে ৫-বাক্যের ডায়েরি লিখুন।',
      h3rest: ' ইংরেজিতে। আজকের কথা। ব্যাকরণ নিয়ে ভাববেন না — একটি দিন না বাদ দেওয়ার দিকে মনোযোগ দিন।',
      h4bold: 'আপনার ফোন ইংরেজিতে বদলান।',
      h4rest: ' বিনামূল্যে, তাৎক্ষণিক, ক্রমাগত অনুশীলন। বন্ধুদের WhatsApp এখনও বাংলায় থাকবে — ঠিক আছে।',
    },
    ready: {
      title: 'শুরু করতে প্রস্তুত?',
      cardTitle: '৫ মিনিটের প্লেসমেন্ট কুইজ দিন',
      cardDesc:
        'আমরা চারটি দক্ষতায় আপনার বর্তমান স্তর জানব, তারপর একটি ব্যক্তিগতকৃত পরিকল্পনা তৈরি করব। সৎ উত্তর আশাবাদী উত্তরের চেয়ে ভালো — সিস্টেম মানিয়ে নেয়।',
      cta: 'ফ্রি অ্যাকাউন্ট তৈরি করুন',
      ielts: 'আমি IELTS-এর জন্য প্রস্তুতি নিচ্ছি',
    },
  },
};

const SKILLS = [
  {
    href: '/english/speaking',
    icon: Mic,
    titleKey: { en: 'Speaking', bn: 'স্পিকিং' },
    summaryKey: {
      en: 'From silent reader to confident speaker in 90 days. Daily shadowing, voice coach, accent training.',
      bn: '৯০ দিনে নীরব পাঠক থেকে আত্মবিশ্বাসী বক্তা। প্রতিদিন শ্যাডোয়িং, ভয়েস কোচ, উচ্চারণ প্রশিক্ষণ।',
    },
  },
  {
    href: '/english/writing',
    icon: PenLine,
    titleKey: { en: 'Writing', bn: 'রাইটিং' },
    summaryKey: {
      en: 'Stop translating Bangla sentences into English. Learn to think in paragraphs, not words.',
      bn: 'বাংলা বাক্য ইংরেজিতে অনুবাদ করা বন্ধ করুন। শব্দের বদলে প্যারাগ্রাফে চিন্তা করতে শিখুন।',
    },
  },
  {
    href: '/english/listening',
    icon: Headphones,
    titleKey: { en: 'Listening', bn: 'লিসেনিং' },
    summaryKey: {
      en: 'British, American, Australian, Indian accents. Trained ear in 8 weeks.',
      bn: 'ব্রিটিশ, আমেরিকান, অস্ট্রেলিয়ান, ভারতীয় উচ্চারণ। ৮ সপ্তাহে তীক্ষ্ণ কান তৈরি।',
    },
  },
  {
    href: '/english/reading',
    icon: BookOpen,
    titleKey: { en: 'Reading', bn: 'রিডিং' },
    summaryKey: {
      en: 'Skim, scan, and understand academic English without translating every word.',
      bn: 'প্রতিটি শব্দ অনুবাদ না করেই স্কিম, স্ক্যান এবং একাডেমিক ইংরেজি বুঝতে শিখুন।',
    },
  },
  {
    href: '/english/grammar',
    icon: Type,
    titleKey: { en: 'Grammar', bn: 'গ্রামার' },
    summaryKey: {
      en: 'The 20 mistakes that cost Bangla speakers half a band. Fix them once, forever.',
      bn: 'বাংলাভাষীদের যে ২০টি ভুলের কারণে অর্ধেক ব্যান্ড কমে। একবার ঠিক করুন, চিরতরে।',
    },
  },
  {
    href: '/english/pronunciation',
    icon: Languages,
    titleKey: { en: 'Pronunciation', bn: 'উচ্চারণ' },
    summaryKey: {
      en: 'V/W, P/F, S/Sh, schwa, sentence stress — the exact sounds that mark you as a Bangla speaker.',
      bn: 'V/W, P/F, S/Sh, শ্বা, বাক্যের জোর — ঠিক যে শব্দগুলো আপনাকে বাংলাভাষী হিসেবে চিহ্নিত করে।',
    },
  },
] as const;

export default function EnglishHubPage() {
  const { lang } = useLanguage();
  const c = CONTENT[lang];

  return (
    <SiteShell>
      <section className="mx-auto max-w-4xl px-4 py-16 text-center">
        <p className="text-sm font-medium uppercase tracking-wide text-primary">{c.badge}</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
          {c.h1a}
          <br />
          <span className="text-primary">{c.h1b}</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground md:text-lg">{c.desc}</p>
        <div className="mt-8 flex justify-center gap-3">
          <Button asChild size="lg">
            <Link href="/sign-up">
              {c.cta} <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="#path">{c.ctaSecondary}</Link>
          </Button>
        </div>
      </section>

      <Section id="skills" title={c.skills.title} subtitle={c.skills.subtitle}>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map(({ href, icon: Icon, titleKey, summaryKey }) => (
            <Link key={href} href={href} className="block">
              <div className="h-full rounded-lg border bg-card p-5 transition hover:border-primary hover:shadow-sm">
                <Icon className="h-7 w-7 text-primary" />
                <h3 className="mt-3 font-semibold">{titleKey[lang]}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{summaryKey[lang]}</p>
                <p className="mt-3 text-sm font-medium text-primary">{c.skills.openModule}</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section id="path" title={c.path.title} subtitle={c.path.subtitle}>
        <ol className="space-y-4">
          <li className="rounded-lg border bg-card p-5">
            <p className="text-xs font-semibold uppercase text-primary">{c.path.day1}</p>
            <p className="mt-2 text-sm">{c.path.day1Body}</p>
          </li>
          <li className="rounded-lg border bg-card p-5">
            <p className="text-xs font-semibold uppercase text-primary">{c.path.day2}</p>
            <p className="mt-2 text-sm">{c.path.day2Body}</p>
          </li>
          <li className="rounded-lg border bg-card p-5">
            <p className="text-xs font-semibold uppercase text-primary">{c.path.day3}</p>
            <p className="mt-2 text-sm">{c.path.day3Body}</p>
          </li>
          <li className="rounded-lg border bg-card p-5">
            <p className="text-xs font-semibold uppercase text-primary">{c.path.day4}</p>
            <p className="mt-2 text-sm">{c.path.day4Body}</p>
          </li>
        </ol>
      </Section>

      <Section title={c.why.title} subtitle={c.why.subtitle}>
        <div className="grid gap-4 md:grid-cols-2">
          <Tile title={c.why.t1title}>{c.why.t1body}</Tile>
          <Tile title={c.why.t2title}>{c.why.t2body}</Tile>
          <Tile title={c.why.t3title}>{c.why.t3body}</Tile>
          <Tile title={c.why.t4title}>{c.why.t4body}</Tile>
        </div>
      </Section>

      <Section title={c.habits.title} subtitle={c.habits.subtitle}>
        <ul className="grid gap-3 text-sm md:grid-cols-2">
          <li className="flex gap-3 rounded-lg border bg-card p-4">
            <Sparkles className="h-4 w-4 shrink-0 text-primary" />
            <span>
              <span className="font-semibold">{c.habits.h1bold}</span>
              {c.habits.h1rest}
            </span>
          </li>
          <li className="flex gap-3 rounded-lg border bg-card p-4">
            <Sparkles className="h-4 w-4 shrink-0 text-primary" />
            <span>
              <span className="font-semibold">{c.habits.h2bold}</span>
              {c.habits.h2rest}
            </span>
          </li>
          <li className="flex gap-3 rounded-lg border bg-card p-4">
            <Sparkles className="h-4 w-4 shrink-0 text-primary" />
            <span>
              <span className="font-semibold">{c.habits.h3bold}</span>
              {c.habits.h3rest}
            </span>
          </li>
          <li className="flex gap-3 rounded-lg border bg-card p-4">
            <Sparkles className="h-4 w-4 shrink-0 text-primary" />
            <span>
              <span className="font-semibold">{c.habits.h4bold}</span>
              {c.habits.h4rest}
            </span>
          </li>
        </ul>
      </Section>

      <Section title={c.ready.title}>
        <div className="rounded-lg border bg-card p-6">
          <h3 className="text-xl font-bold">{c.ready.cardTitle}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{c.ready.cardDesc}</p>
          <div className="mt-4 flex gap-3">
            <Button asChild>
              <Link href="/sign-up">
                {c.ready.cta} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/ielts">{c.ready.ielts}</Link>
            </Button>
          </div>
        </div>
      </Section>
    </SiteShell>
  );
}
