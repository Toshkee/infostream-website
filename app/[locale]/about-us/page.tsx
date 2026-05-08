import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getDictionary, hasLocale } from "@/lib/i18n";
import { PageHero } from "@/components/services/PageHero";
import { CoreValues } from "@/components/about/CoreValues";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(locale)) return {};
  const dict = await getDictionary(locale);
  return { title: dict.about.heroTitle };
}

export default async function AboutPage({
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
        title={dict.about.heroTitle}
        eyebrow={dict.about.heroEyebrow}
        body={dict.about.paragraphs[0]}
      />

      <section className="mx-auto max-w-3xl px-4 sm:px-6 pb-14 sm:pb-24">
        <div className="space-y-6 text-lg leading-relaxed text-body">
          {dict.about.paragraphs.slice(1).map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      <CoreValues
        title={dict.about.valuesTitle}
        titleAccent={dict.about.valuesTitleAccent}
        values={dict.about.values}
      />
    </>
  );
}
