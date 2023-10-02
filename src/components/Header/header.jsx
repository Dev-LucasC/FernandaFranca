import React, { useEffect } from "react";
import "./header.css";
import logo from "./logo.svg";

const Header = () => {
  useEffect(() => {
    const hamburger = document.querySelector('.hamburger');
    if (hamburger) {
      hamburger.addEventListener('click', function() {
        const menu = document.querySelector('.menu');
        if (menu) {
          menu.style.visibility = menu.style.visibility === 'hidden' ? 'visible' : 'hidden';
        }
      });
    }
  }, []);

  return (
    <main>
      <header className="header-container">
        <div className="header-img">
          <a href="#home" target="_blank" rel="noopener noreferrer">
            <img src={logo} alt="Logo Forbose" />
          </a>
        </div>
        <div className="header-menu">
          <button class="hamburger">☰</button>
          <nav class="menu">
            <img src={logo} alt="Logo Forbose" />
            <a href="#home">HOME</a>
            <a href="#services">SERVICES</a>
            <a href="#more">MORE</a>
            <a href="#contact-me">CONTACT-ME</a>
          </nav>
        </div>
      </header>
    </main>
  );
};

export default Header;
