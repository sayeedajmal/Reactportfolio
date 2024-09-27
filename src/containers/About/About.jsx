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
                className="max-w-[30vw]"
              />
            )}
          </motion.div>
        </div>
        <div className="about-para space-y-4">
          <p class="text-base leading-relaxed">
            I'm an experienced FullStack Developer with over 2 years of
            professional expertise, contributing to various projects in
            Frontend, Backend, API development, and DevOps. I've had the
            privilege of working on impactful projects like a blood donation
            app, where I developed secure, scalable APIs and user-friendly
            interfaces. My hands-on experience extends to healthcare IT
            solutions, integrating industry standards like FHIR and HL7 into EHR
            systems. With each project, I bring a passion for innovation,
            ensuring robust, efficient, and user-centered solutions that drive
            organizational success.
          </p>
          <p class="text-base leading-relaxed">
            In addition to my technical skills, I am highly experienced in cloud
            architecture and DevOps practices, having worked extensively with
            AWS services like EC2, S3, RDS, and DynamoDB. My ability to design
            and implement high-availability, fault-tolerant solutions has been
            critical in ensuring smooth deployments and reliable operations. I
            also prioritize security and compliance, implementing best practices
            to safeguard data and ensure regulatory adherence. I am currently
            pursuing a Bachelor’s in Computer Science & Engineering from
            Visvesvaraya Technological University, where I am honing my skills
            in software development and system design. My academic background,
            combined with my professional experience, allows me to approach
            challenges with both a theoretical and practical perspective.
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
