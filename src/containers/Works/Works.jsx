import React from 'react';
import { images } from "../../constants";

const Works = () => {
  return (
    <div id="work" className="mywork">
      <div className="title-box">
        <h1>My latest work</h1>
        <img
          src={images.bg}
          alt=""
        />
      </div>
      <div className="mywork-container">
        {workData.map((project, index) => (
          <div className="project" key={index}>
            <img
              src={project.src}
              alt={`Project ${index + 1}`}
              className='rounded-lg'
            />
          </div>
        ))}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <img
          src={images.bg}
          alt=""
        />
      </div>
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
  },];

export default Works;
