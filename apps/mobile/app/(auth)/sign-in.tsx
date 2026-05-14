import { useState } from 'react';
import { Alert, Pressable, Text, TextInput, View } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { signIn } from '@/lib/auth';

export default function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function submit() {
    setLoading(true);
    try {
      const res = await signIn.email({ email, password });
      if (res.error) throw new Error(res.error.message);
      router.replace('/(tabs)/dashboard');
    } catch (err) {
      Alert.alert('Sign in failed', err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  }

  return (
    <View className="flex-1 justify-center bg-white p-6">
      <Text className="mb-1 text-2xl font-bold">Welcome back</Text>
      <Text className="mb-6 text-sm text-zinc-500">Sign in to continue your prep.</Text>

      <Text className="mb-1 text-sm font-medium">Email</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        className="mb-4 rounded-md border border-border px-3 py-2 text-base"
      />

      <Text className="mb-1 text-sm font-medium">Password</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        className="mb-6 rounded-md border border-border px-3 py-2 text-base"
      />

      <Pressable
        onPress={submit}
        disabled={loading}
        className="rounded-md bg-primary px-4 py-3 active:opacity-80 disabled:opacity-50"
      >
        <Text className="text-center font-semibold text-white">{loading ? 'Signing in…' : 'Sign in'}</Text>
      </Pressable>

      <View className="mt-6 flex-row justify-center">
        <Text className="text-sm text-zinc-500">No account? </Text>
        <Link href="/(auth)/sign-up" className="text-sm font-medium text-primary">
          Sign up
        </Link>
      </View>
    </View>
  );
}
