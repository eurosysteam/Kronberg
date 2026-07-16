"use client";

import { JobCard } from "@/components/job-card";
import { PageFrame } from "@/components/page-frame";
import { useLanguage } from "@/components/language-provider";
import { phaseThreeContent } from "@/content/phase-three";
import careersImage from "@/pictures/Karriere.jpg";

export default function CareersPage() {
  const { locale } = useLanguage();
  const content = phaseThreeContent[locale].careers;
  const heroAlt =
    locale === "de"
      ? "Fachkraft mit Schutzhelm als Karrieremotiv"
      : "Skilled worker with safety helmet as a careers motif";

  return (
    <PageFrame
      eyebrow={content.eyebrow}
      heroImage={{ alt: heroAlt, src: careersImage }}
      intro={content.intro}
      title={content.title}
    >
      <section className="bg-[var(--color-light)] px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-3">
          {content.jobs.map((job) => (
            <JobCard job={job} key={job.title} labels={content.labels} />
          ))}
        </div>
      </section>
    </PageFrame>
  );
}
