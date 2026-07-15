"use client";

import { PageFrame } from "@/components/page-frame";
import { TrainingLoginForm } from "@/components/training-login-form";
import { useLanguage } from "@/components/language-provider";
import { trainingLoginContent } from "@/content/training/login";

export default function TrainingPage() {
  const { locale } = useLanguage();
  const content = trainingLoginContent[locale];

  return (
    <PageFrame eyebrow={content.eyebrow} intro={content.intro} title={content.title}>
      <section className="bg-[var(--color-light)] px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-xl">
          <TrainingLoginForm labels={content} />
        </div>
      </section>
    </PageFrame>
  );
}
