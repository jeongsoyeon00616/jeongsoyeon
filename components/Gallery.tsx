import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import ProjectDetailModal from './ProjectDetailModal';
import { motion, AnimatePresence } from 'framer-motion';

const Gallery: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Residential', 'Commercial', 'Furniture'];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(project => {
      const lowerCat = project.category.toLowerCase();
      return lowerCat.includes(activeCategory.toLowerCase());
    });

  return (
    <section id="projects" className="py-20 md:py-40 bg-off-white transition-colors duration-1000">
      <div className="max-w-[100rem] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 md:mb-40">
          <div>
            <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] mb-4 text-gold">
              Project Archive
            </h2>
            <p className="text-4xl md:text-6xl font-serif text-[#1a1a1a]">
              Previous Works
            </p>
            <p className="text-xs text-gray-400 mt-4 tracking-widest uppercase">
              Professional projects at previous architectural studio
            </p>
          </div>
          <div className="hidden md:flex gap-8 text-[11px] uppercase tracking-[0.2em] font-medium text-gray-400">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`transition-all duration-300 relative py-2 ${activeCategory === cat ? 'text-gold' : 'hover:text-gold/60'
                  }`}
              >
                {cat}
                {activeCategory === cat && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-0 right-0 h-[1px] bg-gold"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="grid gap-x-20 gap-y-40 transition-all duration-1000 grid-cols-1 md:grid-cols-12 items-start"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project, index) => {
              const getLayoutClass = () => {
                // Keep the dynamic layout even after filtering
                const layoutIndex = index % 4;
                switch (layoutIndex) {
                  case 0: return 'md:col-span-7';
                  case 1: return 'md:col-span-5 md:mt-32';
                  case 2: return 'md:col-span-5 md:ml-12';
                  case 3: return 'md:col-span-7 md:mt-24 md:ml-auto';
                  default: return 'md:col-span-6';
                }
              };

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6 }}
                  key={project.id}
                  className={`group cursor-pointer transition-all duration-1000 ${getLayoutClass()}`}
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative overflow-hidden mb-10 transition-all duration-700 aspect-[16/11] shadow-2xl group-hover:shadow-xl">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 transition-opacity duration-700 flex items-center justify-center bg-charcoal/20 opacity-0 group-hover:opacity-100">
                      <span className="text-white text-[9px] uppercase tracking-[0.5em] font-bold translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                        View Project Archive
                      </span>
                    </div>
                  </div>
                  <div className="transition-all duration-500 pl-0 group-hover:pl-6 border-l-2 border-transparent group-hover:border-gold">
                    <div>
                      <span className="text-[9px] uppercase tracking-[0.3em] font-bold mb-3 block text-gold">
                        {project.category}
                      </span>
                      <h4 className="text-3xl md:text-5xl mb-4 transition-colors duration-1000 font-serif text-[#1a1a1a]">
                        {project.title}
                      </h4>
                      <p className="text-[13px] font-light italic transition-colors duration-1000 text-gray-400 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Gallery;
