"use client";

import React, { useContext, useState } from "react";
import { contactLinks } from "../constants";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";

const Contact = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleOnChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    if (!formData.name || !formData.email) return;

    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section
      id="contact"
      className="pt-16 pb-12 transition-colors duration-400"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 flex flex-col items-center">
          <div className="mb-3">
            <span className="neu-badge">Let's Connect</span>
          </div>
          <h2 className="neu-title">
            Get in <span className="neu-title-accent">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto mt-4 rounded-full" />
          <p className="text-base sm:text-lg opacity-70 mt-4 max-w-xl mx-auto">
            Whether you have an inquiry, a project idea, or simply want to
            connect, feel free to drop a message.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start pb-16">
          {/* Contact Form: 7 cols on large */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 neu-card p-8 sm:p-10"
          >
            <h3 className="text-2xl font-bold mb-6 tracking-tight">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold mb-2 opacity-85"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleOnChange}
                  className="neu-input"
                  placeholder="e.g. Alex Johnson"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold mb-2 opacity-85"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleOnChange}
                  className="neu-input"
                  placeholder="e.g. alex@example.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold mb-2 opacity-85"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleOnChange}
                  className="neu-input !h-32 resize-none"
                  placeholder="Tell me about your project or inquiry..."
                  required
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <a
                  href="mailto:ashokgfsd@gmail.com"
                  className="text-sm font-semibold text-blue-500 hover:underline flex items-center gap-1.5"
                >
                  <span>Or email me directly</span>
                  <span>→</span>
                </a>

                <button
                  type="submit"
                  className="neu-btn-primary w-full sm:w-auto"
                >
                  {submitted ? (
                    <span className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4 text-emerald-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Message Sent!
                    </span>
                  ) : (
                    <span>Send Message</span>
                  )}
                </button>
              </div>
            </form>
          </motion.div>

          {/* Contact Details & Socials: 5 cols on large */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Phone Card */}
            <div className="neu-card p-6 flex items-center gap-5">
              <div className="neu-btn-circle !w-12 !h-12 flex-shrink-0 text-xl">
                📱
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider opacity-60">
                  Phone
                </div>
                <a
                  href="tel:+916379841036"
                  className="text-lg font-bold text-blue-500 hover:underline mt-0.5 block"
                >
                  +91 6379841036
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="neu-card p-6 flex items-center gap-5">
              <div className="neu-btn-circle !w-12 !h-12 flex-shrink-0 text-xl">
                ✉️
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider opacity-60">
                  Email
                </div>
                <a
                  href="mailto:ashokgfsd@gmail.com"
                  className="text-lg font-bold text-blue-500 hover:underline mt-0.5 block"
                >
                  ashokgfsd@gmail.com
                </a>
              </div>
            </div>

            {/* Social Network Card */}
            <div className="neu-card p-6">
              <div className="text-xs font-bold uppercase tracking-wider opacity-60 mb-4">
                Connect on Social Networks
              </div>
              <div className="flex items-center gap-4">
                {contactLinks.map((el, i) => (
                  <a
                    key={i}
                    href={el.link}
                    target="_blank"
                    rel="noreferrer"
                    className="neu-btn !py-2.5 !px-4 text-sm flex items-center gap-2.5"
                  >
                    <img
                      alt=""
                      src={el.url}
                      className="w-5 h-5 object-contain"
                    />
                    <span>{el.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Neumorphic Footer */}
        <div className="mt-12 pt-8 border-t border-white/10 dark:border-white/5">
          <div className="neu-well p-4 flex flex-col sm:flex-row items-center justify-between text-center gap-2 text-sm opacity-80">
            <span>
              © {new Date().getFullYear()} Ashok Govindharasu A. All rights
              reserved.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
