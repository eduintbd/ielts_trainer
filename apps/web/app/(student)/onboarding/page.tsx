export const dynamic = 'force-dynamic';
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function OnboardingPage() {
  const router = useRouter();
  const [targetExam, setTargetExam] = useState<'IELTS' | 'TOEFL' | 'PTE'>('IELTS');
  const [targetBand, setTargetBand] = useState('7.0');
  const [currentBand, setCurrentBand] = useState('');
  const [loading, setLoading] = useState(false);

  async function save() {
    setLoading(true);
    try {
      const res = await fetch('/api/me', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ targetExam, targetBand, currentBand }),
      });
      if (!res.ok) throw new Error('Save failed');
      toast.success('Profile saved');
      router.push('/dashboard');
    } catch {
      toast.error('Could not save your preferences.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-lg p-6">
      <Card>
        <CardHeader>
          <CardTitle>Tell us about your goal</CardTitle>
          <CardDescription>
            Three questions, sixty seconds. We use this to set your study plan, choose your mock tests, and decide
            which English-mastery modules surface first on the dashboard.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Which exam are you preparing for?</Label>
            <div className="flex gap-2">
              {(['IELTS', 'TOEFL', 'PTE'] as const).map((x) => (
                <Button
                  key={x}
                  type="button"
                  variant={targetExam === x ? 'default' : 'outline'}
                  onClick={() => setTargetExam(x)}
                >
                  {x}
                </Button>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="target">Target band / score</Label>
            <Input id="target" value={targetBand} onChange={(e) => setTargetBand(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="current">Current band (if known)</Label>
            <Input id="current" value={currentBand} onChange={(e) => setCurrentBand(e.target.value)} placeholder="optional" />
            <p className="text-xs text-muted-foreground">
              Don&apos;t know your current band? Skip this — your first mock test will set the baseline.
            </p>
          </div>
          <Button onClick={save} disabled={loading} className="w-full">
            {loading ? 'Saving…' : 'Continue'}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
