import type { TimelineItem } from "@/content/phase-two";

type TimelineProps = {
  items: TimelineItem[];
};

export function Timeline({ items }: TimelineProps) {
  return (
    <ol className="relative grid gap-6 border-l border-[var(--color-line)] pl-6">
      {items.map((item) => (
        <li className="relative rounded-lg border border-[var(--color-line)] bg-white p-6 shadow-[var(--shadow-soft)]" key={item.year}>
          <span className="absolute -left-[34px] top-8 h-4 w-4 rounded-full border-4 border-white bg-[var(--color-cyan)] shadow" />
          <p className="text-sm font-bold uppercase tracking-normal text-[var(--color-cyan)]">
            {item.year}
          </p>
          <h2 className="mt-2 text-2xl font-bold text-[var(--color-navy)]">
            {item.title}
          </h2>
          <p className="mt-3 text-base leading-7 text-[var(--color-muted)]">
            {item.text}
          </p>
        </li>
      ))}
    </ol>
  );
}
