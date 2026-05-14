import { Redirect } from 'expo-router';
import { useSession } from '@/lib/auth';

export default function IndexRoute() {
  const { data, isPending } = useSession();
  if (isPending) return null;
  return <Redirect href={data?.user ? '/(tabs)/dashboard' : '/(auth)/sign-in'} />;
}
