import { fetchRepos } from "@/lib/github";
import { profile } from "@/data/profile";
import Section from "@/components/ui/section";
import Tag from "@/components/ui/tag";

export default async function Projects(): Promise<React.JSX.Element | null> {
  const repos = await fetchRepos(profile.github);
  if (repos.length === 0) return null;
  return (
    <Section id="projects" title="Projects" intro="Recent work from my public GitHub, updated hourly.">
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {repos.map((repo) => (
          <li key={repo.name} className="flex flex-col rounded-xl border border-gray-200 p-5 transition hover:-translate-y-1 hover:shadow-lg dark:border-gray-700">
            <h3 className="text-lg font-semibold text-primary-800 dark:text-white">
              <a href={repo.url} target="_blank" rel="noopener noreferrer" className="after:absolute-none hover:underline">
                {repo.name}
              </a>
            </h3>
            <p className="mt-2 grow text-gray-600 dark:text-gray-300">{repo.description ?? "No description yet."}</p>
            <div className="mt-4 flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
              {repo.language && <Tag>{repo.language}</Tag>}
              <span aria-label={`${repo.stars} stars`}>★ {repo.stars}</span>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
