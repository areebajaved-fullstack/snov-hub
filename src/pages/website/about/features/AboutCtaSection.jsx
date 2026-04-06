import React from "react";

const AboutCtaSection = () => {
  return (
    <section className="w-full bg-slate-900 py-16 sm:py-20">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-emerald-500/10 via-blue-500/10 to-indigo-500/10 border border-white/10 p-8 sm:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <div className="text-emerald-400 text-sm font-medium uppercase tracking-widest">
                Get Started
              </div>
              <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
                Build your first AI agent today
              </h2>
              <p className="mt-4 text-white/70 leading-7">
                Start with your knowledge, train the behavior, and deploy
                workflows for your team.
              </p>
            </div>

            <div className="flex gap-3">
              <button className="px-8 py-4 rounded-xl bg-white text-slate-900 font-semibold hover:bg-slate-100 transition-colors">
                Contact Sales
              </button>
              <button className="px-8 py-4 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors">
                View Pricing
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCtaSection;

