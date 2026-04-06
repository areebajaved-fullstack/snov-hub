import React, { useState } from 'react';

const PricingPlans = () => {
  const [isYearly, setIsYearly] = useState(true);

  const CheckIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.3976 7.14751L9.39763 19.1475C9.29216 19.2528 9.14919 19.312 9.00013 19.312C8.85107 19.312 8.7081 19.2528 8.60263 19.1475L3.35263 13.8975C3.25327 13.7909 3.19918 13.6498 3.20175 13.5041C3.20432 13.3584 3.26335 13.2194 3.36641 13.1163C3.46947 13.0132 3.60851 12.9542 3.75424 12.9516C3.89996 12.9491 4.041 13.0031 4.14763 13.1025L9.00013 17.9541L20.6026 6.35251C20.7093 6.25315 20.8503 6.19905 20.996 6.20163C21.1417 6.2042 21.2808 6.26323 21.3838 6.36629C21.4869 6.46935 21.5459 6.60839 21.5485 6.75412C21.5511 6.89984 21.497 7.04088 21.3976 7.14751Z" fill="#0F172A"/>
    </svg>
  );

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
