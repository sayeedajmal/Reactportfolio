import React from 'react';
import { images } from "../../constants";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img
            src={images.logo}
            alt="Logo"
            className='w-1/6'
          />
          <p>I am a Fullstack developer from the India with 2 years of experience in differene domains like frontend, backend, Api, DevOps.</p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img
              src={images.email}
              alt="Email Icon"
            />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">©2024 Sayeed Ahmed. All rights reserved.</p>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
