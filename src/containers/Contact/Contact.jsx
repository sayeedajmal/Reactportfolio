import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import { images } from "../../constants";

const Contact = () => {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ceiv31e", // Replace with your EmailJS service ID
        "template_af5xeod", // Replace with your EmailJS template ID
        form.current,
        "euP-6dT5asZq2N362" // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSubmitted(true);
        },
        (error) => {
          console.log(error.text); // Error callback
          alert("Failed to send the message, please try again.");
        }
      );
  };

  return (
    <div id="contact" className="contact">
      <div className="title-box text-center">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -50 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl font-bold"
        >
          Get in touch
        </motion.h1>
        <motion.img
          src={images.bg}
          alt=""
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mx-auto"
        />
      </div>
      <div className="contact-section flex flex-col lg:flex-row">
        <motion.div
          className="contact-left flex-1 mb-8 lg:mb-0"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-2xl font-semibold">Let's talk</h1>
          <p className="mt-2">
            I'm currently available to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact me anytime.
          </p>
          <div className="contact-details mt-4">
            {contactDetails.map((detail, index) => (
              <motion.div
                className="contact-detail flex items-center mt-2"
                key={index}
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -20 }}
                transition={{
                  duration: 1,
                  ease: "easeOut",
                  delay: index * 0.3,
                }}
              >
                <img src={detail.imgSrc} alt="" className="mr-2" />
                <p>{detail.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        {!isSubmitted ? (
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            className="contact-right flex-1"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 20 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <input
              type="hidden"
              name="subject"
              value="New Submission from Portfolio"
            />
            <label htmlFor="name" className="block mt-4">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              name="from_name"
              required
              className="border rounded-md w-full p-2 mt-1"
            />
            <label htmlFor="email" className="block mt-4">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              name="user_email"
              required
              className="border rounded-md w-full p-2 mt-1"
            />
            <label htmlFor="message" className="block mt-4">
              Write your message here
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Enter your message"
              required
              className="border rounded-md w-full p-2 mt-1"
            ></textarea>
            <button
              type="submit"
              className="contact-submit mt-4 bg-blue-500 text-white p-2 rounded-3xl"
            >
              Submit now
            </button>
          </motion.form>
        ) : (
          <motion.div
            className="success-message text-center flex flex-col items-center justify-center flex-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-lg font-semibold bg-gradient-to-r from-[#df8908] to-[#b415ff] bg-clip-text text-transparent">
              Message sent successfully!
            </h2>
            <p className="mt-2 bg-gradient-to-r from-[#df8908] to-[#b415ff] bg-clip-text text-transparent">
              Thank you for reaching out!
            </p>
          </motion.div>
        )}
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
