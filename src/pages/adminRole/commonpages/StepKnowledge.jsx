import React from "react";

const StepKnowledge = ({ formData, toggleFolder, knowledgeFolders }) => {
  return (
    <div data-layer="Container" className="Container w-full flex flex-col justify-start items-start gap-4 animate-in slide-in-from-right-4 duration-300">
      <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start gap-[2.50px]">
        <div data-layer="Label → Knowledge Folders" className="LabelKnowledgeFolders justify-center text-gray-900 text-sm font-normal font-poppins leading-5">Knowledge Folders</div>
        <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start">
          <div data-layer="Select which knowledge sources this agent can access." className="SelectWhichKnowledgeSourcesThisAgentCanAccess justify-center text-slate-500 text-xs font-normal font-poppins leading-4">Select which knowledge sources this agent can access.</div>
        </div>
      </div>
      <div className="Container self-stretch flex flex-col justify-start items-start gap-2 max-h-60 overflow-y-auto pr-1">
        {knowledgeFolders.map((folder) => (
          <div 
            key={folder.name}
            onClick={() => toggleFolder(folder.name)}
            className={`Label self-stretch p-3 rounded-xl outline outline-1 outline-offset-[-1px] cursor-pointer transition-all ${formData.selectedFolders.includes(folder.name) ? 'bg-emerald-50 outline-emerald-500' : 'bg-white outline-zinc-200 hover:outline-zinc-300'}`}
          >
            <div className="flex justify-start items-center gap-3">
              <div className={`Checkbox size-4 rounded-full outline outline-1 outline-offset-[-1px] flex justify-center items-center ${formData.selectedFolders.includes(folder.name) ? 'bg-emerald-600 outline-emerald-600' : 'outline-[#0A3D38]'}`}>
                {formData.selectedFolders.includes(folder.name) && (
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 4L4 7L9 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <div className="flex-1 flex justify-start items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.99967 9.33334L4.99967 7.4C5.10839 7.1841 5.27376 7.00181 5.47808 6.87264C5.68241 6.74346 5.91801 6.67227 6.15967 6.66667H13.333M13.333 6.66667C13.5367 6.66631 13.7378 6.71263 13.9208 6.80206C14.1038 6.89149 14.2639 7.02166 14.3887 7.18258C14.5136 7.3435 14.5999 7.53089 14.6411 7.73037C14.6823 7.92985 14.6773 8.13612 14.6263 8.33334L13.5997 12.3333C13.5254 12.621 13.3571 12.8757 13.1216 13.0569C12.8861 13.238 12.5968 13.3353 12.2997 13.3333H2.66634C2.31272 13.3333 1.97358 13.1929 1.72353 12.9428C1.47348 12.6928 1.33301 12.3536 1.33301 12V3.33334C1.33301 2.97971 1.47348 2.64058 1.72353 2.39053C1.97358 2.14048 2.31272 2 2.66634 2H5.26634C5.48933 1.99782 5.70931 2.0516 5.90614 2.15642C6.10297 2.26124 6.27037 2.41375 6.39301 2.6L6.93301 3.4C7.05441 3.58436 7.21969 3.73568 7.41401 3.84041C7.60833 3.94513 7.8256 3.99997 8.04634 4H11.9997C12.3533 4 12.6924 4.14048 12.9425 4.39053C13.1925 4.64058 13.333 4.97971 13.333 5.33334V6.66667Z" stroke="#6F7D90" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-gray-900 text-sm font-normal font-poppins leading-5">{folder.name}</span>
                <span className="text-slate-500 text-xs font-normal font-poppins leading-4">{folder.docs} documents</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {formData.selectedFolders.length === 0 && (
        <div className="Container self-stretch py-2 flex flex-col justify-start items-center">
          <div className="text-center text-amber-500 text-xs font-normal font-poppins leading-4">No folders selected — agent will rely only on the model's general knowledge.</div>
        </div>
      )}
    </div>
  );
};

export default StepKnowledge;
