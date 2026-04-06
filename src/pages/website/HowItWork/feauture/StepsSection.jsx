import React, { useState } from 'react';
import { FileTextIcon, QuestionIcon, XWikiIcon, CancelIcon, CaretUpIcon } from '../../../../assets/icons/icons.jsx';

const StepsSection = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="w-full bg-emerald-950 px-28 py-20 inline-flex flex-col justify-center items-center gap-16">
      {/* Header */}
      <div className="flex flex-col justify-center items-center gap-4">
        <h2 className="w-[486px] text-center text-white text-4xl font-semibold font-['Geist'] leading-10">
          From Knowledge to Intelligent Conversations
        </h2>
        <p className="w-96 text-center text-white text-base font-normal font-['Inter_Tight'] leading-6 tracking-wide">
          Transform your static data into interactive AI assistants that provide instant, accurate answers.
        </p>
      </div>

      {/* Steps Container */}
      <div className="w-full relative flex flex-col justify-start items-start gap-14">
        {/* Step Indicator Line */}
        <div className="absolute left-[594px] top-[-16px]">
          <svg width="12" height="1079" viewBox="0 0 12 1079" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 5.99999C0 2.68628 2.68629 0 6 0C9.31371 0 12 2.68629 12 6V1073C12 1076.31 9.31371 1079 6 1079C2.68629 1079 0 1076.31 0 1073V5.99999Z" fill="url(#paint0_linear_547_3153)"/>
            <defs>
              <linearGradient id="paint0_linear_547_3153" x1="6" y1="0" x2="6" y2="2598.9" gradientUnits="userSpaceOnUse">
                <stop offset="0.317708" stop-color="#082529"/>
                <stop offset="0.413655" stop-color="#31C48D"/>
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Step 1: Upload Your Knowledge */}
        <div className="w-full inline-flex justify-between items-center">
          {/* Content */}
          <div className="w-96 inline-flex flex-col justify-center items-start gap-4">
            <div className="px-3 py-2 bg-emerald-400 rounded-lg inline-flex justify-center items-center gap-2">
              <span className="text-gray-800 text-base font-medium font-['Inter_Tight'] leading-6 tracking-wide">Step 1</span>
            </div>
            <h3 className="text-white text-2xl font-semibold font-['Geist'] leading-7 tracking-tight">
              Upload Your Knowledge
            </h3>
            <p className="w-full text-slate-200 text-sm font-normal font-['Inter_Tight'] leading-6">
              Connect your documentation, FAQs, support articles, or internal wikis. The platform processes and structures your content for intelligent retrieval.
            </p>
          </div>

          {/* Assets - Upload Cards */}
          <div className="w-[494px] h-72 relative">
            {/* Card 1 - Technical Documentation */}
            <div className="w-96 p-6 left-0 top-0 absolute bg-gray-800 rounded-xl inline-flex justify-start items-start gap-3">
              <div className="w-10 p-3.5 bg-amber-400/10 rounded-full flex justify-start items-start gap-2">
                <FileTextIcon className="relative" style={{ color: '#FEB12E' }} />
              </div>
              <div className="flex-1 inline-flex flex-col justify-start items-start gap-2">
                <h4 className="text-white text-base font-medium font-['Inter_Tight'] leading-6 tracking-wide">
                  Technical Documentation
                </h4>
                <p className="w-64 text-white text-sm font-normal font-['Inter_Tight'] leading-5 tracking-wide">
                  Upload PDF, DOCX, and TXT files to train your agent
                </p>
              </div>
            </div>

            {/* Blur Rectangle 1 */}
            <div className="w-80 h-32 left-[68px] top-[67px] absolute bg-emerald-950/60 rounded-xl blur-2xl" />

            {/* Card 2 - Company FAQs */}
            <div className="w-80 p-6 left-[80px] top-[82px] absolute bg-gray-700 rounded-xl inline-flex justify-start items-start gap-3">
              <div className="w-10 p-3.5 bg-violet-600/10 rounded-full flex justify-start items-start gap-2">
                <QuestionIcon className="relative" style={{ color: '#7C3AED' }} />
              </div>
              <div className="flex-1 inline-flex flex-col justify-start items-start gap-2">
                <h4 className="text-white text-base font-medium font-['Inter_Tight'] leading-6 tracking-wide">
                  Company FAQs & Support Docs
                </h4>
                <p className="w-56 text-white text-sm font-normal font-['Inter_Tight'] leading-5 tracking-wide">
                  Import existing CSV or TXT files to automate answers
                </p>
              </div>
            </div>

            {/* Blur Rectangle 2 */}
            <div className="w-80 h-32 left-[152px] top-[148px] absolute bg-emerald-950/60 rounded-xl blur-2xl" />

            {/* Card 3 - Live Website & Wiki */}
            <div className="w-80 p-6 left-[164px] top-[163px] absolute bg-gray-800 rounded-xl inline-flex justify-start items-start gap-3">
              <div className="w-10 p-3.5 bg-orange-500/10 rounded-full flex justify-start items-start gap-2">
                <div className="w-6 h-6 relative overflow-hidden">
                  <XWikiIcon className="absolute left-0 top-[8px]" />
                </div>
              </div>
              <div className="flex-1 inline-flex flex-col justify-start items-start gap-2">
                <h4 className="text-white text-base font-medium font-['Inter_Tight'] leading-6 tracking-wide">
                  Live Website & Wiki
                </h4>
                <p className="w-56 text-slate-100 text-sm font-normal font-['Inter_Tight'] leading-5 tracking-wide">
                  Connect your help center URL for knowledge synchronization.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Step 2: Input Your Ideas */}
        <div className="w-full inline-flex justify-between items-center">
          {/* Content */}
          <div className="w-96 inline-flex flex-col justify-center items-start gap-4">
            <div className="px-3 py-2 bg-emerald-400 rounded-lg inline-flex justify-center items-center gap-2">
              <span className="text-gray-800 text-base font-medium font-['Inter_Tight'] leading-6 tracking-wide">Step 2</span>
            </div>
            <h3 className="text-white text-2xl font-semibold font-['Geist'] leading-7 tracking-tight">
              Input Your Ideas
            </h3>
            <p className="w-[456px] text-slate-200 text-sm font-normal font-['Inter_Tight'] leading-6">
              Define agent behavior, response style, and conversation flows. Set boundaries, escalation rules, and approval workflows to maintain control.
            </p>
          </div>

          {/* Assets - Configuration Panel */}
          <div className="w-96 h-64 p-6 bg-gray-800 rounded-xl inline-flex flex-col justify-start items-start gap-3">
            {/* Agent Persona & Instructions */}
            <div className="w-full h-32 flex flex-col justify-start items-start gap-3">
              <h4 className="text-white text-base font-medium font-['Inter_Tight'] leading-6 tracking-wide">
                Agent Persona & Instructions
              </h4>
              <div className="w-full flex-1 p-3 rounded-lg outline outline-1 outline-gray-700 inline-flex justify-start items-center">
                <p className="flex-1 text-white text-xs font-normal font-['Inter_Tight'] leading-4 tracking-wide">
                  Act as a professional support agent for our tech platform. Use the uploaded knowledge base to provide precise answers. If a user expresses frustration or asks for a human, trigger the escalation workflow immediately.
                </p>
              </div>
            </div>

            {/* Agent Guardrails */}
            <div className="w-full flex flex-col justify-start items-start gap-3">
              <h4 className="text-white text-base font-medium font-['Inter_Tight'] leading-6 tracking-wide">
                Agent Guardrails
              </h4>
              <div className="w-full p-3 rounded-lg outline outline-1 outline-gray-700 inline-flex justify-start items-center gap-3">
                {/* Professional Tone Keyword */}
                <div className="px-1 py-[3px] bg-gray-800 rounded-sm outline outline-1 outline-gray-700 flex justify-start items-center gap-1">
                  <span className="text-white text-xs font-normal font-['Inter_Tight'] leading-4 tracking-wide">
                    Professional Tone
                  </span>
                  <CancelIcon className="relative" />
                </div>

                {/* Human Escalation Keyword */}
                <div className="px-1 py-[3px] bg-gray-800 rounded-sm outline outline-1 outline-gray-700 flex justify-start items-center gap-1">
                  <span className="text-white text-xs font-normal font-['Inter_Tight'] leading-4 tracking-wide">
                    Human Escalation
                  </span>
                  <CancelIcon className="relative" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 3: Deploy & Monitor */}
        <div className="w-full inline-flex justify-between items-center">
          {/* Content */}
          <div className="w-96 inline-flex flex-col justify-center items-start gap-4">
            <div className="px-3 py-2 bg-emerald-400 rounded-lg inline-flex justify-center items-center gap-2">
              <span className="text-gray-800 text-base font-medium font-['Inter_Tight'] leading-6 tracking-wide">Step 3</span>
            </div>
            <h3 className="text-white text-2xl font-semibold font-['Geist'] leading-7 tracking-tight">
              Deploy & Monitor
            </h3>
            <p className="w-full text-slate-200 text-sm font-normal font-['Inter_Tight'] leading-6">
              Launch agents in minutes across multiple channels. Monitor performance in real-time and refine based on analytics and user feedback.
            </p>
          </div>

          {/* Assets - Deployment Options */}
          <div className="w-96 rounded-xl inline-flex flex-col justify-start items-start gap-3">
            <h4 className="text-white text-lg font-medium font-['Inter_Tight'] leading-7 tracking-wide">
              Active Deployments
            </h4>
            
            <div className="w-full flex flex-col justify-start items-start gap-3">
              {/* Focused Dropdown */}
              <div className="w-full rounded-lg outline outline-2 outline-gray-700/20 flex flex-col justify-start items-start gap-2">
                <div className="w-full p-3 bg-gray-800 rounded-lg outline outline-1 outline-gray-700 inline-flex justify-between items-center">
                  <div className="flex justify-start items-center gap-2">
                    <span className="text-white text-sm font-normal font-['Inter_Tight'] leading-5 tracking-wide">
                      🌐 Website Widget (Live)
                    </span>
                  </div>
                  <CaretUpIcon className="relative" />
                </div>
              </div>

              {/* Dropdown List */}
              <div className="w-full p-1 bg-gray-800 rounded-xl outline outline-1 outline-gray-700 flex flex-col justify-start items-start">
                {/* Slack Integration */}
                <div className="w-full p-3 inline-flex justify-start items-center gap-2">
                  <span className="text-white text-sm font-normal font-['Inter_Tight'] leading-5 tracking-wide">
                    💬 Slack Integration
                  </span>
                </div>

                {/* WhatsApp Business */}
                <div className="w-full p-3 inline-flex justify-start items-center gap-2">
                  <span className="text-white text-sm font-normal font-['Inter_Tight'] leading-5 tracking-wide">
                    📱 WhatsApp Business
                  </span>
                </div>

                {/* API Endpoint */}
                <div className="w-full p-3 bg-gray-700 rounded-sm inline-flex justify-start items-center gap-2">
                  <span className="text-white text-sm font-normal font-['Inter_Tight'] leading-5 tracking-wide">
                    🔗 API Endpoint
                  </span>
                  <div className="w-3.5 h-3.5 relative" />
                </div>

                {/* Email Automation */}
                <div className="w-full p-3 inline-flex justify-start items-center gap-2">
                  <span className="text-white text-sm font-normal font-['Inter_Tight'] leading-5 tracking-wide">
                    📧 Email Automation
                  </span>
                  <div className="w-3.5 h-3.5 relative" />
                </div>

                {/* Real-time Dashboard */}
                <div className="w-full p-3 inline-flex justify-start items-center gap-2">
                  <span className="text-white text-sm font-normal font-['Inter_Tight'] leading-5 tracking-wide">
                    📊 Real-time Dashboard
                  </span>
                  <div className="w-3.5 h-3.5 relative" />
                </div>

                {/* Human Inbox Sync */}
                <div className="w-full p-3 inline-flex justify-start items-center gap-2">
                  <span className="text-white text-sm font-normal font-['Inter_Tight'] leading-5 tracking-wide">
                    👥 Human Inbox Sync
                  </span>
                  <div className="w-3.5 h-3.5 relative" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepsSection;
