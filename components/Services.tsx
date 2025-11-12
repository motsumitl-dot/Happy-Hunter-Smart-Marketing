
import React from 'react';
import { Service } from '../types';

interface ServiceCardProps {
    service: Service;
    isActive: boolean;
    onClick: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, isActive, onClick }) => {
    return (
        <div 
            className={`service-card ${isActive ? 'active' : ''}`} 
            data-filter={service.filter} 
            data-name={service.name} 
            aria-label={`Filter projects by ${service.name}`} 
            onClick={onClick}
        >
            <div className="icon">{service.icon}</div>
            <h3 className="text-xl font-bold text-gray-900 mt-4 mb-2">{service.name}</h3>
            <p className="text-gray-600">{service.description}</p>
        </div>
    );
};

interface ServicesProps {
    services: Service[];
    activeFilter: string | null;
    onFilterSelect: (filter: string) => void;
}

const Services: React.FC<ServicesProps> = ({ services, activeFilter, onFilterSelect }) => {
    return (
        <section id="services" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-2">My Core Services</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        I build complete systems. Click a service to see related case studies.
                    </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {services.map(service => (
                        <ServiceCard 
                            key={service.filter}
                            service={service}
                            isActive={activeFilter === service.filter}
                            onClick={() => onFilterSelect(service.filter)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
