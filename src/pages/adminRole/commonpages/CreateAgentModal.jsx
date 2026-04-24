import React, { useState } from "react";
import TemplateStep from "./TemplateStep";
import PersonalityStep from "./PersonalityStep";
import KnowledgeStep from "./KnwledgeStep";
import ChannelsStep from "./ChannelStep";
import PublishStep from "./PublishStep";

const steps = [
  "Template",
  "Personality",
  "Knowledge",
  "Channels",
  "Publish",
];

const footerConfig = [
  { left: "", right: "Next" },
  { left: "Back", right: "Next" },
  { left: "Back", right: "Next" },
  { left: "Back", right: "Next" },
  { left: "Back", right: "Publish Agent" },
];

const CreateAgentModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(0);
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const next = () => {
    if (step === 0 && !selectedTemplate) return;
    setStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const back = () => {
    setStep((prev) => Math.max(prev - 1, 0));
  };

  if (!isOpen) return null;

  const isNextDisabled = step === 0 && !selectedTemplate;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-3"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-[600px] rounded-2xl bg-white shadow-lg overflow-hidden font-poppins"
      >
        {/* HEADER */}
        <div className="flex justify-between border-b border-gray-200 px-6 pt-6 pb-4">
          <div>
            <h2 className="text-lg font-medium text-slate-900">
              Create New Agent
            </h2>

            <p className="mt-1.5 text-sm text-gray-500">
              Set up your AI agent in 5 simple steps
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-md p-1 hover:bg-gray-100 transition"
          >
            ✕
          </button>
        </div>

        {/* STEPPER */}
        <div className="px-6 py-4 flex items-center justify-between">
          {steps.map((label, i) => (
            <div key={i} className="flex flex-1 items-center">
              <div className="flex items-center gap-1.5">
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-medium
                    ${
                      i === step
                        ? "border border-teal-600 text-teal-600 bg-white"
                        : i < step
                        ? "bg-[#3FA284] text-white"
                        : "bg-gray-100 text-gray-500"
                    }`}
                >
                  {i < step ? (
                    <svg
                      className="w-3 h-3"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16.704 5.29a1 1 0 010 1.42l-7.25 7.25a1 1 0 01-1.42 0l-3.25-3.25a1 1 0 111.42-1.42l2.54 2.54 6.54-6.54a1 1 0 011.42 0z"
                      />
                    </svg>
                  ) : (
                    i + 1
                  )}
                </div>

                <span
                  className={`text-[11px] font-medium whitespace-nowrap
                    ${
                      i === step ? "text-[#121821]" : "text-[#6F7D90]"
                    }`}
                >
                  {label}
                </span>
              </div>

              {i !== steps.length - 1 && (
                <div
                  className={`mx-2 h-[1.5px] flex-1 rounded
                    ${i < step ? "bg-teal-600" : "bg-gray-200"}`}
                />
              )}
            </div>
          ))}
        </div>

        
        {/* CONTENT */}
<div className="h-[420px] overflow-hidden p-6">
  {step === 0 && (
    <TemplateStep
      selectedTemplate={selectedTemplate}
      setSelectedTemplate={setSelectedTemplate}
    />
  )}

  {step === 1 && <PersonalityStep />}
  {step === 2 && <KnowledgeStep />}
  {step === 3 && <ChannelsStep />}
  {step === 4 && <PublishStep />}
</div>

        {/* FOOTER */}
        <div className="flex items-center justify-between border-t px-6 py-4">
          
          {/* LEFT BUTTON */}
          <div>
            {step !== 0 && (
              <button
                onClick={back}
                className="flex items-center gap-2 text-sm font-medium text-gray-700"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M10 12L6 8L10 4"
                    stroke="#121821"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                {footerConfig[step].left}
              </button>
            )}
          </div>

          {/* RIGHT BUTTON (ICON FIXED) */}
          <button
            onClick={next}
            disabled={isNextDisabled}
            className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-white transition
              ${
                isNextDisabled
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-emerald-950 hover:opacity-90"
              }`}
          >
            {footerConfig[step].right}

            {/* ❌ Hide icon on last step */}
            {step !== steps.length - 1 && (
              <svg width="6" height="10" viewBox="0 0 6 10" fill="none">
                <path
                  d="M0.666992 8.66669L4.66699 4.66669L0.666992 0.666687"
                  stroke="white"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateAgentModal;