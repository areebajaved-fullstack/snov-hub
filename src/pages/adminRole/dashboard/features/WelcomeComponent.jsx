import React from "react";

const WelcomeComponent = ({
  userName = "John",
  conversationsCount = 1280,
  className = "",
  onNewAgentClick,
  onTestBotClick,
}) => {
  return (
    <div
      className={`
        w-full 
        px-3 py-3
        sm:px-4 sm:py-4
        lg:px-0 lg:py-0
        flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4
        ${className}
      `}
    >
      {/* LEFT */}
      <div className="flex flex-col gap-1">
        
        {/* Title */}
        <h1 className="text-slate-900 font-medium font-poppins leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-3xl">
          Welcome back, {userName} 👋
        </h1>

        {/* Subtitle */}
        <p className="text-gray-500 font-normal font-poppins text-sm sm:text-base md:text-base lg:text-sm">
          Your AI agents handled{" "}
          {conversationsCount.toLocaleString()} conversations this week.
        </p>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">

        {/* Test Bot */}
        <button
          onClick={onTestBotClick}
          className="flex items-center gap-2 h-9 sm:h-10 px-3 sm:px-4 bg-gray-50 rounded-[10px] outline outline-[0.8px] outline-emerald-950"
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

          <span className="text-xs sm:text-sm md:text-base lg:text-sm font-medium font-poppins text-emerald-950">
            Test Bot
          </span>
        </button>

        {/* New Agent */}
        <button
          onClick={onNewAgentClick}
          className="flex items-center gap-2 h-9 sm:h-10 px-3 sm:px-4 bg-emerald-950 rounded-[10px]"
        >
          {/* ✅ PLUS ICON (clean SVG) */}
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M8 3.33V12.66"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M3.33 8H12.66"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>

          <span className="text-white text-xs sm:text-sm md:text-base lg:text-sm font-medium font-poppins">
            New Agent
          </span>
        </button>

      </div>
    </div>
  );
};

export default WelcomeComponent;