import { SiteShell, Section } from '@/components/site-shell';

export const metadata = {
  title: 'Privacy · IELTS Trainer',
  description: 'How IELTS Trainer collects, uses, and protects student data.',
};

export default function PrivacyPage() {
  return (
    <SiteShell>
      <Section
        title="Privacy"
        subtitle="Plain English first, lawyer English second. If anything below is unclear, email us and we'll fix the wording."
      >
        <div className="space-y-6 text-sm md:text-base">
          <div>
            <h3 className="font-semibold">What we collect</h3>
            <p className="mt-1 text-muted-foreground">
              Your name, email, and (if you sign in with Google or Facebook) a profile photo. Your test answers, voice
              recordings, vocabulary progress, and forum posts. We do not collect your phone, NID, address, or any
              payment data we don't need.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Why we collect it</h3>
            <p className="mt-1 text-muted-foreground">
              To grade your tests, track progress, run the leaderboard, send you reminders, and improve the AI tutor.
              Voice recordings are used to give you pronunciation feedback and to improve the speech model — never
              shared with advertisers.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Who sees it</h3>
            <p className="mt-1 text-muted-foreground">
              You, the IELTS Trainer engineering team (only when investigating support issues), and our AI providers
              (OpenAI, Anthropic, ElevenLabs) strictly under their data-processing agreements. Anything you post in the
              public forum is, well, public.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">How to delete your data</h3>
            <p className="mt-1 text-muted-foreground">
              Profile → Delete account. Everything except aggregate analytics is removed within 30 days. You can also
              email <span className="font-medium text-foreground">privacy@ielts-trainer.bd</span>.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Cookies</h3>
            <p className="mt-1 text-muted-foreground">
              One auth cookie so you stay signed in. No third-party advertising cookies.
            </p>
          </div>
        </div>
      </Section>
    </SiteShell>
  );
}
