import { redirect } from 'next/navigation';
import Link from 'next/link';
import { getSessionUser } from '@/lib/session';
import { isAdmin } from '@ielts/auth';

const ADMIN_NAV = [
  { href: '/admin', label: 'Overview' },
  { href: '/admin/users', label: 'Users' },
  { href: '/admin/papers', label: 'Test papers' },
  { href: '/admin/lessons', label: 'Lessons' },
  { href: '/admin/vocab', label: 'Vocabulary' },
  { href: '/admin/forum', label: 'Moderation queue' },
  { href: '/admin/analytics', label: 'Analytics' },
  { href: '/admin/health', label: 'System health' },
];

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const user = await getSessionUser();
  if (!user) redirect('/sign-in?redirectTo=/admin');
  if (!isAdmin(user)) redirect('/dashboard');

  return (
    <div className="flex min-h-screen">
      <aside className="w-60 shrink-0 border-r bg-card">
        <div className="border-b p-4">
          <Link href="/admin" className="text-lg font-bold text-primary">
            Admin · IELTS Trainer
          </Link>
        </div>
        <nav className="space-y-1 p-2">
          {ADMIN_NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>
      <main className="flex-1 overflow-y-auto bg-muted/20">{children}</main>
    </div>
  );
}
