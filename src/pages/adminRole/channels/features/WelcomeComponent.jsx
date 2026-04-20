import React from "react";

const WelcomeComponent = ({
  userName = "John",
  conversationsCount = 1280,
  className = "",
  onNewAgentClick,
  onTestBotClick,
}) => {
  return (
    <div className={` w-[1136px] Container self-stretch inline-flex justify-between items-center ${className}`}>
      {/* Left Section - Welcome Message */}
      <div className="Container size- inline-flex flex-col justify-start items-start gap-0.5">
        <div className="Heading1 self-stretch flex flex-col justify-start items-start">
          <div className="WelcomeBackJohn justify-center text-slate-900 text-2xl font-medium font-poppins leading-8">
          Channels & Integrations
          </div>
        </div>
        <div className="Container self-stretch flex flex-col justify-start items-start">
          <div className="YourAiAgentsHandled1280ConversationsThisWeek justify-center text-gray-500 text-sm font-normal font-poppins leading-5">
          Deploy your AI agents across multiple platforms and touchpoints.
          </div>
        </div>
      </div>

      
       
    </div>
  );
};

export default WelcomeComponent;
