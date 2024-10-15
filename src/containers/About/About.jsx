import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import Masonry from "react-masonry-css"; // Import Masonry
import sanityClient from "../../SanityClient";
import { images } from "../../constants";
import { urlFor } from "../../image_builder";

const About = () => {
  const [aboutImage, setAboutImage] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchAboutImage = async () => {
      const data = await sanityClient.fetch(
        '*[_type == "profile"]{image{asset->{_id, url}}}'
      );
      setAboutImage(data[0]?.image?.asset);
    };

    const fetchSkills = async () => {
      const skillData = await sanityClient.fetch(
        '*[_type == "skill"]{name, width, image{asset->{_id, url}}}'
      );
      setSkills(skillData);
    };

    const fetchPhotos = async () => {
      const data = await sanityClient.fetch(
        '*[_type == "photoes"]{image{asset->{_id, url}}}'
      );
      const images = data.map((item) => item.image?.asset?.url).filter(Boolean);
      setPhotos(images);
    };

    fetchAboutImage();
    fetchSkills();
    fetchPhotos();
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedPhoto ? "hidden" : "unset";
  }, [selectedPhoto]);

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
                onClick={() => setSelectedPhoto(aboutImage)}
                src={urlFor(aboutImage).url()}
                alt="About"
                className="lg:max-w-[30vw] cursor-pointer"
              />
            )}
          </motion.div>
        </div>

        <AnimatePresence>
          {selectedPhoto && (
            <motion.div
              className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="relative p-2 bg-[#161513] shadow-lg rounded-lg w-10/12 h-[90%] overflow-auto">
                <IoClose
                  className="fixed border-2 rounded-full top-3 right-3 text-white cursor-pointer"
                  size={24}
                  onClick={() => setSelectedPhoto(null)}
                />
                <Masonry
                  breakpointCols={{ default: 3, 700: 2, 500: 1 }}
                  className="flex"
                >
                  {photos.map((srcPhoto, index) => (
                    <motion.img
                      key={index}
                      src={urlFor(srcPhoto).url()}
                      alt={`placeholder-${index}`}
                      className="w-full h-auto rounded-lg p-1 cursor-pointer"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    />
                  ))}
                </Masonry>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="about-para space-y-4">
          <p className="text-base leading-relaxed">
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
        </div>
      </div>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 20 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="block md:flex md:flex-wrap w-full col-span-1 p-2"
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
              className="border-t-2 border-gray-300"
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
