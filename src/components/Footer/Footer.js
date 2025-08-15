import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Menu", path: "/menu" },
    { label: "Reservation", path: "/Reservation" },
    { label: "Order Online", path: "/order-online" },
    { label: "Login", path: "/login" },
  ];

  return (
    <footer className="footer">
      <div className="container footer-content">
        
        {/* Brand */}
        <div className="footer-section">
          <img src="./images/footer-logo.png" alt="Logo" className="footer-logo" />
          <p>Building great web experiences with React.</p>
        </div>

        {/* Navigation */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            {navItems.map((item, index) => (
              <li key={index}>
                <Link to={item.path}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact/Social */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Address</p>
          <p>Phone</p>
          <p>Email</p>
         
        </div>
        <div className="footer-section">
          <h3>Social Media Links</h3>
          <p>Linkedin</p>
          <p>Instagram</p>
          <p>github</p>
         
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© {year} MyLogo. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
