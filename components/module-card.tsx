import { ImagePlaceholder } from "@/components/image-placeholder";
import type { CardItem } from "@/content/phase-two";

type ModuleCardProps = {
  item: CardItem;
  imageLabel: string;
};

export function ModuleCard({ item, imageLabel }: ModuleCardProps) {
  const Icon = item.icon;

  return (
    <article className="grid overflow-hidden rounded-lg border border-[var(--color-line)] bg-white shadow-[var(--shadow-soft)]">
      <ImagePlaceholder className="min-h-44" label={imageLabel} />
      <div className="p-6">
        <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded bg-[var(--color-light)] text-[var(--color-blue)]">
          <Icon aria-hidden="true" />
        </div>
        <h3 className="text-2xl font-bold text-[var(--color-navy)]">
          {item.title}
        </h3>
        <p className="mt-4 text-base leading-7 text-[var(--color-muted)]">
          {item.text}
        </p>
      </div>
    </article>
  );
}
