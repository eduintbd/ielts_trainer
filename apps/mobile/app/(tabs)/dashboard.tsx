import { ScrollView, Text, View, Pressable } from 'react-native';
import { Link } from 'expo-router';
import { useSession } from '@/lib/auth';

export default function Dashboard() {
  const { data } = useSession();
  const name = data?.user?.name?.split(' ')[0] ?? 'friend';

  return (
    <ScrollView className="flex-1 bg-white p-6">
      <Text className="text-2xl font-bold">Welcome, {name}.</Text>
      <Text className="mb-6 text-sm text-zinc-500">Pick something to do.</Text>

      <ActionCard href="/(tabs)/tests" title="Take a mock test" subtitle="Full-length, scored." />
      <ActionCard href="/(tabs)/voice" title="Voice practice" subtitle="15 minutes with the AI examiner." />
      <ActionCard href="/vocab/review" title="Vocab review" subtitle="Spaced repetition. Works offline." />
      <ActionCard href="/(tabs)/forum" title="Community" subtitle="Ask questions, share experiences." />
    </ScrollView>
  );
}

function ActionCard({ href, title, subtitle }: { href: string; title: string; subtitle: string }) {
  return (
    <Link href={href as never} asChild>
      <Pressable className="mb-3 rounded-lg border border-border bg-muted p-4 active:opacity-80">
        <Text className="text-base font-semibold">{title}</Text>
        <Text className="mt-1 text-sm text-zinc-500">{subtitle}</Text>
      </Pressable>
    </Link>
  );
}
