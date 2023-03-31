import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faInstagram,
  faFacebook,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import logo from '../assets/logo.png'
import { useTranslation } from 'react-i18next'

function Footer() {
  const { t } = useTranslation()

  return (
    <div className="footer">
      <img src={logo} alt="" className="footer__logo" />

      <div className="footer__links-wrapper">
        <a
          href="https://www.instagram.com/nvo_rastimo_zajedno"
          target="_blank"
          className="footer__link"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            className="social-icon"
            name="instagram"
          />
        </a>
        <a
          href="https://www.facebook.com/RastimoZajednoDG"
          target="_blank"
          className="footer__link"
        >
          <FontAwesomeIcon icon={faFacebook} className="social-icon" />
        </a>
        <a
          href="https://www.youtube.com/@udruzenjeroditelja5745"
          target="_blank"
          className="footer__link"
        >
          <FontAwesomeIcon icon={faYoutube} className="social-icon" />
        </a>
      </div>
      <div className="footer__contacts">
        <h4 className="footer__title">{t('footer.contacts')}</h4>
        <a className="footer__link" href="tel:+38267066456">
          {t('footer.phone')} +382 67 066456
        </a>
        <a
          className="footer__link"
          href="mailto: udruzenjeroditeljadg@gmail.com"
        >
          {t('footer.email')} udruzenjeroditeljadg@gmail.com
        </a>
        <a
          className="footer__link"
          href="https://goo.gl/maps/oMFfyL1mDhnMz8AL7"
          target="_blank"
        >
          {t('footer.address')} Str. Novice Skerovica b.b, 81410-Danilovgrad,
          Montenegro
        </a>
      </div>
    </div>
  )
}
export default Footer
