
import React, { useState, useEffect } from 'react';

const BACKGROUND_IMAGES = [
  "/luxury_wood_white_interior_1770539236547.png",
  "/wood_white_interior_1770539198655.png",
  "/wood_white_interior_hero_1770539217494.png",
  "/wood_white_interior_hero_1770539254930.png",
  "/wood_white_interior_hero_1770539277252.png",
  "/wood_white_interior_hero_1770539296677.png"
];

import { DesignPersona } from '../types';

interface HeroProps {
  onOpenDesignLens: () => void;
  currentPersona: DesignPersona;
}

const Hero: React.FC<HeroProps> = ({ onOpenDesignLens, currentPersona }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % BACKGROUND_IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const isBrutalist = currentPersona === DesignPersona.BRUTALIST;
  const isEditorial = currentPersona === DesignPersona.EDITORIAL;
  const isNoir = currentPersona === DesignPersona.NOIR;

  return (
    <section className={`relative h-screen w-full flex items-center justify-center overflow-hidden transition-colors duration-1000 ${isNoir ? 'bg-black' : (isBrutalist ? 'bg-zinc-950' : 'bg-charcoal')
      }`}>
      {BACKGROUND_IMAGES.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 z-0 transition-opacity duration-[2000ms] ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="w-full h-full scale-100 animate-slowZoom">
            <img
              src={image}
              alt={`Interior ${index + 1}`}
              className={`w-full h-full object-cover ${isNoir ? 'brightness-[0.3] contrast-[1.4] saturate-[0.1]' :
                (isBrutalist ? 'grayscale contrast-125 brightness-[0.4]' : 'brightness-[0.7]')
                } ${isEditorial ? 'saturate-[0.6] brightness-[0.8]' : ''}`}
            />
          </div>
        </div>
      ))}

      {isNoir && (
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black pointer-events-none z-[1]"></div>
      )}

      <div className={`relative z-10 text-center px-6 transition-all duration-1000 ${isEditorial ? 'max-w-7xl w-full flex flex-col md:flex-row justify-between items-end text-left' : 'max-w-5xl'
        }`}>
        <div className={isEditorial ? 'flex-1' : ''}>
          <div className="overflow-hidden mb-8">
            <span className={`uppercase tracking-[0.5em] text-xs md:text-sm block animate-fadeInUp font-bold ${isNoir ? 'text-gold' : (isBrutalist ? 'text-zinc-500' : (isEditorial ? 'text-[#1a1a1a]' : 'text-gold'))
              }`}>
              {isNoir ? 'THE MIDNIGHT COLLECTION' : (isBrutalist ? 'RAW ARCHITECTURE — STUDIO' : (isEditorial ? 'VOL. 01 — ARCHIVE' : 'Soyeon Jeong Design Studio'))}
            </span>
          </div>

          {isNoir ? (
            <h1 className="text-7xl md:text-[11rem] font-serif font-black text-white mb-4 tracking-tighter leading-[0.8] animate-fadeInUp italic">
              Shadow & <br />
              <span className="text-gold not-italic uppercase">Light.</span>
            </h1>
          ) : isBrutalist ? (
            <h1 className="text-6xl md:text-9xl font-sans font-black text-white mb-8 tracking-tighter leading-[0.9] animate-fadeInUp uppercase">
              RAW & <br />
              <span className="text-zinc-600">HONEST.</span>
            </h1>
          ) : isEditorial ? (
            <h1 className="text-7xl md:text-[10rem] font-inter font-light text-white mb-2 leading-[0.85] tracking-tight animate-fadeInUp">
              Curated <br />
              <span className="italic font-serif">Space.</span>
            </h1>
          ) : (
            <h1 className="text-6xl md:text-[10rem] font-serif text-white mb-8 leading-[0.9] animate-fadeInUp">
              Quiet <br />
              <span className="italic text-white/90 font-light">Luxury.</span>
            </h1>
          )}

          {!isEditorial && (
            <p className={`text-sm md:text-lg font-light mb-12 max-w-xl mx-auto tracking-wide leading-relaxed animate-fadeInUp delay-200 ${isNoir ? 'text-gray-400 font-serif' : (isBrutalist ? 'text-zinc-400 font-sans' : 'text-white/70')
              }`}>
              {isNoir
                ? '어둠 속에서 더 선명해지는 디테일. 시간에 따라 다른 표정을 짓는 공간.'
                : (isBrutalist
                  ? '콘크리트, 스틸, 원목. 소재 본연의 물성으로 말하는 공간.'
                  : '불필요한 것을 덜어내고 본질에 집중합니다. 시간이 지나도 질리지 않는, 당신만의 공간을 만듭니다.')}
            </p>
          )}
        </div>

        <div className={`flex flex-col items-center gap-10 animate-fadeInUp delay-300 ${isEditorial ? 'md:items-end md:mb-12' : 'md:flex-row justify-center'
          }`}>
          <button
            onClick={onOpenDesignLens}
            className={`group flex items-center gap-4 text-[11px] uppercase tracking-[0.3em] font-bold ${isBrutalist ? 'text-zinc-400 font-sans' : (isEditorial ? 'text-white' : 'text-gold')
              }`}
          >
            DesignLens AI
            <span className={`w-6 h-6 border rounded-full flex items-center justify-center transition-all ${isBrutalist ? 'border-zinc-800 group-hover:bg-white group-hover:text-black' : 'border-gold group-hover:bg-gold group-hover:text-white'
              }`}>→</span>
          </button>
        </div>
      </div>

      <div className={`absolute bottom-12 left-10 hidden lg:flex flex-col gap-4 text-[9px] tracking-[0.4em] vertical-rl uppercase font-bold transition-colors duration-1000 ${isBrutalist ? 'text-zinc-700' : 'text-white/30'
        }`}>
        {isBrutalist ? 'NO. 2026 — SEOUL OFFICE' : 'STUDIO SOYEON — ARCHIVE'}
      </div>
    </section>
  );
};

export default Hero;
