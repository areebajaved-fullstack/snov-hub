import React from 'react';
import { ArrowUpRightIcon } from './Icons.jsx';
import dashboardMock from '../../../../assets/images/dashboard-mock.svg';

const HeroSection = () => {
  return (
    <div data-layer="Hero" className="Hero w-full px-4 sm:px-6 lg:px-28 pt-6 sm:pt-8 lg:pt-10 relative bg-neutral-50 flex flex-col lg:inline-flex justify-start items-center gap-6 lg:gap-10">
      {/* Background decoration */}
      <div data-layer="Ellipse" className="Ellipse size-[400px] sm:size-[600px] lg:size-[1520px] left-1/2 transform -translate-x-1/2 top-[80px] sm:top-[100px] lg:top-[138px] absolute bg-neutral-100 rounded-full" />
      
      <div data-layer="Container" className="Container flex flex-col justify-center items-center gap-2 md:gap-4 relative z-10 w-full max-w-[1440px] mx-auto">
        <div data-layer="Content" className="Content flex flex-col justify-center items-center gap-2 md:gap-4 w-full px-4 md:px-8">
          <div data-layer="Intelligent AI Agents Platform" className="IntelligentAiAgentsPlatform text-emerald-500 text-[0.875rem] md:text-[1rem] leading-5 tracking-tight">Intelligent AI Agents Platform</div>
          <div data-layer="Content" className="Content flex flex-col justify-center items-center gap-2 md:gap-4 w-full">
            <h1 data-layer="Your AI Agents Platform, On Demand" className="max-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[800px] w-full text-center text-slate-900 text-[1.75rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3.375rem] font-primary leading-[1.3] sm:leading-[1.2] md:leading-[1.2] lg:leading-[1.1] ">
              Your AI Agents  <br className="hidden md:block" /> Platform, On Demand
            </h1>
            <p data-layer="Description" className="max-w-[350px] sm:max-w-[450px] md:max-w-[500px] lg:max-w-[650px] w-full text-center text-slate-500 text-[0.75rem] sm:text-[0.875rem] md:text-[0.875rem] lg:text-[1rem] font-normal leading-relaxed px-2 sm:px-4">
              Create, train, and deploy intelligent AI agents powered by your own knowledge. Automate conversations, streamline support, and scale operations from one unified platform.
            </p>
          </div>

          {/* Buttons */}
          <div data-layer="Button" className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-4 md:mt-6 w-full px-4 sm:px-0 sm:w-auto">
            {/* Primary Button */}
            <button className="px-4 sm:px-6 py-2 sm:py-3 md:px-6 md:py-3 lg:px-8 lg:py-4 bg-[#061A22] text-white rounded-xl flex justify-center items-center gap-2 hover:bg-slate-800 transition-all transform hover:scale-[1.02] w-full sm:w-auto shadow-lg shadow-slate-900/10">
              <span className="text-xs sm:text-sm md:text-sm lg:text-base font-semibold tracking-wide whitespace-nowrap">Start Building Free</span>
              <ArrowUpRightIcon />
            </button>

            {/* Secondary Button */}
            <button className="px-4 sm:px-6 py-2 sm:py-3 md:px-6 md:py-3 lg:px-8 lg:py-4 text-slate-900 rounded-xl border border-slate-300 flex justify-center items-center gap-2 hover:bg-white transition-all transform hover:scale-[1.02] w-full sm:w-auto bg-white/50 backdrop-blur-sm shadow-sm">
              <span className="text-xs sm:text-sm md:text-sm lg:text-base font-semibold tracking-wide whitespace-nowrap">Request Demo</span>
            </button>
          </div>
        </div>

        {/* Dashboard Image Integration */}
        <div 
          data-layer="Assets" 
          className="w-full sm:w-[90%] md:w-[100%] lg:w-[1200px] h-auto mt-4 sm:mt-6 md:mt-6 lg:mt-8 relative bg-white/40 backdrop-blur-[2px] rounded-t-xl sm:rounded-t-2xl md:rounded-t-2xl lg:rounded-3xl border border-white/40 shadow-[0px_20px_40px_sm:0px_30px_60px_lg:0px_40px_80px_rgba(0,0,0,0.08)] mx-2 sm:mx-4 md:mx-4 lg:mx-0"
        >
          <img
            src={dashboardMock}
            alt="AI Dashboard Mockup"
            className="w-full h-auto max-w-[300px] sm:max-w-[500px] md:max-w-[800px] lg:max-w-[1200px] rounded-lg sm:rounded-lg md:rounded-xl lg:rounded-xl object-contain shadow-inner mb-4 sm:mb-6 md:mb-8"
          />  
          {/* Shorter "Glassy" Bottom Blur Overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-[10%] bg-gradient-to-t from-neutral-50/95 via-neutral-50/20 to-transparent backdrop-blur-[8px] z-20 pointer-events-none"></div>
          
          {/* Bottom Edge Fade */}
          <div className="absolute bottom-0 left-0 right-0 h-[5%] bg-neutral-50 z-30 opacity-30 pointer-events-none"></div>
          {/* White Box Shadow at Bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white/50 to-transparent shadow-[0_-20px_80px_rgba(255,255,255,0.8)] pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
