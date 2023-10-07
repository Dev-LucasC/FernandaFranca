import React, { useState } from "react";
import "./header.css";
import logo from "./logo.svg";

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <main>
      <header className={`header-container ${menuVisible ? 'menu-visible' : ''}`}>
        <div className="header-img">
          <a href="#home" target="_blank" rel="noopener noreferrer">
            <img src={logo} alt="Logo Forbose" />
          </a>
        </div>
        <div className="header-menu">
          <button className="hamburger" onClick={toggleMenu}>☰</button>
          <nav className="menu" >
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
