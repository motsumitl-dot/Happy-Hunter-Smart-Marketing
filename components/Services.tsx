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
            className={`service-card group ${isActive ? 'active' : ''}`} 
            data-filter={service.filter} 
            data-name={service.name} 
            aria-label={`Filter projects by ${service.name}`} 
            onClick={onClick}
        >
            <div className="icon transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-rotate-6 origin-center">
                {service.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mt-4 mb-2 group-hover:text-yellow-600 transition-colors duration-300">{service.name}</h3>
            <p className="text-gray-600 text-sm flex-grow">
                <strong>Problem:</strong> {service.problem}<br/>
                <strong>Solution:</strong> {service.solution}
            </p>
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
                    <h2 className="text-4xl font-bold text-gray-900 mb-2">Holistic Digital Services</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        We integrate core digital marketing components into a unified system that wins.
                    </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-fr">
                    {services.map(service => (
                        <ServiceCard 
                            key={service.name}
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