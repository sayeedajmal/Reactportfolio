import React from "react";
import "./About.scss";

import { motion } from "framer-motion";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";

const about = [
  {
    title: "Java FullStack Developer",
    description: "A FullStack Java Developer having Solid Skills.",
    imgUrl: images.java,
  },
  {
    title: "Spring Developer",
    description: "A Solid Conceptual Developer.",
    imgUrl: images.spring,
  },
  {
    title: "React",
    description: "A FullStack Java Developer having React Is Amazing.",
    imgUrl: images.react,
  },
  {
    title: "Mongodb/MySql",
    description:
      "A FullStack Java Developer having Database mangement is like WOW.",
    imgUrl: images.mongo,
  },
];
const About = () => {
  return (
    <>
      <h2 className="head-text">
        Working Hard
        <span>
          {" "}
          means
          <br />{" "}
        </span>
        Going To <span>Sucessful</span>
      </h2>

      <div className="app__profiles">
        {about.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
