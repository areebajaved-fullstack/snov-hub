import React from "react";

const StepIdentity = ({ formData, setFormData }) => {
  return (
    <div data-layer="Container" className="Container w-full flex flex-col justify-start items-start gap-4">
      {/* Agent Name */}
      <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start gap-1.5">
        <div data-layer="Label → Agent Name *" className="LabelAgentName justify-center">
          <span className="text-gray-900 text-sm font-normal font-poppins leading-5">Agent Name </span>
          <span className="text-red-600 text-sm font-normal font-poppins leading-5">*</span>
        </div>
        <div data-layer="Input" className="Input self-stretch h-10 relative bg-stone-50 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-zinc-200 overflow-hidden">
          <input
            type="text"
            placeholder="e.g., Support Assistant"
            className="w-full h-full px-4 bg-transparent border-none outline-none text-slate-900 text-sm font-normal font-poppins placeholder:text-slate-500"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
      </div>

      {/* Avatar section */}
      <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start gap-1.5">
        <div data-layer="Label → Avatar" className="LabelAvatar justify-center text-gray-900 text-sm font-normal font-poppins leading-5">Avatar</div>
        <div data-layer="Container" className="Container self-stretch inline-flex justify-start items-center gap-4">
          <div data-layer="Background+Border" className="BackgroundBorder size-16 bg-gray-50 rounded-xl outline outline-2 outline-offset-[-2px] outline-zinc-200 flex justify-center items-center overflow-hidden shadow-sm">
            {formData.avatar ? (
              <img src={URL.createObjectURL(formData.avatar)} alt="Avatar" className="w-full h-full object-cover" />
            ) : (
              <div data-svg-wrapper data-layer="SVG" className="Svg relative">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 8V4H8" stroke="#6F7D90" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M18 8H6C4.89543 8 4 8.89543 4 10V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V10C20 8.89543 19.1046 8 18 8Z" stroke="#6F7D90" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 14H4" stroke="#6F7D90" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M20 14H22" stroke="#6F7D90" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15 13V15" stroke="#6F7D90" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 13V15" stroke="#6F7D90" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            )}
          </div>
          <label className="cursor-pointer">
            <input type="file" className="hidden" onChange={(e) => setFormData({ ...formData, avatar: e.target.files[0] })} />
            <div data-layer="Label" className="Label inline-flex flex-col justify-start items-start">
              <div data-layer="Background+Border" className="BackgroundBorder px-4 py-2 bg-stone-50 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-zinc-200 inline-flex justify-center items-center gap-2 hover:bg-zinc-100 transition-colors shadow-sm">
                <div data-svg-wrapper data-layer="SVG" className="Svg relative">
                  <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 10V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V10" stroke="#121821" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M11.3337 5.33333L8.00033 2L4.66699 5.33333" stroke="#121821" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 2V10" stroke="#121821" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div data-layer="Upload" className="Upload text-center justify-center text-gray-900 text-sm font-medium font-poppins leading-5">Upload</div>
              </div>
            </div>
          </label>
        </div>
      </div>

      {/* Welcome Greeting */}
      <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start gap-1.5">
        <div data-layer="Label → Welcome Greeting" className="LabelWelcomeGreeting justify-center text-gray-900 text-sm font-normal font-poppins leading-5">Welcome Greeting</div>
        <div data-layer="Textarea" className="Textarea self-stretch h-32 min-h-[128px] relative bg-stone-50 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-zinc-200 overflow-hidden">
          <textarea
            placeholder="e.g., Hi there! 👋 How can I help you today?"
            className="w-full h-full p-4 bg-transparent border-none outline-none text-slate-900 text-sm font-normal font-poppins placeholder:text-slate-500 resize-none"
            value={formData.greeting}
            onChange={(e) => setFormData({ ...formData, greeting: e.target.value })}
          />
        </div>
      </div>
    </div>
  );
};

export default StepIdentity;
