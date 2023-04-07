import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faInstagram,
  faFacebook,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import { faMobileScreenButton } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'react-i18next'

function Header() {
  const [lang, setLang] = useState(localStorage.getItem('lang') || 'MNE 🇲🇪')
  const [showToggler, setShowToggler] = useState(false)
  const { t, i18n } = useTranslation()

  useEffect(() => {
    if (lang) {
      i18n.changeLanguage(localStorage.getItem('i18nextLng') || 'mne')
    }
  }, [i18n, lang])

  function selectLanguage() {
    if (lang === 'MNE 🇲🇪') {
      setLang('EN 🇺🇸')
      i18n.changeLanguage('en')
      localStorage.setItem('lang', 'EN 🇺🇸')
    } else if (lang === 'EN 🇺🇸') {
      setLang('MNE 🇲🇪')
      i18n.changeLanguage('mne')
      localStorage.setItem('lang', 'MNE 🇲🇪')
    }
  }

  return (
    <header className="header__container">
      <div className="header">
        <a href="tel:+38269321684" className="header__link">
          +382 69 321 684
        </a>
        <FontAwesomeIcon icon={faMobileScreenButton} className="social-icon" />
        <div className="header__links-wrapper">
          <a
            href="https://www.instagram.com/nvo_rastimo_zajedno"
            target="_blank"
            className="header__link"
            rel="noopener noreferrer"
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
            className="header__link"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} className="social-icon" />
          </a>
          <a
            href="https://www.youtube.com/@udruzenjeroditelja5745"
            target="_blank"
            className="header__link"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faYoutube} className="social-icon" />
          </a>
        </div>
      </div>
      <nav className="header__navbar">
        <div className="navbar__toggle-wrapper">
          <img src={logo} alt="Rastimo Zajedno Logo" className="header__logo" />
          <div
            className={`navbar__toggle-btn ${showToggler ? 'open' : ''}`}
            onClick={() => setShowToggler((prev) => !prev)}
          >
            <div className="navbar__toggle-icon"></div>
          </div>
        </div>
        <div className={`navbar__links ${showToggler ? 'open' : ''}`}>
          <NavLink to="/" className="navbar__link">
            {t('navbar.home')}
          </NavLink>
          <NavLink to="/about" className="navbar__link">
            {t('navbar.about')}
          </NavLink>
          <NavLink to="/our-work" className="navbar__link">
            {t('navbar.work')}
          </NavLink>
          <NavLink to="/videos" className="navbar__link">
            {t('navbar.video')}
          </NavLink>
          <NavLink to="/contacts" className="navbar__link">
            {t('navbar.contacts')}
          </NavLink>
          <button
            onClick={selectLanguage}
            className="btn btn--transparent navbar__btn"
          >
            {lang}
          </button>
        </div>
      </nav>
    </header>
  )
}
export default Header
