export const i18n = {
  defaultLocale: "mne",
  locales: ["en", "mne"],
} as const;

export type Locale = (typeof i18n)["locales"][number];
