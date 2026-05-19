'use client';

import Link from 'next/link';
import { ArrowRight, Mic } from 'lucide-react';
import { SiteShell, Section, Tile } from '@/components/site-shell';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/providers/language-provider';

const CONTENT = {
  en: {
    badge: 'English Mastery / Speaking',
    h1: 'Speak English without freezing.',
    desc: "The single biggest gap for Bangla speakers is not vocabulary — it is the muscle memory of using English with your mouth. You have read it for a decade. You have spoken it for hours. This module fixes that imbalance.",
    voiceCta: 'Open voice coach',
    startFree: 'Start free',
    stuck: {
      title: 'Why your speaking is stuck',
      subtitle: 'It is not effort. It is approach.',
      t1: 'You translate before speaking',
      t1b: "Bangla sentence forms in your head, you translate it into English, you speak. The lag is 2-3 seconds — enough for the examiner to mark you down on fluency. The fix is direct-thinking drills, not faster translation.",
      t2: 'You speak with your eyes',
      t2b: "Reading English silently exercises the brain. It does not exercise the tongue, jaw, or breathing. The first time you have to say \"thoroughly\" out loud, the muscles fail you.",
      t3: 'You avoid mistakes',
      t3b: 'Bangladeshi students are perfectionists. You wait until the sentence is "right" before speaking. By then the conversation has moved on. We teach a "70% accurate, 100% on-time" mindset.',
      t4: "You don't speak daily",
      t4b: "One hour of speaking per week loses to ten minutes per day. Always. The brain consolidates muscle patterns during sleep — daily reps win.",
    },
    habits: {
      title: 'The four habits that build a Band 7+ speaker',
      h1label: '1. Shadowing — ten minutes a day',
      h1body: "Pick a 60-second native audio clip. Play one sentence, pause, repeat it out loud copying every contour of pitch, every linked sound, every stressed syllable. You are not just saying the words; you are imitating the music of English.",
      h1sources: 'Best sources: BBC Learning English\'s "6 Minute English," Voice of America Learning English, TED-Ed shorts.',
      h2label: '2. The 60-second monologue, daily',
      h2body: 'Pick a topic — "the bus ride this morning," "what I ate yesterday," "my opinion about WhatsApp." Set a 60-second timer. Speak without stopping. Record yourself. Listen back once. Note the moment you got stuck and look up that exact phrase the next day.',
      h3label: '3. Read aloud — fifteen minutes, three times a week',
      h3body: 'Editorials from The Daily Star or BBC News. Read every sentence aloud at conversational speed. Mark the words that feel wrong in your mouth, then drill them with the voice coach.',
      h4label: '4. One real conversation per week',
      h4body: 'The voice coach is a scaffold, not a destination. Find one human — a classmate, a cousin abroad, a community partner in the forum — and have a 20-minute English-only call once a week. No exceptions.',
    },
    watchlist: {
      title: 'Bangla-speaker pronunciation watchlist',
      desc: 'These six sound patterns are flagged automatically by the voice coach. Knowing the list in advance shortens your correction loop.',
      t1: 'V vs W',
      t1b: '"Wery good" instead of "very good." Bangla has no /v/. Bite your bottom lip lightly with your top teeth.',
      t2: 'P vs F',
      t2b: '"Pavourite" instead of "favourite." /f/ is upper teeth on bottom lip + breath. /p/ is full lip closure.',
      t3: 'S vs Sh',
      t3b: '"Sip" vs "ship." Pull the tongue back slightly for "sh." Bangla speakers often default to "sh."',
      t4: 'Schwa (the lazy \'uh\')',
      t4b: '"About" is uh-BOUT, not ah-BOUT. English has one schwa sound in nearly every unstressed syllable.',
      t5: 'Word stress',
      t5b: "PHO-to-graph vs pho-TO-gra-phy. The vowel shifts when the stress shifts. Bangla is syllable-timed; English is stress-timed.",
      t6: 'Final consonants',
      t6b: '"Walked" has a /t/ ending, "wanted" has /id/. Bangla speakers often drop the ending. The examiner notices.',
    },
    tonight: {
      title: "Tonight's exercise",
      time: '~12 minutes',
      s1: 'Open the voice coach and choose "Pronunciation drill."',
      s2: 'Run the V/W and P/F sets — 4 minutes.',
      s3: 'Switch to "Free conversation." Pick a topic from your day. Speak for 5 minutes.',
      s4: "Read the AI's transcript. Highlight one mistake. Decide tomorrow's drill.",
      cta: 'Start the session',
    },
  },
  bn: {
    badge: 'ইংরেজি দক্ষতা / স্পিকিং',
    h1: 'ঘাবড়ে না গিয়ে ইংরেজিতে কথা বলুন।',
    desc: "বাংলাভাষীদের সবচেয়ে বড় ঘাটতি শব্দভাণ্ডার নয় — এটি মুখ দিয়ে ইংরেজি ব্যবহারের পেশির স্মৃতি। এক দশক ধরে পড়েছেন। ঘণ্টার পর ঘণ্টা পড়েছেন। এই মডিউল সেই ভারসাম্যহীনতা ঠিক করে।",
    voiceCta: 'ভয়েস কোচ খুলুন',
    startFree: 'বিনামূল্যে শুরু করুন',
    stuck: {
      title: 'কেন আপনার স্পিকিং আটকে আছে',
      subtitle: 'এটা পরিশ্রমের অভাব নয়। পদ্ধতির অভাব।',
      t1: 'বলার আগে অনুবাদ করেন',
      t1b: "মাথায় বাংলা বাক্য তৈরি হয়, ইংরেজিতে অনুবাদ করেন, তারপর বলেন। বিলম্ব হয় ২-৩ সেকেন্ড — পরীক্ষক স্বচ্ছন্দতায় নম্বর কাটার জন্য যথেষ্ট। সমাধান দ্রুত অনুবাদ নয় — সরাসরি-চিন্তার ড্রিল।",
      t2: 'চোখ দিয়ে কথা বলেন',
      t2b: "নীরবে ইংরেজি পড়া মস্তিষ্কের ব্যায়াম করায়। জিভ, চোয়াল বা শ্বাস-প্রশ্বাসের নয়। প্রথমবার জোরে 'thoroughly' বলতে গেলে পেশি বিফল হয়।",
      t3: 'ভুল এড়িয়ে চলেন',
      t3b: "বাংলাদেশি শিক্ষার্থীরা পারফেকশনিস্ট। বাক্যটা 'ঠিক' না হওয়া পর্যন্ত অপেক্ষা করেন। ততক্ষণে কথোপকথন এগিয়ে গেছে। আমরা '৭০% সঠিক, ১০০% সময়মতো' মানসিকতা শেখাই।",
      t4: 'প্রতিদিন কথা বলেন না',
      t4b: "সপ্তাহে এক ঘণ্টা স্পিকিং প্রতিদিন দশ মিনিটের কাছে হারে। সবসময়। মস্তিষ্ক ঘুমের সময় পেশির প্যাটার্ন একত্রিত করে — প্রতিদিনের অনুশীলন জেতে।",
    },
    habits: {
      title: 'ব্যান্ড ৭+ স্পিকার তৈরির চারটি অভ্যাস',
      h1label: '১. শ্যাডোয়িং — দিনে দশ মিনিট',
      h1body: "৬০ সেকেন্ডের একটি নেটিভ অডিও ক্লিপ বেছে নিন। একটি বাক্য বাজান, থামুন, পিচের প্রতিটি বাঁক, প্রতিটি সংযুক্ত শব্দ, প্রতিটি চাপযুক্ত সিলেবল নকল করে জোরে পুনরাবৃত্তি করুন। শুধু শব্দ বলছেন না; ইংরেজির সুর অনুকরণ করছেন।",
      h1sources: "সেরা উৎস: BBC Learning English-এর '6 Minute English,' Voice of America Learning English, TED-Ed shorts।",
      h2label: '২. ৬০-সেকেন্ডের একক বক্তৃতা, প্রতিদিন',
      h2body: "একটি বিষয় বেছে নিন — 'আজ সকালের বাসযাত্রা,' 'গতকাল কী খেলাম,' 'WhatsApp সম্পর্কে মতামত।' ৬০-সেকেন্ডের টাইমার সেট করুন। না থেমে কথা বলুন। রেকর্ড করুন। একবার শুনুন। যেখানে আটকে গেলেন নোট করুন এবং পরদিন সেই বাক্যাংশটি খুঁজুন।",
      h3label: '৩. জোরে পড়া — সপ্তাহে তিনবার, পনের মিনিট',
      h3body: "The Daily Star বা BBC News-এর সম্পাদকীয়। প্রতিটি বাক্য কথোপকথনের গতিতে জোরে পড়ুন। মুখে অদ্ভুত লাগা শব্দগুলো চিহ্নিত করুন, তারপর ভয়েস কোচ দিয়ে ড্রিল করুন।",
      h4label: '৪. সপ্তাহে একটি বাস্তব কথোপকথন',
      h4body: "ভয়েস কোচ একটি ভারা, গন্তব্য নয়। একজন মানুষ খুঁজুন — একজন সহপাঠী, বিদেশে থাকা কাজিন, ফোরামের কোনো অংশীদার — এবং সপ্তাহে একবার ২০ মিনিটের শুধু-ইংরেজি কল করুন। কোনো ব্যতিক্রম নেই।",
    },
    watchlist: {
      title: 'বাংলাভাষীর উচ্চারণ সতর্কসূচি',
      desc: 'এই ছয়টি শব্দ-প্যাটার্ন ভয়েস কোচ স্বয়ংক্রিয়ভাবে চিহ্নিত করে। তালিকাটি আগে থেকে জানলে সংশোধনের চক্র সংক্ষিপ্ত হয়।',
      t1: 'V বনাম W',
      t1b: "'Wery good' বলছেন 'very good' এর জায়গায়। বাংলায় /v/ নেই। উপরের দাঁত দিয়ে হালকা নিচের ঠোঁট কামড়ান।",
      t2: 'P বনাম F',
      t2b: "'Pavourite' বলছেন 'favourite' এর জায়গায়। /f/ হলো উপরের দাঁত নিচের ঠোঁটে + শ্বাস। /p/ হলো সম্পূর্ণ ঠোঁট বন্ধ।",
      t3: 'S বনাম Sh',
      t3b: "'Sip' বনাম 'ship।' 'sh' এর জন্য জিভ সামান্য পিছিয়ে নিন। বাংলাভাষীরা প্রায়ই 'sh' ডিফল্ট করে।",
      t4: "Schwa (অলস 'আহ')",
      t4b: "'About' হলো uh-BOUT, ah-BOUT নয়। প্রায় প্রতিটি অচাপযুক্ত ইংরেজি সিলেবলে একটি schwa শব্দ আছে।",
      t5: 'Word stress',
      t5b: "PHO-to-graph বনাম pho-TO-gra-phy। চাপ পরিবর্তন হলে স্বরও পরিবর্তন হয়। বাংলা সিলেবল-টাইমড; ইংরেজি স্ট্রেস-টাইমড।",
      t6: 'শেষ ব্যঞ্জনধ্বনি',
      t6b: "'Walked'-এ /t/ শেষ আছে, 'wanted'-এ /id/। বাংলাভাষীরা প্রায়ই শেষটা বাদ দেন। পরীক্ষক খেয়াল করেন।",
    },
    tonight: {
      title: 'আজ রাতের অনুশীলন',
      time: '~১২ মিনিট',
      s1: "ভয়েস কোচ খুলুন এবং 'Pronunciation drill' বেছে নিন।",
      s2: "V/W এবং P/F সেট চালু করুন — ৪ মিনিট।",
      s3: "'Free conversation'-এ যান। আপনার দিন থেকে একটি বিষয় বেছে নিন। ৫ মিনিট কথা বলুন।",
      s4: "AI-এর ট্রান্সক্রিপ্ট পড়ুন। একটি ভুল হাইলাইট করুন। আগামীকালের ড্রিল ঠিক করুন।",
      cta: 'সেশন শুরু করুন',
    },
  },
};

export default function SpeakingPage() {
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
              <Mic className="mr-2 h-4 w-4" /> {c.voiceCta}
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/sign-up">{c.startFree}</Link>
          </Button>
        </div>
      </section>

      <Section title={c.stuck.title} subtitle={c.stuck.subtitle}>
        <div className="grid gap-4 md:grid-cols-2">
          <Tile title={c.stuck.t1}>{c.stuck.t1b}</Tile>
          <Tile title={c.stuck.t2}>{c.stuck.t2b}</Tile>
          <Tile title={c.stuck.t3}>{c.stuck.t3b}</Tile>
          <Tile title={c.stuck.t4}>{c.stuck.t4b}</Tile>
        </div>
      </Section>

      <Section title={c.habits.title}>
        <ol className="space-y-4">
          <li className="rounded-lg border bg-card p-5">
            <p className="text-sm font-semibold text-primary">{c.habits.h1label}</p>
            <p className="mt-2 text-sm text-muted-foreground">{c.habits.h1body}</p>
            <p className="mt-2 text-sm text-muted-foreground">
              <span className="font-medium text-foreground">{lang === 'bn' ? 'সেরা উৎস:' : 'Best sources:'}</span>{' '}
              {c.habits.h1sources.replace(/^(সেরা উৎস:|Best sources:)\s*/, '')}
            </p>
          </li>
          <li className="rounded-lg border bg-card p-5">
            <p className="text-sm font-semibold text-primary">{c.habits.h2label}</p>
            <p className="mt-2 text-sm text-muted-foreground">{c.habits.h2body}</p>
          </li>
          <li className="rounded-lg border bg-card p-5">
            <p className="text-sm font-semibold text-primary">{c.habits.h3label}</p>
            <p className="mt-2 text-sm text-muted-foreground">{c.habits.h3body}</p>
          </li>
          <li className="rounded-lg border bg-card p-5">
            <p className="text-sm font-semibold text-primary">{c.habits.h4label}</p>
            <p className="mt-2 text-sm text-muted-foreground">{c.habits.h4body}</p>
          </li>
        </ol>
      </Section>

      <Section title={c.watchlist.title}>
        <p className="mb-4 text-sm text-muted-foreground">{c.watchlist.desc}</p>
        <div className="grid gap-3 md:grid-cols-2">
          <Tile title={c.watchlist.t1}>{c.watchlist.t1b}</Tile>
          <Tile title={c.watchlist.t2}>{c.watchlist.t2b}</Tile>
          <Tile title={c.watchlist.t3}>{c.watchlist.t3b}</Tile>
          <Tile title={c.watchlist.t4}>{c.watchlist.t4b}</Tile>
          <Tile title={c.watchlist.t5}>{c.watchlist.t5b}</Tile>
          <Tile title={c.watchlist.t6}>{c.watchlist.t6b}</Tile>
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
