import React, { useState } from "react";
import { images } from "../../constants";
import close from "./close.svg";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false); // State to control menu visibility

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen); // Toggle the nav menu
  };

  return (
    <div className="navbar">
      <img src={images.logo} alt="logo" className="logo" />

      {/* Mobile menu open icon */}
      <img
        src={images.panel}
        alt="menu-open"
        className="nav-mob-open"
        onClick={toggleNav} // Open the menu on click
      />

      {/* Navigation menu with inline styles for sliding effect */}
      <ul
        className="nav-menu"
        style={{
          right: isNavOpen ? '0' : '-300px', // Slide in or out
          transition: 'right 0.3s ease', // Smooth transition
        }}
      >
        {/* Close button for mobile navigation */}
        <img
          className="nav-mob-close"
          src={close}
          alt="close"
          onClick={toggleNav} // Close the menu on click
        />

        <li>
          <a className="anchor-link" href="#home">
            <p>Home</p>
          </a>
        </li>
        <li>
          <a className="anchor-link" href="#about">
            <p>About Me</p>
          </a>
        </li>
        <li>
          <a className="anchor-link" href="#services">
            <p>Services</p>
          </a>
        </li>
        <li>
          <a className="anchor-link" href="#work">
            <p>Portfolio</p>
          </a>
        </li>
        <li>
          <a className="anchor-link" href="#contact">
            <p>Contact</p>
          </a>
        </li>
      </ul>

      <div className="nav-connect">
        <a className="anchor-link" href="#contact">
          Connect With Me
        </a>
      </div>
    </div>
  );
};

export default Navbar;
