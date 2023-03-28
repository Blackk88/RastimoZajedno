import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

function Header() {
  const [lang, setLang] = useState(localStorage.getItem('lang') || 'MNE 🇲🇪')

  function selectLanguage() {
    console.log(lang)
    if (lang === 'MNE 🇲🇪') {
      setLang('EN 🇺🇸')
    } else if (lang === 'EN 🇺🇸') {
      setLang('MNE 🇲🇪')
    }
    localStorage.setItem('lang', lang)
  }

  return (
    <nav className="navbar">
      <img src={logo} alt="Rastimo Zajedno Logo" className="logo" />
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
      <button onClick={selectLanguage}>{lang}</button>
    </nav>
  )
}
export default Header
