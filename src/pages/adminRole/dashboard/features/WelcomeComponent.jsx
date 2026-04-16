import React from "react";

const WelcomeComponent = ({
  userName = "John",
  conversationsCount = 1280,
  className = "",
  onNewAgentClick,
}) => {
  return (
    <div className={` w-[1136px] Container self-stretch inline-flex justify-between items-center ${className}`}>
      {/* Left Section - Welcome Message */}
      <div className="Container size- inline-flex flex-col justify-start items-start gap-0.5">
        <div className="Heading1 self-stretch flex flex-col justify-start items-start">
          <div className="WelcomeBackJohn justify-center text-slate-900 text-2xl font-medium font-poppins leading-8">
            Welcome back, {userName} 👋
          </div>
        </div>
        <div className="Container self-stretch flex flex-col justify-start items-start">
          <div className="YourAiAgentsHandled1280ConversationsThisWeek justify-center text-gray-500 text-sm font-normal font-poppins leading-5">
            Your AI agents handled {conversationsCount.toLocaleString()} conversations this week.
          </div>
        </div>
      </div>

      {/* Right Section - Action Buttons */}
      <div className="Container size- flex justify-start items-center gap-2">
        {/* Test Bot Button */}
        <div className="Button h-10 px-4 py-2 bg-gray-50 rounded-[10px] outline outline-[0.80px] outline-offset-[-0.80px] outline-emerald-950 flex justify-center items-center gap-2 hover:bg-emerald-950 hover:text-white transition-colors duration-200 cursor-pointer">
          <div data-svg-wrapper className="Svg relative">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 2L13.3333 8L4 14V2Z" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div className="TestBot text-center justify-center text-sm font-medium font-poppins leading-5">
            Test Bot
          </div>
        </div>

        {/* New Agent Button */}
        <div 
          onClick={onNewAgentClick}
          className="Button h-10 px-4 py-2 bg-emerald-950 rounded-[10px] flex justify-center items-center gap-2 cursor-pointer hover:bg-emerald-900 transition-colors duration-200"
        >
          <div data-svg-wrapper className="Svg relative">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.33301 8H12.6663" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8 3.33334V12.6667" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div className="NewAgent text-center justify-center text-white text-sm font-medium font-poppins leading-5">
            New Agent
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeComponent;
