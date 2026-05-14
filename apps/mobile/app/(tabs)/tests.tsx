import { Text, View } from 'react-native';

export default function TestsTab() {
  return (
    <View className="flex-1 items-center justify-center bg-white p-6">
      <Text className="text-lg font-semibold">Mock tests</Text>
      <Text className="mt-2 text-center text-sm text-zinc-500">
        Pick a paper to start. Your audio responses sync when you reconnect.
      </Text>
    </View>
  );
}
