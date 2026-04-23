import React, { useState } from "react";

const KnowledgeStep = () => {
  const [selected, setSelected] = useState([]);

  const data = [
    { name: "FAQs", docs: 24 },
    { name: "Product Catalog", docs: 156 },
    { name: "Support Docs", docs: 89 },
    { name: "Company Policies", docs: 12 },
    { name: "Onboarding Guide", docs: 8 },
  ];

  const toggleItem = (name) => {
    setSelected((prev) =>
      prev.includes(name)
        ? prev.filter((i) => i !== name)
        : [...prev, name]
    );
  };

  return (
    <div className="w-full max-w-[598px] min-h-[288px] flex flex-col gap-4 font-Poppins tracking-wide px-3 sm:px-0">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="flex flex-col gap-[2px]">
          <h3 className="text-md text-[#121821] font-Poppins tracking-wide">
            Knowledge Folders
          </h3>
          <p className="text-xs text-slate-500 font-Poppins tracking-wide">
            Select which knowledge sources this agent can access.
          </p>
        </div>

        {/* Upload Button */}
        <button className="flex items-center justify-center gap-1 bg-emerald-950 text-[#FFFFFF] text-sm px-3 py-1.5 rounded-lg hover:opacity-90 w-fit">
          
          + Upload
        </button>
      </div>

      {/* List */}
      <div className="flex flex-col gap-2 font-Poppins tracking-wide">
        {data.map((item) => {
          const isActive = selected.includes(item.name);

          return (
            <div
              key={item.name}
              onClick={() => toggleItem(item.name)}
              className={`flex items-center gap-3 p-3 rounded-xl font-Poppins tracking-wide border cursor-pointer transition
                ${
                  isActive
                    ? "border-cyan-950 bg-gray-50"
                    : "border-zinc-200"
                }`}
            >
              {/* Checkbox */}
              <div
                className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0
                ${
                  isActive
                    ? "bg-cyan-950 border-cyan-950"
                    : "border-cyan-950"
                }`}
              >
                {isActive && (
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path
                      d="M1 4L3.5 6.5L9 1"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>

              {/* ✅ UPDATED SVG (your provided one) */}
              <div className="shrink-0">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M3.99967 9.33334L4.99967 7.4C5.10839 7.1841 5.27376 7.00181 5.47808 6.87264C5.68241 6.74346 5.91801 6.67227 6.15967 6.66667H13.333M13.333 6.66667C13.5367 6.66631 13.7378 6.71263 13.9208 6.80206C14.1038 6.89149 14.2639 7.02166 14.3887 7.18258C14.5136 7.3435 14.5999 7.53089 14.6411 7.73037C14.6823 7.92985 14.6773 8.13612 14.6263 8.33334L13.5997 12.3333C13.5254 12.621 13.3571 12.8757 13.1216 13.0569C12.8861 13.238 12.5968 13.3353 12.2997 13.3333H2.66634C2.31272 13.3333 1.97358 13.1929 1.72353 12.9428C1.47348 12.6928 1.33301 12.3536 1.33301 12V3.33334C1.33301 2.97971 1.47348 2.64058 1.72353 2.39053C1.97358 2.14048 2.31272 2 2.66634 2H5.26634C5.48933 1.99782 5.70931 2.0516 5.90614 2.15642C6.10297 2.26124 6.27037 2.41375 6.39301 2.6L6.93301 3.4C7.05441 3.58436 7.21969 3.73568 7.41401 3.84041C7.60833 3.94513 7.8256 3.99997 8.04634 4H11.9997C12.3533 4 12.6924 4.14048 12.9425 4.39053C13.1925 4.64058 13.333 4.97971 13.333 5.33334V6.66667Z"
                    stroke="#6F7D90"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Text */}
              <div className="flex flex-wrap items-center gap-x-2 text-sm">
                <span className="text-gray-900">{item.name}</span>
                <span className="text-xs text-slate-500">
                  {item.docs} documents
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Message */}
      {selected.length === 0 && (
        <div className="py-2 text-center text-xs text-amber-500">
          No folders selected — agent will rely only on the model's general knowledge.
        </div>
      )}
    </div>
  );
};

export default KnowledgeStep;
  
  
  
  
  
  
  
  
  
  