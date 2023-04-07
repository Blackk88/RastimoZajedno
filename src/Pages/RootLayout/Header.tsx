import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

//components
import ContactsHeader from '../../components/ContactsHeader/ContactsHeader'

// assets
import logo from '../../assets/logo.png'

function Header() {
  const [lang, setLang] = useState(localStorage.getItem('lang') || 'mne')
  const [showToggler, setShowToggler] = useState(false)
  const { t, i18n } = useTranslation()

  useEffect(() => {
    if (lang) {
      i18n.changeLanguage(localStorage.getItem('i18nextLng') || 'mne')
    }
  }, [i18n, lang])

  return (
    <header className="header__container">
      <ContactsHeader />
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
        </div>
      </nav>
    </header>
  )
}
export default Header
