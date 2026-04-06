import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/images/Logo.png';
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full bg-neutral-50 border-b border-slate-100" style={{ fontFamily: '"Inter Tight", sans-serif' }}>
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[60px]">
                <div className="relative flex justify-between items-center h-[96px]">

                    {/* Logo Section */}
                    <div className="flex items-center gap-[6px] md:gap-[8px] z-10">
                        <img src={logoImg}
                        className="w-[40px] md:w-[40px] h-auto" alt="logo" />
                        <span className="text-[#061A22] text-[18px] md:text-[20px] font-semibold whitespace-nowrap">
                            Snov Hub
                        </span>
                    </div>

                    {/* Desktop Navigation Links - Centered */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-[30px] lg:gap-[40px]">
                        <Link to="/" className="text-[#061A22] font-semibold text-[16px] whitespace-nowrap">Home</Link>
                        <Link to="/features" className="text-[#4B5563] font-medium text-[16px] whitespace-nowrap">Features</Link>
                        <a href="#" className="text-[#4B5563] font-medium text-[16px] whitespace-nowrap">How it Works</a>
                        <Link to="/pricing" className="text-[#4B5563] font-medium text-[16px] whitespace-nowrap">Pricing</Link>
                        <Link to="/contact" className="text-[#4B5563] font-medium text-[16px] whitespace-nowrap">Contact Us</Link>
                    </div>

                    {/* Desktop Actions - Aligned to end with reduced spacing */}
                    <div className="hidden md:flex items-center gap-[10px] z-10 ml-auto">
                        <button className="text-[#061A22] font-semibold text-[14px] lg:text-[16px] w-[100px] lg:w-[110px] py-[10px] lg:py-[11px] rounded-[10px] border border-[#E5E7EB] hover:bg-black/5 transition-colors">
                            Login
                        </button>
                        <button className="bg-[#061A22] text-white font-medium text-[14px] lg:text-[16px] px-[18px] lg:px-[22px] py-[10px] lg:py-[11px] rounded-[10px] flex items-center gap-[6px] hover:bg-black/90 transition-colors">
                            Get Started
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <line x1="7" y1="17" x2="17" y2="7"></line>
                                <polyline points="7 7 17 7 17 17"></polyline>
                            </svg>
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)}>
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                        <Link to="/" className="text-[#061A22] font-semibold text-[16px]">Home</Link>
                        <Link to="/features" className="text-[#4B5563] text-[16px]">Features</Link>
                        <a href="#" className="text-[#4B5563] text-[16px]">How it Works</a>
                        <Link to="/pricing" className="text-[#4B5563] text-[16px]">Pricing</Link>
                        <Link to="/contact" className="text-[#4B5563] text-[16px]">Contact Us</Link>

                        <div className="flex flex-col gap-3 mt-2 pt-5 border-t">
                            <button className="border px-[22px] py-[11px] rounded-[10px]">
                                Login
                            </button>
                            <button className="bg-[#061A22] text-white px-[22px] py-[11px] rounded-[10px] flex justify-center gap-2">
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