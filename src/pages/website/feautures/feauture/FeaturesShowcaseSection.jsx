import React from 'react';

const FeaturesShowcaseSection = () => {
  return (
    <div className="w-full min-h-[600px] xs:min-h-[700px] sm:min-h-[800px] md:min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 via-33% to-white py-8 xs:py-10 sm:py-12 md:py-16 px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Knowledge Powered Training Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xs:gap-10 sm:gap-12 lg:gap-16 mb-12 xs:mb-14 sm:mb-16 lg:mb-20">
          {/* Right Section - Knowledge Powered Training */}
          <div className="w-full lg:w-[568px] flex flex-col justify-start gap-6 lg:gap-8">
            <div className="w-full flex items-center gap-4">
              <div className="w-10 h-10 xs:w-12 xs:h-12 lg:w-14 lg:h-14 px-1 xs:px-2 lg:px-3 bg-emerald-400 rounded-lg xs:rounded-xl lg:rounded-2xl flex justify-center items-center shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.9978 4.99896C11.999 4.59907 11.9202 4.20298 11.7661 3.83399C11.6119 3.465 11.3856 3.13056 11.1003 2.85033C10.815 2.57011 10.4765 2.34976 10.1049 2.20225C9.73317 2.05474 9.33573 1.98304 8.93593 1.99137C8.53613 1.99971 8.14202 2.0879 7.77681 2.25078C7.41159 2.41365 7.08262 2.64791 6.80926 2.93978C6.5359 3.23164 6.32367 3.57523 6.18504 3.95032C6.04641 4.32541 5.98418 4.72444 6.00202 5.12393C5.41434 5.27504 4.86875 5.55789 4.40658 5.95108C3.9444 6.34426 3.57775 6.83746 3.3344 7.39332C3.09106 7.94919 2.97739 8.55314 2.9934 9.15943C2.9997 9.76573 3.18891 10.3585 3.47653 10.8928C2.97081 11.3036 2.57314 11.8318 2.31811 12.4314C2.06307 13.031 1.9584 13.6838 2.01319 14.3331C2.06799 14.9823 2.28059 15.6084 2.63251 16.1567C2.98443 16.7051 3.465 17.1592 4.03242 17.4794C3.96235 18.0216 4.00417 18.5723 4.15528 19.0976C4.3064 19.623 4.56361 20.1118 4.91103 20.5338C5.25845 20.9558 5.6887 21.3022 6.17521 21.5514C6.66172 21.8006 7.19416 21.9475 7.73965 21.9829C8.28514 22.0183 8.8321 21.9415 9.34674 21.7572C9.86138 21.5729 10.3328 21.2851 10.7318 20.9115C11.1309 20.5379 11.4491 20.0865 11.6668 19.5851C11.8846 19.0837 11.9972 18.543 11.9978 17.9963V4.99896Z" stroke="white" strokeWidth="1.9996" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M11.9976 4.99896C11.9964 4.59907 12.0752 4.20298 12.2293 3.83399C12.3835 3.465 12.6098 3.13056 12.8951 2.85033C13.1804 2.57011 13.5188 2.34976 13.8905 2.20225C14.2622 2.05474 14.6597 1.98304 15.0595 1.99137C15.4593 1.99971 15.8534 2.0879 16.2186 2.25078C16.5838 2.41365 16.9128 2.64791 17.1861 2.93978C17.4595 3.23164 17.6717 3.57523 17.8104 3.95032C17.949 4.32541 18.0112 4.72444 17.9934 5.12393C18.581 5.27504 19.1266 5.55789 19.5888 5.95108C20.051 6.34426 20.4176 6.83746 20.661 7.39332C20.9043 7.94919 21.018 8.55314 20.9934 9.15943C20.9687 9.76573 20.8065 10.3585 20.5189 10.8928C21.0246 11.3036 21.4222 11.8318 21.6773 12.4314C21.9323 13.031 22.037 13.6838 21.9822 14.3331C21.9274 14.9823 21.7148 15.6084 21.3629 16.1567C21.011 16.7051 20.5304 17.1592 19.963 17.4794C20.033 18.0216 19.9912 18.5723 19.8401 19.0976C19.689 19.623 19.4318 20.1118 19.0844 20.5338C18.7369 20.9558 18.3067 21.3022 17.8202 21.5514C17.3337 21.8006 16.8012 21.9475 16.2557 21.9829C15.7102 22.0183 15.1633 21.9415 14.6487 21.7572C14.134 21.5729 13.6626 21.2851 13.2636 20.9115C12.8645 20.5379 12.5463 20.0865 12.3285 19.5851C12.1108 19.0837 11.9982 18.543 11.9976 17.9963V4.99896Z" stroke="white" strokeWidth="1.9996" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14.9968 12.9974C14.1575 12.7021 13.4245 12.1645 12.8906 11.4527C12.3567 10.7408 12.0459 9.88666 11.9974 8.99817C11.949 9.88666 11.6382 10.7408 11.1043 11.4527C10.5704 12.1645 9.83743 12.7021 8.99805 12.9974" stroke="white" strokeWidth="1.9996" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17.5952 6.49902C17.8372 6.07961 17.9741 5.60784 17.9942 5.12402" stroke="white" strokeWidth="1.9996" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6.00195 5.12402C6.02173 5.60776 6.15828 6.07952 6.39995 6.49902" stroke="white" strokeWidth="1.9996" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3.47607 10.8939C3.65901 10.7449 3.85478 10.6124 4.06107 10.4979" stroke="white" strokeWidth="1.9996" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M19.9341 10.4979C20.1404 10.6124 20.3361 10.7449 20.5191 10.8939" stroke="white" strokeWidth="1.9996" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5.99923 17.9965C5.31006 17.9968 4.63249 17.819 4.03223 17.4805" stroke="white" strokeWidth="1.9996" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M19.9636 17.4805C19.3633 17.819 18.6858 17.9968 17.9966 17.9965" stroke="white" strokeWidth="1.9996" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-slate-200 via-gray-300/95 via-7% to-black/0" />
            </div>

            <h2 className="text-slate-900 text-2xl xs:text-3xl sm:text-4xl lg:text-[44px] font-semibold font-['Inter_Tight'] leading-tight lg:leading-[52.80px]">
              Knowledge-Powered <br className="hidden lg:block" /> Training
            </h2>
            <p className="text-slate-500 text-sm sm:text-base lg:text-lg font-normal font-['Inter_Tight'] leading-relaxed lg:leading-8 max-w-[530px]">
              Upload documents, wikis, and support articles. Our AI processes and structures your content for intelligent, contextual responses that feel natural and accurate.
            </p>
            <div className="w-full lg:w-[568px] h-auto mt-6 xs:mt-8 lg:mt-10">
              <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 gap-1.5 xs:gap-2 sm:gap-3">
                <div className="w-full xs:w-auto sm:w-auto h-8 xs:h-9 sm:h-10 bg-slate-50 rounded-lg xs:rounded-xl outline outline-[1.26px] outline-offset-[-1.26px] outline-slate-200 inline-flex justify-start items-center gap-1.5 xs:gap-2 p-1.5 xs:p-2">
                  <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.4893 1.66528H4.9958C4.55415 1.66528 4.13059 1.84073 3.8183 2.15302C3.50601 2.46531 3.33057 2.88887 3.33057 3.33052V16.6524C3.33057 17.094 3.50601 17.5176 3.8183 17.8299C4.13059 18.1422 4.55415 18.3176 4.9958 18.3176H14.9872C15.4288 18.3176 15.8524 18.1422 16.1647 17.8299C16.477 17.5176 16.6524 17.094 16.6524 16.6524V5.82837L12.4893 1.66528Z" stroke="#31C48D" strokeWidth="1.66523" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M11.6567 1.66528V4.99575C11.6567 5.4374 11.8322 5.86096 12.1445 6.17325C12.4568 6.48554 12.8803 6.66098 13.322 6.66098H16.6524" stroke="#31C48D" strokeWidth="1.66523" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8.32637 7.49353H6.66113" stroke="#31C48D" strokeWidth="1.66523" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M13.3221 10.824H6.66113" stroke="#31C48D" strokeWidth="1.66523" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M13.3221 14.1545H6.66113" stroke="#31C48D" strokeWidth="1.66523" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <div className="flex-1">
                    <div className="text-slate-900 text-[10px] xs:text-xs sm:text-sm font-medium font-['Inter_Tight'] leading-3.5 xs:leading-4 sm:leading-5">PDF, DOCX, TXT support</div>
                  </div>
                </div>
                <div className="w-full xs:w-auto sm:w-auto h-8 xs:h-9 sm:h-10 bg-slate-50 rounded-lg xs:rounded-xl outline outline-[1.26px] outline-offset-[-1.26px] outline-slate-200 inline-flex justify-start items-center gap-1.5 xs:gap-2 p-1.5 xs:p-2">
                  <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.49335 14.1545H5.82812C4.724 14.1545 3.66511 13.7159 2.88438 12.9352C2.10365 12.1545 1.66504 11.0956 1.66504 9.99145C1.66504 8.88733 2.10365 7.82844 2.88438 7.04771C3.66511 6.26698 4.724 5.82837 5.82812 5.82837H7.49335" stroke="#31C48D" strokeWidth="1.66523" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12.4893 5.82837H14.1545C15.2586 5.82837 16.3175 6.26698 17.0982 7.04771C17.879 7.82844 18.3176 8.88733 18.3176 9.99145C18.3176 11.0956 17.879 12.1545 17.0982 12.9352C16.3175 13.7159 15.2586 14.1545 14.1545 14.1545H12.4893" stroke="#31C48D" strokeWidth="1.66523" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6.66113 9.99146H13.3221" stroke="#31C48D" strokeWidth="1.66523" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <div className="flex-1">
                    <div className="text-slate-900 text-[10px] xs:text-xs sm:text-sm font-medium font-['Inter_Tight'] leading-3.5 xs:leading-4 sm:leading-5">URL scraping & indexing</div>
                  </div>
                </div>
                <div className="w-full xs:w-auto sm:w-auto h-8 xs:h-9 sm:h-10 bg-slate-50 rounded-lg xs:rounded-xl outline outline-[1.26px] outline-offset-[-1.26px] outline-slate-200 inline-flex justify-start items-center gap-1.5 xs:gap-2 p-1.5 xs:p-2">
                  <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.49805 9.99135C2.49805 8.00394 3.28754 6.09793 4.69286 4.69261C6.09817 3.2873 8.00418 2.4978 9.9916 2.4978C12.0865 2.50568 14.0973 3.32311 15.6034 4.77917L17.4851 6.66089" stroke="#31C48D" strokeWidth="1.66523" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17.4849 2.4978V6.66089H13.3218" stroke="#31C48D" strokeWidth="1.66523" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17.4851 9.99146C17.4851 11.9789 16.6956 13.8849 15.2903 15.2902C13.885 16.6955 11.979 17.485 9.9916 17.485C7.89669 17.4771 5.88594 16.6597 4.37976 15.2036L2.49805 13.3219" stroke="#31C48D" strokeWidth="1.66523" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6.66113 13.3219H2.49805V17.485" stroke="#31C48D" strokeWidth="1.66523" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <div className="flex-1">
                    <div className="text-slate-900 text-[10px] xs:text-xs sm:text-sm font-medium font-['Inter_Tight'] leading-3.5 xs:leading-4 sm:leading-5">Automatic content updates</div>
                  </div>
                </div>
                <div className="w-full xs:w-auto sm:w-auto h-8 xs:h-9 sm:h-10 bg-slate-50 rounded-lg xs:rounded-xl outline outline-[1.26px] outline-offset-[-1.26px] outline-slate-200 inline-flex justify-start items-center gap-1.5 xs:gap-2 p-1.5 xs:p-2">
                  <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.99139 4.16305C9.99237 3.83003 9.92675 3.50017 9.79838 3.19288C9.67002 2.88559 9.4815 2.60707 9.24392 2.37371C9.00634 2.14034 8.7245 1.95684 8.41496 1.83399C8.10542 1.71115 7.77445 1.65144 7.4415 1.65838C7.10855 1.66532 6.78035 1.73877 6.4762 1.87441C6.17205 2.01004 5.89809 2.20513 5.67044 2.44819C5.44279 2.69126 5.26605 2.97739 5.1506 3.28976C5.03515 3.60213 4.98333 3.93443 4.99819 4.26712C4.50878 4.39296 4.05442 4.62852 3.66952 4.95596C3.28463 5.28339 2.97929 5.69412 2.77664 6.15704C2.47384 9.41347 2.14267 9.85334 1.93028 10.3527C1.71789 10.852 1.63072 11.3956 1.67635 11.9363C1.72198 12.477 1.89904 12.9984 2.19211 13.4551C2.48518 13.9117 2.88539 14.2899 3.35793 14.5566C3.82958 15.0081 4.37895 15.4423 4.08962 17.1002C4.37895 17.4517 4.73725 17.7401 5.14241 17.9476C5.54757 18.1552 5.99098 18.2775 6.44525 18.307C6.89953 18.3365 7.35503 18.2725 7.78361 18.119C8.2122 17.9656 8.60477 17.7259 8.9371 17.4148C9.26942 17.1036 9.53443 16.7277 9.71576 16.3101C9.8971 15.8926 9.9909 15.4423 9.99139 14.9871V4.16305Z" stroke="#31C48D" strokeWidth="1.66523" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9.99122 4.16305C9.99024 3.83003 10.0559 3.50017 10.1842 3.19288C10.3126 2.88559 10.5011 2.60707 10.7387 2.37371C10.9763 2.14034 11.2581 1.95684 11.5677 1.83399C11.8772 1.71115 12.2082 1.65144 12.5411 1.65838C12.8741 1.66532 13.2023 1.73877 13.5064 1.87441C13.8106 2.01004 14.0845 2.20513 14.3122 2.44819C14.5398 2.69126 14.7166 2.97739 14.832 3.28976C14.9475 3.60213 14.9933 3.93443 14.9844 4.26712C15.4738 4.39296 15.9282 4.62852 16.3131 4.95596C16.698 5.28339 16.9974 5.69412 17.206 6.15704C17.4086 9.41347 17.7905 9.85334 18.0523 10.3527C18.2606 10.852 18.3519 11.3956 18.3063 11.9363C18.2606 12.477 18.0836 12.9984 17.7905 13.4551C17.4974 13.9117 17.0972 14.2899 16.6247 14.5566C16.683 15.0081 16.6482 15.4667 16.5224 15.9042C16.3965 16.3417 16.1823 16.7487 15.893 17.1002C15.6037 17.4517 15.2454 17.7401 14.8402 17.9476C14.435 18.1552 13.9916 18.2775 13.5374 18.307C13.0831 18.3365 12.6276 18.2725 12.199 18.119C11.7704 17.9656 11.3778 17.7259 11.0455 17.4148C10.7132 17.1036 10.4482 16.7277 10.2668 16.3101C10.0855 15.8926 9.99171 15.4423 9.99122 14.9871V4.16305Z" stroke="#31C48D" strokeWidth="1.66523" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12.4894 10.824C11.7903 10.5781 11.1799 10.1304 10.7353 9.53761C10.2907 8.94479 10.0318 8.23345 9.9915 7.49353C9.95116 8.23345 9.69232 8.94479 9.2477 9.53761C8.80309 10.1304 8.19268 10.5781 7.49365 10.824" stroke="#31C48D" strokeWidth="1.66523" strokeLinejoin="round"/>
                  <path d="M14.6533 5.41206C14.8548 5.06285 14.9688 4.67005 14.9855 4.26721" stroke="#31C48D" strokeWidth="1.66523" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4.99805 4.26721C5.01451 4.66998 5.12821 5.06277 5.32943 5.41206" stroke="#31C48D" strokeWidth="1.66523" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2.89502 9.07215C3.04734 8.94809 3.21033 8.83776 3.3821 8.74243" stroke="#31C48D" strokeWidth="1.66523" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16.6006 8.74243C16.7724 8.83776 16.9353 8.94809 17.0877 9.07215" stroke="#31C48D" strokeWidth="1.66523" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4.99567 14.9871C4.42185 14.9874 3.8577 14.8394 3.35791 14.5575" stroke="#31C48D" strokeWidth="1.66523" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16.6251 14.5575C16.1253 14.8394 15.5611 14.9874 14.9873 14.9871" stroke="#31C48D" strokeWidth="1.66523" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <div className="flex-1">
                    <div className="text-slate-900 text-[10px] xs:text-xs sm:text-sm font-medium font-['Inter_Tight'] leading-3.5 xs:leading-4 sm:leading-5">Smart chunking & embedding</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[568px] h-auto lg:h-[477px] p-4 lg:p-8 bg-white rounded-[32px] shadow-[0px_25px_50px_-12px_rgba(0,188,125,0.10)] outline outline-[1.26px] outline-offset-[-1.26px] outline-slate-200 inline-flex flex-col justify-start items-start">
            <div className="w-full lg:w-[502px] h-auto lg:h-96 flex flex-col justify-start items-start gap-4">
              <div className="self-stretch inline-flex justify-between items-center">
                <div className="w-32 h-8 flex justify-start items-center gap-2">
                  <div className="w-8 h-8 px-2 bg-emerald-950 rounded-[10px] flex justify-center items-center">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.99388 1.33252H3.99756C3.64415 1.33252 3.30522 1.47291 3.05532 1.7228C2.80543 1.9727 2.66504 2.31163 2.66504 2.66504V13.3252C2.66504 13.6786 2.80543 14.0175 3.05532 14.2674C3.30522 14.5173 3.64415 14.6577 3.99756 14.6577H11.9927C12.3461 14.6577 12.685 14.5173 12.9349 14.2674C13.1848 14.0175 13.3252 13.6786 13.3252 13.3252V4.66381L9.99388 1.33252Z" stroke="white" strokeWidth="1.33252" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9.32764 1.33252V3.99755C9.32764 4.35096 9.46803 4.68989 9.71792 4.93978C9.96782 5.18968 10.3067 5.33007 10.6602 5.33007H13.3252" stroke="white" strokeWidth="1.33252" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6.66259 5.99634H5.33008" stroke="white" strokeWidth="1.33252" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10.6601 8.66138H5.33008" stroke="white" strokeWidth="1.33252" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10.6601 11.3264H5.33008" stroke="white" strokeWidth="1.33252" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="w-24 lg:w-28 h-5 relative">
                    <div className="left-0 top-[-0.73px] absolute justify-start text-slate-900 text-xs sm:text-sm font-normal font-['Inter_Tight'] leading-5">Knowledge Base</div>
                  </div>
                </div>
                <div className="w-16 h-6 relative bg-[#DCFCE7] rounded-full">
                  <div className="left-[12px] top-[3.26px] absolute justify-start text-green-600 text-xs font-medium font-['Inter_Tight'] leading-4">24 files</div>
                </div>
              </div>
              <div className="self-stretch h-auto min-h-16 px-3 sm:px-4 py-3 bg-gradient-to-br from-emerald-100 via-emerald-100 via-11% to-emerald-200 rounded-2xl outline outline-[1.26px] outline-offset-[-1.26px] outline-green-300 flex justify-start items-center gap-2 sm:gap-3">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                <path d="M19.9878 2.66504H7.99511C7.2883 2.66504 6.61044 2.94582 6.11065 3.44561C5.61086 3.9454 5.33008 4.62326 5.33008 5.33007V26.6503C5.33008 27.3571 5.61086 28.035 6.11065 28.5348C6.61044 29.0346 7.2883 29.3154 7.99511 29.3154H23.9853C24.6921 29.3154 25.37 29.0346 25.8698 28.5348C26.3696 28.035 26.6503 27.3571 26.6503 26.6503V9.32762L19.9878 2.66504Z" stroke="#31C48D" strokeWidth="2.66503" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18.6553 2.66504V7.9951C18.6553 8.70191 18.9361 9.37977 19.4358 9.87957C19.9356 10.3794 20.6135 10.6601 21.3203 10.6601H26.6504" stroke="#31C48D" strokeWidth="2.66503" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13.3252 11.9927H10.6602" stroke="#31C48D" strokeWidth="2.66503" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21.3203 17.3228H10.6602" stroke="#31C48D" strokeWidth="2.66503" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21.3203 22.6528H10.6602" stroke="#31C48D" strokeWidth="2.66503" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div className="flex-1 flex flex-col justify-center">
                  <div className="text-slate-900 text-xs font-medium font-['Inter_Tight'] leading-4">URL scraping & indexing</div>
                  <div className="text-slate-500 text-[10px] font-normal font-['Inter_Tight'] leading-4">22 of 24 files completed </div>
                </div>
                <div className="shrink-0 text-green-600 text-xs font-normal font-['Inter_Tight'] leading-4">92%</div>
              </div>
              <div className="self-stretch h-auto lg:h-60 relative grid grid-cols-1 sm:grid-cols-2 lg:block gap-4">
                {/* Product Guide Card */}
                <div className="w-full lg:w-60 h-20 lg:left-[-0.20px] lg:top-[-0.06px] lg:absolute bg-white rounded-2xl outline outline-[1.26px] outline-offset-[-1.26px] outline-slate-200 p-2 flex flex-col justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 px-2 bg-blue-100 rounded-[10px] flex justify-center items-center shrink-0">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_547_786)">
                      <path d="M9.99388 1.33252H3.99756C3.64415 1.33252 3.30522 1.47291 3.05532 1.7228C2.80543 1.9727 2.66504 2.31163 2.66504 2.66504V13.3252C2.66504 13.6786 2.80543 14.0175 3.05532 14.2674C3.30522 14.5173 3.64415 14.6577 3.99756 14.6577H11.9927C12.3461 14.6577 12.685 14.5173 12.9349 14.2674C13.1848 14.0175 13.3252 13.6786 13.3252 13.3252V4.66381L9.99388 1.33252Z" stroke="#64748B" strokeWidth="1.33252" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9.32764 1.33252V3.99755C9.32764 4.35096 9.46803 4.68989 9.71792 4.93978C9.96782 5.18968 10.3067 5.33007 10.6602 5.33007H13.3252" stroke="#64748B" strokeWidth="1.33252" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M6.66259 5.99634H5.33008" stroke="#64748B" strokeWidth="1.33252" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10.6601 8.66138H5.33008" stroke="#64748B" strokeWidth="1.33252" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10.6601 11.3264H5.33008" stroke="#64748B" strokeWidth="1.33252" strokeLinecap="round" strokeLinejoin="round"/>
                      </g>
                      <defs>
                      <clipPath id="clip0_547_786">
                      <rect width="15.9902" height="15.9902" fill="white"/>
                      </clipPath>
                      </defs>
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <div className="text-slate-900 text-xs font-medium font-['Inter_Tight'] leading-3">Product_Guide.pdf</div>
                      <div className="text-slate-500 text-[10px] font-normal font-['Inter_Tight'] leading-3">Documentation</div>
                    </div>
                  </div>
                  <div className="text-slate-400 text-[10px] font-normal font-['Inter_Tight'] leading-3">2.4 MB</div>
                </div>

                {/* FAQ Guide Card */}
                <div className="w-full lg:w-60 h-20 lg:left-[256.75px] lg:top-0 lg:absolute bg-white rounded-2xl outline outline-[1.26px] outline-offset-[-1.26px] outline-slate-200 p-2 flex flex-col justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 px-2 bg-indigo-100 rounded-[10px] flex justify-center items-center shrink-0">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_547_799)">
                      <path d="M9.99388 1.33252H3.99756C3.64415 1.33252 3.30522 1.47291 3.05532 1.7228C2.80543 1.9727 2.66504 2.31163 2.66504 2.66504V13.3252C2.66504 13.6786 2.80543 14.0175 3.05532 14.2674C3.30522 14.5173 3.64415 14.6577 3.99756 14.6577H11.9927C12.3461 14.6577 12.685 14.5173 12.9349 14.2674C13.1848 14.0175 13.3252 13.6786 13.3252 13.3252V4.66381L9.99388 1.33252Z" stroke="#64748B" strokeWidth="1.33252" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9.32764 1.33252V3.99755C9.32764 4.35096 9.46803 4.68989 9.71792 4.93978C9.96782 5.18968 10.3067 5.33007 10.6602 5.33007H13.3252" stroke="#64748B" strokeWidth="1.33252" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M6.66259 5.99634H5.33008" stroke="#64748B" strokeWidth="1.33252" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10.6601 8.66138H5.33008" stroke="#64748B" strokeWidth="1.33252" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10.6601 11.3264H5.33008" stroke="#64748B" strokeWidth="1.33252" strokeLinecap="round" strokeLinejoin="round"/>
                      </g>
                      <defs>
                      <clipPath id="clip0_547_799">
                      <rect width="15.9902" height="15.9902" fill="white"/>
                      </clipPath>
                      </defs>
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <div className="text-slate-900 text-xs font-medium font-['Inter_Tight'] leading-3">FAQ_Guide.pdf</div>
                      <div className="text-slate-500 text-[10px] font-normal font-['Inter_Tight'] leading-3">Help Center</div>
                    </div>
                  </div>
                  <div className="text-slate-400 text-[10px] font-normal font-['Inter_Tight'] leading-3">1.8 MB</div>
                </div>

                {/* API Reference Card */}
                <div className="w-full lg:w-60 h-20 lg:left-0 lg:top-[120px] lg:absolute bg-white rounded-2xl outline outline-[1.26px] outline-offset-[-1.26px] outline-slate-200 p-2 flex flex-col justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 px-2 bg-pink-100 rounded-[10px] flex justify-center items-center shrink-0">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_547_812)">
                      <path d="M9.99388 1.33252H3.99756C3.64415 1.33252 3.30522 1.47291 3.05532 1.7228C2.80543 1.9727 2.66504 2.31163 2.66504 2.66504V13.3252C2.66504 13.6786 2.80543 14.0175 3.05532 14.2674C3.30522 14.5173 3.64415 14.6577 3.99756 14.6577H11.9927C12.3461 14.6577 12.685 14.5173 12.9349 14.2674C13.1848 14.0175 13.3252 13.6786 13.3252 13.3252V4.66381L9.99388 1.33252Z" stroke="#64748B" strokeWidth="1.33252" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9.32764 1.33252V3.99755C9.32764 4.35096 9.46803 4.68989 9.71792 4.93978C9.96782 5.18968 10.3067 5.33007 10.6602 5.33007H13.3252" stroke="#64748B" strokeWidth="1.33252" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M6.66259 5.99634H5.33008" stroke="#64748B" strokeWidth="1.33252" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10.6601 8.66138H5.33008" stroke="#64748B" strokeWidth="1.33252" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10.6601 11.3264H5.33008" stroke="#64748B" strokeWidth="1.33252" strokeLinecap="round" strokeLinejoin="round"/>
                      </g>
                      <defs>
                      <clipPath id="clip0_547_812">
                      <rect width="15.9902" height="15.9902" fill="white"/>
                      </clipPath>
                      </defs>
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <div className="text-slate-900 text-xs font-medium font-['Inter_Tight'] leading-3">API_Reference.pdf</div>
                      <div className="text-slate-500 text-[10px] font-normal font-['Inter_Tight'] leading-3">Technical Docs</div>
                    </div>
                  </div>
                  <div className="text-slate-400 text-[10px] font-normal font-['Inter_Tight'] leading-3">3.2 MB</div>
                </div>

                {/* User Manual Card */}
                <div className="w-full lg:w-60 h-20 lg:left-[256.75px] lg:top-[120px] lg:absolute bg-white rounded-2xl outline outline-[1.26px] outline-offset-[-1.26px] outline-slate-200 p-2 flex flex-col justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 px-2 bg-amber-100 rounded-[10px] flex justify-center items-center shrink-0">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_547_825)">
                      <path d="M9.99388 1.33252H3.99756C3.64415 1.33252 3.30522 1.47291 3.05532 1.7228C2.80543 1.9727 2.66504 2.31163 2.66504 2.66504V13.3252C2.66504 13.6786 2.80543 14.0175 3.05532 14.2674C3.30522 14.5173 3.64415 14.6577 3.99756 14.6577H11.9927C12.3461 14.6577 12.685 14.5173 12.9349 14.2674C13.1848 14.0175 13.3252 13.6786 13.3252 13.3252V4.66381L9.99388 1.33252Z" stroke="#64748B" strokeWidth="1.33252" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9.32764 1.33252V3.99755C9.32764 4.35096 9.46803 4.68989 9.71792 4.93978C9.96782 5.18968 10.3067 5.33007 10.6602 5.33007H13.3252" stroke="#64748B" strokeWidth="1.33252" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M6.66259 5.99634H5.33008" stroke="#64748B" strokeWidth="1.33252" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10.6601 8.66138H5.33008" stroke="#64748B" strokeWidth="1.33252" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10.6601 11.3264H5.33008" stroke="#64748B" strokeWidth="1.33252" strokeLinecap="round" strokeLinejoin="round"/>
                      </g>
                      <defs>
                      <clipPath id="clip0_547_825">
                      <rect width="15.9902" height="15.9902" fill="white"/>
                      </clipPath>
                      </defs>
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <div className="text-slate-900 text-xs font-medium font-['Inter_Tight'] leading-3">User_Manual.docx</div>
                      <div className="text-slate-500 text-[10px] font-normal font-['Inter_Tight'] leading-3">Getting Started</div>
                    </div>
                  </div>
                  <div className="text-slate-400 text-[10px] font-normal font-['Inter_Tight'] leading-3">1.5 MB</div>
                </div>
              </div>
              <div className="self-stretch h-auto pt-4 border-t-[1.26px] border-slate-200 flex justify-between items-center mt-4">
                <div className="flex justify-start items-center gap-2">
                  <div className="shrink-0">
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 3.99261C0 1.78755 1.78755 0 3.99261 0C6.19766 0 7.98521 1.78755 7.98521 3.99261C7.98521 6.19766 6.19766 7.98521 3.99261 7.98521C1.78755 7.98521 0 6.19766 0 3.99261Z" fill="#31C48D"/>
                    </svg>
                  </div>
                  <div className="text-slate-500 text-xs font-normal font-['Inter_Tight'] leading-4">Processing complete</div>
                </div>
                <div className="text-emerald-400 text-xs font-medium font-['Inter_Tight'] leading-4 cursor-pointer hover:underline">View all</div>
              </div>
            </div>
          </div>
        </div>

        {/* Multi-Channel Deployment Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xs:gap-10 sm:gap-12 lg:gap-16 mb-12 xs:mb-14 sm:mb-16 lg:mb-20">
          {/* Left Section - Channel Icons */}
          <div className="bg-white rounded-[32px] shadow-[0px_25px_50px_-12px_rgba(0,188,125,0.10)] outline outline-[1.26px] outline-offset-[-1.26px] outline-slate-200 p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              {/* Web Chat */}
              <div className="bg-gradient-to-br from-slate-50 via-gray-50 via-33% to-white rounded-2xl outline outline-[1.26px] outline-offset-[-1.26px] outline-slate-200 p-4 lg:p-6 flex flex-col items-center gap-3">
                <div className="w-10 h-10 lg:w-12 lg:h-12 px-2 lg:px-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl lg:rounded-2xl inline-flex justify-center items-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.9959 14.997C20.9959 15.5273 20.7852 16.0359 20.4102 16.4109C20.0352 16.7859 19.5266 16.9966 18.9963 16.9966H6.99871L2.99951 20.9958V4.99899C2.99951 4.46866 3.21018 3.96006 3.58518 3.58506C3.96018 3.21006 4.46878 2.99939 4.99911 2.99939H18.9963C19.5266 2.99939 20.0352 3.21006 20.4102 3.58506C20.7852 3.96006 20.9959 4.46866 20.9959 4.99899V14.997Z" stroke="white" strokeWidth="1.9996" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-slate-900 text-xs sm:text-sm font-medium font-['Inter_Tight'] leading-5">Web Chat</span>
              </div>

              {/* Email */}
              <div className="bg-gradient-to-br from-slate-50 via-gray-50 via-33% to-white rounded-2xl outline outline-[1.26px] outline-offset-[-1.26px] outline-slate-200 p-4 lg:p-6 flex flex-col items-center gap-3">
                <div className="w-10 h-10 lg:w-12 lg:h-12 px-2 lg:px-3 bg-gradient-to-br from-red-500 to-red-600 rounded-xl lg:rounded-2xl inline-flex justify-center items-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.9959 3.99921H3.99911C2.89476 3.99921 1.99951 4.89446 1.99951 5.9988V17.9964C1.99951 19.1007 2.89476 19.996 3.99911 19.996H19.9959C21.1002 19.996 21.9955 19.1007 21.9955 17.9964V5.9988C21.9955 4.89446 21.1002 3.99921 19.9959 3.99921Z" stroke="white" strokeWidth="1.9996" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21.9955 6.9986L13.0273 12.6974C12.7186 12.8908 12.3617 12.9934 11.9975 12.9934C11.6333 12.9934 11.2764 12.8908 10.9677 12.6974L1.99951 6.9986" stroke="white" strokeWidth="1.9996" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-slate-900 text-xs sm:text-sm font-medium font-['Inter_Tight'] leading-5">Email</span>
              </div>

              {/* Slack */}
              <div className="bg-gradient-to-br from-slate-50 via-gray-50 via-33% to-white rounded-2xl outline outline-[1.26px] outline-offset-[-1.26px] outline-slate-200 p-4 lg:p-6 flex flex-col items-center gap-3">
                <div className="w-10 h-10 lg:w-12 lg:h-12 px-2 lg:px-3 bg-gradient-to-br from-green-500 to-green-600 rounded-xl lg:rounded-2xl inline-flex justify-center items-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.5358 14.997H16.9967C16.4663 14.997 15.9577 15.2077 15.5827 15.5827C15.2077 15.9576 14.9971 16.4663 14.9971 16.9966V21.5357" stroke="white" strokeWidth="1.9996" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6.99854 3.33936V4.99902C6.99854 5.79451 7.31454 6.55742 7.87704 7.11991C8.43953 7.68241 9.20244 7.99842 9.99793 7.99842C10.5283 7.99842 11.0369 8.20909 11.4119 8.58409C11.7869 8.95908 11.9975 9.46769 11.9975 9.99802C11.9975 11.0978 12.8973 11.9976 13.9971 11.9976C14.5275 11.9976 15.0361 11.7869 15.4111 11.4119C15.7861 11.0369 15.9967 10.5283 15.9967 9.99802C15.9967 8.89824 16.8965 7.99842 17.9963 7.99842H21.1657" stroke="white" strokeWidth="1.9996" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10.998 21.9456V17.9964C10.998 17.4661 10.7873 16.9575 10.4123 16.5825C10.0373 16.2075 9.52873 15.9968 8.99841 15.9968C8.46808 15.9968 7.95948 15.7861 7.58448 15.4111C7.20948 15.0361 6.99881 14.5275 6.99881 13.9972V12.9974C6.99881 12.4671 6.78814 11.9585 6.41314 11.5835C6.03814 11.2085 5.52954 10.9978 4.99921 10.9978H2.0498" stroke="white" strokeWidth="1.9996" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M11.9975 21.9955C17.5192 21.9955 21.9955 17.5193 21.9955 11.9976C21.9955 6.47582 17.5192 1.99957 11.9975 1.99957C6.47576 1.99957 1.99951 6.47582 1.99951 11.9976C1.99951 17.5193 6.47576 21.9955 11.9975 21.9955Z" stroke="white" strokeWidth="1.9996" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-slate-900 text-xs sm:text-sm font-medium font-['Inter_Tight'] leading-5">Slack</span>
              </div>

              {/* API */}
              <div className="bg-gradient-to-br from-slate-50 via-gray-50 via-33% to-white rounded-2xl outline outline-[1.26px] outline-offset-[-1.26px] outline-slate-200 p-4 lg:p-6 flex flex-col items-center gap-3">
                <div className="w-10 h-10 lg:w-12 lg:h-12 px-2 lg:px-3 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl lg:rounded-2xl inline-flex justify-center items-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.9966 17.9964L21.9954 11.9976L15.9966 5.99878" stroke="white" strokeWidth="1.9996" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7.9983 5.99878L1.99951 11.9976L7.9983 17.9964" stroke="white" strokeWidth="1.9996" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-slate-900 text-xs sm:text-sm font-medium font-['Inter_Tight'] leading-5">API</span>
              </div>
            </div>
          </div>

          {/* Right Section - Multi-Channel Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 px-3 bg-gradient-to-br from-emerald-500 via-green-500 via-8% to-green-600 rounded-2xl shadow-[0px_4px_6px_-4px_rgba(0,188,125,0.20)] shadow-[0px_10px_15px_-3px_rgba(0,188,125,0.20)] flex justify-center items-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.5358 14.9969H16.9967C16.4663 14.9969 15.9577 15.2076 15.5827 15.5826C15.2077 15.9576 14.9971 16.4662 14.9971 16.9965V21.5356" stroke="white" strokeWidth="1.9996" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6.99854 3.33936V4.99902C6.99854 5.79451 7.31454 6.55742 7.87704 7.11991C8.43953 7.68241 9.20244 7.99842 9.99793 7.99842C10.5283 7.99842 11.0369 8.20909 11.4119 8.58409C11.7869 8.95908 11.9975 9.46769 11.9975 9.99802C11.9975 11.0978 12.8973 11.9976 13.9971 11.9976C14.5275 11.9976 15.0361 11.7869 15.4111 11.4119C15.7861 11.0369 15.9967 10.5283 15.9967 9.99802C15.9967 8.89824 16.8965 7.99842 17.9963 7.99842H21.1657" stroke="white" strokeWidth="1.9996" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10.998 21.9456V17.9964C10.998 17.4661 10.7873 16.9575 10.4123 16.5825C10.0373 16.2075 9.52873 15.9968 8.99841 15.9968C8.46808 15.9968 7.95948 15.7861 7.58448 15.4111C7.20948 15.0361 6.99881 14.5275 6.99881 13.9972V12.9974C6.99881 12.4671 6.78814 11.9585 6.41314 11.5835C6.03814 11.2085 5.52954 10.9978 4.99921 10.9978H2.0498" stroke="white" strokeWidth="1.9996" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M11.9975 21.9956C17.5192 21.9956 21.9955 17.5194 21.9955 11.9976C21.9955 6.47589 17.5192 1.99963 11.9975 1.99963C6.47576 1.99963 1.99951 6.47589 1.99951 11.9976C1.99951 17.5194 6.47576 21.9956 11.9975 21.9956Z" stroke="white" strokeWidth="1.9996" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-slate-200 via-gray-300/95 via-7% to-black/0" />
            </div>
            
            <div className="space-y-4">
              <h2 className="text-slate-900 text-2xl sm:text-3xl lg:text-[44px] font-semibold font-['Inter_Tight'] leading-tight lg:leading-[52.80px]">
                Multi-Channel <br className="hidden lg:block" /> Deployment
              </h2>
              <p className="text-slate-500 text-sm sm:text-base lg:text-lg font-normal font-['Inter_Tight'] leading-relaxed lg:leading-8 max-w-lg">
                Deploy your AI agents everywhere your customers are. One agent, multiple channels, seamless experience across all touchpoints.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-slate-50 rounded-2xl outline outline-[1.26px] outline-offset-[-1.26px] outline-slate-200 p-2 sm:p-3 inline-flex justify-start items-center gap-2 sm:gap-3">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.4851 12.4893C17.4851 12.9309 17.3097 13.3545 16.9974 13.6668C16.6851 13.9791 16.2616 14.1545 15.8199 14.1545H5.82851L2.49805 17.485V4.1631C2.49805 3.72145 2.67349 3.29789 2.98578 2.9856C3.29807 2.67331 3.72163 2.49786 4.16328 2.49786H15.8199C16.2616 2.49786 16.6851 2.67331 16.9974 2.9856C17.3097 3.29789 17.4851 3.72145 17.4851 4.1631V12.4893Z" stroke="#7C3AED" strokeWidth="1.66523" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-slate-900 text-xs sm:text-sm font-medium font-['Inter_Tight'] leading-5">Web chat widget</span>
              </div>
              
              <div className="bg-slate-50 rounded-2xl outline outline-[1.26px] outline-offset-[-1.26px] outline-slate-200 p-2 sm:p-3 inline-flex justify-start items-center gap-2 sm:gap-3">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.3217 17.485V15.8197C13.3217 14.9364 12.9708 14.0893 12.3462 13.4647C11.7216 12.8401 10.8745 12.4892 9.9912 12.4892H4.99551C4.11221 12.4892 3.26509 12.8401 2.64051 13.4647C2.01593 14.0893 1.66504 14.9364 1.66504 15.8197V17.485" stroke="#7C3AED" strokeWidth="1.66523" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7.49355 9.15878C9.33292 9.15878 10.824 7.66768 10.824 5.82831C10.824 3.98895 9.33292 2.49785 7.49355 2.49785C5.65419 2.49785 4.16309 3.98895 4.16309 5.82831C4.16309 7.66768 5.65419 9.15878 7.49355 9.15878Z" stroke="#7C3AED" strokeWidth="1.66523" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M18.3177 17.485V15.8197C18.3171 15.0818 18.0715 14.3649 17.6194 13.7817C17.1673 13.1985 16.5343 12.782 15.8198 12.5975" stroke="#7C3AED" strokeWidth="1.66523" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M13.3218 2.60609C14.0382 2.78952 14.6731 3.20616 15.1266 3.79033C15.58 4.37451 15.8262 5.09298 15.8262 5.83248C15.8262 6.57199 15.58 7.29046 15.1266 7.87463C14.6731 8.4588 14.0382 8.87545 13.3218 9.05887" stroke="#7C3AED" strokeWidth="1.66523" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-slate-900 text-xs sm:text-sm font-medium font-['Inter_Tight'] leading-5">Slack & Teams integration</span>
              </div>

              <div className="bg-slate-50 rounded-2xl outline outline-[1.26px] outline-offset-[-1.26px] outline-slate-200 p-2 sm:p-3 inline-flex justify-start items-center gap-2 sm:gap-3">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.6521 3.33044H3.33027C2.41059 3.33044 1.66504 4.07599 1.66504 4.99568V14.9871C1.66504 15.9068 2.41059 16.6523 3.33027 16.6523H16.6521C17.5718 16.6523 18.3174 15.9068 18.3174 14.9871V4.99568C18.3174 4.07599 17.5718 3.33044 16.6521 3.33044Z" stroke="#7C3AED" strokeWidth="1.66523" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M18.3174 5.82831L10.8488 10.5742C10.5917 10.7353 10.2945 10.8207 9.99121 10.8207C9.68787 10.8207 9.39066 10.7353 9.13361 10.5742L1.66504 5.82831" stroke="#7C3AED" strokeWidth="1.66523" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-slate-900 text-xs sm:text-sm font-medium font-['Inter_Tight'] leading-5">Email automation</span>
              </div>

              <div className="bg-slate-50 rounded-2xl outline outline-[1.26px] outline-offset-[-1.26px] outline-slate-200 p-2 sm:p-3 inline-flex justify-start items-center gap-2 sm:gap-3">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.3218 14.9871L18.3175 9.99143L13.3218 4.99573" stroke="#7C3AED" strokeWidth="1.66523" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6.66074 4.99573L1.66504 9.99143L6.66074 14.9871" stroke="#7C3AED" strokeWidth="1.66523" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-slate-900 text-xs sm:text-sm font-medium font-['Inter_Tight'] leading-5">REST API access</span>
              </div>
            </div>
          </div>
        </div>

        {/* Real-Time Analytics Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 mb-20">
          {/* Left Section - Analytics Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 px-3 bg-gradient-to-br from-emerald-500 via-green-500 via-8% to-green-600 rounded-2xl shadow-[0px_4px_6px_-4px_rgba(0,188,125,0.20)] shadow-[0px_10px_15px_-3px_rgba(0,188,125,0.20)] flex justify-center items-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.99951 2.99939V18.9962C2.99951 19.5265 3.21018 20.0351 3.58518 20.4101C3.96018 20.7851 4.46878 20.9958 4.99911 20.9958H20.9959" stroke="white" strokeWidth="1.9996" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17.9966 16.9966V8.9982" stroke="white" strokeWidth="1.9996" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12.9976 16.9966V4.99899" stroke="white" strokeWidth="1.9996" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7.99854 16.9972V13.9972" stroke="white" strokeWidth="1.9996" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-slate-200 via-gray-300/95 via-7% to-black/0" />
            </div>
            
            <div className="space-y-4">
              <h2 className="text-slate-900 text-2xl sm:text-3xl lg:text-[44px] font-semibold font-['Inter_Tight'] leading-tight lg:leading-[52.80px]">
                Real-Time <br className="hidden lg:block" /> Analytics
              </h2>
              <p className="text-slate-500 text-sm sm:text-base lg:text-lg font-normal font-['Inter_Tight'] leading-relaxed lg:leading-8 max-w-lg">
                Track performance, measure satisfaction, and gain insights into every conversation. Make data-driven decisions to improve your AI agents.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-slate-50 rounded-2xl outline outline-[1.26px] outline-offset-[-1.26px] outline-slate-200 p-2 sm:p-3 inline-flex justify-start items-center gap-2 sm:gap-3">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.49805 2.49785V15.8197C2.49805 16.2614 2.67349 16.6849 2.98578 16.9972C3.29807 17.3095 3.72163 17.4849 4.16328 17.4849H17.4851" stroke="#31C48D" strokeWidth="1.66523" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14.9873 14.1545V7.49355" stroke="#31C48D" strokeWidth="1.66523" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10.8242 14.1545V4.16309" stroke="#31C48D" strokeWidth="1.66523" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6.66113 14.1545V11.6566" stroke="#31C48D" strokeWidth="1.66523" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-slate-900 text-xs sm:text-sm font-medium font-['Inter_Tight'] leading-5">Conversation analytics</span>
              </div>
              
              <div className="bg-slate-50 rounded-2xl outline outline-[1.26px] outline-offset-[-1.26px] outline-slate-200 p-2 sm:p-3 inline-flex justify-start items-center gap-2 sm:gap-3">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.3174 5.82831L11.2401 12.9055L7.07705 8.74247L1.66504 14.1545" stroke="#31C48D" strokeWidth="1.66523" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M13.3218 5.82831H18.3175V10.824" stroke="#31C48D" strokeWidth="1.66523" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-slate-900 text-xs sm:text-sm font-medium font-['Inter_Tight'] leading-5">Response accuracy metrics</span>
              </div>

              <div className="bg-slate-50 rounded-2xl outline outline-[1.26px] outline-offset-[-1.26px] outline-slate-200 p-2 sm:p-3 inline-flex justify-start items-center gap-2 sm:gap-3">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.3217 17.4849V15.8197C13.3217 14.9364 12.9708 14.0893 12.3462 13.4647C11.7216 12.8401 10.8745 12.4892 9.9912 12.4892H4.99551C4.11221 12.4892 3.26509 12.8401 2.64051 13.4647C2.01593 14.0893 1.66504 14.9364 1.66504 15.8197V17.4849" stroke="#31C48D" strokeWidth="1.66523" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7.49355 9.15878C9.33292 9.15878 10.824 7.66768 10.824 5.82831C10.824 3.98895 9.33292 2.49785 7.49355 2.49785C5.65419 2.49785 4.16309 3.98895 4.16309 5.82831C4.16309 7.66768 5.65419 9.15878 7.49355 9.15878Z" stroke="#31C48D" strokeWidth="1.66523" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M18.3177 17.4849V15.8197C18.3171 15.0818 18.0715 14.3649 17.6194 13.7817C17.1673 13.1985 16.5343 12.782 15.8198 12.5975" stroke="#31C48D" strokeWidth="1.66523" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M13.3218 2.60609C14.0382 2.78952 14.6731 3.20616 15.1266 3.79033C15.58 4.37451 15.8262 5.09298 15.8262 5.83248C15.8262 6.57199 15.58 7.29046 15.1266 7.87463C14.6731 8.4588 14.0382 8.87545 13.3218 9.05887" stroke="#31C48D" strokeWidth="1.66523" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-slate-900 text-xs sm:text-sm font-medium font-['Inter_Tight'] leading-5">User satisfaction scores</span>
              </div>

              <div className="bg-slate-50 rounded-2xl outline outline-[1.26px] outline-offset-[-1.26px] outline-slate-200 p-2 sm:p-3 inline-flex justify-start items-center gap-2 sm:gap-3">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.99121 18.3176C14.5896 18.3176 18.3174 14.5898 18.3174 9.9914C18.3174 5.39299 14.5896 1.66524 9.99121 1.66524C5.39279 1.66524 1.66504 5.39299 1.66504 9.9914C1.66504 14.5898 5.39279 18.3176 9.99121 18.3176Z" stroke="#31C48D" strokeWidth="1.66523" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7.49365 9.99141L9.15889 11.6566L12.4894 8.32617" stroke="#31C48D" strokeWidth="1.66523" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-slate-900 text-xs sm:text-sm font-medium font-['Inter_Tight'] leading-5">Custom dashboards</span>
              </div>
            </div>
          </div>

          {/* Right Section - Performance Dashboard */}
          <div className="bg-white rounded-[32px] shadow-[0px_25px_50px_-12px_rgba(0,188,125,0.10)] outline outline-[1.26px] outline-offset-[-1.26px] outline-slate-200 p-8">
            <div className="space-y-6">
              {/* Header */}
              <div className="flex justify-between items-center">
                <span className="text-slate-900 text-sm font-normal font-['Inter_Tight'] leading-5">Performance Dashboard</span>
                <div className="px-3 py-1 bg-emerald-400/5 rounded-full flex items-center gap-2">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_547_967)">
                      <path d="M10.998 3.4993L6.74884 7.74844L4.24935 5.24895L1 8.49829" stroke="#31C48D" strokeWidth="0.999799" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M7.99854 3.4993H10.9979V6.49869" stroke="#31C48D" strokeWidth="0.999799" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_547_967">
                        <rect width="11.9976" height="11.9976" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="text-emerald-400 text-xs font-medium font-['Inter_Tight'] leading-4">+24%</span>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-emerald-400/5 rounded-2xl outline outline-[1.26px] outline-offset-[-1.26px] outline-emerald-100 p-3">
                  <div className="text-slate-900 text-xl font-normal font-['Inter_Tight'] leading-8 mb-1">95%</div>
                  <div className="text-slate-500 text-xs font-normal font-['Inter_Tight'] leading-4 mb-2">Accuracy</div>
                  <div className="h-1 bg-emerald-400 rounded-full"></div>
                </div>
                <div className="bg-emerald-400/5 rounded-2xl outline outline-[1.26px] outline-offset-[-1.26px] outline-emerald-100 p-3">
                  <div className="text-slate-900 text-xl font-normal font-['Inter_Tight'] leading-8 mb-1">88%</div>
                  <div className="text-slate-500 text-xs font-normal font-['Inter_Tight'] leading-4 mb-2">Resolved</div>
                  <div className="h-1 bg-emerald-400 rounded-full"></div>
                </div>
                <div className="bg-emerald-400/5 rounded-2xl outline outline-[1.26px] outline-offset-[-1.26px] outline-emerald-100 p-3">
                  <div className="text-slate-900 text-xl font-normal font-['Inter_Tight'] leading-8 mb-1">4.8</div>
                  <div className="text-slate-500 text-xs font-normal font-['Inter_Tight'] leading-4 mb-2">Satisfaction</div>
                  <div className="h-1 bg-emerald-400 rounded-full"></div>
                </div>
              </div>

              {/* Monthly Trends */}
              <div className="space-y-4">
                <div className="text-slate-500 text-xs font-medium font-['Inter_Tight'] leading-4">Monthly Trends</div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-slate-400 text-xs font-normal font-['Inter_Tight'] leading-4 w-8">Jan</span>
                    <div className="flex-1 h-6 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-6 pr-2 bg-emerald-400 rounded-full flex justify-end items-center" style={{width: '75%'}}>
                        <span className="text-white text-[10px] font-medium font-['Inter_Tight'] leading-4">75%</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <span className="text-slate-400 text-xs font-normal font-['Inter_Tight'] leading-4 w-8">Feb</span>
                    <div className="flex-1 h-6 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-6 pr-2 bg-emerald-400 rounded-full flex justify-end items-center" style={{width: '88%'}}>
                        <span className="text-white text-[10px] font-medium font-['Inter_Tight'] leading-4">88%</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <span className="text-slate-400 text-xs font-normal font-['Inter_Tight'] leading-4 w-8">Mar</span>
                    <div className="flex-1 h-6 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-6 pr-2 bg-emerald-400 rounded-full flex justify-end items-center" style={{width: '65%'}}>
                        <span className="text-white text-[10px] font-medium font-['Inter_Tight'] leading-4">65%</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <span className="text-slate-400 text-xs font-normal font-['Inter_Tight'] leading-4 w-8">Apr</span>
                    <div className="flex-1 h-6 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-6 pr-2 bg-emerald-400 rounded-full flex justify-end items-center" style={{width: '95%'}}>
                        <span className="text-white text-[10px] font-medium font-['Inter_Tight'] leading-4">95%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="h-8 border-t-[1.26px] border-slate-200 pt-2 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 3.99261C0 1.78755 1.78755 0 3.99261 0C6.19766 0 7.98521 1.78755 7.98521 3.99261C7.98521 6.19766 6.19766 7.98521 3.99261 7.98521C1.78755 7.98521 0 6.19766 0 3.99261Z" fill="#31C48D"/>
                  </svg>
                  <span className="text-slate-500 text-xs font-normal font-['Inter_Tight'] leading-4">2.4k conversations</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 3.99261C0 1.78755 1.78755 0 3.99261 0C6.19766 0 7.98521 1.78755 7.98521 3.99261C7.98521 6.19766 6.19766 7.98521 3.99261 7.98521C1.78755 7.98521 0 6.19766 0 3.99261Z" fill="#31C48D"/>
                  </svg>
                  <span className="text-slate-500 text-xs font-normal font-['Inter_Tight'] leading-4">Live tracking</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Secure & Compliance Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xs:gap-10 sm:gap-12 lg:gap-16 xl:gap-20 mb-12 xs:mb-14 sm:mb-16 lg:mb-20">
          {/* Left Section - Data Authorization Interface */}
          <div className="w-full lg:w-[568px] h-auto min-h-[400px] lg:h-96 relative flex justify-center items-center">
            <div className="w-full h-full absolute rounded-[32px] blur-2xl bg-gradient-to-br from-slate-50 to-gray-100" />
            <div className="w-full h-full p-6 lg:p-8 relative bg-white rounded-[32px] shadow-[0px_25px_50px_-12px_rgba(0,188,125,0.10)] outline outline-[1.26px] outline-offset-[-1.26px] outline-slate-200 flex flex-col justify-center items-center">
              <div className="w-full max-w-sm lg:w-96 h-auto lg:h-72 relative flex flex-col items-center gap-8 lg:block">
                {/* Service Icons Row - Responsive on mobile, absolute on desktop */}
                <div className="grid grid-cols-3 xs:grid-cols-5 lg:block lg:static gap-3 xs:gap-4 justify-items-center">
                  {/* Slack Icon */}
                  <div className="lg:absolute lg:left-[-1.09px] lg:top-[-1.05px] bg-white rounded-2xl sm:rounded-3xl shadow-[0px_0px_3.747990369796753px_0px_rgba(0,0,0,0.08)] outline outline-1 outline-offset-[-0.94px] outline-slate-100 inline-flex justify-start items-start gap-2 p-2.5 sm:p-3.5">
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-[19px] sm:h-[19px]">
                    <g clipPath="url(#clip0_547_3278)">
                    <path d="M3.98764 11.8096C3.98764 12.882 3.11304 13.7579 2.04048 13.7579C0.967918 13.7579 0.0922852 12.882 0.0922852 11.8096C0.0922852 10.7371 0.96821 9.86121 2.04062 9.86121H3.98779L3.98764 11.8096ZM4.9692 11.8096C4.9692 10.7371 5.84513 9.86121 6.91754 9.86121C7.98995 9.86121 8.86588 10.737 8.86588 11.8096V16.6866C8.86588 17.759 7.9901 18.635 6.91754 18.635C5.84513 18.635 4.9692 17.759 4.9692 16.6866V11.8096Z" fill="#DE1C59"/>
                    <path d="M6.91754 3.98753C5.84513 3.98753 4.9692 3.11292 4.9692 2.04036C4.9692 0.967803 5.84513 0.0921707 6.91754 0.0921707C7.98995 0.0921707 8.86588 0.968096 8.86588 2.04051V3.98768L6.91754 3.98753ZM6.91754 4.96909C7.98995 4.96909 8.86588 5.84501 8.86588 6.91742C8.86588 7.98984 7.9901 8.86576 6.91754 8.86576H2.04048C0.968064 8.86576 0.0922852 7.98998 0.0922852 6.91742C0.0922852 5.84501 0.96821 4.96909 2.04062 4.96909H6.91754Z" fill="#35C5F0"/>
                    <path d="M14.7396 6.91742C14.7396 5.84501 15.6142 4.96909 16.6867 4.96909C17.7593 4.96909 18.6351 5.84501 18.6351 6.91742C18.6351 7.98984 17.7591 8.86576 16.6867 8.86576H14.7396V6.91742ZM13.758 6.91742C13.758 7.98984 12.8821 8.86576 11.8097 8.86576C10.7373 8.86576 9.86133 7.98998 9.86133 6.91742V2.04036C9.86133 0.96795 10.7371 0.0921707 11.8097 0.0921707C12.8821 0.0921707 13.758 0.968096 13.758 2.04051V6.91742Z" fill="#2EB57D"/>
                    <path d="M11.8097 14.7394C12.8821 14.7394 13.758 15.6141 13.758 16.6866C13.758 17.7592 12.8821 18.635 11.8097 18.635C10.7373 18.635 9.86133 17.759 9.86133 16.6866V14.7394H11.8097ZM11.8097 13.7579C10.7373 13.7579 9.86133 12.882 9.86133 11.8096C9.86133 10.7371 10.7371 9.86121 11.8097 9.86121H16.6867C17.7591 9.86121 18.6351 10.737 18.6351 11.8096C18.6351 12.882 17.7591 13.7579 16.6867 13.7579H11.8097Z" fill="#EBB02E"/>
                    </g>
                    </svg>
                  </div>

                  {/* Salesforce Icon */}
                  <div className="lg:absolute lg:left-[68.39px] lg:top-[-5.39px] bg-white rounded-2xl sm:rounded-3xl shadow-[0px_0px_3.747990369796753px_0px_rgba(0,0,0,0.08)] outline outline-1 outline-offset-[-0.94px] outline-slate-100 inline-flex justify-start items-start gap-2 p-2.5 sm:p-3.5">
                    <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-[29px] sm:h-[29px]">
                    <path d="M16.8968 6.81007C16.2629 6.81007 15.7099 6.99997 15.1672 7.1815C14.5333 6.08582 13.3464 5.36065 12.0692 5.36065C11.0731 5.36065 10.1673 5.814 9.52407 6.44795C8.79889 5.54217 7.70322 4.89892 6.43532 4.89892C4.32496 4.89892 2.51342 6.62854 2.51342 8.73984C2.51342 9.27418 2.70332 9.81689 2.88485 10.3605C2.36302 10.6466 1.92731 11.0672 1.62298 11.5786C1.31866 12.09 1.15683 12.6736 1.1543 13.2687C1.1543 15.0802 2.61303 16.6386 4.43388 16.6386C4.7057 16.6386 4.9766 16.6386 5.15812 16.5473C5.52117 17.9148 6.88774 18.9212 8.528 18.9212C10.0677 18.9212 11.3449 18.0051 11.7973 16.7279C12.2591 16.9188 12.7124 17.1003 13.1658 17.1003C14.3517 17.1003 15.439 16.4394 15.9818 15.46C16.2629 15.5327 16.5524 15.5327 16.8065 15.5327C19.171 15.5327 21.0813 13.6392 21.0813 11.1853C21.1725 8.73984 19.2697 6.81007 16.8968 6.81007Z" fill="#039BE5"/>
                    </svg>
                  </div>

                  {/* Teams Icon */}
                  <div className="lg:absolute lg:left-[146.59px] lg:top-[-1.28px] bg-white rounded-2xl sm:rounded-3xl shadow-[0px_0px_3.747990369796753px_0px_rgba(0,0,0,0.08)] outline outline-1 outline-offset-[-0.94px] outline-slate-100 inline-flex justify-start items-start gap-2 p-2 sm:p-2.5">
                    <svg width="18" height="17" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-[18px] sm:h-[17px]">
                    <path d="M13.855 8.15323H17.9512C18.3382 8.15323 18.6519 8.45196 18.6519 8.8204V12.3728C18.6519 13.7269 17.4989 14.8248 16.0766 14.8248H16.0644C14.6421 14.825 13.489 13.7273 13.4888 12.3731V8.50197C13.4887 8.45617 13.4982 8.41082 13.5166 8.3685C13.535 8.32618 13.562 8.28773 13.596 8.25534C13.63 8.22295 13.6704 8.19727 13.7148 8.17974C13.7593 8.16222 13.8069 8.15321 13.855 8.15323Z" fill="#5059C9"/>
                    <path d="M16.623 7.45112C17.5395 7.45112 18.2826 6.74368 18.2826 5.87101C18.2826 4.99834 17.5395 4.2909 16.623 4.2909C15.7064 4.2909 14.9634 4.99834 14.9634 5.87101C14.9634 6.74368 15.7064 7.45112 16.623 7.45112Z" fill="#5059C9"/>
                    <path d="M11.4602 7.45112C12.7841 7.45112 13.8573 6.42926 13.8573 5.16874C13.8573 3.90822 12.7841 2.88637 11.4602 2.88637C10.1362 2.88637 9.06299 3.90822 9.06299 5.16874C9.06299 6.42926 10.1362 7.45112 11.4602 7.45112Z" fill="#7B83EB"/>
                    <path d="M14.6564 8.15323H7.89494C7.51254 8.16225 7.21006 8.4644 7.21892 8.82848V12.8802C7.16552 15.065 8.98097 16.8781 11.2756 16.9316C13.5703 16.8781 15.3857 15.065 15.3324 12.8802V8.82848C15.3412 8.4644 15.0388 8.16225 14.6564 8.15323Z" fill="#7B83EB"/>
                    <path d="M3.46947 6.0465H10.2308C10.6043 6.0465 10.9069 6.33467 10.9069 6.69014V13.1278C10.9069 13.4832 10.6043 13.7714 10.2309 13.7714H3.46947C3.09612 13.7714 2.79346 13.4832 2.79346 13.1278V6.6902C2.79346 6.33461 3.09612 6.0465 3.46947 6.0465Z" fill="url(#paint0_linear_547_3255)"/>
                    <path d="M8.6289 8.49683H7.27724V12.0011H6.41614V8.49683H5.0708V7.81704H8.6289V8.49683Z" fill="white"/>
                    <defs>
                    <linearGradient id="paint0_linear_547_3255" x1="143.741" y1="-44.2431" x2="635.189" y2="849.725" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#5A62C3"/>
                    <stop offset="0.5" stop-color="#4D55BD"/>
                    <stop offset="1" stop-color="#3940AB"/>
                    </linearGradient>
                    </defs>
                    </svg>
                  </div>

                  {/* Google Icon */}
                  <div className="lg:absolute lg:left-[222.70px] lg:top-[-1.04px] bg-white rounded-2xl sm:rounded-3xl shadow-[0px_0px_3.747990369796753px_0px_rgba(0,0,0,0.08)] outline outline-1 outline-offset-[-0.94px] outline-slate-100 inline-flex justify-start items-start gap-2 p-2 sm:p-2.5">
                    <svg width="16" height="16" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-4 sm:h-4">
                    <path d="M12.3335 6.77326H12.392L12.3627 6.74325L14.411 4.64254V4.59752C12.6846 3.03699 10.2998 2.49681 8.09063 3.17204C5.88144 3.17204 4.1843 5.64788 3.56982 7.92866C3.59909 7.91365 3.64298 7.89864 3.68687 7.89864C4.44765 7.38847 5.35474 7.08837 6.30572 7.08837C6.62759 7.08837 6.93483 7.11838 7.24207 7.1784C7.2567 7.1634 7.27133 7.1634 7.28596 7.1634C8.6027 5.67789 10.8265 5.49783 12.3481 6.77326H12.3335Z" fill="#EA4535"/>
                    <path d="M16.3558 7.89848C16.0193 6.62304 15.317 5.46765 14.3368 4.58235L12.2446 6.71308C13.1225 7.44832 13.6345 8.5587 13.6053 9.71409V10.0892C16.0778 10.0892 16.0778 13.8705 13.6053 13.8705H9.88914V16.8715H9.87451L9.88914 16.9015H13.6053C15.7413 16.9165 17.6287 15.5061 18.2578 13.4354C18.8869 11.3647 18.1115 9.11389 16.3558 7.89848Z" fill="#557EBF"/>
                    <path d="M6.2463 16.9166H10.0941V13.8856H6.2463C5.96832 13.8856 5.70497 13.8255 5.45625 13.7205L3.23242 15.9113V15.9413C4.11025 16.5865 5.16364 16.9316 6.26093 16.9316L6.2463 16.9166Z" fill="#36A852"/>
                    <path d="M6.42288 7.01336C4.24294 7.02836 2.31172 8.40883 1.60946 10.4345C0.907198 12.4752 1.60946 14.711 3.33585 16.0314L5.6182 13.7957C4.35999 13.2405 4.06738 11.6199 5.03299 10.6746C5.9986 9.71428 7.63721 10.0144 8.20779 11.2448L10.4901 9.00904C9.52454 7.76361 8.0176 7.02836 6.42288 7.04337V7.01336Z" fill="#F9BC15"/>
                    </svg>
                  </div>

                  {/* Shield Icon */}
                  <div className="lg:absolute lg:left-[295.83px] lg:top-[-3.38px] bg-white rounded-2xl sm:rounded-3xl shadow-[0px_0px_3.747990369796753px_0px_rgba(0,0,0,0.08)] outline outline-1 outline-offset-[-0.94px] outline-slate-100 inline-flex flex-col justify-start items-start gap-2 p-2 sm:p-2.5">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-5 sm:h-5">
                    <path d="M11.3806 2.43919C11.4766 2.37528 11.5894 2.34118 11.7048 2.34118C11.8201 2.34118 11.9329 2.37528 12.029 2.43919C14.2386 3.9288 16.7574 4.89766 19.3957 5.27282C19.5351 5.29282 19.6626 5.36241 19.7549 5.46883C19.8471 5.57525 19.8978 5.71136 19.8978 5.85219V11.1191C19.8978 15.6733 17.1976 18.9962 11.9155 21.0292C11.7799 21.0816 11.6297 21.0816 11.4941 21.0292C6.21309 18.9962 3.51172 15.6721 3.51172 11.1191V5.85219C3.51174 5.71119 3.56267 5.57493 3.65514 5.46849C3.7476 5.36204 3.87539 5.29256 4.01501 5.27282C6.6529 4.89749 9.17128 3.92864 11.3806 2.43919Z" fill="url(#paint0_radial_547_3251)"/>
                    <defs>
                    <radialGradient id="paint0_radial_547_3251" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-2.92568 -8.19305) rotate(55.2568) scale(44.1559 38.6363)">
                    <stop offset="0.338" stop-color="#0FAFFF"/>
                    <stop offset="0.529" stop-color="#367AF2"/>
                    <stop offset="0.682" stop-color="#5750E2"/>
                    <stop offset="0.861" stop-color="#CC23D1"/>
                    </radialGradient>
                    </defs>
                    </svg>
                  </div>
                </div>

                {/* Connection Lines - Desktop only */}
                <div className="hidden lg:block">
                  <div className="absolute left-[171.87px] top-[51.12px]">
                    <svg width="40" height="63" viewBox="0 0 40 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M38.9589 62.7731V45.3208C38.9589 39.1109 33.9248 34.0768 27.715 34.0768H11.7122C5.50235 34.0768 0.468262 29.0427 0.468262 22.8328V0" stroke="#CBD5E1" strokeWidth="0.936998"/>
                    </svg>
                  </div>
                  <div className="absolute left-[210.36px] top-[51.12px]">
                    <svg width="38" height="63" viewBox="0 0 38 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.468543 62.7731V45.3208C0.468543 39.1109 5.50264 34.0768 11.7125 34.0768H25.925C32.1348 34.0768 37.1689 29.0427 37.1689 22.8328V0" stroke="#CBD5E1" strokeWidth="0.936998"/>
                    </svg>
                  </div>
                  <div className="absolute left-[97.57px] top-[51.12px]">
                    <svg width="76" height="35" viewBox="0 0 76 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.468262 0V22.8328C0.468262 29.0427 5.50236 34.0768 11.7122 34.0768H63.5202C69.7301 34.0768 74.7642 29.0427 74.7642 22.8328V0" stroke="#CBD5E1" strokeWidth="0.936998"/>
                    </svg>
                  </div>
                  <div className="absolute left-[247.06px] top-[51.12px]">
                    <svg width="77" height="35" viewBox="0 0 77 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.468262 0V22.8328C0.468262 29.0427 5.50237 34.0768 11.7122 34.0768H40.7492H64.4154C70.6252 34.0768 75.6593 29.0427 75.6593 22.8328V0" stroke="#CBD5E1" strokeWidth="0.936998"/>
                    </svg>
                  </div>
                  <div className="absolute left-[23.27px] top-[51.12px]">
                    <svg width="76" height="35" viewBox="0 0 76 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.468262 0V22.8328C0.468262 29.0427 5.50237 34.0768 11.7122 34.0768H40.7492H63.5202C69.7301 34.0768 74.7642 29.0427 74.7642 22.8328V0" stroke="#CBD5E1" strokeWidth="0.936998"/>
                    </svg>
                  </div>
                  {/* Connection Points */}
                  <div className="absolute left-[244.37px] top-[48.42px]">
                    <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.90527 2.69043C4.90519 3.91794 3.91124 4.91211 2.68652 4.91211C1.46199 4.91189 0.468833 3.9178 0.46875 2.69043C0.46875 1.46299 1.46194 0.468973 2.68652 0.46875C3.91129 0.46875 4.90527 1.46285 4.90527 2.69043Z" fill="white" stroke="#CBD5E1" strokeWidth="0.936998"/>
                    </svg>
                  </div>
                  <div className="absolute left-[319.56px] top-[48.42px]">
                    <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.90527 2.69043C4.90519 3.91794 3.91124 4.91211 2.68652 4.91211C1.46199 4.91189 0.468833 3.9178 0.46875 2.69043C0.46875 1.46299 1.46194 0.468973 2.68652 0.46875C3.91129 0.46875 4.90527 1.46285 4.90527 2.69043Z" fill="white" stroke="#CBD5E1" strokeWidth="0.936998"/>
                    </svg>
                  </div>
                  <div className="absolute left-[169.18px] top-[48.42px]">
                    <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.90527 2.69043C4.90519 3.91794 3.91124 4.91211 2.68652 4.91211C1.46199 4.91189 0.468833 3.9178 0.46875 2.69043C0.46875 1.46299 1.46194 0.468973 2.68652 0.46875C3.91129 0.46875 4.90527 1.46285 4.90527 2.69043Z" fill="white" stroke="#CBD5E1" strokeWidth="0.936998"/>
                    </svg>
                  </div>
                  <div className="absolute left-[94.88px] top-[48.42px]">
                    <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.90527 2.69043C4.90519 3.91794 3.91124 4.91211 2.68652 4.91211C1.46199 4.91189 0.468833 3.9178 0.46875 2.69043C0.46875 1.46299 1.46194 0.468973 2.68652 0.46875C3.91129 0.46875 4.90527 1.46285 4.90527 2.69043Z" fill="white" stroke="#CBD5E1" strokeWidth="0.936998"/>
                    </svg>
                  </div>
                  <div className="absolute left-[20.59px] top-[48.42px]">
                    <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.90527 2.69043C4.90519 3.91794 3.91124 4.91211 2.68652 4.91211C1.46199 4.91189 0.468833 3.9178 0.46875 2.69043C0.46875 1.46299 1.46194 0.468973 2.68652 0.46875C3.91129 0.46875 4.90527 1.46285 4.90527 2.69043Z" fill="white" stroke="#CBD5E1" strokeWidth="0.936998"/>
                    </svg>
                  </div>
                  <div className="absolute left-[207.67px] top-[111.08px]">
                    <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.90527 2.6875C4.90527 3.91311 3.91174 4.90625 2.68652 4.90625C1.46149 4.90603 0.46875 3.91297 0.46875 2.6875C0.468765 1.46204 1.4615 0.468973 2.68652 0.46875C3.91173 0.46875 4.90526 1.4619 4.90527 2.6875Z" fill="white" stroke="#CBD5E1" strokeWidth="0.936998"/>
                    </svg>
                  </div>
                </div>

                {/* Authorization Dialog */}
                <div className="relative w-full max-w-[260px] xs:max-w-[300px] sm:max-w-xs lg:max-w-none flex justify-center lg:block lg:absolute lg:left-[86.67px] lg:top-[117.88px] bg-white rounded-xl outline outline-1 outline-offset-[-0.94px] outline-slate-100 inline-flex flex-col justify-center items-center gap-2.5 sm:gap-4 lg:gap-5 p-3.5 sm:p-5 lg:p-6 shadow-xl lg:shadow-none">
                  <div className="self-stretch flex flex-col justify-start items-center gap-2 sm:gap-3">
                    <div className="inline-flex justify-center items-center gap-2 sm:gap-3">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 relative bg-emerald-950 rounded-lg overflow-hidden flex justify-center items-center p-1.5 shrink-0">
                        <img src="/src/assets/images/Navigation.png" alt="Navigation" className="w-full h-full object-contain" />
                      </div>
                      <div className="text-slate-900 text-xs sm:text-base font-semibold font-['Inter_Tight'] leading-tight sm:leading-5 tracking-tight">Data Authorization</div>
                    </div>
                    <div className="w-full text-center text-slate-500 text-[10px] sm:text-sm font-normal font-['Inter_Tight'] leading-tight sm:leading-relaxed tracking-normal px-1 sm:px-2">Authorize AI Agent with Role-Based Access</div>
                  </div>
                  <div className="self-stretch inline-flex justify-center sm:justify-end items-center gap-2 sm:gap-3">
                    <div className="flex-1 sm:flex-none sm:w-24 px-2.5 py-1.5 sm:py-2 rounded-lg outline outline-1 outline-offset-[-0.94px] outline-slate-300 flex justify-center items-center cursor-pointer hover:bg-slate-50 transition-colors">
                      <div className="text-slate-900 text-[10px] sm:text-sm font-semibold font-['Inter_Tight']">Deny</div>
                    </div>
                    <div className="flex-1 sm:flex-none sm:w-24 px-2.5 py-1.5 sm:py-2 bg-emerald-950 rounded-lg flex justify-center items-center cursor-pointer hover:bg-emerald-900 transition-colors">
                      <div className="text-white text-[10px] sm:text-sm font-semibold font-['Inter_Tight']">Authorize</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Secure & Compliance Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 px-3 bg-gradient-to-br from-emerald-500 via-green-500 via-8% to-green-600 rounded-2xl shadow-[0px_4px_6px_-4px_rgba(0,188,125,0.20)] shadow-[0px_10px_15px_-3px_rgba(0,188,125,0.20)] flex justify-center items-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.5358 14.997H16.9967C16.4663 14.997 15.9577 15.2077 15.5827 15.5827C15.2077 15.9576 14.9971 16.4663 14.9971 16.9966V21.5357" stroke="white" strokeWidth="1.9996" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6.99854 3.33933V4.99899C6.99854 5.79448 7.31454 6.55739 7.87704 7.11989C8.43953 7.68238 9.20244 7.99839 9.99793 7.99839C10.5283 7.99839 11.0369 8.20906 11.4119 8.58406C11.7869 8.95906 11.9975 9.46766 11.9975 9.99799C11.9975 11.0978 12.8973 11.9976 13.9971 11.9976C14.5275 11.9976 15.0361 11.7869 15.4111 11.4119C15.7861 11.0369 15.9967 10.5283 15.9967 9.99799C15.9967 8.89821 16.8965 7.99839 17.9963 7.99839H21.1657" stroke="white" strokeWidth="1.9996" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10.998 21.9456V17.9964C10.998 17.4661 10.7873 16.9574 10.4123 16.5825C10.0373 16.2075 9.52873 15.9968 8.99841 15.9968C8.46808 15.9968 7.95948 15.7861 7.58448 15.4111C7.20948 15.0361 6.99881 14.5275 6.99881 13.9972V12.9974C6.99881 12.4671 6.78814 11.9585 6.41314 11.5835C6.03814 11.2085 5.52954 10.9978 4.99921 10.9978H2.0498" stroke="white" strokeWidth="1.9996" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M11.9975 21.9956C17.5192 21.9956 21.9955 17.5193 21.9955 11.9976C21.9955 6.47585 17.5192 1.9996 11.9975 1.9996C6.47576 1.9996 1.99951 6.47585 1.99951 11.9976C1.99951 17.5193 6.47576 21.9956 11.9975 21.9956Z" stroke="white" strokeWidth="1.9996" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-slate-200 via-gray-300/95 via-7% to-black/0" />
            </div>
            
            <div className="space-y-4">
              <h2 className="text-slate-900 text-2xl sm:text-3xl lg:text-[44px] font-semibold font-['Inter_Tight'] leading-tight lg:leading-[52.80px]">
                Secure & <br className="hidden lg:block" /> Compliance
              </h2>
              <p className="text-slate-500 text-sm sm:text-base lg:text-lg font-normal font-['Inter_Tight'] leading-relaxed lg:leading-8 max-w-lg">
                Enterprise-grade security with SOC 2 compliance, data encryption, and role-based access controls built in from day one.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-slate-50 rounded-2xl outline outline-[1.26px] outline-offset-[-1.26px] outline-slate-200 p-2 sm:p-3 inline-flex justify-start items-center gap-2 sm:gap-3">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.4851 12.4893C17.4851 12.9309 17.3097 13.3545 16.9974 13.6668C16.6851 13.9791 16.2616 14.1545 15.8199 14.1545H5.82851L2.49805 17.485V4.1631C2.49805 3.72145 2.67349 3.29789 2.98578 2.9856C3.29807 2.67331 3.72163 2.49786 4.16328 2.49786H15.8199C16.2616 2.49786 16.6851 2.67331 16.9974 2.9856C17.3097 3.29789 17.4851 3.72145 17.4851 4.1631V12.4893Z" stroke="#7C3AED" strokeWidth="1.66523" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-slate-900 text-xs sm:text-sm font-medium font-['Inter_Tight'] leading-5">Web chat widget</span>
              </div>
              
              <div className="bg-slate-50 rounded-2xl outline outline-[1.26px] outline-offset-[-1.26px] outline-slate-200 p-2 sm:p-3 inline-flex justify-start items-center gap-2 sm:gap-3">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.3217 17.485V15.8197C13.3217 14.9364 12.9708 14.0893 12.3462 13.4647C11.7216 12.8401 10.8745 12.4893 9.9912 12.4893H4.99551C4.11221 12.4893 3.26509 12.8401 2.64051 13.4647C2.01593 14.0893 1.66504 14.9364 1.66504 15.8197V17.485" stroke="#7C3AED" strokeWidth="1.66523" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7.49355 9.1588C9.33292 9.1588 10.824 7.6677 10.824 5.82833C10.824 3.98896 9.33292 2.49786 7.49355 2.49786C5.65419 2.49786 4.16309 3.98896 4.16309 5.82833C4.16309 7.6677 5.65419 9.1588 7.49355 9.1588Z" stroke="#7C3AED" strokeWidth="1.66523" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M18.3177 17.4849V15.8197C18.3171 15.0818 18.0715 14.3649 17.6194 13.7817C17.1673 13.1985 16.5343 12.782 15.8198 12.5975" stroke="#7C3AED" strokeWidth="1.66523" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M13.3218 2.60608C14.0382 2.78951 14.6731 3.20615 15.1266 3.79032C15.58 4.37449 15.8262 5.09296 15.8262 5.83247C15.8262 6.57197 15.58 7.29045 15.1266 7.87462C14.6731 8.45879 14.0382 8.87543 13.3218 9.05886" stroke="#7C3AED" strokeWidth="1.66523" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-slate-900 text-xs sm:text-sm font-medium font-['Inter_Tight'] leading-5">Slack & Teams integration</span>
              </div>

              <div className="bg-slate-50 rounded-2xl outline outline-[1.26px] outline-offset-[-1.26px] outline-slate-200 p-2 sm:p-3 inline-flex justify-start items-center gap-2 sm:gap-3">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.6521 3.33047H3.33027C2.41059 3.33047 1.66504 4.07603 1.66504 4.99571V14.9871C1.66504 15.9068 2.41059 16.6523 3.33027 16.6523H16.6521C17.5718 16.6523 18.3174 15.9068 18.3174 14.9871V4.99571C18.3174 4.07603 17.5718 3.33047 16.6521 3.33047Z" stroke="#7C3AED" strokeWidth="1.66523" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M18.3174 5.82831L10.8488 10.5742C10.5917 10.7353 10.2945 10.8207 9.99121 10.8207C9.68787 10.8207 9.39066 10.7353 9.13361 10.5742L1.66504 5.82831" stroke="#7C3AED" strokeWidth="1.66523" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-slate-900 text-xs sm:text-sm font-medium font-['Inter_Tight'] leading-5">Email automation</span>
              </div>

              <div className="bg-slate-50 rounded-2xl outline outline-[1.26px] outline-offset-[-1.26px] outline-slate-200 p-2 sm:p-3 inline-flex justify-start items-center gap-2 sm:gap-3">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.3218 14.9871L18.3175 9.9914L13.3218 4.9957" stroke="#7C3AED" strokeWidth="1.66523" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6.66074 4.9957L1.66504 9.9914L6.66074 14.9871" stroke="#7C3AED" strokeWidth="1.66523" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-slate-900 text-xs sm:text-sm font-medium font-['Inter_Tight'] leading-5">REST API access</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesShowcaseSection;
