import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/images/Logo.svg';
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full bg-neutral-50 border-b border-slate-100" style={{ fontFamily: '"Inter Tight", sans-serif' }}>
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20">
                <div className="flex justify-between items-center h-[96px] w-full">

                    {/* Logo Section - Properly left aligned */}
                    <div className="flex items-center gap-[30px] md:gap-[8px] flex-shrink-0">
                        <img src={logoImg}
                        className="w-[40px] md:w-[40px] h-auto" alt="logo" />
                        <span className="text-[#061A22] text-[18px] md:text-[20px] font-semibold whitespace-nowrap">
                            Snov Hub
                        </span>
                    </div>

                    {/* Desktop Navigation Links - Centered */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center lg:gap-[40px]">
                        <Link to="/" className="text-[#061A22] font-semibold text-[16px] whitespace-nowrap hover:text-emerald-500 transition-colors duration-200">Home</Link>
                        <Link to="/features" className="text-[#4B5563] font-medium text-[16px] whitespace-nowrap hover:text-emerald-500 transition-colors duration-200">Features</Link>
                        <Link to="/how-it-works" className="text-[#4B5563] font-medium text-[16px] whitespace-nowrap hover:text-emerald-500 transition-colors duration-200">How it Works</Link>
                        <Link to="/pricing" className="text-[#4B5563] font-medium text-[16px] whitespace-nowrap hover:text-emerald-500 transition-colors duration-200">Pricing</Link>
                        <Link to="/contact" className="text-[#4B5563] font-medium text-[16px] whitespace-nowrap hover:text-emerald-500 transition-colors duration-200">Contact Us</Link>
                    </div>

                    {/* Desktop Actions - Properly right aligned */}
                    <div className="hidden md:flex items-center gap-[10px] flex-shrink-0">
                        <button className="text-[#061A22] font-semibold text-[14px] lg:text-[16px] w-[110px] lg:w-[120px] py-[10px] lg:py-[11px] rounded-[10px] border border-[#E5E7EB] hover:bg-emerald-50 hover:border-emerald-300 hover:text-emerald-600 transition-all duration-200">
                            Login
                        </button>
                        <button className="bg-[#061A22] text-white font-medium text-[14px] lg:text-[16px] px-[18px] lg:px-[22px] py-[10px] lg:py-[11px] rounded-[10px] flex items-center gap-[6px] hover:bg-emerald-600 transition-all duration-200 group">
                            Get Started
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-[2px] group-hover:-translate-y-[2px] transition-transform duration-200">
                                <line x1="7" y1="17" x2="17" y2="7"></line>
                                <polyline points="7 7 17 7 17 17"></polyline>
                            </svg>
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="p-1 rounded-lg hover:bg-emerald-50 transition-colors duration-200">
                            <svg className="w-7 h-7 text-[#061A22] hover:text-emerald-500 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden px-6 pb-8 bg-white border-t">
                    <div className="flex flex-col gap-5 mt-4">
                        <Link to="/" className="text-[#061A22] font-semibold text-[16px] hover:text-emerald-500 transition-colors duration-200">Home</Link>
                        <Link to="/features" className="text-[#4B5563] text-[16px] hover:text-emerald-500 transition-colors duration-200">Features</Link>
                        <Link to="/how-it-works" className="text-[#4B5563] text-[16px] hover:text-emerald-500 transition-colors duration-200">How it Works</Link>
                        <Link to="/pricing" className="text-[#4B5563] text-[16px] hover:text-emerald-500 transition-colors duration-200">Pricing</Link>
                        <Link to="/contact" className="text-[#4B5563] text-[16px] hover:text-emerald-500 transition-colors duration-200">Contact Us</Link>

                        <div className="flex flex-col gap-3 mt-2 pt-5 border-t">
                            <button className="border px-[22px] py-[11px] rounded-[10px] hover:bg-emerald-50 hover:border-emerald-200 transition-colors duration-200">
                                Login
                            </button>
                            <button className="bg-[#061A22] text-white px-[22px] py-[11px] rounded-[10px] flex justify-center gap-2 hover:bg-emerald-600 transition-colors duration-200">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Header;