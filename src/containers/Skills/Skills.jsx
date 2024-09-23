import React from 'react';
import { images } from "../../constants";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div id="services" className="services">
      <div className="title-box">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -50 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          My Services
        </motion.h1>
        <motion.img
          src={images.bg}
          alt=""
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
      <div className="services-container">
        {servicesData.map((service, index) => (
          <motion.div
            className="services-format"
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h3>{service.number}</h3>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <div className="services-readmore">
              <p>Read More</p>
              <img
                src={images.bg}
                alt=""
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const servicesData = [
  {
    number: "01",
    title: "Web design",
    description: "Web development is the process of building, programming..."
  },
  {
    number: "02",
    title: "Graphics design",
    description: "Web development is the process of building, programming..."
  },
  {
    number: "03",
    title: "Social media",
    description: "Web development is the process of building, programming..."
  },
  {
    number: "04",
    title: "App design",
    description: "Web development is the process of building, programming..."
  },
  {
    number: "05",
    title: "Digital marketing",
    description: "Web development is the process of building, programming..."
  },
  {
    number: "06",
    title: "Content writing",
    description: "Web development is the process of building, programming..."
  }
];

export default Skills;
