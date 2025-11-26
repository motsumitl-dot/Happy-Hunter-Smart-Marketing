
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
    fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
    children, 
    variant = 'primary', 
    fullWidth = false, 
    className = '', 
    ...props 
}) => {
    const baseClasses = "font-bold py-3 px-6 rounded-lg transition-all transform hover:-translate-y-1 shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed";
    const variantClasses = variant === 'primary' 
        ? "bg-yellow-400 text-gray-900 hover:bg-yellow-500" 
        : "bg-gray-800 text-white hover:bg-gray-700";
    
    const widthClass = fullWidth ? "w-full" : "";

    return (
        <button 
            className={`${baseClasses} ${variantClasses} ${widthClass} ${className}`} 
            {...props}
        >
            {children}
        </button>
    );
};
