"use client";

import { FeatureCard } from "@/components/feature-card";
import { ModuleCard } from "@/components/module-card";
import { PageFrame } from "@/components/page-frame";
import { SectionHeader } from "@/components/section-header";
import { useLanguage } from "@/components/language-provider";
import { pageLabels, phaseTwoContent } from "@/content/phase-two";
import sparePartsImage from "@/pictures/Ersatzteile.jpg";
import onSiteImage from "@/pictures/pexels-bulat843-1243575272-34054482.jpg";
import remoteSupportImage from "@/pictures/pexels-fernando-narvaez-2150621466-32529341.jpg";
import trainingImage from "@/pictures/pexels-gustavo-fring-4872040.jpg";
import monitoringImage from "@/pictures/pexels-hyundaimotorgroup-19317897.jpg";
import maintenanceImage from "@/pictures/pexels-marianna-zuzanna-498248397-16442680.jpg";
import commissioningImage from "@/pictures/pexels-mikael-blomkvist-8961146.jpg";
import serviceContractImage from "@/pictures/ServiceVerträge.jpg";
import type { StaticImageData } from "next/image";

type ModuleImage = {
  alt: string;
  src: StaticImageData;
};

const serviceImages: Record<"de" | "en", Array<ModuleImage | undefined>> = {
  de: [
    {
      alt: "Technikerin bei Wartungsarbeiten an einem Schaltschrank",
      src: maintenanceImage,
    },
    {
      alt: "Montage und Prüfung eines Ersatzteils",
      src: sparePartsImage,
    },
    {
      alt: "Servicetechniker an einer Industrieanlage",
      src: onSiteImage,
    },
    {
      alt: "Leitstand mit digitalen Anlagen- und Prozessdaten",
      src: remoteSupportImage,
    },
    {
      alt: "Servicetechniker mit Tablet in einer Produktionshalle",
      src: serviceContractImage,
    },
    {
      alt: "Fachkraft mit technischen Unterlagen in einer Industrieumgebung",
      src: trainingImage,
    },
    {
      alt: "Ingenieure prüfen technische Unterlagen in einer Anlage",
      src: commissioningImage,
    },
    {
      alt: "Digitaler Kontrollraum für Zustands- und Störungsüberwachung",
      src: monitoringImage,
    },
  ],
  en: [
    {
      alt: "Technician carrying out maintenance work on a control cabinet",
      src: maintenanceImage,
    },
    {
      alt: "Assembly and inspection of a spare part",
      src: sparePartsImage,
    },
    {
      alt: "Service technician working on an industrial system",
      src: onSiteImage,
    },
    {
      alt: "Control room with digital system and process data",
      src: remoteSupportImage,
    },
    {
      alt: "Service technician with tablet in a production hall",
      src: serviceContractImage,
    },
    {
      alt: "Specialist with technical documents in an industrial environment",
      src: trainingImage,
    },
    {
      alt: "Engineers reviewing technical documents in an industrial system",
      src: commissioningImage,
    },
    {
      alt: "Digital control room for condition and fault monitoring",
      src: monitoringImage,
    },
  ],
};

export default function ServicePage() {
  const { locale } = useLanguage();
  const content = phaseTwoContent[locale].service;
  const labels = pageLabels[locale];

  return (
    <PageFrame
      eyebrow={content.eyebrow}
      heroImage={{
        alt:
          locale === "de"
            ? "Servicetechniker im blauen Overall mit Tablet"
            : "Service technician in blue overalls with a tablet",
        src: serviceContractImage,
      }}
      intro={content.intro}
      title={content.title}
    >
      <section className="bg-white px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader title={content.topicsTitle} />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {content.topics.map((item) => (
              <FeatureCard item={item} key={item.title} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-light)] px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-4">
          {content.items.map((item, index) => (
            <ModuleCard
              image={serviceImages[locale][index]}
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
