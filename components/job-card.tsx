import { BriefcaseBusiness, MapPin } from "lucide-react";
import type { JobPosting } from "@/content/phase-three";

type JobCardProps = {
  job: JobPosting;
  labels: {
    department: string;
    location: string;
    employment: string;
    level: string;
    fictional: string;
  };
};

export function JobCard({ job, labels }: JobCardProps) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-[var(--color-line)] bg-white p-6 shadow-[var(--shadow-soft)]">
      <p className="text-xs font-bold uppercase tracking-normal text-[var(--color-cyan)]">
        {labels.fictional}
      </p>
      <h2 className="mt-3 text-2xl font-bold leading-tight text-[var(--color-navy)]">
        {job.title}
      </h2>
      <div className="mt-5 grid gap-3 text-sm text-[var(--color-muted)]">
        <p className="flex gap-2">
          <BriefcaseBusiness aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-blue)]" />
          <span>
            <strong className="text-[var(--color-text)]">{labels.department}:</strong>{" "}
            {job.department}
          </span>
        </p>
        <p className="flex gap-2">
          <MapPin aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-blue)]" />
          <span>
            <strong className="text-[var(--color-text)]">{labels.location}:</strong>{" "}
            {job.location}
          </span>
        </p>
        <p>
          <strong className="text-[var(--color-text)]">{labels.employment}:</strong>{" "}
          {job.employment}
        </p>
        <p>
          <strong className="text-[var(--color-text)]">{labels.level}:</strong>{" "}
          {job.level}
        </p>
      </div>
      <p className="mt-5 grow text-base leading-7 text-[var(--color-muted)]">
        {job.text}
      </p>
      <div className="mt-6 flex flex-wrap gap-2">
        {job.tags.map((tag) => (
          <span
            className="rounded-full bg-[var(--color-light)] px-3 py-1 text-xs font-semibold text-[var(--color-blue)]"
            key={tag}
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
