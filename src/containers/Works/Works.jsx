import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import sanityClient from '../../SanityClient';
import { images } from "../../constants";
import { urlFor } from '../../image_builder';

const Works = () => {
  const [workData, setWorkData] = useState([]);

  const fetchWorks = async () => {
    try {
      const data = await sanityClient.fetch('*[_type == "project"]{image{asset->{_id, url}}, description}');
      setWorkData(data);
    } catch (error) {
      console.error('Error fetching works data:', error);
    }
  };

  useEffect(() => {
    fetchWorks();
  }, []);

  return (
    <div id="work" className="mywork">
      <div className="title-box">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -50 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          My latest work
        </motion.h1>
        <motion.img
          src={images.bg}
          alt=""
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
      <div className="mywork-container">
        {workData.map((project, index) => (
          <motion.div
            className="project"
            key={index}
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <img
              src={urlFor(project.image.asset).url()}
              alt={`Project ${index + 1}`}
              className='rounded-lg'
            />
          </motion.div>
        ))}
      </div>
      <motion.div
        className="mywork-showmore"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <p>Show More</p>
        <img
          src={images.bg}
          alt=""
        />
      </motion.div>
    </div>
  );
};

export default Works;
