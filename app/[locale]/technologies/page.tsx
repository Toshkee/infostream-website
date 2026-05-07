import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getDictionary, hasLocale } from "@/lib/i18n";
import { PageHero } from "@/components/services/PageHero";
import { TechCircle } from "@/components/technologies/TechCircle";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(locale)) return {};
  const dict = await getDictionary(locale);
  return { title: dict.technologies.heroTitle };
}

export default async function TechnologiesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const dict = await getDictionary(locale);

  return (
    <>
      <PageHero title={dict.technologies.heroTitle} />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-heading sm:text-4xl">
              {dict.technologies.sectionTitle}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-body">
              {dict.technologies.sectionBody}
            </p>
          </div>
          <TechCircle />
        </div>
      </section>
    </>
  );
}
