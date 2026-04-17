import React from 'react';

const SourceDetailsModal = ({ isOpen, onClose, sourceData }) => {
  if (!isOpen) return null;

  // Mock data if none provided
  const data = sourceData || {
    name: "Product Documentation",
    type: "pdf",
    items: 145,
    size: "2.4 MB",
    lastSync: "2 hours ago",
    progress: 100
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Container: size-96 (384px) strictly from snippet */}
      <div className="relative w-96 bg-white rounded-[10px] shadow-lg outline outline-1 outline-offset-[-1px] outline-gray-200 p-6 flex flex-col justify-start items-start animate-in fade-in zoom-in duration-200">
        
        {/* Close SVG button - absolute top right */}
        <button 
          onClick={onClose}
          className="absolute right-[17px] top-[17px] opacity-70 hover:opacity-100 transition-opacity"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4L4 12" stroke="#13201A" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4 4L12 12" stroke="#13201A" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Header */}
        <div className="self-stretch flex flex-col justify-start items-start gap-1.5 mb-6">
          <h2 className="text-zinc-900 text-lg font-medium font-['Inter_Tight'] leading-4">{data.name}</h2>
          <p className="text-neutral-500 text-sm font-normal font-['Inter_Tight'] leading-5">
            Knowledge source details and sync status.
          </p>
        </div>

        {/* Metadata Grid: Match image columns */}
        <div className="self-stretch flex flex-col gap-6 mb-8">
          <div className="grid grid-cols-2 gap-x-12 gap-y-6">
            <div className="flex flex-col gap-1.5">
              <span className="text-neutral-500 text-sm font-normal font-['Inter_Tight'] leading-5">Type</span>
              <span className="text-zinc-900 text-base font-normal font-['Inter_Tight'] leading-6 capitalize">{data.type}</span>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-neutral-500 text-sm font-normal font-['Inter_Tight'] leading-5">Items</span>
              <span className="text-zinc-900 text-base font-normal font-['Inter_Tight'] leading-6">{data.items}</span>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-neutral-500 text-sm font-normal font-['Inter_Tight'] leading-5">Size</span>
              <span className="text-zinc-900 text-base font-normal font-['Inter_Tight'] leading-6">{data.size}</span>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-neutral-500 text-sm font-normal font-['Inter_Tight'] leading-5">Last Sync</span>
              <span className="text-zinc-900 text-base font-normal font-['Inter_Tight'] leading-6">{data.lastSync}</span>
            </div>
          </div>
        </div>

        {/* Progress Bar Section: h-4 bg-zinc-100 strictly from snippet */}
        <div className="self-stretch flex flex-col gap-3 mb-8">
          <span className="text-zinc-900 text-sm font-normal font-['Inter_Tight'] leading-5">Indexed Chunks</span>
          <div className="w-full h-4 bg-zinc-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-teal-600 transition-all duration-500" 
              style={{ width: `${data.progress}%` }}
            />
          </div>
          <span className="text-neutral-500 text-xs font-normal font-['Inter_Tight'] leading-4">
            {data.items} chunks indexed in vector database
          </span>
        </div>

        {/* Action Buttons: Closely matching Footer snippet */}
        <div className="self-stretch inline-flex justify-end items-center gap-2">
          <button 
            onClick={onClose}
            className="h-10 px-4 bg-stone-50 rounded-lg outline outline-1 outline-offset-[-1px] outline-neutral-200 text-zinc-900 text-sm font-normal font-['Inter_Tight'] leading-5 hover:bg-stone-100 transition-all px-8"
          >
            Close
          </button>
          <button 
            className="h-10 px-4 bg-emerald-950 rounded-lg outline outline-1 outline-offset-[-1px] flex justify-center items-center gap-2 text-white text-sm font-normal font-['Inter_Tight'] leading-5 hover:bg-emerald-900 transition-all px-6"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 8C2 6.4087 2.63214 4.88258 3.75736 3.75736C4.88258 2.63214 6.4087 2 8 2C9.67737 2.00631 11.2874 2.66082 12.4933 3.82667L14 5.33333" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M14.0003 2V5.33333H10.667" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M14 8C14 9.5913 13.3679 11.1174 12.2426 12.2426C11.1174 13.3679 9.5913 14 8 14C6.32263 13.9937 4.71265 13.3392 3.50667 12.1733L2 10.6667" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M5.33333 10.6667H2V14.0001" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Re-sync
          </button>
        </div>
      </div>
    </div>
  );
};

export default SourceDetailsModal;
