import React from 'react';
import { Scan, Palette, Monitor, CheckCircle } from 'lucide-react';
import { DesignPersona } from '../types';

interface WorkflowProps {
  currentPersona: DesignPersona;
}

const Workflow: React.FC<WorkflowProps> = ({ currentPersona }) => {
  const isBrutalist = currentPersona === DesignPersona.BRUTALIST;
  const isEditorial = currentPersona === DesignPersona.EDITORIAL;
  const isNoir = currentPersona === DesignPersona.NOIR;
  const isDark = isBrutalist || isNoir;

  const STEPS = [
    {
      icon: <Scan className="w-8 h-8 md:w-10 md:h-10 transition-transform duration-500 group-hover:scale-110" strokeWidth={1} />,
      title: '공간 분석',
      desc: '평면도부터 동선까지, 당신의 하루를 관찰하여 가장 효율적인 레이아웃을 도출합니다.'
    },
    {
      icon: <Palette className="w-8 h-8 md:w-10 md:h-10 transition-transform duration-500 group-hover:scale-110" strokeWidth={1} />,
      title: '소재 큐레이션',
      desc: '이탈리아산 대리석부터 국내 장인 목재까지, 품격 있는 마감재를 직접 선별합니다.'
    },
    {
      icon: <Monitor className="w-8 h-8 md:w-10 md:h-10 transition-transform duration-500 group-hover:scale-110" strokeWidth={1} />,
      title: '3D 시뮬레이션',
      desc: 'V-Ray 기반의 고해상도 렌더링을 통해 시공 전 공간을 완벽하게 미리 경험합니다.'
    },
    {
      icon: <CheckCircle className="w-8 h-8 md:w-10 md:h-10 transition-transform duration-500 group-hover:scale-110" strokeWidth={1} />,
      title: '디테일 완성',
      desc: '조명 각도, 소품 배치, 컬러 밸런스. 마지막 1%까지 꼼꼼하게 점검합니다.'
    }
  ];

  return (
    <section id="workflow" className={`py-32 transition-colors duration-1000 ${isNoir ? 'bg-black border-t border-zinc-900' : (isBrutalist ? 'bg-zinc-950 border-t border-zinc-900' : 'bg-white')
      }`}>
      <div className="max-w-7xl mx-auto px-10">
        <div className={`text-center mb-24 transition-all duration-1000 ${isEditorial ? 'text-left' : ''}`}>
          <h2 className={`text-[10px] font-bold uppercase tracking-[0.4em] mb-4 ${isNoir ? 'text-gold' : (isBrutalist ? 'text-zinc-600' : 'text-gold')
            }`}>
            {isNoir ? 'CINEMATIC PHASES' : (isBrutalist ? 'TECHNICAL FLOW' : 'The Process')}
          </h2>
          <p className={`text-4xl md:text-6xl ${isNoir ? 'font-serif italic text-white' : (isBrutalist ? 'font-sans font-black text-white uppercase tracking-tighter' : 'font-serif text-[#1a1a1a]')
            }`}>
            {isNoir ? 'Creative Journey' : (isBrutalist ? 'BUILDING SYSTEM' : '완벽을 향한 정교한 과정')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {STEPS.map((step, index) => (
            <div key={index} className="group relative">
              <div className={`mb-8 flex items-center justify-center w-20 h-20 rounded-full border transition-all duration-500 ${isNoir ? 'border-zinc-800 bg-zinc-900/50 text-gold group-hover:border-gold' :
                (isBrutalist ? 'border-zinc-800 bg-zinc-900 text-white group-hover:bg-white group-hover:text-black' : 'border-gray-100 bg-gray-50 text-gold group-hover:bg-gold group-hover:text-white')
                }`}>
                {step.icon}
              </div>

              <h4 className={`text-sm font-bold tracking-[0.2em] uppercase mb-4 transition-colors ${isNoir ? 'text-white' : (isBrutalist ? 'text-zinc-400 font-sans' : 'text-[#1a1a1a]')
                }`}>{step.title}</h4>

              <p className={`text-sm font-light leading-relaxed transition-colors ${isDark ? 'text-zinc-500' : 'text-gray-500'
                }`}>
                {step.desc}
              </p>

              <div className={`absolute top-0 right-0 text-[10px] font-bold opacity-30 ${isNoir ? 'text-zinc-700' : 'text-gray-300'}`}>0{index + 1}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workflow;
