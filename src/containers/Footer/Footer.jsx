import { motion } from "framer-motion";
import React from "react";
import { images } from "../../constants";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <motion.div
          className="footer-top-left"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img src={images.logo} alt="Logo" className="w-1/6" />
          <p>
            I'm a FullStack Developer from Karnataka, India, with 2 years of
            experience in Frontend, Backend, API development, and DevOps. I
            excel at creating scalable web applications and delivering
            full-cycle software solutions.
          </p>
        </motion.div>
        <motion.div
          className="footer-top-right"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 20 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="footer-email-input">
            <img src={images.email} alt="Email Icon" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <motion.div
            className="footer-subscribe"
            whileInView={{ scale: 1, opacity: 1 }}
            initial={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            Subscribe
          </motion.div>
        </motion.div>
      </div>
      <hr />
      <motion.div
        className="footer-bottom"
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <p className="footer-bottom-left">
          ©2024 Ladle Patel. All rights reserved.
        </p>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Footer;
