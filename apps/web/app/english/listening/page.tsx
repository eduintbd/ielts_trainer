import Link from 'next/link';
import { ArrowRight, Headphones } from 'lucide-react';
import { SiteShell, Section, Tile } from '@/components/site-shell';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Master English Listening · IELTS Trainer',
  description:
    'Train your ear for English across accents. The four-week listening ladder built for Bangla speakers.',
};

export default function ListeningPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-3xl px-4 py-14">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">English Mastery / Listening</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
          Understand English at native speed.
        </h1>
        <p className="mt-4 text-base text-muted-foreground md:text-lg">
          The IELTS listening test plays once. TOEFL plays once. PTE plays once. If you have only listened to slow
          classroom English, the real exam will feel like a different language. The fix is exposure, not tricks.
        </p>
        <div className="mt-6 flex gap-3">
          <Button asChild>
            <Link href="/voice">
              <Headphones className="mr-2 h-4 w-4" /> Listening drill
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/sign-up">Start free</Link>
          </Button>
        </div>
      </section>

      <Section
        title="Why native speech sounds 'too fast'"
        subtitle="It isn't. Three things are happening that schoolroom English does not prepare you for."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <Tile title="Connected speech">
            "Wanna go" instead of "want to go." "Whatcha doing" instead of "what are you doing." Words bleed into each
            other. You must learn the patterns, not just the individual words.
          </Tile>
          <Tile title="Stress-timing">
            English compresses unstressed syllables into a fast mumble (the schwa). Important words land hard, filler
            slides past. Your brain has to filter signal from noise.
          </Tile>
          <Tile title="Vocabulary in disguise">
            "Anyway" said quickly sounds like "n-way." "Probably" becomes "prolly." If you only know words on the page,
            you will not recognise them in speech.
          </Tile>
        </div>
      </Section>

      <Section title="The four-week listening ladder">
        <ol className="space-y-4">
          <li className="rounded-lg border bg-card p-5">
            <p className="text-sm font-semibold text-primary">Week 1 · Slow + scripted</p>
            <p className="mt-2 text-sm text-muted-foreground">
              BBC Learning English "6 Minute English." Slow, scripted, with subtitles. Listen once with subtitles,
              once without. Note one new phrase per episode.
            </p>
          </li>
          <li className="rounded-lg border bg-card p-5">
            <p className="text-sm font-semibold text-primary">Week 2 · Normal + scripted</p>
            <p className="mt-2 text-sm text-muted-foreground">
              TED-Ed and TED talks. Native speed, but scripted, with reliable subtitles. The accents stretch beyond
              British — American, Indian, African. Two talks per day.
            </p>
          </li>
          <li className="rounded-lg border bg-card p-5">
            <p className="text-sm font-semibold text-primary">Week 3 · Normal + unscripted</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Podcasts: The Daily (NYT), BBC Global News, ABC News in Depth (Australian). Real conversation, real
              hesitations, real accents. Don't read transcripts during — read them after.
            </p>
          </li>
          <li className="rounded-lg border bg-card p-5">
            <p className="text-sm font-semibold text-primary">Week 4 · Fast + multi-speaker</p>
            <p className="mt-2 text-sm text-muted-foreground">
              YouTube interviews, mock IELTS Section 3 (multi-speaker academic discussion), TOEFL lecture practice
              sets. Now you are at exam intensity.
            </p>
          </li>
        </ol>
      </Section>

      <Section title="The five accents every Bangladeshi candidate should train on">
        <div className="grid gap-3 md:grid-cols-2">
          <Tile title="British (RP / Estuary)">
            IELTS heavy. Listen to BBC News, The Guardian podcast.
          </Tile>
          <Tile title="American (General)">
            TOEFL standard. Listen to NPR, The Daily, Planet Money.
          </Tile>
          <Tile title="Australian">
            Common in IELTS Listening Sections 2 and 4. Listen to ABC News and Hamish & Andy.
          </Tile>
          <Tile title="Canadian">
            Appears in PTE. Sounds like American with subtle vowel shifts ("about" → "aboot"). CBC podcasts are the
            classroom.
          </Tile>
          <Tile title="Indian English">
            You already hear it. But academic Indian English in lecture form is its own thing — try The Print's
            podcasts to bridge the gap.
          </Tile>
          <Tile title="Bangladeshi English (yes, really)">
            Your future university tutor or office mate may sound like a Bangladeshi. Practising this builds the
            confidence to ask follow-up questions without embarrassment.
          </Tile>
        </div>
      </Section>

      <Section title="Tonight's drill">
        <div className="rounded-lg border bg-card p-6">
          <p className="text-sm font-semibold text-primary">~15 minutes</p>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm">
            <li>Pick one 5-minute BBC clip you have not heard.</li>
            <li>Listen once with subtitles off. Try to summarise it in one Bangla sentence aloud.</li>
            <li>Listen again with subtitles on. Note any words you misheard.</li>
            <li>Listen a third time at 1.25x. Notice it now feels closer to normal speed.</li>
          </ol>
          <Button asChild className="mt-5">
            <Link href="/voice">
              Open the listening drill <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Section>
    </SiteShell>
  );
}
