"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { ThemeToggle } from "@/components/layout/ThemeToggle";

type NavDict = {
  home: string;
  whatWeDo: string;
  technologies: string;
  aboutUs: string;
  team: string;
};

export function Navbar({ locale, nav }: { locale: string; nav: NavDict }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: `/${locale}`, label: nav.home, exact: true },
    { href: `/${locale}/what-we-do`, label: nav.whatWeDo },
    { href: `/${locale}/technologies`, label: nav.technologies },
    { href: `/${locale}/about-us`, label: nav.aboutUs },
  ];

  const isActive = (href: string, exact?: boolean) =>
    exact ? pathname === href : pathname.startsWith(href);

  const switchHref = (target: "mne" | "eng") =>
    pathname.replace(/^\/(mne|eng)/, `/${target}`) || `/${target}`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled
          ? "border-b border-border/60 bg-[var(--c-bg)]/85 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href={`/${locale}`} aria-label="Infostream home">
          <Logo variant={scrolled ? "color" : "white"} size="lg" />
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`rounded-full px-3 py-2 text-sm transition-colors ${
                  isActive(l.href, l.exact)
                    ? "font-semibold text-heading"
                    : "text-body hover:text-heading"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <div className="flex items-center gap-2 text-sm">
            <Link
              href={switchHref("mne")}
              className={
                locale === "mne"
                  ? "font-semibold text-heading"
                  : "text-muted hover:text-heading"
              }
            >
              mne
            </Link>
            <span className="text-border">/</span>
            <Link
              href={switchHref("eng")}
              className={
                locale === "eng"
                  ? "font-semibold text-heading"
                  : "text-muted hover:text-heading"
              }
            >
              eng
            </Link>
          </div>
          <ThemeToggle />
        </div>

        <button
          aria-label="Toggle menu"
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="text-heading" /> : <Menu className="text-heading" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-[var(--c-bg)] px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-3">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-heading"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="flex gap-3 pt-2 text-sm">
              <Link
                href={switchHref("mne")}
                className={locale === "mne" ? "font-bold text-heading" : "text-muted"}
              >
                mne
              </Link>
              <span className="text-border">/</span>
              <Link
                href={switchHref("eng")}
                className={locale === "eng" ? "font-bold text-heading" : "text-muted"}
              >
                eng
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
