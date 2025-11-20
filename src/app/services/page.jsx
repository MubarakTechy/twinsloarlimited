"use client";
import React from "react";
import Image from "next/image";

// TODO: Import your images here
import solarPanelImg from "../../images/panalbg1.jpg";
import batteryImg from "../../images/betterywall.jpg";
import inverterImg from "../../images/wallbettery.jpg";
import installationImg from "../../images/manandwallbattery.jpg";
import Navbar from "../../Component/Navbar";
import Footer from "../../Component/Footer";

const ServicesPage = () => {
  const services = [
    {
      id: 1,
      title: "Solar Panel Installation",
      desc: "High-efficiency solar panels designed to give you long-lasting renewable energy.",
      img: solarPanelImg, // replace with imported image
    },
    {
      id: 2,
      title: "Battery Backup Systems",
      desc: "Reliable lithium and gel batteries that store energy for uninterrupted power.",
      img: batteryImg,
    },
    {
      id: 3,
      title: "Inverter Sales & Setup",
      desc: "Top-quality inverters with smooth conversion and long-term durability.",
      img: inverterImg,
    },
    {
      id: 4,
      title: "Professional Installation",
      desc: "Certified solar engineers available for expert installation across Nigeria.",
      img: installationImg,
    },
  ];

  return (
    <><Navbar />
    <section className="min-h-screen bg-gray-50 py-32 px-6">
      {/* HEADER */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Our Solar Services
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          At Twin Solar Limited, we offer premium, durable, and reliable solar
          energy solutions tailored for homes, offices, and industries.
        </p>
      </div>

      {/* SERVICES GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6"
          >
            {/* IMAGE PLACEHOLDER */}
            <div className="w-full h-52 bg-gray-200 rounded-xl mb-5 relative overflow-hidden">
              {service.img ? (
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="flex items-center justify-center h-full text-gray-500 font-medium text-sm">
                  Image Here
                </div>
              )}
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {service.desc}
            </p>
          </div>
        ))}
      </div>

      {/* CTA SECTION */}
      <div className="max-w-4xl mx-auto text-center mt-20 bg-black py-12 px-6 rounded-3xl text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Go Solar?</h2>
        <p className="text-gray-300 mb-6 text-lg">
          Get a free inspection and discover the perfect solar package for your
          home or business.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/Quote"
            className="bg-[#CF1F1F] px-8 py-4 rounded-full font-semibold hover:bg-red-700 transition-colors"
          >
            Get Free Quote
          </a>
          <a
            href="tel:+2349077565676"
            className="border-2 border-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition-colors"
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