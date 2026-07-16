"use client";

import { ModuleCard } from "@/components/module-card";
import { PageFrame } from "@/components/page-frame";
import { SectionHeader } from "@/components/section-header";
import { useLanguage } from "@/components/language-provider";
import { pageLabels, phaseTwoContent } from "@/content/phase-two";
import conveyorImage from "@/pictures/alberto-rodriguez-qVpGF1mlaM8-unsplash.jpg";
import monitoringImage from "@/pictures/Gemini_Generated_Image_3gaojp3gaojp3gao.png";
import hubStationImage from "@/pictures/hubstation.jpg";
import controlImage from "@/pictures/pexels-freek-wolsink-508219-34194580.jpg";
import scannerImage from "@/pictures/pexels-keeganjchecks-36423817.jpg";
import rollerConveyorImage from "@/pictures/pexels-nc-farm-bureau-mark-11679684.jpg";
import sortingImage from "@/pictures/pexels-yetkin-agac-664866326-34718930.jpg";
import transferModuleImage from "@/pictures/übergabemodule.jpg";
import type { StaticImageData } from "next/image";

type ModuleImage = {
  alt: string;
  src: StaticImageData;
};

const solutionImages: Record<"de" | "en", Array<ModuleImage | undefined>> = {
  de: [
    {
      alt: "Rollen- und Fördertechnik in einer Logistikanlage",
      src: conveyorImage,
    },
    {
      alt: "Rollenbahn in einer industriellen Produktionsumgebung",
      src: rollerConveyorImage,
    },
    {
      alt: "Sortier- und Förderstrecken in einer Produktionshalle",
      src: sortingImage,
    },
    {
      alt: "Industriearbeitsplatz mit Erfassungstechnik und Materialfluss",
      src: scannerImage,
    },
    {
      alt: "Hubstation mit automatischem Behältertransport",
      src: hubStationImage,
    },
    {
      alt: "Übergabemodul in einer industriellen Abfüll- und Transportanlage",
      src: transferModuleImage,
    },
    {
      alt: "Bedienpanel einer industriellen Steuerung",
      src: controlImage,
    },
    {
      alt: "Digitale Anlagenüberwachung an einer Förderanlage",
      src: monitoringImage,
    },
  ],
  en: [
    {
      alt: "Roller and conveyor technology in a logistics system",
      src: conveyorImage,
    },
    {
      alt: "Roller conveyor in an industrial production environment",
      src: rollerConveyorImage,
    },
    {
      alt: "Sorting and conveyor lines in a production hall",
      src: sortingImage,
    },
    {
      alt: "Industrial workstation with sensing technology and material flow",
      src: scannerImage,
    },
    {
      alt: "Lifting station with automated container transport",
      src: hubStationImage,
    },
    {
      alt: "Transfer module in an industrial filling and transport system",
      src: transferModuleImage,
    },
    {
      alt: "Control panel for an industrial control system",
      src: controlImage,
    },
    {
      alt: "Digital system monitoring on a conveyor system",
      src: monitoringImage,
    },
  ],
};

export default function SolutionsPage() {
  const { locale } = useLanguage();
  const content = phaseTwoContent[locale].solutions;
  const labels = pageLabels[locale];

  return (
    <PageFrame eyebrow={content.eyebrow} intro={content.intro} title={content.title}>
      <section className="bg-white px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader title={content.processTitle} />
          <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-[var(--color-line)] bg-[var(--color-line)] lg:grid-cols-4">
            {content.process.map((step, index) => (
              <article className="bg-white p-7" key={step.title}>
                <p className="text-sm font-bold text-[var(--color-cyan)]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-4 text-2xl font-bold text-[var(--color-navy)]">
                  {step.title}
                </h2>
                <p className="mt-4 text-base leading-7 text-[var(--color-muted)]">
                  {step.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-light)] px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-4">
          {content.items.map((item, index) => (
            <ModuleCard
              image={solutionImages[locale][index]}
              item={item}
              imageLabel={labels.imagePlaceholder}
              key={item.title}
            />
          ))}
        </div>
      </section>
    </PageFrame>
  );
}
