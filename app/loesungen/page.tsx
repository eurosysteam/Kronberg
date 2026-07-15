"use client";

import { ModuleCard } from "@/components/module-card";
import { PageFrame } from "@/components/page-frame";
import { SectionHeader } from "@/components/section-header";
import { useLanguage } from "@/components/language-provider";
import { pageLabels, phaseTwoContent } from "@/content/phase-two";

export default function SolutionsPage() {
  const { locale } = useLanguage();
  const content = phaseTwoContent[locale].solutions;
  const labels = pageLabels[locale];

  return (
    <PageFrame eyebrow={content.eyebrow} intro={content.intro} title={content.title}>
      <section className="bg-white px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader title={content.processTitle} />
          <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-[var(--color-line)] bg-[var(--color-line)] lg:grid-cols-4">
            {content.process.map((step, index) => (
              <article className="bg-white p-7" key={step.title}>
                <p className="text-sm font-bold text-[var(--color-cyan)]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-4 text-2xl font-bold text-[var(--color-navy)]">
                  {step.title}
                </h2>
                <p className="mt-4 text-base leading-7 text-[var(--color-muted)]">
                  {step.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-light)] px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-4">
          {content.items.map((item) => (
            <ModuleCard item={item} imageLabel={labels.imagePlaceholder} key={item.title} />
          ))}
        </div>
      </section>
    </PageFrame>
  );
}
