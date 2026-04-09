import React from 'react';
import { ThumbsUpIcon, FileTextIcon, PencilLineIcon, ShoppingBagIcon, SealQuestionIcon, MagicWandIcon, NavArrowRightIcon } from '../../../../assets/icons/icons.jsx';
import card1 from '../../../../assets/images/card1.png';
import card2 from '../../../../assets/images/Card2.png';
import card3 from '../../../../assets/images/Card3.png';
import card4 from '../../../../assets/images/Card4.png';

const FeaturesHeader = () => {
    return (
        <section className="w-full bg-[#F5F5F5] py-8 md:py-10 px-5 sm:px-6 md:px-10 xl:px-20 relative z-20">
            <div className="max-w-[1200px] mx-auto mt-10 mb-10">
                {/* Header Content */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-4 md:gap-20 mb-8 md:mb-12">
                    <div className="flex flex-col gap-2 md:gap-3 max-w-[650px]">
                        <span className="text-[#36C180] font-medium text-[1rem] tracking-widest">
                            Our Features
                        </span>
                        <h2 className="text-[#0F172A] text-[2.25rem] font-semibold font-['Inter_Tight'] leading-tight md:leading-[1.1] tracking-tight mb-4 md:mb-6">
                            AI Built for Business Workflows
                        </h2>
                    </div>

                    <div className="max-w-[520px] pt-1 md:pt-10">
                        <p className="text-[#64748B] text-[1rem] leading-[1.6] font-sans">
                            Our platform enables teams to build AI agents that understand company knowledge, respond accurately, and automate repetitive conversations.
                        </p>
                    </div>
                </div>

                {/* Features Cards Container */}
                <div className="flex flex-col justify-start items-start gap-8">
                    {/* Knowledge-Powered Training Card */}
                    <div className="w-full lg:w-[1200px] h-auto lg:h-80 relative bg-white rounded-3xl outline outline-1 outline-offset-[-1px] outline-slate-200 overflow-hidden">
                        <div className="flex flex-col lg:block justify-start items-start gap-4 lg:gap-8 p-6 lg:p-0">
                            <div className="w-full lg:w-[533px] lg:absolute lg:left-[40px] lg:top-[111px]">
                                <h3 className="w-full justify-start text-slate-900 text-[1.5rem] font-semibold font-['Inter_Tight'] leading-7 tracking-tight">
                                    Knowledge-Powered Training
                                </h3>
                                <p className="w-[508px] justify-start text-slate-500 text-[0.875rem] font-normal font-['Inter_Tight'] leading-5 tracking-wide">
                                    Unleash your creativity and engage your audience! Whether you're crafting<br/> articles or sharing on social media, develop content that leaves a lasting<br/> impression on people.
                                </p>
                            </div>
                            <div className="w-full lg:w-96 lg:h-72 lg:absolute lg:left-[680.15px] lg:top-[36px] bg-gray-100 rounded-tl-[19.21px] rounded-tr-[19.21px] border-l-[0.80px] border-r-[0.80px] border-t-[0.80px] border-slate-200 overflow-hidden">
                                <img
                                    src={card1}
                                    alt="Knowledge-Powered Training"
                                    className="w-full h-full object-contain rounded-tl-[19.21px] rounded-tr-[19.21px]"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Multi-Channel Deployment Card */}
                    <div className="w-full lg:w-[1200px] h-auto lg:h-80 relative bg-white rounded-3xl outline outline-1 outline-offset-[-1px] outline-slate-200 overflow-hidden">
                        <div className="flex flex-col lg:block justify-start items-start gap-4 lg:gap-8 p-6 lg:p-0">
                            <div className="w-full lg:w-[475px] lg:absolute lg:left-[627px] lg:top-[120px]">
                                <h3 className="w-full justify-start text-slate-900 text-[1.5rem] font-semibold font-['Inter_Tight'] leading-7 tracking-tight">
                                    Multi-Channel Deployment
                                </h3>
                                <p className="w-[475px] justify-start text-slate-500 text-[0.875rem] font-normal font-['Inter_Tight'] leading-6">
                                    Deploy agents across web chat, Slack, email, or integrate via API. One agent,<br/> everywhere your team works.
                                </p>
                            </div>
                            <div className="w-full lg:w-96 lg:h-72 lg:absolute lg:left-[93.15px] lg:top-[36px] bg-gray-100 rounded-tl-[19.21px] rounded-tr-[19.21px] border-l-[0.80px] border-r-[0.80px] border-t-[0.80px] border-slate-200 overflow-hidden">
                                <img
                                    src={card2}
                                    alt="Multi-Channel Deployment"
                                    className="w-full h-full object-contain rounded-tl-[19.21px] rounded-tr-[19.21px]"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Real-Time Analytics Card */}
                    <div className="w-full lg:w-[1200px] h-auto lg:h-80 relative bg-white rounded-3xl outline outline-1 outline-offset-[-1px] outline-slate-200 overflow-hidden">
                        <div className="flex flex-col lg:block justify-start items-start gap-4 lg:gap-8 p-6 lg:p-0">
                            <div className="w-full lg:w-[533px] lg:absolute lg:left-[40px] lg:top-[119.50px]">
                                <h3 className="w-full justify-start text-slate-900 text-[1.5rem] font-semibold font-['Inter_Tight'] leading-7 tracking-tight">
                                    Real-Time Analytics
                                </h3>
                                <p className="w-[508px] justify-start text-slate-500 text-[0.875rem] font-normal font-['Inter_Tight'] leading-6">
                                    Track conversations, measure performance, and gain insights into how your agents <br/> are performing across all touchpoints.
                                </p>
                            </div>
                            <div className="w-full lg:w-96 lg:h-72 lg:absolute lg:left-[680.15px] lg:top-[36px] bg-gray-100 rounded-tl-[19.21px] rounded-tr-[19.21px] border-l-[0.80px] border-r-[0.80px] border-t-[0.80px] border-slate-200 overflow-hidden">
                                <img
                                    src={card4}
                                    alt="Real-Time Analytics"
                                    className="w-full h-full object-contain rounded-tl-[19.21px] rounded-tr-[19.21px]"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Secure & Compliant Card */}
                    <div className="w-full lg:w-[1200px] h-auto lg:h-80 relative bg-white rounded-3xl outline outline-1 outline-offset-[-1px] outline-slate-200 overflow-hidden">
                        <div className="flex flex-col lg:block justify-start items-start gap-4 lg:gap-8 p-6 lg:p-0">
                            <div className="w-full lg:w-[533px] lg:absolute lg:left-[40px] lg:top-[119.50px]">
                                <h3 className="w-full justify-start text-slate-900 text-[1.5rem] font-semibold font-['Inter_Tight'] leading-7 tracking-tight">
                                    Secure & Compliant
                                </h3>
                                <p className="w-[508px] justify-start text-slate-500 text-[0.875rem] font-normal font-['Inter_Tight'] leading-6">
                                    Enterprise-grade security with SOC 2 compliance, data encryption, and role-based access controls built in from day one.
                                </p>
                            </div>
                            <div className="w-full lg:w-96 lg:h-72 lg:absolute lg:left-[680.15px] lg:top-[36px] bg-gray-100 rounded-tl-[19.21px] rounded-tr-[19.21px] border-l-[0.80px] border-r-[0.80px] border-t-[0.80px] border-slate-200 overflow-hidden">
                                <img
                                    src={card3}
                                    alt="Secure & Compliant"
                                    className="w-full h-full object-contain rounded-tl-[19.21px] rounded-tr-[19.21px]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesHeader;
