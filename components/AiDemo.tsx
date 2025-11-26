
import React, { useState } from 'react';
import { generateGMBAudit } from '../services/geminiService';
import { GMBAuditResponse } from '../types';
import { Button } from './ui/Button';
import { Section } from './ui/Section';
import { AuditChart } from './ai/AuditChart';

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
        <Section id="ai-audit" bg="white">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-2">🗺️ AI-Powered GMB Audit</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Demonstrating our <strong>Local Search & Visibility</strong> expertise. Enter your business name and location to get a free, instant, AI-powered audit.
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
                        <Button 
                            fullWidth 
                            onClick={handleGenerate}
                            disabled={isLoading}
                        >
                            {isLoading ? 'Running 5-Point Systems Audit...' : 'Run Basic GMB Audit'}
                        </Button>
                    </div>
                    {isLoading && (
                        <div className="flex justify-center flex-col items-center mt-4">
                            <div className="loader mb-2"></div>
                            <p className="text-sm font-semibold text-gray-600">Happy Hunter is Architecting Your System... (10-20s)</p>
                        </div>
                    )}
                    
                    {result && (
                        <div className="mt-8 animate-fadeIn">
                             <div className="bg-white rounded-xl border-2 border-black shadow-lg overflow-hidden">
                                <div className="p-6 bg-gray-50 flex flex-col items-center border-b border-gray-200">
                                    <h4 className="text-2xl font-bold mb-4">{result.audit.business_name}</h4>
                                    <AuditChart score={result.audit.audit_score} />
                                    <p className="text-sm font-medium text-gray-500 mt-2">System Health Score</p>
                                </div>

                                <div className="p-6 space-y-4">
                                    {[
                                        { title: 'Visibility', text: result.audit.visibility_finding },
                                        { title: 'Trust', text: result.audit.trust_finding },
                                        { title: 'Conversion', text: result.audit.conversion_finding },
                                        { title: 'Activity', text: result.audit.activity_finding },
                                        { title: 'Competitor Gap', text: result.audit.competitor_finding, isWarn: true },
                                    ].map((item, idx) => (
                                        <div key={idx} className="border-l-4 border-yellow-400 pl-4 py-1">
                                            <h5 className="font-bold text-gray-900 text-sm uppercase">{item.title}</h5>
                                            <p className="text-gray-700 text-sm md:text-base">{item.text}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="bg-yellow-50 p-6 border-t-2 border-yellow-400">
                                    <h5 className="text-xl font-black text-gray-900 mb-2 uppercase">🏆 The Win</h5>
                                    <p className="text-gray-800 mb-4">{result.audit.the_win}</p>
                                    <a href="https://calendly.com/motsumitl/30min" target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-black text-yellow-400 py-3 rounded-lg font-bold shadow-md hover:bg-gray-800 transition">
                                        Fix These Gaps - Schedule Free Call
                                    </a>
                                </div>
                                
                                {result.groundingMetadata?.groundingChunks && (
                                    <div className="p-4 bg-gray-100 text-xs text-gray-500">
                                         <strong>Sources:</strong>
                                         <ul className="list-disc pl-4 mt-1">
                                            {result.groundingMetadata.groundingChunks.map((chunk: any, i: number) => (
                                                chunk.web?.uri ? (
                                                    <li key={i}><a href={chunk.web.uri} target="_blank" rel="noopener noreferrer" className="hover:underline">{chunk.web.title || chunk.web.uri}</a></li>
                                                ) : null
                                            ))}
                                         </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {error && <div className="text-red-600 text-center mt-4">{error}</div>}
                </div>
            </div>
            <style>{`
                .animate-fadeIn { animation: fadeIn 0.5s ease-out; }
                @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
            `}</style>
        </Section>
    );
};

export default AiAudit;
