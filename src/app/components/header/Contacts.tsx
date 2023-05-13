"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { faMobileScreenButton } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  getLanguageFlag,
  toggleLanguageHandler,
} from "@/app/helpers/toggle-language";

import classes from "./contacts.module.css";

export const CONTACTS = {
  instagram: "https://www.instagram.com/nvo_rastimo_zajedno",
  facebook: "https://www.facebook.com/RastimoZajednoDG",
  youTube: "https://www.youtube.com/@udruzenjeroditelja5745",
  phone: "+38269321684",
  address: "Str. Novice Skerovica b.b, 81410-Danilovgrad",
  email: "udruzenjeroditeljadg@gmail.com",
};

export default function Contacts() {
  const pathname = usePathname();
  const currentLanguage = pathname.split("/")[1];
  const [language, setLanguage] = useState(currentLanguage);

  useEffect(() => {
    setLanguage(currentLanguage);
  }, [currentLanguage]);

  return (
    <div className="d-flex bg-black align-items-center justify-content-between py-2 px-3">
      <a
        href="tel:+38269321684"
        className={
          "d-flex gap-1 align-items-center text-decoration-none" +
          " " +
          classes.link
        }
      >
        <FontAwesomeIcon
          icon={faMobileScreenButton}
          className={classes.phoneIcon}
        />
        +382 069 321 684
      </a>
      <div className="d-flex gap-3">
        <a
          href={CONTACTS.instagram}
          target="_blank"
          className={classes.link + " " + classes.linkSocial}
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            id="instagram-icon"
            name="instagram"
          />
        </a>
        <a
          href={CONTACTS.facebook}
          target="_blank"
          className={classes.link + " " + classes.linkSocial}
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a
          href={CONTACTS.youTube}
          target="_blank"
          className={classes.link + " " + classes.linkSocial}
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faYoutube}
            className="header-contacts__link--social"
          />
        </a>
      </div>
      <Link href={toggleLanguageHandler({ pathname, language: language })}>
        {getLanguageFlag(language)}
      </Link>
    </div>
  );
}
