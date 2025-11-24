
import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-black text-white shadow-md sticky top-0 z-50">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className="flex items-center space-x-3">
                    <img src="https://res.cloudinary.com/dka0498ns/image/upload/v1762761708/Happy_Hunter_Logo_pmyh8u.png" alt="Happy Hunter Logo" className="h-10 w-auto" />
                    <span className="text-xl font-bold tracking-tight text-white hidden sm:block">
                        Happy Hunter
                        <span className="text-yellow-400">/ Smart Marketing</span>
                    </span>
                </div>
                <div className="flex space-x-4">
                    <a href="#services" className="text-gray-300 hover:text-yellow-400 transition" aria-label="Navigate to Services">Services</a>
                    <a href="#projects" className="text-gray-300 hover:text-yellow-400 transition" aria-label="Navigate to Case Studies">Case Studies</a>
                    <a href="#about" className="text-gray-300 hover:text-yellow-400 transition" aria-label="Navigate to About section">About</a>
                    <a href="#contact" className="btn-yellow px-4 py-2 rounded-md text-sm">Get in Touch</a>
                </div>
            </nav>
        </header>
    );
};

export default Header;
