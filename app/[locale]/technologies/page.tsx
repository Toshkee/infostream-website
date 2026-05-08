import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getDictionary, hasLocale } from "@/lib/i18n";
import { PageHero } from "@/components/services/PageHero";
import { TechStack } from "@/components/technologies/TechStack";

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
      <PageHero
        title={dict.technologies.heroTitle}
        body={dict.technologies.sectionBody}
        image={{ src: "/images/pic8.jpg", alt: "Team building software with modern tools" }}
      />

      <div className="mx-auto max-w-3xl px-4 sm:px-6 pt-14 sm:pt-20 pb-4 text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-heading sm:text-3xl lg:text-4xl">
          {dict.technologies.sectionTitle}
        </h2>
      </div>

      <TechStack items={dict.technologies.items} />
    </>
  );
}
