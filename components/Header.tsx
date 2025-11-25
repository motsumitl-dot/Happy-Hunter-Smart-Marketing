
import React, { useState } from 'react';

const Header: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const closeMenu = () => setIsMobileMenuOpen(false);

    return (
        <header className="bg-black text-white shadow-md sticky top-0 z-50">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className="flex items-center space-x-3 z-50">
                    <img src="https://res.cloudinary.com/dka0498ns/image/upload/v1762761708/Happy_Hunter_Logo_pmyh8u.png" alt="Happy Hunter Logo" className="h-10 w-auto" />
                    <span className="text-xl font-bold tracking-tight text-white hidden sm:block">
                        Happy Hunter
                        <span className="text-yellow-400">/ Smart Marketing</span>
                    </span>
                    {/* Mobile Only Logo Text if image is not enough context */}
                    <span className="text-lg font-bold tracking-tight text-white sm:hidden">
                        Happy Hunter
                    </span>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-4 items-center">
                    <a href="#services" className="text-gray-300 hover:text-yellow-400 transition" aria-label="Navigate to Services">Services</a>
                    <a href="#projects" className="text-gray-300 hover:text-yellow-400 transition" aria-label="Navigate to Case Studies">Case Studies</a>
                    <a href="#about" className="text-gray-300 hover:text-yellow-400 transition" aria-label="Navigate to About section">About</a>
                    <a href="#contact" className="btn-yellow px-4 py-2 rounded-md text-sm">Get in Touch</a>
                </div>

                {/* Mobile Hamburger Button */}
                <div className="md:hidden z-50 flex items-center">
                    <button 
                        onClick={toggleMenu} 
                        className="text-gray-300 hover:text-white focus:outline-none"
                        aria-label="Toggle mobile menu"
                    >
                        {isMobileMenuOpen ? (
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        ) : (
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        )}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Dropdown */}
            <div 
                className={`fixed inset-0 bg-black bg-opacity-95 z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-300 ease-in-out md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <a href="#services" onClick={closeMenu} className="text-2xl text-gray-300 hover:text-yellow-400 transition font-bold">Services</a>
                <a href="#projects" onClick={closeMenu} className="text-2xl text-gray-300 hover:text-yellow-400 transition font-bold">Case Studies</a>
                <a href="#about" onClick={closeMenu} className="text-2xl text-gray-300 hover:text-yellow-400 transition font-bold">About</a>
                <a href="#contact" onClick={closeMenu} className="btn-yellow px-8 py-3 rounded-lg text-lg font-bold">Get in Touch</a>
            </div>
        </header>
    );
};

export default Header;
