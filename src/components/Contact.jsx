import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_41kmh89",
        "template_9dlg35d",
        {
          from_name: form.name,
          to_name: "Naish",
          from_email: form.email,
          to_email: "naishabbas01@gmail.com",
          message: form.message,
        },
        "CMLWyq5PLvo9q8bk8"
      )
      .then(
        () => {
          setLoading(false);
          alert("Message sent successfully!");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error("Failed to send message. Error: ", error);
          alert("Message failed to send!");
        }
      );
  };

  return (
    <div className="xl:flex-row xl:mt-12 flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.3, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={`${styles.heroSubText}`}>Get in Touch</p>
        <h3 className={`${styles.heroHeadText}`}>Contact.</h3>

        <form
          ref={formRef}
          className="mt-8 flex flex-col gap-8"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className={`${styles.label}`}>
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Whats your name?"
              className={`${styles.input}`}
              value={form.name}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className={`${styles.label}`}>
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Whats your email address?"
              className={`${styles.input}`}
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className={`${styles.label}`}>
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={7}
              placeholder="What do you want to say?"
              className={`${styles.input}`}
              value={form.message}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className={`bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl ${
              loading && "cursor-not-allowed"
            }`}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.3, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
