"use client";

import { ChevronDown, Download, ExternalLink } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { TrainingResetButton } from "@/components/training-reset-button";
import { useLanguage } from "@/components/language-provider";
import { intelligenceDe } from "@/content/training/intelligence.de";
import { intelligenceEn } from "@/content/training/intelligence.en";
import { leadershipDe } from "@/content/training/leadership.de";
import { leadershipEn } from "@/content/training/leadership.en";
import type {
  TrainingArea,
  TrainingSection,
  TrainingTaskContent,
} from "@/content/training/types";
import { withBasePath } from "@/lib/base-path";

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
                {content.sections.map((section) => {
                  const isLeadershipCase =
                    area === "leadership" && /^(Fall|Case)\s+[1-3]\b/i.test(section.title);

                  return isLeadershipCase ? (
                    <details
                      className="group block w-full rounded-lg border border-[var(--color-line)] bg-[var(--color-light)] text-left open:border-[var(--color-cyan)]"
                      key={section.title}
                    >
                      <summary className="flex w-full cursor-pointer list-none items-center gap-4 px-5 py-4 text-left font-bold text-[var(--color-navy)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-cyan)] [&::-webkit-details-marker]:hidden">
                        <span className="min-w-0 flex-1 text-left">{section.title}</span>
                        <ChevronDown
                          aria-hidden="true"
                          className="h-5 w-5 shrink-0 text-[var(--color-cyan)] transition-transform group-open:rotate-180 motion-reduce:transition-none"
                        />
                      </summary>
                      <div className="border-t border-[var(--color-line)] px-5 pb-5">
                        <TrainingSectionContent section={section} />
                      </div>
                    </details>
                  ) : (
                    <section key={section.title}>
                      <h2 className="text-2xl font-bold text-[var(--color-navy)]">
                        {section.title}
                      </h2>
                      <TrainingSectionContent section={section} />
                    </section>
                  );
                })}
              </div>

              <section className="mt-12 rounded-lg bg-[var(--color-navy)] p-6 text-white">
                <h2 className="text-2xl font-bold">{content.support.title}</h2>
                <p className="mt-4 text-base leading-7 text-white/76">{content.support.text}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    className="inline-flex items-center gap-2 rounded bg-[var(--color-cyan)] px-5 py-3 text-sm font-bold uppercase tracking-normal text-white transition hover:bg-[#008f99]"
                    href={content.support.href}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {content.support.linkLabel}
                    <ExternalLink aria-hidden="true" className="h-4 w-4" />
                  </a>
                  {content.support.downloads?.map((download) => (
                    <a
                      className="inline-flex items-center gap-2 rounded border border-white/45 px-5 py-3 text-sm font-bold text-white transition hover:border-[var(--color-cyan)] hover:bg-white/10"
                      download
                      href={withBasePath(download.href)}
                      key={download.href}
                    >
                      <Download aria-hidden="true" className="h-4 w-4 text-[var(--color-cyan)]" />
                      {download.label}
                    </a>
                  ))}
                </div>
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

function TrainingSectionContent({ section }: { section: TrainingSection }) {
  return (
    <>
      {section.body ? <TrainingBody paragraphs={section.body} /> : null}
      {section.items ? (
        <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-7 text-[var(--color-muted)] marker:text-[var(--color-cyan)]">
          {section.items.map((item) => (
            <li className="pl-1" key={item}>
              <InlineText text={item} />
            </li>
          ))}
        </ul>
      ) : null}
      {section.callout ? (
        <p className="mt-5 rounded border-l-4 border-[var(--color-cyan)] bg-[var(--color-light)] px-5 py-4 font-semibold leading-7 text-[var(--color-navy)]">
          {section.callout}
        </p>
      ) : null}
    </>
  );
}

type BodyBlock =
  | { type: "paragraph"; text: string }
  | { type: "phase"; title: string; paragraphs: string[] };

function TrainingBody({ paragraphs }: { paragraphs: string[] }) {
  const blocks: BodyBlock[] = [];
  let currentPhase: Extract<BodyBlock, { type: "phase" }> | null = null;

  for (const paragraph of paragraphs) {
    const isPhaseTitle = /^\*\*Phase\s+\d+/i.test(paragraph);
    const isClosingTitle = /^\*\*(Abschluss|Conclusion)\b/i.test(paragraph);

    if (isPhaseTitle) {
      currentPhase = { type: "phase", title: paragraph, paragraphs: [] };
      blocks.push(currentPhase);
    } else if (currentPhase && !isClosingTitle) {
      currentPhase.paragraphs.push(paragraph);
    } else {
      currentPhase = null;
      blocks.push({ type: "paragraph", text: paragraph });
    }
  }

  return (
    <div className="mt-4 grid gap-4">
      {blocks.map((block, index) =>
        block.type === "phase" ? (
          <details
            className="group block w-full rounded-lg border border-[var(--color-line)] bg-[var(--color-light)] text-left open:border-[var(--color-cyan)]"
            key={`${block.title}-${index}`}
          >
            <summary className="flex w-full cursor-pointer list-none items-center gap-4 px-5 py-4 text-left font-bold text-[var(--color-navy)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-cyan)] [&::-webkit-details-marker]:hidden">
              <span className="min-w-0 flex-1 text-left">
                <InlineText text={block.title} />
              </span>
              <ChevronDown
                aria-hidden="true"
                className="h-5 w-5 shrink-0 text-[var(--color-cyan)] transition-transform group-open:rotate-180 motion-reduce:transition-none"
              />
            </summary>
            <div className="border-t border-[var(--color-line)] px-5 pb-5">
              {block.paragraphs.map((paragraph) => (
                <p className="mt-4 text-base leading-8 text-[var(--color-muted)]" key={paragraph}>
                  <InlineText text={paragraph} />
                </p>
              ))}
            </div>
          </details>
        ) : (
          <p className="text-base leading-8 text-[var(--color-muted)]" key={`${block.text}-${index}`}>
            <InlineText text={block.text} />
          </p>
        ),
      )}
    </div>
  );
}

function InlineText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);

  return (
    <>
      {parts.map((part, index) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong className="font-bold text-[var(--color-navy)]" key={`${part}-${index}`}>
            {part.slice(2, -2)}
          </strong>
        ) : (
          <span key={`${part}-${index}`}>{part}</span>
        ),
      )}
    </>
  );
}
