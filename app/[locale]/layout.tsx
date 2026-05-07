import { notFound } from "next/navigation";
import { hasLocale, locales, getDictionary } from "@/lib/i18n";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();

  const dict = await getDictionary(locale);

  return (
    <>
      <Navbar locale={locale} nav={dict.nav} />
      <main className="flex-1">{children}</main>
      <Footer locale={locale} dict={dict.footer} navDict={dict.nav} />
    </>
  );
}
