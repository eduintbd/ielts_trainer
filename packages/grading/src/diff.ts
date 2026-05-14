/**
 * Compute a word-level diff between two strings (the user's response and the corrected version).
 * Used to render strikethrough+insertion overlays in the grading UI.
 *
 * Implementation: simple LCS-based diff. Sufficient for short essays / speaking transcripts.
 */

export type DiffOp =
  | { type: 'equal'; value: string }
  | { type: 'insert'; value: string }
  | { type: 'delete'; value: string };

export function wordDiff(a: string, b: string): DiffOp[] {
  const aw = a.split(/(\s+)/);
  const bw = b.split(/(\s+)/);
  const lcs = lcsTable(aw, bw);
  const ops: DiffOp[] = [];

  let i = aw.length;
  let j = bw.length;
  while (i > 0 && j > 0) {
    if (aw[i - 1] === bw[j - 1]) {
      ops.push({ type: 'equal', value: aw[i - 1]! });
      i--;
      j--;
    } else if ((lcs[i - 1]?.[j] ?? 0) >= (lcs[i]?.[j - 1] ?? 0)) {
      ops.push({ type: 'delete', value: aw[i - 1]! });
      i--;
    } else {
      ops.push({ type: 'insert', value: bw[j - 1]! });
      j--;
    }
  }
  while (i > 0) {
    ops.push({ type: 'delete', value: aw[i - 1]! });
    i--;
  }
  while (j > 0) {
    ops.push({ type: 'insert', value: bw[j - 1]! });
    j--;
  }
  return ops.reverse();
}

function lcsTable(a: string[], b: string[]): number[][] {
  const dp: number[][] = Array.from({ length: a.length + 1 }, () =>
    new Array<number>(b.length + 1).fill(0),
  );
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      if (a[i - 1] === b[j - 1]) {
        dp[i]![j] = (dp[i - 1]?.[j - 1] ?? 0) + 1;
      } else {
        dp[i]![j] = Math.max(dp[i - 1]?.[j] ?? 0, dp[i]?.[j - 1] ?? 0);
      }
    }
  }
  return dp;
}
