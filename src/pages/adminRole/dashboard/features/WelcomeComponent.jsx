import React from "react";

const WelcomeComponent = ({
  userName = "John",
  conversationsCount = 1280,
  className = "",
  onNewAgentClick,
  onTestBotClick,
}) => {
  return (
    <div className={`w-full flex items-center justify-between ${className}`}>

      {/* LEFT */}
      <div className="flex flex-col gap-1">
        
        {/* Title */}
        <div className="text-slate-900 text-3xl leading-8 font-medium font-poppins">
          Welcome back, {userName} 👋
        </div>

        {/* Subtitle */}
        <div className="text-gray-500 text-sm font-normal leading-5 font-poppins">
          Your AI agents handled {conversationsCount.toLocaleString()} conversations this week.
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-2">

        {/* Test Bot */}
        <div
          onClick={onTestBotClick}
          className="h-10 px-4 py-2 bg-gray-50 rounded-[10px] outline outline-[0.8px] outline-emerald-950 flex items-center gap-2 cursor-pointer"
        >
          {/* Play Icon */}
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M4 2L13.3333 8L4 14V2Z"
              stroke="currentColor"
              strokeWidth="1.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <span className="text-sm font-medium font-poppins">
            Test Bot
          </span>
        </div>

        {/* New Agent */}
        <div
          onClick={onNewAgentClick}
          className="h-10 px-4 py-2 bg-emerald-950 rounded-[10px] flex items-center gap-2 cursor-pointer"
        >
          <span className="text-sm text-white font-medium font-poppins">
            New Agent
          </span>
        </div>
           
      </div>
    </div>
  );
};

export default WelcomeComponent;