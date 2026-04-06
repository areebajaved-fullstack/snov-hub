import React from 'react';
import { ArrowUpRightIcon } from './Icons.jsx';
import dashboardMock from '../../../../assets/images/dashboard-mock.png';

const HeroSection = () => {
  return (
    <div data-layer="Hero" className="Hero w-full px-5 sm:px-6 md:px-10 xl:px-20 pt-4 md:pt-6 relative bg-neutral-50 flex flex-col justify-start items-center gap-2 md:gap-6 overflow-hidden font-sans">
      {/* Background decoration */}
      <div data-layer="Ellipse" className="Ellipse w-[150%] md:w-[2019px] h-auto aspect-square left-[-25%] md:left-[-289px] top-[100px] md:top-[150px] absolute bg-neutral-100 rounded-full -z-10" />

      <div data-layer="Container" className="Container flex flex-col justify-center items-center gap-2 relative z-10 w-full max-w-[1440px] mx-auto">
        <div data-layer="Content" className="Content flex flex-col justify-center items-center gap-3 w-full">
          <div data-layer="Intelligent AI Agents Platform" className="IntelligentAiAgentsPlatform text-emerald-500 text-[11px] md:text-[12px] font-semibold leading-5 uppercase tracking-[0.2em]">Intelligent AI Agents Platform</div>
          <div data-layer="Content" className="Content flex flex-col justify-center items-center gap-2 md:gap-4 w-full px-2">
            <h1 data-layer="Your AI Agents Platform, On Demand" className="max-w-[750px] w-full text-center text-slate-900 text-[26px] sm:text-[36px] md:text-[48px] font-bold font-primary leading-[1.2] md:leading-[1.1] tracking-tight">
              Your AI Agents Platform, <br className="hidden sm:block" /> On Demand
            </h1>
            <p data-layer="Description" className="max-w-[600px] w-full text-center text-slate-500 text-[14px] md:text-[17px] font-normal leading-relaxed md:leading-relaxed px-2">
              Create, train, and deploy intelligent AI agents powered by your own knowledge. Automate conversations, streamline support, and scale operations from one unified platform.
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div data-layer="Button" className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-4 md:mt-6 w-full px-5 sm:px-0 sm:w-auto">
          {/* Primary Button */}
          <button className="px-8 py-4 bg-[#061A22] text-white rounded-xl flex justify-center items-center gap-2 hover:bg-slate-800 transition-all transform hover:scale-[1.02] w-full sm:w-auto shadow-lg shadow-slate-900/10">
            <span className="text-base md:text-lg font-semibold tracking-wide whitespace-nowrap">Start Building Free</span>
            <ArrowUpRightIcon />
          </button>

          {/* Secondary Button */}
          <button className="px-8 py-4 text-slate-900 rounded-xl border border-slate-300 flex justify-center items-center gap-2 hover:bg-white transition-all transform hover:scale-[1.02] w-full sm:w-auto bg-white/50 backdrop-blur-sm shadow-sm">
            <span className="text-base md:text-lg font-semibold tracking-wide whitespace-nowrap">Request Demo</span>
          </button>
        </div>
      </div>

      {/* Dashboard Image Integration */}
      <div 
        data-layer="Assets" 
        className="w-full max-w-[1240px] mt-8 md:mt-12 relative bg-white/40 backdrop-blur-[2px] rounded-t-2xl md:rounded-2xl border border-white/40 overflow-hidden shadow-[0px_40px_80px_rgba(0,0,0,0.08)] mx-4 md:mx-0"
        style={{
          WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
          maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)'
        }}
      >
        <div className="p-2 md:p-3 relative bg-white/10">
          <img
            src={dashboardMock}
            alt="AI Dashboard Mockup"
            className="w-full h-auto rounded-lg md:rounded-xl object-top shadow-inner"
          />
          
          {/* Shorter "Glassy" Bottom Blur Overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-[15%] bg-gradient-to-t from-neutral-50/95 via-neutral-50/20 to-transparent backdrop-blur-[8px] z-20 pointer-events-none"></div>
          
          {/* Bottom Edge Fade */}
          <div className="absolute bottom-0 left-0 right-0 h-[5%] bg-neutral-50 z-30 opacity-30 pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
