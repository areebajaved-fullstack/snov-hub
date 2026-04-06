import React from 'react';
import containerImg from '../../../../assets/images/Container.png';


const FeaturesHeader = () => {
    return (
        <section className="w-full bg-neutral-50 py-8 md:py-10 px-5 sm:px-6 md:px-10 xl:px-20 relative z-20">
            <div className="max-w-[1440px] mx-auto">
                {/* Header Content */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-4 md:gap-20 mb-8 md:mb-12">
                    <div className="flex flex-col gap-2 md:gap-3 max-w-[650px]">
                        <span className="text-[#22C55E] font-medium text-[11px] md:text-[12px] tracking-widest uppercase">
                            Our Features
                        </span>
                        <h2 className="text-[#0F172A] text-[24px] md:text-[36px] font-semibold font-primary leading-tight md:leading-[1.1] tracking-tight">
                            AI Built for Business <br className="hidden lg:block" /> Workflows
                        </h2>
                    </div>

                    <div className="max-w-[520px] pt-1 md:pt-10">
                        <p className="text-[#64748B] text-[14px] md:text-[16px] leading-[1.6] font-sans">
                            Our platform enables teams to build AI agents that understand company knowledge, respond accurately, and automate repetitive conversations.
                        </p>
                    </div>
                </div>

                {/* Container Image */}
                <div className="w-full overflow-hidden flex justify-center items-center">
                    <img
                        src={containerImg}
                        alt="Features Container"
                        className="w-full h-auto object-contain"
                    />
                </div>
            </div>
        </section>
    );
};

export default FeaturesHeader;
