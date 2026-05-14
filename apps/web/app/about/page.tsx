import { SiteShell, Section, Tile } from '@/components/site-shell';

export const metadata = {
  title: 'About · IELTS Trainer',
  description:
    'A Dhaka-built prep platform that helps Bangladeshi students master English first — and then walk into IELTS, TOEFL or PTE with quiet confidence.',
};

export default function AboutPage() {
  return (
    <SiteShell>
      <Section
        title="We started where you started — at zero."
        subtitle="Most prep apps assume you already think in English. We don't. IELTS Trainer was built in Dhaka for students who learned English the hard way: textbooks first, conversation last."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <Tile title="Why we exist">
            Coaching in Bangladesh is expensive, batch-based, and tuned for tricks not skill. We wanted something a
            student in Sylhet, Khulna, or rural Rajshahi could open at 11 p.m. on a phone and still get better.
          </Tile>
          <Tile title="Our promise">
            Master English first, then sit the exam. Band scores are a side effect of being good at the language — not
            the other way around. We will not teach you tricks that fall apart at the speaking interview.
          </Tile>
          <Tile title="How we are different">
            Bangla-aware feedback. A voice coach that hears your স / শ confusion. Vocabulary that uses Dhaka context.
            Free tier that is actually usable, not a trial.
          </Tile>
        </div>
      </Section>

      <Section title="The principles we won't compromise on">
        <ul className="space-y-3 text-sm md:text-base">
          <li>
            <span className="font-semibold">Skill over score.</span> A Band 7 you cannot defend in a conversation is
            worse than a Band 6 you can.
          </li>
          <li>
            <span className="font-semibold">Speak every single day.</span> We will nag you. The voice coach exists
            because reading silently is what got you stuck.
          </li>
          <li>
            <span className="font-semibold">Bangla is a feature, not a crutch.</span> Translation drills are part of
            the curriculum, not something we hide.
          </li>
          <li>
            <span className="font-semibold">Free tier stays generous.</span> If you genuinely can't pay, the core
            features will still get you to a Band 7.
          </li>
        </ul>
      </Section>
    </SiteShell>
  );
}
