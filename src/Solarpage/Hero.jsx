"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

import Hero1 from "../images/panalbg1.jpg";
import Hero2 from "../images/panel1.jpg";
import Hero3 from "../images/panelbg2.jpg";

export default function Hero() {
  const images = [Hero1, Hero2, Hero3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-[70vh] md:h-[90vh] overflow-hidden flex items-center justify-center">

      {/* Background Images */}
      <div className="absolute inset-0 w-full h-full">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-[1500ms] ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={img}
              alt="Twin Solar Hero Image"
              fill
              priority
              className="object-cover"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60" />
          </div>
        ))}
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col gap-2 justify-center items-center text-center px-6 sm:px-10 md:px-16 lg:px-24 max-w-3xl">

        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white leading-tight">
          Your Trusted Partner for Smart Solar Solutions
        </h1>

        <p className="mt-3 text-gray-200 text-base sm:text-lg md:text-xl max-w-xl">
          Affordable, durable, and efficient solar systems built for every power need home or business.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full">

          <a
            href="/Quote"
            className="bg-[#CF1F1F] text-white px-8 py-3 sm:px-10 sm:py-3 rounded-full font-semibold hover:bg-red-700 transition-all duration-300 hover:scale-105 w-full sm:w-auto text-center"
          >
            Get a Quote
          </a>

        </div>
      </div>

    </section>
  );
}
