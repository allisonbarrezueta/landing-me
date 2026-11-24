"use client";
import { useTheme } from "@/hooks/use-theme";

export default function ThemeToggle(): React.JSX.Element {
  const { theme, toggle } = useTheme();
  const dark = theme === "dark";
  return (
    <button
      type="button"
      role="switch"
      aria-checked={dark}
      aria-label="Dark mode"
      onClick={toggle}
      className="relative h-8 w-14 rounded-full bg-primary-200 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 dark:bg-primary-700"
    >
      <span
        aria-hidden="true"
        className={`absolute top-1 left-1 grid size-6 place-items-center rounded-full bg-white text-sm shadow transition-transform ${dark ? "translate-x-6" : ""}`}
      >
        {dark ? "🌙" : "☀️"}
      </span>
    </button>
  );
}
