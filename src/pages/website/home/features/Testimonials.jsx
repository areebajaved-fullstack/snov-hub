import React from 'react';

const Testimonials = () => {
    const testimonials = [
        {
            name: 'Alex Scott',
            handle: '@alexscott',
            text: 'We deployed our first AI agent in under 2 hours. It\'s now handling 60% of our support tickets automatically. Game changer for our team.',
            avatar: 'https://ui-avatars.com/api/?name=Alex+Scott&background=random'
        },
        {
            name: 'Emily Parker',
            handle: '@iamemily',
            text: 'By transforming conversational data into actionable insights, we have successfully pinpointed critical knowledge gaps in our documentation and accelerated product innovation based on actual user interactions and real-world feedback.',
            avatar: 'https://ui-avatars.com/api/?name=Emily+Parker&background=random'
        },
        {
            name: 'Lisa K.',
            handle: '@lisaaa',
            text: 'The multi-channel deployment saved us weeks of development time. Same agent running on our website, Slack, and email support. Brilliant.',
            avatar: 'https://ui-avatars.com/api/?name=Lisa+K&background=random'
        },
        {
            name: 'Maria L.',
            handle: '@marialucia',
            text: 'Analytics dashboard gives us clear visibility into what customers are asking. We\'ve identified gaps in our documentation and improved our product based on real user questions.',
            avatar: 'https://ui-avatars.com/api/?name=Maria+L&background=random'
        },
        {
            name: 'Sarah William',
            handle: '@sarah',
            text: 'Best part? The agents actually learn and improve. Response accuracy has gone from 70% to 94% in just three months of live conversations.',
            avatar: 'https://ui-avatars.com/api/?name=Sarah+William&background=random'
        },
        {
            name: 'Ryan B.',
            handle: '@ryanbomeo',
            text: 'The knowledge integration is seamless. Our agent pulls from Notion, Confluence, and our internal docs without any issues. Customers get accurate answers instantly.',
            avatar: 'https://ui-avatars.com/api/?name=Ryan+B&background=random'
        }
    ];

    return (
        <section className="w-full bg-[#f3f4f6] py-16 md:py-24 px-5 sm:px-6 md:px-10 xl:px-28 font-primary overflow-hidden">
            <div className="max-w-[1440px] mx-auto">
                
                {/* Header */}
                <div className="flex flex-col items-center text-center gap-4 mb-16">
                    <span className="text-emerald-500 text-base font-medium tracking-wide">Testimonials</span>
                    <h2 className="text-slate-900 text-[2.25rem] font-bold font-geist tracking-tight">Trusted by Modern Teams</h2>
                    <p className=" text-slate-500 text-[1rem] max-w-[700px] leading-relaxed">
                        See how teams are transforming their customer support and internal operations with AI agents.
                    </p>
                </div>

                {/* Grid Layout - Masonry-ish style with 3 columns */}
                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    {testimonials.map((item, idx) => (
                        <div 
                            key={idx} 
                            className="break-inside-avoid bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-6 hover:shadow-md transition-all duration-300 min-h-[280px] h-full"
                        >
                            <div className="flex items-center gap-3">
                                <img 
                                    src={item.avatar} 
                                    alt={item.name} 
                                    className="w-12 h-12 rounded-full border border-slate-100"
                                />
                                <div className="flex flex-col">
                                    <span className="text-slate-900 text-base font-bold font-geist">{item.name}</span>
                                    <span className="text-slate-500 text-sm font-normal">{item.handle}</span>
                                </div>
                            </div>
                            <p className="text-slate-600 text-[15px] leading-relaxed">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
