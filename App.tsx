
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AiAudit from './components/AiDemo'; 
import TrustBar from './components/TrustBar';
import Resources from './components/Resources';
import Services from './components/Services';
import Projects from './components/Projects';
import { Pricing } from './components/Pricing';
import Blog from './components/Blog';
import About from './components/About';
import Cta from './components/Cta';
import Footer from './components/Footer';
import { services } from './constants';
import { useTracking } from './hooks/useTracking';

const App: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState<string | null>(null);
    const { cookieConsent, acceptCookies, trackEvent } = useTracking();

    useEffect(() => {
        // Restore filter preference if consent given
        if(cookieConsent) {
             const savedFilter = localStorage.getItem('activeServiceFilter');
             if(savedFilter) setActiveFilter(savedFilter);
        }
    }, [cookieConsent]);

    const handleFilterSelect = (filter: string | null) => {
        setActiveFilter(filter);
        trackEvent('Filter', filter || 'Reset');
        
        if(cookieConsent && filter) {
             localStorage.setItem('activeServiceFilter', filter);
        } else if (cookieConsent && !filter) {
            localStorage.removeItem('activeServiceFilter');
        }

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
                <AiAudit />
                <TrustBar />
                <Resources />
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
                <Pricing />
                <Blog />
                <About />
                <Cta />
            </main>
            <Footer />

            {!cookieConsent && (
                <div id="cookie-banner" className="animate-fadeIn">
                    <p className="mr-4">
                        We use cookies for performance measurement and persistence (POPIA/GDPR compliance).
                    </p>
                    <button onClick={acceptCookies}>Accept & Continue</button>
                </div>
            )}
            <style>{`
                .animate-fadeIn { animation: fadeIn 0.5s ease-out; }
                @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
            `}</style>
        </>
    );
};

export default App;
