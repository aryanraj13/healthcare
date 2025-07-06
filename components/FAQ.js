"use client";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";


export default function FAQ() {
  const faqs = [
    {
      question: "Do you accept insurance?",
      answer:
        "No, but a superbill is provided for self-submission to your insurance provider.",
    },
    {
      question: "Are online sessions available?",
      answer: "Yes—all virtual sessions are securely conducted via Zoom.",
    },
    {
      question: "What is your cancellation policy?",
      answer: "A 24-hour notice is required for all cancellations.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#cce6ea] py-16 px-4 md:px-8" id="faq">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-400 pb-4"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center focus:outline-none"
              >
                <span
                  className={`text-lg md:text-xl font-semibold text-gray-900 ${
                    openIndex === index ? "text-gray-900" : "text-gray-800"
                  }`}
                >
                  {faq.question}
                </span>
                <ChevronDownIcon
                  className={`w-5 h-5 text-gray-600 transform transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <p className="mt-3 text-base text-gray-700">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
