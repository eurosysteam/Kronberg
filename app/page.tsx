"use client";

import Link from "next/link";
import { ArrowRight, Boxes, Factory, Wrench } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { useLanguage } from "@/components/language-provider";

const previewIcons = [Boxes, Factory, Wrench];

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      <Header />
      <main>
        <section className="relative flex min-h-screen overflow-hidden bg-[var(--color-navy)] text-white">
          <ImagePlaceholder
            className="absolute inset-0 min-h-full"
            label={t.imagePlaceholder}
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,29,73,.92),rgba(7,29,73,.72)_48%,rgba(7,29,73,.36))]" />
          <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center px-5 pb-16 pt-32 sm:px-8">
            <div className="max-w-4xl">
              <p className="mb-5 text-sm font-bold uppercase tracking-normal text-[var(--color-cyan)]">
                Kronberg Fördertechnik Gruppe
              </p>
              <h1 className="whitespace-pre-line text-5xl font-bold leading-[1.04] tracking-normal sm:text-6xl lg:text-7xl">
                {t.hero.title}
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/82 sm:text-xl">
                {t.hero.subtitle}
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <ButtonLink href="/loesungen">{t.hero.primary}</ButtonLink>
                <ButtonLink href="/unternehmen" variant="secondary">
                  {t.hero.secondary}
                </ButtonLink>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-[var(--color-line)] bg-white">
          <div className="mx-auto grid max-w-7xl gap-px bg-[var(--color-line)] px-5 sm:px-8 lg:grid-cols-3">
            {t.stats.map((stat) => (
              <div className="bg-white py-8 lg:px-8" key={stat}>
                <p className="text-2xl font-bold text-[var(--color-navy)]">{stat}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[var(--color-light)] px-5 py-20 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-normal text-[var(--color-cyan)]">
                {t.previews.eyebrow}
              </p>
              <h2 className="mt-3 text-3xl font-bold text-[var(--color-navy)] sm:text-5xl">
                {t.previews.title}
              </h2>
              <p className="mt-5 text-lg leading-8 text-[var(--color-muted)]">
                {t.previews.intro}
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {t.previews.items.map((item, index) => {
                const Icon = previewIcons[index];

                return (
                  <Link
                    className="group flex min-h-80 flex-col justify-between rounded-lg border border-[var(--color-line)] bg-white p-7 shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:border-[var(--color-cyan)]"
                    href={item.href}
                    key={item.href}
                  >
                    <div>
                      <div className="mb-7 inline-flex h-12 w-12 items-center justify-center rounded bg-[var(--color-light)] text-[var(--color-blue)]">
                        <Icon aria-hidden="true" />
                      </div>
                      <h3 className="text-2xl font-bold text-[var(--color-navy)]">
                        {item.title}
                      </h3>
                      <p className="mt-4 text-base leading-7 text-[var(--color-muted)]">
                        {item.text}
                      </p>
                    </div>
                    <span className="mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase text-[var(--color-cyan)]">
                      {item.title}
                      <ArrowRight
                        aria-hidden="true"
                        className="h-4 w-4 transition group-hover:translate-x-1"
                      />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
