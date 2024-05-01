import React from "react";

import { BsGithub, BsTwitter, BsInstagram } from "react-icons/bs";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://x.com/sayeed__ajmal">
        <BsTwitter />
      </a>
    </div>
    <div>
      <a href="https://instagram.com/sayeed__ajmal">
        <BsInstagram />
      </a>
    </div>
    <div>
      <a href="https://github.com/sayeedajmal">
        <BsGithub />
      </a>
    </div>
  </div>
);

export default SocialMedia;
