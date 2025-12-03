import React from 'react';
// FIX: Corrected import path for types to avoid module resolution issue.
import type { Project } from '../types/index';

interface ProjectsProps {
    projects: Project[];
    onProjectClick: (project: Project) => void;
    activeFilter: string | null;
    activeServiceName: string;
    onResetFilter: () => void;
}

const Projects: React.FC<ProjectsProps> = ({ projects, onProjectClick, activeFilter, activeServiceName, onResetFilter }) => {
    return (
        <section id="projects" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-4xl font-bold text-gray-900 mb-2">Project Highlights</h2>
                    {activeFilter && (
                         <p id="filter-message-container" className="text-lg text-yellow-600 font-semibold mb-4">
                            Showing projects related to <span id="active-service-name" className="underline">{activeServiceName}</span>. 
                            <button id="filter-reset-btn" className="text-gray-600 hover:text-gray-900 ml-2 text-sm" aria-label="Reset project filter" onClick={onResetFilter}>
                                [Reset Filter]
                            </button>
                        </p>
                    )}
                    <p className="text-lg text-gray-600">Real-world problems, solved with intelligent systems.</p>
                </div>
                
                {projects.length > 0 ? (
                    <div id="case-study-grid" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map(project => (
                             <div className="case-study-card" key={project.id}>
                                <div className="p-6 flex flex-col flex-grow">
                                    <img src={project.logo} alt={`${project.title} Logo`} className="w-12 h-12 object-contain mb-4 rounded-full border border-gray-200 p-1" loading="lazy" />
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                                    <p className="text-gray-600 mb-4 h-24 overflow-hidden">{project.challenge}</p>
                                    <div className="mb-4 flex flex-wrap gap-1">
                                        {project.services.slice(0, 3).map(s => <span key={s} className="case-study-card-tag">{s}</span>)}
                                    </div>
                                    <div className="mt-auto">
                                        <button className="text-yellow-600 font-semibold" onClick={() => onProjectClick(project)}>
                                            Learn More &rarr;
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div id="no-results-message" className="text-center text-gray-600 text-lg py-10">
                        No projects match this service category. 
                        <button id="no-results-reset" className="text-yellow-600 font-semibold underline" aria-label="Show All Projects" onClick={onResetFilter}>
                            Show All Projects
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;