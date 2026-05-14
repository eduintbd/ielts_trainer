import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen">
      <header className="border-b">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <Link href="/" className="text-xl font-bold text-primary">
            IELTS Trainer
          </Link>
          <nav className="hidden items-center gap-1 md:flex">
            <Button asChild variant="ghost" size="sm">
              <Link href="/english">English Mastery</Link>
            </Button>
            <Button asChild variant="ghost" size="sm">
              <Link href="/ielts">IELTS</Link>
            </Button>
            <Button asChild variant="ghost" size="sm">
              <Link href="/toefl">TOEFL</Link>
            </Button>
            <Button asChild variant="ghost" size="sm">
              <Link href="/pte">PTE</Link>
            </Button>
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild variant="ghost" size="sm">
              <Link href="/sign-in">Sign in</Link>
            </Button>
            <Button asChild size="sm">
              <Link href="/sign-up">Get started</Link>
            </Button>
          </div>
        </div>
      </header>

      {children}

      <footer className="mt-16 border-t">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-4">
          <div>
            <p className="text-base font-semibold text-primary">IELTS Trainer</p>
            <p className="mt-2 text-xs text-muted-foreground">
              Built in Dhaka for the next generation of Bangladeshi students aiming abroad.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold">Master English</p>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              <li><Link href="/english/speaking" className="hover:text-foreground">Speaking</Link></li>
              <li><Link href="/english/writing" className="hover:text-foreground">Writing</Link></li>
              <li><Link href="/english/listening" className="hover:text-foreground">Listening</Link></li>
              <li><Link href="/english/reading" className="hover:text-foreground">Reading</Link></li>
              <li><Link href="/english/grammar" className="hover:text-foreground">Grammar</Link></li>
              <li><Link href="/english/pronunciation" className="hover:text-foreground">Pronunciation</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold">Exams</p>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              <li><Link href="/ielts" className="hover:text-foreground">IELTS</Link></li>
              <li><Link href="/toefl" className="hover:text-foreground">TOEFL</Link></li>
              <li><Link href="/pte" className="hover:text-foreground">PTE</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold">About</p>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-foreground">About us</Link></li>
              <li><Link href="/contact" className="hover:text-foreground">Contact</Link></li>
              <li><Link href="/privacy" className="hover:text-foreground">Privacy</Link></li>
              <li><Link href="/terms" className="hover:text-foreground">Terms</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t">
          <p className="mx-auto max-w-6xl px-4 py-4 text-xs text-muted-foreground">
            © {new Date().getFullYear()} IELTS Trainer · Made with care for Bangladeshi learners.
          </p>
        </div>
      </footer>
    </main>
  );
}

export function Section({
  title,
  subtitle,
  children,
  id,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-6 max-w-3xl">
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">{title}</h2>
        {subtitle ? <p className="mt-2 text-sm text-muted-foreground md:text-base">{subtitle}</p> : null}
      </div>
      {children}
    </section>
  );
}

export function Tile({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-lg border bg-card p-5">
      <h3 className="text-sm font-semibold">{title}</h3>
      <div className="mt-2 text-sm text-muted-foreground">{children}</div>
    </div>
  );
}
