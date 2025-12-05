"use client";
import React from "react";
import Image from "next/image";

import solarPanelImg from "../../images/panalbg1.jpg";
import batteryImg from "../../images/betterywall.jpg";
import inverterImg from "../../images/wallbettery.jpg";
import installationImg from "../../images/manandwallbattery.jpg";

// ⭐ ADD YOUR NEW IMAGES HERE
import cctvImg from "../../images/flyer2.jpg";
import streetLightImg from "../../images/impotancewallbettey.jpg";
import maintanaceImg from "../../images/Allbettery3.jpg";

import Navbar from "../../Component/Navbar";
import Footer from "../../Component/Footer";

const ServicesPage = () => {
  const services = [
    {
      id: 1,
      title: "Solar Panel Installation",
      desc: "High-efficiency solar panels designed for long-lasting renewable energy.",
      img: solarPanelImg,
    },
    {
      id: 2,
      title: "Battery Backup Systems",
      desc: "Reliable lithium and gel batteries for uninterrupted power.",
      img: batteryImg,
    },
    {
      id: 3,
      title: "Inverter Sales & Setup",
      desc: "Top-quality inverters with smooth conversion and durability.",
      img: inverterImg,
    },
    {
      id: 4,
      title: "Professional Solar Installation",
      desc: "Certified engineers available nationwide for expert solar installation.",
      img: installationImg,
    },

    // ⭐ NEW SERVICE 1
    {
      id: 5,
      title: "CCTV & Security Systems",
      desc: "Protect your home and office with high-definition CCTV and surveillance systems.",
      img: cctvImg,
    },

    // ⭐ NEW SERVICE 2
    {
      id: 6,
      title: "Solar Street Light Installation",
      desc: "Durable and bright solar street lights for homes, estates, and commercial areas.",
      img: streetLightImg,
    },

    // ⭐ NEW SERVICE 3
    {
      id: 7,
      title: "Solar Maintenance & Repairs",
      desc: "We provide routine maintenance and technical repairs for all your solar components.",
      img: maintanaceImg,
    },
  ];

  return (
    <>
      <Navbar />

      <section className="min-h-screen px-6 py-32 bg-gray-50">
        <div className="max-w-5xl mx-auto mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
            Our Solar Services
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            At Twin Solar Limited, we offer premium and reliable solar solutions
            tailored for homes, offices, and industries.
          </p>
        </div>

        {/* ⭐ SERVICES GRID */}
        <div className="grid grid-cols-1 gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-3 max-w-7xl">
          {services.map((service) => (
            <div
              key={service.id}
              className="p-6 transition-shadow duration-300 bg-white shadow-md rounded-2xl hover:shadow-xl"
            >
              <div className="relative w-full mb-5 overflow-hidden bg-gray-200 h-52 rounded-xl">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="mb-2 text-xl font-semibold text-gray-800">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="max-w-4xl px-6 py-12 mx-auto mt-20 text-center text-white bg-black rounded-3xl">
          <h2 className="mb-4 text-3xl font-bold">Ready to Go Solar?</h2>
          <p className="mb-6 text-lg text-gray-300">
            Get a free inspection and discover the perfect solar package for
            your home or business.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/Quote"
              className="bg-[#CF1F1F] px-8 py-4 rounded-full font-semibold hover:bg-red-700 transition-colors"
            >
              Get Free Quote
            </a>
            <a
              href="tel:+2349077565676"
              className="px-8 py-4 font-semibold transition-colors border-2 border-white rounded-full hover:bg-white hover:text-black"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ServicesPage;
