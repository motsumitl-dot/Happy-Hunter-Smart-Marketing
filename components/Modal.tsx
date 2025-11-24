import React, { useEffect, useRef } from 'react';
// FIX: Corrected import path for types to avoid module resolution issue.
import type { Project } from '../types/index';

interface ModalProps {
    project: Project;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ project, onClose }) => {
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        const handleClickOutside = (e: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
                onClose();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'hidden';
        
        // Use timeout to prevent immediate close on click that opens it
        const timeoutId = setTimeout(() => {
            document.addEventListener('mousedown', handleClickOutside);
        }, 0);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = '';
            clearTimeout(timeoutId);
        };
    }, [onClose]);

    return (
        <div 
            className="modal" 
            role="dialog" 
            aria-modal="true" 
            aria-labelledby={`${project.id}-title`}
        >
            <div className="modal-content" ref={modalRef}>
                <button className="modal-close" aria-label="Close dialog" onClick={onClose}>&times;</button>
                <h2 id={`${project.id}-title`} className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h2>
                <img src={project.logo} alt={`${project.title} Logo`} className="w-16 h-16 object-contain mb-4 rounded-full border border-gray-200 p-1" loading="lazy" />
                <div className="space-y-4">
                   <p><strong>The Challenge:</strong> {project.challenge}</p>
                   <p><strong>The System I Built:</strong> {project.system}</p>
                   <p><strong>The Result:</strong> {project.outcome}</p>
                </div>
            </div>
        </div>
    );
};

export default Modal;