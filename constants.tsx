
import { Project, Skill, Education, Certification } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: '판교 푸르지오 그랑블',
    category: '하이엔드 주거 (Residential)',
    imageUrl: '/assets/projects/pangyo/main.jpg',
    description: 'Graybooth 전문 촬영본으로 기록된 하이엔드 미니멀리즘의 정석.'
  },
  {
    id: '2',
    title: '압구정 현대 75동',
    category: '프리미엄 리노베이션',
    imageUrl: '/assets/projects/apgujeong/main.jpg',
    description: '클래식한 구조를 현대적 감각으로 재해석한 압구정 현장.'
  },
  {
    id: '3',
    title: '개포우성 1차',
    category: '주거 인테리어',
    imageUrl: '/assets/projects/gaepo/main.jpg',
    description: '디테일한 시공 감리와 정교한 마감이 돋보이는 프로젝트.'
  },
  {
    id: '4',
    title: '타워팰리스 G동 (In Progress)',
    category: '하이엔드 주거',
    imageUrl: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&q=80&w=1200',
    description: '2026년 진행 중인 타워팰리스 프리미엄 주거 프로젝트.'
  },
  {
    id: '5',
    title: '도곡렉슬',
    category: '주거 공간 디자인',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
    description: '공간의 효율성과 미학적 밸런스를 극대화한 현장.'
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
