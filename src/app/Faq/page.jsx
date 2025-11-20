"use client"
import React, { useState } from "react";
import Navbar from "@/Component/Navbar";
import Footer from "@/Component/Footer";

const Page = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What services does Twin Solar Limited provide?",
      answer:
        "We offer complete solar solutions including installation, panel sales, inverters, batteries, maintenance, and repairs for homes, businesses, and industries."
    },
    {
      question: "How long does a typical solar installation take?",
      answer:
        "Most residential installations take 1–2 days. Commercial projects may take longer depending on size and complexity."
    },
    {
      question: "How much does a solar system cost?",
      answer:
        "Cost depends on your power needs, inverter/battery size, and type of panels. We provide free consultations and customized quotes."
    },
    {
      question: "Do you offer warranty on your solar products?",
      answer:
        "Yes. Panels, inverters, and batteries come with manufacturer warranties (2–12 years). Installation workmanship is also covered."
    },
    {
      question: "Can solar power run all my home appliances?",
      answer:
        "Yes, provided the system size matches your energy needs. Solar can run TVs, fridges, fans, ACs, pumps, and more."
    },
    {
      question: "Do you offer after-installation support?",
      answer:
        "Absolutely. We provide maintenance, periodic checks, repairs, and technical support to ensure optimal system performance."
    },
    {
      question: "How long do solar panels and inverters last?",
      answer:
        "Panels last 100–15 years, inverters 3–5 years, and batteries 5–7 years depending on type and usage."
    },
    {
      question: "Can I upgrade my existing solar system?",
      answer:
        "Yes. We can expand your system with more panels, batteries, or a larger inverter without rebuilding."
    }
  ];

  const toggleFaq = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <>
   <Navbar /> 
    <section className="max-w-6xl mx-auto px-6 py-32">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-10">
        Frequently Asked Questions
      </h1>

      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-14">
        Here are answers to common questions about our solar products and services. 
        Contact us if you need more information.
      </p>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white border rounded-lg shadow-sm">
            <button
              className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
              onClick={() => toggleFaq(index)}
            >
              <span className="font-semibold text-[#CF1F1F]">{faq.question}</span>
              <span>{openIndex === index ? "-" : "+"}</span>
            </button>
            {openIndex === index && (
              <div className="px-6 py-4 text-gray-700">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
    <Footer />
    </>
    );

};

export default Page;
