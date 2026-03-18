
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
    description: '베이지와 우드의 따뜻한 조화가 돋보이는 3인 가족의 보금자리입니다.',
    longDescription: '은은한 베이지톤 베이스에 우드로 포인트를 주어 아늑함을 강조한 현장입니다. 집의 중심인 주방은 필름 대신 천연 무늬목을 사용하여 은은한 햇빛이 스며들 때 그 질감이 온전히 빛을 발하도록 설계했습니다. 커피를 즐기시는 고객님의 라이프스타일을 반영해 동선 방해 없이 여닫을 수 있는 포켓도어 홈바를 제작했으며, 내부는 헤어라인 PET 마감과 하단 조명 매립 버튼으로 세련된 디테일을 더했습니다. 시선이 방해되지 않도록 천장 매립형 후드를 시공했고, 각 방(안방 서랍장, 따님방 우드찬넬, 아버님 서재 피규어 장식장)에도 맞춤형 가구 설계를 적용해 실용성과 디자인을 모두 충족시켰습니다.',
    features: ['천연 무늬목 주방 설계', '포켓도어 맞춤형 홈바', '가족 구성원 맞춤 가구 제작'],
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
      '/assets/projects/gaepo/7.jpg', '/assets/projects/gaepo/8.jpg', '/assets/projects/gaepo/9.jpg',
      '/assets/projects/gaepo/10.jpg', '/assets/projects/gaepo/11.jpg', '/assets/projects/gaepo/12.jpg',
      '/assets/projects/gaepo/13.JPG', '/assets/projects/gaepo/14.JPG', '/assets/projects/gaepo/15.jpg',
      '/assets/projects/gaepo/16.jpg', '/assets/projects/gaepo/17.jpg', '/assets/projects/gaepo/18.jpg'
    ],
    description: '광폭 구조 안에 짜임새 있게 채워 넣은 가구 디테일이 돋보이는 프로젝트.',
    longDescription: '처음으로 메인 디자인을 담당하게 되어 더욱 의미 있는 현장입니다. 시원하게 트인 광폭 구조를 바탕으로, \'주방-다이닝-거실\'로 이어지는 넓은 동선이 허전해 보이지 않고 알차게 채워진 느낌을 주도록 가구를 기획하고 연계성 있게 배치했습니다. 공간의 큰 흐름 속에서도 다이닝장, 거실 장식장, 드레스룸 오픈장 등 곳곳에 세세한 가구 디테일을 더해 완성도를 한층 끌어올렸으며, 푸른색을 좋아하시는 고객님의 취향을 반영하여 거실과 안방 욕실에 감각적인 블루 포인트를 곁들였습니다.',
    features: ['광폭 레이아웃 기획', '가구 디테일 고도화', '클라이언트 맞춤 컬러 큐레이션'],
    specs: {
      location: '서울시 강남구 대치동 개포우성 1차',
      area: '65py',
      period: '2025. 04'
    }
  },
  {
    id: '3',
    title: '용산파크타워',
    category: 'Residential',
    imageUrl: '/assets/projects/yongsan/썸네일.jpg',
    galleryUrls: [
      '/assets/projects/yongsan/1.jpg', '/assets/projects/yongsan/2.JPG', '/assets/projects/yongsan/3.JPG',
      '/assets/projects/yongsan/4.jpg', '/assets/projects/yongsan/5.jpg', '/assets/projects/yongsan/6.jpg',
      '/assets/projects/yongsan/7.jpg', '/assets/projects/yongsan/8.jpg', '/assets/projects/yongsan/9.jpg',
      '/assets/projects/yongsan/10.jpg', '/assets/projects/yongsan/11.jpg', '/assets/projects/yongsan/12.jpg',
      '/assets/projects/yongsan/13.jpg'
    ],
    description: '확고한 취향을 담은 강렬한 빅슬랩과 무늬목의 조화.',
    longDescription: '고객님의 확고한 취향 덕분에 디자인 과정이 무척 흥미로웠던 현장입니다. 공간의 메인이 된 주방의 강렬한 빅슬랩 타일을 기준으로 전체 자재의 색감과 밸런스를 조율했습니다. 훌륭한 뷰를 감상할 수 있도록 창가에 무늬목 홈바 테이블과 직접 디자인한 와인잔 거치대를 배치하였으며, 거실로 이어지는 라인에는 띄움장과 긴 선반을 적용하여 확장된 공간감을 부여했습니다. 안방에는 특수 하드웨어를 활용해 위로 열리는 화장대를 특별히 제작하고, 옷걸이봉 역시 고객님의 요청에 따라 각진 형태로 섬세하게 커스텀하여 퀄리티를 한층 높였습니다.',
    features: ['빅슬랩 중심의 자재 큐레이션', '무늬목 커스텀 가구 설계', '특수 하드웨어 적용 맞춤 가구'],
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
