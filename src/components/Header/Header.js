import React, { useState } from "react";
import "./header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Navigation items array
  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Menu", path: "/menu" },
    { label: "Reservation", path: "/reservation" },
    { label: "Order Online", path: "/order-online" },
    { label: "Login", path: "/login" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
const closeMenu = () => setIsOpen(false);
  return (
    <header className="header">
      <div className="container header-content">
        {/* Logo */}
        <div className="logo"><img src="./images/Logo.svg" alt="Logo" /></div>

        {/* Navigation */}
        <nav className={`nav ${isOpen ? "nav-open" : ""}`}>
          <button className="close-btn" onClick={closeMenu}>
            ✕
          </button>
          {navItems.map((item, index) => (
            <a key={index} href={item.path}>
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button className="menu-btn" onClick={toggleMenu}>
          ☰
        </button>
      </div>

      {/* Overlay for mobile */}
      {isOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </header>
  );
};

export default Header;
