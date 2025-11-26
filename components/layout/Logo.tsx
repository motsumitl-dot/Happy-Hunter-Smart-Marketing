
import React from 'react';

export const Logo: React.FC = () => {
    return (
        <div className="flex items-center space-x-3">
            <img src="https://res.cloudinary.com/dka0498ns/image/upload/v1762761708/Happy_Hunter_Logo_pmyh8u.png" alt="Happy Hunter Logo" className="h-10 w-auto" />
            <span className="text-xl font-bold tracking-tight text-white hidden sm:block">
                Happy Hunter
                <span className="text-yellow-400">/ Smart Marketing</span>
            </span>
        </div>
    );
};
