"use client";
import React from "react";
import { motion } from "framer-motion";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BsCurrencyDollar } from "react-icons/bs";
import { FiMapPin, FiTool, FiHeadphones } from "react-icons/fi";
import { RiBuilding2Line } from "react-icons/ri";

const Why = () => {
  const features = [
    {
      title: "100% Reliable Systems",
      desc: "Premium quality solar inverters, lithium batteries, and panels tested for Nigerian climate conditions and power needs.",
      icon: <AiOutlineCheckCircle size={26} />,
    },
    {
      title: "Affordable Pricing",
      desc: "Competitive prices with flexible payment options. Transparent pricing from consultation to installation.",
      icon: <BsCurrencyDollar size={26} />,
    },
    {
      title: "Nationwide Coverage",
      desc: "Professional delivery and installation services across Nigeria. Local teams available to assist you anywhere.",
      icon: <FiMapPin size={26} />,
    },
    {
      title: "Expert Installation",
      desc: "Certified technicians handle complete setup, from mounting panels to configuring inverters and battery banks.",
      icon: <FiTool size={26} />,
    },
    {
      title: "Ongoing Support",
      desc: "24/7 customer support and maintenance services to keep your solar system operating smoothly.",
      icon: <FiHeadphones size={26} />,
    },
    {
      title: "Nigerian Company",
      desc: "Twin Solar Limited is proudly Nigerian—local business delivering global-quality solar solutions.",
      icon: <RiBuilding2Line size={26} />,
    },
  ];

  // Animation Variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Why Choose <span className="text-[#CF1F1F]">Twin Solar Limited?</span>
          </h2>
          <p className="text-gray-700 mt-4 max-w-3xl mx-auto">
            Nigeria’s trusted partner for complete solar power solutions. Delivering
            quality, reliability, and affordability nationwide.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((item, index) => (
            <motion.div
              key={index}
              variants={card}
              className="bg-black rounded-2xl border border-[#CF1F1F]/20 p-8 hover:shadow-lg hover:border-[#CF1F1F] transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-full bg-white text-[#CF1F1F] flex items-center justify-center mb-6">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-white mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-white leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Why;
