import React from "react";

const SuccessState = ({ agentName, onClose }) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-10 text-center space-y-6 animate-in fade-in zoom-in duration-300">
      <div className="size-20 bg-emerald-50 rounded-full flex justify-center items-center">
        <div className="size-12 bg-emerald-500 rounded-full flex justify-center items-center shadow-lg shadow-emerald-200">
          <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.5 9L9.5 16L21.5 2" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-slate-900 font-poppins">Agent Created Successfully!</h2>
        <p className="text-slate-500 font-poppins max-w-sm mx-auto">Your AI agent "{agentName}" is ready to help your users. You can now manage it from the dashboard.</p>
      </div>
      <button 
        onClick={onClose}
        className="w-full h-12 bg-[#032125] text-white rounded-xl font-medium font-poppins hover:bg-[#02181b] transition-all active:scale-95"
      >
        Go to Dashboard
      </button>
    </div>
  );
};

export default SuccessState;
