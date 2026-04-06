import React from 'react';
import { ArrowRightIcon, CheckCircleIcon, LightningIcon, CircleIcon, GlobeIcon, MessageIcon } from '../../../../assets/icons/icons.jsx';

const BuildSection = () => {
  const stats = [
    {
      icon: LightningIcon,
      number: '5',
      label: 'Minutes to Setup',
      color: 'bg-green-100'
    },
    {
      icon: CircleIcon,
      number: '3',
      label: 'Simple Steps',
      color: 'bg-green-100'
    },
    {
      icon: GlobeIcon,
      number: '10+',
      label: 'Channels',
      color: 'bg-green-100'
    },
    {
      icon: MessageIcon,
      number: '24/7',
      label: 'Automated Support',
      color: 'bg-green-100'
    }
  ];

  return (
    <div className="w-full bg-white px-4 sm:px-6 lg:px-16 xl:px-32 py-16 sm:py-20 lg:py-24 border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 space-y-6 sm:space-y-8">
            <div className="space-y-4">
              <h2 className="text-slate-900 text-3xl sm:text-4xl lg:text-5xl font-semibold font-['Geist'] leading-tight lg:leading-[52.8px]">
                Build AI Agents in Minutes
              </h2>
              <p className="text-slate-500 text-base sm:text-lg font-normal font-['Inter_Tight'] leading-6 sm:leading-8 max-w-lg">
                From zero to production in three simple steps. No coding required, no complex setup—just upload, configure, and deploy.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <button className="w-full sm:w-40 h-12 bg-emerald-950 rounded-2xl inline-flex justify-center items-center gap-2 hover:bg-emerald-900 transition-colors">
                <span className="text-white text-base font-medium font-['Inter_Tight'] leading-6">Start Free Trial</span>
                <ArrowRightIcon className="w-4 h-4 flex-shrink-0" />
              </button>
              
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="w-5 h-5 flex-shrink-0" />
                <span className="text-slate-500 text-sm font-normal font-['Inter_Tight'] leading-5">No credit card required</span>
              </div>
            </div>
          </div>

          {/* Right Stats Grid */}
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="w-full bg-white rounded-3xl outline outline-[1.26px] outline-offset-[-1.26px] outline-slate-200 p-6 sm:p-8"
                  >
                    <div className="flex flex-col space-y-4">
                      <div className={`w-10 h-10 ${stat.color} rounded-2xl flex items-center justify-center`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      
                      <div className="h-14 flex items-center">
                        <span className="text-slate-900 text-3xl sm:text-4xl font-semibold font-['Inter_Tight'] leading-[54px]">
                          {stat.number}
                        </span>
                      </div>
                      
                      <div className="h-4">
                        <span className="text-slate-500 text-xs font-normal font-['Inter_Tight'] leading-4">
                          {stat.label}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildSection;
