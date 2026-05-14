import Link from 'next/link';
import { ArrowRight, PenLine } from 'lucide-react';
import { SiteShell, Section, Tile } from '@/components/site-shell';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Master English Writing · IELTS Trainer',
  description:
    'A Bangla-speaker-friendly writing curriculum: paragraph templates, the translation trap, AI feedback, and the daily 200-word habit.',
};

export default function WritingPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-3xl px-4 py-14">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">English Mastery / Writing</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
          Write English without translating from Bangla.
        </h1>
        <p className="mt-4 text-base text-muted-foreground md:text-lg">
          The bad essays Bangladeshi students hand in are not bad because of vocabulary. They are Bangla sentence
          structures wearing English words. This module rewires the writing process itself.
        </p>
        <div className="mt-6 flex gap-3">
          <Button asChild>
            <Link href="/ai-instructor">
              <PenLine className="mr-2 h-4 w-4" /> Get essay feedback
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/sign-up">Start free</Link>
          </Button>
        </div>
      </section>

      <Section
        title="The translation trap"
        subtitle="Every Bangla speaker has done this. Recognise it, kill it."
      >
        <div className="rounded-lg border bg-card p-5">
          <p className="text-sm font-semibold">Bangla thought:</p>
          <p className="mt-1 text-sm text-muted-foreground">আমার মতে, প্রযুক্তি ছাত্রদের জন্য খুব উপকারী।</p>
          <p className="mt-4 text-sm font-semibold">Translated literally:</p>
          <p className="mt-1 text-sm text-muted-foreground">
            "In my opinion, technology students for very useful is."
          </p>
          <p className="mt-4 text-sm font-semibold">What you typed:</p>
          <p className="mt-1 text-sm text-muted-foreground">
            "In my opinion the technology for the students is very much useful."
          </p>
          <p className="mt-4 text-sm font-semibold text-primary">What a Band 7 writer types:</p>
          <p className="mt-1 text-sm">
            "Technology benefits students enormously — particularly in self-directed learning."
          </p>
          <p className="mt-4 text-xs text-muted-foreground">
            Notice: the Band 7 sentence is shorter, leads with the subject, uses a strong verb (benefits) instead of
            "is useful," and lands one specific idea instead of a generic claim.
          </p>
        </div>
      </Section>

      <Section title="The five paragraph templates you actually need">
        <div className="grid gap-4 md:grid-cols-2">
          <Tile title="Opinion paragraph (PEEL)">
            Point. Explain. Example. Link. Used for Task 2 essays, TOEFL independent writing, PTE essay.
          </Tile>
          <Tile title="Compare-and-contrast">
            Two subjects, three points of comparison, one verdict. Used for trend graphs, lifestyle topics, education.
          </Tile>
          <Tile title="Problem-solution">
            One paragraph for the problem (with cause), one for solution (with mechanism). Half the IELTS Task 2
            prompts.
          </Tile>
          <Tile title="Cause-and-effect">
            Two clear causes, two clear effects. Don't mix them in one sentence. Use connectors:{' '}
            <em>consequently, as a result, this drives.</em>
          </Tile>
          <Tile title="Description (graph / process)">
            Overview sentence → key trend → second trend → small detail. IELTS Task 1 lives or dies on this template.
          </Tile>
          <Tile title="Narrative (one paragraph)">
            Setup → turn → outcome → reflection. Rare in exams but priceless for emails, cover letters, and TOEFL
            integrated tasks.
          </Tile>
        </div>
      </Section>

      <Section title="The grammar leaks that quietly kill your band">
        <ol className="space-y-3 text-sm">
          <li className="rounded-lg border bg-card p-4">
            <span className="font-semibold">Articles (a / an / the).</span> Bangla has no articles. English uses them
            constantly. Rule of thumb: "the" for one specific thing both writer and reader know; "a / an" for one of
            many; nothing for plurals in general.
          </li>
          <li className="rounded-lg border bg-card p-4">
            <span className="font-semibold">Tense agreement.</span> "Yesterday I go to market and buying fish." You
            switched tenses three times in one clause. Pick a tense per paragraph and stick to it.
          </li>
          <li className="rounded-lg border bg-card p-4">
            <span className="font-semibold">Pluralisation.</span> "Many student" instead of "many students." Bangla
            plurals do not require -s. English does.
          </li>
          <li className="rounded-lg border bg-card p-4">
            <span className="font-semibold">Prepositions.</span> "Discuss about," "married with," "different than." All
            wrong. Learn collocations as fixed units; do not translate.
          </li>
          <li className="rounded-lg border bg-card p-4">
            <span className="font-semibold">Run-on sentences.</span> Bangla allows long flowing clauses joined by
            commas. English requires a full stop or a semicolon. When in doubt, end the sentence.
          </li>
        </ol>
      </Section>

      <Section title="The 200-word daily habit">
        <p className="text-sm text-muted-foreground">
          One opinion paragraph per day, on any topic, submitted to the AI tutor for feedback. After 30 days you will
          have written 6,000 words — more than your entire previous year of school English.
        </p>
        <div className="mt-4 rounded-lg border bg-card p-5">
          <p className="text-sm font-semibold">Today's prompt</p>
          <p className="mt-1 text-sm">
            "Some people think social media has weakened real friendships in Bangladesh. Do you agree?"
          </p>
          <ol className="mt-3 list-decimal space-y-1 pl-5 text-xs text-muted-foreground">
            <li>Use the PEEL template.</li>
            <li>Aim for 200–230 words.</li>
            <li>Submit to the AI tutor. Read the feedback once. Don't argue with it.</li>
            <li>Tomorrow, rewrite the weakest sentence the AI flagged.</li>
          </ol>
          <Button asChild className="mt-4">
            <Link href="/ai-instructor">
              Submit to the AI tutor <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Section>
    </SiteShell>
  );
}
