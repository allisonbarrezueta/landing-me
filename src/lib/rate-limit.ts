const WINDOW_MS = 10 * 60 * 1000;
const MAX_HITS = 3;
const hits = new Map<string, number[]>();

/** Best-effort in-memory limiter (per server instance). TODO(tech-debt): use a shared store if deployed serverless at scale. */
export function isRateLimited(key: string, now: number = Date.now()): boolean {
  if (hits.size > 1000) {
    for (const [k, times] of hits) if (times.every((t) => now - t >= WINDOW_MS)) hits.delete(k);
  }
  const recent = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_HITS) {
    hits.set(key, recent);
    return true;
  }
  hits.set(key, [...recent, now]);
  return false;
}
