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
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-charcoal text-center">
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
              className="w-full h-full object-cover brightness-[0.8] contrast-[1.05]"
            />
          </div>
        </div>
      ))}

      {/* SUBTLE DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/20 z-[1] pointer-events-none"></div>

      {/* CONTENT AREA: CENTER ALIGNED */}
      <div className="relative z-10 px-6 transition-all duration-1000 max-w-5xl mx-auto">
        <div className="overflow-hidden mb-8">
          <span className="uppercase tracking-[0.6em] text-[10px] md:text-xs block animate-fadeInUp font-bold text-gold">
            Jeong Soyeon Portfolio
          </span>
        </div>

        <h1 className="text-5xl md:text-8xl lg:text-9xl font-serif text-white mb-10 leading-[1.1] animate-fadeInUp">
          <span className="italic font-light">Where</span> Detail <br />
          Becomes <span className="font-bold">Space.</span>
        </h1>

        <p className="text-sm md:text-lg font-light mb-14 max-w-xl mx-auto tracking-widest leading-relaxed animate-fadeInUp delay-200 text-white/90">
          오래도록 머물고 싶은 편안한 공간, <br />
          작은 디테일의 힘으로 완성합니다.
        </p>

        <div className="flex justify-center animate-fadeInUp delay-300">
          <button
            onClick={onOpenDesignLens}
            className="group flex items-center gap-5 text-[11px] uppercase tracking-[0.4em] font-bold text-gold hover:text-white transition-colors"
          >
            DesignLens AI
            <span className="w-8 h-8 border border-gold/40 rounded-full flex items-center justify-center transition-all group-hover:bg-gold group-hover:border-gold group-hover:text-white group-hover:scale-110">→</span>
          </button>
        </div>
      </div>

      {/* SIDE ARCHIVE TEXT */}
      <div className="absolute bottom-12 right-10 hidden lg:flex flex-col gap-4 text-[9px] tracking-[0.4em] vertical-rl uppercase font-bold text-white/30">
        JEONG SOYEON — ARCHIVE
      </div>
    </section>
  );
};

export default Hero;
