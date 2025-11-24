
import React, { useState } from 'react';
import { generateGMBAudit } from '../services/geminiService';
import { GMBAuditResponse } from '../types';

const AiAudit: React.FC = () => {
    const [businessName, setBusinessName] = useState('');
    const [location, setLocation] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [result, setResult] = useState<{audit: GMBAuditResponse, groundingMetadata: any} | null>(null);

    const handleGenerate = async () => {
        if (!businessName || !location) {
            setError("Please enter both the business name and its location.");
            return;
        }

        setIsLoading(true);
        setError(null);
        setResult(null);

        try {
            const response = await generateGMBAudit(businessName, location);
            setResult(response);
        } catch (err) {
            setError(err instanceof Error ? err.message : "An unknown error occurred.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="ai-audit" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-2">🗺️ AI-Powered GMB Audit</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Demonstrating our <strong>Local Search & Visibility</strong> expertise. Enter your business name and location to get a free, instant, AI-powered audit of your Google Business Profile.
                    </p>
                </div>
                
                <div className="max-w-3xl mx-auto bg-gray-50 p-8 rounded-lg shadow-xl border border-gray-200">
                    <div className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="audit-business-name" className="block text-sm font-medium text-gray-700">Your Business Name</label>
                                <input 
                                    type="text" 
                                    id="audit-business-name" 
                                    value={businessName}
                                    onChange={(e) => setBusinessName(e.target.value)}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-400 focus:border-yellow-400 sm:text-sm" 
                                    placeholder="e.g., Mama Zola's Catering"
                                    disabled={isLoading}
                                />
                            </div>
                            <div>
                                <label htmlFor="audit-business-location" className="block text-sm font-medium text-gray-700">Business Location (City/Suburb)</label>
                                <input 
                                    type="text" 
                                    id="audit-business-location" 
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-400 focus:border-yellow-400 sm:text-sm" 
                                    placeholder="e.g., Sandton, Johannesburg"
                                    disabled={isLoading}
                                />
                            </div>
                        </div>
                        <div>
                            <button 
                                className="btn-yellow w-full flex justify-center py-3 px-4 rounded-md shadow-sm text-lg font-bold" 
                                onClick={handleGenerate}
                                disabled={isLoading}
                            >
                                {isLoading ? 'Running 5-Point Systems Audit...' : 'Run Basic GMB Audit'}
                            </button>
                        </div>
                        {isLoading && (
                            <div className="flex justify-center flex-col items-center mt-4">
                                <div className="loader mb-2"></div>
                                <p className="text-sm font-semibold text-gray-600">Happy Hunter is Architecting Your System... This takes 10-20 seconds.</p>
                            </div>
                        )}
                        <div className="mt-8 border-t border-gray-200 pt-6">
                           {result && (
                                <div className="bg-white rounded-xl border-2 border-black shadow-lg overflow-hidden animate-fadeIn">
                                    <div className="bg-black text-white p-6 text-center">
                                        <h4 className="text-2xl font-bold mb-2">Audit Report: {result.audit.business_name}</h4>
                                        <div className="flex justify-center items-baseline space-x-2">
                                            <span className="text-gray-300 text-lg font-medium">System Health Score:</span>
                                            <span className={`text-5xl font-black ${result.audit.audit_score > 70 ? 'text-green-400' : (result.audit.audit_score > 40 ? 'text-yellow-400' : 'text-red-400')}`}>
                                                {result.audit.audit_score}/100
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-6 space-y-6">
                                        <div className="border-b border-gray-100 pb-4">
                                            <h5 className="flex items-center text-lg font-bold text-gray-900 mb-2">
                                                <span className="bg-yellow-100 text-yellow-800 py-1 px-2 rounded text-sm mr-2">1</span> Visibility Check
                                            </h5>
                                            <p className="text-gray-700 font-medium">{result.audit.visibility_finding}</p>
                                        </div>
                                        <div className="border-b border-gray-100 pb-4">
                                            <h5 className="flex items-center text-lg font-bold text-gray-900 mb-2">
                                                <span className="bg-yellow-100 text-yellow-800 py-1 px-2 rounded text-sm mr-2">2</span> Trust Check
                                            </h5>
                                            <p className="text-gray-700 font-medium">{result.audit.trust_finding}</p>
                                        </div>
                                        <div className="border-b border-gray-100 pb-4">
                                            <h5 className="flex items-center text-lg font-bold text-gray-900 mb-2">
                                                <span className="bg-yellow-100 text-yellow-800 py-1 px-2 rounded text-sm mr-2">3</span> Conversion Check
                                            </h5>
                                            <p className="text-gray-700 font-medium">{result.audit.conversion_finding}</p>
                                        </div>
                                        <div className="border-b border-gray-100 pb-4">
                                            <h5 className="flex items-center text-lg font-bold text-gray-900 mb-2">
                                                <span className="bg-yellow-100 text-yellow-800 py-1 px-2 rounded text-sm mr-2">4</span> Activity Check
                                            </h5>
                                            <p className="text-gray-700 font-medium">{result.audit.activity_finding}</p>
                                        </div>
                                        <div className="pb-4">
                                            <h5 className="flex items-center text-lg font-bold text-gray-900 mb-2">
                                                <span className="bg-red-100 text-red-800 py-1 px-2 rounded text-sm mr-2">5</span> Competitor Gap
                                            </h5>
                                            <p className="text-gray-700 font-medium">{result.audit.competitor_finding}</p>
                                        </div>
                                    </div>

                                    <div className="bg-yellow-50 p-6 border-t-2 border-yellow-400">
                                        <h5 className="text-xl font-black text-gray-900 mb-2 uppercase">🏆 The Win</h5>
                                        <p className="text-gray-800 mb-4">{result.audit.the_win}</p>
                                        <a href="https://calendly.com/motsumitl/30min" target="_blank" rel="noopener noreferrer" className="btn-yellow block w-full text-center py-3 rounded-lg font-bold shadow-md hover:shadow-lg transform hover:-translate-y-1 transition">
                                            Fix These Gaps - Schedule Free Strategy Call
                                        </a>
                                    </div>
                                    
                                    {result.groundingMetadata?.groundingChunks && (
                                        <div className="p-6 bg-gray-50 border-t border-gray-200">
                                             <h6 className="text-sm font-bold text-gray-700 mb-2">Sources:</h6>
                                             <ul className="text-xs text-gray-500 list-disc pl-4">
                                                {result.groundingMetadata.groundingChunks.map((chunk: any, i: number) => (
                                                    chunk.web?.uri ? (
                                                        <li key={i}><a href={chunk.web.uri} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{chunk.web.title || chunk.web.uri}</a></li>
                                                    ) : null
                                                ))}
                                             </ul>
                                        </div>
                                    )}
                                </div>
                           )}
                        </div>
                         {error && (
                            <div className="text-red-600 text-center">
                                {error}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AiAudit;
