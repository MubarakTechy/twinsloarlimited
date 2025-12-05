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
    <div className="min-h-screen px-4 py-16 bg-gradient-to-b from-black to-black sm:px-6 lg:px-8">
      <div className="mx-auto mb-12 max-w-7xl">
        <h1 className="mb-4 text-4xl font-bold text-center text-white md:text-5xl">
          Discover Our Energy Solutions
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-6 mx-auto max-w-7xl lg:grid-cols-2">
        {solutions.map((solution) => (
          <div
            key={solution.id}
            className="overflow-hidden transition-all duration-500 bg-white shadow-xl group rounded-2xl hover:shadow-2xl hover:-translate-y-2"
          >
            <div className="flex flex-col h-full md:flex-row">
              {/* Image Section */}
              <div className="relative h-64 md:w-1/2 md:h-auto">
                <Image
                  src={solution.image}
                  alt={solution.title}
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-green-900/20 group-hover:opacity-100"></div>
              </div>

              {/* Content Section */}
              <div className="flex flex-col justify-center p-8 md:w-1/2">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#d84d4d] transition-colors duration-300">
                  {solution.title}
                </h2>
                <p className="mb-6 leading-relaxed text-gray-600">
                  {solution.description}
                </p>
                <a href="/About" className="inline-flex items-center gap-2 bg-[#CF1F1F] hover:bg-[#d84d4d] text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 group-hover:gap-4 self-start">
                  LEARN MORE
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-16 text-center max-w-7xl">
        <p className="text-sm tracking-wider text-white uppercase">
          Twin Solar Limited
        </p>
      </div>
    </div>
  );
};

export default Hero2;
