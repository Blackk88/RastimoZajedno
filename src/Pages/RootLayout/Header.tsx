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
          <NavLink to="/">
            <img
              src={logo}
              alt="Rastimo Zajedno Logo"
              className="header__logo"
            />
          </NavLink>
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
          <div className="dropdown">
            <button
              className="navbar__link dropdown-toggle"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {t('navbar.about')}
            </button>

            <ul className="dropdown-menu header__dropdown-menu">
              <li>
                <NavLink
                  className="dropdown-item header__dropdown-item"
                  to="/about"
                >
                  {t('navbar.about')}
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="dropdown-item header__dropdown-item"
                  to="/our-team"
                >
                  {t('navbar.team')}
                </NavLink>
              </li>
            </ul>
          </div>
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
