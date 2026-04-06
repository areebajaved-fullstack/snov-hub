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
    <section aria-label="Performance metrics" className="w-full bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-slate-900 text-2xl sm:text-3xl lg:text-4xl font-semibold font-geist leading-tight lg:leading-[52.80px]">
            Performance That Speaks for Itself
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {performanceMetrics.map((metric, index) => (
            <div
              key={index}
              className="w-full h-52 pt-6 sm:pt-8 bg-[#032125]/5 rounded-2xl outline outline-1 outline-offset-[-1px] outline-slate-200 inline-flex flex-col justify-start items-center gap-2"
            >
              <div className="w-full h-14 relative flex justify-center items-center">
                <div className="text-emerald-400 text-3xl sm:text-4xl lg:text-5xl font-semibold font-geist leading-none">
                  {metric.value}
                </div>
              </div>
              <div className="w-full h-6 relative flex justify-center items-center">
                <div className="text-slate-900 text-sm sm:text-base lg:text-base font-medium font-primary leading-6 tracking-wide text-center">
                  {metric.label}
                </div>
              </div>
              <div className="w-full h-5 relative flex justify-center items-center px-2 sm:px-4">
                <div className="text-slate-400 text-xs sm:text-xs lg:text-xs font-normal font-primary leading-5 tracking-wide text-center">
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
