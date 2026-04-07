import React from "react";
import { StarBadgeIcon } from '../../../../assets/icons/icons.jsx';

const PricingHeroSection = () => {
  return (
    <div className="w-full">
      <section className="w-full relative bg-[#032125] overflow-hidden h-[400px] sm:h-[450px] md:h-[474px]">
        {/* Background overlay */}
        <div className="absolute inset-0 opacity-5" aria-hidden="true" />
        
        <div className="relative h-full flex items-center justify-start px-4 sm:px-6 md:px-8 lg:px-12 xl:px-28 py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="w-full max-w-4xl space-y-4 sm:space-y-6 md:space-y-8">
            {/* Badge */}
            <div className="w-24 sm:w-28 md:w-32 h-8 sm:h-9 md:h-10 px-2 sm:px-3 md:px-4 bg-white/10 rounded-full outline outline-[1.26px] outline-offset-[-1.26px] outline-white/20 inline-flex justify-start items-center gap-2">
              <StarBadgeIcon className="w-3 sm:w-4 md:w-[15px] h-3 sm:h-4 md:h-[15px] flex-shrink-0" />
              <span className="text-slate-300 text-xs sm:text-[0.875rem] md:text-sm font-medium font-['Inter_Tight'] leading-3 sm:leading-4 md:leading-5 whitespace-nowrap">Pricing Plans</span>
            </div>
        
            {/* Heading */}
            <div className="w-full">
              <h1 className="text-transparent text-2xl sm:text-3xl md:text-[3.5rem] lg:text-4xl font-normal font-geist leading-tight sm:leading-[3.5rem] md:leading-[4.2rem] bg-clip-text bg-gradient-to-r from-white to-white/90">
                Simple, Transparent Pricing
              </h1>
            </div>
            
            {/* Description */}
            <div className="w-full max-w-2xl sm:max-w-3xl md:max-w-4xl">
              <p className="text-white/70 text-sm sm:text-base md:text-[1rem] font-normal font-['Inter_Tight'] leading-5 sm:leading-6 md:leading-7 lg:leading-8">
                Choose the perfect plan for your needs. No hidden fees, no surprises.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingHeroSection;
