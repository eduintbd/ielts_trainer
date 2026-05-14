import Link from 'next/link';
import { ArrowRight, BookOpen } from 'lucide-react';
import { SiteShell, Section, Tile } from '@/components/site-shell';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Master English Reading · IELTS Trainer',
  description:
    'Skim, scan, and understand academic English at exam speed. The four-pass method for Bangladeshi students.',
};

export default function ReadingPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-3xl px-4 py-14">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">English Mastery / Reading</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
          Read for meaning, not for every word.
        </h1>
        <p className="mt-4 text-base text-muted-foreground md:text-lg">
          Bangladeshi students are usually the strongest at reading — but in the wrong way. School trains you to
          translate every sentence. The exam asks you to find specific information in 700 words in 9 minutes. Different
          skill. Different muscle.
        </p>
        <div className="mt-6 flex gap-3">
          <Button asChild>
            <Link href="/tests">
              <BookOpen className="mr-2 h-4 w-4" /> Reading practice tests
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/sign-up">Start free</Link>
          </Button>
        </div>
      </section>

      <Section title="The four-pass method" subtitle="The single technique that unlocks Band 8 reading.">
        <ol className="space-y-4">
          <li className="rounded-lg border bg-card p-5">
            <p className="text-sm font-semibold text-primary">Pass 1 · 60-second skim</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Read only the title, first sentence of each paragraph, and the last sentence. Ignore everything else. You
              are building a mental map of the passage, not understanding it.
            </p>
          </li>
          <li className="rounded-lg border bg-card p-5">
            <p className="text-sm font-semibold text-primary">Pass 2 · Read the questions</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Now read all the questions. Underline keywords — names, numbers, dates, capitalised terms. These are
              your scan targets.
            </p>
          </li>
          <li className="rounded-lg border bg-card p-5">
            <p className="text-sm font-semibold text-primary">Pass 3 · Scan for answers</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Go question by question. Use your mental map to jump to the right paragraph. Read only the 2-3 sentences
              around your scan target. Answer. Move on.
            </p>
          </li>
          <li className="rounded-lg border bg-card p-5">
            <p className="text-sm font-semibold text-primary">Pass 4 · Verify uncertain answers</p>
            <p className="mt-2 text-sm text-muted-foreground">
              The questions you weren't sure about — these are usually paraphrased. Look for synonyms, not exact
              wording. "Inexpensive" in the question = "low-cost" in the passage.
            </p>
          </li>
        </ol>
      </Section>

      <Section title="The five question types and how to crack them">
        <div className="grid gap-4 md:grid-cols-2">
          <Tile title="True / False / Not Given">
            The trap is "Not Given." If the passage doesn't say it — even if it sounds plausible — the answer is NG,
            not False.
          </Tile>
          <Tile title="Matching headings">
            Look at the first AND last sentence of each paragraph. The heading is usually a paraphrase of one of these.
            Eliminate before guessing.
          </Tile>
          <Tile title="Sentence completion">
            Match keywords first, then look at grammar. The word you insert must fit grammatically with what's around
            the blank.
          </Tile>
          <Tile title="Multiple choice">
            The wrong answers are often half-true. Eliminate before choosing. Two options will sound similar — one of
            them is the distractor.
          </Tile>
          <Tile title="Summary completion">
            The summary is in a different order than the passage. Don't expect linearity. Map the keywords first.
          </Tile>
          <Tile title="Diagram / flow-chart labels">
            Read the passage in chronological order around the process described. Bangla speakers often skip — don't.
            Process descriptions are linear by design.
          </Tile>
        </div>
      </Section>

      <Section title="The two-newspaper rule">
        <div className="rounded-lg border bg-card p-5">
          <p className="text-sm">
            Read <span className="font-semibold">two articles per day</span> from the international press. One from a
            British paper (The Guardian, BBC, The Economist) and one from an American (The Atlantic, NYT, Washington
            Post). Why two? Different vocabulary, different sentence rhythm, different idioms.
          </p>
          <p className="mt-3 text-sm">
            Spend 5 minutes reading, 2 minutes summarising aloud in English. Do this for a month and the IELTS reading
            test becomes routine.
          </p>
        </div>
      </Section>

      <Section title="Speed targets you should hit before the exam">
        <ul className="space-y-2 text-sm">
          <li className="rounded-lg border bg-card p-4">
            <span className="font-semibold">IELTS Academic Reading:</span> 60 minutes, 3 passages, 40 questions. Aim
            for 18 minutes per passage with 6 minutes left to verify.
          </li>
          <li className="rounded-lg border bg-card p-4">
            <span className="font-semibold">TOEFL Reading:</span> 35 minutes, 2 passages, 20 questions. ~17 minutes
            per passage including all questions.
          </li>
          <li className="rounded-lg border bg-card p-4">
            <span className="font-semibold">PTE Reading:</span> Mixed item types, ~30 minutes total. Each item takes
            90 seconds to 3 minutes. Speed comes from practising the item types, not from reading faster.
          </li>
        </ul>
        <Button asChild className="mt-5">
          <Link href="/tests">
            Take a timed reading test <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </Section>
    </SiteShell>
  );
}
