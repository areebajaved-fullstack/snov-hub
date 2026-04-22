import React from "react";

const MonthlyUsage = ({
  title = "Monthly Usage",
  currentUsage = 4000,
  maxUsage = 10000,
  className = "",
}) => {
  const percentage = Math.round((currentUsage / maxUsage) * 100);

  return (
    <div
      className={`self-stretch relative bg-white rounded-2xl shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)] border border-gray-200 font-poppins ${className}`}
      style={{ height: "102px" }}
    >
      {/* Content Container */}
      <div className="h-full w-full flex flex-col justify-center px-3 md:px-4 py-2 md:py-3">
        
        {/* Header */}
        <div className="flex justify-between items-start mb-2 md:mb-3">
          
          {/* Title */}
          <div className="text-gray-500 text-xs md:text-sm font-normal leading-4 md:leading-5">
            {title}
          </div>
          
          {/* Usage */}
          <div className="text-slate-900 text-xs md:text-sm font-medium leading-4 md:leading-5">
            {currentUsage.toLocaleString()} / {maxUsage.toLocaleString()}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-2 md:h-2.5 bg-gray-100 rounded-full overflow-hidden mb-1.5 md:mb-2">
          <div
            className="h-full bg-gradient-to-b from-teal-600 to-emerald-900 rounded-full"
            style={{ width: `${percentage}%` }}
          />
        </div>

        {/* Percentage */}
        <div className="text-gray-500 text-xs font-normal leading-4">
          {percentage}% of plan used
        </div>
      </div>
    </div>
  );
};

export default MonthlyUsage;