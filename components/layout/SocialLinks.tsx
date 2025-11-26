
import React from 'react';

export const SocialLinks: React.FC = () => {
    const links = [
        { name: 'Facebook', url: 'https://www.facebook.com/Happyhunterdigital/' },
        { name: 'X (Twitter)', url: 'https://x.com/HappyHunter35' },
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/thabomotsumi/' },
        { name: 'Instagram', url: 'https://www.instagram.com/happyhunterdigital/' }
    ];

    return (
        <div className="flex flex-wrap justify-center items-center gap-3 mb-6 text-sm">
            {links.map(link => (
                <a 
                    key={link.name}
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="px-3 py-1 bg-gray-700 text-yellow-400 rounded-full hover:bg-yellow-400 hover:text-gray-900 transition font-medium" 
                    aria-label={`Follow us on ${link.name}`}
                >
                    {link.name}
                </a>
            ))}
        </div>
    );
};
