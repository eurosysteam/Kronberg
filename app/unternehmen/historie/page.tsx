"use client";

import { PageFrame } from "@/components/page-frame";
import { Timeline } from "@/components/timeline";
import { useLanguage } from "@/components/language-provider";
import { phaseTwoContent } from "@/content/phase-two";
import historyImage from "@/pictures/Historie.jpg";

export default function HistoryPage() {
  const { locale } = useLanguage();
  const content = phaseTwoContent[locale].history;

  return (
    <PageFrame
      eyebrow={content.eyebrow}
      heroImage={{
        alt:
          locale === "de"
            ? "Werkstattmotiv als historischer Bezug"
            : "Workshop motif as a historical reference",
        src: historyImage,
      }}
      intro={content.intro}
      title={content.title}
    >
      <section className="bg-[var(--color-light)] px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <Timeline items={content.items} />
        </div>
      </section>
    </PageFrame>
  );
}
