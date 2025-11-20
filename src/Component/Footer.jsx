/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";
import Image from "next/image";
import Logo from "./../images/Logonav.png";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaTiktok } from "react-icons/fa";

const SocialIcons = () => {
  const socialLinks = [
    { name: "Facebook", url: "https://www.facebook.com/twinsolarlimited", icon: <FaFacebookF size={18} /> },
    { name: "Instagram", url: "https://www.instagram.com/twin_solar_limited?igsh=MWQ2eHk4YjJldG5sag==", icon: <FaInstagram size={18} /> },
    { name: "WhatsApp", url: "https://wa.me/23409077565676", icon: <FaWhatsapp size={18} /> },
    { name: "TikTok", url: "https://www.tiktok.com/@twin.solar.ltd?_r=1&_t=ZS-91YYPEJ6tmM", icon: <FaTiktok size={18} /> },
  ];

  return (
    <div className="flex gap-4 mt-3">
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-white/10 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-[#CF1F1F] hover:border-[#CF1F1F] hover:scale-110 transition-all duration-300"
          aria-label={social.name}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black text-[#EFEFEF] pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* ====== TOP SECTION ====== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 pb-12 border-b border-gray-700">

          {/* ====== COMPANY INFO ====== */}
          <div className="space-y-6">
            <a href="/" className="relative block w-36 h-20 mx-auto md:mx-0">
              <Image src={Logo} alt="Twin Solar Limited Logo" fill className="object-contain" />
            </a>

            <p className="text-gray-300 leading-relaxed text-center md:text-left">
              Providing reliable & sustainable solar energy solutions across Nigeria.
              Powering homes, businesses, and the future.
            </p>

            <SocialIcons />
          </div>

          {/* ====== QUICK LINKS ====== */}
          <div className="space-y-6 text-center md:text-left">
            <h3 className="text-xl font-semibold text-white border-l-4 border-[#CF1F1F] pl-3">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li><Link href="/about" className="text-gray-300 hover:text-[#CF1F1F] transition">About Us</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-[#CF1F1F] transition">Services</Link></li>
              <li><Link href="/Faq" className="text-gray-300 hover:text-[#CF1F1F] transition">FAQ</Link></li>
              <li><Link href="/Contact" className="text-gray-300 hover:text-[#CF1F1F] transition">Contact</Link></li>
            </ul>
          </div>

          {/* ====== CONTACT INFO ====== */}
          <div className="space-y-6 text-center md:text-left">
            <h3 className="text-xl font-semibold text-white border-l-4 border-[#CF1F1F] pl-3">
              Contact Info
            </h3>

            <div className="space-y-4 text-gray-300">
              <p className="flex items-center justify-center md:justify-start gap-3">
                <span className="w-8 h-8 bg-[#CF1F1F] text-white rounded-full flex items-center justify-center">📞</span>
                <a href="tel:+2341234567890" className="hover:text-white transition">+234 123 456 7890</a>
              </p>

              <p className="flex items-center justify-center md:justify-start gap-3">
                <span className="w-8 h-8 bg-[#CF1F1F] text-white rounded-full flex items-center justify-center">📧</span>
                <a href="mailto:twinsolarlimited25@gmail.com" className="hover:text-white transition">twinsolarlimited25@gmail.com</a>
              </p>

              <p className="flex items-center justify-center md:justify-start gap-3">
                {/* <span className="w-8 h-8 bg-[#CF1F1F] text-white rounded-full flex items-center justify-center">📍</span> */}
                Shop B5/6 Complex Plaza, 10B Olojo Drive, Mile 10 Bus Stop, Lagos, Nigeria.
              </p>
            </div>
          </div>
        </div>

        {/* ====== COPYRIGHT ====== */}
        <div className="pt-6 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Twin Solar Limited. Powered by Clean Energy | All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
