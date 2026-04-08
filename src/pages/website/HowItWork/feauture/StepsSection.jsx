import React from 'react';

function SectionHeader() {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <div className="text-emerald-500 text-xs xs:text-sm sm:text-base font-medium font-['Inter_Tight'] leading-4 xs:leading-5 sm:leading-6 tracking-wide">How It Works</div>
      <div className="w-full max-w-[486px] text-center text-white text-xl xs:text-2xl sm:text-[2.25rem] font-semibold font-['Inter_Tight'] leading-8 xs:leading-9 sm:leading-[36px] md:leading-10">
        From Knowledge to <br/>Intelligent Conversations
      </div>
      <div className="w-full max-w-[410px] text-center text-white text-sm xs:text-base sm:text-[1rem] font-normal font-['Inter_Tight'] leading-5 xs:leading-6 sm:leading-6 tracking-wide">
        Transform your static data into interactive AI assistants<br/> that provide instant, accurate answers.
      </div>
    </div>
  );
}

function StepTag({ children }) {
  return (
    <div className="px-3 py-2 bg-emerald-400 rounded-lg inline-flex justify-center items-center gap-2">
      <div className="text-gray-800 text-[16px] font-medium font-['Inter_Tight'] leading-6 tracking-wide">{children}</div>
    </div>
  );
}

function IconWrap({ className = '', children }) {
  return <div className={['p-3.5 rounded-[100px] flex justify-start items-start gap-2', className].join(' ')}>{children}</div>;
}

function UploadCardStack() {
  return (
    <>
      {/* Desktop (exact Figma stack) */}
      <div className="hidden md:block w-[494px] h-72 relative">
        <div className="w-96 p-6 left-0 top-0 absolute rounded-xl inline-flex justify-start items-start gap-3" style={{ backgroundColor: '#142F33' }}>
          <IconWrap className="bg-amber-400/10">
            <FileTextSvg />
          </IconWrap>
          <div className="inline-flex flex-col justify-start items-start gap-2">
            <div className="text-white text-[16px] font-medium font-['Inter_Tight'] leading-6 tracking-wide">Technical Documentation</div>
            <div className="w-64 text-white text-[14px] font-normal font-['Inter_Tight'] leading-5 tracking-wide">
              Upload PDF, DOCX, and TXT files to train your agent
            </div>
          </div>
        </div>

        <div className="w-80 h-32 left-[68px] top-[67px] absolute bg-emerald-950/60 rounded-xl blur-2xl" />

        <div className="w-80 p-6 left-[80px] top-[82px] absolute rounded-xl inline-flex justify-start items-start gap-3" style={{ backgroundColor: '#142F33' }}>
          <IconWrap className="bg-violet-600/10">
            <QuestionSvg />
          </IconWrap>
          <div className="inline-flex flex-col justify-start items-start gap-2">
            <div className="text-white text-[16px] font-medium font-['Inter_Tight'] leading-6 tracking-wide">
              Company FAQs &amp; Support Docs
            </div>
            <div className="w-56 text-white text-[14px] font-normal font-['Inter_Tight'] leading-5 tracking-wide">
              Import existing CSV or TXT files to automate answers
            </div>
          </div>
        </div>

        <div className="w-80 h-32 left-[152px] top-[148px] absolute bg-emerald-950/60 rounded-xl blur-2xl" />

        <div className="w-80 p-6 left-[164px] top-[163px] absolute rounded-xl inline-flex justify-start items-start gap-3" style={{ backgroundColor: '#142F33' }}>
          <IconWrap className="bg-orange-500/10">
            <XWikiSvg className="mt-2" />
          </IconWrap>
          <div className="inline-flex flex-col justify-start items-start gap-2">
            <div className="text-white text-[16px] font-medium font-['Inter_Tight'] leading-6 tracking-wide">Live Website &amp; Wiki</div>
            <div className="w-56 text-slate-100 text-[14px] font-normal font-['Inter_Tight'] leading-5 tracking-wide">
              Connect your help center URL for knowledge synchronization.
            </div>
          </div>
        </div>
      </div>

      {/* Mobile (no scaling, no absolute positioning) */}
      <div className="md:hidden w-full max-w-[384px] mx-auto flex flex-col gap-3">
        <div className="w-full p-6 rounded-xl inline-flex justify-start items-start gap-3" style={{ backgroundColor: '#142F33' }}>
          <IconWrap className="bg-amber-400/10">
            <FileTextSvg />
          </IconWrap>
          <div className="flex-1 flex flex-col justify-start items-start gap-2">
            <div className="text-white text-[16px] font-medium font-['Inter_Tight'] leading-6 tracking-wide">Technical Documentation</div>
            <div className="w-full text-white text-[14px] font-normal font-['Inter_Tight'] leading-5 tracking-wide">
              Upload PDF, DOCX, and TXT files to train your agent
            </div>
          </div>
        </div>

        <div className="w-full p-6 rounded-xl inline-flex justify-start items-start gap-3" style={{ backgroundColor: '#142F33' }}>
          <IconWrap className="bg-violet-600/10">
            <QuestionSvg />
          </IconWrap>
          <div className="flex-1 flex flex-col justify-start items-start gap-2">
            <div className="text-white text-[16px] font-medium font-['Inter_Tight'] leading-6 tracking-wide">
              Company FAQs &amp; Support Docs
            </div>
            <div className="w-full text-white text-[14px] font-normal font-['Inter_Tight'] leading-5 tracking-wide">
              Import existing CSV or TXT files to automate answers
            </div>
          </div>
        </div>

        <div className="w-full p-6 rounded-xl inline-flex justify-start items-start gap-3" style={{ backgroundColor: '#142F33' }}>
          <IconWrap className="bg-orange-500/10">
            <XWikiSvg className="mt-2" />
          </IconWrap>
          <div className="flex-1 flex flex-col justify-start items-start gap-2">
            <div className="text-white text-[16px] font-medium font-['Inter_Tight'] leading-6 tracking-wide">Live Website &amp; Wiki</div>
            <div className="w-full text-slate-100 text-[14px] font-normal font-['Inter_Tight'] leading-5 tracking-wide">
              Connect your help center URL for knowledge synchronization.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function PersonaCard() {
  return (
    <div className="w-full max-w-[384px] xl:w-96 xl:max-w-none p-6 rounded-xl inline-flex flex-col justify-start items-start gap-3" style={{ backgroundColor: '#142F33' }}>
      <div className="self-stretch h-32 flex flex-col justify-start items-start gap-3">
        <div className="text-white text-[16px] font-medium font-['Inter_Tight'] leading-6 tracking-wide">Agent Persona &amp; Instructions</div>
        <div className="self-stretch flex-1 p-3 rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-700 inline-flex justify-start items-center">
          <div className="flex-1 self-stretch text-white text-[12px] font-normal font-['Inter_Tight'] leading-4 tracking-wide">
            Act as a professional support agent for our tech platform. Use the uploaded knowledge base to provide precise answers. If a user expresses
            frustration or asks for a human, trigger the escalation workflow immediately.
          </div>
        </div>
      </div>

      <div className="self-stretch flex flex-col justify-start items-start gap-3">
        <div className="text-white text-[16px] font-medium font-['Inter_Tight'] leading-6 tracking-wide">Agent Guardrails</div>
        <div className="self-stretch p-3 rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-700 inline-flex justify-start items-center gap-3">
          <div className="px-1 py-[3px] rounded-sm outline outline-1 outline-offset-[-1px] outline-gray-700 flex justify-start items-center gap-1" style={{ backgroundColor: '#142F33' }}>
            <div className="text-white text-[12px] font-normal font-['Inter_Tight'] leading-4 tracking-wide">Professional Tone</div>
            <CancelSvg />
          </div>
          <div className="px-1 py-[3px] rounded-sm outline outline-1 outline-offset-[-1px] outline-gray-700 flex justify-start items-center gap-1" style={{ backgroundColor: '#142F33' }}>
            <div className="text-white text-[12px] font-normal font-['Inter_Tight'] leading-4 tracking-wide">Human Escalation</div>
            <CancelSvg />
          </div>
        </div>
      </div>
    </div>
  );
}

function DeploymentsCard() {
  return (
    <div className="w-full max-w-[384px] xl:w-96 xl:max-w-none rounded-xl inline-flex flex-col xl:ml-[100px] justify-start items-start gap-3 relative z-10" >
      <div className="text-white text-[18px] font-medium font-['Inter_Tight'] leading-7 tracking-wide">Active Deployments</div>

      <div className="self-stretch flex flex-col justify-start items-start gap-3">
        <div className="self-stretch rounded-lg outline outline-2 outline-gray-700/20 flex flex-col justify-start items-start gap-2">
          <div className="self-stretch p-3 rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-700 inline-flex justify-between items-center" style={{ backgroundColor: '#142F33' }}>
            <div className="flex justify-start items-center gap-2">
              <div className="text-white text-[14px] font-normal font-['Inter_Tight'] leading-5 tracking-wide">🌐 Website Widget (Live)</div>
            </div>
            <CaretUpSvg />
          </div>
        </div>

        <div className="self-stretch p-1 rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-700 flex flex-col justify-start items-start" style={{ backgroundColor: '#142F33' }}>
          {[
            { label: '💬 Slack Integration' },
            { label: '📱 WhatsApp Business' },
            { label: '🔗 API Endpoint', active: true },
            { label: '📧 Email Automation' },
            { label: '📊 Real-time Dashboard' },
            { label: '👥 Human Inbox Sync' },
          ].map((item) => (
            <div
              key={item.label}
              className={['self-stretch p-3 inline-flex justify-start items-center gap-2', item.active ? 'rounded-sm' : ''].join(' ')} style={item.active ? { backgroundColor: '#032125' } : {}}
            >
              <div className="text-white text-[14px] font-normal font-['Inter_Tight'] leading-5 tracking-wide">{item.label}</div>
              <div className="size-3.5 relative" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function StepIndicator() {
  return (
    <div className="hidden xl:block absolute left-1/2 -translate-x-1/2 top-[-16px]">
      <svg width="12" height="1079" viewBox="0 0 12 1079" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0 5.99999C0 2.68628 2.68629 0 6 0C9.31371 0 12 2.68629 12 6V1073C12 1076.31 9.31371 1079 6 1079C2.68629 1079 0 1076.31 0 1073V5.99999Z"
          fill="url(#paint0_linear_409_4366)"
        />
        <defs>
          <linearGradient id="paint0_linear_409_4366" x1="6" y1="0" x2="6" y2="2598.9" gradientUnits="userSpaceOnUse">
            <stop offset="0.317708" stopColor="#082529" />
            <stop offset="0.413655" stopColor="#31C48D" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default function HowItWorksSteps() {
  return (
    <section className="w-full overflow-x-hidden" style={{ backgroundColor: '#032125' }}>
      <div className="mx-auto w-full max-w-[1440px] px-5 py-12 sm:px-6 md:px-10 md:py-16 xl:px-28 xl:py-20">
        <div className="flex flex-col justify-start items-center gap-12 xl:gap-16">
          <SectionHeader />

          <div className="self-stretch relative flex flex-col justify-start items-start gap-10 xl:gap-14">
            <div className="self-stretch flex flex-col xl:flex-row justify-between items-start xl:items-center gap-10">
              <div className="w-full xl:w-96 inline-flex flex-col justify-center items-start gap-4">
                <StepTag>Step 1</StepTag>
                <div className="text-white text-[24px] font-semibold font-['Inter_Tight'] leading-7 tracking-tight">Upload Your Knowledge</div>
              <div className="self-stretch text-slate-200 text-[14px] font-normal font-['Inter_Tight'] leading-6">
                  Connect your documentation, FAQs, support articles, or internal wikis. The platform processes and structures your content for
                  intelligent retrieval.
                </div>
              </div>

              <div className="w-full xl:w-auto flex justify-center xl:justify-start">
                <UploadCardStack />
              </div>
            </div>

            <div className="self-stretch flex flex-col xl:flex-row justify-between items-start xl:items-center gap-10">
              <div className="order-2 xl:order-1 w-full xl:w-auto flex justify-center xl:justify-start">
                <PersonaCard />
              </div>

              <div className="order-1 xl:order-2 w-full xl:w-auto inline-flex flex-col justify-center items-start gap-4">
                <StepTag>Step 2</StepTag>
                <div className="text-white text-[24px] font-semibold font-['Inter_Tight'] leading-7 tracking-tight">Input Your Ideas</div>
                <div className="w-full xl:w-[456px] text-slate-200 text-[14px] font-normal font-['Inter_Tight'] leading-6">
                  Define agent behavior, response style, and conversation flows. Set boundaries, escalation rules, and approval workflows to maintain
                  control.
                </div>
              </div>
            </div>

            <div className="self-stretch flex flex-col xl:flex-row justify-between items-start xl:items-center gap-10">
              <div className="w-full xl:w-96 inline-flex flex-col justify-center items-start gap-4">
                <StepTag>Step 3</StepTag>
                <div className="text-white text-[24px] font-semibold font-['Inter_Tight'] leading-7 tracking-tight">Deploy &amp; Monitor</div>
              <div className="self-stretch text-slate-200 text-[14px] font-normal font-['Inter_Tight'] leading-6">
                  Launch agents in minutes across multiple channels. Monitor performance in real-time and refine based on analytics and user feedback.
                </div>
              </div>

              <div className="w-full xl:w-auto flex justify-center xl:justify-start">
                <DeploymentsCard />
              </div>
            </div>

            <StepIndicator />
          </div>
        </div>
      </div>
    </section>
  );
}

function FileTextSvg() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M20.0306 7.71938L14.7806 2.46938C14.7109 2.39975 14.6282 2.34454 14.5371 2.3069C14.4461 2.26926 14.3485 2.24992 14.25 2.25H5.25C4.85218 2.25 4.47064 2.40804 4.18934 2.68934C3.90804 2.97064 3.75 3.35218 3.75 3.75V20.25C3.75 20.6478 3.90804 21.0294 4.18934 21.3107C4.47064 21.592 4.85218 21.75 5.25 21.75H18.75C19.1478 21.75 19.5294 21.592 19.8107 21.3107C20.092 21.0294 20.25 20.6478 20.25 20.25V8.25C20.2501 8.15148 20.2307 8.05391 20.1931 7.96286C20.1555 7.87182 20.1003 7.78908 20.0306 7.71938ZM15 16.5H9C8.80109 16.5 8.61032 16.421 8.46967 16.2803C8.32902 16.1397 8.25 15.9489 8.25 15.75C8.25 15.5511 8.32902 15.3603 8.46967 15.2197C8.61032 15.079 8.80109 15 9 15H15C15.1989 15 15.3897 15.079 15.5303 15.2197C15.671 15.3603 15.75 15.5511 15.75 15.75C15.75 15.9489 15.671 16.1397 15.5303 16.2803C15.3897 16.421 15.1989 16.5 15 16.5ZM15 13.5H9C8.80109 13.5 8.61032 13.421 8.46967 13.2803C8.32902 13.1397 8.25 12.9489 8.25 12.75C8.25 12.5511 8.32902 12.3603 8.46967 12.2197C8.61032 12.079 8.80109 12 9 12H15C15.1989 12 15.3897 12.079 15.5303 12.2197C15.671 12.3603 15.75 12.5511 15.75 12.75C15.75 12.9489 15.671 13.1397 15.5303 13.2803C15.3897 13.421 15.1989 13.5 15 13.5ZM14.25 8.25V4.125L18.375 8.25H14.25Z"
        fill="#FEB12E"
      />
    </svg>
  );
}

function QuestionSvg() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g clipPath="url(#clip0_409_4297)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 24C15.1826 24 18.2348 22.7357 20.4853 20.4853C22.7357 18.2348 24 15.1826 24 12C24 8.8174 22.7357 5.76516 20.4853 3.51472C18.2348 1.26428 15.1826 0 12 0C8.8174 0 5.76516 1.26428 3.51472 3.51472C1.26428 5.76516 0 8.8174 0 12C0 15.1826 1.26428 18.2348 3.51472 20.4853C5.76516 22.7357 8.8174 24 12 24ZM7.3905 7.485C6.9635 8.129 6.75 8.764 6.75 9.39C6.75 9.695 6.885 9.978 7.155 10.239C7.425 10.5 7.7555 10.63 8.1465 10.629C8.8115 10.629 9.263 10.256 9.501 9.51C9.753 8.797 10.061 8.257 10.425 7.89C10.789 7.524 11.356 7.341 12.126 7.341C12.784 7.341 13.3215 7.5225 13.7385 7.8855C14.1545 8.2495 14.3625 8.6955 14.3625 9.2235C14.3643 9.48839 14.2938 9.74875 14.1585 9.9765C14.0195 10.2077 13.85 10.4191 13.6545 10.605C13.3391 10.8938 13.0149 11.173 12.6825 11.442C12.1725 11.865 11.7665 12.23 11.4645 12.537C11.1645 12.845 10.923 13.2015 10.74 13.6065C10.257 15.474 12.765 15.624 13.344 14.2905C13.414 14.1625 13.5205 14.0205 13.6635 13.8645C13.8075 13.7095 13.9985 13.5295 14.2365 13.3245C14.8434 12.819 15.4405 12.302 16.0275 11.7735C16.3595 11.4675 16.646 11.1025 16.887 10.6785C17.136 10.2271 17.2612 9.71789 17.25 9.2025C17.25 8.4905 17.038 7.8305 16.614 7.2225C16.191 6.6135 15.591 6.1325 14.814 5.7795C14.037 5.4265 13.141 5.25 12.126 5.25C11.034 5.25 10.0785 5.4615 9.2595 5.8845C8.4405 6.3075 7.8175 6.842 7.3905 7.485ZM10.6005 18.105C10.6005 18.5028 10.7585 18.8844 11.0398 19.1657C11.3211 19.447 11.7027 19.605 12.1005 19.605C12.4983 19.605 12.8799 19.447 13.1612 19.1657C13.4425 18.8844 13.6005 18.5028 13.6005 18.105C13.6005 17.7072 13.4425 17.3256 13.1612 17.0443C12.8799 16.763 12.4983 16.605 12.1005 16.605C11.7027 16.605 11.3211 16.763 11.0398 17.0443C10.7585 17.3256 10.6005 17.7072 10.6005 18.105Z"
          fill="#7C3AED"
        />
      </g>
      <defs>
        <clipPath id="clip0_409_4297">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function XWikiSvg({ className = '' }) {
  return (
    <svg className={className} width="24" height="8" viewBox="0 0 24 8" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g clipPath="url(#clip0_409_4306)">
        <path
          d="M4.03054 3.90038e-09C4.10281 7.23343e-06 4.17227 0.027788 4.22434 0.077513C4.27641 0.127238 4.30705 0.195042 4.30982 0.266698L4.31005 0.277395V1.52047C4.31018 1.59318 4.28151 1.66304 4.23023 1.71499C4.17895 1.76694 4.10916 1.79683 4.03588 1.79822C3.96261 1.79961 3.89172 1.77239 3.83847 1.72242C3.78523 1.67246 3.75389 1.60374 3.75121 1.53107L3.75098 1.52047V0.277349C3.75098 0.240923 3.75821 0.204854 3.77226 0.171201C3.78631 0.137549 3.8069 0.106972 3.83286 0.0812172C3.85882 0.0554623 3.88964 0.0350339 3.92356 0.0210986C3.95748 0.00716323 3.99383 -6.10475e-06 4.03054 3.90038e-09Z"
          fill="#70B700"
        />
        <path
          d="M7.80571 3.69763C7.87895 3.69735 7.94938 3.72561 8.00184 3.77632C8.0543 3.82703 8.0846 3.89614 8.08624 3.96879C8.08787 4.04145 8.0607 4.11183 8.01057 4.16481C7.96044 4.21779 7.89136 4.24914 7.81818 4.2521L7.80576 4.25238H6.55289C6.47985 4.25236 6.40971 4.22398 6.3575 4.1733C6.30528 4.12262 6.27514 4.05367 6.27351 3.98122C6.27188 3.90876 6.2989 3.83855 6.34878 3.78561C6.39866 3.73267 6.46745 3.70121 6.54042 3.69796L6.55289 3.69768L7.80571 3.69763Z"
          fill="#FF7700"
        />
        <path
          d="M4.31005 7.72108C4.31004 7.79356 4.28143 7.86315 4.23036 7.91495C4.17928 7.96676 4.1098 7.99668 4.03678 7.9983C3.96375 7.99991 3.89299 7.9731 3.83964 7.92361C3.78629 7.87411 3.75458 7.80586 3.7513 7.73345L3.75098 7.72108V6.47797C3.75099 6.40549 3.7796 6.3359 3.83068 6.28409C3.88175 6.23228 3.95123 6.20237 4.02426 6.20075C4.09728 6.19914 4.16804 6.22594 4.22139 6.27544C4.27474 6.32494 4.30645 6.39319 4.30973 6.46559L4.31005 6.47797V7.72108Z"
          fill="#FF0000"
        />
        <path
          d="M0.279402 4.25245C0.206366 4.25242 0.136242 4.22403 0.0840365 4.17335C0.0318314 4.12266 0.00169244 4.05372 6.91281e-05 3.98127C-0.00155419 3.90881 0.0254671 3.83861 0.0753507 3.78568C0.125234 3.73274 0.194017 3.70128 0.26698 3.69803L0.279402 3.69775H1.53228C1.60531 3.69778 1.67544 3.72618 1.72764 3.77686C1.77985 3.82754 1.80999 3.89649 1.81161 3.96894C1.81323 4.04139 1.78621 4.1116 1.73633 4.16453C1.68644 4.21746 1.61766 4.24892 1.5447 4.25217L1.53228 4.25245H0.279402Z"
          fill="#0087CB"
        />
        <path
          d="M7.08477 0.536013C7.2831 0.708246 7.30645 1.00513 7.13985 1.20559L7.13043 1.21666L4.6761 3.99922L7.13043 6.78183C7.30724 6.98229 7.28681 7.28704 7.08477 7.46248C6.8864 7.63476 6.58673 7.61829 6.40856 7.42792L6.39881 7.41722L4.03012 4.73164L1.66152 7.41722C1.48471 7.61769 1.17759 7.63792 0.975556 7.46248C0.777181 7.29025 0.753884 6.99336 0.920431 6.7929L0.9299 6.78183L3.38413 3.99922L0.9299 1.21666C0.753087 1.0162 0.773525 0.711455 0.975556 0.536013C1.17393 0.363734 1.47356 0.3802 1.65177 0.570572L1.66152 0.581316L4.03012 3.2668L6.39881 0.581316C6.57562 0.380851 6.88274 0.360572 7.08477 0.536013Z"
          fill="#505052"
        />
        <path
          d="M15.6536 0.464515C15.7402 0.481062 15.8169 0.530333 15.8677 0.601943C15.9184 0.673553 15.9391 0.761906 15.9254 0.848376L15.9235 0.859818L14.6818 7.2661C14.6169 7.6014 14.1512 7.63842 14.0303 7.32414L14.0261 7.31275L12.1128 1.82828L10.1995 7.31275C10.087 7.63545 9.62069 7.60614 9.54626 7.27791L9.54377 7.2661L8.30219 0.859818C8.28583 0.773064 8.30435 0.683402 8.35379 0.61003C8.40323 0.536658 8.47965 0.485408 8.5667 0.467254C8.65375 0.449099 8.7445 0.465482 8.81952 0.512896C8.89454 0.56031 8.94788 0.634986 8.9681 0.720934L8.97049 0.732283L9.97207 5.90019L11.7913 0.685632C11.8955 0.386748 12.3172 0.382748 12.43 0.673678L12.4344 0.685632L14.2535 5.90019L15.2551 0.732283C15.2722 0.644353 15.3237 0.566746 15.3985 0.516532C15.4732 0.466317 15.5649 0.447607 15.6536 0.464515ZM16.955 0.448655C17.0433 0.448663 17.128 0.482666 17.1915 0.543492C17.2549 0.604319 17.2921 0.687215 17.2951 0.774701L17.2954 0.786329V7.19256C17.2951 7.28096 17.26 7.36574 17.1974 7.42871C17.1349 7.49167 17.05 7.52779 16.9609 7.52931C16.8718 7.53084 16.7857 7.49764 16.721 7.43685C16.6563 7.37606 16.6183 7.29253 16.615 7.20419L16.6148 7.19256V0.786283C16.6148 0.696726 16.6506 0.610837 16.7144 0.547511C16.7783 0.484185 16.8648 0.448608 16.9551 0.448608M18.5692 0.448608C18.6574 0.448617 18.7422 0.482619 18.8056 0.543446C18.8691 0.604272 18.9062 0.687169 18.9093 0.774655L18.9094 0.786283V3.66698L22.0533 0.547492C22.1165 0.485456 22.2016 0.450386 22.2904 0.449777C22.3793 0.449169 22.4649 0.48307 22.5289 0.544236C22.5929 0.605401 22.6302 0.68898 22.6329 0.777109C22.6357 0.865238 22.6035 0.950928 22.5434 1.01586L22.5346 1.02503L19.547 3.98945L22.5345 6.95382C22.5968 7.01559 22.6325 7.09889 22.6341 7.18623C22.6358 7.27357 22.6032 7.35814 22.5434 7.42219L22.5345 7.43131C22.4723 7.49307 22.3883 7.52849 22.3003 7.53013C22.2123 7.53177 22.127 7.4995 22.0625 7.4401L22.0533 7.43131L18.9094 4.31177V7.19256C18.9092 7.28096 18.874 7.36574 18.8115 7.42871C18.7489 7.49167 18.664 7.52779 18.5749 7.52931C18.4859 7.53084 18.3997 7.49764 18.3351 7.43685C18.2704 7.37606 18.2323 7.29253 18.229 7.20419L18.2288 7.19256V0.786283C18.2288 0.696726 18.2647 0.610837 18.3285 0.547511C18.3923 0.484185 18.4789 0.448608 18.5691 0.448608M23.6597 0.448608C23.7479 0.448617 23.8327 0.482619 23.8961 0.543446C23.9595 0.604272 23.9967 0.687169 23.9997 0.774655L23.9999 0.786283V7.19256C23.9994 7.28077 23.9641 7.36528 23.9016 7.42801C23.8391 7.49074 23.7544 7.52671 23.6655 7.52823C23.5766 7.52975 23.4906 7.49669 23.426 7.43614C23.3614 7.37558 23.3232 7.29233 23.3196 7.20419L23.3193 7.19256V0.786283C23.3193 0.696726 23.3552 0.610837 23.419 0.547511C23.4828 0.484185 23.5694 0.448608 23.6597 0.448608Z"
          fill="#FF7700"
        />
      </g>
      <defs>
        <clipPath id="clip0_409_4306">
          <rect width="24" height="8" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function CancelSvg() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M9.57382 9.17619C9.60145 9.20194 9.62361 9.23299 9.63898 9.26749C9.65435 9.30199 9.66262 9.33923 9.66329 9.377C9.66395 9.41476 9.65701 9.45227 9.64286 9.48729C9.62872 9.52231 9.60766 9.55412 9.58095 9.58083C9.55425 9.60754 9.52243 9.62859 9.48741 9.64274C9.45239 9.65688 9.41488 9.66383 9.37712 9.66316C9.33936 9.6625 9.30211 9.65423 9.26761 9.63886C9.23311 9.62349 9.20206 9.60133 9.17631 9.57369L6.00006 6.39791L2.82381 9.57369C2.7705 9.62337 2.69998 9.65042 2.62712 9.64913C2.55426 9.64785 2.48474 9.61833 2.43321 9.5668C2.38168 9.51527 2.35216 9.44575 2.35087 9.37289C2.34959 9.30003 2.37663 9.22951 2.42631 9.17619L5.6021 5.99994L2.42631 2.82369C2.37663 2.77038 2.34959 2.69986 2.35087 2.627C2.35216 2.55413 2.38168 2.48461 2.43321 2.43308C2.48474 2.38155 2.55426 2.35204 2.62712 2.35075C2.69998 2.34947 2.7705 2.37651 2.82381 2.42619L6.00006 5.60197L9.17631 2.42619C9.22963 2.37651 9.30015 2.34947 9.37301 2.35075C9.44587 2.35204 9.51539 2.38155 9.56692 2.43308C9.61845 2.48461 9.64797 2.55413 9.64926 2.627C9.65054 2.69986 9.6235 2.77038 9.57382 2.82369L6.39803 5.99994L9.57382 9.17619Z"
        fill="white"
      />
    </svg>
  );
}

function CaretUpSvg() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M16.5813 12.8312C16.4934 12.919 16.3742 12.9683 16.25 12.9683C16.1258 12.9683 16.0067 12.919 15.9188 12.8312L10 6.91323L4.08128 12.8312C3.99242 12.914 3.87489 12.9591 3.75345 12.9569C3.63201 12.9548 3.51615 12.9056 3.43026 12.8197C3.34438 12.7338 3.29518 12.618 3.29304 12.4965C3.2909 12.3751 3.33598 12.2576 3.41878 12.1687L9.66878 5.9187C9.75667 5.83092 9.87581 5.78162 10 5.78162C10.1242 5.78162 10.2434 5.83092 10.3313 5.9187L16.5813 12.1687C16.6691 12.2566 16.7184 12.3757 16.7184 12.5C16.7184 12.6242 16.6691 12.7433 16.5813 12.8312Z"
        fill="white"
      />
    </svg>
  );
}
