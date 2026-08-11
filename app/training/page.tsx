"use client";

import { PageFrame } from "@/components/page-frame";
import { TrainingAreaSelector } from "@/components/training-area-selector";
import { useLanguage } from "@/components/language-provider";
import { trainingOverviewContent } from "@/content/training/overview";
import trainingImage from "@/pictures/Teams-Background_01.png";

export default function TrainingPage() {
  const { locale } = useLanguage();
  const content = trainingOverviewContent[locale];

  return (
    <PageFrame
      eyebrow={content.eyebrow}
      heroImage={{
        alt:
          locale === "de"
            ? "eurosysteam-Hintergrundmotiv für die Trainingsbereiche"
            : "eurosysteam background motif for the training areas",
        src: trainingImage,
      }}
      intro={content.intro}
      title={content.title}
    >
      <section className="bg-[var(--color-light)] px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <TrainingAreaSelector labels={content} />
        </div>
      </section>
    </PageFrame>
  );
}
