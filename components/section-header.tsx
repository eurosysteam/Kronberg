type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
};

export function SectionHeader({ eyebrow, title, intro }: SectionHeaderProps) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className="text-sm font-bold uppercase tracking-normal text-[var(--color-cyan)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 text-3xl font-bold leading-tight text-[var(--color-navy)] sm:text-5xl">
        {title}
      </h2>
      {intro ? (
        <p className="mt-5 text-lg leading-8 text-[var(--color-muted)]">
          {intro}
        </p>
      ) : null}
    </div>
  );
}
