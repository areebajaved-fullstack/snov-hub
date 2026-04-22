import React, { useState } from "react";

const SecurityPage = () => {
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [sessionTimeoutEnabled, setSessionTimeoutEnabled] = useState(true);

  return (
    <div className="w-[1136px] bg-white rounded-lg border border-gray-200 shadow-sm p-6 flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-gray-100 rounded-xl flex items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M11.6663 7.58294C11.6663 10.4996 9.62467 11.9579 7.19801 12.8038C7.07094 12.8468 6.9329 12.8448 6.80717 12.7979C4.37467 11.9579 2.33301 10.4996 2.33301 7.58294V3.49961C2.33301 3.3449 2.39447 3.19653 2.50386 3.08713C2.61326 2.97774 2.76163 2.91628 2.91634 2.91628C4.08301 2.91628 5.54134 2.21628 6.55634 1.32961C6.67992 1.22403 6.83713 1.16602 6.99967 1.16602C7.16222 1.16602 7.31943 1.22403 7.44301 1.32961C8.46384 2.22211 9.91634 2.91628 11.083 2.91628C11.2377 2.91628 11.3861 2.97774 11.4955 3.08713C11.6049 3.19653 11.6663 3.3449 11.6663 3.49961V7.58294Z" stroke="#3FA284" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h2 className="text-base font-medium text-gray-900 font-['Inter_Tight']">
          Security
        </h2>
      </div>

      {/* Security Options */}
      <div className="flex flex-col gap-4">
        {/* Two-Factor Authentication */}
        <div className="w-full flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-900 font-['Inter_Tight']">
              Two-Factor Authentication
            </span>
            <span className="text-xs text-gray-500 font-['Inter_Tight']">
              Add an extra layer of security
            </span>
          </div>
          <button
            onClick={() => setTwoFactorEnabled(!twoFactorEnabled)}
            className={`w-11 h-6 rounded-full flex items-center transition-colors duration-200 ${
              twoFactorEnabled ? 'bg-[#3FA284] justify-end' : 'bg-gray-300 justify-start'
            }`}
          >
            <div className="w-4 h-4 bg-white rounded-full shadow-md"></div>
          </button>
        </div>

        {/* Session Timeout */}
        <div className="w-full flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-900 font-['Inter_Tight']">
              Session Timeout
            </span>
            <span className="text-xs text-gray-500 font-['Inter_Tight']">
              Auto-logout after inactivity
            </span>
          </div>
          <button
            onClick={() => setSessionTimeoutEnabled(!sessionTimeoutEnabled)}
            className={`w-11 h-6 rounded-full flex items-center transition-colors duration-200 ${
              sessionTimeoutEnabled ? 'bg-[#3FA284] justify-end' : 'bg-gray-300 justify-start'
            }`}
          >
            <div className="w-4 h-4 bg-white rounded-full shadow-md"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SecurityPage;
