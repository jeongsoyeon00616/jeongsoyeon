
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Maximize, Calendar, CheckCircle2 } from 'lucide-react';
import { Project } from '../types';

interface ProjectDetailModalProps {
    project: Project | null;
    onClose: () => void;
}

const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[110] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-10"
            >
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 50, opacity: 0 }}
                    transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                    className="bg-white w-full max-w-6xl h-full max-h-[90vh] overflow-hidden rounded-sm flex flex-col md:flex-row relative"
                >
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 z-50 p-2 bg-white/80 backdrop-blur-md rounded-full text-black hover:bg-gold hover:text-white transition-all shadow-lg"
                    >
                        <X size={24} />
                    </button>

                    {/* Left: Swiper-like Image Gallery */}
                    <div className="w-full md:w-3/5 h-[40vh] md:h-full bg-gray-100 overflow-y-auto custom-scrollbar">
                        <div className="flex flex-col gap-2 p-2">
                            {project.galleryUrls?.map((url, index) => (
                                <div key={index} className="w-full overflow-hidden">
                                    <img
                                        src={url}
                                        alt={`${project.title} - ${index + 1}`}
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                            ))}
                            {!project.galleryUrls && (
                                <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
                            )}
                        </div>
                    </div>

                    {/* Right: Project Info */}
                    <div className="w-full md:w-2/5 h-full overflow-y-auto p-8 md:p-14 space-y-10 custom-scrollbar">
                        <div>
                            <span className="text-gold text-[10px] uppercase tracking-[0.3em] font-bold mb-4 block">
                                {project.category}
                            </span>
                            <h2 className="text-4xl md:text-5xl font-serif text-[#1a1a1a] mb-6">{project.title}</h2>
                            <p className="text-gray-500 font-light leading-relaxed text-lg italic">
                                "{project.description}"
                            </p>
                        </div>

                        <div className="h-[1px] w-full bg-gray-100"></div>

                        <div className="grid grid-cols-1 gap-6">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-gray-50 flex items-center justify-center rounded-full text-gold">
                                    <MapPin size={18} />
                                </div>
                                <div>
                                    <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Location</p>
                                    <p className="text-sm font-medium">{project.specs?.location || '서울 특별시'}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-gray-50 flex items-center justify-center rounded-full text-gold">
                                    <Maximize size={18} />
                                </div>
                                <div>
                                    <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Area</p>
                                    <p className="text-sm font-medium">{project.specs?.area || '정보 없음'}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-gray-50 flex items-center justify-center rounded-full text-gold">
                                    <Calendar size={18} />
                                </div>
                                <div>
                                    <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Project Period</p>
                                    <p className="text-sm font-medium">{project.specs?.period || '2024 - 2025'}</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h4 className="text-[11px] uppercase tracking-widest text-[#1a1a1a] font-bold">Design Philosophy & Logic</h4>
                            <p className="text-gray-600 font-light leading-relaxed text-sm">
                                {project.longDescription}
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h4 className="text-[11px] uppercase tracking-widest text-[#1a1a1a] font-bold">Core Features</h4>
                            <ul className="grid grid-cols-1 gap-4">
                                {project.features?.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-gray-500 font-light">
                                        <CheckCircle2 size={16} className="text-gold" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="pt-10">
                            <button
                                onClick={onClose}
                                className="w-full py-5 border border-[#1a1a1a] text-[#1a1a1a] text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-[#1a1a1a] hover:text-white transition-all duration-500"
                            >
                                Close Project
                            </button>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ProjectDetailModal;
