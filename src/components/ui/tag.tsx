export default function Tag({ children }: { children: React.ReactNode }): React.JSX.Element {
  return (
    <span className="inline-block rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-800 dark:bg-primary-800 dark:text-primary-100">
      {children}
    </span>
  );
}
