import React from "react";
import feauture4 from "../../../../assets/images/feauture4.png";
import feauture2 from "../../../../assets/images/feauture 2.png";
import feauture3 from "../../../../assets/images/feauture3.png";
import feauture5 from "../../../../assets/images/feauture5.png";
import PerformanceSection from "./PerformanceSection";
import {
  AnalyticsChartIcon,
  AnalyticsCheckCircleIcon,
  AnalyticsTrendIcon,
  DeploymentChatIcon,
  DeploymentCodeIcon,
  DeploymentMailIcon,
  DeploymentUsersIcon,
  KnowledgeDocIcon,
  KnowledgeLinkIcon,
  KnowledgeRefreshIcon,
} from "./icon";

const FeatureChip = ({ icon, text, iconClassName = "" }) => {
  const Icon = icon;
  return (
    <div className="w-56 sm:w-64 md:w-72 h-10 sm:h-11 md:h-12 pl-3 sm:pl-4 bg-slate-50 rounded-2xl outline outline-[1.26px] outline-offset-[-1.26px] outline-slate-200 inline-flex justify-start items-center gap-2 sm:gap-3">
      <Icon className={`${iconClassName} w-4 h-4 sm:w-5 sm:h-5`} />
      <div className="text-slate-900 text-xs sm:text-sm font-medium font-primary leading-4 sm:leading-5 truncate">
        {text}
      </div>
    </div>
  );
};

const FeatureBlock = ({
  eyebrowIcon,
  eyebrowIconClassName = "",
  title,
  description,
  chips,
  right,
  imageSrc,
  imageAlt = "",
  reversed = false,
}) => {
  const EyebrowIcon = eyebrowIcon;

  return (
    <div
      className={`w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-6 sm:gap-8 md:gap-12 lg:gap-[63.91px] ${
        reversed ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div className="w-full max-w-full md:max-w-[568px]">
        <div className="w-20 h-8 sm:w-24 sm:h-10 md:w-32 md:h-12 inline-flex justify-start items-center gap-2">
          <div className="size-8 sm:size-10 md:size-12 px-2 sm:px-3 bg-gradient-to-br from-emerald-500 via-green-500 via-[8%] to-green-600 rounded-lg sm:rounded-xl md:rounded-2xl shadow-[0px_4px_6px_-4px_rgba(0,188,125,0.20)] shadow-[0px_10px_15px_-3px_rgba(0,188,125,0.20)] flex justify-center items-center">
            <EyebrowIcon className={eyebrowIconClassName} />
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-slate-200 via-gray-300/95 via-[7%] to-black/0" />
        </div>

        <h2 className="mt-3 sm:mt-4 md:mt-6 lg:mt-[23.99px] text-slate-900 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold font-geist leading-tight sm:leading-tight md:leading-snug lg:leading-[52.80px]">
          {title}
        </h2>

        <p className="mt-3 sm:mt-4 md:mt-6 lg:mt-[21.58px] text-slate-500 text-sm sm:text-base md:text-lg font-normal font-primary leading-relaxed sm:leading-relaxed md:leading-8 max-w-full md:max-w-[534px]">
          {description}
        </p>

        <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-[30px] grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 md:gap-4 lg:gap-[12.51px]">
          {chips.map((chip) => (
            <FeatureChip key={chip.text} {...chip} />
          ))}
        </div>
      </div>

      <div className="w-full">
        {right ? (
          right
        ) : (
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-auto select-none"
            draggable="false"
            loading="lazy"
          />
        )}
      </div>
    </div>
  );
};

const ChannelTile = ({ icon, bgClassName, label }) => {
  const Icon = icon;
  return (
    <div className="w-full sm:w-[200px] md:w-[237px] h-auto sm:h-[100px] md:h-[116px] bg-white rounded-xl sm:rounded-2xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col items-center justify-center gap-2 sm:gap-3 p-3 sm:p-4">
      <div
        className={`size-10 sm:size-12 rounded-xl sm:rounded-2xl flex items-center justify-center ${bgClassName}`}
      >
        <Icon className="text-white w-5 h-5 sm:w-6 sm:h-6" />
      </div>
      <div className="text-slate-900 text-xs sm:text-sm md:text-base font-normal font-primary leading-tight sm:leading-6 text-center">
        {label}
      </div>
    </div>
  );
};

const MultiChannelMock = () => {
  return (
    <div className="w-full max-w-full md:max-w-[568px] bg-white rounded-2xl sm:rounded-[32px] shadow-[0px_25px_50px_-12px_rgba(0,188,125,0.10)] outline outline-[1.26px] outline-offset-[-1.26px] outline-slate-200 overflow-hidden">
      <div className="px-4 py-4 sm:px-6 sm:py-6 lg:px-10 lg:py-10">
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 justify-items-center">
          <ChannelTile
            icon={DeploymentChatIcon}
            bgClassName="bg-blue-600"
            label="Web Chat"
          />
          <ChannelTile
            icon={DeploymentMailIcon}
            bgClassName="bg-red-500"
            label="Email"
          />
          <ChannelTile
            icon={DeploymentUsersIcon}
            bgClassName="bg-green-600"
            label="Slack"
          />
          <ChannelTile
            icon={DeploymentCodeIcon}
            bgClassName="bg-violet-600"
            label="API"
          />
        </div>
      </div>
      <div className="h-[40px] sm:h-[50px] md:h-[62px] bg-[#032125]/40 blur-[0.5px]" aria-hidden="true" />
    </div>
  );
};

const FeaturesShowcaseSection = () => {
  return (
    <section aria-label="Feature highlights" className="w-full bg-white">
      <div className="mx-auto w-full max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="flex flex-col gap-8 sm:gap-12 md:gap-16 lg:gap-20">
          <FeatureBlock
            title="Knowledge-Powered Training"
            description="Upload documents, wikis, and support articles. Our AI processes and structures your content for intelligent, contextual responses that feel natural and accurate."
            eyebrowIcon={KnowledgeDocIcon}
            eyebrowIconClassName="text-white"
            chips={[
              {
                icon: KnowledgeDocIcon,
                iconClassName: "text-emerald-400",
                text: "PDF, DOCX, TXT support",
              },
              {
                icon: KnowledgeLinkIcon,
                iconClassName: "text-emerald-400",
                text: "URL scraping & indexing",
              },
              {
                icon: KnowledgeRefreshIcon,
                iconClassName: "text-emerald-400",
                text: "Automatic content updates",
              },
              {
                icon: AnalyticsCheckCircleIcon,
                iconClassName: "text-emerald-400",
                text: "Smart chunking & embedding",
              },
            ]}
            imageSrc={feauture4}
            imageAlt="Knowledge-Powered Training"
          />

          <FeatureBlock
            title="Multi-Channel Deployment"
            description="Deploy your AI agents everywhere your customers are. One agent, multiple channels, seamless experience across all touchpoints."
            eyebrowIcon={DeploymentChatIcon}
            eyebrowIconClassName="text-white"
            chips={[
              {
                icon: DeploymentChatIcon,
                iconClassName: "text-violet-600",
                text: "Web chat widget",
              },
              {
                icon: DeploymentUsersIcon,
                iconClassName: "text-violet-600",
                text: "Slack & Teams integration",
              },
              {
                icon: DeploymentMailIcon,
                iconClassName: "text-violet-600",
                text: "Email automation",
              },
              {
                icon: DeploymentCodeIcon,
                iconClassName: "text-violet-600",
                text: "REST API access",
              },
            ]}
            right={
              <div>
                <div className="w-full max-w-full md:max-w-[568px] bg-white rounded-2xl sm:rounded-[32px] shadow-[0px_25px_50px_-12px_rgba(0,188,125,0.15)] shadow-[0px_8px_16px_-4px_rgba(0,0,0,0.10)] outline outline-[1.26px] outline-offset-[-1.26px] outline-slate-200 overflow-hidden border-b-[4px] border-b-emerald-400/40 shadow-[0px_4px_8px_-2px_rgba(16,185,129,0.4)]">
                  <div className="px-6 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-10">
                    <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 justify-items-center">
                      <div className="w-full sm:w-[200px] md:w-[237px] h-auto sm:h-[100px] md:h-[116px] bg-white rounded-xl sm:rounded-2xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col items-center justify-center gap-2 sm:gap-3 p-3 sm:p-4">
                        <div className="size-10 sm:size-12 rounded-xl sm:rounded-2xl flex items-center justify-center bg-blue-600">
                          <DeploymentChatIcon className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                        <div className="text-slate-900 text-xs sm:text-sm md:text-base font-normal font-primary leading-tight sm:leading-6 text-center">
                          Web Chat
                        </div>
                      </div>
                      <div className="w-full sm:w-[200px] md:w-[237px] h-auto sm:h-[100px] md:h-[116px] bg-white rounded-xl sm:rounded-2xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col items-center justify-center gap-2 sm:gap-3 p-3 sm:p-4">
                        <div className="size-10 sm:size-12 rounded-xl sm:rounded-2xl flex items-center justify-center bg-red-500">
                          <DeploymentMailIcon className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                        <div className="text-slate-900 text-xs sm:text-sm md:text-base font-normal font-primary leading-tight sm:leading-6 text-center">
                          Email
                        </div>
                      </div>
                      <div className="w-full sm:w-[200px] md:w-[237px] h-auto sm:h-[100px] md:h-[116px] bg-white rounded-xl sm:rounded-2xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col items-center justify-center gap-2 sm:gap-3 p-3 sm:p-4">
                        <div className="size-10 sm:size-12 rounded-xl sm:rounded-2xl flex items-center justify-center bg-green-600">
                          <DeploymentUsersIcon className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                        <div className="text-slate-900 text-xs sm:text-sm md:text-base font-normal font-primary leading-tight sm:leading-6 text-center">
                          Slack
                        </div>
                      </div>
                      <div className="w-full sm:w-[200px] md:w-[237px] h-auto sm:h-[100px] md:h-[116px] bg-white rounded-xl sm:rounded-2xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col items-center justify-center gap-2 sm:gap-3 p-3 sm:p-4">
                        <div className="size-10 sm:size-12 rounded-xl sm:rounded-2xl flex items-center justify-center bg-violet-600">
                          <DeploymentCodeIcon className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                        <div className="text-slate-900 text-xs sm:text-sm md:text-base font-normal font-primary leading-tight sm:leading-6 text-center">
                          API
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            }
            reversed
          />

          <FeatureBlock
            title="Real-Time Analytics"
            description="Track performance, measure satisfaction, and gain insights into every conversation. Make data-driven decisions to improve your AI agents."
            eyebrowIcon={AnalyticsChartIcon}
            eyebrowIconClassName="text-white"
            chips={[
              {
                icon: AnalyticsChartIcon,
                iconClassName: "text-emerald-400",
                text: "Conversation analytics",
              },
              {
                icon: AnalyticsTrendIcon,
                iconClassName: "text-emerald-400",
                text: "Response accuracy metrics",
              },
              {
                icon: DeploymentUsersIcon,
                iconClassName: "text-emerald-400",
                text: "User satisfaction scores",
              },
              {
                icon: AnalyticsCheckCircleIcon,
                iconClassName: "text-emerald-400",
                text: "Custom dashboards",
              },
            ]}
            imageSrc={feauture2}
            imageAlt="Real-Time Analytics"
          />

          <FeatureBlock
            title="Secure & Compliant"
            description="Enterprise-grade security with role-based access control, data encryption, and compliance certifications. Protect your data and your customers."
            eyebrowIcon={AnalyticsCheckCircleIcon}
            eyebrowIconClassName="text-white"
            chips={[
              {
                icon: DeploymentChatIcon,
                iconClassName: "text-emerald-400",
                text: "Web chat widget",
              },
              {
                icon: DeploymentUsersIcon,
                iconClassName: "text-emerald-400",
                text: "Slack & Teams integration",
              },
              {
                icon: DeploymentMailIcon,
                iconClassName: "text-emerald-400",
                text: "Email automation",
              },
              {
                icon: DeploymentCodeIcon,
                iconClassName: "text-emerald-400",
                text: "REST API access",
              },
            ]}
            imageSrc={feauture5}
            imageAlt="Secure & Compliant"
            reversed
          />
        </div>
      </div>
      
      <PerformanceSection />
    </section>
  );
};

export default FeaturesShowcaseSection;

