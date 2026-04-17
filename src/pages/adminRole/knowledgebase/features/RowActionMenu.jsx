import React from 'react';

const RowActionMenu = ({ position, onClose, onResync, onDelete, onViewDetails }) => {
  if (!position) return null;

  return (
    <>
      {/* Invisible backdrop for closing */}
      <div 
        className="fixed inset-0 z-[110]" 
        onClick={onClose}
      />
      
      {/* Menu Container: w-56 from snippet */}
      <div 
        className="fixed z-[120] w-56 h-auto bg-white rounded-[10px] 
        shadow-[0px_8px_24px_rgba(0,0,0,0.12)] outline outline-1 outline-offset-[-1.10px]
         outline-gray-200 py-3 transition-all duration-200"
        style={{ 
          top: `${position.top}px`, 
          left: `${position.left}px` 
        }}
      >
        <button 
          onClick={onViewDetails}
          className="w-full px-[18px] py-2 text-left text-gray-500 hover:text-gray-900 text-xs font-normal font-['Inter_Tight'] leading-5 transition-all"
        >
          View Details
        </button>
        
        <div className="px-3 py-1">
          <button 
            onClick={onResync}
            className="w-full h-8 px-3 bg-[#E6F4F1] rounded-lg outline outline-[1.30px] outline-offset-[-1.30px] outline-teal-600 flex items-center justify-start text-emerald-950 text-xs font-normal font-['Inter_Tight'] leading-5 transition-all"
          >
            Re-Sync
          </button>
        </div>

        <button 
          onClick={onDelete}
          className="w-full px-[24px] py-2 text-left text-gray-500 hover:text-red-500 text-xs font-normal font-['Inter_Tight'] leading-5 transition-all"
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default RowActionMenu;
