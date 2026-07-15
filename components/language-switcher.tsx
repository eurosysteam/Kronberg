"use client";

import { useLanguage } from "@/components/language-provider";
import type { Locale } from "@/messages/home";

const locales: Locale[] = ["de", "en"];

export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { locale, setLocale } = useLanguage();

  return (
    <div
      aria-label="Language selection"
      className={`inline-flex items-center rounded-full border border-current/20 bg-white/10 p-1 ${
        compact ? "text-sm" : "text-[0.8rem]"
      }`}
    >
      {locales.map((item) => (
        <button
          aria-pressed={locale === item}
          className={`rounded-full px-3 py-1 font-semibold uppercase transition ${
            locale === item
              ? "bg-[var(--color-cyan)] text-white"
              : "text-current hover:bg-current/10"
          }`}
          key={item}
          onClick={() => setLocale(item)}
          type="button"
        >
          {item}
        </button>
      ))}
    </div>
  );
}
