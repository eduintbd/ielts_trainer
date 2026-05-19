'use client';

import Link from 'next/link';
import { ArrowRight, Languages } from 'lucide-react';
import { SiteShell, Section, Tile } from '@/components/site-shell';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/providers/language-provider';

const CONTENT = {
  en: {
    badge: 'English Mastery / Pronunciation',
    h1: 'A clearer accent in 30 days.',
    desc: 'Nobody is asking you to "sound British." Examiners want clarity — sounds that don\'t make the listener re-process what you said. There are six pronunciation patterns Bangla speakers can fix in a month, and they unlock most of the speaking score.',
    openDrill: 'Open the drill',
    startFree: 'Start free',
    map: {
      title: 'The Bangla-speaker pronunciation map',
      t1: 'V vs W',
      t1a: '/v/ — upper teeth gently touching lower lip + vibration. Try "very, vase, vote."',
      t1b: '/w/ — lips round and pushed forward, no teeth. Try "we, water, win."',
      t1c: 'Drill word pair: vine / wine.',
      t2: 'P vs F',
      t2a: '/p/ — both lips closed, then burst of air. Hold a tissue, it should flutter for "p" but not for "f."',
      t2b: '/f/ — upper teeth on lower lip, steady breath. Try "fine, four, friend."',
      t2c: 'Drill word pair: pan / fan.',
      t3: 'S vs Sh',
      t3a: 'Tongue near the gum ridge for /s/ — sharp, focused, like a snake hiss.',
      t3b: 'Tongue pulled back for /sh/ — rounder, broader. Bangla speakers default to "sh."',
      t3c: 'Drill: see / she, sip / ship, sue / shoe.',
      t4: 'The schwa /ə/',
      t4a: 'The lazy "uh" sound in nearly every unstressed English syllable. Without it, your speech sounds syllable-by-syllable — exam dock.',
      t4b: 'Drill: about → uh-BOUT. banana → buh-NAH-nuh. photograph → FOH-tuh-graf.',
      t5: 'Word stress',
      t5a: 'English shifts both the stress and the vowel as a word changes form.',
      t5b: 'PHO-to-graph → pho-TO-gra-phy → pho-to-GRA-phic. Don\'t say each one with the same rhythm.',
      t6: 'Final consonants',
      t6a: 'Bangla speakers swallow the last sound of English words. The examiner hears "wal" instead of "walked."',
      t6b: 'Drill: walked /wokt/, asked /askt/, played /pleyd/, wanted /WONT-id/. Make the ending audible.',
    },
    minimal: {
      title: 'The minimal-pair drill (5 minutes, daily)',
      desc: 'Pick one Bangla-speaker leak. Find ten minimal pairs (words that differ by only that sound). Say each pair aloud, slowly. Then record yourself and play it back. Your ear will pick up the difference before your mouth does.',
      todayLabel: "Today's pair set: V / W",
    },
    stress: {
      title: 'Sentence stress is more important than word stress',
      desc: 'In English, content words (nouns, main verbs, adjectives, adverbs) are stressed. Function words (the, a, of, to, in, was, has) are squeezed flat. Bangla is mostly syllable-timed — every syllable gets roughly equal weight. This is the single biggest reason Bangladeshi speakers sound "non-native" even when individual words are perfect.',
      try: 'Try this sentence with English-style stress:',
      note: 'The bolded words land hard. Everything else — "I to the and some" — passes through quickly. Practise stretching that rhythm and your speech immediately sounds more natural.',
    },
    plan: {
      title: 'Three-week clarity plan',
      w1: 'Week 1. V/W and P/F. Five minutes daily on minimal pairs in the voice coach.',
      w2: 'Week 2. S/Sh and final consonants. Read aloud one news editorial with deliberate ending sounds.',
      w3: 'Week 3. Schwa and sentence stress. Shadow native audio — copy the rhythm, not just the words.',
      cta: "Start today's drill",
    },
  },
  bn: {
    badge: 'ইংরেজি দক্ষতা / উচ্চারণ',
    h1: '৩০ দিনে স্পষ্ট উচ্চারণ।',
    desc: 'কাউকে "ব্রিটিশের মতো শুনতে" বলা হচ্ছে না। পরীক্ষকরা স্পষ্টতা চান — এমন শব্দ যা শ্রোতাকে পুনরায় প্রক্রিয়া করতে বাধ্য করে না। ছয়টি উচ্চারণ প্যাটার্ন আছে যা বাংলাভাষীরা এক মাসে ঠিক করতে পারে এবং এগুলো স্পিকিং স্কোরের বেশিরভাগ খুলে দেয়।',
    openDrill: 'ড্রিল খুলুন',
    startFree: 'বিনামূল্যে শুরু করুন',
    map: {
      title: 'বাংলাভাষীর উচ্চারণ মানচিত্র',
      t1: 'V বনাম W',
      t1a: '/v/ — উপরের দাঁত হালকাভাবে নিচের ঠোঁট স্পর্শ করে + কম্পন। "very, vase, vote" চেষ্টা করুন।',
      t1b: '/w/ — ঠোঁট গোলাকার এবং সামনে ঠেলা, দাঁত নেই। "we, water, win" চেষ্টা করুন।',
      t1c: 'ড্রিল শব্দ জুটি: vine / wine।',
      t2: 'P বনাম F',
      t2a: '/p/ — উভয় ঠোঁট বন্ধ, তারপর বাতাসের বিস্ফোরণ। একটি টিস্যু ধরুন, "p" এর জন্য কাঁপবে কিন্তু "f" এর জন্য নয়।',
      t2b: '/f/ — উপরের দাঁত নিচের ঠোঁটে, স্থির শ্বাস। "fine, four, friend" চেষ্টা করুন।',
      t2c: 'ড্রিল শব্দ জুটি: pan / fan।',
      t3: 'S বনাম Sh',
      t3a: '/s/ এর জন্য জিভ গাম রিজের কাছে — তীক্ষ্ণ, কেন্দ্রীভূত, সাপের হিসের মতো।',
      t3b: '/sh/ এর জন্য জিভ পিছিয়ে — গোলাকার, প্রশস্ত। বাংলাভাষীরা "sh" ডিফল্ট করে।',
      t3c: 'ড্রিল: see / she, sip / ship, sue / shoe।',
      t4: 'The schwa /ə/',
      t4a: 'প্রায় প্রতিটি অচাপযুক্ত ইংরেজি সিলেবলে অলস "আহ" শব্দ। ছাড়া, আপনার বক্তৃতা সিলেবল-বাই-সিলেবল শোনায় — পরীক্ষায় নম্বর কাটে।',
      t4b: 'ড্রিল: about → uh-BOUT। banana → buh-NAH-nuh। photograph → FOH-tuh-graf।',
      t5: 'Word stress',
      t5a: 'একটি শব্দ পরিবর্তন হলে ইংরেজি চাপ এবং স্বর উভয়ই পরিবর্তন করে।',
      t5b: 'PHO-to-graph → pho-TO-gra-phy → pho-to-GRA-phic। প্রতিটিতে একই ছন্দে বলবেন না।',
      t6: 'শেষ ব্যঞ্জনধ্বনি',
      t6a: 'বাংলাভাষীরা ইংরেজি শব্দের শেষ শব্দ গিলে ফেলেন। পরীক্ষক "wal" শোনেন "walked" এর বদলে।',
      t6b: 'ড্রিল: walked /wokt/, asked /askt/, played /pleyd/, wanted /WONT-id/। শেষটি শ্রুতিযোগ্য করুন।',
    },
    minimal: {
      title: 'মিনিমাল-পেয়ার ড্রিল (৫ মিনিট, প্রতিদিন)',
      desc: 'একটি বাংলাভাষী ফুটো বেছে নিন। দশটি মিনিমাল পেয়ার খুঁজুন (শুধু সেই শব্দে আলাদা শব্দ)। ধীরে জোরে বলুন। তারপর রেকর্ড করুন এবং প্লে ব্যাক করুন। আপনার মুখের আগেই কান পার্থক্য ধরবে।',
      todayLabel: 'আজকের পেয়ার সেট: V / W',
    },
    stress: {
      title: 'বাক্যের জোর শব্দের জোরের চেয়ে বেশি গুরুত্বপূর্ণ',
      desc: 'ইংরেজিতে বিষয়বস্তুর শব্দ (বিশেষ্য, মূল ক্রিয়া, বিশেষণ, ক্রিয়াবিশেষণ) চাপযুক্ত। ফাংশন শব্দ (the, a, of, to, in, was, has) চ্যাপ্টা। বাংলা বেশিরভাগ সিলেবল-টাইমড — প্রতিটি সিলেবল মোটামুটি সমান ওজন পায়। এটাই সবচেয়ে বড় কারণ যে কারণে বাংলাদেশি বক্তারা পৃথক শব্দ নিখুঁত হলেও "অ-নেটিভ" শোনান।',
      try: 'ইংরেজি-শৈলীর জোর দিয়ে এই বাক্যটি চেষ্টা করুন:',
      note: 'বোল্ড শব্দগুলো জোরে আসে। বাকি সব — "I to the and some" — দ্রুত পার হয়ে যায়। সেই ছন্দ প্রসারিত করার অনুশীলন করলে আপনার বক্তৃতা তাৎক্ষণিকভাবে আরও স্বাভাবিক শোনায়।',
    },
    plan: {
      title: 'তিন-সপ্তাহের স্পষ্টতা পরিকল্পনা',
      w1: 'সপ্তাহ ১। V/W এবং P/F। ভয়েস কোচে প্রতিদিন পাঁচ মিনিট মিনিমাল পেয়ার।',
      w2: 'সপ্তাহ ২। S/Sh এবং শেষ ব্যঞ্জনধ্বনি। ইচ্ছাকৃত শেষ শব্দ সহ একটি সংবাদ সম্পাদকীয় জোরে পড়ুন।',
      w3: 'সপ্তাহ ৩। Schwa এবং বাক্যের জোর। নেটিভ অডিও শ্যাডো করুন — শুধু শব্দ নয়, ছন্দ কপি করুন।',
      cta: 'আজকের ড্রিল শুরু করুন',
    },
  },
};

export default function PronunciationPage() {
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
              <Languages className="mr-2 h-4 w-4" /> {c.openDrill}
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/sign-up">{c.startFree}</Link>
          </Button>
        </div>
      </section>

      <Section title={c.map.title}>
        <div className="grid gap-4 md:grid-cols-2">
          <Tile title={c.map.t1}>
            <p><span className="font-semibold">/v/</span> — {c.map.t1a.replace('/v/ — ', '')}</p>
            <p className="mt-2"><span className="font-semibold">/w/</span> — {c.map.t1b.replace('/w/ — ', '')}</p>
            <p className="mt-2 text-xs">{c.map.t1c}</p>
          </Tile>
          <Tile title={c.map.t2}>
            <p><span className="font-semibold">/p/</span> — {c.map.t2a.replace('/p/ — ', '')}</p>
            <p className="mt-2"><span className="font-semibold">/f/</span> — {c.map.t2b.replace('/f/ — ', '')}</p>
            <p className="mt-2 text-xs">{c.map.t2c}</p>
          </Tile>
          <Tile title={c.map.t3}>
            <p>{c.map.t3a}</p>
            <p className="mt-2">{c.map.t3b}</p>
            <p className="mt-2 text-xs">{c.map.t3c}</p>
          </Tile>
          <Tile title={c.map.t4}>
            <p>{c.map.t4a}</p>
            <p className="mt-2 text-xs">{c.map.t4b}</p>
          </Tile>
          <Tile title={c.map.t5}>
            <p>{c.map.t5a}</p>
            <p className="mt-2 text-xs">{c.map.t5b}</p>
          </Tile>
          <Tile title={c.map.t6}>
            <p>{c.map.t6a}</p>
            <p className="mt-2 text-xs">{c.map.t6b}</p>
          </Tile>
        </div>
      </Section>

      <Section title={c.minimal.title}>
        <div className="rounded-lg border bg-card p-5 text-sm">
          <p>{c.minimal.desc}</p>
          <p className="mt-3 font-semibold">{c.minimal.todayLabel}</p>
          <ul className="mt-2 grid grid-cols-2 gap-x-6 text-muted-foreground">
            <li>vine / wine</li>
            <li>vest / west</li>
            <li>vet / wet</li>
            <li>veil / wail</li>
            <li>vow / wow</li>
            <li>verse / worse</li>
            <li>vary / wary</li>
            <li>vine / whine</li>
            <li>vow / wow</li>
            <li>victor / Wicker</li>
          </ul>
        </div>
      </Section>

      <Section title={c.stress.title}>
        <div className="rounded-lg border bg-card p-5 text-sm">
          <p>{c.stress.desc}</p>
          <p className="mt-3">{c.stress.try}</p>
          <p className="mt-2 italic">
            &ldquo;I <span className="font-bold">went</span> to the <span className="font-bold">market</span> and{' '}
            <span className="font-bold">bought</span> some <span className="font-bold">fish</span>.&rdquo;
          </p>
          <p className="mt-2 text-muted-foreground">{c.stress.note}</p>
        </div>
      </Section>

      <Section title={c.plan.title}>
        <ol className="space-y-3 text-sm">
          <li className="rounded-lg border bg-card p-4">{c.plan.w1}</li>
          <li className="rounded-lg border bg-card p-4">{c.plan.w2}</li>
          <li className="rounded-lg border bg-card p-4">{c.plan.w3}</li>
        </ol>
        <Button asChild className="mt-5">
          <Link href="/voice">
            {c.plan.cta} <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </Section>
    </SiteShell>
  );
}
