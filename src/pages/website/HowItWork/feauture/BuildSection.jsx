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
    <div className="w-full bg-white px-3 xs:px-4 sm:px-6 lg:px-16 xl:px-32 py-8 xs:py-12 sm:py-16 lg:py-20 xl:py-24 border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-4 xs:gap-5 sm:gap-6 lg:gap-8 xl:gap-16 items-center">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 space-y-4 xs:space-y-5 sm:space-y-6 lg:space-y-8">
            <div className="space-y-3 xs:space-y-4 sm:space-y-5">
              <h2 className="text-slate-900 text-2xl xs:text-3xl sm:text-4xl lg:text-[2.25rem] font-semibold font-['Inter_Tight'] leading-tight xs:leading-tight sm:leading-tight lg:leading-tight xl:leading-[52.8px]">
                Build AI Agents in <br/> Minutes
              </h2>
              <p className="text-slate-500 text-sm xs:text-base sm:text-lg font-normal font-['Inter_Tight'] leading-5 xs:leading-6 sm:leading-7 lg:leading-8 max-w-lg">
                From zero to production in three simple steps. No coding required, no complex setup—just upload, configure, and deploy.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 xs:gap-4 sm:gap-5 items-start sm:items-center">
              <button className="w-full sm:w-36 md:w-40 h-10 xs:h-11 sm:h-12 bg-emerald-950 rounded-xl xs:rounded-2xl inline-flex justify-center items-center gap-1.5 xs:gap-2 hover:bg-emerald-900 transition-colors">
                <span className="text-white text-sm xs:text-base sm:text-lg font-medium font-['Inter_Tight'] leading-5 xs:leading-6 sm:leading-7">Start Free Trial</span>
                <ArrowRightIcon className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-4 sm:h-4 flex-shrink-0" />
              </button>
              
              <div className="flex items-center gap-1.5 xs:gap-2">
                <CheckCircleIcon className="w-4 h-4 xs:w-5 xs:h-5 sm:w-5 sm:h-5 flex-shrink-0" />
                <span className="text-slate-500 text-xs xs:text-sm sm:text-base font-normal font-['Inter_Tight'] leading-4 xs:leading-5 sm:leading-6">No credit card required</span>
              </div>
            </div>
          </div>

          {/* Right Stats Grid */}
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-4 xs:gap-5 sm:gap-6 lg:gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="w-full h-[120px] xs:h-[140px] sm:h-[160px] lg:h-[180px] bg-white rounded-2xl xs:rounded-3xl outline outline-[1.26px] outline-offset-[-1.26px] outline-slate-200 p-3 xs:p-4 sm:p-4"
                  >
                    <div className="flex flex-col items-center justify-center space-y-2 xs:space-y-3 sm:space-y-4 h-full text-center xs:text-center sm:text-center lg:text-left lg:items-start lg:justify-start">
                      <div className={`w-9 h-9 xs:w-10 xs:h-10 sm:w-11 sm:h-11 lg:w-10 lg:h-10 bg-[#DCFCE7] rounded-lg xs:rounded-xl sm:rounded-2xl flex items-center justify-center`}>
                        <Icon className="w-4.5 h-4.5 xs:w-5 xs:h-5 sm:w-5.5 sm:h-5.5 lg:w-5 lg:h-5" />
                      </div>
                      
                      <div className="h-11 xs:h-13 sm:h-15 lg:h-14 flex items-center">
                        <span className="text-slate-900 text-2xl xs:text-3xl sm:text-4xl lg:text-4xl font-semibold font-['Inter_Tight'] leading-9 xs:leading-11 sm:leading-14 lg:leading-[54px]">
                          {stat.number}
                        </span>
                      </div>
                      
                      <div className="h-4 xs:h-4 sm:h-4 lg:h-4">
                        <span className="text-slate-500 text-xs xs:text-sm sm:text-sm lg:text-xs font-normal font-['Inter_Tight'] leading-4 xs:leading-5 sm:leading-5">
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
