import { SiteShell, Section, Tile } from '@/components/site-shell';

export const metadata = {
  title: 'Contact · IELTS Trainer',
  description: 'Reach the IELTS Trainer team for support, partnerships, or feedback from Bangladeshi students.',
};

export default function ContactPage() {
  return (
    <SiteShell>
      <Section
        title="Talk to us"
        subtitle="We answer email within one working day, Bangladesh time. If you are a student, tell us your weakest skill — we'll point you at the right module."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <Tile title="Student support">
            <p>Stuck on a test, can't open the voice coach, account issues:</p>
            <p className="mt-2 font-medium text-foreground">support@ielts-trainer.bd</p>
          </Tile>
          <Tile title="Schools & coaching centres">
            <p>Group licences, classroom dashboards, or bringing the trainer into your batch:</p>
            <p className="mt-2 font-medium text-foreground">partners@ielts-trainer.bd</p>
          </Tile>
          <Tile title="Press & general">
            <p>Interviews, writing about the platform, or saying hi:</p>
            <p className="mt-2 font-medium text-foreground">hello@ielts-trainer.bd</p>
          </Tile>
        </div>
      </Section>

      <Section title="Office hours">
        <p className="text-sm text-muted-foreground">
          We hold open student office hours on Telegram and the in-app forum, Saturday to Thursday, 7&nbsp;pm – 9&nbsp;pm
          Dhaka time. Drop your question and a real instructor (or one of our top-band community mentors) will reply.
        </p>
      </Section>
    </SiteShell>
  );
}
