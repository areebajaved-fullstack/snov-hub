import React from 'react';
import Instagram from '../assets/images/Instagram.png';
import LinkedIn from '../assets/images/LinkedIn.png';
import X from '../assets/images/X.png';
import Facebook from '../assets/images/Facebook.png';
import { FooterLogoIcon } from '../assets/icons/icons.jsx';

const Footer = () => {
    return (
        <section className="w-full h-[709px] bg-[#032125] text-white overflow-hidden font-primary">
            <div className="max-w-[1440px] mx-auto flex flex-col items-center">
                
                {/* CTA Section - Extremely compact and focused */}
                <div className="relative w-full px-5 sm:px-6 md:px-24 pt-12 md:pt-14 pb-14 md:pb-16 flex flex-col items-center justify-center text-center gap-6">
                    {/* The "Hill" Glow effect - Centered tighter */}
                    <div className="absolute top-[193px] left-[-289px] w-[2019px] h-[2019px] bg-gradient-to-b from-[#143034] to-[#143034]/0 rounded-full pointer-events-none z-0"></div>
                    
                    <h2 className="text-white text-[2.5rem] font-bold font-geist leading-tight tracking-tight relative z-10 max-w-[800px]">
                        Write Better, Faster, and <br/> Smarter
                    </h2>

                    <div className="flex flex-col sm:flex-row items-center gap-3 relative z-10">
                        <button className="px-7 py-2.5 bg-[#31C48D] text-white text-base font-semibold rounded-lg flex items-center gap-2 hover:bg-[#26bba9] transition-all">
                            Get Started
                            <ArrowUpRightIcon />
                        </button>
                        <button className="px-7 py-2.5 border border-white/40 text-white text-base font-semibold rounded-lg hover:bg-white/5 transition-all">
                            Schedule Demo
                        </button>
                    </div>
                </div>

                {/* Main Footer Body - High density layout */}
                <div className="w-full px-5 sm:px-6 md:px-28 py-8 flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-20 relative z-10">
                    
                    {/* Left Column */}
                    <div className="flex flex-col gap-4 w-full md:max-w-[400px]">
                        <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 bg-[#31C48D] rounded-lg flex items-center justify-center">
                                <FooterLogoIcon className="w-[28px] h-[26px]" />
                            </div>
                            <span className="text-[#31C48D] text-lg font-bold font-geist tracking-wide">Snov Hub</span>
                        </div>

                        <p className="text-white text-[0.875rem] leading-relaxed max-w-[340px]">
                            Agent AI helps teams build intelligent AI agents powered by their own knowledge. Automate conversations and scale support operations effortlessly.
                        </p>

                        <div className="flex items-center gap-2">
                            <div className="w-[180px] h-[40px] px-3 border border-white/10 bg-white/[0.02] text-[16px] font-normal text-white/80 flex items-center rounded">
                                support@snovhub.com
                            </div>
                            <div className="w-[155px] h-[40px] px-3 border border-white/10 bg-white/[0.02] text-[16px] font-normal text-white/80 flex items-center rounded">
                                +1 (555) 123-4567
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Newsletter */}
                    <div className="flex flex-col gap-3.5 w-full lg:w-[440px]">
                        <h3 className="text-white text-lg tracking-wide">Join Our Newsletter </h3>
                        <div className="flex flex-col sm:flex-row items-center gap-2 w-full">
                            <div className="flex-1 h-10 bg-white/[0.02] border border-transparent rounded-lg px-4 flex items-center w-full">
                                <input 
                                    type="email" 
                                    placeholder="Enter your email" 
                                    className="bg-transparent border-none focus:outline-none text-white text-[13px] w-full h-[48px] placeholder-white/40"
                                />
                            </div>
                            <button className="h-10 px-6 border border-white rounded-lg text-white text-[13px] font-semibold hover:bg-white/5 transition-all w-full sm:w-auto">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar - Minimal padding and gaps */}
                <div className="w-full px-5 sm:px-6 md:px-28 pb-10 md:pb-8 pt-4 flex flex-col md:flex-row justify-between items-start md:items-end gap-10 md:gap-8 relative z-10">
                    <div className="flex flex-col gap-5 md:gap-4 order-2 md:order-1">
                        <div className="flex items-center gap-5 md:gap-4">
                            <a href="#" className="w-6 h-6 text-white/60 hover:text-white transition-colors">
                                <img src={Facebook} alt="Facebook" className="w-full h-full object-contain" />
                            </a>
                            <a href="#" className="w-6 h-6 text-white/60 hover:text-white transition-colors">
                                <img src={Instagram} alt="Instagram" className="w-full h-full object-contain" />
                            </a>
                            <a href="#" className="w-6 h-6 text-white/60 hover:text-white transition-colors">
                                <img src={X} alt="X" className="w-full h-full object-contain" />
                            </a>
                            <a href="#" className="w-6 h-6 text-white/60 hover:text-white transition-colors">
                                <img src={LinkedIn} alt="LinkedIn" className="w-full h-full object-contain" />
                            </a>
                        </div>
                        <p className="text-white text-[11px] md:text-[12px]">
                           "Designed and Developed by Senew Tech"
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-10 sm:gap-16 md:gap-20 order-1 md:order-2 w-full md:w-auto justify-start">
                        <div className="flex flex-col gap-2.5">
                            <h4 className="text-white text-sm font-medium mb-1">Company</h4>
                            <div className="flex flex-col gap-2">
                                <a href="#" className="text-white/40 hover:text-white text-[13px] transition-colors">Careers</a>
                                <a href="#" className="text-white/40 hover:text-white text-[13px] transition-colors">About Us</a>
                                <a href="#" className="text-white/40 hover:text-white text-[13px] transition-colors">Pricing</a>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2.5">
                            <h4 className="text-white text-sm font-medium mb-1">Resources</h4>
                            <div className="flex flex-col gap-2">
                                <a href="#" className="text-white/40 hover:text-white text-[13px] transition-colors">Documentation</a>
                                <a href="#" className="text-white/40 hover:text-white text-[13px] transition-colors">API reference</a>
                                <a href="#" className="text-white/40 hover:text-white text-[13px] transition-colors">Help Center</a>
                                <a href="#" className="text-white/40 hover:text-white text-[13px] transition-colors">Community</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Icons (inline SVG)
const ArrowUpRightIcon = () => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.5 4.07812H6.1875C5.91136 4.07812 5.6875 4.30198 5.6875 4.57812C5.6875 4.85427 5.91136 5.07812 6.1875 5.07812H12.2812L4.20312 13.1562C4.00786 13.3515 4.00786 13.6681 4.20312 13.8633C4.39839 14.0586 4.715 14.0586 4.91026 13.8633L12.9883 5.78516V11.875C12.9883 12.1511 13.2121 12.375 13.4883 12.375C13.7644 12.375 13.9883 12.1511 13.9883 11.875V4.5C13.9883 4.2669 13.7714 4.07812 13.5 4.07812Z" fill="white"/>
    </svg>
);

const MagicWandIcon = ({ className }) => (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.0242 3.25025L17.875 3.72633L21.125 6.97633L22.2737 5.82664C22.7498 6.97582 17.875 3.72633 19.0242 3.25025Z" fill="currentColor" opacity="0.3"/>
        <path d="M15.7737 8.125L8.12504 22.2737C7.40716 22.7492 6.54557 22.7492 5.82769 22.2737L3.72535 20.1734C3.41 18.8108 3.24927 19.0242 3.24927 19.0242L5.82769 22.2737Z" fill="currentColor" opacity="0.5"/>
        <path d="M22.2737 8.125L8.12504 22.2737C7.40716 22.7492 6.54557 22.7492 5.82769 22.2737L3.72535 20.1734C3.25 19.0242 3.25 19.0242 3.25 19.0242L17.875 3.72633C18.4023 3.37398 19.6462 3.37398 20.1734 3.72633L22.2737 5.82664C22.7498 6.35387 22.7498 7.59777 22.2737 8.125ZM21.125 6.97633L19.0237 4.875L15.7737 8.125L17.875 10.2263L21.125 6.97633Z" fill="currentColor"/>
    </svg>
);

const SocialIcon = ({ icon }) => {
    const paths = {
        facebook: "M22.5 12.0386C22.5 6.21833 17.7989 1.5 12 1.5C6.20106 1.5 1.5 6.21833 1.5 12.0386C1.5 16.9807 4.89024 21.1279 9.46362 22.2669V15.2592H7.29852V12.0386H9.46362V10.6509C9.46362 7.06394 11.081 5.40138 14.5897 5.40138C15.255 5.40138 16.4029 5.53248 16.8724 5.66316V8.58234C16.6246 8.55621 16.1941 8.54314 15.6595 8.54314C13.9379 8.54314 13.2726 9.19779 13.2726 10.8996V12.0386H16.7023L16.1131 15.2592H13.2726V22.5C18.4709 21.8698 22.5 17.4267 22.5 12.0386Z",
        instagram: "M12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5 9.51472 14.4853 7.5 12 7.5ZM12 14.625C10.5503 14.625 9.375 13.4497 9.375 12C9.375 10.5503 10.5503 9.375 12 9.375C13.4497 9.375 14.625 10.5503 14.625 12C14.625 13.4497 13.4497 14.625 12 14.625ZM18.375 6.9375C18.375 7.45527 17.9553 7.875 17.4375 7.875C16.9197 7.875 16.5 7.45527 16.5 6.9375C16.5 6.41973 16.9197 6 17.4375 6C17.9553 6 18.375 6.41973 18.375 6.9375ZM22.5 12.0001C22.5 9.14592 22.4872 8.78863 22.4369 7.67054C22.3865 6.55244 22.206 5.78775 21.9495 5.11912C21.6844 4.42987 21.3274 3.84112 20.7435 3.261C20.1596 2.68087 19.5709 2.31562 18.8872 2.05087C18.2194 1.79025 17.4548 1.61362 16.3372 1.563C15.2156 1.51237 14.8584 1.5 12.0101 1.5C9.15825 1.5 8.80106 1.51237 7.68356 1.563C6.56587 1.61362 5.80163 1.794 5.13375 2.05087C4.44075 2.31975 3.85237 2.67675 3.27262 3.261C2.69325 3.84562 2.32763 4.42987 2.06287 5.11912C1.80675 5.78775 1.626 6.55237 1.57575 7.67062C1.52512 8.79262 1.51275 9.14962 1.51275 12C1.51275 14.8541 1.52512 15.2111 1.57575 16.3294C1.626 17.4476 1.80675 18.2123 2.06287 18.8809C2.33175 19.5701 2.68913 20.1585 3.27262 20.7386C3.85237 21.3232 4.44075 21.6844 5.12925 21.9491C5.7975 22.21 6.56213 22.3864 7.67962 22.4366C8.80106 22.4873 9.15825 22.5 12.0064 22.5C14.8586 22.5 15.2156 22.4873 16.3331 22.4366C17.4506 22.3864 18.2152 22.2056 18.8831 21.9491C19.5716 21.6802 20.16 21.3232 20.7394 20.7386C21.3191 20.1544 21.6844 19.5701 21.9495 18.8809C22.21 18.2123 22.3864 17.4476 22.4369 16.3294C22.4872 15.207 22.4996 14.8496 22.4996 12",
        x: "M20.0516 -1H24.3452L14.9651 10.0133L26 25H17.3598L10.5924 15.9107L2.84902 25H-1.44709L8.58582 13.22L-2 -1H6.85959L12.9767 7.308L20.0516 -1ZM18.5448 22.36H20.9238L5.56687 1.50133H3.01386L18.5448 22.36Z",
        linkedin: "M20.3571 2.25C21.0971 2.25 21.75 2.9029 21.75 3.68638V20.3571C21.75 21.1406 21.0971 21.75 20.3571 21.75H3.59933C2.85937 21.75 2.25 21.1406 2.25 20.3571V3.68638C2.25 2.9029 2.85937 2.25 3.59933 2.25H20.3571ZM8.12612 18.9643V9.69308H5.25335V18.9643H8.12612ZM6.68973 8.38728C7.60379 8.38728 8.34375 7.64732 8.34375 6.73326C8.34375 5.8192 7.60379 5.03571 6.68973 5.03571C5.73214 5.03571 4.99219 5.8192 4.99219 6.73326C4.99219 7.64732 5.73214 8.38728 6.68973 8.38728ZM18.9643 18.9643V13.8717C18.9643 11.3906 18.3984 9.43192 15.4821 9.43192C14.0893 9.43192 13.1317 10.2154 12.74 10.9554H12.6964V9.69308H9.95424V18.9643H12.827V14.394C12.827 13.1752 13.0446 12 14.5681 12C16.048 12 16.048 13.3929 16.048 14.4375V18.9643H18.9643Z"
    };

    return (
        <a href="#" className="w-6 h-6 text-white/60 hover:text-white transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d={paths[icon]} fill="currentColor" />
            </svg>
        </a>
    );
};

export default Footer;
