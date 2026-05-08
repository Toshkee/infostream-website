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
        image={{ src: "/images/pic8.jpg", alt: "Team building software with modern tools" }}
      />

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-body">
          {dict.technologies.sectionBody}
        </p>

        <div className="mt-16">
          <TechStack items={dict.technologies.items} />
        </div>
      </section>
    </>
  );
}
