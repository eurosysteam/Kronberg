"use client";

import { JobCard } from "@/components/job-card";
import { PageFrame } from "@/components/page-frame";
import { useLanguage } from "@/components/language-provider";
import { phaseThreeContent } from "@/content/phase-three";

export default function CareersPage() {
  const { locale } = useLanguage();
  const content = phaseThreeContent[locale].careers;

  return (
    <PageFrame eyebrow={content.eyebrow} intro={content.intro} title={content.title}>
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
