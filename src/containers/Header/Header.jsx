import React from "react";
import { images } from "../../constants";

const Header = () => {
  return (
    <div id="home" className="hero">
      <img src={images.logo} alt="profile" className="profile-img" />
      <h1>
        <span>I'm Sayeed Ahmed,</span> FullStack developer based in India.
      </h1>
      <p>
        I am a fullstack developer from Karnataka, India with 2 years of
        experience in domains like Frontend, Backend, API, DevOps.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <a className="anchor-link" href="#contact">Connect with me</a>
        </div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Header;
