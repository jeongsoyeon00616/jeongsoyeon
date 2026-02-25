import React from 'react';
import { motion } from 'framer-motion';
import { Ruler, Layers, BookOpen } from 'lucide-react';

const About: React.FC = () => {
  const CORE_VALUES = [
    {
      icon: <Ruler className="w-5 h-5" strokeWidth={1.5} />,
      title: 'PRECISION',
      subtitle: '정교함',
      desc: '작은 오차도 허용하지 않는 기준.'
    },
    {
      icon: <Layers className="w-5 h-5" strokeWidth={1.5} />,
      title: 'MATERIAL',
      subtitle: '본성',
      desc: '과하지 않은 재질의 균형.'
    },
    {
      icon: <BookOpen className="w-5 h-5" strokeWidth={1.5} />,
      title: 'NARRATIVE',
      subtitle: '서사',
      desc: '대화에서 시작되는 맞춤 설계.'
    }
  ];

  return (
    <section id="about" className="relative py-40 overflow-hidden bg-[#F9F9F8] transition-colors duration-1000">
      {/* 1. BACKGROUND SKETCH */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0">
        <svg width="100%" height="100%" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 50L750 50M50 150L750 150M50 50L50 750M150 50L150 750" stroke="currentColor" strokeWidth="1" fill="none" />
          <circle cx="400" cy="400" r="300" stroke="currentColor" strokeWidth="1" fill="none" />
          <path d="M200 200L600 600M600 200L200 600" stroke="currentColor" strokeWidth="1" fill="none" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto px-10 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">

          {/* LEFT: PHOTO & STAMP */}
          <div className="lg:col-span-6 relative">
            <motion.div
              className="relative group w-full aspect-[3/4] max-w-md mx-auto"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="absolute -top-6 -left-6 z-20 font-serif italic text-2xl text-gray-300 opacity-60 select-none pointer-events-none">
                Jeong Soyeon
              </div>
              <div className="relative w-full h-full bg-[#E2E2DE] overflow-hidden shadow-sm">
                <img
                  src="/profile.png"
                  alt="Designer Soyeon Jeong"
                  className="w-full h-full object-cover mix-blend-multiply opacity-90 transition-transform duration-[3s] group-hover:scale-105"
                />
              </div>

              {/* RESTORED DECORATIVE STAMP (Est. 2025 • Portfolio) */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 md:w-40 md:h-40 z-20">
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="absolute inset-0 border border-gold/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
                  <div className="text-[8px] uppercase tracking-[0.3em] text-gold/60 font-medium">
                    Est. 2025 • Portfolio
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: CONTENT */}
          <div className="lg:col-span-6 space-y-12 pt-10 lg:pt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-[10px] font-bold uppercase tracking-[0.5em] mb-12 text-gold">
                Philosophy
              </h2>
              <h3 className="text-3xl md:text-4xl font-serif text-[#1a1a1a] mb-8 leading-[1.5] italic font-light">
                선을 다듬고 면을 채우는 일, <br />
                본질은 디테일에 있습니다.
              </h3>
              <div className="space-y-6 text-[15px] text-gray-500 font-light leading-relaxed max-w-lg">
                <p>
                  좋은 공간은 화려함이 아니라 <br />
                  가구 디자이너로 일하며 다져온 정교한 기준과 <br />
                  마감의 완성도에서 비롯됩니다.
                </p>
                <p>
                  시선이 머무는 각도, <br />
                  손끝에 닿는 질감, <br />
                  벽과 가구가 만나는 선.
                </p>
                <p>
                  사소해 보이지만 결정적인 차이들이 모여 <br />
                  시간이 흐를수록 깊어지는 공간을 만듭니다.
                </p>
              </div>
            </motion.div>

            {/* CORE VALUES (Updated Contents) */}
            <div className="grid grid-cols-1 gap-8 pt-12 border-t border-gray-200/50">
              {CORE_VALUES.map((val, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center text-gold bg-gold/5">
                    {val.icon}
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold tracking-[0.2em] uppercase text-gray-900 flex items-center gap-3">
                      {val.title} <span className="text-[10px] font-light text-gray-400 normal-case opacity-70">/ {val.subtitle}</span>
                    </h4>
                    <p className="text-xs text-gray-500 font-light mt-1">{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* EXPERIENCE & EDUCATION (Updated Contents) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-gray-200/50">
              <div className="space-y-6">
                <h4 className="text-[9px] font-bold uppercase tracking-widest text-gray-400">Experience</h4>
                <ul className="space-y-4 text-[11px] text-gray-600 font-light leading-relaxed uppercase tracking-tighter">
                  <li>
                    <span className="block font-bold text-gray-900 text-[10px]">2024. 10 — 2026. 01</span>
                    mikrabbit (미크래빗) — 주임
                  </li>
                </ul>
              </div>
              <div className="space-y-6">
                <h4 className="text-[9px] font-bold uppercase tracking-widest text-gray-400">Education</h4>
                <ul className="space-y-4 text-[11px] text-gray-600 font-light leading-relaxed uppercase tracking-tighter">
                  <li>
                    <span className="block font-bold text-gray-900 text-[10px]">2024. 03 — 2024. 08</span>
                    노원 그린 아카데미 — 실내건축디자인 수료
                  </li>
                  <li>
                    <span className="block font-bold text-gray-900 text-[10px]">2021. 02 — 2024. 02</span>
                    한양사이버대학교 — 산업디자인과 편입/졸업
                  </li>
                  <li>
                    <span className="block font-bold text-gray-900 text-[10px]">2019. 03 — 2021. 02</span>
                    경기과학기술대학교 — 금형디자인과 졸업
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
