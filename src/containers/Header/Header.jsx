import React from "react";
import { images } from "../../constants";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div id="home" className="hero">
      <motion.img
        src={images.logo}
        alt="profile"
        className="profile-img"
        whileInView={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />

      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <span>I'm Ladle Patel,</span> A Data Scientist based in KSA.
      </motion.h1>

      <motion.p
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        I am a Data Scientist from Riyad, KSA with 12 years of
        experience in domains like OpenAi, Machine Learning, Data Science, Artificial Intelligence.
      </motion.p>

      <div className="hero-action">
        <motion.div
          className="hero-connect"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          <a className="anchor-link" href="#contact">Connect with me</a>
        </motion.div>

        <motion.div
          className="hero-resume"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 50 }}
          transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
        >
          My resume
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
