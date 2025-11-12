
import React, { useState } from 'react';
import { generateReviewResponse } from '../services/geminiService';
import { GeminiResponse } from '../types';

const AiDemo: React.FC = () => {
    const [businessName, setBusinessName] = useState('');
    const [reviewText, setReviewText] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [result, setResult] = useState<GeminiResponse | null>(null);

    const handleGenerate = async () => {
        if (!businessName || !reviewText) {
            setError("Please enter both the business name and the review text.");
            return;
        }

        setIsLoading(true);
        setError(null);
        setResult(null);

        try {
            const response = await generateReviewResponse(businessName, reviewText);
            setResult(response);
        } catch (err) {
            setError(err instanceof Error ? err.message : "An unknown error occurred.");
        } finally {
            setIsLoading(false);
        }
    };

    const getSentimentClasses = (sentiment: 'Positive' | 'Negative' | 'Neutral') => {
        switch (sentiment) {
            case 'Positive': return 'bg-green-100 text-green-700';
            case 'Negative': return 'bg-red-100 text-red-700';
            case 'Neutral': return 'bg-yellow-100 text-yellow-700';
            default: return 'bg-gray-100 text-gray-700';
        }
    };

    return (
        <section id="ai-demo" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-2">⭐ AI Review Response Generator Demo</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Demonstrating our <strong>Local Search & Visibility</strong> expertise. Input any client review (positive or negative) and instantly get a professional, on-brand response draft.
                    </p>
                </div>
                
                <div className="max-w-3xl mx-auto bg-gray-50 p-8 rounded-lg shadow-xl border border-gray-200">
                    <div className="space-y-6">
                        <div>
                            <label htmlFor="ai-business-name" className="block text-sm font-medium text-gray-700">Client's Business Name (e.g., The Local Cafe)</label>
                            <input 
                                type="text" 
                                id="ai-business-name" 
                                value={businessName}
                                onChange={(e) => setBusinessName(e.target.value)}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-400 focus:border-yellow-400 sm:text-sm" 
                                placeholder="e.g., Mama Zola's Catering"
                                disabled={isLoading}
                            />
                        </div>
                        <div>
                            <label htmlFor="ai-review-text" className="block text-sm font-medium text-gray-700">Review Text to Analyze</label>
                            <textarea 
                                id="ai-review-text" 
                                rows={3} 
                                value={reviewText}
                                onChange={(e) => setReviewText(e.target.value)}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-400 focus:border-yellow-400 sm:text-sm" 
                                placeholder="e.g., The food was amazing, but the waiting staff seemed overwhelmed. 4/5 stars."
                                disabled={isLoading}
                            ></textarea>
                        </div>
                        <div>
                            <button 
                                id="generate-ideas-btn" 
                                className="btn-yellow w-full flex justify-center py-3 px-4 rounded-md shadow-sm text-lg font-bold" 
                                onClick={handleGenerate}
                                disabled={isLoading}
                            >
                                {isLoading ? 'Architecting...' : 'Analyze & Generate Response'}
                            </button>
                        </div>
                        {isLoading && (
                            <div id="ai-loading" className="flex justify-center flex-col items-center mt-4">
                                <div className="loader mb-2"></div>
                                <p className="text-sm font-semibold text-gray-600">Happy Hunter is Architecting Your System... This takes 10-20 seconds to finalize your personalized strategy.</p>
                            </div>
                        )}
                        <div id="ai-results-container" className="mt-8 border-t border-gray-200 pt-6">
                           {result && (
                                <div className="animate-fadeIn">
                                    <h4 className="text-xl font-bold text-gray-900 mb-4">Analysis from Happy Hunter:</h4>
                                    <div className="space-y-4">
                                        <p className="text-lg font-semibold">Sentiment Classified As: <span className={`px-3 py-1 rounded-full ${getSentimentClasses(result.sentiment)}`}>{result.sentiment}</span></p>
                                        <div className="p-4 bg-gray-100 rounded-lg">
                                            <p className="text-sm font-semibold text-gray-800 mb-2">Response Draft (for {businessName}):</p>
                                            <p className="text-gray-700 whitespace-pre-line">{result.response_draft}</p>
                                        </div>
                                    </div>
                                </div>
                           )}
                        </div>
                         {error && (
                            <div id="ai-error" className="text-red-600 text-center">
                                {error}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AiDemo;
