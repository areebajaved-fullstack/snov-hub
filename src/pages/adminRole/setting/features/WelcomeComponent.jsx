import React, { useState } from "react";
import InviteMemberModal from "./InviteMemberModal";
import GeneralPage from "./GeneralPage";
import SecurityPage from "./SecurityPage";

const WelcomeComponent = ({
  className = "",
  onNewAgentClick,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("security");

  return (
    <div className={`w-full flex flex-col justify-start items-start gap-6 ${className}`}>
      {/* Header Section */}
      <div className="w-full flex justify-between items-center">
        <div className="flex flex-col justify-start items-start gap-1">
          <h1 className="text-[#0F172A] text-2xl font-semibold font-['Inter_Tight'] leading-8">
            Settings
          </h1>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="w-full h-10 flex flex-col justify-start items-start gap-5">
        <div className="size- p-1 bg-gray-200 rounded-md inline-flex justify-center items-center">
          <button
            onClick={() => setActiveTab("general")}
            className={`size- px-3 py-1.5 rounded-sm flex justify-center items-center gap-1.5 transition-colors duration-200 ${
              activeTab === "general" 
                ? "bg-teal-600 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" 
                : ""
            }`}
          >
            <div className="relative">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.12785 1.16699H6.87118C6.56176 1.16699 6.26501 1.28991 6.04622 1.5087C5.82743 1.72749 5.70451 2.02424 5.70451 2.33366V2.43866C5.7043 2.64325 5.6503 2.84419 5.54791 3.02131C5.44552 3.19844 5.29836 3.34553 5.12118 3.44783L4.87035 3.59366C4.69299 3.69606 4.49181 3.74996 4.28701 3.74996C4.08222 3.74996 3.88104 3.69606 3.70368 3.59366L3.61618 3.54699C3.34847 3.39256 3.03042 3.35067 2.73185 3.43051C2.43328 3.51034 2.17858 3.70539 2.02368 3.97283L1.89535 4.19449C1.74092 4.4622 1.69902 4.78025 1.77886 5.07882C1.8587 5.37739 2.05374 5.63209 2.32118 5.78699L2.40868 5.84533C2.58501 5.94712 2.73162 6.09329 2.83396 6.26931C2.93629 6.44533 2.99078 6.64506 2.99201 6.84866V7.14616C2.99283 7.35174 2.93931 7.55388 2.83687 7.73212C2.73443 7.91036 2.58672 8.05837 2.40868 8.16116L2.32118 8.21366C2.05374 8.36856 1.8587 8.62326 1.77886 8.92183C1.69902 9.2204 1.74092 9.53845 1.89535 9.80616L2.02368 10.0278C2.17858 10.2953 2.43328 10.4903 2.73185 10.5701C3.03042 10.65 3.34847 10.6081 3.61618 10.4537L3.70368 10.407C3.88104 10.3046 4.08222 10.2507 4.28701 10.2507C4.49181 10.2507 4.69299 10.3046 4.87035 10.407L5.12118 10.5528C5.29836 10.6551 5.44552 10.8022 5.54791 10.9793C5.6503 11.1565 5.7043 11.3574 5.70451 11.562V11.667C5.70451 11.9764 5.82743 12.2732 6.04622 12.4919C6.26501 12.7107 6.56176 12.8337 6.87118 12.8337H7.12785C7.43727 12.8337 7.73401 12.7107 7.9528 12.4919C8.1716 12.2732 8.29451 11.9764 8.29451 11.667V11.562C8.29472 11.3574 8.34873 11.1565 8.45112 10.9793C8.5535 10.8022 8.70067 10.6551 8.87785 10.5528L9.12868 10.407C9.30603 10.3046 9.50722 10.2507 9.71201 10.2507C9.91681 10.2507 10.118 10.3046 10.2953 10.407L10.3828 10.4537C10.6506 10.6081 10.9686 10.65 11.2672 10.5701C11.5657 10.4903 11.8204 10.2953 11.9753 10.0278L12.1037 9.80032C12.2581 9.53261 12.3 9.21456 12.2202 8.91599C12.1403 8.61742 11.9453 8.36273 11.6778 8.20783L11.5903 8.16116C11.4123 8.05837 11.2646 7.91036 11.1622 7.73212C11.0597 7.55388 11.0062 7.35174 11.007 7.14616V6.85449C11.0062 6.64891 11.0597 6.44677 11.1622 6.26853C11.2646 6.09029 11.4123 5.94228 11.5903 5.83949L11.6778 5.78699C11.9453 5.63209 12.1403 5.37739 12.2202 5.07882C12.3 4.78025 12.2581 4.4622 12.1037 4.19449L11.9753 3.97283C11.8204 3.70539 11.5657 3.51034 11.2672 3.43051C10.9686 3.35067 10.6506 3.39256 10.3828 3.54699L10.2953 3.59366C10.118 3.69606 9.91681 3.74996 9.71201 3.74996C9.50722 3.74996 9.30603 3.69606 9.12868 3.59366L8.87785 3.44783C8.70067 3.34553 8.5535 3.19844 8.45112 3.02131C8.34873 2.84419 8.29472 2.64325 8.29451 2.43866V2.33366C8.29451 2.02424 8.1716 1.72749 7.9528 1.5087C7.73401 1.28991 7.43727 1.16699 7.12785 1.16699Z" stroke={activeTab === "general" ? "white" : "#6A7981"} strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 8.75C7.9665 8.75 8.75 7.9665 8.75 7C8.75 6.0335 7.9665 5.25 7 5.25C6.0335 5.25 5.25 6.0335 5.25 7C5.25 7.9665 6.0335 8.75 7 8.75Z" stroke={activeTab === "general" ? "white" : "#6A7981"} strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className={`text-center justify-center text-sm font-normal font-['Inter_Tight'] leading-5 ${
              activeTab === "general" ? "text-white" : "text-gray-500"
            }`}>
              General
            </div>
          </button>
          
          <button
            onClick={() => setActiveTab("security")}
            className={`size- px-3 py-1.5 rounded-sm flex justify-center items-center gap-1.5 transition-colors duration-200 ${
              activeTab === "security" 
                ? "bg-teal-600 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" 
                : ""
            }`}
          >
            <div className="relative">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.6663 7.58294C11.6663 10.4996 9.62467 11.9579 7.19801 12.8038C7.07094 12.8468 6.9329 12.8448 6.80717 12.7979C4.37467 11.9579 2.33301 10.4996 2.33301 7.58294V3.49961C2.33301 3.3449 2.39447 3.19653 2.50386 3.08713C2.61326 2.97774 2.76163 2.91628 2.91634 2.91628C4.08301 2.91628 5.54134 2.21628 6.55634 1.32961C6.67992 1.22403 6.83713 1.16602 6.99967 1.16602C7.16222 1.16602 7.31943 1.22403 7.44301 1.32961C8.46384 2.22211 9.91634 2.91628 11.083 2.91628C11.2377 2.91628 11.3861 2.97774 11.4955 3.08713C11.6049 3.19653 11.6663 3.3449 11.6663 3.49961V7.58294Z" stroke={activeTab === "security" ? "white" : "#6A7981"} strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className={`text-center justify-center text-sm font-normal font-['Inter_Tight'] leading-5 ${
              activeTab === "security" ? "text-white" : "text-gray-500"
            }`}>
              Security
            </div>
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="self-stretch flex flex-col justify-start items-start gap-5">
        {activeTab === "general" && <GeneralPage />}
        {activeTab === "security" && <SecurityPage />}
      </div>
    </div>
  );
};

export default WelcomeComponent;

