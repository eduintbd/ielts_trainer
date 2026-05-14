import { redirect } from 'next/navigation';
import { getUser } from '@/lib/session';

// If the user is already signed in, bounce them to the dashboard.
// This prevents the back-button from landing on sign-in/sign-up.
export default async function AuthLayout({ children }: { children: React.ReactNode }) {
  const user = await getUser();
  if (user) redirect('/dashboard');
  return <>{children}</>;
}
