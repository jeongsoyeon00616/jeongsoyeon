
import React from 'react';
import { SKILLS, EDUCATIONS, CERTIFICATIONS } from '../constants';

import { DesignPersona } from '../types';

interface AboutProps {
  currentPersona: DesignPersona;
}

const About: React.FC<AboutProps> = ({ currentPersona }) => {
  const isBrutalist = currentPersona === DesignPersona.BRUTALIST;
  const isEditorial = currentPersona === DesignPersona.EDITORIAL;

  const philosophyText = {
    [DesignPersona.TIMELESS]: {
      title: "유연함의 미학.",
      desc: "저는 20대만의 트렌디한 감각과 하이엔드 주거가 요구하는 클래식한 품격 사이의 완벽한 균형을 탐구합니다. 공간은 머무는 이의 동선에 따라 흐르는 하나의 이야기여야 합니다."
    },
    [DesignPersona.BRUTALIST]: {
      title: "STRUCTURAL INTEGRITY.",
      desc: "거칠고 솔직한 소재의 미학. 본연의 가치를 왜곡하지 않는 본질적인 공간 구성을 지향합니다. 불필요한 장식을 배제하고 구조 그 자체가 갖는 힘에 집중합니다."
    },
    [DesignPersona.EDITORIAL]: {
      title: "Curated \n Void.",
      desc: "비워냄으로서 채워지는 감각. 정밀하게 큐레이션된 가구와 빛, 그리고 여백의 조화를 통해 예술적 영감이 공존하는 정적인 공간을 디자인합니다."
    }
  };

  return (
    <section id="about" className={`py-40 transition-colors duration-1000 ${isBrutalist ? 'bg-zinc-900 border-t border-zinc-800' : 'bg-white'
      }`}>
      <div className={`mx-auto px-10 transition-all duration-1000 ${isEditorial ? 'max-w-6xl' : 'max-w-7xl'}`}>
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-24 items-start ${isEditorial ? 'flex-col-reverse' : ''}`}>

          <div className="lg:col-span-6">
            <h2 className={`text-[10px] font-bold uppercase tracking-[0.4em] mb-6 ${isBrutalist ? 'text-zinc-500' : 'text-gold'}`}>
              {isBrutalist ? 'LOGIC — 01' : (isEditorial ? 'IDENTITY' : 'Philosophy')}
            </h2>
            <h3 className={`text-6xl md:text-8xl mb-12 leading-[0.9] transition-all duration-1000 ${isBrutalist ? 'font-sans font-black text-white uppercase tracking-tighter' : 'font-serif text-[#1a1a1a]'
              }`}>
              {philosophyText[currentPersona].title.split('\n').map((line, i) => (
                <span key={i} className={i === 1 ? 'italic opacity-60' : ''}>{line}<br /></span>
              ))}
            </h3>

            <div className={`space-y-10 font-light leading-relaxed text-lg transition-colors duration-1000 ${isBrutalist ? 'text-zinc-400 font-sans' : 'text-[#4a4a4a]'
              }`}>
              <p className="first-letter:text-5xl first-letter:font-serif first-letter:mr-3 first-letter:float-left first-letter:text-gold">
                {philosophyText[currentPersona].desc}
              </p>

              <div className={`border-l-2 pl-8 py-3 transition-colors duration-1000 ${isBrutalist ? 'border-zinc-700 bg-zinc-800/30' : 'border-gold bg-gray-50/50'
                }`}>
                <p className={`italic text-sm leading-relaxed ${isBrutalist ? 'text-zinc-500' : 'text-charcoal'}`}>
                  {isBrutalist
                    ? "SYSTEM: REFINEMENT THROUGH REDUCTION. EVERY LINE MUST SERVE A PURPOSE."
                    : (isEditorial ? "Less is enough. The silence of space is the ultimate luxury." : "공간은 머무는 이의 동선에 따라 흐르는 하나의 이야기여야 합니다.")}
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
              <div className={`overflow-hidden transition-all duration-1000 ${isBrutalist ? 'aspect-[3/4] rounded-none grayscale contrast-125' : 'aspect-square rounded-sm shadow-2xl'
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
