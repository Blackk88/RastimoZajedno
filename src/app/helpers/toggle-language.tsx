import { i18n } from "@/i18n-config";
import Image from "next/image";

import montenegroFlag from "@/assets/icons/me.png";
import englishFlag from "@/assets/icons/en.png";

export function toggleLanguageHandler({
  pathname,
  language,
}: {
  pathname: string;
  language: string;
}) {
  const locales = i18n.locales;
  const totalIndexes = i18n.locales.length - 1;
  const currentLanguageIndex = i18n.locales.findIndex(
    (locale) => locale === language
  );

  if (!pathname) return "/";
  const segments = pathname.split("/");

  if (currentLanguageIndex >= totalIndexes) {
    segments[1] = locales[0];
  } else {
    segments[1] = locales[currentLanguageIndex + 1];
  }
  return segments.join("/");
}

export function getLanguageFlag(language: string): JSX.Element {
  switch (language) {
    case "en":
      return (
        <Image
          src={englishFlag}
          alt="Toggle language icons"
          width={35}
          height={35}
        />
      );
    case "sr":
      return (
        <Image
          src={montenegroFlag}
          alt="Toggle language icons"
          width={35}
          height={35}
        />
      );
    default:
      return (
        <Image
          src={englishFlag}
          alt="Toggle language icons"
          width={25}
          height={25}
        />
      );
  }
}
