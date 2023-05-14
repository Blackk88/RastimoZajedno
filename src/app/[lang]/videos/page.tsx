import { getDictionary } from "@/get-dictionary";
import { Locale, i18n } from "@/i18n-config";

interface Props {
  params: {
    lang: Locale;
  };
}

export default async function Videos({ params }: Props) {
  const dictionary = await getDictionary(params.lang);
  return (
    <div className="container-lg align-items-center d-flex flex-column mb-3">
      <h3 className="fw-bold mt-5 mb-3">{dictionary.videos.title2}</h3>
      <div className="col-12 col-lg-7">
        <iframe
          className="w-100"
          width="682"
          height="383"
          src="https://www.youtube.com/embed/WjWDl08wmOc"
          title='Projekat " Jednaki u različitostima"- NVO "Rastimo zajedno "'
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;  web-share"
          allowFullScreen={true}
        ></iframe>
      </div>

      <h3 className="fw-bold mt-5 mb-3">{dictionary.videos.title3}.</h3>
      <div className="col-12 col-lg-7">
        <iframe
          className="w-100"
          width="682"
          height="383"
          src="https://www.youtube.com/embed/NvzkE75quw4"
          title='NVO "Rastimo zajedno"- RAZMISLI PRIJE NEGO LI PARKIRAŠ!'
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>

      <h3 className="fw-bold mt-5 mb-3">{dictionary.videos.title1}</h3>
      <div className="col-12 col-lg-7">
        <iframe
          className="facebook-video"
          src="https://www.facebook.com/plugins/video.php?&href=https%3A%2F%2Fwww.facebook.com%2Fudruzenjerastimozajedno%2Fvideos%2F968775200139803%2F&show_text=false&t=0"
          width="682"
          height="250"
          allow="autoplay; clipboard-write; encrypted-media; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export function getStaticParams() {
  const localeParams = i18n.locales.map((locale) => ({ lang: locale }));

  return localeParams;
}
