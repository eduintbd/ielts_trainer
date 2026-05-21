'use client';

import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { SiteShell, Section } from '@/components/site-shell';
import { useLanguage } from '@/components/providers/language-provider';
import { RESOURCES, SKILL_TABS, SKILL_ICONS, type ResourceSkill } from '@/lib/learn/resources';

const CONTENT = {
  en: {
    badge: 'Free Learning Hub / Resources',
    h1: 'The best free English and IELTS resources on the internet.',
    desc: 'Curated from two of the most comprehensive open-source repositories: awesome-english and awesome-IELTS. Every link is free, tested, and organised by skill and level.',
    levelBadges: {
      all: 'All levels',
      beginner: 'Beginner',
      intermediate: 'Intermediate',
      advanced: 'Advanced',
    },
    visitLabel: 'Visit resource',
    highlightLabel: 'Why use it',
  },
  bn: {
    badge: 'বিনামূল্যে লার্নিং হাব / সম্পদ',
    h1: 'ইন্টারনেটে সেরা বিনামূল্যে ইংরেজি এবং IELTS সম্পদ।',
    desc: 'দুটি সবচেয়ে ব্যাপক ওপেন-সোর্স রিপোজিটরি থেকে কিউরেটেড: awesome-english এবং awesome-IELTS। প্রতিটি লিঙ্ক বিনামূল্যে, পরীক্ষিত এবং দক্ষতা ও স্তর অনুযায়ী সংগঠিত।',
    levelBadges: {
      all: 'সব স্তর',
      beginner: 'প্রাথমিক',
      intermediate: 'মধ্যবর্তী',
      advanced: 'উন্নত',
    },
    visitLabel: 'সম্পদ পরিদর্শন করুন',
    highlightLabel: 'কেন ব্যবহার করবেন',
  },
};

const LEVEL_BADGE: Record<string, string> = {
  all: 'bg-gray-100 text-gray-700',
  beginner: 'bg-green-100 text-green-700',
  intermediate: 'bg-blue-100 text-blue-700',
  advanced: 'bg-purple-100 text-purple-700',
};

export default function ResourcesPage() {
  const { lang } = useLanguage();
  const c = CONTENT[lang];
  const [activeSkill, setActiveSkill] = useState<ResourceSkill | 'all'>('all');

  const filtered = activeSkill === 'all'
    ? RESOURCES
    : RESOURCES.filter(r => r.skill === activeSkill);

  return (
    <SiteShell>
      <section className="mx-auto max-w-3xl px-4 py-14">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">{c.badge}</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">{c.h1}</h1>
        <p className="mt-4 text-base text-muted-foreground md:text-lg">{c.desc}</p>
      </section>

      <Section title="">
        {/* Skill filter tabs */}
        <div className="mb-6 flex flex-wrap gap-2">
          {SKILL_TABS.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveSkill(tab.value)}
              className={`flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                activeSkill === tab.value
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'bg-background text-muted-foreground hover:border-primary hover:text-foreground'
              }`}
            >
              {tab.value !== 'all' && (
                <span>{SKILL_ICONS[tab.value as ResourceSkill]}</span>
              )}
              {lang === 'en' ? tab.label : tab.labelBn}
              <span className="text-xs opacity-70">({tab.count})</span>
            </button>
          ))}
        </div>

        {/* Resource grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((resource) => (
            <a
              key={resource.id}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-xl border bg-card p-5 transition-shadow hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-lg">{SKILL_ICONS[resource.skill]}</span>
                  <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${LEVEL_BADGE[resource.level]}`}>
                    {c.levelBadges[resource.level]}
                  </span>
                </div>
                <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
              </div>

              <p className="mt-3 font-semibold leading-snug text-foreground group-hover:text-primary transition-colors">
                {lang === 'en' ? resource.title : resource.titleBn}
              </p>

              <p className="mt-2 flex-1 text-sm text-muted-foreground">
                {lang === 'en' ? resource.description : resource.descriptionBn}
              </p>

              {resource.highlight && (
                <div className="mt-3 border-t pt-3">
                  <p className="text-xs text-muted-foreground">
                    <span className="font-semibold text-foreground">{c.highlightLabel}: </span>
                    {lang === 'en' ? resource.highlight : resource.highlightBn}
                  </p>
                </div>
              )}
            </a>
          ))}
        </div>
      </Section>
    </SiteShell>
  );
}
