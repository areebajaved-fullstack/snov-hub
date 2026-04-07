import React from "react";
import { StarBadgeIcon } from '../../../../assets/icons/icons.jsx';

const HeroSection = () => {
  return (
    <div className="w-full">
      <section className="w-full relative bg-[#032125] overflow-hidden h-[474px]">
        {/* Background overlay */}
        <div className="absolute inset-0 opacity-5" aria-hidden="true" />
        
        <div className="relative h-full flex items-center justify-start px-4 sm:px-6 md:px-8 lg:px-12 xl:px-28 py-16 sm:py-20 md:py-24">
          <div className="w-full max-w-4xl space-y-6 sm:space-y-8">
            {/* Badge */}
            <div className="w-28 sm:w-32 h-10 px-3 sm:px-4 bg-white/10 rounded-full outline outline-[1.26px] outline-offset-[-1.26px] outline-white/20 inline-flex justify-start items-center gap-2">
              <StarBadgeIcon className="w-[15px] h-[15px] flex-shrink-0" />
              <span className="text-slate-300 text-[0.875rem] sm:text-sm font-medium font-['Inter_Tight'] leading-4 sm:leading-5 whitespace-nowrap">How it works</span>
            </div>
        
            {/* Heading */}
            <div className="w-full">
              <h1 className="text-transparent text-[4rem] font-semibold font-geist leading-tight sm:leading-[3.5rem] md:leading-[4.2rem] bg-clip-text bg-gradient-to-r from-white to-white/90">
            Build AI Agents in 3 Steps
              </h1>
            </div>
            
            {/* Description */}
            <div className="w-full max-w-2xl sm:max-w-3xl md:max-w-4xl">
              <p className="text-white/70 text-[1rem] font-normal font-['Inter_Tight'] leading-6 sm:leading-7 md:leading-8">
No coding required. Transform your knowledge into a fully deployed, intelligent<br/> AI agent in minutes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
