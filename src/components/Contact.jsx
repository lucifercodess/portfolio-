import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { gmail, comments, idCard } from "../assets";
import toast from "react-hot-toast";

//
//
//
const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_iaz6se9",
        "template_k6xa5zc",
        {
          from_name: form.name,
          to_name: "Ayush",
          from_email: form.email,
          to_email: "ard00004444@gmail.com",
          message: form.message,
        },
        "owbv94wcdRYEaZAXD"
      )
      .then(() => {
        setLoading(false);
        toast.success(
          `Thankyou ${form.name}, I will get back to you as soon as possible`
        );
        setForm({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        setLoading(false);
        toast.error(`Failed to send email. Please try again later`);
      });
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={`${styles.sectionSubText}`}>Get In Touch</p>
        <h2 className={`${styles.sectionHeadText}`}>Contact.</h2>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col relative">
            <span className="text-white font-medium mb-4">Your Name</span>
            <div className="relative">
              <img
                src={idCard}
                alt="Gmail icon"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6"
              />
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="bg-tertiary py-4 pl-12 w-full pr-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </div>
          </label>

          <label className="flex flex-col relative">
            <span className="text-white font-medium mb-4">Your Email</span>
            <div className="relative">
              <img
                src={gmail}
                alt="Gmail icon"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6"
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className="bg-tertiary py-4 pl-12 w-full pr-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </div>
          </label>

          <label className="flex flex-col relative">
            <span className="text-white font-medium mb-4">Your Message</span>
            <div className="relative">
              <img
                src={comments}
                alt="Gmail icon"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6"
              />
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What's your Message?"
                className="bg-tertiary py-4 pl-12 w-full pr-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </div>
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none shadow-md shadow-primary w-fit font-extrabold rounded-lg text-white  hover:bg-blue-600 transition-colors"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
