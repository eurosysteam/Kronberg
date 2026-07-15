import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary";
};

export function ButtonLink({
  children,
  href,
  variant = "primary",
}: ButtonLinkProps) {
  return (
    <Link
      className={`inline-flex min-h-12 items-center justify-center rounded px-6 text-sm font-bold uppercase tracking-normal transition ${
        variant === "primary"
          ? "bg-[var(--color-cyan)] text-white hover:bg-[#008f99]"
          : "border border-white/60 bg-white/10 text-white hover:bg-white/20"
      }`}
      href={href}
    >
      {children}
    </Link>
  );
}
