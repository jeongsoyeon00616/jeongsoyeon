
import React from 'react';

const STEPS = [
  {
    title: '공간 읽기',
    subtitle: '평면도 분석부터 동선 최적화까지, 당신의 하루를 관찰합니다',
    description: '하이엔드 주거의 핵심은 보이지 않는 동선에 있습니다. 사용자의 라이프스타일을 시뮬레이션하여 가장 우아하고 효율적인 레이아웃을 도출합니다.',
    checklist: ['정밀 현장 실측 및 구조 진단', '프라이빗 동선 분리 설계', '공간별 기능 및 가구 배치 최적화'],
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: '소재 선별',
    subtitle: '이탈리아산 대리석부터 국내 장인 목재까지, 품격 있는 마감재를 직접 큐레이션합니다',
    description: '따뜻한 미니멀리즘을 완성하는 것은 소재의 질감입니다. 유럽산 프리미엄 스톤과 원목, 특수 도장재를 엄선하여 공간의 품격을 결정합니다.',
    checklist: ['이탈리아산 대리석 및 원목 큐레이션', '커스텀 조명 제어 시스템 계획', '컬러 및 텍스처 무드보드 완성'],
    image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: '현실 같은 시뮬레이션',
    subtitle: '포토리얼 3D 렌더링으로 완공 전 공간을 미리 경험합니다',
    description: 'V-Ray 기반의 고해상도 렌더링을 통해 시공 전 공간을 경험합니다. 빛의 조도와 반사광까지 계산된 시뮬레이션으로 오차 없는 결과를 약속합니다.',
    checklist: ['고해상도 실사 렌더링 제공', '조명 조도 및 연색성 체크', '디테일 마감 상세도 검토'],
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41fa33a8?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: '완성의 디테일',
    subtitle: '조명 각도, 소품 배치, 컬러 밸런스까지 마지막 1%를 점검합니다',
    description: '공간의 완성은 디테일한 스타일링에서 나옵니다. 엄선된 아트워크와 오브제를 배치하고, 최종 시공 품질을 철저히 감리합니다.',
    checklist: ['아트 및 오브제 큐레이션', '가구 세팅 및 조명 각도 조절', '무결점 마감 품질 최종 검수'],
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1200'
  }
];

import { DesignPersona } from '../types';

interface WorkflowProps {
  currentPersona: DesignPersona;
}

const Workflow: React.FC<WorkflowProps> = ({ currentPersona }) => {
  const isBrutalist = currentPersona === DesignPersona.BRUTALIST;
  const isEditorial = currentPersona === DesignPersona.EDITORIAL;
  const isNoir = currentPersona === DesignPersona.NOIR;
  const isDark = isBrutalist || isNoir;

  return (
    <section id="workflow" className={`py-40 transition-colors duration-1000 overflow-hidden ${isNoir ? 'bg-black border-t border-zinc-900' : (isBrutalist ? 'bg-zinc-950 border-t border-zinc-900' : 'bg-white')
      }`}>
      <div className="max-w-7xl mx-auto px-10">
        <div className={`text-center mb-32 transition-all duration-1000 ${isEditorial ? 'text-left' : ''}`}>
          <h2 className={`text-[10px] font-bold uppercase tracking-[0.4em] mb-4 ${isNoir ? 'text-gold' : (isBrutalist ? 'text-zinc-600' : 'text-gold')
            }`}>
            {isNoir ? 'CINEMATIC PHASES' : (isBrutalist ? 'TECHNICAL FLOW' : 'The Process')}
          </h2>
          <p className={`text-5xl md:text-7xl ${isNoir ? 'font-serif italic text-white' : (isBrutalist ? 'font-sans font-black text-white uppercase tracking-tighter' : 'font-serif text-[#1a1a1a]')
            }`}>
            {isNoir ? 'Creative Journey' : (isBrutalist ? 'BUILDING SYSTEM' : '완벽을 향한 정교한 과정')}
          </p>
        </div>

        <div className="space-y-40">
          {STEPS.map((step, index) => (
            <div key={index} className={`flex flex-col md:flex-row items-center gap-20 lg:gap-32 ${index % 2 === 1 && !isEditorial ? 'md:flex-row-reverse' : ''
              }`}>
              <div className="flex-1 w-full">
                <div className={`relative transition-all duration-1000 group ${isBrutalist ? 'aspect-[4/3] rounded-none' : 'aspect-[16/10] overflow-hidden'
                  } ${!isBrutalist && 'shadow-2xl'}`}>
                  <img
                    src={step.image}
                    alt={step.title}
                    className={`w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110 ${isNoir ? 'brightness-[0.4] contrast-125 saturate-0' : (isBrutalist ? 'grayscale contrast-150 brightness-[0.5] mix-blend-screen' : '')
                      } ${isEditorial ? 'saturate-0 brightness-[0.8]' : ''}`}
                  />
                  {isBrutalist && (
                    <div className="absolute inset-0 border border-zinc-800 pointer-events-none">
                      <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-zinc-500"></div>
                      <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-zinc-500"></div>
                    </div>
                  )}
                  <div className={`absolute top-6 left-6 px-5 py-2 text-[10px] font-bold tracking-widest shadow-lg ${isNoir ? 'bg-white text-black' : (isBrutalist ? 'bg-white text-black' : 'bg-white/95 text-gold')
                    }`}>
                    {isNoir ? 'CHAPTER 0' : 'PHASE 0'}{index + 1}
                  </div>
                </div>
              </div>
              <div className={`flex-1 space-y-10 transition-colors duration-1000 ${isDark ? 'text-zinc-400' : ''}`}>
                <div>
                  <h4 className={`text-[10px] font-bold tracking-[0.3em] uppercase mb-3 ${isNoir ? 'text-gold' : (isBrutalist ? 'text-zinc-600' : 'text-gold')
                    }`}>{step.title}</h4>
                  <h3 className={`text-3xl md:text-5xl transition-colors duration-1000 ${isNoir ? 'font-serif text-white italic' : (isBrutalist ? 'font-sans font-bold text-white uppercase italic' : 'font-serif text-[#1a1a1a]')
                    }`}>{step.subtitle}</h3>
                </div>
                <p className={`font-light leading-relaxed text-lg transition-colors duration-1000 ${isDark ? 'text-zinc-500' : 'text-gray-500'
                  }`}>
                  {step.description}
                </p>
                <div className={`h-[1px] w-16 transition-colors ${isDark ? 'bg-zinc-800' : 'bg-gold/30'}`}></div>
                <ul className="grid grid-cols-1 gap-5">
                  {step.checklist.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4 text-sm">
                      <span className={`mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors ${isNoir ? 'bg-gold' : (isBrutalist ? 'bg-zinc-700' : 'bg-gold')
                        }`}></span>
                      <span className={`font-light ${isDark ? 'text-zinc-400' : 'text-gray-700'}`}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workflow;
