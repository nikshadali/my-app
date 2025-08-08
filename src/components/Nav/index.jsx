import React, { useState } from 'react'
import './style.css'

const links = ["Home", "About", "Menu", "Reservation", "Order Online", "Login"]

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  // Toggle menu visibility
  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <nav className="nav">
      {/* Hamburger Icon */}
      <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
        ☰
      </button>

      {/* Navigation Links */}
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {links.map((link) => (
          <li key={link}>
            <a href={`#${link.toLowerCase().replace(' ', '-')}`} onClick={() => setMenuOpen(false)}>
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
