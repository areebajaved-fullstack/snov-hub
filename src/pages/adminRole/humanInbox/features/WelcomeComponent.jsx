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
          Human Inbox
        </h1>
        <p className="text-[#64748B] text-sm font-normal font-['Inter_Tight'] leading-5">
          Manage your real-time conversations here.
        </p>
      </div>

      {/* Right Section - Action Button */}
      
    </div>
  );
};

export default WelcomeComponent;

