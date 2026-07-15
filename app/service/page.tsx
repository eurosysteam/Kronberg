"use client";

import { FeatureCard } from "@/components/feature-card";
import { ModuleCard } from "@/components/module-card";
import { PageFrame } from "@/components/page-frame";
import { SectionHeader } from "@/components/section-header";
import { useLanguage } from "@/components/language-provider";
import { pageLabels, phaseTwoContent } from "@/content/phase-two";

export default function ServicePage() {
  const { locale } = useLanguage();
  const content = phaseTwoContent[locale].service;
  const labels = pageLabels[locale];

  return (
    <PageFrame eyebrow={content.eyebrow} intro={content.intro} title={content.title}>
      <section className="bg-white px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader title={content.topicsTitle} />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {content.topics.map((item) => (
              <FeatureCard item={item} key={item.title} />
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
