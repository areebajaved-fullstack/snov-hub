import React, { useState } from "react";

const WelcomeComponent = ({
  className = "",
  onNewAgentClick,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <div className={`w-[1136px] flex justify-between items-center ${className}`}>
      {/* Left Section - Title */}
      <div className="flex flex-col justify-start items-start gap-0.5">
        <h1 className="text-slate-900 text-2xl font-medium font-['Inter_Tight'] leading-8">
          Analytics
        </h1>
        <p className="text-gray-500 text-sm font-normal font-['Inter_Tight'] leading-5">
          Insights into your AI agent performance.
        </p>
      </div>

      {/* Right Section - Export Buttons */}
      <div className="flex justify-start items-start gap-2">
        {/* Export CSV Button */}
        <button className="h-10 px-4 py-2 bg-gray-50 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-emerald-950 flex justify-center items-center gap-2">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 10V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V10" stroke="#032125" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4.66699 6.6665L8.00033 9.99984L11.3337 6.6665" stroke="#032125" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 10V2" stroke="#032125" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-center justify-center text-emerald-950 text-sm font-normal font-['Inter_Tight'] leading-5">
            Export CSV
          </span>
        </button>
        
        {/* Export PDF Button */}
        <button className="h-10 px-4 py-2 bg-emerald-950 rounded-[10px] flex justify-center items-center gap-2">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 10V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V10" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4.66699 6.6665L8.00033 9.99984L11.3337 6.6665" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 10V2" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-center justify-center text-white text-sm font-normal font-['Inter_Tight'] leading-5">
            Export PDF
          </span>
        </button>
      </div>
    </div>
  );
};

export default WelcomeComponent;

