import React from 'react';
// FIX: Corrected import path for types to avoid module resolution issue.
import type { Service } from '../types/index';

interface ServicesProps {
    services: Service[];
    onServiceClick: (filter: string) => void;
    activeFilter: string | null;
}

const Services: React.FC<ServicesProps> = ({ services, onServiceClick, activeFilter }) => {
    return (
        <section id="services" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-2">Holistic Digital Services</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        We integrate core digital marketing components into a unified system that wins.
                    </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" id="services-grid">
                    {services.map(service => (
                        <div 
                            key={service.id}
                            className={`service-card flex flex-col h-full ${activeFilter === service.filterId ? 'active' : ''}`}
                            role="button" 
                            tabIndex={0} 
                            onClick={() => onServiceClick(service.filterId)}
                            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onServiceClick(service.filterId)}
                        >
                            <div className="text-3xl text-yellow-400">{service.icon}</div>
                            <h3 className="text-xl font-bold text-gray-900 mt-4 mb-2">{service.name}</h3>
                            <p className="text-gray-600">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;