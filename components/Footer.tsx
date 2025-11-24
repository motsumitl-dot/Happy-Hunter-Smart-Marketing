import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-gray-400 py-12 relative">
            <div className="container mx-auto px-6 text-center">
                <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 mb-6">
                    <a href="mailto:support@happyhunter.com" className="hover:text-yellow-400 transition">support@happyhunter.com</a>
                    <span className="hidden sm:block">|</span>
                    <a href="https://happyhunter.beehiiv.com/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition">happyhunter.beehiiv.com</a>
                    <span className="hidden sm:block">|</span>
                    <a href="https://wa.link/cdrsuc" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition font-bold">+27 60 101 6673 (WhatsApp)</a>
                </div>
                
                <div className="flex flex-wrap justify-center items-center gap-3 mb-6 text-sm">
                    <a href="https://www.facebook.com/Happyhunterdigital/" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-gray-700 text-yellow-400 rounded-full hover:bg-yellow-400 hover:text-gray-900 transition font-medium" aria-label="Follow us on Facebook">
                        Facebook
                    </a>
                    <a href="https://x.com/HappyHunter35" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-gray-700 text-yellow-400 rounded-full hover:bg-yellow-400 hover:text-gray-900 transition font-medium" aria-label="Follow us on X (Twitter)">
                        X (Twitter)
                    </a>
                    <a href="https://www.linkedin.com/in/thabomotsumi/" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-gray-700 text-yellow-400 rounded-full hover:bg-yellow-400 hover:text-gray-900 transition font-medium" aria-label="Connect with Thabo Motsumi on LinkedIn">
                        LinkedIn
                    </a>
                    <a href="https://www.instagram.com/happyhunterdigital/" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-gray-700 text-yellow-400 rounded-full hover:bg-yellow-400 hover:text-gray-900 transition font-medium" aria-label="Follow us on Instagram">
                        Instagram
                    </a>
                </div>

                <p>&copy; 2025 Happy Hunter - Smart Marketing. All rights reserved.</p>
                <p className="text-sm mt-1">Built by Thabo Leslie Motsumi</p>
                <p className="text-xs mt-1">Code managed on <a href="https://github.com/happyhunterdigital.github.io" target="_blank" rel="noopener noreferrer" class="hover:text-yellow-400">GitHub</a></p>
            </div>
        </footer>
    );
};

export default Footer;