
import React from 'react';
import { SocialLinks } from './layout/SocialLinks';

const Footer: React.FC = () => {
    return (
        <>
            <footer className="bg-gray-800 text-gray-400 py-12 border-t border-gray-700">
                <div className="container mx-auto px-6 text-center">
                    <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 mb-6">
                        <a href="mailto:support@happyhunter.com" className="hover:text-yellow-400 transition">support@happyhunter.com</a>
                        <span className="hidden sm:block">|</span>
                        <a href="https://happyhunter.beehiiv.com/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition">happyhunter.beehiiv.com</a>
                        <span className="hidden sm:block">|</span>
                        <a href="https://wa.link/cdrsuc" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition"><strong>+27 60 101 6673 (WhatsApp)</strong></a>
                    </div>
                    
                    <SocialLinks />

                    <p>&copy; 2025 Happy Hunter - Smart Marketing. All rights reserved.</p>
                    <p className="text-sm mt-1">Built by Thabo Leslie Motsumi</p>
                    <p className="text-xs mt-1">Code managed on <a href="https://github.com/happyhunterdigital.github.io" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">GitHub</a></p>
                </div>
            </footer>

            {/* Floating WhatsApp Widget */}
            <a href="https://wa.link/cdrsuc" target="_blank" rel="noopener noreferrer" aria-label="Contact us on WhatsApp" className="fixed bottom-20 right-6 z-[90] bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transform transition-all duration-300 ease-in-out">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                    <path d="M16.75 13.99C16.5 13.86 15.2 13.21 14.95 13.11C14.7 13 14.5 12.97 14.3 13.22C14.1 13.47 13.6 14.02 13.45 14.22C13.3 14.42 13.15 14.44 12.9 14.31C12.65 14.19 11.8 13.91 10.75 13C9.9 12.27 9.25 11.39 9.1 11.19C8.95 10.99 9.05 10.87 9.17 10.75C9.29 10.63 9.42 10.46 9.57 10.31C9.72 10.16 9.77 10.06 9.87 9.86C9.97 9.66 9.92 9.49 9.87 9.36C9.82 9.24 9.27 7.96 9.02 7.36C8.77 6.76 8.52 6.81 8.37 6.81C8.22 6.81 8.02 6.84 7.82 6.84C7.62 6.84 7.32 6.91 7.07 7.16C6.82 7.41 6.17 8.01 6.17 9.21C6.17 10.41 7.1 11.56 7.22 11.71C7.34 11.86 9.27 14.79 12.1 16.21C12.82 16.56 13.36 16.71 13.78 16.84C14.4 17.01 14.95 16.94 15.38 16.59C15.85 16.21 16.53 15.51 16.73 15.26C16.93 15.01 17.13 14.91 17.03 14.79C16.93 14.67 16.85 14.62 16.75 13.99Z M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z M12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z"/>
                </svg>
            </a>
        </>
    );
};

export default Footer;
