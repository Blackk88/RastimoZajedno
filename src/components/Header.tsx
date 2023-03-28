import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faInstagram,
  faFacebook,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import { faMobileScreenButton } from '@fortawesome/free-solid-svg-icons'

function Header() {
  const [lang, setLang] = useState(localStorage.getItem('lang') || 'MNE 🇲🇪')
  const [isIconHover, setIsIconHover] = useState({
    facebook: false,
    instagram: false,
    youtube: false,
  })
  const [showToggler, setShowToggler] = useState(false)

  function selectLanguage() {
    if (lang === 'MNE 🇲🇪') {
      setLang('EN 🇺🇸')
    } else if (lang === 'EN 🇺🇸') {
      setLang('MNE 🇲🇪')
    }
    localStorage.setItem('lang', lang)
  }

  function handleToggle() {
    setShowToggler((prevToggle) => !prevToggle)
  }

  function handleIconMouseOver(e: React.MouseEvent<SVGSVGElement>) {
    switch (e.currentTarget.dataset.icon) {
      case 'instagram':
        setIsIconHover({ ...isIconHover, instagram: true })
        break
      case 'facebook':
        setIsIconHover({ ...isIconHover, facebook: true })
        break
      case 'youtube':
        setIsIconHover({ ...isIconHover, youtube: true })
        break
    }
  }

  function handleIconMouseOut(e: React.MouseEvent<SVGSVGElement>) {
    switch (e.currentTarget.dataset.icon) {
      case 'instagram':
        setIsIconHover({ ...isIconHover, instagram: false })
        break
      case 'facebook':
        setIsIconHover({ ...isIconHover, facebook: false })
        break
      case 'youtube':
        setIsIconHover({ ...isIconHover, youtube: false })
        break
    }
  }

  return (
    <div className="header__container">
      <div className="header">
        <a href="tel:+382 67 066456" className="header__link">
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
              bounce={isIconHover.instagram}
              onMouseOver={(e: React.MouseEvent<SVGSVGElement>) =>
                handleIconMouseOver(e)
              }
              onMouseLeave={(e: React.MouseEvent<SVGSVGElement>) =>
                handleIconMouseOut(e)
              }
            />
          </a>
          <a
            href="https://www.facebook.com/RastimoZajednoDG"
            target="_blank"
            className="header__link"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              className="social-icon"
              bounce={isIconHover.facebook}
              onMouseOver={handleIconMouseOver}
              onMouseLeave={(e: React.MouseEvent<SVGSVGElement>) =>
                handleIconMouseOut(e)
              }
            />
          </a>
          <a
            href="https://www.youtube.com/@udruzenjeroditelja5745"
            target="_blank"
            className="header__link"
          >
            <FontAwesomeIcon
              icon={faYoutube}
              className="social-icon"
              bounce={isIconHover.youtube}
              onMouseOver={handleIconMouseOver}
              onMouseLeave={(e: React.MouseEvent<SVGSVGElement>) =>
                handleIconMouseOut(e)
              }
            />
          </a>
        </div>
      </div>
      <nav className="navbar">
        <div className="navbar__toggle-wrapper">
          <img src={logo} alt="Rastimo Zajedno Logo" className="header__logo" />
          <div
            className={`navbar__toggle-btn ${showToggler ? 'open' : ''}`}
            onClick={handleToggle}
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
          <NavLink to="/volunteering" className="navbar__link">
            Help Us
          </NavLink>
          <NavLink to="/gallery" className="navbar__link">
            Gallery
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
