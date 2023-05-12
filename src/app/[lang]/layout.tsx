import { Locale, i18n } from "@/i18n-config";

interface Props {
  children: React.ReactNode;
  params: {
    lang: Locale;
  };
}

export async function generateStaticParams() {
  const localeParams = i18n.locales.map((locale) => ({ lang: locale }));

  return localeParams;
}

export default function Root({ children, params }: Props) {
  return (
    <html lang={params.lang}>
      <body>{children}</body>
    </html>
  );
}
