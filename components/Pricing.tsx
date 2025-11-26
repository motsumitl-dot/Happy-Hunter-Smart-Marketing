
import React from 'react';
import { Section } from './ui/Section';
import { PRICING_PLANS } from '../constants';
import { Button } from './ui/Button';

export const Pricing: React.FC = () => {
    return (
        <Section id="pricing" bg="white">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Investment</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    No hidden fees. No "smoke and mirrors." Choose the system that fits your stage of growth.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {PRICING_PLANS.map((plan) => (
                    <div 
                        key={plan.id} 
                        className={`relative flex flex-col rounded-2xl p-8 transition-all duration-300 ${
                            plan.isPopular 
                            ? 'bg-gray-900 text-white shadow-2xl transform md:-translate-y-4 border-2 border-yellow-400' 
                            : 'bg-white text-gray-900 border border-gray-200 shadow-lg hover:shadow-xl'
                        }`}
                    >
                        {plan.isPopular && (
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <span className="bg-yellow-400 text-black text-xs font-black uppercase tracking-widest py-1 px-4 rounded-full shadow-md">
                                    Most Popular
                                </span>
                            </div>
                        )}

                        <div className="mb-6">
                            <h3 className={`text-xl font-bold mb-2 ${plan.isPopular ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h3>
                            <div className="flex items-baseline">
                                <span className={`text-4xl font-black ${plan.isPopular ? 'text-yellow-400' : 'text-gray-900'}`}>{plan.price}</span>
                                {plan.period && (
                                    <span className={`ml-2 text-sm ${plan.isPopular ? 'text-gray-400' : 'text-gray-500'}`}>/ {plan.period}</span>
                                )}
                            </div>
                            <p className={`mt-4 text-sm ${plan.isPopular ? 'text-gray-300' : 'text-gray-600'}`}>
                                {plan.description}
                            </p>
                        </div>

                        <div className="flex-grow mb-8">
                            <ul className="space-y-4">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start">
                                        <svg className={`w-5 h-5 mr-3 flex-shrink-0 ${plan.isPopular ? 'text-yellow-400' : 'text-green-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className={`text-sm ${plan.isPopular ? 'text-gray-300' : 'text-gray-700'}`}>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <a href={plan.ctaLink} target="_blank" rel="noopener noreferrer" className="block">
                            <Button 
                                fullWidth 
                                variant={plan.isPopular ? 'primary' : 'secondary'}
                                className={plan.isPopular ? '' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}
                            >
                                {plan.cta}
                            </Button>
                        </a>
                    </div>
                ))}
            </div>
            
            <div className="text-center mt-12">
                 <p className="text-sm text-gray-500">
                    Need a custom solution? <a href="https://calendly.com/motsumitl/30min" className="text-yellow-600 font-bold hover:underline">Book a strategy call</a> to discuss your specific needs.
                </p>
            </div>
        </Section>
    );
};
