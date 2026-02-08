
import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { Project, DesignPersona } from '../types';
import ProjectDetailModal from './ProjectDetailModal';

interface GalleryProps {
  currentPersona: DesignPersona;
}

const Gallery: React.FC<GalleryProps> = ({ currentPersona }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const isBrutalist = currentPersona === DesignPersona.BRUTALIST;
  const isEditorial = currentPersona === DesignPersona.EDITORIAL;
  const isNoir = currentPersona === DesignPersona.NOIR;

  return (
    <section id="projects" className={`py-40 transition-colors duration-1000 ${isNoir ? 'bg-black border-t border-zinc-900' : (isBrutalist ? 'bg-zinc-950 border-t border-zinc-900' : 'bg-[#fcfcfc]')
      }`}>
      <div className={`mx-auto px-10 transition-all duration-1000 ${isEditorial ? 'max-w-[100rem]' : 'max-w-7xl'}`}>
        <div className={`flex flex-col md:flex-row justify-between items-baseline mb-32 border-b pb-12 transition-colors duration-1000 ${isNoir ? 'border-zinc-800' : (isBrutalist ? 'border-zinc-800' : 'border-gray-100')
          }`}>
          <div>
            <h2 className={`text-[10px] font-bold uppercase tracking-[0.4em] mb-4 ${isNoir ? 'text-gold' : (isBrutalist ? 'text-zinc-500' : 'text-gold')
              }`}>{isEditorial ? 'STUDIO — WORKS' : (isNoir ? 'SELECTED — NOIR' : 'Portfolio')}</h2>
            <h3 className={`text-5xl md:text-7xl ${isNoir ? 'font-serif italic text-white' : (isBrutalist ? 'font-sans font-black text-white uppercase tracking-tighter' : 'font-serif text-[#1a1a1a]')
              }`}>
              {isNoir ? 'Cinematic Archive' : (isBrutalist ? 'PROJECT DATA' : '엄선된 파이널 아카이브')}
            </h3>
          </div>
          <div className={`mt-8 md:mt-0 flex gap-10 text-[9px] uppercase tracking-[0.3em] font-bold ${isNoir ? 'text-zinc-500' : (isBrutalist ? 'text-zinc-600' : 'text-gray-400')
            }`}>
            <button className={`${isNoir ? 'text-gold border-gold' : (isBrutalist ? 'text-white border-white' : 'text-[#1a1a1a] border-[#1a1a1a]')} border-b`}>Archive</button>
            <button className="hover:text-gold transition-colors">Residential</button>
            <button className="hover:text-gold transition-colors">Commercial</button>
          </div>
        </div>

        <div className={`grid gap-x-20 gap-y-40 transition-all duration-1000 ${isBrutalist ? 'grid-cols-1 md:grid-cols-3' : 'grid-cols-1 md:grid-cols-12 items-start'}`}>
          {PROJECTS.slice(0, 4).map((project, index) => {
            // Editorial layout logic
            const getLayoutClass = () => {
              if (isBrutalist) return '';
              switch (index % 4) {
                case 0: return 'md:col-span-7';
                case 1: return 'md:col-span-5 md:mt-32';
                case 2: return 'md:col-span-5 md:ml-12';
                case 3: return 'md:col-span-7 md:mt-24 md:ml-auto';
                default: return 'md:col-span-6';
              }
            };

            return (
              <div
                key={project.id}
                className={`group cursor-pointer transition-all duration-1000 ${getLayoutClass()}`}
                onClick={() => setSelectedProject(project)}
              >
                <div className={`relative overflow-hidden mb-10 transition-all duration-700 ${isNoir ? 'aspect-[4/5] border border-zinc-900 group-hover:border-gold/50' :
                  (isBrutalist ? 'aspect-square border border-zinc-800 grayscale sepia-[0.2] group-hover:grayscale-0' : 'aspect-[16/11] shadow-2xl group-hover:shadow-xl')
                  }`}>
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 ${isNoir ? 'brightness-[0.4] group-hover:brightness-100 contrast-125 saturate-0 group-hover:saturate-100' : ''
                      }`}
                  />
                  <div className={`absolute inset-0 transition-opacity duration-700 flex items-center justify-center ${isNoir ? 'bg-black/40 opacity-0 group-hover:opacity-100' :
                    (isBrutalist ? 'bg-white/10 opacity-0 group-hover:opacity-100' : 'bg-charcoal/20 opacity-0 group-hover:opacity-100')
                    }`}>
                    <span className="text-white text-[9px] uppercase tracking-[0.5em] font-bold translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      {isNoir ? 'View Cinematic' : 'Explore Data'}
                    </span>
                  </div>
                </div>
                <div className={`transition-all duration-500 ${isBrutalist ? 'border-t border-zinc-800 pt-6' : 'pl-0 group-hover:pl-6 border-l-2 border-transparent group-hover:border-gold'
                  }`}>
                  <div>
                    <span className={`text-[9px] uppercase tracking-[0.3em] font-bold mb-3 block ${isBrutalist ? 'text-zinc-600' : 'text-gold'
                      }`}>{project.category}</span>
                    <h4 className={`text-3xl md:text-5xl mb-4 transition-colors duration-1000 ${isBrutalist ? 'font-sans font-bold text-white uppercase tracking-tight' : 'font-serif text-[#1a1a1a]'
                      }`}>{project.title}</h4>
                    <p className={`text-[13px] font-light italic transition-colors duration-1000 ${isBrutalist ? 'text-zinc-500 font-sans' : 'text-gray-400 leading-relaxed'
                      }`}>{project.description}</p>
                  </div>
                </div>
              </div>
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
