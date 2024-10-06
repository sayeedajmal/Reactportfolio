import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5"; // Importing close icon
import sanityClient from "../../SanityClient";
import { images } from "../../constants";
import { urlFor } from "../../image_builder";

const Works = () => {
  const [workData, setWorkData] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  const fetchWorks = async () => {
    try {
      const data = await sanityClient.fetch(
        '*[_type == "project"]{image{asset->{_id, url}}, description}'
      );
      setWorkData(data);
    } catch (error) {
      console.error("Error fetching works data:", error);
    }
  };

  useEffect(() => {
    fetchWorks();
  }, []);

  // Disable scroll when the modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedProject]);

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
            onClick={() => setSelectedProject(project)}
          >
            <img
              src={urlFor(project.image.asset).url()}
              alt={`Project ${index + 1}`}
              className="rounded-lg cursor-pointer"
            />
          </motion.div>
        ))}
      </div>
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-[#161513] p-5 flex gap-3 rounded-lg shadow-lg w-10/12 mx-auto relative"
              initial={{ y: -50 }}
              animate={{ y: 0 }}
              exit={{ y: -50 }}
            >
              <IoClose
                className="absolute top-3 border-2 rounded-full right-3 text-gray-600 cursor-pointer"
                size={24}
                onClick={() => setSelectedProject(null)} // Close modal
              />
              <img
                src={urlFor(selectedProject.image.asset).url()}
                alt={`Project Image`}
                className="mt-4 rounded-lg w-1/3"
              />
              <div className="ml-4">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-[#df8908] to-[#b415ff] bg-clip-text text-transparent">
                  Project Description
                </h2>
                <p className="mt-2">{selectedProject.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="mywork-showmore"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <p>Show More</p>
        <img src={images.bg} alt="" />
      </motion.div>
    </div>
  );
};

export default Works;
