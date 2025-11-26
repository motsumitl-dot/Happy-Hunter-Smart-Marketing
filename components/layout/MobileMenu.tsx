
import React, { useState } from 'react';

export const MobileMenu: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div className="sm:hidden relative">
            <button 
                onClick={toggleMenu} 
                className="text-white hover:text-yellow-400 focus:outline-none"
                aria-label="Toggle menu"
            >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {isOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                </svg>
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1 z-50">
                    <a href="#services" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white" onClick={() => setIsOpen(false)}>Services</a>
                    <a href="#projects" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white" onClick={() => setIsOpen(false)}>Case Studies</a>
                    <a href="#blog" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white" onClick={() => setIsOpen(false)}>Blog</a>
                    <a href="#about" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white" onClick={() => setIsOpen(false)}>About</a>
                    <a href="#contact" className="block px-4 py-2 text-sm text-yellow-400 font-bold hover:bg-gray-700" onClick={() => setIsOpen(false)}>Get in Touch</a>
                </div>
            )}
        </div>
    );
};
