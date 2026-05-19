'use client';

import { SiteShell, Section, Tile } from '@/components/site-shell';
import { useLanguage } from '@/components/providers/language-provider';

const CONTENT = {
  en: {
    hero: {
      title: 'We started where you started — at zero.',
      subtitle:
        "Most prep apps assume you already think in English. We don't. IELTS Trainer was built in Dhaka for students who learned English the hard way: textbooks first, conversation last.",
    },
    t1: 'Why we exist',
    t1b: "Coaching in Bangladesh is expensive, batch-based, and tuned for tricks not skill. We wanted something a student in Sylhet, Khulna, or rural Rajshahi could open at 11 p.m. on a phone and still get better.",
    t2: 'Our promise',
    t2b: "Master English first, then sit the exam. Band scores are a side effect of being good at the language — not the other way around. We will not teach you tricks that fall apart at the speaking interview.",
    t3: 'How we are different',
    t3b: "Bangla-aware feedback. A voice coach that hears your স / শ confusion. Vocabulary that uses Dhaka context. Free tier that is actually usable, not a trial.",
    principles: {
      title: "The principles we won't compromise on",
      p1bold: 'Skill over score.',
      p1: ' A Band 7 you cannot defend in a conversation is worse than a Band 6 you can.',
      p2bold: 'Speak every single day.',
      p2: ' We will nag you. The voice coach exists because reading silently is what got you stuck.',
      p3bold: 'Bangla is a feature, not a crutch.',
      p3: ' Translation drills are part of the curriculum, not something we hide.',
      p4bold: 'Free tier stays generous.',
      p4: " If you genuinely can't pay, the core features will still get you to a Band 7.",
    },
  },
  bn: {
    hero: {
      title: 'আমরা শুরু করেছি যেখান থেকে আপনি শুরু করেছেন — শূন্য থেকে।',
      subtitle:
        'বেশিরভাগ প্রস্তুতি অ্যাপ ধরে নেয় আপনি ইতিমধ্যে ইংরেজিতে ভাবেন। আমরা মনে করি না। IELTS Trainer ঢাকায় তৈরি হয়েছে সেই শিক্ষার্থীদের জন্য যারা কঠিন পথে ইংরেজি শিখেছে: আগে পাঠ্যপুস্তক, কথোপকথন পরে।',
    },
    t1: 'আমরা কেন আছি',
    t1b: 'বাংলাদেশে কোচিং ব্যয়বহুল, ব্যাচ-ভিত্তিক এবং দক্ষতার বদলে কৌশলের জন্য তৈরি। আমরা এমন কিছু চেয়েছিলাম যা সিলেট, খুলনা বা গ্রামাঞ্চলের রাজশাহীর একজন শিক্ষার্থী রাত ১১টায় ফোনে খুলে উন্নতি করতে পারে।',
    t2: 'আমাদের প্রতিশ্রুতি',
    t2b: 'আগে ইংরেজি আয়ত্ত করুন, তারপর পরীক্ষা দিন। ব্যান্ড স্কোর ভাষায় দক্ষ হওয়ার পার্শ্ব-প্রতিক্রিয়া — উল্টোটা নয়। আমরা এমন কৌশল শেখাব না যা স্পিকিং সাক্ষাৎকারে ভেঙে পড়ে।',
    t3: 'আমরা কীভাবে আলাদা',
    t3b: 'বাংলা-সচেতন ফিডব্যাক। ভয়েস কোচ যা আপনার স / শ বিভ্রান্তি শোনে। ঢাকার প্রসঙ্গ ব্যবহারকারী শব্দভাণ্ডার। ফ্রি টায়ার যা আসলেই ব্যবহারযোগ্য, ট্রায়াল নয়।',
    principles: {
      title: 'যে নীতিগুলোতে আমরা আপোস করব না',
      p1bold: 'স্কোরের চেয়ে দক্ষতা।',
      p1: ' যে ব্যান্ড ৭ আপনি কথোপকথনে রক্ষা করতে পারেন না তা যে ব্যান্ড ৬ পারেন তার চেয়ে খারাপ।',
      p2bold: 'প্রতিদিন কথা বলুন।',
      p2: ' আমরা আপনাকে তাগাদা দেব। ভয়েস কোচ আছে কারণ নীরবে পড়াই আপনাকে আটকে রেখেছে।',
      p3bold: 'বাংলা একটি বৈশিষ্ট্য, ক্রাচ নয়।',
      p3: ' অনুবাদ ড্রিল পাঠ্যক্রমের অংশ, আমরা এটা লুকাই না।',
      p4bold: 'ফ্রি টায়ার উদার থাকবে।',
      p4: ' সত্যিই পেমেন্ট করতে না পারলে মূল ফিচারগুলো এখনও আপনাকে ব্যান্ড ৭-এ নিয়ে যাবে।',
    },
  },
};

export default function AboutPage() {
  const { lang } = useLanguage();
  const c = CONTENT[lang];

  return (
    <SiteShell>
      <Section title={c.hero.title} subtitle={c.hero.subtitle}>
        <div className="grid gap-4 md:grid-cols-3">
          <Tile title={c.t1}>{c.t1b}</Tile>
          <Tile title={c.t2}>{c.t2b}</Tile>
          <Tile title={c.t3}>{c.t3b}</Tile>
        </div>
      </Section>

      <Section title={c.principles.title}>
        <ul className="space-y-3 text-sm md:text-base">
          <li><span className="font-semibold">{c.principles.p1bold}</span>{c.principles.p1}</li>
          <li><span className="font-semibold">{c.principles.p2bold}</span>{c.principles.p2}</li>
          <li><span className="font-semibold">{c.principles.p3bold}</span>{c.principles.p3}</li>
          <li><span className="font-semibold">{c.principles.p4bold}</span>{c.principles.p4}</li>
        </ul>
      </Section>
    </SiteShell>
  );
}
