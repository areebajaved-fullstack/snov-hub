import React from 'react';

const ManualSourcePanel = ({ onSave }) => {
  return (
    <div className="flex flex-col justify-start items-start gap-4">
      {/* Title Field */}
      <div className="self-stretch flex flex-col justify-start items-start gap-2">
        <label className="text-emerald-950 text-sm font-medium font-['Inter_Tight'] leading-5">Title</label>
        <div className="self-stretch relative">
          <input 
            type="text"
            placeholder="e.g Pricing FAQ, Return Policy"
            className="w-full h-11 pl-10 pr-4 bg-neutral-50 rounded-md outline outline-1 outline-offset-[-1px] outline-gray-200 focus:outline-teal-600/50 text-gray-900 text-sm font-normal font-['Inter_Tight'] transition-all"
          />
          <div className="absolute left-[12px] top-[14px] text-gray-500">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.9078 1H4.71108C3.21379 1 2 2.21379 2 3.71108V12.6189C2 14.1162 3.21379 15.33 4.71108 15.33H10.9078C12.4051 15.33 13.6189 14.1162 13.6189 12.6189V3.71108C13.6189 2.21379 12.4051 1 10.9078 1Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M5.09863 4.10229H10.5208M5.09863 7.20067H10.5208M5.09863 10.2991H7.80971" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="self-stretch flex flex-col justify-start items-start gap-2">
        <label className="text-emerald-950 text-sm font-medium font-['Inter_Tight'] leading-5">Content</label>
        <textarea 
          placeholder="Enter your knowledge content here. This will be indexed and made available to your AI Agents."
          className="self-stretch h-20 p-3 bg-neutral-100/50 rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-200 focus:outline-teal-600/50 text-gray-900 text-sm font-normal font-['Inter_Tight'] resize-none placeholder:text-gray-400"
        />
      </div>

      {/* Action Button */}
      <div 
        onClick={onSave}
        className="w-[462px] h-10 px-3 py-2 bg-[#021517] hover:bg-[#021517]/90 rounded-[10px] flex justify-center items-center gap-3 cursor-pointer transition-all duration-200 mx-auto"
      >
        <div className="text-white text-sm font-normal font-['Inter_Tight'] leading-5">Save & Index</div>
      </div>
    </div>
  );
};

export default ManualSourcePanel;
