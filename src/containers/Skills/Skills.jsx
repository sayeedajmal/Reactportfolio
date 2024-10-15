import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import sanityClient from "../../SanityClient";
import { images } from "../../constants";

const Skills = () => {
  const [servicesData, setServicesData] = useState([]);
  const [selectedService, setSelectedService] = useState(null);

  const fetchServices = async () => {
    try {
      const data = await sanityClient.fetch(
        '*[_type == "service"]{number, title, description,url}'
      );
      setServicesData(data);
    } catch (error) {
      console.error("Error fetching services data:", error);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  // Disable scroll when the modal is open
  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedService]);

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
            className="services-format group"
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            onClick={() => setSelectedService(service)}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h3>{service.number}</h3>
            <h2>{service.title}</h2>
            <p className="line-clamp-5">{service.description}</p>
            <div
              className="services-readmore bg-[#161513] rounded-lg pl-2 w-1/2 group-hover:animate-bounce group-hover:scale-150 transition-transform duration-300"
              onClick={(e) => {
                e.stopPropagation();
                if (service.url) {
                  window.open(service.url, "_blank");
                }
              }}
            >
              <p className="text-blue-500 cursor-pointer">Book Now</p>
              <img src={images.bg} alt="" />
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-[#161513] p-5 rounded-lg shadow-lg w-10/12 max-h-[80%] mx-auto relative overflow-auto"
              initial={{ y: -50 }}
              animate={{ y: 0 }}
              exit={{ y: -50 }}
            >
              <IoClose
                className="absolute border-2 rounded-full top-3 right-3 text-gray-600 cursor-pointer"
                size={24}
                onClick={() => setSelectedService(null)}
              />
              <h2 className="text-2xl font-bold bg-gradient-to-r from-[#df8908] to-[#b415ff] bg-clip-text text-transparent">
                {selectedService.title}
              </h2>
              <p className="mt-2 text-xl">{selectedService.description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Skills;
