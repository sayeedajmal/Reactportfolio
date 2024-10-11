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
      const data = await sanityClient.fetch(
        '*[_type == "profile"]{image{asset->{_id, url}}}'
      );
      setAboutImage(data[0]?.image.asset);
    };

    const fetchSkills = async () => {
      const skillData = await sanityClient.fetch(
        '*[_type == "skill"]{name, width, image{asset->{_id, url}}}'
      );
      setSkills(skillData);
    };

    fetchAboutImage();
    fetchSkills();
  }, []);

  const achievements = [
    { number: "12+", label: "YEARS OF EXPERIENCE" },
    { number: "20+", label: "AI PROJECTS COMPLETED" },
    { number: "3+", label: "COMPANIES WORKED ON" },
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
        <div>
          <motion.div
            className="about-left my-auto"
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {aboutImage && (
              <img
                src={urlFor(aboutImage).url()}
                alt="About"
                className="lg:max-w-[30vw]"
              />
            )}
          </motion.div>
        </div>
        <div className="about-para">
          <p>
            With over 12 years of experience in AI strategy, data science, and
            machine learning, I have dedicated my career to leveraging
            cutting-edge technologies to drive business transformation.
            Currently, I serve as a Senior AI Advisor at Arab National Bank,
            where I lead impactful AI initiatives and collaborate with CxO-level
            stakeholders to align AI strategies with organizational goals. My
            expertise spans across developing AI frameworks, implementing
            generative AI solutions, and optimizing data pipelines. I am
            passionate about using AI to solve complex problems and am committed
            to fostering innovation and excellence in the tech industry.
          </p>
        </div>
      </div>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 20 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="block md:flex md: flex-wrap w-full col-span-1 p-2"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="about-skill block md:grid md:grid-cols-2 md:w-1/2 p-2"
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <p className="text-lg font-medium">{skill.name}</p>
            <hr
              className=" border-t-2 border-gray-300"
              style={{ width: skill.width }}
            />
          </motion.div>
        ))}
      </motion.div>

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
