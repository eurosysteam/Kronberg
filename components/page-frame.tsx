"use client";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { IndustrialImage } from "@/components/industrial-image";
import { useLanguage } from "@/components/language-provider";
import type { StaticImageData } from "next/image";

type PageFrameProps = {
  eyebrow: string;
  title: string;
  intro: string;
  children: React.ReactNode;
  heroImage?: {
    alt: string;
    src: StaticImageData;
  };
  heroVisual?: "image" | "placeholder" | "none";
};

export function PageFrame({
  eyebrow,
  title,
  intro,
  children,
  heroImage,
  heroVisual = heroImage ? "image" : "placeholder",
}: PageFrameProps) {
  const { t } = useLanguage();

  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden bg-[var(--color-navy)] px-5 pb-20 pt-36 text-white sm:px-8 lg:pb-24">
          {heroVisual === "image" && heroImage ? (
            <IndustrialImage
              alt={heroImage.alt}
              className="absolute inset-0 min-h-full"
              priority
              src={heroImage.src}
            />
          ) : heroVisual === "placeholder" ? (
            <ImagePlaceholder
              className="absolute inset-0 min-h-full opacity-50"
              label={t.imagePlaceholder}
            />
          ) : null}
          {heroVisual === "none" ? (
            <div className="absolute inset-0 bg-[linear-gradient(180deg,var(--color-navy),#0b2558)]" />
          ) : (
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,29,73,.86),rgba(7,29,73,.58)_55%,rgba(7,29,73,.24))]" />
          )}
          <div className="relative z-10 mx-auto max-w-7xl">
            <p className="text-sm font-bold uppercase tracking-normal text-[var(--color-cyan)]">
              {eyebrow}
            </p>
            <h1 className="mt-4 max-w-5xl text-4xl font-bold leading-tight tracking-normal sm:text-6xl">
              {title}
            </h1>
            {intro ? (
              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/78">
                {intro}
              </p>
            ) : null}
          </div>
        </section>
        {children}
      </main>
      <Footer />
    </>
  );
}
