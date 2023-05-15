export const i18n = {
  defaultLocale: "sr",
  locales: ["sr", "en"],
};

export type Locale = (typeof i18n)["locales"][number];
