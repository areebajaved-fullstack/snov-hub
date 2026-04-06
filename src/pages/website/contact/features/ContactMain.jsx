import React, { useState } from "react";
import { EmailIcon, PhoneIcon, LocationIcon, DropdownIcon } from "./ContactIcons";

const ContactMain = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const options = [
    "Technical Support",
    "General Inquiry", 
    "Request a Demo",
    "Talk to Sales",
    "Partnership Opportunities"
  ];
  return (
    <div className="w-full">
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-28 py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Form Section */}
            <div className="w-full bg-white rounded-3xl outline outline-[1.30px] outline-offset-[-1.30px] outline-slate-200 p-6 sm:p-8">
              <div className="space-y-6">
                {/* Form Heading */}
                <h2 className="text-slate-900 text-[28px]  font-semibold font-geist leading-8 sm:leading-10">
                  Send us a message
                </h2>
                
                {/* Name and Email Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-slate-900 text-xs sm:text-sm font-medium font-primary leading-4 sm:leading-5">
                      Full Name *
                    </label>
                    <div className="h-12 px-3 sm:px-4 py-3 rounded-[10px] outline outline-[1.30px] outline-offset-[-1.30px] outline-slate-200">
                      <input 
                        type="text" 
                        placeholder="John Doe" 
                        className="w-full h-full bg-transparent outline-none text-neutral-950/50 text-xs sm:text-sm font-normal font-primary"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-slate-900 text-xs sm:text-sm font-medium font-primary leading-4 sm:leading-5">
                      Email Address *
                    </label>
                    <div className="h-12 px-3 sm:px-4 py-3 rounded-[10px] outline outline-[1.30px] outline-offset-[-1.30px] outline-slate-200">
                      <input 
                        type="email" 
                        placeholder="john@company.com" 
                        className="w-full h-full bg-transparent outline-none text-neutral-950/50 text-xs sm:text-sm font-normal font-primary"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Company and Phone Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-slate-900 text-xs sm:text-sm font-medium font-primary leading-4 sm:leading-5">
                      Company
                    </label>
                    <div className="h-12 px-3 sm:px-4 py-3 rounded-[10px] outline outline-[1.30px] outline-offset-[-1.30px] outline-slate-200">
                      <input 
                        type="text" 
                        placeholder="Acme Inc." 
                        className="w-full h-full bg-transparent outline-none text-neutral-950/50 text-xs sm:text-sm font-normal font-primary"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-slate-900 text-xs sm:text-sm font-medium font-primary leading-4 sm:leading-5">
                      Phone Number
                    </label>
                    <div className="h-12 px-3 sm:px-4 py-3 rounded-[10px] outline outline-[1.30px] outline-offset-[-1.30px] outline-slate-200">
                      <input 
                        type="tel" 
                        placeholder="+1 (555) 000-0000" 
                        className="w-full h-full bg-transparent outline-none text-neutral-950/50 text-xs sm:text-sm font-normal font-primary"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Interest Dropdown */}
                <div className="space-y-2">
                  <label className="text-slate-900 text-xs sm:text-sm font-medium font-primary leading-4 sm:leading-5">
                    What are you interested in? *
                  </label>
                  <div className="relative">
                    <div 
                      className="w-full h-11 px-4 py-3 bg-white rounded-[10px] outline outline-1 outline-offset-[-1.10px] outline-slate-200 overflow-hidden flex items-center justify-between hover:outline-[#0F172A] focus:outline-[#0F172A] hover:bg-[#12B76A]/10 focus:bg-[#12B76A]/10 transition-colors cursor-pointer"
                      onMouseEnter={() => setShowDropdown(true)}
                      onMouseLeave={() => setShowDropdown(false)}
                    >
                      <span className="text-slate-900/60 text-xs font-medium font-geist leading-6">
                        {selectedOption || "Technical Support"}
                      </span>
                      <div className="pointer-events-none">
                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8.75 0.75L4.75 4.75L0.75 0.75" stroke="#0F172A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                    
                    {/* Dropdown Options */}
                    {showDropdown && (
                      <div 
                        className="absolute top-full left-0 w-full mt-1 bg-white rounded-[10px] outline outline-1 outline-offset-[-1.10px] outline-black overflow-hidden z-10"
                        onMouseEnter={() => setShowDropdown(true)}
                        onMouseLeave={() => setShowDropdown(false)}
                      >
                        <div className="py-2">
                          {options.map((option, index) => (
                            <div
                              key={index}
                              className={`px-4 py-2 text-xs font-medium font-geist leading-6 cursor-pointer transition-colors ${
                                selectedOption === option 
                                  ? "text-[#12B76A] bg-emerald-500/10" 
                                  : "text-black hover:bg-emerald-500/10"
                              }`}
                              onClick={() => {
                                setSelectedOption(option);
                                setShowDropdown(false);
                              }}
                            >
                              {option}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Message Textarea */}
                <div className="space-y-2">
                  <label className="text-slate-900 text-xs sm:text-sm font-medium font-primary leading-4 sm:leading-5">
                    Message *
                  </label>
                  <div className="h-28 px-3 sm:px-4 py-3 rounded-[10px] outline outline-[1.30px] outline-offset-[-1.30px] outline-slate-200">
                    <textarea 
                      placeholder="Tell us more about your needs..." 
                      className="w-full h-full bg-transparent outline-none resize-none text-neutral-950/50 text-xs sm:text-sm font-normal font-primary leading-4 sm:leading-5"
                      rows={4}
                    />
                  </div>
                </div>
                
                {/* Submit Button */}
                <div className="w-full h-12 bg-[#032125] rounded-2xl cursor-pointer hover:bg-emerald-900 transition-colors">
                  <button className="w-full h-full bg-transparent border-none text-white text-sm sm:text-base font-medium font-primary leading-5 sm:leading-6">
                    Send Message
                  </button>
                </div>
              </div>
            </div>

            {/* Info Section */}
            <div className="space-y-6">
              {/* Contact Info */}
              <div className="w-full bg-white rounded-3xl outline outline-[1.30px] outline-offset-[-1.30px] outline-slate-200 p-6 sm:p-8">
                <h3 className="text-slate-900 text-[24px] font-semibold font-geist leading-7 sm:leading-9 mb-6">
                  Get in touch
                </h3>
                <div className="space-y-6">
                  {/* Email Contact */}
                  <div className="flex items-start gap-4">
                    <div className="w-[48px] h-[48px] bg-slate-100 rounded-full flex justify-center items-center flex-shrink-0">
                      <EmailIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <h4 className="text-slate-900 text-sm sm:text-base font-normal font-primary leading-5 sm:leading-6 mb-1">
                        Email
                      </h4>
                      <p className="text-slate-500 text-xs sm:text-sm font-normal font-primary leading-4 sm:leading-5">
                        support@snovhub.com
                      </p>
                      <p className="text-slate-500 text-xs sm:text-sm font-normal font-primary leading-4 sm:leading-5">
                        sales@snovhub.com
                      </p>
                    </div>
                  </div>
                  
                  {/* Phone Contact */}
                  <div className="flex items-start gap-4">
                    <div className="w-[48px] h-[48px] bg-slate-100 rounded-full flex justify-center items-center flex-shrink-0">
                      <PhoneIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <h4 className="text-slate-900 text-sm sm:text-base font-normal font-primary leading-5 sm:leading-6 mb-1">
                        Phone
                      </h4>
                      <p className="text-slate-500 text-xs sm:text-sm font-normal font-primary leading-4 sm:leading-5">
                        +1 (555) 123-4567
                      </p>
                      <p className="text-slate-400 text-xs font-normal font-primary leading-4">
                        Mon-Fri, 9am-6pm EST
                      </p>
                    </div>
                  </div>
                  
                  {/* Office Contact */}
                  <div className="flex items-start gap-4">
                    <div className="w-[48px] h-[48px] bg-slate-100 rounded-full flex justify-center items-center flex-shrink-0">
                      <LocationIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <h4 className="text-slate-900 text-sm sm:text-base font-normal font-primary leading-5 sm:leading-6 mb-1">
                        Office
                      </h4>
                      <p className="text-slate-500 text-xs sm:text-sm font-normal font-primary leading-4 sm:leading-5">
                        123 AI Street, Suite 100
                      </p>
                      <p className="text-slate-500 text-xs sm:text-sm font-normal font-primary leading-4 sm:leading-5">
                        San Francisco, CA 94105
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="w-full bg-[#032125] rounded-3xl outline outline-[1.30px] outline-offset-[-1.30px] outline-slate-200 p-6 sm:p-8">
                <h3 className="text-white text-xl sm:text-2xl font-semibold font-geist leading-7 sm:leading-9 mb-6">
                  Office Hours
                </h3>
                <div className="space-y-3">
                  {/* Monday - Friday */}
                  <div className="flex justify-between items-center">
                    <span className="text-white text-xs sm:text-sm font-normal font-primary leading-4 sm:leading-5">
                      Monday - Friday
                    </span>
                    <span className="text-white text-xs sm:text-sm font-medium font-primary leading-4 sm:leading-5">
                      9:00 AM - 6:00 PM
                    </span>
                  </div>
                  
                  {/* Saturday */}
                  <div className="flex justify-between items-center">
                    <span className="text-white text-xs sm:text-sm font-normal font-primary leading-4 sm:leading-5">
                      Saturday
                    </span>
                    <span className="text-white text-xs sm:text-sm font-medium font-primary leading-4 sm:leading-5">
                      10:00 AM - 4:00 PM
                    </span>
                  </div>
                  
                  {/* Sunday */}
                  <div className="flex justify-between items-center">
                    <span className="text-white text-xs sm:text-sm font-normal font-primary leading-4 sm:leading-5">
                      Sunday
                    </span>
                    <span className="text-white text-xs sm:text-sm font-medium font-primary leading-4 sm:leading-5">
                      Closed
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactMain;
