import React, { useState } from "react";

const PublishStep = () => {
  const [enabled, setEnabled] = useState(true);
  const [copied, setCopied] = useState(false);

  const scriptText = `<script src="https://widget.agentflow.com/v1.js" data-`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(scriptText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  return (
    <div className="w-full max-w-[612px] mx-auto flex flex-col items-center gap-10 font-poppins tracking-wide">
      
      {/* Top Section */}
      <div className="flex flex-col items-center gap-3 text-center">
        <div className="w-20 h-20 rounded-full bg-teal-600/10 flex items-center justify-center">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
            <path
              d="M5 13l4 4L19 7"
              stroke="#3FA284"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <h2 className="text-lg font-medium text-slate-900 font-poppins">
          Ready to Publish
        </h2>

        <p className="text-sm text-gray-500 max-w-[380px] font-poppins">
          Your agent is configured and ready for deployment.
        </p>
      </div>

      {/* Content */}
      <div className="w-full flex flex-col gap-5">
        
        {/* Publish Toggle */}
        <div className="w-full flex items-center justify-between p-4 bg-stone-50 rounded-xl border border-zinc-200">
          <div>
            <h3 className="text-base font-medium text-[#2B3546] font-poppins tracking-wide">
              Publish Status
            </h3>
            <p className="text-xs text-[#6B7280] font-poppins">
              Make your agent live on all selected channels.
            </p>
          </div>

          <button
            onClick={() => setEnabled(!enabled)}
            className={`w-10 h-5 flex items-center rounded-full transition ${
              enabled ? "bg-[#3FA284]" : "bg-gray-300"
            }`}
          >
            <div
              className={`w-4 h-4 bg-white rounded-full shadow-md transform transition ${
                enabled ? "translate-x-5" : "translate-x-1"
              }`}
            />
          </button>
        </div>

        {/* Embed Script */}
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-medium text-[#0F1729] font-poppins">
            Embed Script
          </h3>

          <div className="w-full flex items-center justify-between p-3 bg-stone-50 rounded-xl border border-zinc-200">
            
            <p className="text-sm text-[#13201A] truncate font-poppins">
              {scriptText}
            </p>

            {/* Copy Button */}
            <button
              onClick={handleCopy}
              className="relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition"
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0)">
                  <path
                    d="M25.332 17.3334H18.6654C17.929 17.3334 17.332 17.9303 17.332 18.6667V25.3334C17.332 26.0698 17.929 26.6667 18.6654 26.6667H25.332C26.0684 26.6667 26.6654 26.0698 26.6654 25.3334V18.6667C26.6654 17.9303 26.0684 17.3334 25.332 17.3334Z"
                    stroke="#13201A"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.6654 22.6667C13.932 22.6667 13.332 22.0667 13.332 21.3334V14.6667C13.332 13.9334 13.932 13.3334 14.6654 13.3334H21.332C22.0654 13.3334 22.6654 13.9334 22.6654 14.6667"
                    stroke="#13201A"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>

                <defs>
                  <clipPath id="clip0">
                    <rect
                      width="16"
                      height="16"
                      fill="white"
                      transform="translate(12 12)"
                    />
                  </clipPath>
                </defs>
              </svg>

              {copied && (
                <span className="absolute -top-7 text-xs bg-black text-white px-2 py-1 rounded font-poppins">
                  Copied!
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublishStep;