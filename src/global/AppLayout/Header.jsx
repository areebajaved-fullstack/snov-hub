import React, { useState } from "react";

const Header = ({ toggleSidebar }) => {
  const [query, setQuery] = useState("");

  return (
    <div className="fixed top-0 right-0 h-14 w-full bg-white border-b border-gray-200 flex items-center justify-between px-4 md:pl-[20rem] z-40">
      
      {/* LEFT SIDE */}
      <div className="flex items-center gap-4">
        
        {/* Mobile Menu */}
        <button
          onClick={toggleSidebar}
          className="md:hidden p-2 rounded-md hover:bg-gray-100"
        >
          ☰
        </button>

        {/* Search Bar */}
        <div
          className="relative w-64 h-9 rounded-[10px]" // ✅ 256px × 36px
          style={{ backgroundColor: "#F1F3F4" }}
        >
          
          {/* Icon */}
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M7.33 12.67C10.28 12.67 12.67 10.28 12.67 7.33C12.67 4.38 10.28 2 7.33 2C4.38 2 2 4.38 2 7.33C2 10.28 4.38 12.67 7.33 12.67Z"
              stroke="#A0A0A0"
              strokeWidth="1.3"
            />
            <path
              d="M14 14L11.13 11.13"
              stroke="#A0A0A0"
              strokeWidth="1.3"
            />
          </svg>

          {/* Input */}
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search agents, conversations..."
            className="w-full h-full pl-9 pr-3 bg-transparent text-xs outline-none placeholder:text-gray-400"
            style={{ color: "#414141" }}
          />
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-2">
        
        {/* Notification */}
        <div className="relative w-10 h-10 flex items-center justify-center rounded-[10px] hover:bg-gray-100 cursor-pointer">
          
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M4 5.33C4 4.27 4.42 3.25 5.17 2.5C5.92 1.75 6.94 1.33 8 1.33C9.06 1.33 10.08 1.75 10.83 2.5C11.58 3.25 12 4.27 12 5.33C12 10 14 11.33 14 11.33H2C2 11.33 4 10 4 5.33Z"
              stroke="#6B7280"
              strokeWidth="1.3"
            />
            <path
              d="M6.87 14C6.98 14.2 7.14 14.37 7.34 14.49C7.54 14.61 7.77 14.67 8 14.67C8.23 14.67 8.46 14.61 8.66 14.49C8.86 14.37 9.02 14.2 9.13 14"
              stroke="#6B7280"
              strokeWidth="1.3"
            />
          </svg>

          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full" />
        </div>

        {/* Avatar */}
        <div className="w-8 h-8 rounded-full bg-emerald-950 flex items-center justify-center text-white text-xs">
          JD
        </div>
      </div>
    </div>
  );
};

export default Header;