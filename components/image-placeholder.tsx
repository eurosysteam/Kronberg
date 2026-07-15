import { ImageIcon } from "lucide-react";

type ImagePlaceholderProps = {
  label: string;
  className?: string;
};

export function ImagePlaceholder({
  label,
  className = "",
}: ImagePlaceholderProps) {
  return (
    <div
      aria-label={label}
      className={`relative flex min-h-64 overflow-hidden bg-[var(--color-navy)] text-white ${className}`}
      role="img"
    >
      <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(90deg,rgba(255,255,255,.14)_1px,transparent_1px),linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px)] [background-size:38px_38px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,166,178,.26),transparent_32%),linear-gradient(135deg,rgba(18,58,140,.75),rgba(7,29,73,.96))]" />
      <div className="relative m-auto flex flex-col items-center gap-3 text-center">
        <ImageIcon aria-hidden="true" className="h-10 w-10" strokeWidth={1.5} />
        <span className="text-sm font-semibold uppercase tracking-normal text-white/80">
          {label}
        </span>
      </div>
    </div>
  );
}
