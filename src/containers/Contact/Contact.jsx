import React from 'react';
import { images } from "../../constants";

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <div className="title-box">
        <h1>Get in touch</h1>
        <img
          src={images.bg}
          alt=""
        />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact me anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img
                src={images.bg}
                alt=""
              />
              <p>sayeedajmala06@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img
                src={images.bg}
                alt=""
              />
              <p>+91 99647 16450</p>
            </div>
            <div className="contact-detail">
              <img
                src={images.bg}
                alt=""
              />
              <p>KAR, India</p>
            </div>
          </div>
        </div>
        <form className="contact-right">
          <input type="hidden" name="subject" value="New Submission from Portfolio" />
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" placeholder="Enter your name" name="name" />
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" placeholder="Enter your email" name="email" />
          <label htmlFor="message">Write your message here</label>
          <textarea id="message" name="message" rows="5" placeholder="Enter your message"></textarea>
          <button type="submit" className="contact-submit">Submit now</button>
          <p></p>
        </form>
      </div>
    </div>
  );
};

export default Contact;
