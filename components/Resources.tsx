import React from 'react';

const Resources: React.FC = () => {
    return (
        <section id="resources" className="py-20 bg-yellow-50">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">📚 Free Resources for the Win</h2>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
                    Access our expert content, checklists, and deep-dive guides on AI, GMB, and Inbound Marketing. Subscribe to get our exclusive PDFs and newsletters delivered straight to your inbox.
                </p>
                <a href="https://happyhunter.beehiiv.com/" target="_blank" rel="noopener noreferrer" className="btn-yellow inline-block px-8 py-3 rounded-lg text-lg font-bold shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
                    Free Resources (Newsletters & Guides)
                </a>
            </div>
        </section>
    );
};

export default Resources;