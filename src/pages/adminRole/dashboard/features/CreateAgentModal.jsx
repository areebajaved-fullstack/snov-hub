import React, { useState } from "react";

const CreateAgentModal = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    greeting: "",
    avatar: null,
  });

  if (!isOpen) return null;

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      // Final submission logic
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center bg-black/50 backdrop-blur-sm overflow-y-auto p-4 py-10">
      <div className="bg-white rounded-[20px] shadow-2xl w-full max-w-[600px] flex flex-col items-center overflow-x-hidden animate-in fade-in zoom-in duration-200 relative my-auto">
        
        {/* Header Section - Matches code.md exactly: w-[600px] h-24 px-6 pt-6 pb-4 */}
        <div className="w-full h-24 px-6 pt-6 pb-4 bg-white border-b border-gray-200 flex flex-col justify-start items-start relative flex-shrink-0">
          <button 
            onClick={onClose}
            className="absolute right-6 top-6 text-gray-400 hover:text-gray-600 transition-colors z-[101]"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          <div className="Heading2 self-stretch flex flex-col justify-start items-start">
            <div className="CreateNewAgent justify-center text-slate-900 text-lg font-medium font-intertight leading-7">Create New Agent</div>
          </div>
          <div className="Margin self-stretch pt-1.5 flex flex-col justify-start items-start">
            <div className="Container self-stretch flex flex-col justify-start items-start">
              <div className="SetUpYourAiAgentIn3SimpleSteps justify-center text-gray-500 text-sm font-normal font-intertight leading-5">Set up your AI agent in 3 simple steps</div>
            </div>
          </div>
        </div>

        {/* Stepper Section - Matches code.md: w-[598px] px-6 */}
        <div className="Container w-full max-w-[598px] px-6 pt-4 pb-2 flex flex-col justify-start items-start flex-shrink-0">
          <div className="Container self-stretch inline-flex justify-center items-center gap-1">
            {/* Step 1: Identity */}
            <div className="Container flex-1 flex justify-center items-center">
              <div className="Container w-24 flex justify-start items-center gap-2">
                <div className={`Background size-8 py-2 rounded-full flex justify-center items-center ${currentStep >= 1 ? 'outline outline-[1.50px] outline-offset-[-1.50px] outline-teal-600' : 'bg-gray-100'}`}>
                  <div className={`text-center justify-center text-xs font-medium font-intertight leading-4 ${currentStep >= 1 ? 'text-teal-600' : 'text-slate-500'}`}>1</div>
                </div>
                <div className="Identity justify-center text-gray-900 text-xs font-normal font-intertight leading-4">Identity</div>
              </div>
              <div className="Margin ml-1 hidden sm:block">
                <svg width="52" height="2" viewBox="0 0 52 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="8" width="35.2" height="2" rx="1" fill="#E2E5E9"/>
                </svg>
              </div>
            </div>

            {/* Step 2: Model */}
            <div className="Container flex-1 flex justify-center items-center">
              <div className="Container w-24 flex justify-start items-center gap-2">
                <div className={`Background size-8 py-2 rounded-full flex justify-center items-center ${currentStep >= 2 ? 'outline outline-[1.50px] outline-offset-[-1.50px] outline-teal-600' : 'bg-gray-100'}`}>
                  <div className={`text-center justify-center text-xs font-medium font-intertight leading-4 ${currentStep >= 2 ? 'text-teal-600' : 'text-slate-500'}`}>2</div>
                </div>
                <div className={`Model justify-center text-xs font-normal font-intertight leading-4 ${currentStep >= 2 ? 'text-gray-900' : 'text-slate-500'}`}>Model</div>
              </div>
              <div className="Margin ml-1 hidden sm:block">
                <svg width="59" height="2" viewBox="0 0 59 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="8" width="42.8" height="2" rx="1" fill="#E2E5E9"/>
                </svg>
              </div>
            </div>

            {/* Step 3: Knowledge */}
            <div className="Container flex-1 flex justify-start items-center gap-2">
              <div className={`Background size-8 py-2 rounded-full flex justify-center items-center ${currentStep >= 3 ? 'outline outline-[1.50px] outline-offset-[-1.50px] outline-teal-600' : 'bg-gray-100'}`}>
                <div className={`text-center justify-center text-xs font-medium font-intertight leading-4 ${currentStep >= 3 ? 'text-teal-600' : 'text-slate-500'}`}>3</div>
              </div>
              <div className={`Knowledge justify-center text-xs font-normal font-intertight leading-4 ${currentStep >= 3 ? 'text-gray-900' : 'text-slate-500'}`}>Knowledge</div>
            </div>
          </div>
        </div>

        {/* Body Section - Matches code.md: h-72 min-h-72 px-6 */}
        <div className="Container h-72 min-h-72 px-6 flex flex-col justify-start items-start w-full overflow-hidden mt-2">
          {currentStep === 1 ? (
            <div className="Container w-full max-w-[550px] mx-auto flex flex-col justify-start items-start gap-4">
              {/* Agent Name */}
              <div className="Container self-stretch flex flex-col justify-start items-start gap-1.5">
                <div className="LabelAgentName justify-center">
                  <span className="text-gray-900 text-sm font-normal font-intertight leading-5">Agent Name </span>
                  <span className="text-red-600 text-sm font-normal font-intertight leading-5">*</span>
                </div>
                <div className="Input self-stretch h-10 relative bg-stone-50 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-zinc-200 overflow-hidden">
                  <input
                    type="text"
                    placeholder="e.g., Support Assistant"
                    className="w-full h-full px-[13px] bg-transparent border-none outline-none text-slate-900 text-sm font-normal font-intertight placeholder:text-slate-500"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
              </div>

              {/* Avatar */}
              <div className="Container self-stretch flex flex-col justify-start items-start gap-1.5">
                <div className="LabelAvatar justify-center text-gray-900 text-sm font-normal font-intertight leading-5">Avatar</div>
                <div className="Container self-stretch inline-flex justify-start items-center gap-3">
                  <div className="BackgroundBorder size-16 bg-gray-100 rounded-xl outline outline-2 outline-offset-[-2px] outline-zinc-200 flex justify-center items-center overflow-hidden">
                    {formData.avatar ? (
                      <img src={URL.createObjectURL(formData.avatar)} alt="Avatar" className="w-full h-full object-cover" />
                    ) : (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 8V4H8" stroke="#6F7D90" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M18 8H6C4.89543 8 4 8.89543 4 10V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V10C20 8.89543 19.1046 8 18 8Z" stroke="#6F7D90" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2 14H4" stroke="#6F7D90" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M20 14H22" stroke="#6F7D90" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M15 13V15" stroke="#6F7D90" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M9 13V15" stroke="#6F7D90" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </div>
                  <label className="cursor-pointer">
                    <input type="file" className="hidden" onChange={(e) => setFormData({ ...formData, avatar: e.target.files[0] })} />
                    <div className="BackgroundBorder px-3 pt-1.5 pb-2 bg-stone-50 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-zinc-200 inline-flex justify-center items-center gap-1.5 hover:bg-zinc-100 transition-colors">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 10V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V10" stroke="#121821" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M11.3337 5.33333L8.00033 2L4.66699 5.33333" stroke="#121821" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M8 2V10" stroke="#121821" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <div className="Upload text-center justify-center text-gray-900 text-sm font-normal font-intertight leading-5">Upload</div>
                    </div>
                  </label>
                </div>
              </div>

              {/* Welcome Greeting */}
              <div className="Container self-stretch flex flex-col justify-start items-start gap-1.5">
                <div className="LabelWelcomeGreeting justify-center text-gray-900 text-sm font-normal font-intertight leading-5">Welcome Greeting</div>
                <div className="Textarea self-stretch h-20 min-h-20 relative bg-stone-50 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-zinc-200 overflow-hidden">
                  <textarea
                    placeholder="e.g., Hi there! 👋 How can I help you today?"
                    className="w-full h-full p-[13px] bg-transparent border-none outline-none text-slate-900 text-sm font-normal font-intertight placeholder:text-slate-500 resize-none"
                    value={formData.greeting}
                    onChange={(e) => setFormData({ ...formData, greeting: e.target.value })}
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-center space-y-4 w-full">
              <div className="size-12 bg-gray-100 rounded-full flex justify-center items-center">
                <svg className="animate-spin h-6 w-6 text-teal-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium text-slate-900 font-intertight">Step {currentStep} under construction</h3>
              </div>
            </div>
          )}
        </div>

        {/* Footer Section - Matches code.md: h-16 px-6 pt-4 pb-6 */}
        <div className="w-full h-16 inline-flex flex-col justify-center items-end flex-shrink-0">
          <div className="Horizontalborder self-stretch flex-1 px-6 pt-4 pb-6 border-t border-zinc-200 inline-flex justify-end items-center">
            <div className="Container flex justify-start items-start gap-2">
              <button
                onClick={handleNext}
                disabled={currentStep === 1 && !formData.name}
                className={`Button h-9 px-3 py-2 rounded-[10px] flex justify-center items-center gap-1 transition-all
                  ${(currentStep === 1 && !formData.name) 
                    ? 'opacity-50 bg-emerald-950 cursor-not-allowed' 
                    : 'bg-emerald-950 hover:bg-emerald-900 text-white cursor-pointer active:scale-95'}`}
              >
                <div className="Next text-center justify-center text-white text-sm font-normal font-intertight leading-5">
                  {currentStep === 3 ? 'Finish' : 'Next'}
                </div>
                <div className="Svg relative">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 12L10 8L6 4" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CreateAgentModal;
