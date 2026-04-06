import React, { useState } from 'react';
import { ChevronUpIcon, ChevronDownIcon } from '../../../../assets/icons/icons.jsx';

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Can I change plans later?",
      answer: "Yes! You can upgrade, downgrade, or cancel your plan at any time. Changes take effect at the start of your next billing cycle."
    },
    {
      question: "Is there a free trial?",
      answer: ""
    },
    {
      question: "What payment methods do you accept?",
      answer: ""
    },
    {
      question: "Do you offer refunds?",
      answer: ""
    },
    {
      question: "What kind of support do you provide?",
      answer: ""
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="w-full bg-gray-100 px-4 sm:px-6 lg:px-16 xl:px-28 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Section */}
          <div className="w-full lg:w-1/2 space-y-6">
            {/* Heading */}
            <div className="space-y-4">
              <h2 className="text-slate-900 text-3xl sm:text-4xl font-semibold font-['Geist'] leading-10">
                Got Questions? We've Got Answers
              </h2>
              <p className="text-slate-500 text-base font-normal font-['Inter_Tight'] leading-6">
                Everything you need to know about our pricing, features, and how to get started with our AI agents platform.
              </p>
            </div>

            {/* Custom Solution Card */}
            <div className="bg-gradient-to-br from-emerald-950 via-emerald-950 via-10% to-cyan-950 rounded-3xl p-6 sm:p-8">
              <div className="space-y-4">
                <h3 className="text-white text-lg font-normal font-['Inter_Tight'] leading-7">
                  Need Custom Solution?
                </h3>
                <p className="text-slate-300 text-sm font-normal font-['Inter_Tight'] leading-5">
                  Talk to our sales team about Enterprise plans tailored to your needs.
                </p>
                <button className="px-6 py-2.5 bg-white rounded-2xl inline-flex justify-center items-center">
                  <span className="text-emerald-950 text-sm font-medium font-['Inter_Tight'] leading-5">
                    Contact Sales
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Section - FAQ Accordion */}
          <div className="w-full lg:w-1/2 space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl outline outline-[1.30px] outline-offset-[-1.30px] outline-slate-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full h-16 px-5 inline-flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-slate-900 text-base font-normal font-['Inter_Tight'] leading-6 text-left">
                    {faq.question}
                  </h3>
                  <div className="relative">
                    {openIndex === index ? (
                      <ChevronUpIcon className="transition-transform duration-300" />
                    ) : (
                      <ChevronDownIcon className="transition-transform duration-300" />
                    )}
                  </div>
                </button>
                
                {/* Answer Section */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-32' : 'max-h-0'
                  }`}
                >
                  <div className="px-5 pb-4">
                    <p className="text-slate-500 text-sm font-normal font-['Inter_Tight'] leading-6">
                      {faq.answer || "This information will be available soon."}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
