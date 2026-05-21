'use client';

import Link from 'next/link';
import type { Route } from 'next';
import { BookOpen, Mic, Library, BookMarked, ArrowRight } from 'lucide-react';
import { SiteShell, Section } from '@/components/site-shell';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/providers/language-provider';
import { VOCAB_WORDS } from '@/lib/learn/vocabulary';
import { PART1_TOPICS, PART2_TOPICS, PART3_TOPICS } from '@/lib/learn/speaking-topics';
import { RESOURCES } from '@/lib/learn/resources';

const CONTENT = {
  en: {
    badge: 'Free Learning Hub',
    h1: 'Everything you need — curated and free.',
    desc: 'Vocabulary from the COCA corpus, 86 IELTS speaking topics with band strategies, curated free resources from the best ESL repositories on the internet. No paywall. Start now.',
    modules: [
      {
        icon: BookMarked,
        href: '/learn/vocabulary',
        title: 'Vocabulary Bank',
        subtitle: 'COCA-inspired',
        body: 'Frequency-ranked words across 4 tiers — from essential everyday vocabulary to advanced Band 7+ terms. Each word has a bilingual definition, example sentence, and key collocations.',
        stat: `${VOCAB_WORDS.length} words · 4 tiers`,
        cta: 'Browse vocabulary',
      },
      {
        icon: Mic,
        href: '/learn/speaking-topics',
        title: 'Speaking Topics',
        subtitle: 'Part 1 · 2 · 3',
        body: 'Complete topic bank for all three parts of the IELTS Speaking test. Real questions, cue cards, band-specific strategy tips, and vocabulary lists for every topic.',
        stat: `${PART1_TOPICS.length + PART2_TOPICS.length + PART3_TOPICS.length} topics across Parts 1, 2 & 3`,
        cta: 'Practice speaking',
      },
      {
        icon: Library,
        href: '/learn/resources',
        title: 'Free Resources Hub',
        subtitle: 'Curated from the web',
        body: 'The best free listening, speaking, reading, writing, vocabulary, and mock test resources on the internet — organised by skill and level.',
        stat: `${RESOURCES.length} curated resources · all skills`,
        cta: 'Explore resources',
      },
      {
        icon: BookOpen,
        href: '/english/grammar',
        title: 'Grammar Module',
        subtitle: 'Bangla-speaker focused',
        body: 'The 12 grammar patterns Bangla speakers get wrong in every essay, tense reference, and drill techniques — all in one page.',
        stat: '12 error patterns · tense reference',
        cta: 'Fix your grammar',
      },
    ],
    howto: {
      title: 'How to use this hub',
      steps: [
        {
          n: '1',
          title: 'Take the placement test first',
          body: "If you don't know your CEFR level, take the 15-question placement test. Your level determines which vocabulary tier and speaking strategies to prioritise.",
          link: '/placement-test',
          linkLabel: 'Take placement test →',
        },
        {
          n: '2',
          title: 'Build vocabulary daily — one tier at a time',
          body: 'Start at Tier 1 if you are at A2–B1. Move to Tier 2 when you can use Tier 1 words without thinking. Use flashcards, not rote lists.',
          link: '/learn/vocabulary',
          linkLabel: 'Browse vocabulary →',
        },
        {
          n: '3',
          title: 'Practise speaking topics out loud every day',
          body: "For each Part 1 topic, record yourself answering all 5 questions. Listen back. Find the pause where you hesitated — that's tomorrow's target.",
          link: '/learn/speaking-topics',
          linkLabel: 'Open speaking topics →',
        },
        {
          n: '4',
          title: 'Supplement with curated free resources',
          body: 'Use the resources hub to find BBC podcasts for listening, IELTS Liz for writing models, and Cambridge for official practice tests.',
          link: '/learn/resources',
          linkLabel: 'Explore free resources →',
        },
      ],
    },
  },
  bn: {
    badge: 'বিনামূল্যে লার্নিং হাব',
    h1: 'আপনার যা দরকার — কিউরেটেড এবং বিনামূল্যে।',
    desc: 'COCA কর্পাস থেকে শব্দভাণ্ডার, ব্যান্ড কৌশল সহ ৮৬টি IELTS স্পিকিং টপিক, ইন্টারনেটের সেরা ESL রিপোজিটরি থেকে কিউরেটেড বিনামূল্যে সম্পদ। কোনো পেওয়াল নেই। এখনই শুরু করুন।',
    modules: [
      {
        icon: BookMarked,
        href: '/learn/vocabulary',
        title: 'শব্দভাণ্ডার ব্যাংক',
        subtitle: 'COCA-অনুপ্রাণিত',
        body: '৪টি স্তরে ফ্রিকোয়েন্সি-র‍্যাংকড শব্দ — প্রয়োজনীয় দৈনন্দিন শব্দভাণ্ডার থেকে উন্নত Band ৭+ পদ পর্যন্ত। প্রতিটি শব্দে দ্বিভাষিক সংজ্ঞা, উদাহরণ বাক্য এবং মূল collocations আছে।',
        stat: `${VOCAB_WORDS.length}টি শব্দ · ৪টি স্তর`,
        cta: 'শব্দভাণ্ডার দেখুন',
      },
      {
        icon: Mic,
        href: '/learn/speaking-topics',
        title: 'স্পিকিং টপিক',
        subtitle: 'পার্ট ১ · ২ · ৩',
        body: 'IELTS স্পিকিং টেস্টের তিনটি অংশের সম্পূর্ণ টপিক ব্যাংক। বাস্তব প্রশ্ন, কিউ কার্ড, ব্যান্ড-নির্দিষ্ট কৌশল টিপস এবং প্রতিটি টপিকের জন্য শব্দভাণ্ডার তালিকা।',
        stat: `পার্ট ১, ২ ও ৩ জুড়ে ${PART1_TOPICS.length + PART2_TOPICS.length + PART3_TOPICS.length}টি টপিক`,
        cta: 'স্পিকিং অনুশীলন করুন',
      },
      {
        icon: Library,
        href: '/learn/resources',
        title: 'বিনামূল্যে রিসোর্স হাব',
        subtitle: 'ওয়েব থেকে কিউরেটেড',
        body: 'ইন্টারনেটের সেরা বিনামূল্যে শোনা, কথা বলা, পড়া, লেখা, শব্দভাণ্ডার এবং মক টেস্ট সম্পদ — দক্ষতা এবং স্তর অনুযায়ী সংগঠিত।',
        stat: `${RESOURCES.length}টি কিউরেটেড সম্পদ · সব দক্ষতা`,
        cta: 'সম্পদ অন্বেষণ করুন',
      },
      {
        icon: BookOpen,
        href: '/english/grammar',
        title: 'গ্রামার মডিউল',
        subtitle: 'বাংলাভাষী-কেন্দ্রিক',
        body: 'বাংলাভাষীরা প্রতিটি রচনায় যে ১২টি ব্যাকরণ নিদর্শন ভুল করে, কাল রেফারেন্স এবং ড্রিল কৌশল — সব এক পাতায়।',
        stat: '১২টি ভুল নিদর্শন · কাল রেফারেন্স',
        cta: 'ব্যাকরণ ঠিক করুন',
      },
    ],
    howto: {
      title: 'এই হাব কীভাবে ব্যবহার করবেন',
      steps: [
        {
          n: '১',
          title: 'প্রথমে প্লেসমেন্ট টেস্ট দিন',
          body: 'আপনার CEFR স্তর না জানলে ১৫-প্রশ্নের প্লেসমেন্ট টেস্ট দিন। আপনার স্তর নির্ধারণ করে কোন শব্দভাণ্ডার স্তর এবং স্পিকিং কৌশল অগ্রাধিকার দিতে হবে।',
          link: '/placement-test',
          linkLabel: 'প্লেসমেন্ট টেস্ট দিন →',
        },
        {
          n: '২',
          title: 'প্রতিদিন শব্দভাণ্ডার তৈরি করুন — একটি স্তর করে',
          body: 'A2–B1 স্তরে থাকলে স্তর ১ থেকে শুরু করুন। স্তর ১ শব্দ না ভেবে ব্যবহার করতে পারলে স্তর ২ তে যান। তালিকা নয়, ফ্ল্যাশকার্ড ব্যবহার করুন।',
          link: '/learn/vocabulary',
          linkLabel: 'শব্দভাণ্ডার দেখুন →',
        },
        {
          n: '৩',
          title: 'প্রতিদিন জোরে স্পিকিং টপিক অনুশীলন করুন',
          body: 'প্রতিটি পার্ট ১ টপিকের জন্য নিজেকে সব ৫টি প্রশ্নের উত্তর দিয়ে রেকর্ড করুন। আবার শুনুন। যেখানে থেমেছিলেন সেই বিরতি খুঁজুন — এটি আগামীকালের লক্ষ্য।',
          link: '/learn/speaking-topics',
          linkLabel: 'স্পিকিং টপিক খুলুন →',
        },
        {
          n: '৪',
          title: 'কিউরেটেড বিনামূল্যে সম্পদ দিয়ে পরিপূরক করুন',
          body: 'শোনার জন্য BBC পডকাস্ট, রাইটিং মডেলের জন্য IELTS Liz এবং অফিসিয়াল অনুশীলন পরীক্ষার জন্য Cambridge খুঁজতে রিসোর্স হাব ব্যবহার করুন।',
          link: '/learn/resources',
          linkLabel: 'বিনামূল্যে সম্পদ অন্বেষণ করুন →',
        },
      ],
    },
  },
};

export default function LearnHubPage() {
  const { lang } = useLanguage();
  const c = CONTENT[lang];

  return (
    <SiteShell>
      <section className="mx-auto max-w-3xl px-4 py-14">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">{c.badge}</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">{c.h1}</h1>
        <p className="mt-4 text-base text-muted-foreground md:text-lg">{c.desc}</p>
      </section>

      <Section title={lang === 'en' ? 'Four modules. All free.' : 'চারটি মডিউল। সব বিনামূল্যে।'}>
        <div className="grid gap-5 md:grid-cols-2">
          {c.modules.map((m) => {
            const Icon = m.icon;
            return (
              <Link
                key={m.href}
                href={m.href as Route}
                className="group flex flex-col rounded-xl border bg-card p-6 transition-shadow hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold leading-tight">{m.title}</p>
                    <p className="mt-0.5 text-xs text-primary">{m.subtitle}</p>
                  </div>
                </div>
                <p className="mt-4 flex-1 text-sm text-muted-foreground">{m.body}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{m.stat}</span>
                  <span className="flex items-center gap-1 text-xs font-medium text-primary group-hover:underline">
                    {m.cta} <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </Section>

      <Section title={c.howto.title}>
        <div className="space-y-4">
          {c.howto.steps.map((step) => (
            <div key={step.n} className="flex gap-4 rounded-lg border bg-card p-5">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                {step.n}
              </div>
              <div>
                <p className="font-semibold">{step.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{step.body}</p>
                <Button asChild variant="link" className="mt-2 h-auto p-0 text-sm text-primary">
                  <Link href={step.link as Route}>{step.linkLabel}</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </SiteShell>
  );
}
