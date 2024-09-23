import React from 'react';
import { images } from "../../constants";
import { motion } from "framer-motion";

const Works = () => {
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
              src={project.src}
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

const workData = [
  {
    src: "https://via.placeholder.com/300x200?text=Project+1",
  },
  {
    src: "https://via.placeholder.com/300x200?text=Project+2",
  },
  {
    src: "https://via.placeholder.com/300x200?text=Project+3",
  },
  {
    src: "https://via.placeholder.com/300x200?text=Project+4",
  },
  {
    src: "https://via.placeholder.com/300x200?text=Project+5",
  },
];

export default Works;
