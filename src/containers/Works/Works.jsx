import React, { useState } from "react";

import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";

import "./Works.scss";

const Works = () => {
  const [activeFilter, setactiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);

  const myworks = [
    {
      title: "QuranFy (Audio Quran App)",
      description:
        "Immersive application with (Java, Firebase, Android) for listening to the Quran with synchronized lyrics and user-friendly interface.",
      imgUrl: images.QuranFy,
      projectLink: "https://github.com/sayeedajmal/QuranFy",
      tags: ["Android Developer", "Java Developer"],
    },
    {
      title: "SpeedSync Dashboard",
      description:
        "A Java project with (Android ,API, DB) implements real-time speed tracking and monitoring system, enhancing road safety.",
      imgUrl: images.speedSync,
      projectLink: "https://github.com/sayeedajmal/SpeedSync-Dashboard",
      tags: ["API Integration", "Java Developer", "Spring Developer"],
    },
    {
      title: "Blood Donation RESTful API",
      description:
        "Developed a RESTful API for blood donation management using Java, Spring, Hibernate, and MySQL",
      imgUrl: images.BloodDonation,
      projectLink: "https://github.com/sayeedajmal/SpeedSync_RestFul-API",
      tags: ["Spring Developer", "Java Developer", "API Integration"],
    },
    {
      title: "Portfolio Website",
      description:
        "Designed and developed a personal portfolio website using React for frontend and Node.js for backend.",
      imgUrl: images.portfolio,
      projectLink: "https://sayeedthedev.web.app",
      tags: ["FrontEnd Developer", "React Developer", "API Integration"],
    },
    {
      title: "Additional Applications",
      description:
        "Web and Android applications developed for various purposes, enhancing user experience and functionality.",
      imgUrl: images.java,
      projectLink: "https://github.com/sayeedajmal/Applications",
      tags: ["Android Developer", "FrontEnd Developer", "API Integration"],
    },
  ];

  const handleWorkFilter = (item) => {};

  return (
    <>
      <h2 className="head-text">
        My Creative <span>Projects</span>
      </h2>
      <div className="app__work-filter">
        {[
          "API Integration",
          "Web apps",
          "Mobile App",
          "Java Backend",
          "All",
        ].map((item, index) => (
          <div
            key={index}
            onClick={handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${
              activeFilter === item ? "item-active" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {myworks.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={work.imgUrl} alt={work.title} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
                style={{ opacity: 0.5 }}
              >
                <a href={work.projectLink} target="_blank" rel="nonrefer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className=" app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noopener">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className=" app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {work.description}
              </p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};
export default AppWrap(
  MotionWrap(Works, "app__works"),
  "work",
  "app__primarybg"
);
