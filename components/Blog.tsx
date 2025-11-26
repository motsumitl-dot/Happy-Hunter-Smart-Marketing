
import React, { useState } from 'react';
import { Section } from './ui/Section';
import { BlogCard } from './blog/BlogCard';
import { BlogPostView } from './blog/BlogPostView';
import { BLOG_POSTS } from '../constants';
import { BlogPost } from '../types';

const Blog: React.FC = () => {
    const [view, setView] = useState<'grid' | 'single'>('grid');
    const [activePost, setActivePost] = useState<BlogPost | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 6;

    const totalPages = Math.ceil(BLOG_POSTS.length / postsPerPage);
    const currentPosts = BLOG_POSTS.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);

    const handlePostClick = (post: BlogPost) => {
        setActivePost(post);
        setView('single');
        // Scroll to top of section
        document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleBack = () => {
        setView('grid');
        setActivePost(null);
    };

    return (
        <Section id="blog" bg="gray">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-2">Insights & Strategies</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Deep dives into systems, automation, and holistic marketing for the South African market.
                </p>
            </div>

            {view === 'grid' ? (
                <>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {currentPosts.map(post => (
                            <BlogCard key={post.id} post={post} onClick={() => handlePostClick(post)} />
                        ))}
                    </div>

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="flex justify-center mt-12 space-x-2">
                            {Array.from({ length: totalPages }, (_, i) => (
                                <button
                                    key={i + 1}
                                    onClick={() => setCurrentPage(i + 1)}
                                    className={`w-10 h-10 rounded-full font-bold transition-colors ${
                                        currentPage === i + 1 
                                        ? 'bg-yellow-400 text-black shadow-md' 
                                        : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                                    }`}
                                >
                                    {i + 1}
                                </button>
                            ))}
                        </div>
                    )}
                </>
            ) : (
                activePost && (
                    <BlogPostView 
                        post={activePost} 
                        onBack={handleBack} 
                        recentPosts={BLOG_POSTS.filter(p => p.id !== activePost.id)}
                        onNavigate={handlePostClick}
                    />
                )
            )}
        </Section>
    );
};

export default Blog;
