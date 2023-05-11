import { dir } from "i18next";

const languages = ["en", "mne"];

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

interface Props {
  children: React.ReactNode;
  params: {
    lang: string;
  };
}

export const metadata = {
  title: "Rastimo Zajedno",
  description:
    "Association of parents of children and youths with special needs, 'We grow together' from Danilovgrad",
};

export default function RootLayout({ children, params: { lang } }: Props) {
  return (
    <html lang={lang} dir={dir(lang)}>
      <head />
      <body>{children}</body>
    </html>
  );
}
