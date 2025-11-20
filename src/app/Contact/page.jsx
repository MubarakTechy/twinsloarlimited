"use client";

import React from "react";
import Navbar from "../../Component/Navbar";
import Footer from "../../Component/Footer"
import { FaFacebookF, FaInstagram, FaWhatsapp, FaTiktok, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const ContactPage = () => {
const socialLinks = [
    { name: "Facebook", url: "https://www.facebook.com/twinsolarlimited", icon: <FaFacebookF size={18} /> },
    { name: "Instagram", url: "https://www.instagram.com/twin_solar_limited?igsh=MWQ2eHk4YjJldG5sag==", icon: <FaInstagram size={18} /> },
    { name: "WhatsApp", url: "https://wa.me/23409077565676", icon: <FaWhatsapp size={18} /> },
    { name: "TikTok", url: "https://www.tiktok.com/@twin.solar.ltd?_r=1&_t=ZS-91YYPEJ6tmM", icon: <FaTiktok size={18} /> },
  ];

  return (
     <>
     <Navbar />
    <section className="min-h-screen bg-gray-50 py-32 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">

        {/* Contact Info */}
        <div className="flex-1 flex flex-col justify-center gap-8 text-black">
          <h2 className="text-4xl font-bold text-[#CF1F1F]">Contact Us</h2>
          <p className="text-black text-lg">Reach out to us for any queries about solar solutions.</p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#CF1F1F] rounded-full flex items-center justify-center text-white">
                <FaMapMarkerAlt />
              </div>
              <div>
                <p className="font-semibold text-black">Shop B5/6 Complex Plaza</p>
                <p className="text-black">10B Olojo Drive, Mile 10 Bus Stop, Lagos, Nigeria</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#CF1F1F] rounded-full flex items-center justify-center text-white">
                <FaPhone />
              </div>
              <a href="tel:+23409077565676" className="text-black hover:text-[#CF1F1F] transition-colors font-medium">
                +234 907 756 5676
              </a>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#CF1F1F] rounded-full flex items-center justify-center text-white">
                <FaEnvelope />
              </div>
              <a href="mailto:twinsolarlimited25@gmail.com" className="text-black hover:text-[#CF1F1F] transition-colors font-medium">
                twinsolarlimited25@gmail.com
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="w-10 h-10 bg-[#CF1F1F] rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#CF1F1F] transition-colors"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="flex-1 rounded-2xl overflow-hidden shadow-xl border-2 border-[#CF1F1F]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d253683.3823094155!2d3.166242681191186!3d6.546560550529859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1shop%20B5%2F6%20complex%20plaza%2010B%20Olojo%20Drive%2C%20mile%2010%20bus%20stop%20Lagos%2CNigeria..!5e0!3m2!1sen!2sng!4v1763554234193!5m2!1sen!2sng"
            width="100%"
            height="100%"
            className="h-96 lg:h-full"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>
    </section>
    <Footer/>
   </>
  );
};

export default ContactPage;
