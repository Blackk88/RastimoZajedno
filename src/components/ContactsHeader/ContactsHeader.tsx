import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { CONTACTS } from '../../main'
import {
  faInstagram,
  faFacebook,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import { faMobileScreenButton } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import mne from '../../assets/montenegro.png'
import en from '../../assets/en.png'
import instagram from '../../assets/socials/instagram.svg'
import facebook from '../../assets/socials/facebook.svg'
import youtube from '../../assets/socials/youtube.svg'

import './contacts-header.scss'

function ContactsHeader() {
  const { i18n } = useTranslation()
  const [lang, setLang] = useState(localStorage.getItem('lang') || 'mne')

  function selectLanguage() {
    switch (lang) {
      case 'en':
        toggleLanguages('mne')
        break
      case 'mne':
        toggleLanguages('en')
        break
      default:
        toggleLanguages('en')
    }
  }

  function toggleLanguages(language: string) {
    setLang(language)
    i18n.changeLanguage(language)
    localStorage.setItem('lang', language)
  }

  return (
    <div className="header-contacts__container">
      <a href="tel:+38269321684" className="header-contacts__link">
        <FontAwesomeIcon
          icon={faMobileScreenButton}
          id="phone-icon"
          className="header-contacts__link--phone"
        />
        +382 (0) 69 321 684
      </a>
      <div className="header-contacts__social-wrapper">
        <a
          href={CONTACTS.instagram}
          target="_blank"
          className="header-contacts__link"
          rel="noopener noreferrer"
        >
          {/* <img
            src={instagram}
            alt=""
            className="header-contacts__link--social"
          /> */}
          <FontAwesomeIcon
            icon={faInstagram}
            className=" header-contacts__link--social"
            id="instagram-icon"
            name="instagram"
          />
        </a>
        <a
          href={CONTACTS.facebook}
          target="_blank"
          className="header-contacts__link "
          rel="noopener noreferrer"
        >
          {/* <img
            src={facebook}
            alt=""
            className="header-contacts__link--social"
          /> */}
          <FontAwesomeIcon
            icon={faFacebook}
            className="header-contacts__link--social"
          />
        </a>
        <a
          href={CONTACTS.youTube}
          target="_blank"
          className="header-contacts__link"
          rel="noopener noreferrer"
        >
          {/* <img src={youtube} alt="" className="header-contacts__link--social" /> */}
          <FontAwesomeIcon
            icon={faYoutube}
            className="header-contacts__link--social"
          />
        </a>
      </div>
      <img
        onClick={selectLanguage}
        src={lang === 'en' ? en : mne}
        alt="Toggle language icons"
        title="Select Language"
        className="header-contacts__language-icon"
      />
    </div>
  )
}
export default ContactsHeader
