
import React from 'react';
import { BlogPost } from '../../types';

interface BlogCardProps {
    post: BlogPost;
    onClick: () => void;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post, onClick }) => {
    return (
        <div 
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border border-gray-100 flex flex-col h-full"
            onClick={onClick}
        >
            <div className="h-48 overflow-hidden bg-gray-200">
                 <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" loading="lazy"/>
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-center text-xs text-gray-500 mb-2">
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded font-semibold">{post.category}</span>
                    <span>{post.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight hover:text-yellow-600 transition-colors">{post.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">{post.excerpt}</p>
                <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
                    <span className="text-xs font-medium text-gray-500">By {post.author}</span>
                    <span className="text-yellow-600 text-sm font-semibold group-hover:underline">Read Article &rarr;</span>
                </div>
            </div>
        </div>
    );
};
