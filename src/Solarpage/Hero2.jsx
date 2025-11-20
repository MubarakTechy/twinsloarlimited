import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

// IMPORT IMAGES
import panelroad from "../images/pane3.jpg";
import commercial from "../images/panelroad2.jpg";
import battery from "../images/betterymostuse.jpg";
import roofing from "../images/panel1.jpg";

const Hero2 = () => {
  const solutions = [
    {
      id: 1,
      title: "Residential Solar Panels",
      description:
        "Save money and become energy independent using the power of the sun...",
      image: panelroad,
    },
    {
      id: 2,
      title: "Commercial Solar Panels",
      description:
        "Your energy strategy is the key component when reducing utility costs...",
      image: commercial,
    },
    {
      id: 3,
      title: "Battery Storage",
      description:
        "With battery backup, you can significantly reduce utility bills...",
      image: battery,
    },
    {
      id: 4,
      title: "Roofing",
      description:
        "Protect your home and reduce energy usage with an energy-compliant roof...",
      image: roofing,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
          Discover Our Energy Solutions
        </h1>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        {solutions.map((solution) => (
          <div
            key={solution.id}
            className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
          >
            <div className="flex flex-col md:flex-row h-full">
              {/* Image Section */}
              <div className="md:w-1/2 h-64 md:h-auto relative">
                <Image
                  src={solution.image}
                  alt={solution.title}
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-green-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Content Section */}
              <div className="md:w-1/2 p-8 flex flex-col justify-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#d84d4d] transition-colors duration-300">
                  {solution.title}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {solution.description}
                </p>
                <button className="inline-flex items-center gap-2 bg-[#CF1F1F] hover:bg-[#d84d4d] text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 group-hover:gap-4 self-start">
                  LEARN MORE
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto mt-16 text-center">
        <p className="text-white text-sm uppercase tracking-wider">
          Twin Solar Limited
        </p>
      </div>
    </div>
  );
};

export default Hero2;
