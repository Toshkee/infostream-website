import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getDictionary, hasLocale } from "@/lib/i18n";
import { PageHero } from "@/components/services/PageHero";
import { ServiceIllustration } from "@/components/services/ServiceIllustration";
import { SERVICES_ORDER, SERVICE_SLUGS } from "@/lib/services";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(locale)) return {};
  const dict = await getDictionary(locale);
  return { title: dict.whatWeDo.heroTitle };
}

export default async function WhatWeDoPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const dict = await getDictionary(locale);

  return (
    <>
      <PageHero title={dict.whatWeDo.heroTitle} />
      <div className="mx-auto max-w-7xl px-6 py-20">
        <ul className="grid gap-10 md:grid-cols-2">
          {SERVICES_ORDER.map((key) => {
            const s = dict.services[key];
            return (
              <li
                key={key}
                className="overflow-hidden rounded-3xl border border-border bg-surface shadow-sm transition-all hover:shadow-lg"
              >
                <ServiceIllustration serviceKey={key} />
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-heading">
                    {s.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-body">
                    {s.summary}
                  </p>
                  <Link
                    href={`/${locale}/what-we-do/${SERVICE_SLUGS[key]}`}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-brand-teal hover:text-brand-teal-dark"
                  >
                    {dict.services.readMore}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
