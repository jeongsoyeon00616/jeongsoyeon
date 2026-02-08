
import React from 'react';

const STEPS = [
  {
    title: 'Spatial Analysis',
    subtitle: '평면도 및 동선 최적화',
    description: '하이엔드 주거의 핵심은 보이지 않는 동선에 있습니다. 사용자의 라이프스타일을 시뮬레이션하여 가장 우아하고 효율적인 레이아웃을 도출합니다.',
    checklist: ['정밀 현장 실측 및 구조 진단', '프라이빗 동선 분리 설계', '공간별 기능 및 가구 배치 최적화'],
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'Material Curation',
    subtitle: '하이엔드 마감재 큐레이션',
    description: '따뜻한 미니멀리즘을 완성하는 것은 소재의 질감입니다. 유럽산 프리미엄 스톤과 원목, 특수 도장재를 엄선하여 공간의 품격을 결정합니다.',
    checklist: ['이탈리아산 대리석 및 원목 큐레이션', '커스텀 조명 제어 시스템 계획', '컬러 및 텍스처 무드보드 완성'],
    image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'Fidelity Rendering',
    subtitle: '3D 정밀 시뮬레이션',
    description: 'V-Ray 기반의 고해상도 렌더링을 통해 시공 전 공간을 경험합니다. 빛의 조도와 반사광까지 계산된 시뮬레이션으로 오차 없는 결과를 약속합니다.',
    checklist: ['고해상도 실사 렌더링 제공', '조명 조도 및 연색성 체크', '디테일 마감 상세도 검토'],
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41fa33a8?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'Art Styling',
    subtitle: '스타일링 및 최종 검수',
    description: '공간의 완성은 디테일한 스타일링에서 나옵니다. 엄선된 아트워크와 오브제를 배치하고, 최종 시공 품질을 철저히 감리합니다.',
    checklist: ['아트 및 오브제 큐레이션', '가구 세팅 및 조명 각도 조절', '무결점 마감 품질 최종 검수'],
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1200'
  }
];

const Workflow: React.FC = () => {
  return (
    <section id="workflow" className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-10">
        <div className="text-center mb-24">
          <h2 className="text-gold text-[11px] font-bold uppercase tracking-[0.3em] mb-4">The Process</h2>
          <p className="text-4xl md:text-5xl font-serif text-[#1a1a1a]">완벽을 향한 정교한 과정</p>
        </div>

        <div className="space-y-32">
          {STEPS.map((step, index) => (
            <div key={index} className={`flex flex-col md:flex-row items-center gap-16 lg:gap-32 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className="flex-1 w-full">
                <div className="relative aspect-[16/10] overflow-hidden shadow-2xl group">
                  <img 
                    src={step.image} 
                    alt={step.title} 
                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200";
                    }}
                  />
                  <div className="absolute inset-0 bg-charcoal/10 group-hover:bg-transparent transition-colors duration-700"></div>
                  <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-sm px-6 py-3 text-gold text-xs font-bold tracking-widest shadow-lg">
                    STAGE 0{index + 1}
                  </div>
                </div>
              </div>
              <div className="flex-1 space-y-8">
                <div>
                  <h4 className="text-gold text-[11px] font-bold tracking-[0.2em] uppercase mb-2">{step.title}</h4>
                  <h3 className="text-3xl md:text-4xl font-serif text-[#1a1a1a] leading-tight">{step.subtitle}</h3>
                </div>
                <p className="text-gray-500 font-light leading-relaxed text-lg">
                  {step.description}
                </p>
                <div className="h-[1px] w-12 bg-gold/30"></div>
                <ul className="space-y-4">
                  {step.checklist.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4 text-sm text-gray-700">
                      <span className="mt-1 w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0"></span>
                      <span className="font-light">{item}</span>
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
