import { redirect } from 'next/navigation';
import Link from 'next/link';
import {
  Home,
  BookOpen,
  Mic,
  MessagesSquare,
  GraduationCap,
  Trophy,
  Sparkles,
  User,
  Languages,
  Compass,
} from 'lucide-react';
import { getSessionUser } from '@/lib/session';

const NAV_PRIMARY = [
  { href: '/dashboard', label: 'Dashboard', icon: Home },
  { href: '/tests', label: 'Mock tests', icon: BookOpen },
  { href: '/lessons', label: 'Lessons', icon: GraduationCap },
  { href: '/vocab', label: 'Vocab', icon: Sparkles },
  { href: '/voice', label: 'Voice coach', icon: Mic },
  { href: '/ai-instructor', label: 'AI Instructor', icon: Sparkles },
] as const;

const NAV_MASTERY = [
  { href: '/english', label: 'English Mastery', icon: Languages },
  { href: '/ielts', label: 'IELTS guide', icon: Compass },
  { href: '/toefl', label: 'TOEFL guide', icon: Compass },
  { href: '/pte', label: 'PTE guide', icon: Compass },
] as const;

const NAV_SOCIAL = [
  { href: '/forum', label: 'Forum', icon: MessagesSquare },
  { href: '/leaderboard', label: 'Leaderboard', icon: Trophy },
  { href: '/profile', label: 'Profile', icon: User },
] as const;

export default async function StudentLayout({ children }: { children: React.ReactNode }) {
  const user = await getSessionUser();
  if (!user) redirect('/sign-in');

  return (
    <div className="flex min-h-screen">
      <aside className="hidden w-60 shrink-0 border-r bg-card lg:flex lg:flex-col">
        <div className="border-b p-4">
          <Link href="/dashboard" className="text-xl font-bold text-primary">
            IELTS Trainer
          </Link>
        </div>
        <nav className="flex-1 space-y-4 overflow-y-auto p-2">
          <div className="space-y-1">
            {NAV_PRIMARY.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
              >
                <Icon className="h-4 w-4" />
                {label}
              </Link>
            ))}
          </div>
          <div>
            <p className="px-3 pb-1 pt-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
              Learn
            </p>
            <div className="space-y-1">
              {NAV_MASTERY.map(({ href, label, icon: Icon }) => (
                <Link
                  key={href}
                  href={href}
                  className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="px-3 pb-1 pt-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
              Community
            </p>
            <div className="space-y-1">
              {NAV_SOCIAL.map(({ href, label, icon: Icon }) => (
                <Link
                  key={href}
                  href={href}
                  className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </nav>
        <div className="border-t p-4 text-xs text-muted-foreground">
          Signed in as <span className="font-medium text-foreground">{user.name}</span>
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto bg-muted/20">{children}</main>
    </div>
  );
}
