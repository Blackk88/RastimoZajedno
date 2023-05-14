import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import linkClasses from "@/app/styles/links.module.css";
import classes from "./footer.module.css";
import logo from "@/assets/logo.png";

interface Dictionary {
  contacts: string;
  phone: string;
  email: string;
  address: string;
}

export default function Footer({ dict }: { dict: Dictionary }) {
  return (
    <footer className="mt-auto d-flex flex-column flex-md-row-reverse align-items-center justify-content-between bg-black p-3 rounded-top">
      <Image src={logo} alt="Rastimo Zajedno Logo" width={100} height={100} />

      <div className="d-flex gap-3 my-2">
        <a
          href="https://www.instagram.com/nvo_rastimo_zajedno"
          target="_blank"
          className={linkClasses.link + " " + linkClasses.linkSocial}
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          href="https://www.facebook.com/RastimoZajednoDG"
          target="_blank"
          className={linkClasses.link + " " + linkClasses.linkSocial}
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a
          href="https://www.youtube.com/@udruzenjeroditelja5745"
          target="_blank"
          className={linkClasses.link + " " + linkClasses.linkSocial}
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faYoutube} />
        </a>
      </div>
      <div className="text-center text-md-start">
        <h4 className="text-white">{dict.contacts}</h4>
        <div className="">
          <span className="text-white">{dict.phone} </span>
          <a
            className={"text-decoration-none text-warning " + classes.link}
            href="tel:+38269321684"
          >
            +382 69 321684
          </a>
        </div>
        <div>
          <span className="text-white">{dict.email} </span>
          <a
            className={"text-decoration-none text-warning " + classes.link}
            href="mailto: udruzenjeroditeljadg@gmail.com"
          >
            udruzenjeroditeljadg@gmail.com
          </a>
        </div>
        <div className="">
          <span className="text-white">{dict.address} </span>
          <a
            className={"text-decoration-none text-warning " + classes.link}
            href="https://goo.gl/maps/oMFfyL1mDhnMz8AL7"
            target="_blank"
            rel="noopener noreferrer"
          >
            Str. Novice Skerovica b.b,{" "}
            <span className="d-block d-md-inline">
              81410-Danilovgrad, Montenegro
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
