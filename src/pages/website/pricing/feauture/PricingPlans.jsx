import React, { useState } from 'react';
import { CheckIcon } from '../../../../assets/icons/icons.jsx';

const PricingPlans = () => {
  const [isYearly, setIsYearly] = useState(true);

  const plans = [
    {
      name: 'Starter',
      color: 'purple',
      description: 'Perfect for small teams testing AI automation.',
      price: isYearly ? '$240' : '$20',
      period: isYearly ? '/Year' : '/month',
      features: [
        '1 AI Agent',
        '1,000 conversations/month',
        'Basic analytics',
        'Email support',
        'Web chat integration',
        '20+ Tones'
      ],
      buttonText: 'Choose Plan',
      buttonType: 'secondary'
    },
    {
      name: 'Professional',
      color: 'sky',
      description: 'Ideal for growing teams scaling AI operations.',
      price: isYearly ? '$468' : '$39',
      period: isYearly ? '/Year' : '/month',
      popular: true,
      features: [
        '5 AI Agents',
        '10,000 conversations/month',
        'Advanced analytics',
        'Priority support',
        'Multi-channel deployment',
        'Custom integrations'
      ],
      buttonText: 'Choose Plan',
      buttonType: 'primary'
    },
    {
      name: 'Enterprise',
      color: 'emerald',
      description: 'Custom infrastructure with dedicated support.',
      price: 'Custom',
      period: '',
      features: [
        'Unlimited AI Agents',
        'Unlimited conversations',
        'Custom analytics & reporting',
        'Dedicated support team',
        'On-premise deployment option',
        'SLA guarantees'
      ],
      buttonText: 'Contact Sales',
      buttonType: 'secondary'
    }
  ];

  const getColorClasses = (color, type) => {
    const colors = {
      purple: {
        bg: 'bg-purple-500/10',
        text: 'text-purple-500'
      },
      sky: {
        bg: 'bg-sky-500/10',
        text: 'text-sky-500'
      },
      emerald: {
        bg: 'bg-emerald-500/10',
        text: 'text-emerald-500'
      }
    };
    return colors[color]?.[type] || '';
  };

  return (
    <div className="w-full bg-white px-3 xs:px-4 sm:px-6 lg:px-16 xl:px-28 py-8 xs:py-10 sm:py-12 lg:py-16 xl:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-4 xs:gap-5 sm:gap-6 lg:gap-8 mb-6 xs:mb-7 sm:mb-8 lg:mb-10">
          <div className="flex flex-col gap-4">
            <h2 className="text-slate-900 text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-semibold font-['Inter_Tight'] leading-tight tracking-tight">
              Choose your plan
            </h2>
            <p className="text-slate-500 text-xs xs:text-sm sm:text-base font-normal font-['Inter_Tight'] leading-5 xs:leading-6 tracking-wide max-w-lg">
              Choose a plan that fits your budget and scales your AI infrastructure.
            </p>
          </div>
          
          {/* Toggle Switch */}
          <div className="flex p-1 xs:p-1.5 bg-gray-100 rounded-xl xs:rounded-2xl outline outline-1 outline-offset-[-1px] outline-slate-200 gap-2 xs:gap-3">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-3 xs:px-4 sm:px-6 py-1.5 xs:py-2 rounded-lg xs:rounded-xl flex justify-center items-center gap-1.5 xs:gap-2 transition-colors ${
                !isYearly 
                  ? 'bg-white text-slate-900 shadow-sm' 
                  : 'text-slate-600'
              }`}
            >
              <span className="text-xs xs:text-sm sm:text-base font-semibold font-['Inter_Tight'] leading-5 xs:leading-6 tracking-wide">
                Monthly
              </span>
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-3 xs:px-4 sm:px-6 py-1.5 xs:py-2 rounded-lg xs:rounded-xl flex justify-center items-center gap-1.5 xs:gap-2 transition-colors ${
                isYearly 
                  ? 'bg-emerald-950 text-white' 
                  : 'text-slate-600'
              }`}
            >
              <span className="text-xs xs:text-sm sm:text-base font-semibold font-['Inter_Tight'] leading-5 xs:leading-6 tracking-wide">
                Yearly
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-5 sm:gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`px-4 xs:px-5 sm:px-6 lg:px-8 xl:px-10 py-4 xs:py-5 sm:py-6 bg-white rounded-2xl xs:rounded-3xl outline outline-1 outline-offset-[1px] outline-slate-200 flex flex-col justify-start items-start gap-4 xs:gap-5 sm:gap-6 ${
                plan.popular ? 'ring-2 ring-emerald-950/10 shadow-lg' : ''
              }`}
            >
              <div className="flex flex-col justify-start items-start gap-4 w-full">
                <div className="w-full flex flex-col justify-start items-start gap-4">
                  <div className="w-full flex flex-col justify-start items-start gap-4">
                    <div className="w-full flex justify-between items-center">
                      <div className={`px-3 py-2 ${getColorClasses(plan.color, 'bg')} rounded-lg flex justify-center items-center gap-2`}>
                        <span className={`${getColorClasses(plan.color, 'text')} text-xs xs:text-sm sm:text-base font-medium font-['Inter_Tight'] leading-5 xs:leading-6 tracking-wide`}>
                          {plan.name}
                        </span>
                      </div>
                      {plan.popular && (
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8378F7] to-[#EA86B4] text-xs xs:text-sm sm:text-base font-semibold font-['Inter_Tight'] leading-5 xs:leading-6 tracking-wide">
                          Most Popular
                        </span>
                      )}
                    </div>
                    <p className="w-full text-slate-500 text-xs xs:text-sm font-normal font-['Inter_Tight'] leading-4 xs:leading-5 tracking-wide">
                      {plan.description}
                    </p>
                  </div>
                  <div className="flex items-end gap-2">
                    <span className="text-slate-900 text-xl xs:text-2xl sm:text-3xl font-semibold font-['Inter_Tight'] leading-8 xs:leading-9 tracking-tight">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-slate-500 text-xs xs:text-sm font-normal font-['Inter_Tight'] leading-4 xs:leading-5 tracking-wide">
                        {plan.period}
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="w-full h-0 outline outline-1 outline-offset-[-1px] outline-slate-200"></div>
                
                <div className="flex flex-col justify-start items-start gap-4 w-full">
                  <span className="text-slate-900 text-sm xs:text-base font-normal font-['Inter_Tight'] leading-5 xs:leading-6 tracking-wide">
                    {index === 0 ? 'Features' : index === 1 ? 'Everything in Starter, plus:' : 'Everything in Team, plus:'}
                  </span>
                  <div className="flex flex-col justify-start items-start gap-4 w-full">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex justify-start items-center gap-4">
                        <div className="relative flex-shrink-0">
                          <CheckIcon />
                        </div>
                        <span className="text-slate-900 text-xs xs:text-sm sm:text-base font-normal font-['Inter_Tight'] leading-4 xs:leading-6 tracking-wide">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <button
                className={`w-full px-3 xs:px-4 py-2.5 xs:py-3.5 rounded-lg xs:rounded-xl inline-flex justify-center items-center gap-1.5 xs:gap-2 transition-colors ${
                  plan.buttonType === 'primary'
                    ? 'bg-emerald-950 text-white hover:bg-emerald-900'
                    : 'outline outline-1 outline-offset-[-1px] outline-slate-300 text-slate-900 hover:bg-slate-50'
                }`}
              >
                <span className="text-sm xs:text-base sm:text-lg font-semibold font-['Inter_Tight'] leading-6 xs:leading-7 tracking-wide">
                  {plan.buttonText}
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
