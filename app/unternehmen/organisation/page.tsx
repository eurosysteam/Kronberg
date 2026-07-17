"use client";

import { OrganizationCard } from "@/components/organization-card";
import { PageFrame } from "@/components/page-frame";
import { useLanguage } from "@/components/language-provider";
import { phaseTwoContent } from "@/content/phase-two";
import headquartersImage from "@/pictures/Gemini_Generated_Image_974omp974omp974o.png";

export default function OrganizationPage() {
  const { locale } = useLanguage();
  const content = phaseTwoContent[locale].organization;

  return (
    <PageFrame
      eyebrow={content.eyebrow}
      heroImage={{
        alt:
          locale === "de"
            ? "Kronberg Hauptsitz mit Verwaltungs- und Logistikgebäude"
            : "Kronberg headquarters with administration and logistics building",
        src: headquartersImage,
      }}
      intro={content.intro}
      title={content.title}
    >
      <section className="bg-[var(--color-light)] px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl rounded-lg border border-[var(--color-line)] bg-white p-7 text-center shadow-[var(--shadow-soft)]">
            <p className="text-sm font-bold uppercase tracking-normal text-[var(--color-cyan)]">
              {content.ownerCircle.title}
            </p>
            <p className="mt-3 text-base leading-7 text-[var(--color-muted)]">
              {content.ownerCircle.text}
            </p>
          </div>

          <div className="mx-auto my-6 h-12 w-px bg-[var(--color-line)]" />

          <div className="mx-auto max-w-4xl">
            <OrganizationCard item={content.management} />
          </div>

          <div className="mx-auto my-6 h-12 w-px bg-[var(--color-line)]" />

          <div className="grid gap-6 lg:grid-cols-4">
            {content.departments.map((item) => (
              <OrganizationCard item={item} key={item.title} />
            ))}
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <OrganizationCard item={content.council} />
            <OrganizationCard item={content.externalStakeholders} />
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
