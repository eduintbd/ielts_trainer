import { Pressable, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import { signOut, useSession } from '@/lib/auth';

export default function ProfileTab() {
  const { data } = useSession();
  const router = useRouter();

  async function handleSignOut() {
    await signOut();
    router.replace('/(auth)/sign-in');
  }

  return (
    <View className="flex-1 bg-white p-6">
      <Text className="text-xl font-bold">{data?.user?.name ?? 'You'}</Text>
      <Text className="mb-6 text-sm text-zinc-500">{data?.user?.email}</Text>

      <Pressable onPress={handleSignOut} className="rounded-md border border-border bg-muted px-4 py-3 active:opacity-80">
        <Text className="text-center font-medium">Sign out</Text>
      </Pressable>
    </View>
  );
}
