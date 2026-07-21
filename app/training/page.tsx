"use client";

import { PageFrame } from "@/components/page-frame";
import { TrainingLoginForm } from "@/components/training-login-form";
import { useLanguage } from "@/components/language-provider";
import { trainingLoginContent } from "@/content/training/login";
import trainingImage from "@/pictures/Teams-Background_01.png";

export default function TrainingPage() {
  const { locale } = useLanguage();
  const content = trainingLoginContent[locale];

  return (
    <PageFrame
      eyebrow={content.eyebrow}
      heroImage={{
        alt:
          locale === "de"
            ? "eurosysteam-Hintergrundmotiv für den geschützten Trainingsbereich"
            : "eurosysteam background motif for the protected training area",
        src: trainingImage,
      }}
      intro={content.intro}
      title={content.title}
    >
      <section className="bg-[var(--color-light)] px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-xl">
          <TrainingLoginForm labels={content} />
        </div>
      </section>
    </PageFrame>
  );
}
