import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AiDemo from './components/AiDemo';
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
    const [showCookieBanner, setShowCookieBanner] = useState(false);

    const initializeTracking = () => {
        const gaScript = document.getElementById('ga-script');
        if (gaScript && !gaScript.innerHTML) {
            gaScript.innerHTML = `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'YOUR_MEASUREMENT_ID_HERE');
            `;
            console.log('[Compliance Check] Analytics Initialized. Tracking is Active.');
        }
    };

    useEffect(() => {
        const consent = localStorage.getItem('cookiesAccepted');
        if (consent === 'true') {
            initializeTracking();
        } else {
            setShowCookieBanner(true);
        }
    }, []);

    const handleAcceptCookies = () => {
        localStorage.setItem('cookiesAccepted', 'true');
        setShowCookieBanner(false);
        initializeTracking();
    };

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
            
            {/* Floating WhatsApp Widget */}
            <a href="https://wa.link/cdrsuc" target="_blank" rel="noopener noreferrer" aria-label="Contact us on WhatsApp" className="fixed bottom-20 right-6 z-[90] bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transform transition-all duration-300 ease-in-out">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                    <path d="M16.75 13.99C16.5 13.86 15.2 13.21 14.95 13.11C14.7 13 14.5 12.97 14.3 13.22C14.1 13.47 13.6 14.02 13.45 14.22C13.3 14.42 13.15 14.44 12.9 14.31C12.65 14.19 11.8 13.91 10.75 13C9.9 12.27 9.25 11.39 9.1 11.19C8.95 10.99 9.05 10.87 9.17 10.75C9.29 10.63 9.42 10.46 9.57 10.31C9.72 10.16 9.77 10.06 9.87 9.86C9.97 9.66 9.92 9.49 9.87 9.36C9.82 9.24 9.27 7.96 9.02 7.36C8.77 6.76 8.52 6.81 8.37 6.81C8.22 6.81 8.02 6.84 7.82 6.84C7.62 6.84 7.32 6.91 7.07 7.16C6.82 7.41 6.17 8.01 6.17 9.21C6.17 10.41 7.1 11.56 7.22 11.71C7.34 11.86 9.27 14.79 12.1 16.21C12.82 16.56 13.36 16.71 13.78 16.84C14.4 17.01 14.95 16.94 15.38 16.59C15.85 16.21 16.53 15.51 16.73 15.26C16.93 15.01 17.13 14.91 17.03 14.79C16.93 14.67 16.85 14.62 16.75 13.99Z M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z M12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z"/>
                </svg>
            </a>

            {/* Cookie Consent Banner */}
            {showCookieBanner && (
                <div className="fixed bottom-0 left-0 right-0 z-[1000] bg-[#1a1a1a] text-white p-4 shadow-lg flex flex-col sm:flex-row justify-between items-center text-sm">
                    <p className="mb-2 sm:mb-0 mr-4 text-center sm:text-left">
                        We use cookies for performance measurement and persistence (POPIA/GDPR compliance).
                    </p>
                    <button 
                        onClick={handleAcceptCookies}
                        className="bg-[#FACC15] text-[#1a1a1a] font-bold py-2 px-4 rounded hover:bg-[#FBBF24] transition"
                    >
                        Accept & Continue
                    </button>
                </div>
            )}
        </>
    );
};

export default App;