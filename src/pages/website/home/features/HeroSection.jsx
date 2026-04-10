
import React from 'react';
import { ArrowUpRightIcon } from './Icons.jsx';
import dashboardMock from '../../../../assets/images/dashboard-mock.svg';

const HeroSection = () => {
  return (
    <div className="w-full px-4 sm:px-6 md:px-10 lg:px-28 pt-6 md:pt-10 relative bg-neutral-50 flex flex-col items-center overflow-hidden">

      {/* Background Circle */}
      <div className="absolute size-[400px] sm:size-[700px] md:size-[1100px] lg:size-[1500px] left-1/2 -translate-x-1/2 top-[120px] bg-neutral-100 rounded-full"></div>

      <div className="relative z-10 w-full max-w-[1440px] flex flex-col items-center">

        {/* Content */}
        <div className="flex flex-col items-center text-center gap-4 px-4 md:px-8">

          <span className="text-emerald-500 text-sm md:text-base">
            Intelligent AI Agents Platform
          </span>

          <h1 className="max-w-[800px] text-slate-900 text-[1.8rem] sm:text-[2.2rem] md:text-[2.8rem] lg:text-[3.4rem] font-semibold leading-tight">
            Your AI Agents <br className="hidden md:block" />
            Platform, On Demand
          </h1>

          <p className="max-w-[650px] text-slate-500 text-sm md:text-base leading-relaxed">
            Create, train, and deploy intelligent AI agents powered by your own knowledge.
            Automate conversations, streamline support, and scale operations from one unified platform.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6 relative z-30">

            {/* Primary Button */}
            <button className="px-6 py-3 bg-[#061A22] text-white rounded-xl flex items-center gap-2 hover:bg-slate-800 transition-all hover:scale-[1.02] shadow-lg shadow-slate-900/10">
              <span className="font-semibold">Start Building Free</span>
              <ArrowUpRightIcon />
            </button>

            {/* Secondary Button */}
            <button className="px-6 py-3 border border-slate-300 rounded-xl bg-white/70 backdrop-blur-[2px] hover:bg-white transition-all hover:scale-[1.02] shadow-sm">
              <span className="font-semibold text-slate-900">Request Demo</span>
            </button>

          </div>
        </div>

        {/* Dashboard Card */}
        <div className="relative w-full lg:w-[1200px] mt-10 bg-white/5 backdrop-blur-[1px] rounded-3xl border border-white/40 shadow-[0px_40px_100px_rgba(0,0,0,0.08)] overflow-hidden">

          <img
            src={dashboardMock}
            alt="Dashboard"
            className="w-full h-auto object-contain"
          />

        </div>
      </div>

      {/* 🔥 FINAL BOTTOM EFFECT (NO WHITE PATCH) */}
      <div className="absolute bottom-0 left-0 right-0 h-[200px] pointer-events-none z-20">

        {/* Smooth transparent fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/5 via-white/5 to-transparent"></div>

        {/* Real blur layer */}
        <div className="absolute inset-0 backdrop-blur-[2px]"></div>

      </div>

    </div>
  );
};

export default HeroSection;