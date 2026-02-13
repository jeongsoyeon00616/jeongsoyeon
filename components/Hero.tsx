import React, { useState, useEffect } from 'react';

const BACKGROUND_IMAGES = [
  "/luxury_wood_white_interior_1770539236547.png",
  "/wood_white_interior_1770539198655.png",
  "/wood_white_interior_hero_1770539217494.png",
  "/wood_white_interior_hero_1770539254930.png",
  "/wood_white_interior_hero_1770539277252.png",
  "/wood_white_interior_hero_1770539296677.png"
];

interface HeroProps {
  onOpenDesignLens: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenDesignLens }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % BACKGROUND_IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-charcoal">
      {BACKGROUND_IMAGES.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 z-0 transition-opacity duration-[2000ms] ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="w-full h-full scale-100 animate-slowZoom">
            <img
              src={image}
              alt={`Interior ${index + 1}`}
              className="w-full h-full object-cover brightness-[0.7]"
            />
          </div>
        </div>
      ))}

      <div className="absolute inset-0 bg-black/20 z-[1] pointer-events-none"></div>

      <div className="relative z-10 text-center px-6 transition-all duration-1000 max-w-5xl">
        <div className="overflow-hidden mb-8">
          <span className="uppercase tracking-[0.5em] text-xs md:text-sm block animate-fadeInUp font-bold text-gold">
            Jeong Soyeon Portfolio
          </span>
        </div>

        <h1 className="text-6xl md:text-[9rem] font-serif text-white mb-8 leading-[0.9] animate-fadeInUp">
          The Ease <br />
          <span className="italic text-white/90 font-light">of Detail.</span>
        </h1>

        <p className="text-sm md:text-lg font-light mb-12 max-w-xl mx-auto tracking-wide leading-relaxed animate-fadeInUp delay-200 text-white/80">
          머물수록 편안한 공간, 디테일로 완성합니다.
        </p>

        <div className="flex flex-col items-center gap-10 animate-fadeInUp delay-300 md:flex-row justify-center">
          <button
            onClick={onOpenDesignLens}
            className="group flex items-center gap-4 text-[11px] uppercase tracking-[0.3em] font-bold text-gold"
          >
            DesignLens AI
            <span className="w-6 h-6 border rounded-full flex items-center justify-center transition-all border-gold group-hover:bg-gold group-hover:text-white">→</span>
          </button>
        </div>
      </div>

      <div className="absolute bottom-12 left-10 hidden lg:flex flex-col gap-4 text-[9px] tracking-[0.4em] vertical-rl uppercase font-bold text-white/30">
        JEONG SOYEON — ARCHIVE
      </div>
    </section>
  );
};

export default Hero;
