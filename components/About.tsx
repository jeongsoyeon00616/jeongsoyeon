import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-40 transition-colors duration-1000 bg-off-white">
      <div className="mx-auto px-10 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start flex-col-reverse">
          <div className="lg:col-span-6">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] mb-12 text-gold">
              Philosophy
            </h2>
            <h3 className="text-4xl md:text-6xl font-serif text-[#1a1a1a] mb-10 leading-[1.2]">
              20대의 감각으로, <br />
              시대를 초월하는 공간을.
            </h3>
            <p className="text-lg text-gray-400 font-light leading-relaxed mb-10">
              20대의 감각으로, 시대를 초월하는 공간을 만듭니다. 트렌디하지만 오래 사랑받을 수 있는 디자인.
              젊지만 성숙한 그 균형점에서, 당신만의 이야기가 시작됩니다.
            </p>
            <div className="space-y-8">
              <div className="border-t border-gray-100 pt-8">
                <h4 className="text-xs font-bold uppercase tracking-widest mb-4 text-[#1a1a1a]">Academic Background</h4>
                <ul className="space-y-2 text-sm text-gray-500 font-light">
                  <li>2025. 02 &nbsp; 건국대학교 실내디자인학과 졸업</li>
                  <li>2020. 03 &nbsp; 건국대학교 실내디자인학과 입학</li>
                  <li>2017. 03 &nbsp; 정의여자고등학교 입학</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 space-y-20">
            <div className="relative group">
              <div className="overflow-hidden transition-all duration-1000 aspect-square rounded-sm shadow-2xl bg-gray-100">
                <img
                  src="/profile.png"
                  alt="Designer Soyeon Jeong"
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                  style={{ imageRendering: 'auto' }}
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 border border-gold/30 rounded-full flex items-center justify-center animate-[spin_10s_linear_infinite]">
                <div className="text-[8px] uppercase tracking-[0.3em] text-gold/60">
                  Est. 2025 • Portfolio
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
