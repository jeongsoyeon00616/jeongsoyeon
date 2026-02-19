import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="relative py-40 overflow-hidden bg-[#F9F9F8] transition-colors duration-1000">
      {/* 1. BACKGROUND SKETCH (Faint Architectural Lines) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0">
        <svg width="100%" height="100%" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 50L750 50M50 150L750 150M50 50L50 750M150 50L150 750" stroke="currentColor" strokeWidth="1" fill="none" />
          <circle cx="400" cy="400" r="300" stroke="currentColor" strokeWidth="1" fill="none" />
          <path d="M200 200L600 600M600 200L200 600" stroke="currentColor" strokeWidth="1" fill="none" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto px-10 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">

          {/* LEFT: TEXT CONTENT */}
          <div className="lg:col-span-6 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-[10px] font-bold uppercase tracking-[0.5em] mb-12 text-gold">
                Philosophy
              </h2>
              <h3 className="text-4xl md:text-5xl font-serif text-[#1a1a1a] mb-10 leading-[1.4] italic font-light">
                담백함 속에 깃든 <br />
                깊이 있는 디테일.
              </h3>
              <p className="text-base text-gray-500 font-light leading-relaxed mb-12 max-w-md">
                화려한 수식보다는 공간의 본질에 집중합니다. 매일 마주하는 작은 디테일이 모여 일상의 편안함을 완성한다고 믿기에,
                시간이 지나도 질리지 않고 매일 머물고 싶은 담백하고 깊이 있는 공간을 지향합니다.
              </p>
            </motion.div>

            {/* EXPERIENCE & EDUCATION */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-gray-200/50">
              <div className="space-y-6">
                <h4 className="text-[9px] font-bold uppercase tracking-widest text-gray-400">Experience</h4>
                <ul className="space-y-4 text-[11px] text-gray-600 font-light leading-relaxed uppercase tracking-tighter">
                  <li>
                    <span className="block font-bold text-gray-900">2024. 10 — 2026. 01</span>
                    미크래빗 (Mierabbitt) — 주임
                  </li>
                  <li>
                    <span className="block font-bold text-gray-900">2024. 03 — 2024. 09</span>
                    그린컴퓨터 아카데미 — 실내디자인 수료
                  </li>
                </ul>
              </div>
              <div className="space-y-6">
                <h4 className="text-[9px] font-bold uppercase tracking-widest text-gray-400">Education</h4>
                <ul className="space-y-4 text-[11px] text-gray-600 font-light leading-relaxed uppercase tracking-tighter">
                  <li>
                    <span className="block font-bold text-gray-900">2024. 02</span>
                    한양사이버대학교 — 산업디자인과 졸업
                  </li>
                  <li>
                    <span className="block font-bold text-gray-900">2022. 02</span>
                    경기과학기술대학교 — 금형디자인과 졸업
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* RIGHT: PHOTO & SIGNATURE & STAMP */}
          <div className="lg:col-span-6 relative pt-20">
            {/* SIGNATURE ABOVE PHOTO */}
            <div className="absolute top-0 left-0 z-20 font-serif italic text-2xl md:text-3xl text-gray-300 opacity-60 ml-[-20px] select-none pointer-events-none">
              Jeong Soyeon
            </div>

            <motion.div
              className="relative group w-full aspect-[3/4] max-w-md mx-auto"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              {/* MIX-BLEND-MULTIPLY CONTAINER */}
              <div className="relative w-full h-full bg-[#E2E2DE] overflow-hidden shadow-sm">
                <img
                  src="/profile.png"
                  alt="Designer Soyeon Jeong"
                  className="w-full h-full object-cover mix-blend-multiply opacity-90 transition-transform duration-[3s] group-hover:scale-105"
                />
              </div>

              {/* FLOATING SIGNATURE STAMP / SEAL */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 md:w-40 md:h-40 z-20">
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* Rotating Border */}
                  <div className="absolute inset-0 border border-gold/40 rounded-full animate-[spin_12s_linear_infinite]"></div>
                  {/* Inner Stamp Content */}
                  <div className="bg-[#FAF9F6]/80 backdrop-blur-sm border border-gold/20 rounded-full w-[85%] h-[85%] flex flex-col items-center justify-center text-center shadow-lg">
                    <span className="text-[10px] text-gold font-bold tracking-[0.3em] uppercase mb-1">Authentic</span>
                    <span className="text-[8px] text-gray-400 uppercase tracking-widest">Est. 2025</span>
                    <div className="mt-2 w-6 h-6 border-t border-gold opacity-30"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 2. SIGNATURE KEYWORDS FOOTER */}
        <div className="mt-32 pt-20 border-t border-gray-100 flex flex-wrap justify-between items-center gap-10">
          <div className="flex flex-col gap-2">
            <span className="text-[#1a1a1a] font-serif italic text-xl">Precision.</span>
            <span className="text-[9px] uppercase tracking-[0.4em] text-gray-400">정교한 설계의 시작</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-[#1a1a1a] font-serif italic text-xl">Material.</span>
            <span className="text-[9px] uppercase tracking-[0.4em] text-gray-400">소재 본연의 물성</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-[#1a1a1a] font-serif italic text-xl">Living.</span>
            <span className="text-[9px] uppercase tracking-[0.4em] text-gray-400">삶이 담기는 편안한 공간</span>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center gap-4 text-[9px] uppercase tracking-[0.5em] text-gray-300">
              <span className="w-10 h-[1px] bg-gray-200"></span>
              Scroll Down to Explore
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
