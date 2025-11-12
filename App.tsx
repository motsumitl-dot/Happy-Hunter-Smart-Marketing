
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AiDemo from './components/AiDemo';
import TrustBar from './components/TrustBar';
import Services from './components/Services';
import Projects from './components/Projects';
import About from './components/About';
import Cta from './components/Cta';
import Footer from './components/Footer';
import { services } from './constants';

const App: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState<string | null>(null);

    const handleFilterSelect = (filter: string | null) => {
        setActiveFilter(filter);
        if(filter) {
            document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        } else {
             document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
        }
    };
    
    return (
        <>
            <Header />
            <main>
                <Hero />
                <AiDemo />
                <TrustBar />
                <Services 
                    services={services} 
                    activeFilter={activeFilter}
                    onFilterSelect={handleFilterSelect} 
                />
                <Projects 
                    activeFilter={activeFilter}
                    onFilterReset={() => handleFilterSelect(null)}
                    activeServiceName={services.find(s => s.filter === activeFilter)?.name || ''}
                />
                <About />
                <Cta />
            </main>
            <Footer />
        </>
    );
};

export default App;
