
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
    description: '베이지와 우드의 따뜻한 조화가 돋보이는 3인 가족의 보금자리.',
    longDescription: '은은한 베이지 톤을 베이스로 우드를 더해 아늑한 분위기를 강조한 공간이다. 집의 중심인 주방에는 필름 대신 천연 무늬목을 적용해 자연 소재의 질감이 온전히 드러나도록 계획하였으며, 커피를 즐기는 클라이언트의 라이프스타일을 반영해 포켓도어형 홈바를 구성하였다. 내부는 헤어라인 PET 마감과 측면 조명으로 디테일을 더하고, 천장 매립형 후드를 통해 시각적인 간섭을 최소화하였다. 각 방에도 공간의 특성에 맞춘 가구 설계를 적용하여 전반적인 마감의 완성도를 높였다.',
    features: ['천연 무늬목 주방 설계', '포켓도어 맞춤형 홈바', '가족 구성원 맞춤 가구 설계'],
    specs: {
      location: '성남시 분당구 백현동 판교푸르지오그랑블',
      area: '37py',
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
      '/assets/projects/gaepo/7.jpg', '/assets/projects/gaepo/8.jpg', '/assets/projects/gaepo/video.mp4', '/assets/projects/gaepo/9.jpg',
      '/assets/projects/gaepo/10.jpg', '/assets/projects/gaepo/11.jpg', '/assets/projects/gaepo/12.jpg',
      '/assets/projects/gaepo/13.jpg', '/assets/projects/gaepo/14.jpg', '/assets/projects/gaepo/15.jpg',
      '/assets/projects/gaepo/16.jpg', '/assets/projects/gaepo/17.jpg', '/assets/projects/gaepo/18.jpg'
    ],
    description: '넓은 공간에 세밀한 가구 디테일로 포인트를 더해 완성도를 높인 현장.',
    longDescription: '가족 구성원이 집에 들어서서 머무는 동선을 면밀히 분석하여 각 가구의 위치를 기능적으로 배치한 프로젝트이다. 단조로울 수 있는 넓은 평수의 공간감을 극복하기 위해 주방부터 다이닝, 거실로 이어지는 흐름 곳곳에 다이닝장, 거실 장식장 등 정교한 가구 디테일을 치밀하게 채워 밀도를 높였다. 클라이언트의 취향을 반영한 컬러 포인트를 더해 모두가 편안하게 머물 수 있는 조화롭고 따스한 톤앤매너를 구현하였다.',
    features: ['동선 기반 맞춤 평면 기획', '수납 효율 극대화 가구 설계', '따스한 무드의 소재 큐레이션'],
    specs: {
      location: '서울시 강남구 대치동 개포우성 1차',
      area: '65py',
      period: '2025. 04'
    },
    videoUrl: '/assets/projects/gaepo/video.mp4'
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
    description: '1인 가구의 독립적인 취미와 탁 트인 뷰를 반영한 프라이빗 와인바.',
    longDescription: '오롯이 1인을 위한 공간으로서 클라이언트의 확고한 취향을 자재와 공간 곳곳에 녹여낸 현장이다. 주방의 빅슬랩 타일을 중심으로 전체 컬러 밸런스를 맞췄으며, 외부 조망을 온전히 즐길 수 있도록 창가에 와인잔 거치대와 맞춤형 홈바를 계획하였다. 안방에는 상부 개폐형 화장대와 특수 하드웨어를 적용한 옷걸이봉 등 클라이언트의 동선에 최적화된 가구를 설계하여, 집의 기능을 개인의 취향 영역으로 완벽하게 확장하였다.',
    features: ['1인 가구 솔로 라이프스타일 반영', '조망권 극대화 가구 배치', '커스텀 와인바 및 홈오피스 기획'],
    specs: {
      location: '서울시 용산구 용산동5가 용산 파크타워',
      area: '40py',
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
    description: '클라이언트의 수납 스타일을 면밀히 반영하여 디테일을 더한 현장.',
    longDescription: '디자인의 확장과 함께 다양한 특수 하드웨어 적용을 시도한 공간이다. 주방에는 리프트업 도어를 적용해 깔끔한 선을 유지하면서 공간 활용도를 높였고, 평행하게 이어지는 복도장 역시 새로운 방식으로 치수와 비례를 계획해 공간감을 부여하였다. 특히 고객이 자주 사용하는 가방의 형태와 수납 방식을 면밀히 분석한 뒤, 맞춤형 가방걸이를 직접 제작해 드림으로써 일상적인 불편함을 디테일로 해결해낸 현장이다.',
    features: ['리프트업 하드웨어 주방 설계', '고객 동선 맞춤 커스텀 가방걸이', '비례감을 조정한 복도장 기획'],
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
      '/assets/projects/dogok/1.jpg', '/assets/projects/dogok/2.jpg', '/assets/projects/dogok/3.jpg',
      '/assets/projects/dogok/4.jpg', '/assets/projects/dogok/5.jpg', '/assets/projects/dogok/6.jpg',
      '/assets/projects/dogok/7.jpg', '/assets/projects/dogok/8.jpg', '/assets/projects/dogok/9.jpg',
      '/assets/projects/dogok/10.jpg', '/assets/projects/dogok/11.jpg', '/assets/projects/dogok/12.jpg',
      '/assets/projects/dogok/13.jpg', '/assets/projects/dogok/14.jpg', '/assets/projects/dogok/15.jpg',
      '/assets/projects/dogok/16.jpg', '/assets/projects/dogok/17.jpg', '/assets/projects/dogok/18.jpg',
      '/assets/projects/dogok/19.jpg', '/assets/projects/dogok/20.jpg', '/assets/projects/dogok/21.jpg',
      '/assets/projects/dogok/22.jpg', '/assets/projects/dogok/23.jpg', '/assets/projects/dogok/24.jpg',
      '/assets/projects/dogok/25.jpg'
    ],
    description: '금속 소재를 폭넓게 활용해 정교함의 층위를 더한 5인 가족의 주거 공간.',
    longDescription: '해외에 거주 중인 클라이언트를 대신하여, 실측과 현장 단계에서부터 각별히 신경을 집중한 프로젝트이다. 물리적 거리로 인한 제약을 완벽한 마감으로 극복하기 위해 난이도 높은 디테일 요소들을 과감히 적용하였다. 거실 복도장 벽면의 매립형 금속 바, 주방 홈바의 \'ㄷ\'자 단조 선반 등 금속 하드웨어 연계를 1mm의 오차 없이 치밀하게 풀어내며, 단순한 주거 공간 이상의 견고한 완성도를 이끌어내었다.',
    features: ['단차 없는 금속 디테일 시공', '정밀 실측 기반 가구 설계', '동선 기반 5인 가구 레이아웃'],
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
    description: '트렌디한 소재의 감각적인 매치와 선의 정밀함이 돋보이는 신혼부부의 첫 보금자리.',
    longDescription: '2인 가구인 신혼부부의 로망을 실현하면서도 실용성을 놓치지 않기 위해 공간의 본질에 집중한 프로젝트이다. 주방에는 SUS(스테인리스) 상판과 아이보리 계열의 소재를 매칭하여 차가운 금속과 따뜻한 색감 사이의 감각적인 밸런스를 구축하였다. 현관장은 하부를 띄워 좁은 구조의 한계를 시각적으로 해소시켰다. 지정된 예산 안에서 최고 수준의 밀도를 구현하기 위해 가구 도어의 모든 모서리를 45도 칼도매 방식으로 가공하는 등, 정밀 필름 마감을 통해 마치 하나의 조형물 같은 깊이감을 연출하였다.',
    features: ['SUS 상판과 아이보리 소재의 매치', '좁은 현관 극복을 위한 띄움장 설계', '45도 칼도매 정밀 필름 마감 적용'],
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
