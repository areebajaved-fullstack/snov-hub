import React, { useState } from "react";
import InviteMemberModal from "./InviteMemberModal";

const WelcomeComponent = ({
  className = "",
  onNewAgentClick,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className={`w-full flex justify-between items-center ${className}`}>
      {/* Left Section - Title */}
      <div className="flex flex-col justify-start items-start gap-1">
        <h1 className="text-[#0F172A] text-2xl font-semibold font-['Inter_Tight'] leading-8">
         Team Management
        </h1>
        <p className="text-[#64748B] text-sm font-normal font-['Inter_Tight'] leading-5">
      Manage your team members and roles.
        </p>
      </div>

      {/* Right Section - Action Button */}
      <div 
        onClick={() => setIsModalOpen(true)}
        className="flex items-center gap-2 px-4 py-2.5 bg-[#021517] hover:bg-[#021517]/90 text-white rounded-[10px] transition-all duration-200 cursor-pointer shadow-sm group"
      >
        <span className="text-white">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.6663 14V12.6667C10.6663 11.9594 10.3854 11.2811 9.88529 10.781C9.3852 10.281 8.70692 10 7.99967 10H3.99967C3.29243 10 2.61415 10.281 2.11406 10.781C1.61396 11.2811 1.33301 11.9594 1.33301 12.6667V14" stroke="#F2F8F6" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M5.99967 7.33333C7.47243 7.33333 8.66634 6.13943 8.66634 4.66667C8.66634 3.19391 7.47243 2 5.99967 2C4.52692 2 3.33301 3.19391 3.33301 4.66667C3.33301 6.13943 4.52692 7.33333 5.99967 7.33333Z" stroke="#F2F8F6" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12.667 5.3335V9.3335" stroke="#F2F8F6" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M14.667 7.3335H10.667" stroke="#F2F8F6" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
        </span>
        <span className="text-sm font-medium font-['Inter_Tight'] leading-5">
     Invite Members
        </span>
      </div>
      
      {/* Invite Member Modal */}
      <InviteMemberModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default WelcomeComponent;

