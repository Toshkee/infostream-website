import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import { getDictionary, hasLocale, locales } from "@/lib/i18n";
import { PageHero } from "@/components/services/PageHero";
import { ServiceIllustration } from "@/components/services/ServiceIllustration";
import { SERVICE_SLUGS, slugToKey } from "@/lib/services";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    Object.values(SERVICE_SLUGS).map((service) => ({ locale, service })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; service: string }>;
}): Promise<Metadata> {
  const { locale, service } = await params;
  const key = slugToKey(service);
  if (!hasLocale(locale) || !key) return {};
  const dict = await getDictionary(locale);
  return { title: dict.services[key].title };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ locale: string; service: string }>;
}) {
  const { locale, service } = await params;
  if (!hasLocale(locale)) notFound();
  const key = slugToKey(service);
  if (!key) notFound();

  const dict = await getDictionary(locale);
  const s = dict.services[key];

  return (
    <>
      <PageHero title={s.title} />

      <div className="mx-auto max-w-5xl px-6 py-16">
        <Link
          href={`/${locale}/what-we-do`}
          className="mb-8 inline-flex items-center gap-2 text-sm text-body hover:text-brand-teal"
        >
          <ArrowLeft className="h-4 w-4" />
          {dict.whatWeDo.heroTitle}
        </Link>

        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <ServiceIllustration serviceKey={key} />
          <div>
            <h2 className="text-2xl font-semibold text-heading">{s.title}</h2>
            <p className="mt-4 text-lg leading-relaxed text-body">
              {s.summary}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
