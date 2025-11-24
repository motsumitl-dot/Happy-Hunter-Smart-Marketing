
import React, { useState, useMemo } from 'react';
import { caseStudies } from '../constants';
import { CaseStudy } from '../types';
import Modal from './Modal';

interface CaseStudyCardProps {
    study: CaseStudy;
    onLearnMore: () => void;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ study, onLearnMore }) => {
    return (
        <div className="case-study-card" data-tags={study.tags.join(' ')}>
            <div className="case-study-card-content flex flex-col h-full">
                <div className="flex-grow">
                     {study.logo ? (
                        <img src={study.logo} alt={`${study.title} Logo`} className="w-12 h-12 object-contain mb-4 rounded-full border border-gray-200 p-1" loading="lazy" />
                    ) : (
                        <div className="w-12 h-12 mb-4 flex items-center justify-center">
                           <span className="text-3xl text-yellow-500">🧱</span>
                        </div>
                    )}
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{study.title}</h3>
                    <p className="text-gray-600 mb-4">{study.description}</p>
                    <div className="mb-4">
                        {study.tagsDisplay.map(tag => (
                            <span key={tag} className="case-study-card-tag">{tag}</span>
                        ))}
                    </div>
                </div>
                <button className="text-yellow-600 font-semibold text-left mt-auto" onClick={onLearnMore}>
                    Learn More &rarr;
                </button>
            </div>
        </div>
    );
};


interface ProjectsProps {
    activeFilter: string | null;
    onFilterReset: () => void;
    activeServiceName: string;
}

const Projects: React.FC<ProjectsProps> = ({ activeFilter, onFilterReset, activeServiceName }) => {
    const [openModalId, setOpenModalId] = useState<string | null>(null);

    const filteredStudies = useMemo(() => {
        if (!activeFilter) {
            return caseStudies;
        }
        return caseStudies.filter(study => study.tags.includes(activeFilter));
    }, [activeFilter]);

    const openModal = (id: string) => setOpenModalId(id);
    const closeModal = () => setOpenModalId(null);

    const activeStudy = caseStudies.find(study => study.id === openModalId);

    return (
        <>
            <section id="projects" className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-8">
                        <h2 className="text-4xl font-bold text-gray-900 mb-2">Project Highlights</h2>
                         {activeFilter && (
                             <p id="filter-message-container" className="text-lg text-yellow-600 font-semibold mb-4">
                                Showing projects related to <span className="underline">{activeServiceName}</span>. 
                                <button id="filter-reset-btn" className="text-gray-600 hover:text-gray-900 ml-2 text-sm" onClick={onFilterReset} aria-label="Reset project filter">
                                    [Reset Filter]
                                </button>
                            </p>
                         )}
                        <p className="text-lg text-gray-600">Real-world problems, solved with intelligent systems.</p>
                    </div>
                    
                    {filteredStudies.length > 0 ? (
                         <div id="case-study-grid" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredStudies.map(study => (
                                <CaseStudyCard key={study.id} study={study} onLearnMore={() => openModal(study.id)} />
                            ))}
                        </div>
                    ) : (
                        <div id="no-results-message" className="text-center text-gray-600 text-lg py-10">
                            No projects match this service category. <button onClick={onFilterReset} className="text-yellow-600 font-semibold underline" aria-label="Show All Projects">Show All Projects</button>
                        </div>
                    )}
                </div>
            </section>
            
            {activeStudy && (
                <Modal isOpen={!!openModalId} onClose={closeModal}>
                     <h2 id={`modal-${activeStudy.id}-title`} className="text-2xl font-bold text-gray-900 mb-4">{activeStudy.title}</h2>
                     {activeStudy.logo ? (
                        <img src={activeStudy.logo} alt={`${activeStudy.title} Logo`} className="w-full h-auto rounded-lg mb-4 shadow-md object-contain max-h-80 bg-white p-2" loading="lazy" />
                     ): (
                        <div className="w-full h-80 rounded-lg mb-4 shadow-md bg-yellow-400 flex items-center justify-center p-4">
                             <span className="text-gray-800 text-2xl font-bold text-center">{activeStudy.title}</span>
                        </div>
                     )}

                    <h3 className="text-lg font-semibold text-gray-800">The Challenge:</h3>
                    <p className="text-gray-600 mb-4">{activeStudy.modalContent.challenge}</p>
                    
                    <h3 className="text-lg font-semibold text-gray-800">The System I Built:</h3>
                    <ul className="list-disc list-inside text-gray-600 my-4 space-y-2">
                       {activeStudy.modalContent.system.map((item, index) => {
                           const parts = item.split(':');
                           return (
                               <li key={index}>
                                   <span className="font-semibold">{parts[0]}:</span>{parts.slice(1).join(':')}
                                </li>
                           );
                       })}
                    </ul>

                    <h3 className="text-lg font-semibold text-gray-800">Outcome:</h3>
                    <p className="text-gray-600">{activeStudy.modalContent.outcome}</p>
                </Modal>
            )}

        </>
    );
};

export default Projects;
