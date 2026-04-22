import React from "react";

const ResponseTimeCard = ({
  title = "Average Human Response Time",
  change = "-18% from last month",
  value = "3m 42s",
  isPositive = true,
}) => {
  return (
    <div className="max-w-[1135px] bg-white rounded-2xl border border-gray-200 shadow-sm px-6 py-5 flex justify-between items-start">
      
      {/* Left Section */}
      <div className="flex flex-col gap-1">
        <h3 className="text-base font-medium text-gray-900">
          {title}
        </h3>
        <span
          className={`text-xs ${
            isPositive ? "text-[#3FA284]" : "text-red-500"
          }`}
        >
          {change}
        </span>
      </div>

      {/* Right Section */}
      <div className="text-2xl md:text-3xl font-medium text-gray-900">
        {value}
      </div>

    </div>
  );
};

export default ResponseTimeCard;