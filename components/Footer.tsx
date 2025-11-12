
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-gray-400 py-12">
            <div className="container mx-auto px-6 text-center">
                <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 mb-6">
                    <a href="mailto:Happyhunter99@protonmail.com" className="hover:text-yellow-400 transition">Happyhunter99@protonmail.com</a>
                    <span className="hidden sm:block">|</span>
                    <a href="https://happyhunter.beehiiv.com/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition">happyhunter.beehiiv.com</a>
                    <span className="hidden sm:block">|</span>
                    <a href="https://wa.link/cdrsuc" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition">+27 60 101 6673 (WhatsApp)</a>
                </div>
                <p>&copy; 2025 Happy Hunter - Smart Marketing. All rights reserved.</p>
                <p className="text-sm mt-1">Built by Thabo Leslie Motsumi</p>
            </div>
        </footer>
    );
};

export default Footer;
