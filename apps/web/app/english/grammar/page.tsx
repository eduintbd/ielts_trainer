import Link from 'next/link';
import { ArrowRight, Type } from 'lucide-react';
import { SiteShell, Section, Tile } from '@/components/site-shell';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'English Grammar for Bangla Speakers · IELTS Trainer',
  description:
    'The 12 grammar mistakes that quietly cost Bangladeshi students half a band — and how to fix each one for good.',
};

export default function GrammarPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-3xl px-4 py-14">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">English Mastery / Grammar</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
          The grammar that costs Bangla speakers half a band.
        </h1>
        <p className="mt-4 text-base text-muted-foreground md:text-lg">
          You do not need to learn "more grammar." You need to fix the same 12 patterns Bangla speakers get wrong in
          every essay. Once these are repaired, your writing jumps a full band — without any new vocabulary.
        </p>
        <div className="mt-6 flex gap-3">
          <Button asChild>
            <Link href="/ai-instructor">
              <Type className="mr-2 h-4 w-4" /> Ask the AI tutor
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/sign-up">Start free</Link>
          </Button>
        </div>
      </section>

      <Section title="The 12 leaks" subtitle="Each example pairs a typical Bangla-speaker error with the fix.">
        <div className="space-y-3 text-sm">
          {LEAKS.map((leak) => (
            <div key={leak.title} className="rounded-lg border bg-card p-4">
              <p className="font-semibold">{leak.title}</p>
              <p className="mt-2 text-muted-foreground"><span className="font-medium text-red-600">✗</span> {leak.wrong}</p>
              <p className="text-muted-foreground"><span className="font-medium text-green-600">✓</span> {leak.right}</p>
              <p className="mt-2 text-xs text-muted-foreground">{leak.fix}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="How to drill grammar without dying of boredom">
        <div className="grid gap-4 md:grid-cols-2">
          <Tile title="Edit, don't memorise">
            Write a 100-word paragraph, then hunt for one specific leak (say, articles). Fix every instance. Tomorrow,
            hunt a different leak. After 12 days you have done one focused pass on every common mistake.
          </Tile>
          <Tile title="Read aloud what you write">
            Most grammar mistakes are obvious to your ear — but not to your eye. Read each sentence out loud. If it
            sounds wrong, it probably is.
          </Tile>
          <Tile title="One rule per week">
            Don't try to fix everything at once. Pick one leak per week. By the time you finish, the first ones have
            become automatic.
          </Tile>
          <Tile title="Use the AI tutor as a sparring partner">
            Paste a paragraph. Ask "find the article errors only." Don't ask for everything at once — focused feedback
            sticks; firehose feedback evaporates.
          </Tile>
        </div>
      </Section>

      <Section title="Quick reference: tenses Bangla speakers confuse">
        <div className="rounded-lg border bg-card p-5 text-sm">
          <p>
            <span className="font-semibold">Present perfect vs simple past.</span> "I have visited Cox's Bazar last
            year" is wrong — use simple past with a specific past time. "I have visited Cox's Bazar" (no time) is
            right.
          </p>
          <p className="mt-3">
            <span className="font-semibold">Past continuous vs past simple.</span> "I was eating when the phone rang."
            Two actions, one in progress, one interrupted. Don't say "I ate when the phone was ringing."
          </p>
          <p className="mt-3">
            <span className="font-semibold">Will vs going to.</span> "I will study tonight" is a decision made now. "I
            am going to study tonight" is a pre-existing plan. Examiners notice.
          </p>
          <p className="mt-3">
            <span className="font-semibold">Conditionals.</span> "If I would have time, I will come" is wrong. "If I
            have time, I will come" (likely future). "If I had time, I would come" (unlikely now).
          </p>
        </div>
        <Button asChild className="mt-5">
          <Link href="/ai-instructor">
            Drill with the AI tutor <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </Section>
    </SiteShell>
  );
}

const LEAKS = [
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
];
