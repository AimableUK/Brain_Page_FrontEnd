"use client";

import { useState } from "react";

import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { faqs } from "./faqs";

const FAQ = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const handleDisplayFAQ = (faqID: number) => {
    setOpenId((prev) => (prev === faqID ? null : faqID));
  };

  return (
    <section className="py-3 md:py-10 sm:py-16 lg:py-10">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed ">
            Answers to common questions about cataloging, borrowing, and
            managing your library
          </p>
        </div>
        <div className="relative mx-5 my-5 flex items-center justify-center">
          <div className="bg-gradient-to-l from-secondary to-secondary via-cardBorder h-[1px] w-2/4 self-center"></div>
          <div
            className="absolute left-0 right-0 top-full h-6 -mt-2"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(112,59,247,0.2) 2%, transparent 30%)",
            }}
          ></div>
        </div>

        <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="card primary-transition bg-secondary border border-gray-600 rounded-md shadow-lg cursor-pointer"
            >
              <button
                type="button"
                onClick={() => handleDisplayFAQ(faq.id)}
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
              >
                <span className="flex text-lg font-semibold">
                  {faq.question}
                </span>
                {openId === faq.id ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out
                    ${
                      openId === faq.id
                        ? "max-h-[500px] opacity-100 px-4 pb-5 sm:px-6 sm:pb-6"
                        : "max-h-0 opacity-0"
                    }
                `}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-textPrimaryLight textbase mt-9">
          Didn&apos;t find the answer you are looking for?&nbsp;
          <a
            href="#"
            title=""
            className="font-medium text-accent transition-all duration-200 hover:underline"
          >
            Contact our support
          </a>
        </p>
      </div>
    </section>
  );
};

export default FAQ;
