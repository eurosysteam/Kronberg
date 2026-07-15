"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FeatureCard } from "@/components/feature-card";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { useLanguage } from "@/components/language-provider";
import { PageFrame } from "@/components/page-frame";
import { SectionHeader } from "@/components/section-header";
import { pageLabels, phaseTwoContent } from "@/content/phase-two";

export default function CompanyPage() {
  const { locale } = useLanguage();
  const content = phaseTwoContent[locale].company;
  const labels = pageLabels[locale];

  return (
    <PageFrame eyebrow={content.eyebrow} intro={content.intro} title={content.title}>
      <section className="bg-white px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <div className="grid gap-6 text-lg leading-8 text-[var(--color-muted)]">
            {content.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <ImagePlaceholder
            className="min-h-[28rem] rounded-lg"
            label={labels.imagePlaceholder}
          />
        </div>
      </section>

      <section className="bg-[var(--color-light)] px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader title={content.strengthsTitle} />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {content.strengths.map((item) => (
              <FeatureCard item={item} key={item.title} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          {content.links.map((item) => (
            <Link
              className="group rounded-lg border border-[var(--color-line)] bg-white p-7 shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:border-[var(--color-cyan)]"
              href={item.href}
              key={item.href}
            >
              <h2 className="text-2xl font-bold text-[var(--color-navy)]">
                {item.title}
              </h2>
              <p className="mt-4 text-base leading-7 text-[var(--color-muted)]">
                {item.text}
              </p>
              <span className="mt-7 inline-flex items-center gap-2 text-sm font-bold uppercase text-[var(--color-cyan)]">
                {labels.learnMore}
                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4 transition group-hover:translate-x-1"
                />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </PageFrame>
  );
}
