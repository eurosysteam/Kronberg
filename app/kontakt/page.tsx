"use client";

import { ContactForm } from "@/components/contact-form";
import { PageFrame } from "@/components/page-frame";
import { useLanguage } from "@/components/language-provider";
import { phaseThreeContent } from "@/content/phase-three";

export default function ContactPage() {
  const { locale } = useLanguage();
  const content = phaseThreeContent[locale].contact;

  return (
    <PageFrame eyebrow={content.eyebrow} intro={content.intro} title={content.title}>
      <section className="bg-[var(--color-light)] px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <ContactForm labels={content} />
        </div>
      </section>
    </PageFrame>
  );
}
