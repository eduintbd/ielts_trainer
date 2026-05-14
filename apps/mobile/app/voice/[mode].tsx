import { useEffect, useRef, useState } from 'react';
import { Alert, Pressable, ScrollView, Text, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { Audio } from 'expo-av';
import { Mic, Square } from 'lucide-react-native';
import { API_BASE_URL } from '@/lib/api-base';

type Turn = { role: 'user' | 'assistant'; text: string };

export default function VoiceSessionScreen() {
  const { mode } = useLocalSearchParams<{ mode: string }>();
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [recording, setRecording] = useState<Audio.Recording | null>(null);
  const [busy, setBusy] = useState(false);
  const [turns, setTurns] = useState<Turn[]>([]);
  const sound = useRef<Audio.Sound | null>(null);

  useEffect(() => {
    (async () => {
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({ allowsRecordingIOS: true, playsInSilentModeIOS: true });

      const res = await fetch(`${API_BASE_URL}/api/voice/start`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mode, accent: 'british' }),
        credentials: 'include',
      });
      if (!res.ok) {
        Alert.alert('Could not start voice session');
        return;
      }
      const data = await res.json();
      setSessionId(data.sessionId);
    })();
  }, [mode]);

  async function startRecording() {
    try {
      const { recording: rec } = await Audio.Recording.createAsync(Audio.RecordingOptionsPresets.HIGH_QUALITY);
      setRecording(rec);
    } catch (err) {
      Alert.alert('Recording failed', err instanceof Error ? err.message : 'unknown');
    }
  }

  async function stopAndSend() {
    if (!recording || !sessionId) return;
    setBusy(true);
    try {
      await recording.stopAndUnloadAsync();
      const uri = recording.getURI();
      setRecording(null);
      if (!uri) throw new Error('no recording uri');

      const form = new FormData();
      // @ts-expect-error - React Native FormData accepts {uri,name,type}
      form.append('audio', { uri, name: 'turn.m4a', type: 'audio/m4a' });
      form.append('sessionId', sessionId);

      const res = await fetch(`${API_BASE_URL}/api/voice/turn`, {
        method: 'POST',
        body: form,
        credentials: 'include',
      });
      if (!res.ok) throw new Error('voice turn failed');
      const data = (await res.json()) as { userText: string; assistantText: string; ttsUrl?: string };

      setTurns((prev) => [
        ...prev,
        { role: 'user', text: data.userText },
        { role: 'assistant', text: data.assistantText },
      ]);

      if (data.ttsUrl) {
        if (sound.current) await sound.current.unloadAsync();
        const { sound: s } = await Audio.Sound.createAsync({ uri: data.ttsUrl });
        sound.current = s;
        await s.playAsync();
      }
    } catch (err) {
      Alert.alert('Turn failed', err instanceof Error ? err.message : 'unknown');
    } finally {
      setBusy(false);
    }
  }

  return (
    <View className="flex-1 bg-white p-4">
      <ScrollView className="flex-1">
        {turns.length === 0 ? (
          <Text className="m-auto text-sm text-zinc-500">Press the mic to start your turn.</Text>
        ) : (
          turns.map((t, i) => (
            <View
              key={i}
              className={`mb-2 max-w-[80%] rounded-lg p-3 ${
                t.role === 'user' ? 'self-end bg-primary' : 'self-start bg-muted'
              }`}
            >
              <Text className={t.role === 'user' ? 'text-white' : 'text-black'}>{t.text}</Text>
            </View>
          ))
        )}
      </ScrollView>

      <View className="mt-3 items-center">
        {recording ? (
          <Pressable
            onPress={stopAndSend}
            disabled={busy}
            className="flex-row items-center gap-2 rounded-full bg-red-600 px-6 py-3 active:opacity-80 disabled:opacity-50"
          >
            <Square color="white" size={18} />
            <Text className="font-semibold text-white">{busy ? 'Sending…' : 'Stop'}</Text>
          </Pressable>
        ) : (
          <Pressable
            onPress={startRecording}
            disabled={!sessionId || busy}
            className="flex-row items-center gap-2 rounded-full bg-primary px-6 py-3 active:opacity-80 disabled:opacity-50"
          >
            <Mic color="white" size={18} />
            <Text className="font-semibold text-white">Start speaking</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
}
