import { Text, View } from 'react-native';

export default function ForumTab() {
  return (
    <View className="flex-1 items-center justify-center bg-white p-6">
      <Text className="text-lg font-semibold">Community</Text>
      <Text className="mt-2 text-center text-sm text-zinc-500">
        Topics load when you&apos;re online. Drafts are saved locally.
      </Text>
    </View>
  );
}
