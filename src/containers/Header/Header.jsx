import { motion } from "framer-motion";
import { React, useEffect, useState } from "react";
import { IoClose } from "react-icons/io5"; // Importing the close icon
import { ReactTyped } from "react-typed";
import { images } from "../../constants";
import { urlFor } from "../../image_builder";
import sanityClient from "../../SanityClient";

const Header = () => {
  const [resume, setResume] = useState(null);
  const [isPopupVisible, setPopupVisible] = useState(false);

  useEffect(() => {
    const fetchAboutImage = async () => {
      const data = await sanityClient.fetch(
        '*[_type == "resume"]{image{asset->{_id, url}}}'
      );
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
        <span className="block">I'm Sayeed Ahmed, </span>
        <ReactTyped
          strings={[
            "A Java Developer",
            "A FullStack Developer",
            "A GenAi Developer",
            "An Android Developer",
          ]}
          typeSpeed={55}
          className="text-3xl md:text-6xl"
          backSpeed={50}
          style={{
            WebkitTextFillColor: "white",
            filter: "drop-shadow(2px 4px 6px black)",
          }}
          loop
        />
      </motion.h1>

      <motion.p
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        I'm a FullStack Developer from Karnataka, India, with 2 years of
        experience in Frontend, Backend, API development, and DevOps. I excel at
        creating scalable web applications and delivering full-cycle software
        solutions.
      </motion.p>

      <div className="hero-action">
        <motion.div
          className="hero-connect"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          <a className="anchor-link" href="#contact">
            Connect with me
          </a>
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
            <div id="close_Panel"></div>
            <div className="popup-content">
              <IoClose
                className="absolute border-2 rounded-full top-3 right-3 text-gray-600 cursor-pointer"
                size={24}
                onClick={closePopup}
              />
              <img
                className="popup-image"
                src={urlFor(resume).url()}
                alt="Resume"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
