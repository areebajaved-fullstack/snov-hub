import React from "react";

const AboutStorySection = () => {
  return (
    <section className="w-full bg-white py-16 sm:py-20">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl font-semibold text-slate-900">
              Our Story
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              We help teams turn knowledge into intelligent AI workflows.
              Our focus is reliability, speed, and a smooth experience for
              every user.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
            <div className="space-y-4">
              <div>
                <div className="text-slate-900 font-semibold">
                  Clarity first
                </div>
                <div className="text-slate-600 leading-6 mt-1">
                  Build agents that respond accurately and consistently.
                </div>
              </div>
              <div>
                <div className="text-slate-900 font-semibold">
                  Fast setup
                </div>
                <div className="text-slate-600 leading-6 mt-1">
                  Get from data to deployment with minimal friction.
                </div>
              </div>
              <div>
                <div className="text-slate-900 font-semibold">
                  Built for teams
                </div>
                <div className="text-slate-600 leading-6 mt-1">
                  Shared workflows, approvals, and easy monitoring.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStorySection;
