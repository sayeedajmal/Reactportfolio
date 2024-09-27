import { motion } from "framer-motion";
import { React, useEffect, useState } from "react";
import { ReactTyped } from "react-typed";
import { images } from "../../constants";
import { urlFor } from "../../image_builder";
import sanityClient from '../../SanityClient';
import close from "./close.svg";


const Header = () => {
  const [resume, setResume] = useState(null);
  const [isPopupVisible, setPopupVisible] = useState(false);

  useEffect(() => {
    const fetchAboutImage = async () => {
      const data = await sanityClient.fetch('*[_type == "resume"]{image{asset->{_id, url}}}');
      setResume(data[0]?.image.asset);
    };
    fetchAboutImage();
  }, []);

  const showPopup = () => {
    setPopupVisible(true);
    document.body.style.overflow = "hidden";
  };

  const closePopup = () => {
    setPopupVisible(false);
    document.body.style.overflow = "auto";
  };
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
        <span>I'm Ladle Patel, </span>
        <ReactTyped
          strings={["A Data Scientist", "An AI Advisor", "An AI Strategist", "A ML Expert", "A Tech Leader"]}
          typeSpeed={65}
          backSpeed={60}
          style={{
            WebkitTextFillColor: "white", filter: "drop-shadow(2px 4px 6px black)",
            position: "relative",
            WebkitTextStrokeWidth: "1px",
          }}
          loop />
      </motion.h1>

      <motion.p
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        Have over 12 years of experience in AI strategy, Data Science,
        and Machine Learning. Skilled in AI/ML tools, Generative AI,
        and large-scale data solutions, I’m currently working as a
        Senior AI Advisor at Arab National Bank, leading AI transformation initiatives.
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

        <motion.button
          className="hero-resume"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 20 }}
          transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
          onClick={showPopup}
        >
          My resume
        </motion.button>

        {isPopupVisible && (
          <div className="popup" id="popup" style={{ display: "flex" }}>
            <div id="close_Panel">
              <img
                id="close_image"
                style={{ height: "3rem" }}
                onClick={closePopup}
                src={close}
                alt="Close"
              />
            </div>
            <div className="popup-content">
              <img className="popup-image" src={urlFor(resume).url()} alt="Resume" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
