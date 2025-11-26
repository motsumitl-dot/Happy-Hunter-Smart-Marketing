
import React from 'react';
import { Service } from '../types';
import { Section } from './ui/Section';

interface ServiceCardProps {
    service: Service;
    isActive: boolean;
    onClick: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, isActive, onClick }) => {
    return (
        <div 
            className={`service-card ${isActive ? 'active' : ''}`} 
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
        <Section id="services" bg="gray">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-2">Holistic Digital Services</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    We integrate core digital marketing components into a unified system that wins.
                </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
                {services.map((service, index) => (
                    <ServiceCard 
                        key={`${service.filter}-${index}`}
                        service={service}
                        isActive={activeFilter === service.filter}
                        onClick={() => onFilterSelect(service.filter)}
                    />
                ))}
            </div>

            <div className="flex justify-center mt-12">
                <div className="relative group overflow-hidden rounded-xl shadow-lg border-2 border-yellow-400 rotate-1 hover:rotate-0 transition-all duration-500 max-w-md">
                    <img 
                        src="https://res.cloudinary.com/dka0498ns/image/upload/v1762927233/Yellow_and_Black_Modern_Media_Press_Kit_Presentation_1_ylop6n.jpg" 
                        alt="Services Overview Instagram Post" 
                        className="w-full h-auto object-cover transform group-hover:scale-105 transition duration-500" 
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition duration-300"></div>
                </div>
            </div>
        </Section>
    );
};

export default Services;
