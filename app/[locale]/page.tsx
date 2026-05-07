import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "@/lib/i18n";
import { Hero } from "@/components/home/Hero";
import { ServiceSection } from "@/components/home/ServiceSection";
import { LogoCloud } from "@/components/home/LogoCloud";
import { ProcessSection } from "@/components/home/ProcessSection";
import { Testimonials } from "@/components/home/Testimonials";
import { ServiceIllustration } from "@/components/services/ServiceIllustration";
import { SERVICES_ORDER, SERVICE_SLUGS } from "@/lib/services";

const TESTIMONIAL_PALETTES: Array<[string, string]> = [
  ["#A8FFE7", "#C7BBFF"],
  ["#C7E8FF", "#C7BBFF"],
  ["#FFD89B", "#A8FFE7"],
];

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const dict = await getDictionary(locale);

  return (
    <>
      <Hero
        title={dict.home.heroTitle}
        tagOne={dict.home.heroTagOne}
        tagTwo={dict.home.heroTagTwo}
        body={dict.home.heroBody}
      />

      <LogoCloud label={dict.home.trustedBy} />

      <div id="services" />

      {SERVICES_ORDER.map((key, i) => {
        const s = dict.services[key];
        return (
          <ServiceSection
            key={key}
            index={i}
            title={s.title}
            body={s.summary}
            href={`/${locale}/what-we-do/${SERVICE_SLUGS[key]}`}
            readMoreLabel={dict.services.readMore}
            imageRight={i % 2 === 1}
            illustration={<ServiceIllustration serviceKey={key} />}
            buildLabel={dict.home.buildLabel}
            operateLabel={dict.home.operateLabel}
          />
        );
      })}

      <ProcessSection
        eyebrow={dict.process.eyebrow}
        title={dict.process.title}
        titleAccent={dict.process.titleAccent}
        steps={dict.process.steps}
      />

      <Testimonials
        title={dict.testimonials.title}
        titleAccent={dict.testimonials.titleAccent}
        items={dict.testimonials.items.map((t, i) => ({
          ...t,
          accent: TESTIMONIAL_PALETTES[i % TESTIMONIAL_PALETTES.length],
        }))}
      />
    </>
  );
}
