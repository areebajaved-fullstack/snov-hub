import React from "react";

const TestBotModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 overflow-y-auto" style={{ fontFamily: '"Inter Tight", sans-serif' }}>
      <div className="bg-white rounded-[20px] shadow-2xl w-full max-w-[550px] flex flex-col overflow-hidden animate-in fade-in zoom-in duration-200 relative my-auto">
        
        {/* Header Section */}
        <div data-layer="HorizontalBorder" className="w-full px-6 pt-5 pb-4 bg-white border-b border-gray-200 flex flex-col justify-start items-start relative flex-shrink-0">
          <button 
            onClick={onClose}
            className="absolute right-6 top-5 text-gray-400 hover:text-gray-600 transition-colors z-[151]"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          <div data-layer="Heading 2" className="flex flex-col justify-start items-start">
            <div data-layer="Test Bot" className="justify-center text-slate-900 text-lg font-semibold leading-7">Test Bot</div>
            <div data-layer="Description" className="justify-center text-slate-500 text-sm font-normal leading-5">Preview how your agent responds to messages</div>
          </div>
        </div>

        {/* Agent Selector Section */}
        <div className="w-full px-6 pt-4 pb-2 bg-white flex flex-col flex-shrink-0">
          <div data-layer="Combobox" className="w-full h-10 px-3 py-2 bg-stone-50 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-zinc-200 flex justify-between items-center cursor-pointer hover:bg-zinc-100 transition-all">
            <div className="flex items-center gap-2">
              <span className="text-gray-900 text-sm font-normal">Support Assistant</span>
              <div data-layer="live" className="h-4 px-2 py-0.5 bg-teal-600 rounded-full flex justify-center items-center">
                <span className="text-white text-[10px] font-medium leading-4 uppercase tracking-wider">live</span>
              </div>
            </div>
            <div data-svg-wrapper data-layer="SVG" className="Svg relative opacity-50">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6L8 10L12 6" stroke="#121821" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Chat Body Section */}
        <div className="flex-1 min-h-[400px] max-h-[500px] overflow-y-auto p-6 space-y-6 bg-white flex flex-col">
          {/* Bot Greeting */}
          <div className="flex justify-start gap-2.5 max-w-[90%]">
            <div className="size-8 rounded-full bg-emerald-100 flex-shrink-0 flex items-center justify-center">
              <div data-svg-wrapper className="relative">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 8V4H8" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M18 8H6C4.89543 8 4 8.89543 4 10V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V10C20 8.89543 19.1046 8 18 8Z" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div className="bg-slate-50 p-3.5 rounded-2xl rounded-tl-none border border-slate-100 shadow-sm">
              <p className="text-gray-900 text-sm font-normal leading-relaxed">
                Hi there! 👋 I'm your AI support assistant. How can I help you today?
              </p>
            </div>
          </div>

          {/* User Message */}
          <div className="flex justify-end gap-2.5 self-end max-w-[90%]">
            <div className="bg-[#48A085] p-3.5 rounded-2xl rounded-tr-none text-white shadow-md">
              <p className="text-sm font-normal leading-relaxed">
                helo
              </p>
            </div>
            <div className="size-8 rounded-full bg-slate-100 flex-shrink-0 flex items-center justify-center border border-slate-200">
              <div data-svg-wrapper className="relative">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Bot Response */}
          <div className="flex justify-start gap-2.5 max-w-[90%]">
            <div className="size-8 rounded-full bg-emerald-100 flex-shrink-0 flex items-center justify-center">
              <div data-svg-wrapper className="relative">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 8V4H8" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M18 8H6C4.89543 8 4 8.89543 4 10V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V10C20 8.89543 19.1046 8 18 8Z" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div className="bg-[#EDF1F1] p-3.5 rounded-2xl rounded-tl-none border border-zinc-200/50">
              <p className="text-gray-900 text-sm font-normal leading-relaxed">
                Thanks for reaching out! I'm here to help. Could you tell me more about what you need?
              </p>
            </div>
          </div>
        </div>

        {/* Footer Input Section */}
        <div data-layer="HorizontalBorder" className="w-full px-6 pb-6 pt-4 bg-white border-t border-zinc-200 flex flex-col gap-4 flex-shrink-0">
          <div data-layer="Form" className="flex items-center gap-2">
            <div data-layer="Input" className="flex-1 h-10 relative bg-stone-50 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-zinc-200 px-4 flex items-center">
              <input 
                type="text" 
                placeholder="Type a message..."
                className="w-full bg-transparent border-none outline-none text-slate-900 text-xs font-normal placeholder:text-slate-500"
              />
            </div>
            <button data-layer="Button" className="size-10 bg-[#728787] text-white rounded-[10px] flex items-center justify-center hover:bg-[#5d6f6f] transition-all active:scale-95 shadow-md">
              <div data-svg-wrapper className="relative">
                <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.69021 14.4573C9.71554 14.5205 9.75957 14.5743 9.81639 14.6117C9.87322 14.6491 9.94011 14.6682 10.0081 14.6664C10.0761 14.6647 10.1419 14.6422 10.1968 14.6019C10.2516 14.5617 10.2928 14.5057 10.3149 14.4413L14.6482 1.77466C14.6695 1.71559 14.6736 1.65167 14.66 1.59037C14.6463 1.52907 14.6154 1.47293 14.571 1.42852C14.5266 1.3841 14.4705 1.35326 14.4092 1.33959C14.3479 1.32592 14.2839 1.32999 14.2249 1.35133L1.55821 5.68466C1.49388 5.70673 1.43783 5.74794 1.39759 5.80278C1.35736 5.85761 1.33486 5.92344 1.33312 5.99144C1.33138 6.05943 1.35047 6.12632 1.38785 6.18315C1.42523 6.23997 1.47909 6.284 1.54221 6.30933L6.82888 8.42933C6.996 8.49624 7.14785 8.5963 7.27526 8.72348C7.40266 8.85066 7.503 9.00233 7.57021 9.16933L9.69021 14.4573Z" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14.5697 1.43134L7.27637 8.724" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </button>
          </div>
          <div data-layer="Container" className="text-center justify-center text-slate-500 text-[10px] font-normal leading-4">
            Testing as: <span className="font-semibold text-slate-600">Support Assistant</span> • Simulated responses
          </div>
        </div>

      </div>
    </div>
  );
};

export default TestBotModal;
