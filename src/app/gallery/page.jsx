"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../../Component/Navbar";
import Footer from "../../Component/Footer";

// Import your images
import team1 from "../../images/team1.jpg";
import team2 from "../../images/team2.jpg";
import team3 from "../../images/team3.jpg";
import team4 from "../../images/team4.jpg";
import team5 from "../../images/team5.jpg";
import team6 from "../../images/team6.jpg";

const images = [
  { id: 1, src: team1, title: "Solar Panel Installation 1" },
  { id: 2, src: team2, title: "Solar Panel Installation 2" },
  { id: 3, src: team3, title: "Battery Storage System" },
  { id: 4, src: team4, title: "Commercial Solar Project" },
  { id: 5, src: team5, title: "Industrial Solar Solution" },
  { id: 6, src: team6, title: "Residential Solar Setup" },
];

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
    <Navbar />
    <section className="min-h-screen bg-gray-50 py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Twin Solar Gallery
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore some of our recent solar installations and projects across Nigeria.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {images.map((image) => (
            <motion.div
              key={image.id}
              className="group relative rounded-2xl overflow-hidden shadow-lg cursor-pointer"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedImage(image)}
            >
              <div className="w-full h-80 relative"> {/* Increased height */}
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-end">
                <div className="p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-xl font-bold text-white">{image.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-hidden relative"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative w-full h-96 md:h-[650px]"> {/* Increased modal height */}
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors text-2xl"
                >
                  ×
                </button>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {selectedImage.title}
                  </h3>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default GalleryPage;
