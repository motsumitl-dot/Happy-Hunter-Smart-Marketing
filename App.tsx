
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AiAudit from './components/AiDemo'; // Reusing file but component logic is updated to Audit
import TrustBar from './components/TrustBar';
import Resources from './components/Resources';
import Services from './components/Services';
import Projects from './components/Projects';
import About from './components/About';
import Cta from './components/Cta';
import Footer from './components/Footer';
import { services } from './constants';

const App: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState<string | null>(null);
    const [cookieConsent, setCookieConsent] = useState<boolean>(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookiesAccepted');
        if (consent === 'true') {
            setCookieConsent(true);
            // In a real app, init analytics here
        }
        
        // Restore filter preference if consent given
        if(consent === 'true') {
             const savedFilter = localStorage.getItem('activeServiceFilter');
             if(savedFilter) setActiveFilter(savedFilter);
        }
    }, []);

    const handleAcceptCookies = () => {
        localStorage.setItem('cookiesAccepted', 'true');
        setCookieConsent(true);
    };

    const handleFilterSelect = (filter: string | null) => {
        setActiveFilter(filter);
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
                <About />
                <Cta />
            </main>
            <Footer />

            {!cookieConsent && (
                <div id="cookie-banner">
                    <p className="mr-4">
                        We use cookies for performance measurement and persistence (POPIA/GDPR compliance).
                    </p>
                    <button onClick={handleAcceptCookies}>Accept & Continue</button>
                </div>
            )}
        </>
    );
};

export default App;
