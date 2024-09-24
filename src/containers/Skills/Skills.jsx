import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import sanityClient from '../../SanityClient';
import { images } from "../../constants";

const Skills = () => {
  const [servicesData, setServicesData] = useState([]);

  const fetchServices = async () => {
    try {
      const data = await sanityClient.fetch('*[_type == "service"]{number, title, description}');
      setServicesData(data);
    } catch (error) {
      console.error('Error fetching services data:', error);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

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
            <p className="line-clamp-5">{service.description}</p>
            <div className="services-readmore">
              <p>Read More</p>
              <img src={images.bg} alt="" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
