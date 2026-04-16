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
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-charcoal text-center px-6">
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
              className="w-full h-full object-cover brightness-[0.75] contrast-[1.05]"
            />
          </div>
        </div>
      ))}

      {/* SUBTLE DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/25 z-[1] pointer-events-none"></div>

      {/* CONTENT AREA: CENTER ALIGNED */}
      <div className="relative z-10 transition-all duration-1000 max-w-5xl mx-auto">
        <div className="overflow-hidden mb-12">
          <span className="uppercase tracking-[0.6em] text-[10px] md:text-xs block animate-fadeInUp font-bold text-gold opacity-90">
            Jeong Soyeon Portfolio
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-serif text-white mb-10 leading-[1.2] animate-fadeInUp italic font-light tracking-tight">
          Where Detail <br />
          Becomes Space.
        </h1>

        <p className="text-xs md:text-sm lg:text-base font-light mb-14 max-w-xl mx-auto tracking-[0.25em] leading-relaxed animate-fadeInUp delay-200 text-white/70">
          오래도록 머물고 싶은 편안한 공간, <br />
          작은 디테일의 힘으로 완성합니다.
        </p>
      </div>

      {/* LEFT BOTTOM: DESIGNLENS AI (Matching Archive style) */}
      <button
        onClick={onOpenDesignLens}
        className="absolute bottom-12 left-6 md:left-10 z-20 group flex items-center gap-3 text-[11px] tracking-[0.4em] uppercase font-bold text-white/40 hover:text-gold transition-colors animate-fadeInUp delay-300"
      >
        DesignLens AI
        <span className="w-6 h-6 border border-white/20 rounded-full flex items-center justify-center transition-all group-hover:border-gold group-hover:bg-gold/10">
          <span className="text-[10px] group-hover:translate-x-0.5 transition-transform">→</span>
        </span>
      </button>

      {/* RIGHT BOTTOM: ARCHIVE TEXT (Matching DesignLens style) */}
      <div className="absolute bottom-12 right-6 md:right-10 z-10 hidden lg:flex items-center gap-3 text-[11px] tracking-[0.4em] uppercase font-bold text-white/30">
        JEONG SOYEON — ARCHIVE
        <span className="w-6 h-6 border border-white/10 rounded-full flex items-center justify-center">
          <span className="text-[8px] opacity-50">01</span>
        </span>
      </div>
    </section>
  );
};

export default Hero;
