import { profile } from "@/data/profile";
import { socials } from "@/data/socials";

export default function SiteFooter(): React.JSX.Element {
  return (
    <footer className="border-t border-gray-200 py-10 dark:border-gray-800">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-5 text-gray-600 sm:flex-row dark:text-gray-300">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <ul className="flex gap-5">
          {socials.map(({ label, href }) => (
            <li key={label}>
              <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="hover:text-primary-600 dark:hover:text-primary-300">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
