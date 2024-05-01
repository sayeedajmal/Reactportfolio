import React from "react";

import { BsGithub, BsTwitter, BsInstagram } from "react-icons/bs";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://x.com/sayeed__ajmal" target="_blank">
        <BsTwitter />
      </a>
    </div>
    <div>
      <a href="https://instagram.com/sayeed__ajmal" target="_blank">
        <BsInstagram />
      </a>
    </div>
    <div>
      <a href="https://github.com/sayeedajmal" target="_blank">
        <BsGithub />
      </a>
    </div>
  </div>
);

export default SocialMedia;
