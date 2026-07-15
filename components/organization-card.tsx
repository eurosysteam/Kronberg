import type { OrganizationItem } from "@/content/phase-two";

type OrganizationCardProps = {
  item: OrganizationItem;
};

export function OrganizationCard({ item }: OrganizationCardProps) {
  return (
    <article
      className={`rounded-lg border p-6 shadow-[var(--shadow-soft)] ${
        item.emphasis
          ? "border-[var(--color-cyan)] bg-[var(--color-navy)] text-white lg:col-span-2"
          : "border-[var(--color-line)] bg-white text-[var(--color-text)]"
      }`}
    >
      <p
        className={`text-sm font-bold uppercase tracking-normal ${
          item.emphasis ? "text-[var(--color-cyan)]" : "text-[var(--color-blue)]"
        }`}
      >
        {item.count}
      </p>
      <h2
        className={`mt-2 text-2xl font-bold ${
          item.emphasis ? "text-white" : "text-[var(--color-navy)]"
        }`}
      >
        {item.title}
      </h2>
      <p
        className={`mt-3 text-base leading-7 ${
          item.emphasis ? "text-white/76" : "text-[var(--color-muted)]"
        }`}
      >
        {item.text}
      </p>
    </article>
  );
}
