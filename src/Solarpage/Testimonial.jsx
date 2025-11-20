"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import WhatsAppButton from "@/Component/WhatsAppButton"

import { Navigation, Zoom } from "swiper/modules";
import "swiper/css/zoom";
import "swiper/css/navigation";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// TODO: Import your certificate image here
import certImg from "../images/certificate.jpg";

// TODO: Import your CEO and Manager images here
import ceoImg from "../images/ceo.jpg";
import managerImg from "../images/manager (1).jpg";

const Testimonial = () => {
  const clientReviews = [
    {
      id: 1,
      name: "Mrs. Adeola Johnson",
      location: "Lagos",
      rating: 5,
      review:
        "Twin Solar Limited installed my home inverter and solar panel system flawlessly. The power supply has been stable ever since. Their customer support is top-notch. Highly recommended!",
      project: "Residential Solar Installation",
      duration: "3 months ago",
    },
    {
      id: 2,
      name: "Kingsley Okon",
      location: "Abuja",
      rating: 5,
      review:
        "Our business now runs smoothly without worrying about power outages. Twin Solar delivered exactly what they promised - reliable energy and excellent after-sales support.",
      project: "Commercial Solar System",
      duration: "6 months ago",
    },
    {
      id: 3,
      name: "Michael Thompson",
      location: "Port Harcourt",
      rating: 5,
      review:
        "Professional service, durable products, and quick installation. I'm very satisfied with the quality of their solar systems and the energy savings we've achieved.",
      project: "Hybrid Solar Solution",
      duration: "2 months ago",
    },
    {
      id: 4,
      name: "Dr. Sarah Williams",
      location: "Ibadan",
      rating: 5,
      review:
        "The team was professional, punctual, and highly skilled. Our hospital now has uninterrupted power for critical equipment. Thank you Twin Solar!",
      project: "Hospital Backup System",
      duration: "1 year ago",
    },
  ];

  const renderStars = (rating) => (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className={`text-lg ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
        >
          ★
        </span>
      ))}
    </div>
  );

  return (
    <section className="min-h-screen bg-gray-50 pt-24 pb-20 relative z-0">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* HEADER */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#CF1F1F]/10 text-[#CF1F1F] px-4 py-2 rounded-full text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-[#CF1F1F] rounded-full"></span>
            Trusted by 500+ Clients
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover why businesses and homeowners across Nigeria trust Twin Solar Limited for their energy solutions
          </p>
        </div>

        {/* LEADERSHIP SECTION */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Meet Our Leadership
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experienced professionals dedicated to powering Nigeria future with sustainable energy
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* CEO Card */}
           <div className="bg-black rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-8">
                <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="relative w-32 h-32 rounded-full overflow-hidden shadow-lg flex-shrink-0">
                    <Image 
                    src={ceoImg} 
                    fill
                    alt="CEO - Twin Solar Limited" 
                    className="object-cover"
                    sizes="128px"
                    />
                </div>

                <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold text-white">Precious Kelvin Obi</h3>
                    <p className="text-[#CF1F1F] font-semibold mb-3">Chief Executive Officer</p>
                    <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-white">15+ Years Experience</span>
                    </div>
                </div>
                </div>


                <blockquote className="mt-6 text-white font-bold text-sm leading-relaxed border-l-4 border-[#CF1F1F] pl-4">
                  At Twin Solar Limited, we are committed to delivering affordable,
                  durable, and high-performance solar systems that transform homes
                  and businesses across Nigeria.
                </blockquote>
              </div>
            </div>

            {/* Manager Card */}
            <div className="bg-black rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
  <div className="p-8">
    <div className="flex flex-col md:flex-row items-center gap-6">
      <div className="relative w-32 h-32 rounded-full overflow-hidden shadow-lg flex-shrink-0">
        <Image 
          src={managerImg} 
          fill
          alt="Operations Manager - Twin Solar Limited" 
          className="object-cover"
          sizes="128px"
        />
      </div>

      <div className="text-center md:text-left">
        <h3 className="text-2xl font-bold text-white">Deborah Blessing Ibitoye</h3>
        <p className="text-[#CF1F1F] font-semibold mb-3">Operations Manager</p>
        <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-sm text-white">12+ Years Experience</span>
        </div>
      </div>
    </div>
                <blockquote className="mt-6 font-bold text-white text-[16px] leading-relaxed border-l-4 border-[#CF1F1F] pl-4">
                  We ensure every installation meets the highest standards of safety,
                  quality, and durability. Your energy needs are our priority.
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-20">
  <div className="text-center mb-12">
    <h2 className="text-3xl font-bold text-gray-900 mb-3">
      Our Certification
    </h2>
    <p className="text-gray-600 max-w-2xl mx-auto">
      Recognized and certified for delivering top-quality and industry-standard solar solutions.
    </p>
  </div>

  <div className="max-w-sm mx-auto">
    <Swiper
      modules={[Navigation, Zoom]}
      zoom={true}
      navigation={true}
      slidesPerView={1}
      className="rounded-xl shadow-lg"
    >
      <SwiperSlide>
        <div className="swiper-zoom-container">
          <Image
            src={certImg}
            alt="Certificate"
            className="rounded-xl"
          />
        </div>
      </SwiperSlide>

      {/* If you want more certificate images later, just add more SwiperSlides */}
    </Swiper>
  </div>
</div>

        {/* CLIENT REVIEWS */}
        <div className="testimonial-swiper">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Client Success Stories
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real experiences from our satisfied customers across Nigeria
            </p>
          </div>

          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
            className="pb-12"
          >
            {clientReviews.map((review) => (
              <SwiperSlide key={review.id}>
                <div className="bg-white rounded-2xl shadow-lg p-8 h-full hover:shadow-xl transition-shadow duration-300">
                  <div className="flex justify-between items-start mb-4">
                    {renderStars(review.rating)}
                    <span className="text-sm text-gray-500">{review.duration}</span>
                  </div>

                  <blockquote className="text-gray-700 mb-6 leading-relaxed">
                    {review.review}
                  </blockquote>

                  <div className="mb-6">
                    <div className="inline-flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full">
                      <span className="w-2 h-2 bg-[#CF1F1F] rounded-full"></span>
                      <span className="text-sm font-medium text-gray-700">
                        {review.project}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#CF1F1F]/20 to-[#CF1F1F]/10 rounded-full flex items-center justify-center text-[#CF1F1F] font-semibold">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{review.name}</h4>
                      <p className="text-sm text-gray-600">{review.location}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="swiper-pagination !relative !w-auto mt-8 flex justify-center"></div>
        </div>

        {/* CTA */}
        <div className="mt-20 bg-gradient-to-r from-[black] to-[black] rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Join Our Satisfied Customers?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto text-lg">
            Get your free solar assessment and join hundreds of happy clients enjoying reliable, sustainable energy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/Contact"
              className="bg-[#CF1F1F] text-white px-8 py-4 rounded-full font-semibold hover:bg-red-700 transition-colors text-center"
            >
              Get Free Assessment
            </a>
            <a
              href="tel:+2341234567890"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-colors text-center"
            >
              Call: +234 09077565676
            </a>
            <WhatsAppButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;