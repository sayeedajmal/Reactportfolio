import React from 'react';
import { images } from "../../constants";

const Skills = () => {
  return (
    <div id="services" className="services">
      <div className="title-box">
        <h1>My Services</h1>
        <img
          src={images.bg}
          alt=""
        />
      </div>
      <div className="services-container">
        {servicesData.map((service, index) => (
          <div className="services-format" key={index}>
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
          </div>
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
