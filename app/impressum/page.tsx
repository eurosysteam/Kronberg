"use client";

import { PageFrame } from "@/components/page-frame";
import { useLanguage } from "@/components/language-provider";
import { phaseThreeContent } from "@/content/phase-three";

export default function ImprintPage() {
  const { locale } = useLanguage();
  const content = phaseThreeContent[locale].imprint;

  return (
    <PageFrame eyebrow={content.eyebrow} intro={content.intro} title={content.title}>
      <section className="bg-[var(--color-light)] px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-4xl rounded-lg border border-[var(--color-line)] bg-white p-8 shadow-[var(--shadow-soft)]">
          <p className="text-sm font-bold uppercase tracking-normal text-[var(--color-cyan)]">
            {content.noticeTitle}
          </p>
          <h2 className="mt-3 text-3xl font-bold text-[var(--color-navy)]">
            {content.notice}
          </h2>
          <ul className="mt-8 grid gap-4 text-base leading-7 text-[var(--color-muted)]">
            {content.items.map((item) => (
              <li className="border-l-2 border-[var(--color-cyan)] pl-4" key={item}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </PageFrame>
  );
}
