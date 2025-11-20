"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import max from "../images/Logonav.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/About", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/gallery", label: "Gallery" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2" onClick={closeMenu}>
          <div className="relative w-28 h-14 md:w-32 md:h-16 lg:w-40 lg:h-20">
            <Image
              src={max}
              alt="Twin Solar Limited Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-white font-medium">
          {navLinks.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="hover:text-[#CF1F1F] transition-colors duration-300"
              >
                {item.label}
              </Link>
            </li>
          ))}

          <li>
            <Link
              href="/Quote"
              className="bg-[#CF1F1F] px-5 py-2 rounded-full text-white hover:text-black hover:bg-white transition-all duration-300 hover:scale-105"
            >
              Get a Quote
            </Link>
          </li>
        </ul>

        {/* Mobile Hamburger Icon */}
        <button
          onClick={toggleMenu}
          className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center"
        >
          <span
            className={`absolute block h-0.5 w-6 bg-white transition-all duration-300 ${
              isMenuOpen ? "rotate-45 top-1/2" : "top-1"
            }`}
          />
          <span
            className={`absolute block h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? "w-0 opacity-0" : "w-6 opacity-100 top-1/2"
            }`}
          />
          <span
            className={`absolute block h-0.5 w-6 bg-white transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 top-1/2" : "top-3"
            }`}
          />
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden bg-black shadow-lg transition-all duration-500 overflow-hidden ${
          isMenuOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 text-white font-medium px-6">

          {navLinks.map((item, index) => (
            <li
              key={item.href}
              className="w-full text-center"
              style={{
                animation: isMenuOpen
                  ? `slideInDown 0.4s ease-out ${index * 0.1}s both`
                  : "none",
              }}
            >
              <Link
                href={item.href}
                onClick={closeMenu}
                className="block w-full py-3 border-b border-white hover:text-[#CF1F1F] hover:border-[#CF1F1F] transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}

          <li className="w-full text-center">
            <Link
              href="/Quote"
              onClick={closeMenu}
              className="block w-full bg-[#CF1F1F] px-8 py-3 rounded-full text-white hover:bg-red-700 transition-all"
            >
              Get a Quote
            </Link>
          </li>
        </ul>
      </div>

      {/* FIXED: Overlay is now BELOW menu and not blocking links */}
      <div
        className={`md:hidden  inset-0 bg-black transition-all duration-500 ${
          isMenuOpen ? "opacity-40" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
        style={{ zIndex: isMenuOpen ? 40 : 0 }}
      />
    </nav>
  );
}
