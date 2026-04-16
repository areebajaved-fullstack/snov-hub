import React from "react";

const MonthlyUsage = ({
  title = "Monthly Usage",
  currentUsage = 4000,
  maxUsage = 10000,
  className = "",
}) => {
  const percentage = Math.round((currentUsage / maxUsage) * 100);

  return (
    <div className={`BackgroundBorderShadow self-stretch h-24 relative bg-white rounded-2xl shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-gray-200 ${className}`}>
      {/* Header Container */}
      <div className="Container w-[1094px] left-[21px] top-[21px] absolute inline-flex justify-between items-center">
        {/* Title */}
        <div className="Container size- inline-flex flex-col justify-start items-start">
          <div className="MonthlyUsage justify-center text-gray-500 text-sm font-normal font-poppins leading-5">{title}</div>
        </div>
        
        {/* Usage Display */}
        <div className="Container size- inline-flex flex-col justify-start items-start">
          <div className="00010000 justify-center text-slate-900 text-sm font-medium font-poppins leading-5">
            {currentUsage.toLocaleString()} / {maxUsage.toLocaleString()}
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="Progressbar w-[1094px] h-2.5 left-[21px] top-[49px] absolute bg-gray-100 rounded-[9999px] overflow-hidden">
        <div 
          className="Background h-2.5 left-0 top-0 absolute bg-gradient-to-b from-teal-600 to-emerald-900 rounded-[42px]"
          style={{ width: `${percentage}%` }}
        />
      </div>

      {/* Percentage Text */}
      <div className="Container w-[1094px] left-[21px] top-[65px] absolute inline-flex flex-col justify-start items-start">
        <div className="OfPlanUsed justify-center text-gray-500 text-xs font-normal font-poppins leading-4">
          {percentage}% of plan used
        </div>
      </div>
    </div>
  );
};

export default MonthlyUsage;