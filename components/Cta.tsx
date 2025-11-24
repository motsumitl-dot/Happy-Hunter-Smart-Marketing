
import React from 'react';

const Cta: React.FC = () => {
    return (
        <section id="contact" className="bg-black text-white">
            <div className="container mx-auto px-6 py-20 text-center">
                <h2 className="text-4xl font-bold mb-4">Tired of Guessing?</h2>
                <p className="text-xl text-yellow-400 font-semibold mb-8">Let's build the system that makes your business grow.</p>
                <a href="https://calendly.com/motsumitl/30min" target="_blank" rel="noopener noreferrer" className="btn-yellow px-8 py-4 rounded-lg text-lg font-bold">
                    Schedule Your Free Systems Audit
                </a>
            </div>
        </section>
    );
};

export default Cta;
