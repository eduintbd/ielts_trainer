'use client';

import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { LanguageToggle } from '@/components/language-toggle';
import { useLanguage } from '@/components/providers/language-provider';
import { useAuth } from '@/components/providers/auth-provider';

export function SiteShell({ children }: { children: React.ReactNode }) {
  const { t } = useLanguage();
  const { user, signOut } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const isLearnPage = pathname.startsWith('/learn');
  const year = new Date().getFullYear().toString();

  async function handleSignOut() {
    await signOut();
    router.push('/');
    router.refresh();
  }

  return (
    <main className="min-h-screen">
      <header className="border-b">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <Link href="/" className="text-xl font-bold text-primary">
            {t('nav.logo')}
          </Link>
          <nav className="hidden items-center gap-1 md:flex">
            <Button asChild variant="ghost" size="sm">
              <Link href="/english">{t('nav.english')}</Link>
            </Button>
            <Button asChild variant="ghost" size="sm">
              <Link href="/ielts">{t('nav.ielts')}</Link>
            </Button>
            <Button asChild variant="ghost" size="sm">
              <Link href="/toefl">{t('nav.toefl')}</Link>
            </Button>
            <Button asChild variant="ghost" size="sm">
              <Link href="/pte">{t('nav.pte')}</Link>
            </Button>
            <Button asChild variant="ghost" size="sm">
              <Link href="/courses">{t('nav.courses')}</Link>
            </Button>
            <Button asChild variant="ghost" size="sm">
              <Link href="/learn">{t('nav.learn')}</Link>
            </Button>
          </nav>
          <div className="flex items-center gap-2">
            <LanguageToggle />
            {!isLearnPage && (
              user ? (
                <>
                  <Button asChild variant="ghost" size="sm">
                    <Link href="/dashboard">{t('nav.dashboard')}</Link>
                  </Button>
                  <Button variant="outline" size="sm" onClick={handleSignOut}>
                    {t('nav.signout')}
                  </Button>
                </>
              ) : (
                <>
                  <Button asChild variant="ghost" size="sm">
                    <Link href="/sign-in">{t('nav.signin')}</Link>
                  </Button>
                  <Button asChild size="sm">
                    <Link href="/sign-up">{t('nav.getstarted')}</Link>
                  </Button>
                </>
              )
            )}
          </div>
        </div>
      </header>

      {children}

      <footer className="mt-16 border-t">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-4">
          <div>
            <p className="text-base font-semibold text-primary">{t('nav.logo')}</p>
            <p className="mt-2 text-xs text-muted-foreground">{t('footer.tagline')}</p>
          </div>
          <div>
            <p className="text-sm font-semibold">{t('footer.masterenglish')}</p>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              <li><Link href="/english/speaking" className="hover:text-foreground">{t('footer.speaking')}</Link></li>
              <li><Link href="/english/writing" className="hover:text-foreground">{t('footer.writing')}</Link></li>
              <li><Link href="/english/listening" className="hover:text-foreground">{t('footer.listening')}</Link></li>
              <li><Link href="/english/reading" className="hover:text-foreground">{t('footer.reading')}</Link></li>
              <li><Link href="/english/grammar" className="hover:text-foreground">{t('footer.grammar')}</Link></li>
              <li><Link href="/english/pronunciation" className="hover:text-foreground">{t('footer.pronunciation')}</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold">{t('footer.exams')}</p>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              <li><Link href="/ielts" className="hover:text-foreground">{t('nav.ielts')}</Link></li>
              <li><Link href="/toefl" className="hover:text-foreground">{t('nav.toefl')}</Link></li>
              <li><Link href="/pte" className="hover:text-foreground">{t('nav.pte')}</Link></li>
              <li><Link href="/courses" className="hover:text-foreground">{t('footer.courses')}</Link></li>
              <li><Link href="/learn" className="hover:text-foreground">{t('nav.learn')}</Link></li>
              <li><Link href="/learn/vocabulary" className="hover:text-foreground">{t('footer.vocabulary')}</Link></li>
              <li><Link href="/learn/speaking-topics" className="hover:text-foreground">{t('footer.speakingtopics')}</Link></li>
              <li><Link href="/learn/resources" className="hover:text-foreground">{t('footer.freeresources')}</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold">{t('footer.about')}</p>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-foreground">{t('footer.aboutus')}</Link></li>
              <li><Link href="/contact" className="hover:text-foreground">{t('footer.contact')}</Link></li>
              <li><Link href="/privacy" className="hover:text-foreground">{t('footer.privacy')}</Link></li>
              <li><Link href="/terms" className="hover:text-foreground">{t('footer.terms')}</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t">
          <p className="mx-auto max-w-6xl px-4 py-4 text-xs text-muted-foreground">
            {t('footer.copyright', { year })}
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
