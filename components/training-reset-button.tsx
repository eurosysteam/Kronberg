import Link from "next/link";

export function TrainingResetButton({ label }: { label: string }) {
  return (
    <Link
      className="inline-flex min-h-12 items-center justify-center rounded border border-[var(--color-line)] bg-white px-6 text-sm font-bold uppercase tracking-normal text-[var(--color-navy)] transition hover:border-[var(--color-cyan)] disabled:cursor-not-allowed disabled:opacity-60"
      href="/training"
    >
      {label}
    </Link>
  );
}
