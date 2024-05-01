import React, { useSate, useEffect } from "react";

import { Tooltip as ReactTooltip } from "react-tooltip";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";

import "./Skills.scss";

const mySkills = [
  {
    name: "Core Java",
    icon: images.java,
  },
  {
    name: "Spring",
    icon: images.spring,
  },
  {
    name: "React",
    icon: images.react,
  },
  {
    name: "MongoDB",
    icon: images.mongo,
  },
  {
    name: "Mysql",
    icon: images.mysql,
  },
  {
    name: "Firebase",
    icon: images.firebase,
  },
  {
    name: "Linux",
    icon: images.linux,
  },
];

const MyExperience = [
  {
    year: 2019,
    works: [
      {
        name: "Java Developer",
        company: "Stong Foundation",
      },
    ],
  },
  {
    year: 2023,
    works: [
      {
        name: "FrontEnd Developer",
        company: "Stong Foundation",
      },
    ],
  },
];
const Skills = () => {
  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {mySkills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex "
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {MyExperience.map((experience) => (
            <motion.div className="app__skills-exp-item" key={experience.year}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </ReactTooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
