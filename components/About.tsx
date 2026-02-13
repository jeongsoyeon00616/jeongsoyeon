import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-40 transition-colors duration-1000 bg-off-white">
      <div className="mx-auto px-10 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start flex-col-reverse">
          <div className="lg:col-span-6">
            <h2 className="text-xs md:text-sm font-bold uppercase tracking-[0.4em] mb-12 text-gold">
              Philosophy
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif text-[#1a1a1a] mb-10 leading-[1.3]">
              오래도록 편안한 공간, <br />
              작은 디테일의 힘을 믿습니다.
            </h3>
            <p className="text-lg text-gray-400 font-light leading-relaxed mb-10">
              화려한 수식보다는 공간의 본질에 집중합니다. 매일 마주하는 작은 디테일이 모여 일상의 편안함을 완성한다고 믿기에,
              시간이 지나도 질리지 않고 매일 머물고 싶은 담백하고 깊이 있는 공간을 지향합니다.
            </p>
            <div className="space-y-12 pt-10 border-t border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest mb-6 text-[#1a1a1a]">Experience</h4>
                  <ul className="space-y-4 text-xs text-gray-500 font-light leading-relaxed">
                    <li>
                      <span className="block font-bold text-gray-800">2024. 10 — 2026. 01</span>
                      미크래빗 (Mierabbitt) 주임
                    </li>
                    <li>
                      <span className="block font-bold text-gray-800">2024. 03 — 2024. 09</span>
                      그린컴퓨터 아카데미 실내건축디자인과정 수료
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest mb-6 text-[#1a1a1a]">Education</h4>
                  <ul className="space-y-4 text-xs text-gray-500 font-light leading-relaxed">
                    <li>
                      <span className="block font-bold text-gray-800">2024. 02</span>
                      한양사이버대학교 산업디자인과 졸업
                    </li>
                    <li>
                      <span className="block font-bold text-gray-800">2022. 02</span>
                      경기과학기술대학교 금형디자인과 졸업
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 space-y-20">
            <div className="relative group">
              <div className="overflow-hidden transition-all duration-1000 aspect-[4/5] rounded-sm shadow-2xl bg-gray-100">
                <img
                  src="/profile.png"
                  alt="Designer Soyeon Jeong"
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                  onError={(e) => {
                    // Fallback to the image user provided if profile.png is missing
                    (e.target as HTMLImageElement).src = "https://media.licdn.com/dms/image/v2/D5603AQGsdQViyMD_TA/profile-displayphoto-scale_400_400/B56Zw8Sx7lJQAg-/0/1770538083037?e=1772064000&v=beta&t=e-RtbgPpD0mnN9qaCOmxQih0BMBaEHGLEFzimOn-_4s";
                  }}
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 border border-gold/30 rounded-full flex items-center justify-center animate-[spin_10s_linear_infinite] pointer-events-none">
                <div className="text-[8px] uppercase tracking-[0.3em] text-gold/60">
                  Comfort • Detail • Space
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
