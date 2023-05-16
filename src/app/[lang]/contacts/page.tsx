import {
  faEnvelope,
  faLocationDot,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Locale, i18n } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";

import ContactForm from "@/app/components/ContactForm";

interface Props {
  params: {
    lang: Locale;
  };
}

export default async function Contacts({ params }: Props) {
  const dictionary = await getDictionary(params.lang);

  return (
    <div className="container-lg position-relative mb-5">
      <ContactForm dictionary={dictionary.contactForm} />

      <div className="mt-5 d-md-flex">
        <div className="text-center col-md-5">
          <h2 className="fs-3 text-center">{dictionary.footer.contacts}</h2>
          <p className="p-0 my-1 ">
            <FontAwesomeIcon icon={faLocationDot} className="contacts__icon" />{" "}
            Str. Novice Skerovica b.b, 81410-Danilovgrad, Montenegro
          </p>
          <p className="p-0 my-1 ">
            <FontAwesomeIcon icon={faPhoneVolume} className="contacts__icon" />{" "}
            +382 (0) 67 066 456
          </p>
          <p className="p-0 my-1 ">
            <FontAwesomeIcon icon={faEnvelope} className="contacts__icon" />{" "}
            udruzenjeroditeljadg@gmail.com
          </p>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10024.082422086083!2d19.102966816013158!3d42.55213639735738!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134dbdcc5d10eb15%3A0x668d38a090875924!2sNVO%20%22Rastimo%20zajedno%22!5e0!3m2!1sen!2s!4v1680187281724!5m2!1sen!2s"
          width="600"
          height="450"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="container-fluid mt-3 mt-md-0"
        ></iframe>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  const localeParams = i18n.locales.map((locale) => ({ lang: locale }));

  return localeParams;
}
