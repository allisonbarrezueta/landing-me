export interface Repo {
  name: string;
  description: string | null;
  url: string;
  language: string | null;
  stars: number;
}

interface GithubRepoResponse {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  fork: boolean;
  archived: boolean;
  pushed_at: string;
}

const isGithubUrl = (url: string): boolean => /^https:\/\/github\.com\//.test(url);

export function toRepos(raw: readonly GithubRepoResponse[], limit = 6): Repo[] {
  return raw
    .filter((r) => !r.fork && !r.archived && isGithubUrl(r.html_url))
    .sort((a, b) => b.stargazers_count - a.stargazers_count || b.pushed_at.localeCompare(a.pushed_at))
    .slice(0, limit)
    .map((r) => ({
      name: r.name,
      description: r.description,
      url: r.html_url,
      language: r.language,
      stars: r.stargazers_count,
    }));
}

/** Never throws: returns [] on any failure so the section can hide itself. */
export async function fetchRepos(username: string): Promise<Repo[]> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=100&sort=pushed`,
      { next: { revalidate: 3600 }, headers: { Accept: "application/vnd.github+json" } },
    );
    if (!res.ok) return [];
    return toRepos((await res.json()) as GithubRepoResponse[]);
  } catch {
    return [];
  }
}
