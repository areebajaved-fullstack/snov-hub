import React, { useRef } from 'react';

const FileSourcePanel = ({ onUpload }) => {
  const fileInputRef = useRef(null);

  const handleContainerClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && onUpload) {
      onUpload(file);
    }
  };

  return (
    <div className="flex flex-col justify-start items-center gap-5">
      {/* Hidden File Input */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        accept=".pdf,.docx,.csv,.txt"
      />

      {/* Upload Panel: h-48 rounded-xl border-dashed */}
      <div 
        onClick={handleContainerClick}
        className="self-stretch h-48 relative rounded-xl border-2 border-dashed border-gray-200 bg-white hover:border-teal-600/30 transition-all duration-200 cursor-pointer flex flex-col justify-center items-center gap-3"
      >
        {/* Large Central Icon */}
        <div className="size-14 bg-teal-600/10 rounded-2xl flex justify-center items-center mb-1">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24.5 17.5V22.1667C24.5 22.7855 24.2542 23.379 23.8166 23.8166C23.379 24.2542 22.7855 24.5 22.1667 24.5H5.83333C5.21449 24.5 4.621 24.2542 4.18342 23.8166C3.74583 23.379 3.5 22.7855 3.5 22.1667V17.5" stroke="#3FA284" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M19.8337 9.33333L14.0003 3.5L8.16699 9.33333" stroke="#3FA284" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14 3.5V17.5" stroke="#3FA284" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        
        {/* Labels Content */}
        <div className="flex flex-col items-center gap-1 px-4">
          <div className="text-gray-900 text-sm font-medium font-['Inter_Tight'] leading-5 text-center px-10">Click to upload or drag and drop</div>
          <div className="text-gray-500 text-xs font-normal font-['Inter_Tight'] leading-4 text-center">PDF, DOCX, CSV, TXT supported (max 10MB)</div>
        </div>

        {/* Extension Pills at Bottom */}
        <div className="flex justify-center items-start gap-2 mt-2">
          {['.pdf', '.docx', '.csv', '.txt'].map((ext) => (
            <div key={ext} className="px-3 py-1 bg-gray-100 rounded-full border border-transparent flex justify-center items-center">
              <div className="text-teal-900 text-[10px] font-medium font-['Inter_Tight'] leading-tight">{ext}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Primary Action Button: w-[462px] h-9 emerald-950 */}
      <div 
        onClick={handleContainerClick}
        className="w-[462px] h-10 px-3 py-2 bg-[#021517] hover:bg-[#021517]/90 rounded-[10px] flex justify-center items-center gap-3 cursor-pointer transition-all duration-200 shadow-lg"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.3337 4L6.00033 11.3333L2.66699 8" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <div className="text-white text-sm font-normal font-['Inter_Tight'] leading-5">Upload</div>
      </div>
    </div>
  );
};

export default FileSourcePanel;
