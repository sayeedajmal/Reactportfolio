import React, { useRef } from 'react';
import { images } from "../../constants";
import { motion } from "framer-motion";
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef(); 

  const sendEmail = (e) => {
    e.preventDefault(); 

    emailjs.sendForm(
      'service_id',  // Replace with your EmailJS service ID
      'tempalte_id', // Replace with your EmailJS template ID
      form.current,  
      'your_user_id'      // Replace with your EmailJS user ID
    )
    .then((result) => {
      console.log(result.text);
      alert('Message sent successfully!');
    }, (error) => {
      console.log(error.text); // Error callback
      alert('Failed to send the message, please try again.');
    });
  };

  return (
    <div id="contact" className="contact">
      <div className="title-box">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -50 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Get in touch
        </motion.h1>
        <motion.img
          src={images.bg}
          alt=""
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
      <div className="contact-section">
        <motion.div
          className="contact-left"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1>Let's talk</h1>
          <p>
            I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact me anytime.
          </p>
          <div className="contact-details">
            {contactDetails.map((detail, index) => (
              <motion.div
                className="contact-detail"
                key={index}
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -20 }}
                transition={{ duration: 1, ease: "easeOut", delay: index * 0.3 }}
              >
                <img
                  src={detail.imgSrc}
                  alt=""
                />
                <p>{detail.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.form
          ref={form} 
          onSubmit={sendEmail}
          className="contact-right"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 50 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <input type="hidden" name="subject" value="New Submission from Portfolio" />
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" placeholder="Enter your name" name="name" required />
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" placeholder="Enter your email" name="email" required />
          <label htmlFor="message">Write your message here</label>
          <textarea id="message" name="message" rows="5" placeholder="Enter your message" required></textarea>
          <button type="submit" className="contact-submit">Submit now</button>
        </motion.form>
      </div>
    </div>
  );
};

const contactDetails = [
  {
    imgSrc: images.bg,
    text: "ladlepatelr@gmail.com",
  },
  {
    imgSrc: images.bg,
    text: "+966 5485 02314",
  },
  {
    imgSrc: images.bg,
    text: "Riyad, KSA",
  },
];

export default Contact;
