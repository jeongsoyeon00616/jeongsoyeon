
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
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-charcoal">
      {BACKGROUND_IMAGES.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 z-0 transition-opacity duration-1500 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
        >
          <div className="w-full h-full scale-105 animate-[slowZoom_20s_infinite_alternate]">
            <img
              src={image}
              alt={`Luxury Interior ${index + 1}`}
              className="w-full h-full object-cover brightness-[0.7]"
            />
          </div>
        </div>
      ))}

      <style>{`
        @keyframes slowZoom {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }
      `}</style>

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <div className="overflow-hidden mb-6">
          <span className="text-gold uppercase tracking-[0.4em] text-[10px] block animate-fadeInUp font-semibold">Soyeon Jeong Design Studio</span>
        </div>
        <h1 className="text-5xl md:text-8xl font-serif text-white mb-8 leading-[1.1] animate-fadeInUp">
          정제된 미학, <br />
          <span className="italic text-white/90">침묵 속에 깃든 럭셔리.</span>
        </h1>
        <p className="text-sm md:text-lg text-white/70 font-light mb-12 max-w-xl mx-auto tracking-wide leading-relaxed animate-fadeInUp delay-200">
          공간의 본질에 집중하여 일상의 품격을 높이는 <br className="hidden md:block" />
          하이엔드 미니멀리즘의 정수를 선사합니다.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 animate-fadeInUp delay-300">
          <a href="#projects" className="group flex items-center gap-4 text-white text-[11px] uppercase tracking-[0.3em] font-medium">
            포트폴리오 살펴보기
            <span className="w-12 h-[1px] bg-gold group-hover:w-20 transition-all duration-500"></span>
          </a>
          <button
            onClick={onOpenDesignLens}
            className="group flex items-center gap-4 text-gold text-[11px] uppercase tracking-[0.3em] font-bold"
          >
            DesignLens AI 시작하기
            <span className="w-5 h-5 border border-gold rounded-full flex items-center justify-center group-hover:bg-gold group-hover:text-white transition-all">→</span>
          </button>
        </div>
      </div>

      <div className="absolute bottom-12 left-10 hidden lg:flex flex-col gap-4 text-white/40 text-[10px] tracking-widest vertical-rl uppercase font-medium">
        STUDIO SOYEON — SNS / 인스타그램 / 비핸스
      </div>
    </section>
  );
};

export default Hero;
