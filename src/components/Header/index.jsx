import React from 'react'
import './style.css'
import Navbar from '../Nav'

const Header = () => {
  return (
    // Header container
    <header className='header'>
      {/* Logo Image */}
      <img src='images/Logo.svg' alt='logo' className='logo' />

      {/* Navigation Links */}
      <Navbar />
    </header>
  )
}

export default Header
