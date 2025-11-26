
import React from 'react';
import { BlogPost } from '../../types';
import { Button } from '../ui/Button';

interface BlogPostViewProps {
    post: BlogPost;
    onBack: () => void;
    recentPosts: BlogPost[];
    onNavigate: (post: BlogPost) => void;
}

export const BlogPostView: React.FC<BlogPostViewProps> = ({ post, onBack, recentPosts, onNavigate }) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-fadeIn">
            {/* Main Content */}
            <div className="lg:col-span-2">
                <button onClick={onBack} className="mb-4 text-gray-500 hover:text-yellow-600 flex items-center">
                    &larr; Back to Articles
                </button>
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden p-6 sm:p-10">
                    <img src={post.image} alt={post.title} className="w-full h-64 sm:h-80 object-cover rounded-lg mb-8 shadow-sm" />
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
                        <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full font-semibold">{post.category}</span>
                        <span>{post.date}</span>
                        <span>|</span>
                        <span>By {post.author}</span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">{post.title}</h1>
                    
                    <div className="prose prose-lg text-gray-700 max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />

                    <div className="mt-10 pt-6 border-t border-gray-100">
                        <h4 className="font-bold text-gray-900 mb-2">Tags:</h4>
                        <div className="flex flex-wrap gap-2">
                            {post.tags.map(tag => (
                                <span key={tag} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium">#{tag}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-8">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="font-bold text-lg mb-4">Search</h3>
                    <input type="text" placeholder="Search articles..." className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-400 focus:outline-none" />
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="font-bold text-lg mb-4">Categories</h3>
                    <ul className="space-y-2 text-gray-600">
                        <li className="hover:text-yellow-600 cursor-pointer">Local SEO (12)</li>
                        <li className="hover:text-yellow-600 cursor-pointer">Automation (8)</li>
                        <li className="hover:text-yellow-600 cursor-pointer">Strategy (5)</li>
                    </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="font-bold text-lg mb-4">Recent Posts</h3>
                    <div className="space-y-4">
                        {recentPosts.slice(0, 3).map(rp => (
                            <div key={rp.id} className="flex gap-3 cursor-pointer group" onClick={() => onNavigate(rp)}>
                                <div className="w-16 h-16 bg-gray-200 rounded overflow-hidden flex-shrink-0">
                                    <img src={rp.image} className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-900 group-hover:text-yellow-600 line-clamp-2">{rp.title}</h4>
                                    <span className="text-xs text-gray-500">{rp.date}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-black text-white p-6 rounded-lg shadow-lg text-center">
                    <h3 className="font-bold text-xl mb-2 text-yellow-400">Need a System?</h3>
                    <p className="text-sm text-gray-300 mb-4">Don't just read about it. Build it.</p>
                    <a href="https://calendly.com/motsumitl/30min" target="_blank" className="block bg-yellow-400 text-black font-bold py-2 rounded hover:bg-yellow-500 transition">Book Audit</a>
                </div>
            </aside>
        </div>
    );
};
