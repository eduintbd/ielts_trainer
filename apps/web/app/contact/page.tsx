'use client';

import { SiteShell, Section, Tile } from '@/components/site-shell';
import { useLanguage } from '@/components/providers/language-provider';

const CONTENT = {
  en: {
    hero: {
      title: 'Talk to us',
      subtitle:
        "We answer email within one working day, Bangladesh time. If you are a student, tell us your weakest skill — we'll point you at the right module.",
    },
    t1: 'Student support',
    t1p: 'Stuck on a test, can\'t open the voice coach, account issues:',
    t2: 'Schools & coaching centres',
    t2p: 'Group licences, classroom dashboards, or bringing the trainer into your batch:',
    t3: 'Press & general',
    t3p: 'Interviews, writing about the platform, or saying hi:',
    hours: {
      title: 'Office hours',
      body: 'We hold open student office hours on Telegram and the in-app forum, Saturday to Thursday, 7 pm – 9 pm Dhaka time. Drop your question and a real instructor (or one of our top-band community mentors) will reply.',
    },
  },
  bn: {
    hero: {
      title: 'আমাদের সাথে কথা বলুন',
      subtitle:
        'আমরা বাংলাদেশ সময়ে এক কার্যদিবসের মধ্যে ইমেইলের উত্তর দিই। শিক্ষার্থী হলে আপনার দুর্বলতম দক্ষতা জানান — আমরা সঠিক মডিউলে নির্দেশ করব।',
    },
    t1: 'শিক্ষার্থী সহায়তা',
    t1p: 'টেস্টে আটকে গেছেন, ভয়েস কোচ খুলছে না, অ্যাকাউন্ট সমস্যা:',
    t2: 'স্কুল ও কোচিং সেন্টার',
    t2p: 'গ্রুপ লাইসেন্স, ক্লাসরুম ড্যাশবোর্ড বা ব্যাচে ট্রেইনার নিয়ে আসার জন্য:',
    t3: 'প্রেস ও সাধারণ',
    t3p: 'সাক্ষাৎকার, প্ল্যাটফর্ম নিয়ে লেখালেখি বা শুধু কথা বলতে:',
    hours: {
      title: 'অফিস আওয়ার',
      body: 'আমরা Telegram এবং ইন-অ্যাপ ফোরামে শনিবার থেকে বৃহস্পতিবার রাত ৭ টা – 9 টা ঢাকা সময়ে খোলা শিক্ষার্থী অফিস আওয়ার পরিচালনা করি। প্রশ্ন রাখুন এবং একজন বাস্তব প্রশিক্ষক (বা আমাদের শীর্ষ-ব্যান্ড কমিউনিটি মেন্টর) উত্তর দেবেন।',
    },
  },
};

export default function ContactPage() {
  const { lang } = useLanguage();
  const c = CONTENT[lang];

  return (
    <SiteShell>
      <Section title={c.hero.title} subtitle={c.hero.subtitle}>
        <div className="grid gap-4 md:grid-cols-3">
          <Tile title={c.t1}>
            <p>{c.t1p}</p>
            <p className="mt-2 font-medium text-foreground">support@ielts-trainer.bd</p>
          </Tile>
          <Tile title={c.t2}>
            <p>{c.t2p}</p>
            <p className="mt-2 font-medium text-foreground">partners@ielts-trainer.bd</p>
          </Tile>
          <Tile title={c.t3}>
            <p>{c.t3p}</p>
            <p className="mt-2 font-medium text-foreground">hello@ielts-trainer.bd</p>
          </Tile>
        </div>
      </Section>

      <Section title={c.hours.title}>
        <p className="text-sm text-muted-foreground">{c.hours.body}</p>
      </Section>
    </SiteShell>
  );
}
