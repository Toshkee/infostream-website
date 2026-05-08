import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "@/lib/i18n";
import { PageHero } from "@/components/services/PageHero";
import { ServiceRow } from "@/components/services/ServiceRow";
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
      <PageHero
        title={dict.whatWeDo.heroTitle}
        eyebrow={dict.whatWeDo.heroEyebrow}
        body={dict.whatWeDo.heroBody}
        image={{ src: "/images/wwd-hero.jpg", alt: "Mobile and tablet analytics dashboard mockups" }}
      />

      <div className="divide-y divide-border bg-surface">
        {SERVICES_ORDER.map((key, i) => {
          const s = dict.services[key];
          const projects =
            (dict.whatWeDo.projects as Record<string, string[]>)[key] ?? [];
          return (
            <ServiceRow
              key={key}
              index={i}
              serviceKey={key}
              title={s.title}
              body={s.summary}
              href={`/${locale}/what-we-do/${SERVICE_SLUGS[key]}`}
              readMoreLabel={dict.services.readMore}
              projectsLabel={dict.whatWeDo.projectsLabel}
              projects={projects}
              imageRight={i % 2 === 0}
            />
          );
        })}
      </div>
    </>
  );
}
