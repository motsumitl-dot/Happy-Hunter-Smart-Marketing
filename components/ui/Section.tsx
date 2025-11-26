
import React, { ReactNode } from 'react';

interface SectionProps {
    id?: string;
    className?: string;
    children: ReactNode;
    bg?: 'white' | 'gray' | 'black' | 'yellow';
}

export const Section: React.FC<SectionProps> = ({ id, className = '', children, bg = 'white' }) => {
    const bgClasses = {
        white: 'bg-white',
        gray: 'bg-gray-50',
        black: 'bg-black text-white',
        yellow: 'bg-yellow-50'
    };

    return (
        <section id={id} className={`py-20 ${bgClasses[bg]} ${className}`}>
            <div className="container mx-auto px-6">
                {children}
            </div>
        </section>
    );
};
