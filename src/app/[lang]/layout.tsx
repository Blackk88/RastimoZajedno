import Script from "next/script";
import { Roboto } from "next/font/google";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import { getDictionary } from "@/get-dictionary";
import { Locale, i18n } from "@/i18n-config";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

import "@/app/styles/bootstrap-customize.scss";
import "@/app/styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";

interface Props {
  children: React.ReactNode;
  params: {
    lang: Locale;
  };
}

const roboto = Roboto({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "NVO Rastimo Zajedno",
  description:
    "Group of parents of children and youths with developmental disabilities, guided by a common goal and mission to improve the quality of life of their children!",
};

export async function generateStaticParams() {
  const localeParams = i18n.locales.map((locale) => ({ lang: locale }));

  return localeParams;
}

export default async function Root({ children, params }: Props) {
  const dictionary = await getDictionary(params.lang);

  return (
    <html lang={params.lang}>
      <head></head>
      <body className={roboto.className}>
        <div className="container-lg main-wrapper p-0 d-flex flex-column min-vh-100">
          <Header dict={dictionary.navbar} />
          {children}
          <Footer dict={dictionary.footer} />
        </div>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" />
      </body>
    </html>
  );
}
