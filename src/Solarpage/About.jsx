"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import aboutImg from "@/images/mostusebetterywall.jpg"; // Alias ensures path works anywhere

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, duration: 0.8 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8, rotateY: -10 },
  visible: {
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const textVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const About = () => {
  return (
    <motion.section
      className="max-w-7xl mx-auto px-6 py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      {/* Section Header */}
      <motion.div className="text-center mb-16" variants={itemVariants}>
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-gray-900"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          About Us
        </motion.h1>
        <motion.p
          className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg"
          variants={itemVariants}
        >
          Delivering clean, sustainable, and reliable solar power solutions to
          homes, businesses, and industries across Nigeria.
        </motion.p>
      </motion.div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        {/* Image */}
        <motion.div
          className="relative w-full h-80 md:h-[460px] rounded-3xl overflow-hidden shadow-xl"
          variants={imageVariants}
          whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
        >
          <motion.div
            whileHover={{ scale: 1.1, transition: { duration: 0.7 } }}
          >
            <Image
              src={aboutImg}
              alt="About Twin Solar Limited"
              fill
              className="object-cover brightness-95"
            />
          </motion.div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        </motion.div>

        {/* Text Content */}
        <motion.div variants={textVariants}>
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: 30, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Leading the Future of Clean Energy
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          >
            <motion.p
              className="text-gray-700 leading-relaxed mb-5 text-lg"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              Twin Solar Limited provides high quality solar energy systems
              designed to deliver stable and long-lasting power. Our goal is
              simple helping homes and businesses reduce energy costs while
              enjoying a cleaner and more dependable electricity source.
            </motion.p>

            <motion.p
              className="text-gray-700 leading-relaxed mb-5 text-lg"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              We specialize in solar panel installation, inverter systems, battery
              storage, energy audits, and full maintenance support. Every project
              we handle is completed with precision, ensuring maximum durability,
              safety, and performance.
            </motion.p>

            <motion.p
              className="text-gray-700 leading-relaxed text-lg"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              At Twin Solar Limited, we believe renewable energy should be
              accessible, affordable, and worry free  and we are committed to
              making that vision a reality for everyone.
            </motion.p>
          </motion.div>

          <motion.p
            className="mt-8 font-semibold text-[#CF1F1F] text-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              color: "#059669",
              transition: { duration: 0.3 },
            }}
          >
            Twin Solar Limited — Adding Value to Life.
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
