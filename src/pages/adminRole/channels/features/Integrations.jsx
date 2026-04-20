import React from 'react';
import {
  SlackIcon,
  ZapierIcon,
  WhatsAppIcon,
  WebsiteIcon
} from '../../../../assets/icons/icons';

const Integrations = () => {
  // Dummy data for channels
  const channels = [
    {
      id: 1,
      name: 'Website Chat',
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_689_2715)">
            <path d="M9.5951 17.5901C14.0109 17.5901 17.5906 14.0104 17.5906 9.59462C17.5906 5.17883 14.0109 1.59912 9.5951 1.59912C5.17931 1.59912 1.59961 5.17883 1.59961 9.59462C1.59961 14.0104 5.17931 17.5901 9.5951 17.5901Z" stroke="#0F1729" stroke-width="1.5991" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9.59468 1.59912C7.54163 3.75483 6.39648 6.61769 6.39648 9.59462C6.39648 12.5715 7.54163 15.4344 9.59468 17.5901C11.6477 15.4344 12.7929 12.5715 12.7929 9.59462C12.7929 6.61769 11.6477 3.75483 9.59468 1.59912Z" stroke="#0F1729" stroke-width="1.5991" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1.59961 9.59473H17.5906" stroke="#0F1729" stroke-width="1.5991" stroke-linecap="round" stroke-linejoin="round"/>
          </g>
          <defs>
            <clipPath id="clip0_689_2715">
              <rect width="19.1892" height="19.1892" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      ),
      status: 'Connected',
      statusColor: 'bg-teal-600',
      messages: '2,340 messages this month',
      bots: ['Customer Support Bot', 'Sales Assistant'],
      isConnected: true
    },
    {
      id: 2,
      name: 'WhatsApp',
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_689_2733)">
            <path d="M17.59 13.5285V15.9271C17.5909 16.1498 17.5453 16.3702 17.4561 16.5742C17.3669 16.7783 17.236 16.9614 17.072 17.112C16.9079 17.2625 16.7142 17.3771 16.5032 17.4484C16.2923 17.5198 16.0688 17.5463 15.847 17.5262C13.3866 17.2589 11.0233 16.4182 8.94688 15.0716C7.01503 13.844 5.37716 12.2062 4.14958 10.2743C2.79833 8.18845 1.95741 5.81362 1.69497 3.34222C1.67499 3.12111 1.70126 2.89828 1.77212 2.68788C1.84298 2.47749 1.95688 2.28416 2.10655 2.1202C2.25622 1.95624 2.43839 1.82524 2.64147 1.73554C2.84454 1.64584 3.06407 1.59941 3.28607 1.5992H5.68472C6.07274 1.59538 6.44892 1.73279 6.74313 1.98581C7.03734 2.23883 7.22951 2.5902 7.28382 2.97442C7.38506 3.74204 7.57281 4.49575 7.8435 5.22116C7.95108 5.50734 7.97436 5.81835 7.91059 6.11736C7.84682 6.41636 7.69867 6.69082 7.4837 6.90821L6.46828 7.92364C7.60648 9.92534 9.26387 11.5827 11.2656 12.7209L12.281 11.7055C12.4984 11.4905 12.7728 11.3424 13.0719 11.2786C13.3709 11.2149 13.6819 11.2381 13.9681 11.3457C14.6935 11.6164 15.4472 11.8042 16.2148 11.9054C16.6032 11.9602 16.9579 12.1558 17.2115 12.4551C17.465 12.7543 17.5997 13.1364 17.59 13.5285Z" stroke="#0F1729" stroke-width="1.5991" stroke-linecap="round" stroke-linejoin="round"/>
          </g>
          <defs>
            <clipPath id="clip0_689_2733">
              <rect width="19.1892" height="19.1892" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      ),
      status: 'Connected',
      statusColor: 'bg-teal-600',
      messages: '890 messages this month',
      bots: ['Customer Support Bot'],
      isConnected: true
    },
    {
      id: 3,
      name: 'Email',
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_689_2748)">
            <path d="M15.9915 3.19824H3.19871C2.31555 3.19824 1.59961 3.91418 1.59961 4.79734V14.3919C1.59961 15.2751 2.31555 15.991 3.19871 15.991H15.9915C16.8747 15.991 17.5906 15.2751 17.5906 14.3919V4.79734C17.5906 3.91418 16.8747 3.19824 15.9915 3.19824Z" stroke="#0F1729" stroke-width="1.5991" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M17.5906 5.59717L10.4186 10.1546C10.1718 10.3093 9.88639 10.3913 9.5951 10.3913C9.30382 10.3913 9.01841 10.3093 8.77157 10.1546L1.59961 5.59717" stroke="#0F1729" stroke-width="1.5991" stroke-linecap="round" stroke-linejoin="round"/>
          </g>
          <defs>
            <clipPath id="clip0_689_2748">
              <rect width="19.1892" height="19.1892" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      ),
      status: 'Connected',
      statusColor: 'bg-teal-600',
      messages: '456 messages this month',
      bots: ['Technical Helper'],
      isConnected: true
    },
    {
      id: 4,
      name: 'Slack',
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.7903 11.993C16.7903 12.4171 16.6219 12.8239 16.322 13.1238C16.0221 13.4237 15.6153 13.5921 15.1912 13.5921H5.59664L2.39844 16.7903V3.99754C2.39844 3.57343 2.56691 3.16669 2.8668 2.8668C3.16669 2.56691 3.57343 2.39844 3.99754 2.39844H15.1912C15.6153 2.39844 16.0221 2.56691 16.322 2.8668C16.6219 3.16669 16.7903 3.57343 16.7903 3.99754V11.993Z" stroke="#0F1729" stroke-width="1.5991" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      ),
      status: 'Disconnected',
      statusColor: 'bg-red-500',
      messages: '156 messages this month',
      bots: [],
      isConnected: false
    }
  ];

  return (
    <div data-layer="Container" className="Container self-stretch h-[523px] inline-flex flex-col justify-start items-start gap-6">
      {/* Tabpanel */}
      <div data-layer="Tabpanel" className="Tabpanel w-[1136px] inline-flex justify-start items-start gap-4 flex-wrap content-start">
        <div data-layer="Frame 19" className="Frame19 size- inline-flex justify-start items-center gap-4">
          {/* Slack Integration */}
          <div data-layer="Background+Border+Shadow" className="BackgroundBorderShadow w-[368px] h-64 p-5 bg-white rounded-2xl shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-gray-200 inline-flex flex-col justify-start items-start gap-5">
            <div data-layer="Container" className="Container self-stretch flex flex-col justify-center items-start gap-5">
              <div data-layer="SVG" className="Svg size-10 relative overflow-hidden">
                <div data-svg-wrapper data-layer="devicon:slack" className="DeviconSlack left-0 top-0 absolute">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_689_2655)">
                      <path d="M8.51758 25.225C8.51758 27.5157 6.64945 29.3866 4.35852 29.3866C2.06758 29.3866 0.197266 27.5157 0.197266 25.225C0.197266 22.9344 2.0682 21.0635 4.35883 21.0635H8.51789L8.51758 25.225ZM10.6141 25.225C10.6141 22.9344 12.4851 21.0635 14.7757 21.0635C17.0663 21.0635 18.9373 22.9341 18.9373 25.225V35.6422C18.9373 37.9329 17.0666 39.8038 14.7757 39.8038C12.4851 39.8038 10.6141 37.9329 10.6141 35.6422V25.225Z" fill="#DE1C59"/>
                      <path d="M14.7757 8.5166C12.4851 8.5166 10.6141 6.64848 10.6141 4.35754C10.6141 2.0666 12.4851 0.196289 14.7757 0.196289C17.0663 0.196289 18.9373 2.06723 18.9373 4.35785V8.51691L14.7757 8.5166ZM14.7757 10.6132C17.0663 10.6132 18.9373 12.4841 18.9373 14.7747C18.9373 17.0654 17.0666 18.9363 14.7757 18.9363H4.35852C2.06789 18.9363 0.197266 17.0657 0.197266 14.7747C0.197266 12.4841 2.0682 10.6132 4.35883 10.6132H14.7757Z" fill="#35C5F0"/>
                      <path d="M31.4832 14.7747C31.4832 12.4841 33.3513 10.6132 35.6422 10.6132C37.9332 10.6132 39.8038 12.4841 39.8038 14.7747C39.8038 17.0654 37.9329 18.9363 35.6422 18.9363H31.4832V14.7747ZM29.3866 14.7747C29.3866 17.0654 27.5157 18.9363 25.225 18.9363C22.9344 18.9363 21.0635 17.0657 21.0635 14.7747V4.35754C21.0635 2.06691 22.9341 0.196289 25.225 0.196289C27.5157 0.196289 29.3866 2.06723 29.3866 4.35785V14.7747Z" fill="#2EB57D"/>
                      <path d="M25.225 31.4832C27.5157 31.4832 29.3866 33.3513 29.3866 35.6422C29.3866 37.9332 27.5157 39.8038 25.225 39.8038C22.9344 39.8038 21.0635 37.9329 21.0635 35.6422V31.4832H25.225ZM25.225 29.3866C22.9344 29.3866 21.0635 27.5157 21.0635 25.225C21.0635 22.9344 22.9341 21.0635 25.225 21.0635H35.6422C37.9329 21.0635 39.8038 22.9341 39.8038 25.225C39.8038 27.5157 37.9329 29.3866 35.6422 29.3866H25.225Z" fill="#EBB02E"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_689_2655">
                        <rect width="40" height="40" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <div data-layer="Heading 3" className="Heading3 size- flex flex-col justify-start items-start">
                <div data-layer="Slack" className="Slack justify-center text-slate-900 text-lg font-medium font-['Inter Tight'] leading-5">Slack </div>
              </div>
            </div>
            <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start">
              <div data-layer="Send and receive messages directly from Slack channels. Auto-route conversations to the right agents." className="SendAndReceiveMessagesDirectlyFromSlackChannelsAutoRouteConversationsToTheRightAgents self-stretch justify-center text-gray-500 text-xs font-normal font-['Inter Tight'] leading-4">Send and receive messages directly from Slack channels. Auto-route conversations to the right agents.</div>
            </div>
            <div data-layer="Container" className="Container self-stretch pt-[5px] flex flex-col justify-start items-start gap-2.5">
              <div data-layer="Container" className="Container self-stretch inline-flex justify-start items-start gap-2">
                <div data-layer="Button" className="Button flex-1 h-11 px-3 bg-gray-50 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-gray-200 flex justify-center items-center">
                  <div data-layer="Connect" className="Connect text-center justify-center text-slate-900 text-base font-normal font-['Inter Tight'] leading-5">Connect</div>
                </div>
              </div>
            </div>
          </div>

          {/* Zapier Integration */}
          <div data-layer="Background+Border+Shadow" className="BackgroundBorderShadow w-[368px] h-64 p-5 bg-white rounded-2xl shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-gray-200 inline-flex flex-col justify-start items-start gap-5">
            <div data-layer="Container" className="Container self-stretch flex flex-col justify-center items-start gap-5">
              <div data-svg-wrapper data-layer="cib:zapier" className="CibZapier relative">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_689_2670)">
                    <path d="M25 20.0062C24.9999 21.4494 24.7395 22.8806 24.2312 24.2313C22.8806 24.7395 21.4493 24.9999 20.0062 25H19.9925C18.5494 24.9999 17.1182 24.7395 15.7675 24.2313C15.2593 22.8806 14.9989 21.4494 14.9987 20.0062V19.9925C14.9987 18.5025 15.2725 17.0825 15.7675 15.7675C17.1182 15.2593 18.5494 14.9989 19.9925 14.9987H20.0062C21.4962 14.9987 22.9225 15.2725 24.2312 15.7675C24.7395 17.1182 24.9999 18.5494 25 19.9925V20.0062ZM39.7262 16.6663H28.0462L36.295 8.41125C35.649 7.50224 34.9282 6.64885 34.14 5.86C33.3514 5.06963 32.498 4.34669 31.5887 3.69875L23.3337 11.9475V0.27375C22.2339 0.0954371 21.1217 0.00390486 20.0075 0L19.9875 0C18.8537 0 17.7475 0.10375 16.6675 0.27375V11.9537L8.41875 3.705C7.50333 4.34566 6.647 5.06686 5.86 5.86C5.06741 6.64655 4.3443 7.50014 3.69875 8.41125L11.9475 16.6663H0.27375C0.27375 16.6663 0 18.86 0 19.9925V20.0062C0 21.14 0.10375 22.2525 0.27375 23.3325H11.9537L3.705 31.5812C4.99501 33.4098 6.58642 35.0059 8.41125 36.3013L16.6662 28.0525V39.7262C17.7462 39.9012 18.8525 40 19.9862 40H20.0125C21.1462 40 22.2525 39.9012 23.3325 39.7262V28.0525L31.5812 36.3013C32.5 35.6763 33.3525 34.9475 34.1325 34.1525H34.1387C34.9352 33.3695 35.6586 32.5156 36.3 31.6012L28.0512 23.3525H39.725C39.9 22.2775 39.9987 21.1775 39.9987 20.0513V20C39.9987 18.8662 39.9 17.76 39.725 16.6863L39.7262 16.6663Z" fill="#EF4343"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_689_2670">
                      <rect width="40" height="40" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div data-layer="Heading 3" className="Heading3 size- flex flex-col justify-start items-start">
                <div data-layer="Zapier" className="Zapier justify-center text-slate-900 text-lg font-medium font-['Inter Tight'] leading-5">Zapier</div>
              </div>
            </div>
            <div data-layer="Frame 18" className="Frame18 self-stretch flex flex-col justify-start items-start gap-9">
              <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start">
                <div data-layer="Automatically send and receive messages between your system and Slack channels using Zapier." className="AutomaticallySendAndReceiveMessagesBetweenYourSystemAndSlackChannelsUsingZapier self-stretch justify-center text-gray-500 text-xs font-normal font-['Inter Tight'] leading-4">Automatically send and receive messages between your system and Slack channels using Zapier. </div>
              </div>
              <div data-layer="Container" className="Container self-stretch pt-[5px] flex flex-col justify-start items-start gap-2.5">
                <div data-layer="Container" className="Container self-stretch inline-flex justify-start items-start gap-2">
                  <div data-layer="Button" className="Button flex-1 h-11 px-3 bg-gray-50 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-gray-200 flex justify-center items-center">
                    <div data-layer="Connect" className="Connect text-center justify-center text-slate-900 text-base font-normal font-['Inter Tight'] leading-5">Connect</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* WhatsApp Integration */}
          <div data-layer="Background+Border+Shadow" className="BackgroundBorderShadow w-[368px] h-64 p-5 bg-white rounded-2xl shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-gray-200 inline-flex flex-col justify-start items-start gap-5">
            <div data-layer="Container" className="Container self-stretch flex flex-col justify-center items-start gap-5">
              <div data-layer="SVG" className="Svg size-10 relative overflow-hidden">
                <div data-svg-wrapper data-layer="ri:whatsapp-fill" className="RiWhatsappFill left-0 top-0 absolute">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.5 1C31.2699 1 40 9.73014 40 20.5C40 31.2698 31.2699 40 20.5 40C17.0539 40.0059 13.6684 39.0939 10.6915 37.3577L1.00783 40L3.64423 30.3124C1.9067 27.3346 0.993991 23.9476 1.00003 20.5C1.00003 9.73014 9.73018 1 20.5 1ZM13.8544 11.335L13.4644 11.3506C13.2123 11.368 12.9659 11.4342 12.739 11.5456C12.5276 11.6655 12.3345 11.8153 12.1657 11.9902C11.9317 12.2105 11.7991 12.4016 11.6568 12.5869C10.9355 13.5247 10.5472 14.676 10.5531 15.859C10.557 16.8145 10.8066 17.7446 11.1966 18.6143C11.9941 20.3732 13.3065 22.2355 15.0381 23.9612C15.4554 24.3766 15.8649 24.7939 16.3056 25.1819C18.4573 27.0762 21.0212 28.4423 23.7936 29.1716L24.9012 29.3413C25.2619 29.3608 25.6227 29.3335 25.9854 29.3159C26.5532 29.286 27.1076 29.1322 27.6097 28.8655C27.8649 28.7336 28.1141 28.5904 28.3566 28.4365C28.3566 28.4365 28.4391 28.3806 28.6003 28.261C28.8636 28.066 29.0254 27.9275 29.2438 27.6994C29.4076 27.5304 29.5441 27.3341 29.6533 27.1105C29.8054 26.7926 29.9575 26.1862 30.0199 25.6811C30.0667 25.295 30.0531 25.0844 30.0472 24.9538C30.0394 24.7451 29.8659 24.5287 29.6767 24.437L28.5418 23.9281C28.5418 23.9281 26.8453 23.189 25.8079 22.7171C25.6993 22.6699 25.583 22.6428 25.4647 22.6372C25.3313 22.6232 25.1964 22.6381 25.0692 22.6808C24.9421 22.7236 24.8255 22.7931 24.7276 22.8848C24.7179 22.8809 24.5872 22.9921 23.1774 24.7003C23.0964 24.809 22.985 24.8912 22.8572 24.9363C22.7294 24.9815 22.591 24.9876 22.4598 24.9538C22.3327 24.9199 22.2082 24.8769 22.0873 24.8251C21.8455 24.7237 21.7617 24.6847 21.5959 24.6145C20.4764 24.1268 19.4401 23.4669 18.5247 22.6586C18.279 22.4441 18.0508 22.2101 17.8168 21.9839C17.0497 21.2492 16.3811 20.4181 15.8278 19.5113L15.7128 19.3261C15.6314 19.2009 15.5646 19.0668 15.5139 18.9263C15.4398 18.6397 15.6328 18.4096 15.6328 18.4096C15.6328 18.4096 16.1067 17.8909 16.327 17.6101C16.5415 17.3371 16.7229 17.0719 16.8399 16.8827C17.07 16.5122 17.1421 16.132 17.0212 15.8375C16.4752 14.5037 15.911 13.1771 15.3286 11.8576C15.2136 11.5963 14.8723 11.4091 14.5623 11.372C14.457 11.359 14.3517 11.3486 14.2464 11.3408C13.9845 11.3258 13.722 11.3284 13.4605 11.3486L13.8544 11.335Z" fill="#128C7E"/>
                  </svg>
                </div>
              </div>
              <div data-layer="Heading 3" className="Heading3 size- flex flex-col justify-start items-start">
                <div data-layer="WhatsApp" className="Whatsapp justify-center text-slate-900 text-lg font-medium font-['Inter Tight'] leading-5">WhatsApp</div>
              </div>
            </div>
            <div data-layer="Container" className="Container self-stretch h-12 flex flex-col justify-start items-start">
              <div data-layer="Connect via Twilio to handle WhatsApp conversations with AI-powered responses." className="ConnectViaTwilioToHandleWhatsappConversationsWithAiPoweredResponses self-stretch justify-center text-gray-500 text-xs font-normal font-['Inter Tight'] leading-4">Connect via Twilio to handle WhatsApp conversations with AI-powered responses.</div>
            </div>
            <div data-layer="Container" className="Container self-stretch pt-[5px] flex flex-col justify-start items-start gap-2.5">
              <div data-layer="Container" className="Container self-stretch inline-flex justify-start items-start gap-2">
                <div data-layer="Button" className="Button flex-1 h-11 px-3 bg-gray-50 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-gray-200 flex justify-center items-center">
                  <div data-layer="Connect" className="Connect text-center justify-center text-slate-900 text-base font-normal font-['Inter Tight'] leading-5">Connect</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Website Widget Card */}
        <div data-layer="Background+Border+Shadow" className="BackgroundBorderShadow w-[1136px] h-48 p-5 bg-white rounded-2xl shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-gray-200 inline-flex flex-col justify-start items-start gap-5">
          <div data-layer="Container" className="Container self-stretch flex flex-col justify-center items-start gap-5">
            <div data-layer="SVG" className="Svg w-36 h-10 relative overflow-hidden">
              <div data-svg-wrapper data-layer="lsicon:earth-outline" className="LsiconEarthOutline left-0 top-0 absolute">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M36.25 20C36.25 24.3098 34.538 28.443 31.4905 31.4905C28.443 34.538 24.3098 36.25 20 36.25M36.25 20C36.25 15.6902 34.538 11.557 31.4905 8.50951C28.443 5.46205 24.3098 3.75 20 3.75M36.25 20C36.25 24.1425 28.975 27.5 20 27.5C11.025 27.5 3.75 24.1425 3.75 20M36.25 20C36.25 15.8575 28.975 12.5 20 12.5C11.025 12.5 3.75 15.8575 3.75 20M20 36.25C15.6902 36.25 11.557 34.538 8.50951 31.4905C5.46205 28.443 3.75 24.3098 3.75 20M20 36.25C24.1425 36.25 27.5 28.975 27.5 20C27.5 11.025 24.1425 3.75 20 3.75M20 36.25C15.8575 36.25 12.5 28.975 12.5 20C12.5 11.025 15.8575 3.75 20 3.75M20 3.75C15.6902 3.75 11.557 5.46205 8.50951 8.50951C5.46205 11.557 3.75 15.6902 3.75 20" stroke="#3FA284" stroke-width="2.5"/>
                </svg>
              </div>
            </div>
            <div data-layer="Heading 3" className="Heading3 size- flex flex-col justify-start items-start">
              <div data-layer="Website Widget" className="WebsiteWidget justify-center text-slate-900 text-lg font-medium font-['Inter Tight'] leading-5">Website Widget</div>
            </div>
          </div>
          <div data-layer="Container" className="Container self-stretch h-11 inline-flex justify-between items-center">
            <div data-layer="Live on acme.com - 1,240 conversations this month" className="LiveOnAcmeCom1240ConversationsThisMonth justify-center text-gray-500 text-xs font-normal font-['Inter Tight'] leading-4">Live on acme.com - 1,240 conversations this month</div>
            <div data-layer="Button" className="Button w-40 h-11 px-3 bg-gray-50 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-gray-200 flex justify-center items-center">
              <div data-layer="Connect" className="Connect text-center justify-center text-slate-900 text-base font-normal font-['Inter Tight'] leading-5">Connect</div>
            </div>
          </div>
        </div>
      </div>

      {/* Channel Section */}
      <div data-layer="Main" className="Main self-stretch inline-flex flex-col justify-center items-start gap-2.5 overflow-hidden">
        <div data-layer="Frame 25" className="Frame25 self-stretch flex flex-col justify-start items-start gap-6">
          <div data-layer="Frame 24" className="Frame24 self-stretch inline-flex justify-between items-center">
            <div data-layer="Frame 23" className="Frame23 w-96 inline-flex flex-col justify-start items-start">
              <div data-layer="Heading 1 -> Channels" className="Heading1Channels self-stretch h-8 justify-center text-slate-900 text-2xl font-medium font-['Inter Tight'] leading-8">Channels</div>
              <div data-layer="Connect and manage your communication channels." className="ConnectAndManageYourCommunicationChannels justify-center text-gray-500 text-sm font-normal font-['Inter Tight'] leading-5">Connect and manage your communication channels.</div>
            </div>
          </div>
          <div data-layer="Frame 22" className="Frame22 self-stretch flex flex-col justify-start items-start gap-4">
            <div data-layer="Frame 20" className="Frame20 self-stretch inline-flex justify-between items-center">
              {channels.slice(0, 2).map((channel) => (
                <div key={channel.id} data-layer="Background+Border+Shadow" className="BackgroundBorderShadow w-[556px] h-36 relative bg-white rounded-[9.59px] shadow-[0px_0.9594594836235046px_1.9189189672470093px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-0.96px] outline-neutral-200">
                  <div data-layer="Overlay" className="Overlay size-10 left-[20.15px] top-[20.15px] absolute bg-neutral-100 rounded-xl outline outline-1 outline-offset-[-1px] outline-zinc-100">
                    <div data-svg-wrapper data-layer="SVG" className="Svg left-[9.59px] top-[9.59px] absolute">
                      {channel.icon}
                    </div>
                  </div>
                  <div data-layer={`Heading 3 -> ${channel.name}`} className={`Heading3${channel.name.replace(' ', '')} left-[70.04px] top-[26.82px] absolute justify-center text-slate-900 text-base font-normal font-['Inter Tight'] leading-6`}>{channel.name}</div>
                  <div data-layer="Background+Border" className={`BackgroundBorder w-20 h-4 left-[${channel.name === 'Website Chat' ? '191' : '160'}]px top-[${channel.name === 'Website Chat' ? '27.30' : '31.77'}]px absolute ${channel.statusColor} rounded-full outline outline-1 outline-offset-[-1px] outline-gray-500/0`}>
                    <div data-layer={channel.status} className={`${channel.status.replace(' ', '')} left-[7px] top-[${channel.name === 'Website Chat' ? '1' : '0.54'}]px absolute justify-center text-neutral-50 text-[10px] font-normal font-['Inter Tight'] leading-4`}>{channel.status}</div>
                  </div>
                  <div data-layer={`${channel.messages.replace(' ', '').replace(',', '')}ThisMonth`} className={`${channel.messages.replace(' ', '').replace(',', '')}ThisMonth left-[20.15px] top-[72.76px] absolute justify-center text-gray-500 text-sm font-normal font-['Inter Tight'] leading-5`}>{channel.messages}</div>
                  <div className="absolute left-[20px] top-[100.30px] flex gap-2">
                    {channel.bots.map((bot, index) => (
                      <div key={index} data-layer="Border" className="Border w-32 h-5 rounded-full outline outline-1 outline-offset-[-0.96px] outline-neutral-200">
                        <div data-layer={bot.replace(' ', '')} className={`${bot.replace(' ', '')} w-32 h-3 left-[10px] top-[${index === 1 ? '3' : '7'}]px absolute justify-center text-slate-900 text-[10px] font-normal font-['Inter Tight'] leading-4`}>{bot}</div>
                      </div>
                    ))}
                  </div>
                  <div data-layer="Button" className={`Button w-${channel.isConnected ? '24' : '16'} h-8 px-2.5 py-[4.76px] left-[${channel.isConnected ? '436' : '468'}]px top-[90px] absolute ${channel.isConnected ? 'bg-red-500' : 'bg-emerald-950'} rounded-md inline-flex justify-center items-center gap-[4.76px]`}>
                    {channel.isConnected && (
                      <div data-svg-wrapper data-layer="streamline-ultimate:link-disconnected" className="StreamlineUltimateLinkDisconnected relative">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clip-path="url(#clip0_689_2728)">
                            <path d="M8.97349 8.97349L0.538086 0.538086M5.41855 7.20811L4.81265 7.81401C3.95275 8.67391 2.41839 8.8134 1.55809 7.9531C1.14502 7.53992 0.912969 6.9796 0.912969 6.39536C0.912969 5.81112 1.14502 5.25079 1.55809 4.83762L2.30466 4.09144M3.20419 3.19191L4.83762 1.55809C5.25076 1.14495 5.81109 0.912849 6.39536 0.912849C6.97962 0.912849 7.53996 1.14495 7.9531 1.55809C8.36624 1.97122 8.59833 2.53156 8.59833 3.11582C8.59833 3.70009 8.36624 4.26043 7.9531 4.67356L6.31927 6.30699" stroke="white" stroke-width="0.891608" stroke-linecap="round" stroke-linejoin="round"/>
                          </g>
                          <defs>
                            <clipPath id="clip0_689_2728">
                              <rect width="9.51049" height="9.51049" fill="white"/>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    )}
                    <div data-layer={channel.isConnected ? 'Dissconnect' : 'Connect'} className={`${channel.isConnected ? 'Dissconnect' : 'Connect'} text-center justify-center text-white text-[10px] font-medium font-['Inter Tight']`}>{channel.isConnected ? 'Dissconnect' : 'Connect'}</div>
                  </div>
                </div>
              ))}
            </div>
            <div data-layer="Frame 21" className="Frame21 self-stretch inline-flex justify-between items-center">
              {channels.slice(2, 4).map((channel) => (
                <div key={channel.id} data-layer="Background+Border+Shadow" className="BackgroundBorderShadow w-[556px] h-36 relative bg-white rounded-[9.59px] shadow-[0px_0.9594594836235046px_1.9189189672470093px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-0.96px] outline-neutral-200">
                  <div data-layer="Overlay" className="Overlay size-10 left-[20.15px] top-[20.15px] absolute bg-neutral-100 rounded-xl outline outline-1 outline-offset-[-1px] outline-zinc-100">
                    <div data-svg-wrapper data-layer="SVG" className="Svg left-[9.59px] top-[9.59px] absolute">
                      {channel.icon}
                    </div>
                  </div>
                  <div data-layer={`Heading 3 -> ${channel.name}`} className={`Heading3${channel.name.replace(' ', '')} left-[70.04px] top-[26.82px] absolute justify-center text-slate-900 text-base font-normal font-['Inter Tight'] leading-6`}>{channel.name}</div>
                  <div data-layer="Background+Border" className={`BackgroundBorder w-20 h-4 left-[${channel.name === 'Email' ? '120' : '121'}]px top-[${channel.name === 'Email' ? '31.30' : '29.30'}]px absolute ${channel.statusColor} rounded-full outline outline-1 outline-offset-[-1px] outline-gray-500/0`}>
                    <div data-layer={channel.status} className={`${channel.status.replace(' ', '')} left-[7px] top-[0.54px] absolute justify-center text-neutral-50 text-[10px] font-normal font-['Inter Tight'] leading-4`}>{channel.status}</div>
                  </div>
                  <div data-layer={`${channel.messages.replace(' ', '').replace(',', '')}ThisMonth`} className={`${channel.messages.replace(' ', '').replace(',', '')}ThisMonth left-[20.15px] top-[72.76px] absolute justify-center text-gray-500 text-sm font-normal font-['Inter Tight'] leading-5`}>{channel.messages}</div>
                  <div className="absolute left-[20px] top-[100.30px] flex gap-2">
                    {channel.bots.map((bot, index) => (
                      <div key={index} data-layer="Border" className="Border w-24 h-5 rounded-full outline outline-1 outline-offset-[-0.96px] outline-neutral-200">
                        <div data-layer={bot.replace(' ', '')} className={`${bot.replace(' ', '')} w-24 h-3 left-[10px] top-[7px] absolute justify-center text-slate-900 text-[10px] font-normal font-['Inter Tight'] leading-4`}>{bot}</div>
                      </div>
                    ))}
                  </div>
                  <div data-layer="Button" className={`Button w-${channel.isConnected ? '24' : '16'} h-8 px-2.5 py-[4.76px] left-[${channel.isConnected ? '436' : '468'}]px top-[90px] absolute ${channel.isConnected ? 'bg-red-500' : 'bg-emerald-950'} rounded-md inline-flex justify-center items-center gap-[4.76px]`}>
                    {channel.isConnected && (
                      <div data-svg-wrapper data-layer="streamline-ultimate:link-disconnected" className="StreamlineUltimateLinkDisconnected relative">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clip-path="url(#clip0_689_2728)">
                            <path d="M8.97349 8.97349L0.538086 0.538086M5.41855 7.20811L4.81265 7.81401C3.95275 8.67391 2.41839 8.8134 1.55809 7.9531C1.14502 7.53992 0.912969 6.9796 0.912969 6.39536C0.912969 5.81112 1.14502 5.25079 1.55809 4.83762L2.30466 4.09144M3.20419 3.19191L4.83762 1.55809C5.25076 1.14495 5.81109 0.912849 6.39536 0.912849C6.97962 0.912849 7.53996 1.14495 7.9531 1.55809C8.36624 1.97122 8.59833 2.53156 8.59833 3.11582C8.59833 3.70009 8.36624 4.26043 7.9531 4.67356L6.31927 6.30699" stroke="white" stroke-width="0.891608" stroke-linecap="round" stroke-linejoin="round"/>
                          </g>
                          <defs>
                            <clipPath id="clip0_689_2728">
                              <rect width="9.51049" height="9.51049" fill="white"/>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    )}
                    <div data-layer={channel.isConnected ? 'Dissconnect' : 'Connect'} className={`${channel.isConnected ? 'Dissconnect' : 'Connect'} text-center justify-center text-white text-[10px] font-medium font-['Inter Tight']`}>{channel.isConnected ? 'Dissconnect' : 'Connect'}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Channel Section */}
      <div data-layer="Main" className="Main self-stretch inline-flex flex-col justify-center items-start gap-2.5 overflow-hidden">
        <div data-layer="Frame 25" className="Frame25 self-stretch flex flex-col justify-start items-start gap-6">
          <div data-layer="Frame 24" className="Frame24 self-stretch inline-flex justify-between items-center">
            <div data-layer="Frame 23" className="Frame23 w-96 inline-flex flex-col justify-start items-start">
              <div data-layer="Heading 1 → Channels" className="Heading1Channels self-stretch h-8 justify-center text-slate-900 text-2xl font-medium font-['Inter Tight'] leading-8">Channels</div>
              <div data-layer="Connect and manage your communication channels." className="ConnectAndManageYourCommunicationChannels justify-center text-gray-500 text-sm font-normal font-['Inter Tight'] leading-5">Connect and manage your communication channels.</div>
            </div>
          </div>
          <div data-layer="Frame 22" className="Frame22 self-stretch flex flex-col justify-start items-start gap-4">
            <div data-layer="Frame 20" className="Frame20 self-stretch inline-flex justify-between items-center">
              <div data-layer="Background+Border+Shadow" className="BackgroundBorderShadow w-[556px] h-36 relative bg-white rounded-[9.59px] shadow-[0px_0.9594594836235046px_1.9189189672470093px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-0.96px] outline-neutral-200">
                <div data-layer="Overlay" className="Overlay size-10 left-[20.15px] top-[20.15px] absolute bg-neutral-100 rounded-xl outline outline-1 outline-offset-[-1px] outline-zinc-100">
                  <div data-svg-wrapper data-layer="SVG" className="Svg left-[9.59px] top-[9.59px] absolute">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_689_2715)">
                        <path d="M9.5951 17.5901C14.0109 17.5901 17.5906 14.0104 17.5906 9.59462C17.5906 5.17883 14.0109 1.59912 9.5951 1.59912C5.17931 1.59912 1.59961 5.17883 1.59961 9.59462C1.59961 14.0104 5.17931 17.5901 9.5951 17.5901Z" stroke="#0F1729" stroke-width="1.5991" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M9.59468 1.59912C7.54163 3.75483 6.39648 6.61769 6.39648 9.59462C6.39648 12.5715 7.54163 15.4344 9.59468 17.5901C11.6477 15.4344 12.7929 12.5715 12.7929 9.59462C12.7929 6.61769 11.6477 3.75483 9.59468 1.59912Z" stroke="#0F1729" stroke-width="1.5991" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M1.59961 9.59473H17.5906" stroke="#0F1729" stroke-width="1.5991" stroke-linecap="round" stroke-linejoin="round"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_689_2715">
                          <rect width="19.1892" height="19.1892" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div data-layer="Heading 3 → Website Chat" className="Heading3WebsiteChat left-[70.04px] top-[26.82px] absolute justify-center text-slate-900 text-base font-normal font-['Inter Tight'] leading-6">Website Chat</div>
                <div data-layer="Background+Border" className="BackgroundBorder w-16 h-4 left-[191px] top-[27.30px] absolute bg-teal-600 rounded-full outline outline-1 outline-offset-[-1px] outline-gray-500/0">
                  <div data-layer="Connected" className="Connected left-[7px] top-[1px] absolute justify-center text-neutral-50 text-[10px] font-normal font-['Inter Tight'] leading-4">Connected</div>
                </div>
                <div data-layer="2,340 messages this month" className="340MessagesThisMonth left-[20.15px] top-[72.76px] absolute justify-center text-gray-500 text-sm font-normal font-['Inter Tight'] leading-5">2,340 messages this month</div>
                <div data-layer="Border" className="Border w-32 h-5 left-[20px] top-[100.30px] absolute rounded-full outline outline-1 outline-offset-[-0.96px] outline-neutral-200">
                  <div data-layer="Customer Support Bot" className="CustomerSupportBot w-32 h-3 left-[10px] top-[7px] absolute justify-center text-slate-900 text-[10px] font-normal font-['Inter Tight'] leading-4">Customer Support Bot</div>
                </div>
                <div data-layer="Border" className="Border w-24 h-5 left-[159px] top-[100.30px] absolute rounded-full outline outline-1 outline-offset-[-0.96px] outline-neutral-200">
                  <div data-layer="Sales Assistant" className="SalesAssistant left-[10px] top-[3px] absolute justify-center text-slate-900 text-[10px] font-normal font-['Inter Tight'] leading-4">Sales Assistant</div>
                </div>
                <div data-layer="Button" className="Button w-24 h-8 px-2.5 py-[4.76px] left-[436px] top-[90px] absolute bg-red-500 rounded-md inline-flex justify-center items-center gap-[4.76px]">
                  <div data-svg-wrapper data-layer="streamline-ultimate:link-disconnected" className="StreamlineUltimateLinkDisconnected relative">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_689_2728)">
                        <path d="M8.97349 8.97349L0.538086 0.538086M5.41855 7.20811L4.81265 7.81401C3.95275 8.67391 2.41839 8.8134 1.55809 7.9531C1.14502 7.53992 0.912969 6.9796 0.912969 6.39536C0.912969 5.81112 1.14502 5.25079 1.55809 4.83762L2.30466 4.09144M3.20419 3.19191L4.83762 1.55809C5.25076 1.14495 5.81109 0.912849 6.39536 0.912849C6.97962 0.912849 7.53996 1.14495 7.9531 1.55809C8.36624 1.97122 8.59833 2.53156 8.59833 3.11582C8.59833 3.70009 8.36624 4.26043 7.9531 4.67356L6.31927 6.30699" stroke="white" stroke-width="0.891608" stroke-linecap="round" stroke-linejoin="round"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_689_2728">
                          <rect width="9.51049" height="9.51049" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div data-layer="Dissconnect" className="Dissconnect text-center justify-center text-white text-[10px] font-medium font-['Inter Tight']">Dissconnect</div>
                </div>
              </div>
              <div data-layer="Background+Border+Shadow" className="BackgroundBorderShadow w-[556px] h-36 relative bg-white rounded-[9.59px] shadow-[0px_0.9594594836235046px_1.9189189672470093px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-0.96px] outline-neutral-200">
                <div data-layer="Overlay" className="Overlay size-10 left-[20.15px] top-[20.15px] absolute bg-neutral-100 rounded-xl outline outline-1 outline-offset-[-1px] outline-zinc-100">
                  <div data-svg-wrapper data-layer="SVG" className="Svg left-[9.59px] top-[9.59px] absolute">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_689_2733)">
                        <path d="M17.59 13.5285V15.9271C17.5909 16.1498 17.5453 16.3702 17.4561 16.5742C17.3669 16.7783 17.236 16.9614 17.072 17.112C16.9079 17.2625 16.7142 17.3771 16.5032 17.4484C16.2923 17.5198 16.0688 17.5463 15.847 17.5262C13.3866 17.2589 11.0233 16.4182 8.94688 15.0716C7.01503 13.844 5.37716 12.2062 4.14958 10.2743C2.79833 8.18845 1.95741 5.81362 1.69497 3.34222C1.67499 3.12111 1.70126 2.89828 1.77212 2.68788C1.84298 2.47749 1.95688 2.28416 2.10655 2.1202C2.25622 1.95624 2.43839 1.82524 2.64147 1.73554C2.84454 1.64584 3.06407 1.59941 3.28607 1.5992H5.68472C6.07274 1.59538 6.44892 1.73279 6.74313 1.98581C7.03734 2.23883 7.22951 2.5902 7.28382 2.97442C7.38506 3.74204 7.57281 4.49575 7.8435 5.22116C7.95108 5.50734 7.97436 5.81835 7.91059 6.11736C7.84682 6.41636 7.69867 6.69082 7.4837 6.90821L6.46828 7.92364C7.60648 9.92534 9.26387 11.5827 11.2656 12.7209L12.281 11.7055C12.4984 11.4905 12.7728 11.3424 13.0719 11.2786C13.3709 11.2149 13.6819 11.2381 13.9681 11.3457C14.6935 11.6164 15.4472 11.8042 16.2148 11.9054C16.6032 11.9602 16.9579 12.1558 17.2115 12.4551C17.465 12.7543 17.5997 13.1364 17.59 13.5285Z" stroke="#0F1729" stroke-width="1.5991" stroke-linecap="round" stroke-linejoin="round"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_689_2733">
                          <rect width="19.1892" height="19.1892" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div data-layer="Heading 3 → WhatsApp" className="Heading3Whatsapp left-[70.04px] top-[26.82px] absolute justify-center text-slate-900 text-base font-normal font-['Inter Tight'] leading-6">WhatsApp</div>
                <div data-layer="Background+Border" className="BackgroundBorder w-20 h-4 left-[160px] top-[31.77px] absolute bg-teal-600 rounded-full outline outline-1 outline-offset-[-1px] outline-gray-500/0">
                  <div data-layer="Connected" className="Connected left-[7px] top-[0.54px] absolute justify-center text-neutral-50 text-[10px] font-normal font-['Inter Tight'] leading-4">Connected</div>
                </div>
                <div data-layer="890 messages this month" className="MessagesThisMonth left-[20.15px] top-[72.76px] absolute justify-center text-gray-500 text-sm font-normal font-['Inter Tight'] leading-5">890 messages this month</div>
                <div data-layer="Border" className="Border w-32 h-5 left-[20px] top-[100.30px] absolute rounded-full outline outline-1 outline-offset-[-0.96px] outline-neutral-200">
                  <div data-layer="Customer Support Bot" className="CustomerSupportBot left-[11px] top-[4px] absolute justify-center text-slate-900 text-[10px] font-normal font-['Inter Tight'] leading-4">Customer Support Bot</div>
                </div>
                <div data-layer="Button" className="Button w-24 h-8 px-2.5 py-[4.76px] left-[436px] top-[90px] absolute bg-red-500 rounded-md inline-flex justify-center items-center gap-[4.76px]">
                  <div data-svg-wrapper data-layer="streamline-ultimate:link-disconnected" className="StreamlineUltimateLinkDisconnected relative">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_689_2742)">
                        <path d="M8.97349 8.97349L0.538086 0.538086M5.41855 7.20811L4.81265 7.81401C3.95275 8.67391 2.41839 8.8134 1.55809 7.9531C1.14502 7.53992 0.912969 6.9796 0.912969 6.39536C0.912969 5.81112 1.14502 5.25079 1.55809 4.83762L2.30466 4.09144M3.20419 3.19191L4.83762 1.55809C5.25076 1.14495 5.81109 0.912849 6.39536 0.912849C6.97962 0.912849 7.53996 1.14495 7.9531 1.55809C8.36624 1.97122 8.59833 2.53156 8.59833 3.11582C8.59833 3.70009 8.36624 4.26043 7.9531 4.67356L6.31927 6.30699" stroke="white" stroke-width="0.891608" stroke-linecap="round" stroke-linejoin="round"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_689_2742">
                          <rect width="9.51049" height="9.51049" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div data-layer="Dissconnect" className="Dissconnect text-center justify-center text-white text-[10px] font-medium font-['Inter Tight']">Dissconnect</div>
                </div>
              </div>
            </div>
            <div data-layer="Frame 21" className="Frame21 self-stretch inline-flex justify-between items-center">
              <div data-layer="Background+Border+Shadow" className="BackgroundBorderShadow w-[556px] h-36 relative bg-white rounded-[9.59px] shadow-[0px_0.9594594836235046px_1.9189189672470093px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-0.96px] outline-neutral-200">
                <div data-layer="Overlay" className="Overlay size-10 left-[20.15px] top-[20.15px] absolute bg-neutral-100 rounded-xl outline outline-1 outline-offset-[-1px] outline-zinc-100">
                  <div data-svg-wrapper data-layer="SVG" className="Svg left-[9.59px] top-[9.59px] absolute">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_689_2748)">
                        <path d="M15.9915 3.19824H3.19871C2.31555 3.19824 1.59961 3.91418 1.59961 4.79734V14.3919C1.59961 15.2751 2.31555 15.991 3.19871 15.991H15.9915C16.8747 15.991 17.5906 15.2751 17.5906 14.3919V4.79734C17.5906 3.91418 16.8747 3.19824 15.9915 3.19824Z" stroke="#0F1729" stroke-width="1.5991" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M17.5906 5.59717L10.4186 10.1546C10.1718 10.3093 9.88639 10.3913 9.5951 10.3913C9.30382 10.3913 9.01841 10.3093 8.77157 10.1546L1.59961 5.59717" stroke="#0F1729" stroke-width="1.5991" stroke-linecap="round" stroke-linejoin="round"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_689_2748">
                          <rect width="19.1892" height="19.1892" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div data-layer="Heading 3 → Email" className="Heading3Email left-[70.04px] top-[26.82px] absolute justify-center text-slate-900 text-base font-normal font-['Inter Tight'] leading-6">Email</div>
                <div data-layer="Background+Border" className="BackgroundBorder w-20 h-4 left-[120px] top-[31.30px] absolute bg-teal-600 rounded-full outline outline-1 outline-offset-[-1px] outline-gray-500/0">
                  <div data-layer="Connected" className="Connected left-[7px] top-[0.54px] absolute justify-center text-neutral-50 text-[10px] font-normal font-['Inter Tight'] leading-4">Connected</div>
                </div>
                <div data-layer="456 messages this month" className="MessagesThisMonth left-[20.15px] top-[72.76px] absolute justify-center text-gray-500 text-sm font-normal font-['Inter Tight'] leading-5">456 messages this month</div>
                <div data-layer="Border" className="Border w-24 h-5 left-[20px] top-[100.30px] absolute rounded-full outline outline-1 outline-offset-[-0.96px] outline-neutral-200">
                  <div data-layer="Technical Helper" className="TechnicalHelper w-24 h-3 left-[10px] top-[7px] absolute justify-center text-slate-900 text-[10px] font-normal font-['Inter Tight'] leading-4">Technical Helper</div>
                </div>
                <div data-layer="Button" className="Button w-24 h-8 px-2.5 py-[4.76px] left-[436px] top-[90px] absolute bg-red-500 rounded-md inline-flex justify-center items-center gap-[4.76px]">
                  <div data-svg-wrapper data-layer="streamline-ultimate:link-disconnected" className="StreamlineUltimateLinkDisconnected relative">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_689_2758)">
                        <path d="M8.97349 8.97349L0.538086 0.538086M5.41855 7.20811L4.81265 7.81401C3.95275 8.67391 2.41839 8.8134 1.55809 7.9531C1.14502 7.53992 0.912969 6.9796 0.912969 6.39536C0.912969 5.81112 1.14502 5.25079 1.55809 4.83762L2.30466 4.09144M3.20419 3.19191L4.83762 1.55809C5.25076 1.14495 5.81109 0.912849 6.39536 0.912849C6.97962 0.912849 7.53996 1.14495 7.9531 1.55809C8.36624 1.97122 8.59833 2.53156 8.59833 3.11582C8.59833 3.70009 8.36624 4.26043 7.9531 4.67356L6.31927 6.30699" stroke="white" stroke-width="0.891608" stroke-linecap="round" stroke-linejoin="round"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_689_2758">
                          <rect width="9.51049" height="9.51049" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div data-layer="Dissconnect" className="Dissconnect text-center justify-center text-white text-[10px] font-medium font-['Inter Tight']">Dissconnect</div>
                </div>
              </div>
              <div data-layer="Background+Border+Shadow" className="BackgroundBorderShadow w-[556px] h-36 relative bg-white rounded-[9.59px] shadow-[0px_0.9594594836235046px_1.9189189672470093px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-0.96px] outline-neutral-200">
                <div data-layer="Overlay" className="Overlay size-10 left-[20.15px] top-[20.15px] absolute bg-neutral-100 rounded-xl outline outline-1 outline-offset-[-1px] outline-zinc-100">
                  <div data-svg-wrapper data-layer="SVG" className="Svg left-[9.59px] top-[9.59px] absolute">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.7903 11.993C16.7903 12.4171 16.6219 12.8239 16.322 13.1238C16.0221 13.4237 15.6153 13.5921 15.1912 13.5921H5.59664L2.39844 16.7903V3.99754C2.39844 3.57343 2.56691 3.16669 2.8668 2.8668C3.16669 2.56691 3.57343 2.39844 3.99754 2.39844H15.1912C15.6153 2.39844 16.0221 2.56691 16.322 2.8668C16.6219 3.16669 16.7903 3.57343 16.7903 3.99754V11.993Z" stroke="#0F1729" stroke-width="1.5991" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div data-layer="Heading 3 → Slack" className="Heading3Slack left-[70.04px] top-[26.82px] absolute justify-center text-slate-900 text-base font-normal font-['Inter Tight'] leading-6">Slack</div>
                <div data-layer="Background+Border" className="BackgroundBorder w-20 h-4 left-[121px] top-[29.30px] absolute bg-red-500 rounded-full outline outline-1 outline-offset-[-0.96px] outline-gray-500/0">
                  <div data-layer="Disconnected" className="Disconnected left-[11px] top-[2px] absolute justify-center text-neutral-50 text-[10px] font-normal font-['Inter Tight'] leading-4">Disconnected</div>
                </div>
                <div data-layer="156 messages this month" className="MessagesThisMonth left-[20.15px] top-[72.76px] absolute justify-center text-gray-500 text-sm font-normal font-['Inter Tight'] leading-5">156 messages this month</div>
                <div data-layer="Button" className="Button w-16 h-8 px-2.5 py-[4.76px] left-[468px] top-[90px] absolute bg-emerald-950 rounded-md inline-flex justify-center items-center gap-[4.76px]">
                  <div data-layer="Connect" className="Connect text-center justify-center text-white text-[10px] font-medium font-['Inter Tight']">Connect</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
     
  );
};

export default Integrations;
