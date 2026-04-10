import React, { useState } from 'react';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('Yearly');

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small teams testing AI automation.',
      price: billingCycle === 'Yearly' ? '240' : '24',
      tagColor: 'bg-[#F5F3FF] text-[#8B5CF6]',
      features: [
        '1 AI Agent',
        '1,000 conversations/month',
        'Basic analytics',
        'Email support',
        'Web chat integration',
        '20+ Tones',
      ],
      buttonText: 'Choose Plan',
      buttonStyle: 'border border-slate-200 text-slate-900 bg-white hover:bg-slate-50',
    },
    {
      name: 'Professional',
      description: 'Ideal for growing teams scaling AI operations.',
      price: billingCycle === 'Yearly' ? '468' : '48',
      tagColor: 'bg-[#EFF6FF] text-[#3B82F6]',
      isPopular: true,
      features: [
        'Everything in Starter, plus:',
        '5 AI Agents',
        '10,000 conversations/month',
        'Advanced analytics',
        'Priority support',
        'Multi-channel deployment',
        'Custom integrations',
      ],
      buttonText: 'Choose Plan',
      buttonStyle: 'bg-[#061A22] text-white hover:bg-black',
    },
    {
      name: 'Enterprise',
      description: 'Custom infrastructure with dedicated support.',
      price: 'Custom',
      tagColor: 'bg-[#F0FDF4] text-[#10B981]',
      features: [
        'Everything in Professional, plus:',
        'Unlimited AI Agents',
        'Unlimited conversations',
        'Custom analytics & reporting',
        'Dedicated support team',
        'On-premise deployment option',
        'SLA guarantees',
      ],
      buttonText: 'Contact Sales',
      buttonStyle: 'border border-slate-200 text-slate-900 bg-white hover:bg-slate-50',
    },
  ];

  return (
    <section className="w-full bg-white py-12 sm:py-14 md:py-16 lg:py-20 px-4 sm:px-6 md:px-10 font-sans overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 md:gap-10 mb-8 md:mb-12">
          <div className="flex flex-col gap-3 md:gap-4 max-w-[500px] md:max-w-[600px]">
            <span className="text-emerald-500 text-sm md:text-base font-medium tracking-wide">Pricing</span>
            <h2 className="text-slate-900 text-[24px] sm:text-[28px] md:text-4xl font-bold font-sans tracking-tight">Choose your plan</h2>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed tracking-wide">
              Choose a plan that fits your budget and scales your AI infrastructure.
            </p>
          </div>

          {/* Toggle Switch */}
          <div className="p-3 sm:p-4 md:p-1.5 bg-gray-100 rounded-2xl border border-slate-200 flex gap-2">
            {['Monthly', 'Yearly'].map((cycle) => (
              <button
                key={cycle}
                onClick={() => setBillingCycle(cycle)}
                className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  billingCycle === cycle
                    ? 'bg-emerald-950 text-white shadow-sm'
                    : 'text-slate-900 hover:bg-white/50'
                }`}
              >
                {cycle}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-[24px] sm:rounded-[32px] border border-gray-200 p-3 sm:p-4 md:p-6 xl:p-8 flex flex-col justify-between hover:shadow-xl transition-all duration-300 relative group w-full sm:w-[384px]`}
            >
              <div className="flex flex-col gap-3">
                {/* Plan Identity */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center h-6">
                    <div className={`px-2.5 py-1.5 rounded-lg text-[13px] font-semibold tracking-wide ${plan.tagColor}`}>
                      {plan.name}
                    </div>
                    {plan.isPopular && (
                        <span className="text-[#D946EF] text-[13px] font-semibold tracking-tight">Most Popular</span>
                    )}
                  </div>
                  <p className="text-[#64748B] text-[13px] sm:text-[14px] leading-relaxed min-h-[35px]">{plan.description}</p>
                  
                  <div className="flex items-baseline gap-1 mt-2">
                    <span className="text-[#0F172A] text-[32px] sm:text-[40px] font-bold font-sans tracking-tight">
                        {plan.price !== 'Custom' && '$'}{plan.price}
                    </span>
                    {plan.price !== 'Custom' && (
                        <span className="text-[#64748B] text-[14px] sm:text-[15px] font-medium">/{billingCycle === 'Yearly' ? 'Year' : 'Mon'}</span>
                    )}
                  </div>
                </div>

                <div className="w-full h-[1px] bg-slate-200"></div>

                {/* Features List */}
                <div className="space-y-3">
                  <h4 className="text-[#0F172A] text-[15px] font-semibold">Features</h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-4">
                        <CheckIcon className="w-5 h-5 text-[#0F172A] flex-shrink-0 mt-0.5" />
                        <span className={`text-[#334155] text-[14px] ${fIdx === 0 && (idx === 1 || idx === 2) ? 'font-semibold' : 'font-medium'}`}>
                            {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-auto pt-4 sm:pt-6">
                <button className={`w-full py-3 sm:py-3.5 rounded-xl font-bold text-[14px] sm:text-[16px] transition-all transform group-hover:scale-[1.01] shadow-sm ${plan.buttonStyle}`}>
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CheckIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.3974 7.14739L9.39738 19.1474C9.29192 19.2527 9.14895 19.3119 8.99988 19.3119C8.85082 19.3119 8.70785 19.2527 8.60239 19.1474L3.35238 13.8974C3.25302 13.7908 3.19893 13.6497 3.2015 13.504C3.20407 13.3583 3.26311 13.2192 3.36617 13.1162C3.46923 13.0131 3.60827 12.9541 3.75399 12.9515C3.89972 12.9489 4.04075 13.003 4.14739 13.1024L8.99988 17.9539L20.6024 6.35239C20.709 6.25303 20.8501 6.19893 20.9958 6.2015C21.1415 6.20407 21.2805 6.26311 21.3836 6.36617C21.4867 6.46923 21.5457 6.60827 21.5483 6.75399C21.5508 6.89972 21.4967 7.04075 21.3974 7.14739Z" fill="currentColor"/>
  </svg>
);

export default Pricing;
