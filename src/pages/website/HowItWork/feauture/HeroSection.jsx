import React from "react";
import { StarBadgeIcon } from '../../../../assets/icons/icons.jsx';

const HeroSection = () => {
  return (
    <div className="w-full">
      <section className="w-full relative bg-[#032125] overflow-hidden h-auto min-h-[400px] xs:min-h-[450px] sm:min-h-[500px] md:h-[474px]">
        {/* Background overlay */}
        <div className="absolute inset-0 opacity-5" aria-hidden="true" />
        
        <div className="relative h-full flex items-center justify-start px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 xl:px-28 py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20">
          <div className="w-full max-w-4xl space-y-3 xs:space-y-4 sm:space-y-5 md:space-y-6">
            {/* Badge */}
            <div className="w-20 xs:w-24 sm:w-28 md:w-32 h-8 xs:h-9 sm:h-10 px-2.5 xs:px-3 sm:px-4 bg-white/10 rounded-full outline outline-[1.26px] outline-offset-[-1.26px] outline-white/20 inline-flex justify-start items-center gap-1.5 xs:gap-2">
              <StarBadgeIcon className="w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-4 sm:h-4 flex-shrink-0" />
              <span className="text-slate-300 text-[10px] xs:text-xs sm:text-sm font-medium font-['Inter_Tight'] leading-2.5 xs:leading-3 sm:leading-4 whitespace-nowrap">How it works</span>
            </div>
        
            {/* Heading */}
            <div className="w-full">
              <h1 className="text-transparent text-2xl xs:text-3xl sm:text-4xl md:text-[4rem] font-semibold font-geist leading-tight xs:leading-tight sm:leading-tight md:leading-tight bg-clip-text bg-gradient-to-r from-white to-white/90">
            Build AI Agents in 3 Steps
              </h1>
            </div>
            
            {/* Description */}
            <div className="w-full max-w-2xl sm:max-w-3xl md:max-w-4xl">
              <p className="text-white/70 text-sm xs:text-base sm:text-lg font-normal font-['Inter_Tight'] leading-relaxed xs:leading-relaxed sm:leading-relaxed md:leading-8">
No coding required. Transform your knowledge into a fully deployed, intelligent<br className="hidden sm:block" /> AI agent in minutes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
