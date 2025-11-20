"use client";
import React from "react";
import Image from "next/image";

import man from "../../images/flyer.jpg"; 
import man2 from "../../images/flyer2.jpg";
import man3 from "../../images/team1.jpg";
import certImg from "../../images/certificate.jpg";

import Navbar from "../../Component/Navbar";
import Footer from "../../Component/Footer";

const About = () => {
  return (
    <>
      <Navbar />

      <section className="py-32 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">

          {/* HEADER */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              About <span className="text-[#CF1F1F]">Twin Solar Limited</span>
            </h2>
            <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
              Nigeria’s trusted solar energy company providing reliable, affordable,
              and sustainable power solutions for homes and businesses nationwide.
            </p>
          </div>

          {/* WHO WE ARE */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                Who We Are
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Twin Solar Limited is a fully registered Nigerian renewable energy 
                company specializing in the installation of inverters, lithium 
                batteries, solar panels, charge controllers, and complete solar 
                power systems.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We are committed to delivering durable, efficient, and environmentally 
                friendly solar solutions designed to withstand Nigeria’s energy landscape.
              </p>
            </div>

            <Image
              src={man}
              height={450}
              width={450}
              className="rounded-2xl object-cover h-[70vh] w-full"
              alt="About Image 1"
            />
          </div>

          {/* MISSION & VISION */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <Image
              src={man2}
              height={450}
              width={450}
              className="rounded-2xl object-cover h-[70vh] w-full"
              alt="About Image 2"
            />

            <div>
              <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                Our Mission & Vision
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our mission is to bring uninterrupted, clean, and affordable 
                energy to every household and business in Nigeria.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our vision is to build a future powered by renewable energy — 
                reducing dependency on generators and supporting a greener, 
                brighter Nigeria.
              </p>
            </div>
          </div>

          {/* WHY PEOPLE TRUST US */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                Why People Trust Us
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>✔ Over 500+ successful installations</li>
                <li>✔ Professional and certified technicians</li>
                <li>✔ High-quality solar components</li>
                <li>✔ 24/7 technical support & maintenance</li>
                <li>✔ Trusted nationwide since operation</li>
              </ul>
            </div>

            <Image
              src={man3}
              height={450}
              width={450}
              className="rounded-2xl object-cover h-[70vh] w-full"
              alt="About Image 3"
            />
          </div>

          {/* FLYER / CERTIFICATE */}
          <div className="text-center mb-10">
            <h3 className="text-3xl font-semibold text-gray-900">
              Company Registration & Certificate
            </h3>
            <p className="text-gray-700 mt-2">
              Below is our official certificate / flyer for authenticity.
            </p>
          </div>

          <div className="max-w-2xl mx-auto mb-20">
            <div className="relative w-full rounded-2xl overflow-hidden bg-gray-100 flex items-center justify-center p-6 shadow-lg">
              <Image
                src={certImg}
                alt="Certificate Image"
                className="rounded-xl object-contain w-full h-auto"
              />
            </div>
          </div>

          {/* TEAM SECTION REMOVED */}

        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
