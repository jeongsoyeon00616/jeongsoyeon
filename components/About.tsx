
import React from 'react';
import { SKILLS, EDUCATIONS, CERTIFICATIONS } from '../constants';

import { DesignPersona } from '../types';

interface AboutProps {
  currentPersona: DesignPersona;
}

const About: React.FC<AboutProps> = ({ currentPersona }) => {
  const isBrutalist = currentPersona === DesignPersona.BRUTALIST;
  const isEditorial = currentPersona === DesignPersona.EDITORIAL;
  const isNoir = currentPersona === DesignPersona.NOIR;

  const philosophyText = {
    [DesignPersona.TIMELESS]: {
      title: "20대의 감각으로, \n 시대를 초월하는 공간을.",
      desc: "20대의 감각으로, 시대를 초월하는 공간을 만듭니다. 트렌디하지만 오래 사랑받을 수 있는 디자인. 젊지만 성숙한 그 균형점에서, 당신만의 이야기가 시작됩니다."
    },
    [DesignPersona.BRUTALIST]: {
      title: "본질만 남기는 \n 용기.",
      desc: "콘크리트는 콘크리트답게, 철은 철답게. 가공하지 않은 소재의 솔직함으로 완성되는 공간을 만듭니다. 표면을 감추거나 꾸미지 않고, 구조미만으로 공간의 힘을 증명합니다."
    },
    [DesignPersona.EDITORIAL]: {
      title: "공간을 \n 큐레이션합니다.",
      desc: "모든 가구에는 이유가 있고, 모든 여백에는 의도가 있습니다. 빛의 각도, 그림자의 길이, 질감의 대비까지— 마치 한 컷 한 컷 편집된 잡지 화보처럼 일상을 디자인합니다."
    },
    [DesignPersona.NOIR]: {
      title: "그림자를 \n 먼저 설계합니다.",
      desc: "어둠은 결점이 아니라 도구입니다. 낮에는 절제된 톤으로, 밤에는 간접조명이 만드는 레이어드 무드로. 빛과 어둠의 대비 속에서 공간의 드라마가 완성됩니다."
    }
  };

  return (
    <section id="about" className={`py-40 transition-colors duration-1000 ${isNoir ? 'bg-black border-t border-zinc-900' : (isBrutalist ? 'bg-zinc-900 border-t border-zinc-800' : 'bg-white')
      }`}>
      <div className={`mx-auto px-10 transition-all duration-1000 ${isEditorial ? 'max-w-6xl' : 'max-w-7xl'}`}>
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-24 items-start ${isEditorial ? 'flex-col-reverse' : ''}`}>

          <div className="lg:col-span-6">
            <h2 className={`text-[10px] font-bold uppercase tracking-[0.4em] mb-6 ${isNoir ? 'text-gold' : (isBrutalist ? 'text-zinc-500' : 'text-gold')}`}>
              {isNoir ? '04 — NOIR' : (isBrutalist ? 'LOGIC — 01' : (isEditorial ? 'IDENTITY' : 'Philosophy'))}
            </h2>
            <h3 className={`text-6xl md:text-8xl mb-12 leading-[0.9] transition-all duration-1000 ${isNoir ? 'font-serif text-white tracking-tighter' : (isBrutalist ? 'font-sans font-black text-white uppercase tracking-tighter' : 'font-serif text-[#1a1a1a]')
              }`}>
              {philosophyText[currentPersona].title.split('\n').map((line, i) => (
                <span key={i} className={i === 1 ? 'italic opacity-60' : ''}>{line}<br /></span>
              ))}
            </h3>

            <div className={`space-y-10 font-light leading-relaxed text-lg transition-colors duration-1000 ${isNoir ? 'text-zinc-500' : (isBrutalist ? 'text-zinc-400 font-sans' : 'text-[#4a4a4a]')
              }`}>
              <p className="first-letter:text-5xl first-letter:font-serif first-letter:mr-3 first-letter:float-left first-letter:text-gold">
                {philosophyText[currentPersona].desc}
              </p>

              <div className={`border-l-2 pl-8 py-3 transition-colors duration-1000 ${isNoir ? 'border-gold bg-zinc-900/50' : (isBrutalist ? 'border-zinc-700 bg-zinc-800/30' : 'border-gold bg-gray-50/50')
                }`}>
                <p className={`italic text-sm leading-relaxed ${isNoir ? 'text-white' : (isBrutalist ? 'text-zinc-500' : 'text-charcoal')}`}>
                  {isNoir
                    ? "THE BEAUTY OF SHADOW: LIGHT IS NOT THE ONLY TOOL."
                    : (isBrutalist ? "CONCRETE IS CONCRETE, STEEL IS STEEL. NO DISGUISE." : (isEditorial ? "Everything has a reason. Every void has an intention." : "시간이 지나도 질리지 않는 가치, 그 본질에 집중합니다."))}
                </p>
              </div>
            </div>

            <div className="mt-24 space-y-12">
              <h4 className={`text-[10px] uppercase tracking-widest mb-8 font-bold ${isBrutalist ? 'text-zinc-600' : 'text-gray-300'}`}>Academic Background</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                {EDUCATIONS.map((edu, idx) => (
                  <div key={idx} className={`border-b pb-6 transition-colors ${isBrutalist ? 'border-zinc-800' : 'border-gray-100'}`}>
                    <p className={`text-sm font-bold ${isBrutalist ? 'text-white' : 'text-[#1a1a1a]'}`}>{edu.degree}</p>
                    <p className={`text-[11px] mt-2 tracking-wide ${isBrutalist ? 'text-zinc-500' : 'text-gray-400'}`}>{edu.school} / {edu.period}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-20">
            <div className="relative group">
              <div className={`overflow-hidden transition-all duration-1000 grayscale contrast-125 hover:grayscale-0 ${isBrutalist ? 'aspect-[3/4] rounded-none' : 'aspect-square rounded-sm shadow-2xl'
                }`}>
                <img
                  src="https://media.licdn.com/dms/image/v2/D5603AQGsdQViyMD_TA/profile-displayphoto-scale_400_400/B56Zw8Sx7lJQAg-/0/1770538083037?e=1772064000&v=beta&t=e-RtbgPpD0mnN9qaCOmxQih0BMBaEHGLEFzimOn-_4s"
                  alt="Designer Soyeon Jeong"
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                />
              </div>
              <div className={`absolute -bottom-8 -left-8 p-10 hidden xl:block shadow-2xl transition-all duration-1000 ${isBrutalist ? 'bg-white text-black' : 'bg-charcoal text-white'
                }`}>
                <p className={`text-[9px] uppercase tracking-[0.5em] font-black mb-3 ${isBrutalist ? 'text-zinc-400' : 'text-gold'}`}>Lead Designer</p>
                <h4 className={`text-4xl tracking-tight transition-all duration-1000 ${isBrutalist ? 'font-sans font-black italic' : 'font-serif'}`}>정 소 연</h4>
                <div className={`w-12 h-[1px] mt-6 ${isBrutalist ? 'bg-black' : 'bg-gold'}`}></div>
              </div>
            </div>

            <div className={`p-12 transition-all duration-1000 ${isBrutalist ? 'bg-zinc-800/50 border border-zinc-700' : 'bg-[#fcfcfc]'
              }`}>
              <h4 className={`text-[10px] uppercase tracking-widest mb-12 font-bold ${isBrutalist ? 'text-zinc-500' : 'text-gray-400'}`}>Technical Proficiency</h4>
              <div className="space-y-12">
                {SKILLS.map((skill) => (
                  <div key={skill.name}>
                    <div className={`flex justify-between text-[10px] uppercase tracking-[0.2em] font-bold mb-4 ${isBrutalist ? 'text-zinc-400' : 'text-gray-600'
                      }`}>
                      <span>{skill.name}</span>
                      <span className={isBrutalist ? 'text-white' : 'text-gold'}>{skill.level}%</span>
                    </div>
                    <div className={`w-full h-[1px] ${isBrutalist ? 'bg-zinc-700' : 'bg-gray-200'}`}>
                      <div
                        className={`h-full transition-all duration-[2s] ${isBrutalist ? 'bg-white' : 'bg-gold'}`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
