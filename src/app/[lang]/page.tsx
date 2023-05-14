import Image from "next/image";

import { Locale, i18n } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";
import ModalDonate from "./client";

import promo from "@/assets/promo.jpg";

interface Props {
  children: React.ReactNode;
  params: {
    lang: Locale;
  };
}

export default async function Home({ children, params }: Props) {
  const dictionary = await getDictionary(params.lang);

  return (
    <main className="mt-2">
      <Image
        src={promo}
        alt="Group of children with stage and a lot of balloons."
        width={1000}
        height={800}
        className="w-100 object-fit-contain h-100 rounded shadow"
        placeholder="blur"
      />
      <h1 className="text__promo px-3 text-center my-5 fw-bold text-shadow">
        {dictionary.home.promo}
      </h1>

      <div className="px-3">
        <div className="row justify-content-evenly px-3 gap-4">
          <div className="my-4 shadow col-12 col-md col-xl-5 rounded-4 px-3">
            <h3 className="text-center my-3 fst-italic">
              {dictionary.home.mainGoals}
            </h3>
            <p>{dictionary.home.mainGoals1}</p>
            <p>{dictionary.home.mainGoals2}</p>
            <p>{dictionary.home.mainGoals3}</p>
          </div>
          <div className="my-4 shadow col-12 col-md col-xl-5 rounded-4 px-3">
            <h3 className="text-center my-3 fst-italic">
              {dictionary.home.activities.title}
            </h3>
            <p>{dictionary.home.activities.text1}</p>
            <p>{dictionary.home.activities.text2}</p>
            <p>{dictionary.home.activities.text3}</p>
          </div>
        </div>
      </div>

      <ModalDonate dictionary={dictionary.donations} />
    </main>
  );
}

export async function generateStaticParams() {
  const localeParams = i18n.locales.map((locale) => ({ lang: locale }));

  return localeParams;
}
