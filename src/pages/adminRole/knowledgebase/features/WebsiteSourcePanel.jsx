import React from 'react';

const WebsiteSourcePanel = ({ onCrawl }) => {
  return (
    <div className="flex flex-col justify-start items-start gap-4">
      {/* Input Field */}
      <div className="self-stretch flex flex-col justify-start items-start gap-2">
        <label className="text-emerald-950 text-sm font-medium font-['Inter_Tight'] leading-5">Website URL</label>
        <div className="self-stretch relative">
          <input 
            type="text"
            placeholder="https://www.google.com/"
            className="w-full h-11 pl-10 pr-4 bg-neutral-50 rounded-md outline outline-1 outline-offset-[-1px] outline-gray-200 focus:outline-teal-600/50 text-gray-900 text-sm font-normal font-['Inter_Tight'] transition-all"
          />
          <div className="absolute left-[12px] top-[14px] text-gray-500">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 3C10.5 5.5 9.5 8.5 9.5 12C9.5 15.5 10.5 18.5 12 21C13.5 18.5 14.5 15.5 14.5 12C14.5 8.5 13.5 5.5 12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3.1 9H20.9M3.1 15H20.9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        <p className="text-gray-500 text-[11px] font-normal font-['Inter_Tight'] leading-4">
          We&apos;ll crawl and index all pages from this URL.
        </p>
      </div>

      {/* Tip Section */}
      <div className="self-stretch p-3 bg-neutral-100/50 rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-200 flex justify-start items-start gap-3">
        <div className="text-teal-600 mt-0.5">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className="flex flex-col gap-1">
          <div className="text-gray-900 text-xs font-semibold font-['Inter_Tight']">Tip</div>
          <div className="text-gray-500 text-[11px] font-normal font-['Inter_Tight'] leading-relaxed">
            For best results, link to your documentation root page. We&apos;ll follow internal links automatically.
          </div>
        </div>
      </div>

      {/* Action Button */}
      <div 
        onClick={onCrawl}
        className="w-[462px] h-10 px-3 py-2 bg-[#021517] hover:bg-[#021517]/90 rounded-[10px] flex justify-center items-center gap-3 cursor-pointer transition-all duration-200 mx-auto"
      >
        <div className="text-white">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 12C21 16.9706 16.9706 21 12 21M21 12C21 7.02944 16.9706 3 12 3M21 12H3M12 21C7.02944 21 3 16.9706 3 12M12 21C13.5 18.5 14.5 15.5 14.5 12C14.5 8.5 13.5 5.5 12 3M12 21C10.5 18.5 9.5 15.5 9.5 12C9.5 8.5 10.5 5.5 12 3M3 12C3 7.02944 7.02944 3 12 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className="text-white text-sm font-normal font-['Inter_Tight'] leading-5">Crawl & Index</div>
      </div>
    </div>
  );
};

export default WebsiteSourcePanel;
