import { getDictionary } from "@/get-dictionary";
import { Locale, i18n } from "@/i18n-config";

interface Props {
  params: {
    lang: Locale;
  };
}

export default async function About({ params }: Props) {
  const dictionary = await getDictionary(params.lang);

  return (
    <div className="container-lg mt-3">
      <h1 className="text-center fw-bold">{dictionary.about.title}</h1>
      <h2 className="text-center fst-italic mt-5 mb-3">
        {dictionary.about.whoWeAre.title}
      </h2>
      <p>{dictionary.about.whoWeAre.text1}</p>
      <p>{dictionary.about.whoWeAre.text2}</p>
      <h2 className="text-center fst-italic mt-5">
        {dictionary.about.ourGoals.title}
      </h2>
      <ul>
        <li>{dictionary.about.ourGoals.text1}</li>
        <li>{dictionary.about.ourGoals.text2}</li>
        <li>{dictionary.about.ourGoals.text3}</li>
        <li>{dictionary.about.ourGoals.text4}</li>
        <li>{dictionary.about.ourGoals.text5}</li>
        <li>{dictionary.about.ourGoals.text6}</li>
      </ul>
      <h2 className="text-center fst-italic mt-5 mb-3">
        {dictionary.about.activities.title}
      </h2>
      <ul>
        <li>{dictionary.about.activities.text1}</li>
        <li>{dictionary.about.activities.text2}</li>
        <li>{dictionary.about.activities.text3}</li>
        <li>{dictionary.about.activities.text4}</li>
        <li>{dictionary.about.activities.text5}</li>
        <li>{dictionary.about.activities.text6}</li>
        <li>{dictionary.about.activities.text7}</li>
        <li>{dictionary.about.activities.text8}</li>
        <li>{dictionary.about.activities.text9}</li>
        <li>{dictionary.about.activities.text10}</li>
      </ul>
      <h2 className="text-center fst-italic mt-5 mb-3">
        {dictionary.about.trainings.title}
      </h2>
      <ul>
        <li>{dictionary.about.trainings.text1}</li>
        <li>{dictionary.about.trainings.text2}</li>
        <li>{dictionary.about.trainings.text3}</li>
        <li>{dictionary.about.trainings.text4}</li>
        <li>{dictionary.about.trainings.text5}</li>
      </ul>
      <div className="mt-5 mb-3">
        <p>{dictionary.about.text1}</p>
        <p>{dictionary.about.text2}</p>
        <p>{dictionary.about.text3}</p>
        <p>{dictionary.about.text4}</p>
      </div>
    </div>
  );
}

export async function getStaticParams() {
  const localeParams = i18n.locales.map((locale) => ({ lang: locale }));

  return localeParams;
}
