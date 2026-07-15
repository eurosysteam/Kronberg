"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export function TrainingResetButton({ label }: { label: string }) {
  const router = useRouter();
  const [pending, setPending] = useState(false);

  async function resetAccess() {
    setPending(true);
    await fetch("/api/training-logout", { method: "POST" });
    router.push("/training");
    router.refresh();
  }

  return (
    <button
      className="inline-flex min-h-12 items-center justify-center rounded border border-[var(--color-line)] bg-white px-6 text-sm font-bold uppercase tracking-normal text-[var(--color-navy)] transition hover:border-[var(--color-cyan)] disabled:cursor-not-allowed disabled:opacity-60"
      disabled={pending}
      onClick={resetAccess}
      type="button"
    >
      {label}
    </button>
  );
}
