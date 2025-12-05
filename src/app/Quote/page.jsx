/* eslint-disable @next/next/no-html-link-for-pages */

"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Footer from "../../Component/Footer";
import Image from "next/image";
import max from "../../images/Logonav.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const parentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    phone: "",
    email: "",
    location: "",
    systemSize: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Submit Handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.fullname || !formData.phone || !formData.email || !formData.location || !formData.systemSize) {
      toast.error("Please fill in all required fields");
      return;
    }

    setLoading(true);

    try {
      const baseurl = "https://forms-io.onrender.com/submit-form/31c2dc55-95ff-416c-a224-5ee68f88f4a8";
      const response = await fetch(baseurl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const resData = await response.json();

      setLoading(false);
      toast.success("Message sent!!!");

      // Reset form
      setFormData({
        fullname: "",
        phone: "",
        email: "",
        location: "",
        systemSize: "",
        message: "",
      });

      console.log("data ", resData);

    } catch (error) {
      setLoading(false);
      toast.error("Unable to send, please check your internet.");
      console.log(error);
    }
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <motion.div
        className="flex items-center justify-center min-h-screen p-6 bg-gray-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.form
          onSubmit={handleSubmit}
          variants={parentVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-xl p-8 space-y-6 bg-white shadow-xl rounded-2xl"
        >
          {/* Logo */}
          <motion.div variants={childVariants} className="flex justify-center">
            <a href="/" className="relative block w-32 h-20 cursor-pointer">
              <Image
                src={max}
                alt="Twin Solar Limited Logo"
                fill
                className="object-contain"
                priority
              />
            </a>
          </motion.div>

          <motion.h2
            variants={childVariants}
            className="text-3xl font-bold text-center text-gray-900"
          >
            Request a Quote
          </motion.h2>

          <motion.p variants={childVariants} className="-mt-3 text-center text-gray-600">
            Get an accurate solar installation quote from Twin Solar Limited
          </motion.p>

          {/* Full Name */}
          <motion.div variants={childVariants}>
            <label className="block mb-1 font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
              placeholder="Enter your full name"
              required
            />
          </motion.div>

          {/* Phone */}
          <motion.div variants={childVariants}>
            <label className="block mb-1 font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
              placeholder="e.g. 08012345678"
              required
            />
          </motion.div>

          {/* Email */}
          <motion.div variants={childVariants}>
            <label className="block mb-1 font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
              placeholder="example@gmail.com"
              required
            />
          </motion.div>

          {/* Location */}
          <motion.div variants={childVariants}>
            <label className="block mb-1 font-medium text-gray-700">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
              placeholder="City / State"
              required
            />
          </motion.div>

          {/* Preferred System Size */}
          <motion.div variants={childVariants}>
            <label className="block mb-1 font-medium text-gray-700">Preferred System Size</label>
            <select
              name="systemSize"
              value={formData.systemSize}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
              required
            >
              <option value="">Select...</option>
              <option>1KW - 2KW (Basic Home)</option>
              <option>3KW - 5KW (Standard Home)</option>
              <option>5KW - 10KW (Large Home / Office)</option>
              <option>10KW+ (Commercial)</option>
            </select>
          </motion.div>

          {/* Message */}
          <motion.div variants={childVariants}>
            <label className="block mb-1 font-medium text-gray-700">Additional Message</label>
            <textarea
              rows="4"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
              placeholder="Tell us more about your power needs"
            />
          </motion.div>

          {/* Submit Button */}
          <motion.button
            variants={childVariants}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={loading}
            className="w-full p-3 font-semibold text-white duration-300 bg-red-600 rounded-lg hover:bg-red-700 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Submitting..." : "Request Quote"}
          </motion.button>
        </motion.form>
      </motion.div>

      <Footer />
    </>
  );
};

export default QuoteForm;