
import { Project, Skill, Education, Certification } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: '판교푸르지오그랑블',
    category: 'Residential',
    imageUrl: '/assets/projects/pangyo/썸네일.jpg',
    galleryUrls: [
      '/assets/projects/pangyo/1.jpg', '/assets/projects/pangyo/2.jpg', '/assets/projects/pangyo/3.jpg',
      '/assets/projects/pangyo/4.jpg', '/assets/projects/pangyo/5.jpg', '/assets/projects/pangyo/6.jpg',
      '/assets/projects/pangyo/7.jpg', '/assets/projects/pangyo/8.jpg', '/assets/projects/pangyo/9.jpg',
      '/assets/projects/pangyo/10.jpg', '/assets/projects/pangyo/11.jpg', '/assets/projects/pangyo/12.jpg',
      '/assets/projects/pangyo/13.jpg', '/assets/projects/pangyo/14.jpg', '/assets/projects/pangyo/15.jpg',
      '/assets/projects/pangyo/16.jpg', '/assets/projects/pangyo/17.jpg'
    ],
    description: '판교 푸르지오 그랑블의 정제된 아름다움을 담은 공간 디자인.',
    longDescription: '시공을 초월하는 아늑함과 실용성을 겸비한 럭셔리 라이프스타일을 담아냈습니다. 하이엔드 가구와 공간의 조화를 통해 품격 있는 주거 환경을 제안하며, 소재의 프리미엄함과 설계의 정밀함을 동시에 추구했습니다.',
    features: ['프리미엄 가구 설계', '공간 미학 최적화', '디테일 지향 마감재 선정'],
    specs: {
      location: '성남시 분당구 백현동 판교푸르지오그랑블',
      area: '주거공간',
      period: '2025. 01'
    }
  },
  {
    id: '2',
    title: '개포우성',
    category: 'Residential',
    imageUrl: '/assets/projects/gaepo/썸네일.jpg',
    galleryUrls: [
      '/assets/projects/gaepo/1.jpg', '/assets/projects/gaepo/2.jpg', '/assets/projects/gaepo/3.jpg',
      '/assets/projects/gaepo/4.jpg', '/assets/projects/gaepo/5.jpg', '/assets/projects/gaepo/6.jpg',
      '/assets/projects/gaepo/7.jpg', '/assets/projects/gaepo/8.jpg', '/assets/projects/gaepo/9.jpg',
      '/assets/projects/gaepo/10.jpg', '/assets/projects/gaepo/11.jpg', '/assets/projects/gaepo/12.jpg',
      '/assets/projects/gaepo/13.JPG', '/assets/projects/gaepo/14.JPG', '/assets/projects/gaepo/15.jpg',
      '/assets/projects/gaepo/16.jpg', '/assets/projects/gaepo/17.jpg', '/assets/projects/gaepo/18.jpg'
    ],
    description: '개포우성 주거 공간의 정교한 리모델링 프로젝트.',
    longDescription: '가구 설계의 정교함을 바탕으로 기존의 한계를 넘어 공간의 선과 면을 새롭게 다듬은 프로젝트입니다. 사용자의 섬세한 생활 패턴을 분석하여 최적화된 하이엔드 주거 환경을 구현했습니다.',
    features: ['맞춤형 가구 설계', '공간 레이아웃 최적화', '프리미엄 마감재 선정'],
    specs: {
      location: '서울시 강남구 대치동 개포우성 1차',
      area: '주거공간',
      period: '2025. 04'
    }
  },
  {
    id: '3',
    title: '용산파크타워',
    category: 'Residential',
    imageUrl: '/assets/projects/yongsan/썸네일.jpg',
    galleryUrls: [
      '/assets/projects/yongsan/1.jpg', '/assets/projects/yongsan/2.jpg', '/assets/projects/yongsan/3.jpg',
      '/assets/projects/yongsan/4.jpg', '/assets/projects/yongsan/5.jpg', '/assets/projects/yongsan/6.jpg',
      '/assets/projects/yongsan/7.jpg', '/assets/projects/yongsan/8.jpg', '/assets/projects/yongsan/9.jpg',
      '/assets/projects/yongsan/10.jpg', '/assets/projects/yongsan/11.jpg', '/assets/projects/yongsan/12.jpg',
      '/assets/projects/yongsan/13.jpg'
    ],
    description: '용산 파크타워의 모던하고 담백한 인테리어 디자인.',
    longDescription: '도심 속 진정한 휴식을 위한 담백하고 깊이 있는 공간을 지향했습니다. 소재 본연의 묵직한 질감을 살려 시간이 흐를수록 더욱 큰 가치가 느껴지는 타임리스 갤러리 같은 공간을 완성했습니다.',
    features: ['모던 미니멀리즘 디자인', '입체적인 조명 조도 계획', '수납 시스템 고도화'],
    specs: {
      location: '서울시 용산구 용산동5가 용산 파크타워',
      area: '주거공간',
      period: '2025. 05'
    }
  },
  {
    id: '4',
    title: '당산반도유보라',
    category: 'Residential',
    imageUrl: '/assets/projects/dangsan/썸네일.jpg',
    galleryUrls: [
      '/assets/projects/dangsan/1.jpg', '/assets/projects/dangsan/2.jpg', '/assets/projects/dangsan/3.jpg',
      '/assets/projects/dangsan/4.jpg', '/assets/projects/dangsan/5.jpg', '/assets/projects/dangsan/6.jpg',
      '/assets/projects/dangsan/7.jpg', '/assets/projects/dangsan/8.jpg', '/assets/projects/dangsan/9.jpg',
      '/assets/projects/dangsan/10.jpg', '/assets/projects/dangsan/11.jpg', '/assets/projects/dangsan/12.jpg',
      '/assets/projects/dangsan/13.jpg', '/assets/projects/dangsan/14.jpg', '/assets/projects/dangsan/15.jpg',
      '/assets/projects/dangsan/16.jpg'
    ],
    description: '당산 반도유보라의 삶을 담는 그릇으로서의 정제된 공간.',
    longDescription: '시각적 소음을 유발하는 불필요한 장식을 완전히 배제하고 오직 공간의 본질에 집중했습니다. 따뜻하고 아늑한 톤앤매너를 일관되게 유지하며 사용자의 일상과 습관이 자연스럽게 스며드는 공간적 서사를 담았습니다.',
    features: ['톤앤매너 큐레이션', '슬라이딩 도어 시스템', '주방 공간 재구성'],
    specs: {
      location: '서울시 영등포구 당산동 당산반도유보라',
      area: '47py',
      period: '2025. 06'
    }
  },
  {
    id: '5',
    title: '도곡렉슬',
    category: 'Residential',
    imageUrl: '/assets/projects/dogok/썸네일.jpg',
    galleryUrls: [
      '/assets/projects/dogok/1.JPG', '/assets/projects/dogok/2.jpg', '/assets/projects/dogok/3.JPG',
      '/assets/projects/dogok/4.jpg', '/assets/projects/dogok/5.JPG', '/assets/projects/dogok/6.JPG',
      '/assets/projects/dogok/7.JPG', '/assets/projects/dogok/8.JPG', '/assets/projects/dogok/9.jpg',
      '/assets/projects/dogok/10.JPG', '/assets/projects/dogok/11.JPG', '/assets/projects/dogok/12.JPG',
      '/assets/projects/dogok/13.JPG', '/assets/projects/dogok/14.jpg', '/assets/projects/dogok/15.jpg',
      '/assets/projects/dogok/16.jpg', '/assets/projects/dogok/17.jpg', '/assets/projects/dogok/18.jpg',
      '/assets/projects/dogok/19.jpg', '/assets/projects/dogok/20.jpg', '/assets/projects/dogok/21.jpg',
      '/assets/projects/dogok/22.jpg', '/assets/projects/dogok/23.jpg', '/assets/projects/dogok/24.jpg',
      '/assets/projects/dogok/25.JPG'
    ],
    description: '도곡렉슬의 정밀한 선의 조화가 돋보이는 공간 설계.',
    longDescription: '벽과 가구가 만나는 보이지 않는 예리한 선까지 하나의 작품으로 보일 수 있도록 조화롭게 배치하여 마감의 밀도를 높였습니다. 단 1mm의 오차를 허용하지 않는 극상의 정교함이 돋보이는 현장입니다.',
    features: ['정밀 시공 감리', '가구 매스 밸런스 관리', '벽면 패널라이징'],
    specs: {
      location: '서울시 강남구 도곡동 도곡렉슬',
      area: '주거공간',
      period: '2025. 08'
    }
  },
  {
    id: '6',
    title: '창전삼성래미안',
    category: 'Residential',
    imageUrl: '/assets/projects/changjeon/썸네일.jpg',
    galleryUrls: [
      '/assets/projects/changjeon/1.jpg', '/assets/projects/changjeon/3.jpg', '/assets/projects/changjeon/4.jpg'
    ],
    description: '창전 삼성래미안의 본질에 집중한 인테리어 디자인.',
    longDescription: '바쁜 일상에서 돌아와 매일 머물고 싶은 궁극의 편안함을 목표로 설계했습니다. 소재가 가진 천연 고유의 울림을 전달하며, 유행에 흔들리지 않는 견고하면서도 세련된 담백함을 구현했습니다.',
    features: ['소재 본성 강조', '욕실 및 주방 전면 리모델링', '전체 조명 계획 및 설계'],
    specs: {
      location: '서울시 마포구 창전동 창전삼성래미안',
      area: '32py',
      period: '2025. 09'
    }
  }
];


export const SKILLS: Skill[] = [
  { name: 'AutoCAD Architectural', level: 98 },
  { name: 'SketchUp Pro / Enscape', level: 95 },
  { name: 'V-Ray High-Fidelity Rendering', level: 92 },
  { name: 'Space Planning & Sourcing', level: 94 },
];

export const EDUCATIONS: Education[] = [
  { degree: '실내건축디자인 과정 수료', school: '노원 그린 아카데미', period: '2024.03 - 2024.08' },
  { degree: '산업디자인과 졸업 (편입)', school: '한양사이버대학교', period: '2021.02 - 2024.02' },
  { degree: '금형디자인과 졸업', school: '경기과학기술대학교', period: '2019.03 - 2021.02' },
];

export const CERTIFICATIONS: Certification[] = [
  { name: '실내건축기사 (국가기술자격)', date: '2024' },
];
