
import { Project, Skill, Education, Certification } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: '판교 푸르지오 그랑블',
    category: '하이엔드 미니멀리즘 (High-end Residential)',
    imageUrl: '/assets/projects/pangyo_main.jpg',
    galleryUrls: [
      '/assets/projects/pangyo_main.jpg',
      '/assets/projects/pangyo_sub1.jpg',
      '/assets/projects/pangyo_sub2.jpg',
      '/assets/projects/pangyo_sub3.jpg'
    ],
    description: '공간의 비례와 빛의 질감을 극대화한 하이엔드 주거 프로젝트.',
    longDescription: '단순한 주거를 넘어 삶의 가치를 담는 그릇으로서의 공간을 기획했습니다. Graybooth와의 협업으로 완성된 결과물은 무몰딩 패널 시공과 히든 도어, 그리고 정교한 조명 제어 시스템을 통해 시각적 노이즈를 제거하고 순수한 공간감을 제공합니다.',
    features: ['전문 사진 작가(Graybooth) 촬영 프로젝트', '전 구역 무몰딩 및 히든 도어 시공', '커스텀 아일랜드 및 주방 레이아웃 재설계', '스마트 홈 루틴 조명 시나리오 적용'],
    specs: {
      location: '경기도 성남시 분당구 판교',
      area: '52평형',
      period: '2024.12 - 2025.01'
    }
  },
  {
    id: '2',
    title: '도곡렉슬 304동',
    category: '우드 & 미니멀 레지던스 (Premium Residence)',
    imageUrl: '/assets/projects/dogok_main.jpg',
    galleryUrls: [
      '/assets/projects/dogok_main.jpg',
      '/assets/projects/dogok_sub1.jpg',
      '/assets/projects/dogok_sub2.jpg'
    ],
    description: '따뜻한 천연 목재와 직선적 미학이 조화를 이룬 도곡동 주거 공간.',
    longDescription: '가족의 아늑한 휴식을 위한 웜 톤의 인테리어를 기반으로 합니다. 170여 장의 촬영 기록이 증명하듯, 현장의 모든 디테일을 직접 감리하며 천연 원목 마루와 벽체의 연결성을 확보했습니다. 특히 슬라이딩 붙박이장과 제우스 레일을 활용한 정밀 수납 설계가 돋보이는 현장입니다.',
    features: ['천연 원목 질감을 살린 벽체 인테리어', '제우스 레일 기반의 슬라이딩 시스템', '전실 및 복도 동선 최적화 수납 설계', '조도 시뮬레이션을 통한 간접 조명 계획'],
    specs: {
      location: '서울 특별시 강남구 도곡동',
      area: '43평형',
      period: '2025.07 - 2025.08'
    }
  },
  {
    id: '3',
    title: '압구정 현대 75동',
    category: '모던 클래식 리노베이션 (Renovation)',
    imageUrl: '/assets/projects/apgujeong_main_v2.jpg',
    galleryUrls: [
      '/assets/projects/apgujeong_main_v2.jpg',
      '/assets/projects/apgujeong_sub1.jpg',
      '/assets/projects/apgujeong_sub2.jpg'
    ],
    description: '오랜 역사의 주거지에 현대적 숨결을 불어넣은 정교한 리모델링.',
    longDescription: '전폭적인 레이아웃 변경과 구조 보강이 수반된 고난도의 리노베이션 프로젝트입니다. 하이엔드 자재의 믹스앤매치를 통해 클래식 아파트의 단점을 보완하고, 디자이너 소연의 감각을 더해 개방감 있는 럭셔리 주거 공간으로 재탄생시켰습니다.',
    features: ['내력벽 한계를 극복한 오픈 레이아웃', '프리미엄 스톤 및 수입 자재 큐레이션', '스케치업 기반의 정밀 가구 모델링', '현장 밀착 감리를 통한 시공 품질 확보'],
    specs: {
      location: '서울 특별시 강남구 압구정동',
      area: '52평형',
      period: '2025.06 - 2025.07'
    }
  },
  {
    id: '4',
    title: '개포우성 1차',
    category: '공간 브랜딩 & 스타일링 (Space Curation)',
    imageUrl: '/assets/projects/gaepo_main.jpg',
    galleryUrls: [
      '/assets/projects/gaepo_main.jpg',
      '/assets/projects/gaepo_sub1.jpg',
      '/assets/projects/gaepo_sub2.jpg'
    ],
    description: '디자이너의 정교한 시선으로 큐레이팅된 품격 있는 주거 스타일링.',
    longDescription: '사용자의 라이프스타일에 맞춘 가구 배치와 집기 큐레이션이 돋보이는 현장입니다. 시공 단계별 사진 기록(1~4일차 및 최종)이 증명하듯, 철저한 현장 관리 하에 완성되었으며, 톤온톤 매치를 통해 시각적 안정감을 구현했습니다.',
    features: ['라이프스타일 맞춤형 공간 브랜딩', '컬러 및 텍스처 큐레이션 서비스', '친환경 고급 도장 및 마감재 매칭', '단계별 시공 기록을 통한 투명한 품질 관리'],
    specs: {
      location: '서울 특별시 강남구 대치동',
      area: '45평형',
      period: '2025.04 - 2025.05'
    }
  },
  {
    id: '5',
    title: '타워팰리스 G동 (Design Stage)',
    category: '하이엔드 기술 설계 (Technical Planning)',
    imageUrl: '/assets/projects/tower_main.png',
    description: '2026년 현재 진행 중인 타워팰리스 55B 타입의 정교한 설계 아카이브.',
    longDescription: '단순한 공사를 넘어 기술적 설계의 정점을 보여주는 현재 진행형 자료입니다. 미크래빗 전송용 SKP 모델링과 공사 일정표, 실측 자료를 바탕으로 최상의 결과물을 도출하기 위한 빌드업 과정에 있으며, 기획 단계의 철저함을 보여줍니다.',
    features: ['55B 타입 전체 레이아웃 재구성', '미크래빗 협업 정밀 3D 모델링', '복합 설비 및 특수 금속 발주 관리', '데이터 기반의 효율적 공정 스케줄링'],
    specs: {
      location: '서울 특별시 강남구 도곡동',
      area: '55평형',
      period: '2025.10 - 2026.02 (진행중)'
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
  { degree: '실내건축학 석사', school: '홍익대학교 대학원', period: '2019 - 2021' },
  { degree: '실내환경디자인 학사', school: '서울대학교', period: '2015 - 2019' },
];

export const CERTIFICATIONS: Certification[] = [
  { name: '실내건축기사 (국가기술자격)', date: '2019' },
  { name: 'PMP (프로젝트 관리 전문가)', date: '2022' },
  { name: 'LEED AP ID+C', date: '2021' },
];
