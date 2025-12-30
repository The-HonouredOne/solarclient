import React, { useState } from "react";
import { HiMinus, HiPlus } from "react-icons/hi2";

const faqs = [
  {
    question: "What makes Solvix different from other solar providers?",
    answer:
      "At Solvix, we deliver efficient solar technology, expert installation, and reliable support—making clean energy accessible and affordable for all.",
  },
  {
    question: "What types of solar solutions does Solvix offer?",
    answer:
      "We provide residential, commercial, off-grid, and battery storage solutions, as well as EV charging stations.",
  },
  {
    question: "How does the consultation process work?",
    answer:
      "We start with a free consultation to understand your energy needs, property, and budget goals.",
  },
  {
    question: "How much does a Solvix solar system cost?",
    answer:
      "Solar costs vary by system size, energy use, and location—but at Solvix, we’re committed to making solar accessible and affordable for all.",
  },
];

const FAQ = () => {
  const [open, setOpen] = useState(null);

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

      
        <div className="text-center mb-16">
          {/* <p className="text-lime-600 text-sm font-semibold mb-3">
            // FAQ
          </p> */}
          <h2 className="text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="border-t pt-6 cursor-pointer"
              onClick={() => toggle(index)}
            >
           
              <div className="flex justify-between items-start gap-4">
                <h4 className="text-gray-900 font-semibold">
                  {item.question}
                </h4>

                <span className="text-lime-600 text-lg mt-1">
                  {open === index ? <HiMinus /> : <HiPlus />}
                </span>
              </div>

              
              {open === index && (
                <p className="text-gray-600 text-sm mt-4 leading-relaxed">
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
