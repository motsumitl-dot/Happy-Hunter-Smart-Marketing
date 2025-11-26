
import { useState, useEffect } from 'react';

export const useTracking = () => {
    const [cookieConsent, setCookieConsent] = useState<boolean>(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookiesAccepted');
        if (consent === 'true') {
            setCookieConsent(true);
            // Initialize GA or other tracking here if needed
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem('cookiesAccepted', 'true');
        setCookieConsent(true);
    };

    const trackEvent = (category: string, action: string) => {
        if (cookieConsent) {
            console.log(`[Analytics] Category: ${category}, Action: ${action}`);
            // if (window.gtag) window.gtag('event', action, { 'event_category': category });
        }
    };

    return { cookieConsent, acceptCookies, trackEvent };
};
