import Image, { type StaticImageData } from "next/image";

type IndustrialImageProps = {
  alt: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  src: StaticImageData;
};

export function IndustrialImage({
  alt,
  className = "",
  imageClassName = "",
  priority = false,
  src,
}: IndustrialImageProps) {
  const hasPositionClass = /\b(absolute|fixed|relative|sticky)\b/.test(className);

  return (
    <div
      className={`${hasPositionClass ? "" : "relative"} overflow-hidden bg-[var(--color-navy)] ${className}`}
    >
      <Image
        alt={alt}
        className={`object-cover ${imageClassName}`}
        fill
        priority={priority}
        sizes="(min-width: 1280px) 1200px, 100vw"
        src={src}
      />
    </div>
  );
}
