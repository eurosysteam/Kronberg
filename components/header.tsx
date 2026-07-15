"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useLanguage } from "@/components/language-provider";

const navLinks = [
  { href: "/", key: "home" },
  { href: "/unternehmen", key: "company" },
  { href: "/loesungen", key: "solutions" },
  { href: "/branchen", key: "industries" },
  { href: "/service", key: "service" },
  { href: "/karriere", key: "careers" },
  { href: "/kontakt", key: "contact" },
] as const;

export function Header() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const navText = t.nav;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition ${
        scrolled || open
          ? "border-b border-[var(--color-line)] bg-white/95 text-[var(--color-navy)] shadow-sm backdrop-blur"
          : "text-white"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link aria-label="Kronberg home" className="flex items-center" href="/">
          <Image
            alt="Kronberg"
            className="h-12 w-auto"
            height={120}
            priority
            src="/brand/kronberg-logo.png"
            width={197}
          />
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link
              className="text-sm font-semibold transition hover:text-[var(--color-cyan)]"
              href={link.href}
              key={link.href}
            >
              {navText[link.key]}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <LanguageSwitcher />
          <Link
            className="inline-flex min-h-11 items-center rounded bg-[var(--color-cyan)] px-5 text-sm font-bold uppercase text-white transition hover:bg-[#008f99]"
            href="/training"
          >
            {navText.training}
          </Link>
        </div>

        <button
          aria-expanded={open}
          aria-label={open ? navText.close : navText.menu}
          className="inline-flex h-11 w-11 items-center justify-center rounded border border-current/25 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-[var(--color-line)] bg-white px-5 pb-8 pt-4 text-[var(--color-navy)] lg:hidden">
          <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                className="rounded px-3 py-3 text-base font-semibold hover:bg-[var(--color-light)]"
                href={link.href}
                key={link.href}
                onClick={() => setOpen(false)}
              >
                {navText[link.key]}
              </Link>
            ))}
            <Link
              className="mt-3 rounded bg-[var(--color-cyan)] px-3 py-3 text-center font-bold uppercase text-white"
              href="/training"
              onClick={() => setOpen(false)}
            >
              {navText.training}
            </Link>
          </nav>
          <div className="mt-5">
            <LanguageSwitcher compact />
          </div>
        </div>
      ) : null}
    </header>
  );
}
