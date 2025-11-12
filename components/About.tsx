
import React from 'react';

const About: React.FC = () => {
    return (
        <section id="about" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">About Happy Hunter</h2>
                        <h3 className="text-2xl font-semibold text-yellow-600 mb-6">Thabo Leslie Motsumi, Founder & Systems Builder</h3>
                        <div className="space-y-4 text-lg text-gray-600">
                            <p>
                                I’m a "systems thinker." My passion isn't just marketing; it's building the complete, end-to-end machine that drives predictable growth for your business.
                            </p>
                            <p>
                                I translate high-level strategy into operationally executable assets. I have a bias for fast, iterative delivery and production-ready work. My goal is to create systems and templates that your team can operate with minimal friction.
                            </p>
                            <p>
                                With deep local market fluency and a global best-practice toolkit, I specialize in creating culturally resonant, high-performance work for <strong>South African SMEs and social ventures.</strong>
                            </p>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <img src="https://res.cloudinary.com/dka0498ns/image/upload/v1762926940/Gemini_Generated_Image_n574un574un574un_ylitql.png" alt="Thabo Leslie Motsumi, Founder of Happy Hunter" className="rounded-lg shadow-2xl w-full h-auto max-w-md mx-auto object-cover" style={{ aspectRatio: '1/1' }} loading="lazy" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
