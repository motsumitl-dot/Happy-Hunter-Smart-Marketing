
import React from 'react';
import { Logo } from './layout/Logo';
import { MobileMenu } from './layout/MobileMenu';

const Header: React.FC = () => {
    return (
        <header className="bg-black text-white shadow-md sticky top-0 z-50">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Logo />
                
                {/* Desktop Menu */}
                <div className="hidden sm:flex space-x-6 items-center">
                    <a href="#services" className="text-gray-300 hover:text-yellow-400 transition" aria-label="Navigate to Services">Services</a>
                    <a href="#projects" className="text-gray-300 hover:text-yellow-400 transition" aria-label="Navigate to Case Studies">Case Studies</a>
                    <a href="#blog" className="text-gray-300 hover:text-yellow-400 transition" aria-label="Navigate to Blog">Blog</a>
                    <a href="#about" className="text-gray-300 hover:text-yellow-400 transition" aria-label="Navigate to About section">About</a>
                    <a href="#contact" className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-md text-sm font-bold hover:bg-yellow-500 transition shadow-lg hover:shadow-yellow-400/50">Get in Touch</a>
                </div>

                {/* Mobile Menu */}
                <MobileMenu />
            </nav>
        </header>
    );
};

export default Header;
