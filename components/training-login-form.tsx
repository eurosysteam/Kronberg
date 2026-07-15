"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import type { TrainingArea } from "@/content/training/types";

type TrainingLoginLabels = {
  password: string;
  submit: string;
  submitting: string;
  error: string;
};

export function TrainingLoginForm({ labels }: { labels: TrainingLoginLabels }) {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setSubmitting(true);

    const response = await fetch("/api/training-login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    }).catch(() => null);

    if (!response?.ok) {
      setError(labels.error);
      setSubmitting(false);
      return;
    }

    const result = (await response.json()) as { area: TrainingArea };
    router.push(`/training/${result.area}`);
    router.refresh();
  }

  return (
    <form
      className="rounded-lg border border-[var(--color-line)] bg-white p-6 shadow-[var(--shadow-soft)] sm:p-8"
      onSubmit={onSubmit}
    >
      {error ? (
        <div
          className="mb-6 rounded border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-800"
          role="alert"
        >
          {error}
        </div>
      ) : null}
      <label className="block text-sm font-bold text-[var(--color-navy)]" htmlFor="training-password">
        {labels.password}
      </label>
      <input
        autoComplete="current-password"
        className="mt-2 w-full rounded border border-[var(--color-line)] bg-white px-4 py-3 text-[var(--color-text)] outline-none transition focus:border-[var(--color-cyan)] focus:ring-2 focus:ring-[var(--color-cyan)]/25"
        id="training-password"
        name="password"
        onChange={(event) => setPassword(event.target.value)}
        type="password"
        value={password}
      />
      <button
        className="mt-8 inline-flex min-h-12 items-center justify-center rounded bg-[var(--color-cyan)] px-6 text-sm font-bold uppercase tracking-normal text-white transition hover:bg-[#008f99] disabled:cursor-not-allowed disabled:opacity-60"
        disabled={submitting}
        type="submit"
      >
        {submitting ? labels.submitting : labels.submit}
      </button>
    </form>
  );
}
