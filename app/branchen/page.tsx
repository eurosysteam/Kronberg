"use client";

import { FeatureCard } from "@/components/feature-card";
import { IndustrialImage } from "@/components/industrial-image";
import { PageFrame } from "@/components/page-frame";
import { SectionHeader } from "@/components/section-header";
import { useLanguage } from "@/components/language-provider";
import { phaseTwoContent } from "@/content/phase-two";
import industriesImage from "@/pictures/bernd-dittrich-917tYrOQVDI-unsplash.jpg";

export default function IndustriesPage() {
  const { locale } = useLanguage();
  const content = phaseTwoContent[locale].industries;

  return (
    <PageFrame eyebrow={content.eyebrow} intro={content.intro} title={content.title}>
      <section className="bg-white px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeader title={content.useCasesTitle} />
            <ul className="mt-8 grid gap-3">
              {content.useCases.map((item) => (
                <li
                  className="rounded border border-[var(--color-line)] bg-[var(--color-light)] px-5 py-4 text-base font-semibold text-[var(--color-navy)]"
                  key={item}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <IndustrialImage
            alt="Förderband mit Transportbehältern in einer Lebensmittelumgebung"
            className="min-h-[26rem] rounded-lg"
            src={industriesImage}
          />
        </div>
      </section>

      <section className="bg-[var(--color-light)] px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-4">
          {content.items.map((item) => (
            <FeatureCard item={item} key={item.title} />
          ))}
        </div>
      </section>
    </PageFrame>
  );
}
