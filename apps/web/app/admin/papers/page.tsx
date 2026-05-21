export const dynamic = 'force-dynamic';
import Link from 'next/link';
import { db } from '@ielts/db';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default async function AdminPapersPage() {
  const papers = await db.query.testPapers.findMany({
    with: { exam: true },
    orderBy: (p, { desc }) => [desc(p.createdAt)],
  });

  return (
    <div className="mx-auto max-w-6xl space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Test papers</h1>
        <Button asChild>
          <Link href="/admin/papers/new">New paper</Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">All papers</CardTitle>
          <CardDescription>Edit, publish, or remove test papers.</CardDescription>
        </CardHeader>
        <CardContent>
          {papers.length === 0 ? (
            <p className="text-sm text-muted-foreground">No papers yet.</p>
          ) : (
            <table className="w-full text-sm">
              <thead className="text-left text-muted-foreground">
                <tr>
                  <th className="py-2">Title</th>
                  <th>Exam</th>
                  <th>Source</th>
                  <th>Difficulty</th>
                  <th>Published</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {papers.map((p) => (
                  <tr key={p.id} className="border-t">
                    <td className="py-2">{p.title}</td>
                    <td>{p.exam.name}</td>
                    <td>{p.source}</td>
                    <td>{p.difficulty}</td>
                    <td>{p.publishedAt ? new Date(p.publishedAt).toLocaleDateString() : '—'}</td>
                    <td>
                      <Button asChild size="sm" variant="outline">
                        <Link href={`/admin/papers/${p.id}`}>Edit</Link>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
