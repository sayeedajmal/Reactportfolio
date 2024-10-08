import React, { useState } from "react";
import { images } from "../../constants";
import close from "./close.svg";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="navbar">
      <a
        onClick={toggleNav}
        href="https://sayeedthedev.web.app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={images.logo} alt="logo" className="logo" />
      </a>

      <img
        src={images.panel}
        alt="menu-open"
        className="nav-mob-open"
        onClick={toggleNav}
      />
      <ul
        className="nav-menu"
        style={{
          right: isNavOpen ? "0" : "-300px",
          transition: "right 0.3s ease",
        }}
      >
        <img
          className="nav-mob-close"
          src={close}
          alt="close"
          onClick={toggleNav}
        />

        <li>
          <a className="anchor-link" onClick={toggleNav} href="#home">
            <p>Home</p>
          </a>
        </li>
        <li>
          <a className="anchor-link" onClick={toggleNav} href="#about">
            <p>About Me</p>
          </a>
        </li>
        <li>
          <a className="anchor-link" onClick={toggleNav} href="#services">
            <p>Services</p>
          </a>
        </li>
        <li>
          <a className="anchor-link" onClick={toggleNav} href="#work">
            <p>Portfolio</p>
          </a>
        </li>
        <li>
          <a className="anchor-link" onClick={toggleNav} href="#contact">
            <p>Contact</p>
          </a>
        </li>
      </ul>

      <div className="nav-connect">
        <a className="anchor-link" onClick={toggleNav} href="#contact">
          Connect With Me
        </a>
      </div>
    </div>
  );
};

export default Navbar;
