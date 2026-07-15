import type { CardItem } from "@/content/phase-two";

type FeatureCardProps = {
  item: CardItem;
};

export function FeatureCard({ item }: FeatureCardProps) {
  const Icon = item.icon;

  return (
    <article className="rounded-lg border border-[var(--color-line)] bg-white p-6 shadow-[var(--shadow-soft)]">
      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded bg-[var(--color-light)] text-[var(--color-blue)]">
        <Icon aria-hidden="true" />
      </div>
      <h3 className="text-xl font-bold text-[var(--color-navy)]">
        {item.title}
      </h3>
      <p className="mt-3 text-base leading-7 text-[var(--color-muted)]">
        {item.text}
      </p>
    </article>
  );
}
