import React from "react";

const StepModel = ({ formData, setFormData, llmProviders }) => {
  return (
    <div data-layer="Container" className="Container w-full flex flex-col justify-start items-start gap-4 animate-in slide-in-from-right-4 duration-300">
      <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start gap-[2.50px]">
        <div data-layer="Label → Select LLM Provider" className="LabelSelectLlmProvider justify-center text-gray-900 text-sm font-normal font-poppins leading-5">Select LLM Provider</div>
        <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start">
          <div data-layer="Choose the AI model that powers your agent." className="ChooseTheAiModelThatPowersYourAgent justify-center text-slate-500 text-xs font-normal font-poppins leading-4">Choose the AI model that powers your agent.</div>
        </div>
      </div>
      <div data-layer="Radiogroup" className="Radiogroup self-stretch flex flex-col justify-start items-start gap-3 mt-2">
        {llmProviders.map((llm) => (
          <div 
            key={llm.id}
            onClick={() => setFormData({ ...formData, selectedLLM: llm.id })}
            className={`Label self-stretch p-3 rounded-xl outline outline-1 outline-offset-[-1px] cursor-pointer transition-all ${formData.selectedLLM === llm.id ? 'bg-cyan-950/5 outline-cyan-950' : 'bg-white outline-zinc-200 hover:outline-zinc-300'}`}
          >
            <div className="flex justify-start items-center gap-3">
              <div className={`Radio size-4 rounded-full outline outline-1 outline-offset-[-1px] flex justify-center items-center ${formData.selectedLLM === llm.id ? 'outline-cyan-950' : 'outline-zinc-300'}`}>
                {formData.selectedLLM === llm.id && (
                  <div className="size-2 bg-[#0A3D38] rounded-full" />
                )}
              </div>
              <div className="flex-1 inline-flex flex-col justify-start items-start gap-0.5">
                <div className="flex justify-start items-center gap-2">
                  <span className="text-gray-900 text-sm font-normal font-poppins leading-5">{llm.name}</span>
                  <span className="bg-gray-100 px-1.5 py-0.5 rounded-sm text-slate-500 text-[10px] font-normal font-poppins">{llm.provider}</span>
                  {llm.recommended && (
                    <span className="bg-teal-600 px-2.5 py-0.5 rounded-full text-white text-[10px] font-normal font-poppins">Recommended</span>
                  )}
                  {llm.fastest && (
                    <span className="bg-emerald-600 px-2.5 py-0.5 rounded-full text-white text-[10px] font-normal font-poppins font-medium">Fastest</span>
                  )}
                </div>
                <div className="text-slate-500 text-xs font-normal font-poppins leading-4">{llm.desc}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepModel;
