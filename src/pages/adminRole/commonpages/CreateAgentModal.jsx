import React, { useState } from "react";
import StepIdentity from "./StepIdentity";
import StepModel from "./StepModel";
import StepKnowledge from "./StepKnowledge";
import SuccessState from "./SuccessState";

const CreateAgentModal = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    greeting: "",
    avatar: null,
    selectedLLM: "GPT-4o",
    selectedFolders: [],
  });

  if (!isOpen) return null;

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsSuccess(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const toggleFolder = (folder) => {
    setFormData(prev => {
      const folders = [...prev.selectedFolders];
      const index = folders.indexOf(folder);
      if (index === -1) {
        folders.push(folder);
      } else {
        folders.splice(index, 1);
      }
      return { ...prev, selectedFolders: folders };
    });
  };

  const llmProviders = [
    { id: "GPT-4o", name: "GPT-4o", provider: "OpenAI", desc: "Most capable, best for complex tasks", recommended: true },
    { id: "GPT-4o Mini", name: "GPT-4o Mini", provider: "OpenAI", desc: "Fast & cost-effective for simpler tasks" },
    { id: "Claude 3.5 Sonnet", name: "Claude 3.5 Sonnet", provider: "Anthropic", desc: "Excellent reasoning & safety" },
    { id: "Claude 3.5 Haiku", name: "Claude 3.5 Haiku", provider: "Anthropic", desc: "Ultra-fast, great for high volume", fastest: true },
  ];

  const knowledgeFolders = [
    { name: "FAQs", docs: 24 },
    { name: "Product Catalog", docs: 156 },
    { name: "Support Docs", docs: 89 },
    { name: "Company Policies", docs: 12 },
    { name: "Onboarding Guide", docs: 8 },
  ];

  const renderStepIcon = (step) => {
    if (currentStep > step) {
      return (
        <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    }
    return step;
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="bg-white rounded-[20px] shadow-2xl w-full max-w-[600px] flex flex-col items-center overflow-hidden animate-in fade-in zoom-in duration-200 relative my-auto">

        {isSuccess ? (
          <SuccessState agentName={formData.name} onClose={onClose} />
        ) : (
          <>
            {/* Header Section */}
            <div data-layer="Container" className="Container w-full px-10 pt-6 pb-4 bg-white border-b border-gray-200 flex flex-col justify-start items-start relative flex-shrink-0">
              <button
                onClick={onClose}
                className="absolute right-8 top-6 text-gray-400 hover:text-gray-600 transition-colors z-[101]"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <div data-layer="Heading 2" className="Heading2 self-stretch flex flex-col justify-start items-start">
                <div data-layer="Create New Agent" className="CreateNewAgent justify-center text-slate-900 text-lg font-medium font-poppins leading-7">Create New Agent</div>
              </div>
              <div data-layer="Margin" className="Margin self-stretch pt-1 flex flex-col justify-start items-start">
                <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start">
                  <div data-layer="Set up your AI agent in 3 simple steps" className="SetUpYourAiAgentIn3SimpleSteps justify-center text-gray-500 text-sm font-normal font-poppins leading-5">Set up your AI agent in 3 simple steps</div>
                </div>
              </div>
            </div>

            {/* Stepper Section */}
            <div data-layer="Container" className="Container w-full px-10 flex flex-col justify-start items-start pt-4 flex-shrink-0">
              <div data-layer="Container" className="Container self-stretch inline-flex justify-center items-center gap-1">
                {/* Step indicators */}
                {[
                  { id: 1, label: "Identity" },
                  { id: 2, label: "Model" },
                  { id: 3, label: "Knowledge" }
                ].map((step, idx) => (
                  <React.Fragment key={step.id}>
                    <div data-layer="Container" className={`flex-1 flex justify-center items-center ${idx === 2 ? 'flex-none pl-4' : ''}`}>
                      <div data-layer="Container" className="Container w-24 flex justify-start items-center gap-2">
                        <div data-layer="Background" className={`flex-shrink-0 size-8 py-2 rounded-full flex justify-center items-center transition-all ${currentStep >= step.id ? (currentStep > step.id ? 'bg-emerald-500' : 'outline outline-[1.50px] outline-offset-[-1.50px] outline-teal-600') : 'bg-gray-100'}`}>
                          <div className={`text-center justify-center text-xs font-medium font-poppins leading-4 ${currentStep > step.id ? 'text-white' : (currentStep === step.id ? 'text-teal-600' : 'text-slate-500')}`}>
                            {renderStepIcon(step.id)}
                          </div>
                        </div>
                        <div className={`text-xs font-normal font-poppins leading-4 ${currentStep >= step.id ? 'text-gray-900 font-medium' : 'text-slate-500'}`}>{step.label}</div>
                      </div>
                      {idx < 2 && (
                        <div className="flex-1 px-2">
                          <div className={`h-[2px] w-full rounded-full transition-all duration-500 ${currentStep > step.id ? 'bg-emerald-500' : 'bg-gray-100'}`} />
                        </div>
                      )}
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Body Section - Modular steps */}
            <div data-layer="Container" className="Container w-full px-10 flex flex-col justify-start items-start pb-6 pt-6">
              {currentStep === 1 && <StepIdentity formData={formData} setFormData={setFormData} />}
              {currentStep === 2 && <StepModel formData={formData} setFormData={setFormData} llmProviders={llmProviders} />}
              {currentStep === 3 && <StepKnowledge formData={formData} toggleFolder={toggleFolder} knowledgeFolders={knowledgeFolders} />}
            </div>

            {/* Footer Section */}
            <div data-layer="Margin" className="Margin w-full bg-white border-t border-zinc-200 flex flex-col justify-center items-end flex-shrink-0">
              <div data-layer="HorizontalBorder" className="Horizontalborder self-stretch px-10 py-4 inline-flex justify-end items-center">
                <div data-layer="Container" className="Container flex justify-start items-start gap-3 w-full">
                  {currentStep > 1 && (
                    <button
                      onClick={handleBack}
                      className="Button h-10 px-6 py-2 rounded-[10px] border border-zinc-200 text-gray-700 hover:bg-gray-50 font-medium font-poppins text-sm transition-all flex items-center gap-1"
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-180">
                        <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      Back
                    </button>
                  )}
                  <div className="flex-1" />
                  <button
                    onClick={handleNext}
                    disabled={currentStep === 1 && !formData.name}
                    className={`Button h-10 px-6 py-2 rounded-[10px] flex justify-center items-center gap-2 transition-all shadow-md
                      ${(currentStep === 1 && !formData.name)
                        ? 'opacity-50 bg-[#6F7D90] cursor-not-allowed text-white'
                        : 'bg-[#032125] hover:bg-[#02181b] text-white cursor-pointer active:scale-95'}`}
                  >
                    <div data-layer="Next" className="Next text-center justify-center text-white text-sm font-medium font-poppins leading-5">
                      {currentStep === 3 ? 'Create Agent' : 'Next'}
                    </div>
                    {currentStep === 3 ? (
                      <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 6L6 11L15 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    ) : (
                      <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 12L10 8L6 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CreateAgentModal;
