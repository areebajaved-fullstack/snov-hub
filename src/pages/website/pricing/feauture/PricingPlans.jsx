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
    <div className="w-full bg-white px-4 sm:px-6 lg:px-16 xl:px-28 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 lg:gap-8 mb-8 lg:mb-10">
          <div className="flex flex-col gap-4">
            <h2 className="text-slate-900 text-2xl sm:text-3xl lg:text-4xl font-semibold font-['Geist'] leading-tight tracking-tight">
              Choose your plan
            </h2>
            <p className="text-slate-500 text-sm sm:text-base font-normal font-['Inter_Tight'] leading-6 tracking-wide max-w-lg">
              Choose a plan that fits your budget and scales your AI infrastructure.
            </p>
          </div>
          
          {/* Toggle Switch */}
          <div className="flex p-1.5 bg-gray-100 rounded-2xl outline outline-1 outline-offset-[-1px] outline-slate-200 gap-3">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-4 sm:px-6 py-2 rounded-xl flex justify-center items-center gap-2 transition-colors ${
                !isYearly 
                  ? 'bg-white text-slate-900 shadow-sm' 
                  : 'text-slate-600'
              }`}
            >
              <span className="text-sm sm:text-base font-semibold font-['Inter_Tight'] leading-6 tracking-wide">
                Monthly
              </span>
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-4 sm:px-6 py-2 rounded-xl flex justify-center items-center gap-2 transition-colors ${
                isYearly 
                  ? 'bg-emerald-950 text-white' 
                  : 'text-slate-600'
              }`}
            >
              <span className="text-sm sm:text-base font-semibold font-['Inter_Tight'] leading-6 tracking-wide">
                Yearly
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`px-6 sm:px-8 lg:px-10 py-6 bg-white rounded-3xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start gap-6 ${
                plan.popular ? 'ring-2 ring-emerald-950/10 shadow-lg' : ''
              }`}
            >
              <div className="flex flex-col justify-start items-start gap-4 w-full">
                <div className="w-full flex flex-col justify-start items-start gap-4">
                  <div className="w-full flex flex-col justify-start items-start gap-4">
                    <div className="w-full flex justify-between items-center">
                      <div className={`px-3 py-2 ${getColorClasses(plan.color, 'bg')} rounded-lg flex justify-center items-center gap-2`}>
                        <span className={`${getColorClasses(plan.color, 'text')} text-sm sm:text-base font-medium font-['Inter_Tight'] leading-6 tracking-wide`}>
                          {plan.name}
                        </span>
                      </div>
                      {plan.popular && (
                        <span className="text-indigo-400 text-sm sm:text-base font-semibold font-['Inter_Tight'] leading-6 tracking-wide">
                          Most Popular
                        </span>
                      )}
                    </div>
                    <p className="w-full text-slate-500 text-sm font-normal font-['Inter_Tight'] leading-5 tracking-wide">
                      {plan.description}
                    </p>
                  </div>
                  <div className="flex items-end gap-2">
                    <span className="text-slate-900 text-2xl sm:text-3xl font-semibold font-['Geist'] leading-9 tracking-tight">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-slate-500 text-sm font-normal font-['Inter_Tight'] leading-5 tracking-wide">
                        {plan.period}
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="w-full h-0 outline outline-1 outline-offset-[-0.50px] outline-slate-200"></div>
                
                <div className="flex flex-col justify-start items-start gap-4 w-full">
                  <span className="text-slate-900 text-base font-normal font-['Inter_Tight'] leading-6 tracking-wide">
                    {index === 0 ? 'Features' : index === 1 ? 'Everything in Starter, plus:' : 'Everything in Team, plus:'}
                  </span>
                  <div className="flex flex-col justify-start items-start gap-4 w-full">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex justify-start items-center gap-4">
                        <div className="relative flex-shrink-0">
                          <CheckIcon />
                        </div>
                        <span className="text-slate-900 text-sm sm:text-base font-normal font-['Inter_Tight'] leading-6 tracking-wide">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <button
                className={`w-full px-4 py-3.5 rounded-xl inline-flex justify-center items-center gap-2 transition-colors ${
                  plan.buttonType === 'primary'
                    ? 'bg-emerald-950 text-white hover:bg-emerald-900'
                    : 'outline outline-1 outline-offset-[-1px] outline-slate-300 text-slate-900 hover:bg-slate-50'
                }`}
              >
                <span className="text-base sm:text-lg font-semibold font-['Inter_Tight'] leading-7 tracking-wide">
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
