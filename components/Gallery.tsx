import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import ProjectDetailModal from './ProjectDetailModal';
import { motion } from 'framer-motion';

const Gallery: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 md:py-40 bg-off-white transition-colors duration-1000">
      <div className="max-w-[100rem] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 md:mb-40">
          <div>
            <h2 className="text-[12px] font-bold uppercase tracking-[0.4em] mb-4 text-gold">
              Project Archive
            </h2>
            <p className="text-4xl md:text-6xl font-serif text-[#1a1a1a] uppercase tracking-tighter">
              PORTFOLIO
            </p>
            <p className="text-[11px] text-gray-400 mt-4 tracking-[0.2em] uppercase font-medium">
              Works at Mikrabbit (Previous Firm)
            </p>
          </div>
        </div>

        <div
          className="grid gap-x-12 gap-y-32 transition-all duration-1000 grid-cols-1 md:grid-cols-2 items-start"
        >
          {PROJECTS.map((project, index) => {
            return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                key={project.id}
                className={`group cursor-pointer transition-all duration-1000`}
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden mb-8 transition-all duration-700 aspect-square shadow-2xl group-hover:shadow-xl">
                  {project.videoUrl && (
                    <video 
                      autoPlay 
                      muted 
                      loop 
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"
                    >
                      <source src={project.videoUrl} type="video/mp4" />
                    </video>
                  )}
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 transition-opacity duration-700 flex items-center justify-center bg-charcoal/20 opacity-0 group-hover:opacity-100 z-20">
                    <span className="text-white text-[11px] uppercase tracking-[0.5em] font-bold translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      View Project
                    </span>
                  </div>
                </div>
                <div className="transition-all duration-500 pl-4 border-l-2 border-transparent group-hover:border-gold">
                  <div>
                    <span className="text-[11px] uppercase tracking-[0.3em] font-bold mb-2 block text-gold">
                      Residential
                    </span>
                    <h4 className="text-xl md:text-2xl mb-3 transition-colors duration-1000 font-serif text-[#1a1a1a] font-medium">
                      {project.title}
                    </h4>
                    <p className="text-[13px] font-light italic transition-colors duration-1000 text-gray-400 leading-relaxed max-w-md">
                      {project.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Gallery;
