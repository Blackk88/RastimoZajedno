import {
  faEnvelope,
  faLocationDot,
  faPhoneVolume,
} from '@fortawesome/free-solid-svg-icons'
import {
  faInstagram,
  faFacebook,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTranslation } from 'react-i18next'

function Contacts() {
  const { t } = useTranslation()
  return (
    <div className="contacts">
      <h2 className="text__title">{t('footer.contacts')}</h2>
      <div className="contacts__list">
        <p className="contacts__text">
          <FontAwesomeIcon icon={faLocationDot} className="contacts__icon" />
          Str. Novice Skerovica b.b, 81410-Danilovgrad, Montenegro
        </p>
        <p className="contacts__text">
          <FontAwesomeIcon icon={faPhoneVolume} className="contacts__icon" />
          +382 (0) 67 066 456
        </p>
        <p className="contacts__text">
          <FontAwesomeIcon icon={faEnvelope} className="contacts__icon" />
          udruzenjeroditeljadg@gmail.com
        </p>
      </div>
      <div className="map__container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10024.082422086083!2d19.102966816013158!3d42.55213639735738!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134dbdcc5d10eb15%3A0x668d38a090875924!2sNVO%20%22Rastimo%20zajedno%22!5e0!3m2!1sen!2s!4v1680187281724!5m2!1sen!2s"
          width="600"
          height="450"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="contacts__map"
        ></iframe>
      </div>
      <h2 className="text__title">{t('socialMedia')}</h2>
      <div className="contacts__social">
        <a
          href="https://www.instagram.com/nvo_rastimo_zajedno"
          target="_blank"
          className="contacts__social-icon"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          href="https://www.facebook.com/RastimoZajednoDG"
          target="_blank"
          className="contacts__social-icon"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a
          href="https://www.youtube.com/@udruzenjeroditelja5745"
          target="_blank"
          className="contacts__social-icon"
        >
          <FontAwesomeIcon icon={faYoutube} />
        </a>
      </div>
    </div>
  )
}
export default Contacts
