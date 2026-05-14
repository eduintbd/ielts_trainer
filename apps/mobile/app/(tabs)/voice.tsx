import { ScrollView, Text, Pressable, View } from 'react-native';
import { Link } from 'expo-router';

const MODES = [
  { key: 'free_conversation', name: 'Free conversation' },
  { key: 'speaking_part_1', name: 'IELTS Speaking · Part 1' },
  { key: 'speaking_part_2', name: 'IELTS Speaking · Part 2' },
  { key: 'speaking_part_3', name: 'IELTS Speaking · Part 3' },
  { key: 'pronunciation_drill', name: 'Pronunciation drill' },
  { key: 'translate_bn_en', name: 'Bangla → English' },
];

export default function VoiceTab() {
  return (
    <ScrollView className="flex-1 bg-white p-6">
      <Text className="text-xl font-bold">Voice coach</Text>
      <Text className="mb-6 text-sm text-zinc-500">Choose a mode.</Text>

      {MODES.map((m) => (
        <Link key={m.key} href={{ pathname: '/voice/[mode]', params: { mode: m.key } }} asChild>
          <Pressable className="mb-2 rounded-md border border-border bg-muted px-4 py-3 active:opacity-80">
            <Text className="text-base font-medium">{m.name}</Text>
          </Pressable>
        </Link>
      ))}
    </ScrollView>
  );
}
