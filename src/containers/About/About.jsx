import React from "react";
import { images } from "../../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="title-box">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -50 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          About me
        </motion.h1>
        <motion.img
          src={images.bg}
          alt=""
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>

      <div className="about-sections">
        <motion.div
          className="about-left"
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img
            src={images.profile}
            alt="profile"
            className="h-full w-[50vw]"
          />
        </motion.div>

        <motion.div
          className="about-right"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 50 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="about-para">
            <p>
              I am an experienced Fullstack Developer with over a decade of
              professional expertise in the field. Throughout my career, I have
              had the privilege of collaborating with prestigious organizations,
              contributing to their success and growth.
            </p>
            <p>
              My passion for Fullstack development is not only reflected in my
              extensive experience but also in the enthusiasm and dedication I
              bring to each project.
            </p>
          </div>
          <div className="about-skills">
            <motion.div
              className="about-skill"
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <p>Java SE </p>
              <hr style={{ width: "70%" }} />
            </motion.div>
            <motion.div
              className="about-skill"
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <p>Spring </p>
              <hr style={{ width: "80%" }} />
            </motion.div>
            <motion.div
              className="about-skill"
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <p>RestApi </p>
              <hr style={{ width: "80%" }} />
            </motion.div>
            <motion.div
              className="about-skill"
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <p>HTML &amp; CSS</p>
              <hr style={{ width: "50%" }} />
            </motion.div>
            <motion.div
              className="about-skill"
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <p>React JS</p>
              <hr style={{ width: "70%" }} />
            </motion.div>
            <motion.div
              className="about-skill"
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <p>JavaScript</p>
              <hr style={{ width: "60%" }} />
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="about-achievements">
        <motion.div
          className="about-achievement"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1>2+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </motion.div>
        <hr />
        <motion.div
          className="about-achievement"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1>20+</h1>
          <p>PROJECTS COMPLETED</p>
        </motion.div>
        <hr />
        <motion.div
          className="about-achievement"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1>5+</h1>
          <p>HAPPY CLIENTS</p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
