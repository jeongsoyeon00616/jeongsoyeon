
import React from 'react';
import { SKILLS, EDUCATIONS, CERTIFICATIONS } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">

          <div className="lg:col-span-6">
            <h2 className="text-gold text-[11px] font-bold uppercase tracking-[0.3em] mb-6">Philosophy</h2>
            <h3 className="text-5xl md:text-6xl font-serif text-[#1a1a1a] mb-12 leading-tight">
              유연함의 <br />
              <span className="italic">미학.</span>
            </h3>

            <div className="space-y-8 text-[#4a4a4a] font-light leading-relaxed text-lg">
              <p>
                안녕하세요, 공간의 본질과 사용자의 삶을 잇는 디자이너 <strong>정소연</strong>입니다.
                저는 20대만의 트렌디한 감각과 하이엔드 주거가 요구하는 클래식한 품격 사이의 완벽한 균형을 탐구합니다.
              </p>
              <p className="border-l-2 border-gold pl-8 py-2 italic text-[#1a1a1a]">
                "공간은 머무는 이의 동선에 따라 흐르는 하나의 이야기여야 합니다.
                그 흐름이 가장 우아하고 자연스러울 수 있도록 설계하는 것이 저의 소명입니다."
              </p>
              <p>
                강남의 럭셔리 라이프스타일에 걸맞은 따뜻한 미니멀리즘(Warm Minimalism)을 추구하며,
                단순히 보기 좋은 공간을 넘어 실질적인 편리함이 녹아든 최적의 동선을 제안합니다.
                AutoCAD와 V-Ray를 통한 정밀한 비주얼라이제이션으로 클라이언트의 상상을
                현실 이상의 가치로 구현해내는 전문성을 경험해보시기 바랍니다.
              </p>
            </div>

            <div className="mt-20 space-y-12">
              <div>
                <h4 className="text-[11px] uppercase tracking-widest text-gray-400 mb-6 font-bold">학력 및 약력</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {EDUCATIONS.map((edu, idx) => (
                    <div key={idx} className="border-b border-gray-100 pb-4">
                      <p className="text-sm font-semibold text-[#1a1a1a]">{edu.degree}</p>
                      <p className="text-[12px] text-gray-500 mt-1">{edu.school} / {edu.period}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-16">
            <div className="relative">
              <div className="aspect-[1/1] overflow-hidden rounded-sm transition-all duration-1000 shadow-2xl bg-gray-50">
                <img
                  src="https://media.licdn.com/dms/image/v2/D5603AQGsdQViyMD_TA/profile-displayphoto-scale_400_400/B56Zw8Sx7lJQAg-/0/1770538083037?e=1772064000&v=beta&t=e-RtbgPpD0mnN9qaCOmxQih0BMBaEHGLEFzimOn-_4s"
                  alt="Designer Soyeon Jeong"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-charcoal p-10 text-white hidden xl:block shadow-2xl">
                <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-3">수석 디자이너</p>
                <h4 className="text-3xl font-serif tracking-tight">정 소 연</h4>
                <div className="w-12 h-[1px] bg-gold mt-6"></div>
              </div>
            </div>

            <div className="bg-[#f9f9f9] p-12">
              <h4 className="text-[11px] uppercase tracking-widest text-gray-400 mb-10 font-bold">기술적 전문성</h4>
              <div className="space-y-10">
                {SKILLS.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-[11px] uppercase tracking-widest font-medium text-gray-600 mb-3">
                      <span>{skill.name}</span>
                      <span className="text-gold">{skill.level}%</span>
                    </div>
                    <div className="w-full h-[1px] bg-gray-200">
                      <div
                        className="h-full bg-gold transition-all duration-[2s]"
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
