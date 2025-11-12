
import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="hero-bg text-white">
            <div className="container mx-auto px-6 py-24 text-center">
                <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">
                    You Don't Need More "Marketing."
                </h1>
                <h2 className="text-4xl md:text-6xl font-black text-yellow-400 mb-8 tracking-tight">
                    You Need a System That Works.
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
                    I’m Happy Hunter. I build production-ready, AI-driven marketing systems that turn chaotic budgets into predictable revenue. Specializing in conversion engineering, local discovery, and design-for-scale.
                </p>
                <a href="https://calendly.com/motsumitl/30min" target="_blank" rel="noopener noreferrer" className="btn-yellow px-8 py-4 rounded-lg text-lg font-bold">
                    Schedule Your Free Systems Audit
                </a>
            </div>
        </section>
    );
};

export default Hero;
