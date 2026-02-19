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
    <section className="relative h-screen w-full flex items-center justify-start overflow-hidden bg-charcoal">
      {/* BACKGROUND IMAGES WITH OVERLAY */}
      {BACKGROUND_IMAGES.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 z-0 transition-opacity duration-[2000ms] ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="w-full h-full scale-100 animate-slowZoom">
            <img
              src={image}
              alt={`Interior ${index + 1}`}
              className="w-full h-full object-cover brightness-[0.85] contrast-[1.05]"
            />
          </div>
        </div>
      ))}

      {/* SUBTLE DARK OVERLAY (0.15) */}
      <div className="absolute inset-0 bg-black/15 z-[1] pointer-events-none"></div>

      {/* CONTENT AREA: LEFT ALIGNED */}
      <div className="relative z-10 text-left px-8 md:px-24 xl:px-32 transition-all duration-1000 max-w-7xl">
        <div className="overflow-hidden mb-12">
          <span className="uppercase tracking-[0.6em] text-[10px] md:text-xs block animate-fadeInUp font-bold text-gold opacity-90">
            Jeong Soyeon Portfolio
          </span>
        </div>

        <h1 className="text-6xl md:text-[7rem] lg:text-[8.5rem] font-serif text-white mb-12 leading-[1.1] animate-fadeInUp flex flex-col gap-2">
          <span className="font-light italic opacity-95">Where</span>
          <span className="font-medium tracking-[0.1em] uppercase -mt-4 md:-mt-8">Detail</span>
          <span className="font-light italic opacity-95 -mt-4 md:-mt-8">Becomes</span>
          <span className="font-bold -mt-4 md:-mt-8">Space.</span>
        </h1>

        <p className="text-sm md:text-base font-light mb-16 max-w-lg tracking-widest leading-relaxed animate-fadeInUp delay-200 text-white/80">
          오래도록 머물고 싶은 편안한 공간, <br />
          작은 디테일의 힘으로 완성합니다.
        </p>

        <div className="flex animate-fadeInUp delay-300">
          <button
            onClick={onOpenDesignLens}
            className="group flex items-center gap-6 text-[10px] uppercase tracking-[0.4em] font-bold text-gold hover:text-white transition-colors"
          >
            DesignLens AI
            <span className="w-10 h-10 border border-gold/40 rounded-full flex items-center justify-center transition-all group-hover:bg-gold group-hover:border-gold group-hover:text-white group-hover:scale-110">→</span>
          </button>
        </div>
      </div>

      {/* SIDE ARCHIVE TEXT */}
      <div className="absolute bottom-16 right-12 hidden lg:flex flex-col gap-6 text-[8px] tracking-[0.5em] vertical-rl uppercase font-bold text-white/40">
        JEONG SOYEON — ARCHIVE 01
      </div>

      {/* DECORATIVE LINE ACCENT */}
      <div className="absolute bottom-0 left-0 w-1/3 h-[1px] bg-gradient-to-r from-gold/50 to-transparent z-[2]"></div>
    </section>
  );
};

export default Hero;
