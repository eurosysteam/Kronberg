import Link from "next/link";
import { ArrowRight, BrainCircuit, Users } from "lucide-react";

type TrainingAreaLabels = {
  leadership: string;
  intelligence: string;
  open: string;
};

const areas = [
  {
    key: "leadership",
    href: "/training/leadership",
    Icon: Users,
  },
  {
    key: "intelligence",
    href: "/training/intelligence",
    Icon: BrainCircuit,
  },
] as const;

export function TrainingAreaSelector({ labels }: { labels: TrainingAreaLabels }) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {areas.map(({ key, href, Icon }) => (
        <Link
          className="group rounded-lg border border-[var(--color-line)] bg-white p-6 shadow-[var(--shadow-soft)] transition hover:-translate-y-0.5 hover:border-[var(--color-cyan)]"
          href={href}
          key={key}
        >
          <Icon aria-hidden="true" className="h-8 w-8 text-[var(--color-cyan)]" />
          <h2 className="mt-5 text-2xl font-bold text-[var(--color-navy)]">
            {labels[key]}
          </h2>
          <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-normal text-[var(--color-cyan)]">
            {labels.open}
            <ArrowRight
              aria-hidden="true"
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
            />
          </span>
        </Link>
      ))}
    </div>
  );
}
