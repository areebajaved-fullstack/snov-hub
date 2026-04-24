import React, { useState } from "react";

const Searchbar = () => {
  const [search, setSearch] = useState("");
  const [model, setModel] = useState("All Models");
  const [status, setStatus] = useState("All Status");

  const [openModel, setOpenModel] = useState(false);
  const [openStatus, setOpenStatus] = useState(false);

  return (
    <div className="w-full  bg-[#F7F7F7] rounded-2xl">
      {/* CARD */}
      <div className="w-full bg-white rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-gray-200 p-3 flex items-center gap-2">

        {/* ================= SEARCH ================= */}
        <div className="flex-1">
          <div className="  h-10 bg-[#F9F9F9] rounded-xl border border-[#E5E5E5] flex items-center px-3 gap-2">

            {/* 🔍 SEARCH SVG */}
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0"
            >
              <path
                d="M15.7419 15.7419L12.4881 12.488"
                stroke="#90A1B9"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.24542 14.2421C11.5573 14.2421 14.2421 11.5573 14.2421 8.24545C14.2421 4.93358 11.5573 2.24878 8.24542 2.24878C4.93355 2.24878 2.24875 4.93358 2.24875 8.24545C2.24875 11.5573 4.93355 14.2421 8.24542 14.2421Z"
                stroke="#90A1B9"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Search by Name, email..."
              className="w-full bg-transparent outline-none text-sm text-gray-600 placeholder:text-gray-400 font-poppins"
            />
          </div>
        </div>

        {/* ================= ALL MODELS ================= */}
        <div className="relative">
          <button
            onClick={() => setOpenModel(!openModel)}
            className="h-10 px-4 rounded-[10px] border border-[#0F3D3E] flex items-center gap-2 text-sm text-[#0F3D3E] font-poppins"
          >
            {model}

            {/* ⌄ DROPDOWN SVG */}
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.5 6L8 9.5L11.5 6"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {openModel && (
            <div className="absolute right-0 mt-2 w-56 bg-white rounded-[10px] border shadow-md p-3 z-20">
              <div className="flex flex-col gap-2">
                <div className="h-8 px-3 bg-teal-600/10 rounded-lg border border-teal-600 flex items-center text-xs text-emerald-950">
                  {model}
                </div>

                {["All Models", "GPT-4o", "Claude 3.5 Sonnet", "Claude 3.5 Haiku", "GPT-4o Mini"].map(
                  (item, i) => (
                    <div
                      key={i}
                      onClick={() => {
                        setModel(item);
                        setOpenModel(false);
                      }}
                      className="text-gray-500 text-xs cursor-pointer hover:bg-gray-100 px-2 py-1 rounded"
                    >
                      {item}
                    </div>
                  )
                )}
              </div>
            </div>
          )}
        </div>

        {/* ================= ALL STATUS ================= */}
        <div className="relative">
          <button
            onClick={() => setOpenStatus(!openStatus)}
            className="h-10 px-4 rounded-[10px] border border-[#0F3D3E] flex items-center gap-2 text-sm text-[#0F3D3E] font-poppins"
          >
            {status}

            {/* ⌄ DROPDOWN SVG */}
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.5 6L8 9.5L11.5 6"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {openStatus && (
            <div className="absolute right-0 mt-2 w-56 bg-white rounded-[10px] border shadow-md p-3 z-20">
              <div className="flex flex-col gap-2">
                <div className="h-8 px-3 bg-teal-600/10 rounded-lg border border-teal-600 flex items-center text-xs text-emerald-950">
                  {status}
                </div>

                {["All Status", "Active", "Archived"].map((item, i) => (
                  <div
                    key={i}
                    onClick={() => {
                      setStatus(item);
                      setOpenStatus(false);
                    }}
                    className="text-gray-500 text-xs cursor-pointer hover:bg-gray-100 px-2 py-1 rounded"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Searchbar;