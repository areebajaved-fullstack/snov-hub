import React from "react";

const PerformanceSection = () => {
  const performanceMetrics = [
    {
      value: "94%",
      label: "Response Accuracy",
      description: "Average across all deployed agents"
    },
    {
      value: "0.8s",
      label: "Avg Response Time",
      description: "Lightning-fast AI responses"
    },
    {
      value: "60%",
      label: "Ticket Deflection",
      description: "Automated resolution rate"
    },
    {
      value: "10x",
      label: "ROI Improvement",
      description: "Compared to manual support"
    }
  ];

  return (
    <section aria-label="Performance metrics" className="w-full bg-white h-auto min-h-[400px] lg:h-[474px] relative overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 xl:px-28 h-full flex flex-col justify-center items-center py-10 xs:py-12 sm:py-16 lg:py-20">
        <div className="text-center mb-6 xs:mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-slate-900 text-2xl xs:text-3xl sm:text-4xl lg:text-[2.25rem] font-semibold font-geist leading-tight lg:leading-[52.80px]">
            Performance That Speaks for Itself
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-5 sm:gap-6 lg:gap-8 w-full max-w-6xl">
          {performanceMetrics.map((metric, index) => (
            <div
              key={index}
              className="w-full h-auto min-h-[140px] lg:h-[176px] bg-[#032125]/5 rounded-xl xs:rounded-2xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-center items-center gap-2 xs:gap-3 p-4 xs:p-5 lg:p-6"
            >
              <div className="w-full h-auto mb-1 flex justify-center items-center">
                <div className="text-emerald-400 text-3xl xs:text-4xl sm:text-4xl lg:text-5xl font-semibold font-geist leading-none">
                  {metric.value}
                </div>
              </div>
              <div className="w-full h-auto flex justify-center items-center">
                <div className="text-slate-900 text-sm xs:text-base lg:text-base font-medium font-primary leading-tight tracking-wide text-center">
                  {metric.label}
                </div>
              </div>
              <div className="w-full h-auto flex justify-center items-center px-2">
                <div className="text-slate-400 text-xs lg:text-xs font-normal font-primary leading-normal tracking-wide text-center">
                  {metric.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PerformanceSection;
