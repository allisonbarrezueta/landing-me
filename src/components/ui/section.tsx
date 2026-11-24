import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  intro?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({ id, title, intro, children, className = "" }: SectionProps): React.JSX.Element {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`scroll-mt-24 py-20 ${className}`}>
      <div className="container mx-auto px-5">
        <h2 id={`${id}-title`} className="text-3xl font-semibold text-primary-900 dark:text-white">
          {title}
        </h2>
        {intro && <p className="mt-3 max-w-2xl text-lg text-gray-600 dark:text-gray-300">{intro}</p>}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
