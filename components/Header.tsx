import React, { useState } from 'react';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    }

    return (
        <header className="bg-black text-white shadow-md sticky top-0 z-50">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#" className="flex items-center space-x-3">
                    <img src="https://res.cloudinary.com/dka0498ns/image/upload/v1762761708/Happy_Hunter_Logo_pmyh8u.png" alt="Happy Hunter Logo" className="h-10 w-auto" />
                    <span className="text-xl font-bold tracking-tight text-white hidden sm:block">
                        Happy Hunter
                        <span className="text-yellow-400">/ Smart Marketing</span>
                    </span>
                </a>
                <div className="hidden md:flex space-x-6 items-center text-gray-300">
                    <a href="#services" className="hover:text-yellow-400 transition">Services</a>
                    <a href="#projects" className="hover:text-yellow-400 transition">Case Studies</a>
                    <a href="#about" className="hover:text-yellow-400 transition">About</a>
                    <a href="#contact" className="inline-block px-4 py-2 rounded-md text-sm btn-yellow">Get in Touch</a>
                </div>
                <div className="md:hidden">
                    <button id="mobile-menu-button" className="text-gray-300 hover:text-white" aria-controls="mobile-menu" aria-expanded={isMenuOpen} onClick={toggleMenu}>
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
            </nav>
            <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <a href="#services" onClick={closeMenu} className="mobile-nav-link block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Services</a>
                    <a href="#projects" onClick={closeMenu} className="mobile-nav-link block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Case Studies</a>
                    <a href="#about" onClick={closeMenu} className="mobile-nav-link block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">About</a>
                    <a href="#contact" onClick={closeMenu} className="mobile-nav-link block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Get in Touch</a>
                </div>
            </div>
        </header>
    );
};

export default Header;
