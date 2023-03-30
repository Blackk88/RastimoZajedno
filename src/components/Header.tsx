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

  function selectLanguage() {
    if (lang === 'MNE 🇲🇪') {
      setLang('EN 🇺🇸')
      i18n.changeLanguage('en')
    } else if (lang === 'EN 🇺🇸') {
      setLang('MNE 🇲🇪')
      i18n.changeLanguage('mne')
    }
    localStorage.setItem('lang', lang)
  }

  console.log(i18n.language)
  return (
    <div className="header__container">
      <div className="header">
        <a href="tel:+38267066456" className="header__link">
          +382 67 066456
        </a>
        <FontAwesomeIcon icon={faMobileScreenButton} className="social-icon" />
        <div className="header__links-wrapper">
          <a
            href="https://www.instagram.com/nvo_rastimo_zajedno"
            target="_blank"
            className="header__link"
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
          >
            <FontAwesomeIcon icon={faFacebook} className="social-icon" />
          </a>
          <a
            href="https://www.youtube.com/@udruzenjeroditelja5745"
            target="_blank"
            className="header__link"
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
            Home
          </NavLink>
          <NavLink to="/about" className="navbar__link">
            About Us
          </NavLink>
          <NavLink to="/our-work" className="navbar__link">
            Our Work
          </NavLink>
          <NavLink to="/videos" className="navbar__link">
            Videos
          </NavLink>
          <NavLink to="/contacts" className="navbar__link">
            Contacts
          </NavLink>
          <button
            onClick={selectLanguage}
            className="btn btn--transparent navbar__btn"
          >
            {lang}
          </button>
        </div>
      </nav>
    </div>
  )
}
export default Header
