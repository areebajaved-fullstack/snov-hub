import React from "react";

const PricingHeroSection = () => {
  return (
    <div className="w-full">
      <section className="w-full relative bg-[#032125] overflow-hidden h-auto min-h-[300px] lg:h-[474px]">
        {/* Background overlay */}
        <div className="absolute inset-0 opacity-5" aria-hidden="true" />
        
        <div className="relative h-full flex items-center justify-start px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 xl:px-28 py-10 xs:py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="w-full max-w-4xl space-y-4 xs:space-y-5 sm:space-y-6 md:space-y-8">
            {/* Badge */}
            <div className="w-16 xs:w-20 sm:w-24 md:w-28 lg:w-32 h-6 xs:h-8 sm:h-9 md:h-10 px-1.5 xs:px-2 sm:px-3 md:px-4 bg-white/10 rounded-full outline outline-[1.26px] outline-offset-[-1.26px] outline-white/20 inline-flex justify-start items-center gap-1.5 xs:gap-2">
              <svg className="w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-4 sm:h-4 md:w-[15px] md:h-[15px] flex-shrink-0" width="15" height="15" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.66403 10.3076C6.60454 10.0771 6.48436 9.86664 6.31599 9.69827C6.14761 9.52989 5.93719 9.40971 5.70661 9.35022L1.61912 8.2962C1.54938 8.27641 1.48801 8.23441 1.4443 8.17657C1.4006 8.11874 1.37695 8.04823 1.37695 7.97573C1.37695 7.90324 1.4006 7.83273 1.4443 7.77489C1.48801 7.71706 1.54938 7.67506 1.61912 7.65526L5.70661 6.60058C5.93711 6.54115 6.14747 6.42107 6.31584 6.25282C6.48421 6.08456 6.60444 5.87428 6.66403 5.64383L7.71805 1.55634C7.73764 1.48633 7.7796 1.42465 7.83752 1.38071C7.89544 1.33677 7.96615 1.31299 8.03885 1.31299C8.11155 1.31299 8.18226 1.33677 8.24018 1.38071C8.2981 1.42465 8.34006 1.48633 8.35965 1.55634L9.41301 5.64383C9.47249 5.8744 9.59267 6.08483 9.76105 6.2532C9.92943 6.42158 10.1398 6.54176 10.3704 6.60124L14.4579 7.6546C14.5282 7.67399 14.5902 7.7159 14.6344 7.77391C14.6785 7.83192 14.7025 7.90282 14.7025 7.97573C14.7025 8.04865 14.6785 8.11955 14.6344 8.17756C14.5902 8.23557 14.5282 8.27748 14.4579 8.29687L10.3704 9.35022C10.1398 9.40971 9.92943 9.52989 9.76105 9.69827C9.59267 9.86664 9.47249 10.0771 9.41301 10.3076L8.35899 14.3951C8.33939 14.4651 8.29744 14.5268 8.23951 14.5708C8.18159 14.6147 8.11089 14.6385 8.03818 14.6385C7.96548 14.6385 7.89478 14.6147 7.83685 14.5708C7.77893 14.5268 7.73697 14.4651 7.71738 14.3951L6.66403 10.3076Z" stroke="#12B76A" strokeWidth="1.33252" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-slate-300 text-[10px] xs:text-xs sm:text-[0.875rem] md:text-sm font-medium font-['Inter-400'] font-['Inter-sans'] leading-2.5 xs:leading-3 sm:leading-4 md:leading-5 whitespace-nowrap">Pricing</span>
            </div>
        
            {/* Heading */}
            <div className="w-full">
              <h1 className="text-transparent text-3xl xs:text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-[64px] font-semibold font-geist leading-tight xs:leading-tight sm:leading-tight md:leading-tight lg:leading-tight xl:leading-tight bg-clip-text bg-gradient-to-r from-white to-white/90">
              Simple,Transparent Pricing
              </h1>
            </div>
            
            {/* Description */}
            <div className="w-full max-w-2xl sm:max-w-3xl md:max-w-4xl">
              <p className="text-white/70 text-sm xs:text-base sm:text-lg md:text-[1rem] lg:text-lg font-normal font-['Inter-400'] font-['Inter-sans'] leading-relaxed xs:leading-relaxed sm:leading-relaxed md:leading-7 lg:leading-8">
               Choose the plan that's right for your team. 14-day free trial included.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingHeroSection;
