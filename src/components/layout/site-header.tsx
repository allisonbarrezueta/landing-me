import Link from "next/link";
import { navLinks } from "@/data/nav";
import { profile } from "@/data/profile";
import ThemeToggle from "./theme-toggle";

export default function SiteHeader(): React.JSX.Element {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur dark:border-gray-800 dark:bg-black/90">
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-x-6 gap-y-2 px-5 py-3">
        <Link href="/" className="text-xl font-semibold text-primary-800 dark:text-white">
          {profile.shortName}
        </Link>
        <nav aria-label="Primary" className="order-last w-full md:order-none md:w-auto">
          <ul className="flex flex-wrap gap-x-5 gap-y-1 text-gray-700 dark:text-gray-200">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a href={href} className="hover:text-primary-600 dark:hover:text-primary-300">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
