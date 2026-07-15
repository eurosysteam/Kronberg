"use client";

import { ExternalLink } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { TrainingResetButton } from "@/components/training-reset-button";
import { useLanguage } from "@/components/language-provider";
import { intelligenceDe } from "@/content/training/intelligence.de";
import { intelligenceEn } from "@/content/training/intelligence.en";
import { leadershipDe } from "@/content/training/leadership.de";
import { leadershipEn } from "@/content/training/leadership.en";
import type { TrainingArea, TrainingTaskContent } from "@/content/training/types";

const contentMap: Record<TrainingArea, { de: TrainingTaskContent; en: TrainingTaskContent }> = {
  leadership: {
    de: leadershipDe,
    en: leadershipEn,
  },
  intelligence: {
    de: intelligenceDe,
    en: intelligenceEn,
  },
};

export function TrainingTaskPage({ area }: { area: TrainingArea }) {
  const { locale } = useLanguage();
  const content = contentMap[area][locale];

  return (
    <>
      <Header />
      <main className="bg-[var(--color-light)]">
        <section className="bg-[var(--color-navy)] px-5 pb-16 pt-32 text-white sm:px-8">
          <div className="mx-auto max-w-5xl">
            <p className="text-sm font-bold uppercase tracking-normal text-[var(--color-cyan)]">
              {content.label}
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight tracking-normal sm:text-6xl">
              {content.title}
            </h1>
            <p className="mt-5 text-lg leading-8 text-white/78">{content.intro}</p>
          </div>
        </section>

        <section className="px-5 py-12 sm:px-8">
          <div className="mx-auto max-w-5xl">
            <Breadcrumbs
              items={[
                { label: content.breadcrumb.training, href: "/training" },
                { label: content.breadcrumb.current },
              ]}
            />

            <article className="mt-8 rounded-lg border border-[var(--color-line)] bg-white p-6 shadow-[var(--shadow-soft)] sm:p-10">
              <div className="rounded-lg border border-[var(--color-cyan)] bg-[var(--color-light)] p-5">
                <p className="text-sm font-bold uppercase tracking-normal text-[var(--color-cyan)]">
                  {content.label}
                </p>
                <p className="mt-2 text-base leading-7 text-[var(--color-muted)]">
                  {content.intro}
                </p>
              </div>

              <div className="mt-10 grid gap-10">
                {content.sections.map((section) => (
                  <section key={section.title}>
                    <h2 className="text-2xl font-bold text-[var(--color-navy)]">
                      {section.title}
                    </h2>
                    {section.body?.map((paragraph) => (
                      <p className="mt-4 text-base leading-8 text-[var(--color-muted)]" key={paragraph}>
                        {paragraph}
                      </p>
                    ))}
                    {section.items ? (
                      <ul className="mt-4 grid gap-3 text-base leading-7 text-[var(--color-muted)]">
                        {section.items.map((item) => (
                          <li className="border-l-2 border-[var(--color-cyan)] pl-4" key={item}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                    {section.callout ? (
                      <p className="mt-5 rounded border-l-4 border-[var(--color-cyan)] bg-[var(--color-light)] px-5 py-4 font-semibold leading-7 text-[var(--color-navy)]">
                        {section.callout}
                      </p>
                    ) : null}
                  </section>
                ))}
              </div>

              <section className="mt-12 rounded-lg bg-[var(--color-navy)] p-6 text-white">
                <h2 className="text-2xl font-bold">{content.support.title}</h2>
                <p className="mt-4 text-base leading-7 text-white/76">{content.support.text}</p>
                <a
                  className="mt-6 inline-flex items-center gap-2 rounded bg-[var(--color-cyan)] px-5 py-3 text-sm font-bold uppercase tracking-normal text-white transition hover:bg-[#008f99]"
                  href={content.support.href}
                  rel="noreferrer"
                  target="_blank"
                >
                  {content.support.linkLabel}
                  <ExternalLink aria-hidden="true" className="h-4 w-4" />
                </a>
              </section>

              <div className="mt-8">
                <TrainingResetButton label={content.reset} />
              </div>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
