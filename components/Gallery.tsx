
import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import ProjectDetailModal from './ProjectDetailModal';

const Gallery: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-32 bg-[#fcfcfc]">
      <div className="max-w-7xl mx-auto px-10">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-24 border-b border-gray-100 pb-12">
          <div>
            <h2 className="text-gold text-[11px] font-bold uppercase tracking-[0.3em] mb-4">Portfolio</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-[#1a1a1a]">엄선된 파이널 아카이브</h3>
          </div>
          <div className="mt-8 md:mt-0 flex gap-10 text-[10px] uppercase tracking-widest font-semibold text-gray-400">
            <button className="text-[#1a1a1a] border-b border-[#1a1a1a]">전체보기</button>
            <button className="hover:text-gold transition-colors">주거공간</button>
            <button className="hover:text-gold transition-colors">상업공간</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {PROJECTS.map((project, index) => (
            <div
              key={project.id}
              className={`group cursor-pointer ${index % 2 === 1 ? 'md:mt-24' : ''}`}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden aspect-[16/11] mb-8 bg-gray-100 shadow-sm transition-all duration-700 hover:shadow-2xl">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-charcoal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center">
                  <span className="text-white text-[10px] uppercase tracking-[0.4em] translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">View Project Details</span>
                </div>
              </div>
              <div className="flex justify-between items-start border-l-2 border-transparent group-hover:border-gold pl-0 group-hover:pl-6 transition-all duration-500">
                <div>
                  <span className="text-[10px] text-gold uppercase tracking-[0.2em] font-bold mb-2 block">{project.category}</span>
                  <h4 className="text-2xl font-serif text-[#1a1a1a] mb-2">{project.title}</h4>
                  <p className="text-sm text-gray-400 font-light italic">{project.description}</p>
                </div>
                <div className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center group-hover:bg-gold group-hover:border-gold transition-all">
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </div>
              </div>
            </div>
          ))}
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
