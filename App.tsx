import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AiAudit from './components/AiAudit';
import TrustBar from './components/TrustBar';
import Resources from './components/Resources';
import Services from './components/Services';
import Projects from './components/Projects';
import About from './components/About';
import Cta from './components/Cta';
import Footer from './components/Footer';
import Modal from './components/Modal';
import WhatsAppWidget from './components/WhatsAppWidget';
import CookieConsent from './components/CookieConsent';
import { servicesData, projectData } from './constants/data';
// FIX: Corrected import path for types to avoid module resolution issue.
import type { Project } from './types/index';

const App: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState<string | null>(null);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const handleServiceClick = (filter: string) => {
        setActiveFilter(filter);
        // Scroll to projects section
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleResetFilter = () => {
        setActiveFilter(null);
    };

    const handleProjectClick = (project: Project) => {
        setSelectedProject(project);
    };

    const handleCloseModal = () => {
        setSelectedProject(null);
    };

    const filteredProjects = useMemo(() => {
        if (!activeFilter) {
            return projectData;
        }
        return projectData.filter(p => p.tags.includes(activeFilter));
    }, [activeFilter]);

    const activeServiceName = useMemo(() => {
        if (!activeFilter) return '';
        // Find a service that uses this filter ID to get a display name.
        // Since multiple services might map to one filter (like Local SEO and Paid Media -> growth),
        // we might just show "Growth" or similar, or just pick the name of the first matching service.
        // For simplicity, we'll try to match the filtered concept or just show the name of one of the services.
        const service = servicesData.find(s => s.filterId === activeFilter);
        return service ? service.name.split('&')[0] + ' & more' : activeFilter; 
    }, [activeFilter]);

    return (
        <>
            <a href="#main-content" className="sr-only focus:not-sr-only">Skip to main content</a>
            <Header />
            <main id="main-content">
                <Hero />
                <AiAudit />
                <TrustBar />
                <Resources />
                <Services 
                    services={servicesData} 
                    onServiceClick={handleServiceClick} 
                    activeFilter={activeFilter}
                />
                <Projects
                    projects={filteredProjects}
                    onProjectClick={handleProjectClick}
                    activeFilter={activeFilter}
                    activeServiceName={activeServiceName}
                    onResetFilter={handleResetFilter}
                />
                <About />
                <Cta />
            </main>
            <Footer />
            <WhatsAppWidget />
            <CookieConsent />
            {selectedProject && (
                <Modal project={selectedProject} onClose={handleCloseModal} />
            )}
        </>
    );
};

export default App;