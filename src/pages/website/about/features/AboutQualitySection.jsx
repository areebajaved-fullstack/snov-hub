import React from "react";

const AboutQualitySection = () => {
  return (
    <section className="w-full bg-white py-16 sm:py-20">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <div className="text-sm font-medium uppercase tracking-wider text-emerald-600">
              Quality
            </div>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900 md:text-4xl">
              Built for dependable agent performance
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Our system helps your agents stay accurate, safe, and aligned
              with your organization&apos;s knowledge and goals.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              {
                title: "Consistent outputs",
                desc: "Guardrails and templates to reduce variation.",
              },
              {
                title: "Reliable knowledge",
                desc: "Use curated data sources for better answers.",
              },
              {
                title: "Scalable workflows",
                desc: "Deploy across teams with shared monitoring.",
              },
              {
                title: "Fast feedback",
                desc: "Improve results with analytics and evaluation.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-100 bg-slate-50 p-6"
              >
                <div className="text-slate-900 font-semibold">
                  {item.title}
                </div>
                <div className="text-slate-600 mt-2 leading-6">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutQualitySection;

