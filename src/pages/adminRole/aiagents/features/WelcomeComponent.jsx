import React from "react";

const WelcomeComponent = ({
  className = "",
  onNewAgentClick,
}) => {
  return (
    <div className={`w-full flex justify-between items-center ${className}`}>
      {/* Left Section - Title */}
      <div className="flex flex-col justify-start items-start gap-1">
        <h1 className="text-[#0F172A] text-2xl font-semibold font-['Inter_Tight'] leading-8">
          AI Agents
        </h1>
        <p className="text-[#64748B] text-sm font-normal font-['Inter_Tight'] leading-5">
          Create and manage your AI chat agents.
        </p>
      </div>

      {/* Right Section - Action Button */}
      <div 
        onClick={onNewAgentClick}
        className="flex items-center gap-2 px-4 py-2.5 bg-[#021517] hover:bg-[#021517]/90 text-white rounded-[10px] transition-all duration-200 cursor-pointer shadow-sm group"
      >
        <span className="text-white">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 3.33334V12.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3.33301 8H12.6663" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
        <span className="text-sm font-medium font-['Inter_Tight'] leading-5">
          Create Agent
        </span>
      </div>
    </div>
  );
};

export default WelcomeComponent;

