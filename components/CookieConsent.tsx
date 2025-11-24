import React, { useState, useEffect } from 'react';

const CookieConsent: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookiesAccepted');
        if (consent !== 'true') {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookiesAccepted', 'true');
        setIsVisible(false);
        // Initialize GA tracking if needed here, or simply unblock standard behavior
    };

    if (!isVisible) return null;

    return (
        <div id="cookie-banner" className="fixed bottom-0 left-0 right-0 z-[1000] bg-gray-900 text-white p-4 shadow-lg flex justify-between items-center text-sm">
            <p className="mr-4">
                We use cookies for performance measurement and persistence (POPIA/GDPR compliance).
            </p>
            <button 
                onClick={handleAccept}
                className="bg-yellow-400 text-gray-900 font-bold px-4 py-2 rounded-md hover:bg-yellow-500 transition"
            >
                Accept & Continue
            </button>
        </div>
    );
};

export default CookieConsent;