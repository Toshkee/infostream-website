import "server-only";

const dictionaries = {
  eng: () => import("@/messages/en.json").then((m) => m.default),
  mne: () => import("@/messages/me.json").then((m) => m.default),
};

export type Locale = keyof typeof dictionaries;
export const locales: Locale[] = ["mne", "eng"];
export const defaultLocale: Locale = "mne";

export const hasLocale = (locale: string): locale is Locale =>
  locale in dictionaries;

export const getDictionary = async (locale: Locale) => dictionaries[locale]();

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;
