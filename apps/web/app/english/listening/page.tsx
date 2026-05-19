'use client';

import Link from 'next/link';
import { ArrowRight, Headphones } from 'lucide-react';
import { SiteShell, Section, Tile } from '@/components/site-shell';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/providers/language-provider';

const CONTENT = {
  en: {
    badge: 'English Mastery / Listening',
    h1: 'Understand English at native speed.',
    desc: "The IELTS listening test plays once. TOEFL plays once. PTE plays once. If you have only listened to slow classroom English, the real exam will feel like a different language. The fix is exposure, not tricks.",
    drillCta: 'Listening drill',
    startFree: 'Start free',
    fast: {
      title: "Why native speech sounds 'too fast'",
      subtitle: "It isn't. Three things are happening that schoolroom English does not prepare you for.",
      t1: 'Connected speech',
      t1b: '"Wanna go" instead of "want to go." "Whatcha doing" instead of "what are you doing." Words bleed into each other. You must learn the patterns, not just the individual words.',
      t2: 'Stress-timing',
      t2b: 'English compresses unstressed syllables into a fast mumble (the schwa). Important words land hard, filler slides past. Your brain has to filter signal from noise.',
      t3: 'Vocabulary in disguise',
      t3b: '"Anyway" said quickly sounds like "n-way." "Probably" becomes "prolly." If you only know words on the page, you will not recognise them in speech.',
    },
    ladder: {
      title: 'The four-week listening ladder',
      w1: 'Week 1 · Slow + scripted',
      w1b: 'BBC Learning English "6 Minute English." Slow, scripted, with subtitles. Listen once with subtitles, once without. Note one new phrase per episode.',
      w2: 'Week 2 · Normal + scripted',
      w2b: 'TED-Ed and TED talks. Native speed, but scripted, with reliable subtitles. The accents stretch beyond British — American, Indian, African. Two talks per day.',
      w3: 'Week 3 · Normal + unscripted',
      w3b: "Podcasts: The Daily (NYT), BBC Global News, ABC News in Depth (Australian). Real conversation, real hesitations, real accents. Don't read transcripts during — read them after.",
      w4: 'Week 4 · Fast + multi-speaker',
      w4b: 'YouTube interviews, mock IELTS Section 3 (multi-speaker academic discussion), TOEFL lecture practice sets. Now you are at exam intensity.',
    },
    accents: {
      title: 'The five accents every Bangladeshi candidate should train on',
      a1: 'British (RP / Estuary)',
      a1b: 'IELTS heavy. Listen to BBC News, The Guardian podcast.',
      a2: 'American (General)',
      a2b: 'TOEFL standard. Listen to NPR, The Daily, Planet Money.',
      a3: 'Australian',
      a3b: 'Common in IELTS Listening Sections 2 and 4. Listen to ABC News and Hamish & Andy.',
      a4: 'Canadian',
      a4b: 'Appears in PTE. Sounds like American with subtle vowel shifts ("about" → "aboot"). CBC podcasts are the classroom.',
      a5: 'Indian English',
      a5b: "You already hear it. But academic Indian English in lecture form is its own thing — try The Print's podcasts to bridge the gap.",
      a6: 'Bangladeshi English (yes, really)',
      a6b: 'Your future university tutor or office mate may sound like a Bangladeshi. Practising this builds the confidence to ask follow-up questions without embarrassment.',
    },
    tonight: {
      title: "Tonight's drill",
      time: '~15 minutes',
      s1: "Pick one 5-minute BBC clip you have not heard.",
      s2: "Listen once with subtitles off. Try to summarise it in one Bangla sentence aloud.",
      s3: "Listen again with subtitles on. Note any words you misheard.",
      s4: "Listen a third time at 1.25x. Notice it now feels closer to normal speed.",
      cta: 'Open the listening drill',
    },
  },
  bn: {
    badge: 'ইংরেজি দক্ষতা / লিসেনিং',
    h1: 'নেটিভ গতিতে ইংরেজি বুঝুন।',
    desc: "IELTS লিসেনিং টেস্ট একবার বাজানো হয়। TOEFL একবার। PTE একবার। শুধু ধীর ক্লাসরুম ইংরেজি শুনলে আসল পরীক্ষা ভিন্ন ভাষা মনে হবে। সমাধান কৌশল নয় — অনুশীলন।",
    drillCta: 'লিসেনিং ড্রিল',
    startFree: 'বিনামূল্যে শুরু করুন',
    fast: {
      title: "কেন নেটিভ বক্তৃতা 'অনেক দ্রুত' শোনায়",
      subtitle: "আসলে দ্রুত নয়। তিনটি জিনিস ঘটছে যার জন্য স্কুলের ইংরেজি আপনাকে প্রস্তুত করে না।",
      t1: 'Connected speech',
      t1b: '"Wanna go" "want to go" এর বদলে। "Whatcha doing" "what are you doing" এর বদলে। শব্দগুলো একে অপরের মধ্যে মিশে যায়। পৃথক শব্দ নয়, প্যাটার্ন শিখতে হবে।',
      t2: 'Stress-timing',
      t2b: 'ইংরেজি অচাপযুক্ত সিলেবলগুলো দ্রুত গুনগুনানিতে সংকুচিত করে (schwa)। গুরুত্বপূর্ণ শব্দ জোরে আসে, ফিলার পিছলে যায়। আপনার মস্তিষ্ককে সংকেত থেকে গোলমাল আলাদা করতে হবে।',
      t3: 'ছদ্মবেশে শব্দভাণ্ডার',
      t3b: '"Anyway" দ্রুত বললে "n-way" শোনায়। "Probably" হয় "prolly।" শুধু পাতায় শব্দ জানলে বক্তৃতায় চিনতে পারবেন না।',
    },
    ladder: {
      title: 'চার-সপ্তাহের লিসেনিং সিঁড়ি',
      w1: 'সপ্তাহ ১ · ধীর + স্ক্রিপ্টেড',
      w1b: 'BBC Learning English "6 Minute English।" ধীর, স্ক্রিপ্টেড, সাবটাইটেল সহ। একবার সাবটাইটেল সহ, একবার ছাড়া শুনুন। প্রতিটি পর্ব থেকে একটি নতুন বাক্যাংশ নোট করুন।',
      w2: 'সপ্তাহ ২ · স্বাভাবিক + স্ক্রিপ্টেড',
      w2b: 'TED-Ed এবং TED talks। নেটিভ গতি, স্ক্রিপ্টেড, নির্ভরযোগ্য সাবটাইটেল সহ। উচ্চারণ ব্রিটিশের বাইরে — আমেরিকান, ভারতীয়, আফ্রিকান। প্রতিদিন দুটি টক।',
      w3: 'সপ্তাহ ৩ · স্বাভাবিক + অস্ক্রিপ্টেড',
      w3b: "পডকাস্ট: The Daily (NYT), BBC Global News, ABC News in Depth (অস্ট্রেলিয়ান)। বাস্তব কথোপকথন, বাস্তব দ্বিধা, বাস্তব উচ্চারণ। শোনার সময় ট্রান্সক্রিপ্ট পড়বেন না — পরে পড়ুন।",
      w4: 'সপ্তাহ ৪ · দ্রুত + বহু-বক্তা',
      w4b: 'YouTube সাক্ষাৎকার, মক IELTS সেকশন ৩ (বহু-বক্তা একাডেমিক আলোচনা), TOEFL লেকচার প্র্যাকটিস সেট। এখন আপনি পরীক্ষার মাত্রায় আছেন।',
    },
    accents: {
      title: 'প্রতিটি বাংলাদেশি প্রার্থীর যে পাঁচটি উচ্চারণে অনুশীলন করা উচিত',
      a1: 'ব্রিটিশ (RP / Estuary)',
      a1b: 'IELTS-এ সবচেয়ে বেশি। BBC News, The Guardian podcast শুনুন।',
      a2: 'আমেরিকান (সাধারণ)',
      a2b: 'TOEFL মান। NPR, The Daily, Planet Money শুনুন।',
      a3: 'অস্ট্রেলিয়ান',
      a3b: 'IELTS লিসেনিং সেকশন ২ ও ৪-এ সাধারণ। ABC News এবং Hamish & Andy শুনুন।',
      a4: 'কানাডিয়ান',
      a4b: 'PTE-তে আসে। সূক্ষ্ম স্বর পরিবর্তন সহ আমেরিকানের মতো শোনায়। CBC পডকাস্ট শ্রেণিকক্ষ।',
      a5: 'ভারতীয় ইংরেজি',
      a5b: "ইতিমধ্যে শুনেছেন। কিন্তু লেকচার ফর্মে একাডেমিক ভারতীয় ইংরেজি আলাদা — ব্যবধান পূরণে The Print-এর পডকাস্ট চেষ্টা করুন।",
      a6: 'বাংলাদেশি ইংরেজি (হ্যাঁ, সত্যিই)',
      a6b: 'আপনার ভবিষ্যৎ বিশ্ববিদ্যালয় শিক্ষক বা অফিসের সহকর্মী বাংলাদেশির মতো শুনতে পারে। এটা অনুশীলন করা অস্বস্তি ছাড়াই ফলো-আপ প্রশ্ন করার আত্মবিশ্বাস তৈরি করে।',
    },
    tonight: {
      title: 'আজ রাতের ড্রিল',
      time: '~১৫ মিনিট',
      s1: "এমন একটি ৫-মিনিটের BBC ক্লিপ বেছে নিন যা এখনো শোনেননি।",
      s2: "সাবটাইটেল বন্ধ রেখে একবার শুনুন। বাংলায় এক বাক্যে জোরে সংক্ষেপ করার চেষ্টা করুন।",
      s3: "সাবটাইটেল চালু করে আবার শুনুন। ভুল শোনা শব্দগুলো নোট করুন।",
      s4: "১.২৫x গতিতে তৃতীয়বার শুনুন। লক্ষ্য করুন এটা এখন স্বাভাবিক গতির কাছাকাছি মনে হচ্ছে।",
      cta: 'লিসেনিং ড্রিল খুলুন',
    },
  },
};

export default function ListeningPage() {
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
            <Link href="/voice">
              <Headphones className="mr-2 h-4 w-4" /> {c.drillCta}
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/sign-up">{c.startFree}</Link>
          </Button>
        </div>
      </section>

      <Section title={c.fast.title} subtitle={c.fast.subtitle}>
        <div className="grid gap-4 md:grid-cols-3">
          <Tile title={c.fast.t1}>{c.fast.t1b}</Tile>
          <Tile title={c.fast.t2}>{c.fast.t2b}</Tile>
          <Tile title={c.fast.t3}>{c.fast.t3b}</Tile>
        </div>
      </Section>

      <Section title={c.ladder.title}>
        <ol className="space-y-4">
          {(['w1', 'w2', 'w3', 'w4'] as const).map((wk) => (
            <li key={wk} className="rounded-lg border bg-card p-5">
              <p className="text-sm font-semibold text-primary">{c.ladder[wk]}</p>
              <p className="mt-2 text-sm text-muted-foreground">{c.ladder[`${wk}b` as `${typeof wk}b`]}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section title={c.accents.title}>
        <div className="grid gap-3 md:grid-cols-2">
          <Tile title={c.accents.a1}>{c.accents.a1b}</Tile>
          <Tile title={c.accents.a2}>{c.accents.a2b}</Tile>
          <Tile title={c.accents.a3}>{c.accents.a3b}</Tile>
          <Tile title={c.accents.a4}>{c.accents.a4b}</Tile>
          <Tile title={c.accents.a5}>{c.accents.a5b}</Tile>
          <Tile title={c.accents.a6}>{c.accents.a6b}</Tile>
        </div>
      </Section>

      <Section title={c.tonight.title}>
        <div className="rounded-lg border bg-card p-6">
          <p className="text-sm font-semibold text-primary">{c.tonight.time}</p>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm">
            <li>{c.tonight.s1}</li>
            <li>{c.tonight.s2}</li>
            <li>{c.tonight.s3}</li>
            <li>{c.tonight.s4}</li>
          </ol>
          <Button asChild className="mt-5">
            <Link href="/voice">
              {c.tonight.cta} <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Section>
    </SiteShell>
  );
}
