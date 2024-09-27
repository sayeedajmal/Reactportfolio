import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import sanityClient from "../../SanityClient";
import { images } from "../../constants";
import { urlFor } from "../../image_builder";

const About = () => {
  const [aboutImage, setAboutImage] = useState(null);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchAboutImage = async () => {
      const data = await sanityClient.fetch('*[_type == "profile"]{image{asset->{_id, url}}}');
      setAboutImage(data[0]?.image.asset);
    };

    const fetchSkills = async () => {
      const skillData = await sanityClient.fetch('*[_type == "skill"]{name, width, image{asset->{_id, url}}}');
      setSkills(skillData);
    };

    fetchAboutImage();
    fetchSkills();
  }, []);

  const achievements = [
    { number: "2+", label: "YEARS OF EXPERIENCE" },
    { number: "20+", label: "PROJECTS COMPLETED" },
    { number: "5+", label: "HAPPY CLIENTS" },
  ];

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
          {aboutImage && (
            <img
              src={urlFor(aboutImage).url()}
              alt="About"
              className="max-w-[30vw]"
            />
          )}
        </motion.div>

        <motion.div
          className="about-right"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 20 }}
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
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="about-skill"
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                {skill.image && (
                  <img
                    src={urlFor(skill.image).url()}
                    alt={skill.name}
                    className="skill-image"
                  />
                )}
                <p className="max-w-5">{skill.name}</p>
                <hr style={{ width: skill.width }} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="about-achievements">
        {achievements.map((achievement, index) => (
          <React.Fragment key={index}>
            <motion.div
              className="about-achievement"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h1>{achievement.number}</h1>
              <p>{achievement.label}</p>
            </motion.div>
            <hr />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default About;
