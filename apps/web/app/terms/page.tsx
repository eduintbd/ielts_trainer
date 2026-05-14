import { SiteShell, Section } from '@/components/site-shell';

export const metadata = {
  title: 'Terms · IELTS Trainer',
  description: 'Terms of use for the IELTS Trainer platform.',
};

export default function TermsPage() {
  return (
    <SiteShell>
      <Section
        title="Terms of use"
        subtitle="By using IELTS Trainer you agree to a small set of rules. Most of them are common sense — they exist to keep the community useful for everyone."
      >
        <div className="space-y-6 text-sm md:text-base">
          <div>
            <h3 className="font-semibold">1. Account</h3>
            <p className="mt-1 text-muted-foreground">
              One account per person. You are responsible for keeping your password safe. If someone else uses your
              account, the activity counts as yours.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">2. Acceptable use</h3>
            <p className="mt-1 text-muted-foreground">
              No cheating, no scraping our content, no abusing fellow students in the forum, no uploading copyrighted
              IELTS / TOEFL / PTE papers you don't own the rights to. We will warn once, then suspend.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">3. AI feedback</h3>
            <p className="mt-1 text-muted-foreground">
              Our AI tutor and scoring are decision-support, not the final say. British Council, ETS, and Pearson decide
              your actual exam score. We will not refund you if your real-exam band is lower than your practice band.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">4. Paid plans</h3>
            <p className="mt-1 text-muted-foreground">
              Cancel any time. Unused paid days are not refunded by default — email us if you have a genuine reason and
              we'll do the right thing.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">5. Changes</h3>
            <p className="mt-1 text-muted-foreground">
              We may update these terms. We'll email you if anything material changes.
            </p>
          </div>
        </div>
      </Section>
    </SiteShell>
  );
}
