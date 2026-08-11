"use client";

import Image from "next/image";
import Link from "next/link";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useLanguage } from "@/components/language-provider";
import { withBasePath } from "@/lib/base-path";

const footerLinks = [
  { href: "/", key: "home" },
  { href: "/unternehmen", key: "company" },
  { href: "/loesungen", key: "solutions" },
  { href: "/branchen", key: "industries" },
  { href: "/service", key: "service" },
] as const;

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[var(--color-navy)] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <Image
            alt="Kronberg"
            className="h-14 w-auto"
            height={120}
            src={withBasePath("/brand/kronberg-logo.png")}
            width={197}
          />
          <p className="mt-5 max-w-sm text-sm leading-6 text-white/72">
            {t.footer.claim}
          </p>
        </div>

        <nav aria-label="Footer navigation" className="grid gap-2 text-sm">
          {footerLinks.map((link) => (
            <Link className="hover:text-[var(--color-cyan)]" href={link.href} key={link.href}>
              {t.nav[link.key]}
            </Link>
          ))}
          <Link className="hover:text-[var(--color-cyan)]" href="/impressum">
            {t.footer.imprint}
          </Link>
          <Link className="hover:text-[var(--color-cyan)]" href="/datenschutz">
            {t.footer.privacy}
          </Link>
        </nav>

        <div className="flex flex-col items-start gap-5">
          <LanguageSwitcher compact />
          <p className="text-sm leading-6 text-white/66">{t.footer.fictional}</p>
        </div>
      </div>
    </footer>
  );
}
