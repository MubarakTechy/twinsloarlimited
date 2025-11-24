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
        <div className="px-6 mx-auto max-w-7xl">

          {/* HEADER */}
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">
              About <span className="text-[#CF1F1F]">Twin Solar Limited</span>
            </h2>
            <p className="max-w-2xl mx-auto mt-4 text-gray-700">
              Nigeria’s trusted solar energy company providing reliable, affordable,
              and sustainable power solutions for homes and businesses nationwide.
            </p>
          </div>

          {/* WHO WE ARE */}
          <div className="grid items-center gap-12 mb-20 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-3xl font-semibold text-gray-900">
                Who We Are
              </h3>
              <p className="mb-4 leading-relaxed text-gray-700">
                Twin Solar Limited is a fully registered Nigerian renewable energy 
                company specializing in the installation of inverters, lithium 
                batteries, solar panels, charge controllers, and complete solar 
                power systems.
              </p>
              <p className="leading-relaxed text-gray-700">
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
          <div className="grid items-center gap-12 mb-20 md:grid-cols-2">
            <Image
              src={man2}
              height={450}
              width={450}
              className="rounded-2xl object-cover h-[70vh] w-full"
              alt="About Image 2"
            />

            <div>
              <h3 className="mb-4 text-3xl font-semibold text-gray-900">
                Our Mission & Vision
              </h3>
              <p className="mb-4 leading-relaxed text-gray-700">
                Our mission is to bring uninterrupted, clean, and affordable 
                energy to every household and business in Nigeria.
              </p>
              <p className="leading-relaxed text-gray-700">
                Our vision is to build a future powered by renewable energy — 
                reducing dependency on generators and supporting a greener, 
                brighter Nigeria.
              </p>
            </div>
          </div>

          {/* WHY PEOPLE TRUST US */}
          <div className="grid items-center gap-12 mb-20 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-3xl font-semibold text-gray-900">
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
          <div className="mb-10 text-center">
            <h3 className="text-3xl font-semibold text-gray-900">
              Company Registration & Certificate
            </h3>
            <p className="mt-2 text-gray-700">
              Below is our official certificate / flyer for authenticity.
            </p>
          </div>

          <div className="max-w-2xl mx-auto mb-20">
            <div className="relative flex items-center justify-center w-full p-6 overflow-hidden bg-gray-100 shadow-lg rounded-2xl">
              <Image
                src={certImg}
                alt="Certificate Image"
                className="object-contain w-full h-auto rounded-xl"
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
