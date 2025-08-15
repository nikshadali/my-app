import React, { useEffect, useState } from "react";
import "./header.css";
import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../../contexts/cartContext";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {cart} = useCart()
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  // Navigation items array
  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Menu", path: "/menu" },
    { label: "Reservation", path: "/reservation" },
    {
      label: (
        <div className="cart-icon-wrapper">
          <FaShoppingCart size={20} />
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </div>
      ),
      path: "/cart",
    },
    { label: "Login", path: "/login" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
const closeMenu = () => setIsOpen(false);

 // Disable scroll when nav is open
 useEffect(() => {
  let scrollY = 0;
  if (isOpen) {
    scrollY = window.scrollY;
    document.body.style.top = `-${scrollY}px`;
    document.body.classList.add("body-no-scroll");
  } else {
    document.body.classList.remove("body-no-scroll");
    const top = document.body.style.top;
    window.scrollTo(0, parseInt(top || "0") * -1);
    document.body.style.top = "";
  }

  return () => {
    document.body.classList.remove("body-no-scroll");
    document.body.style.top = "";
  };
}, [isOpen]);


  return (
    <header className="header">
      <div className="container header-content">
        {/* Logo */}
        <div className="logo"><img src="./images/Logo.svg" alt="Logo" /></div>

        {/* Navigation */}
        <nav className={`nav ${isOpen ? "nav-open" : ""}`}>
          <button aria-label="On Click" className="close-btn" onClick={closeMenu}>
            ✕
          </button>
          {navItems.map((item, index) => (
            <NavLink 
            key={index} 
            to={item.path}
            className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button aria-label="On Click" className="menu-btn" onClick={toggleMenu}>
          ☰
        </button>
      </div>

      {/* Overlay for mobile */}
      {isOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </header>
  );
};

export default Header;
