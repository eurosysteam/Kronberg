import { ImagePlaceholder } from "@/components/image-placeholder";
import { IndustrialImage } from "@/components/industrial-image";
import type { CardItem } from "@/content/phase-two";
import type { StaticImageData } from "next/image";

type ModuleCardProps = {
  image?: {
    alt: string;
    src: StaticImageData;
  };
  item: CardItem;
  imageLabel: string;
};

export function ModuleCard({ image, item, imageLabel }: ModuleCardProps) {
  const Icon = item.icon;

  return (
    <article className="grid overflow-hidden rounded-lg border border-[var(--color-line)] bg-white shadow-[var(--shadow-soft)]">
      {image ? (
        <IndustrialImage alt={image.alt} className="min-h-44" src={image.src} />
      ) : (
        <ImagePlaceholder className="min-h-44" label={imageLabel} />
      )}
      <div className="p-6">
        <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded bg-[var(--color-light)] text-[var(--color-blue)]">
          <Icon aria-hidden="true" />
        </div>
        <h3 className="whitespace-pre-line text-2xl font-bold text-[var(--color-navy)]">
          {item.title}
        </h3>
        <p className="mt-4 text-base leading-7 text-[var(--color-muted)]">
          {item.text}
        </p>
      </div>
    </article>
  );
}
