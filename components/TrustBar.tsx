
import React from 'react';

const TrustBar: React.FC = () => {
    return (
        <section id="trust-bar" className="bg-black py-12 text-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl sm:text-4xl font-extrabold mb-3">Proven Systems. Quantifiable Results.</h2>
                <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-12 mt-6">
                    <div className="flex items-center">
                        <span className="text-4xl text-yellow-400 mr-3">★★★★★</span>
                        <span className="text-lg font-semibold">4.9/5 Stars on Google & TrustPilot</span>
                    </div>
                    <div className="hidden sm:block text-2xl text-gray-600">|</div>
                    <blockquote className="text-lg italic max-w-md">
                        "Happy Hunter didn't just fix our profile; they built a lead engine. The automation is flawless."
                    </blockquote>
                </div>
            </div>
        </section>
    );
};

export default TrustBar;
