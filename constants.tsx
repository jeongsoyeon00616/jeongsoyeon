
import { Project, Skill, Education, Certification } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'The Penthouse: Gangnam',
    category: 'High-end Residential',
    imageUrl: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200',
    description: 'A masterpiece of spatial hierarchy and premium materials.'
  },
  {
    id: '2',
    title: 'Elysium Private Lounge',
    category: 'Commercial / Luxury',
    imageUrl: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200',
    description: 'Redefining the boundaries of elite networking spaces.'
  },
  {
    id: '3',
    title: 'Marble & Oak Residence',
    category: 'Residential',
    imageUrl: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1200',
    description: 'Where natural stone meets refined wood craftsmanship.'
  },
  {
    id: '4',
    title: 'Signature Suite: Cheongdam',
    category: 'Hospitality',
    imageUrl: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&q=80&w=1200',
    description: 'An immersive experience for the global elite.'
  },
  {
    id: '5',
    title: 'Aesthetic Wellness Center',
    category: 'Commercial',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
    description: 'Zen-inspired minimalism for premium wellness services.'
  },
  {
    id: '6',
    title: 'Executive Atelier',
    category: 'Office Space',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200',
    description: 'The pinnacle of productivity and architectural grace.'
  }
];

export const SKILLS: Skill[] = [
  { name: 'AutoCAD Architectural', level: 98 },
  { name: 'SketchUp Pro / Enscape', level: 95 },
  { name: 'V-Ray High-Fidelity Rendering', level: 92 },
  { name: 'Adobe Suite (Visual Comm.)', level: 88 },
];

export const EDUCATIONS: Education[] = [
  { degree: 'Master of Spatial Design', school: 'Hongik University Graduate School', period: '2019 - 2021' },
  { degree: 'Bachelor of Interior Architecture', school: 'Seoul National University', period: '2015 - 2019' },
];

export const CERTIFICATIONS: Certification[] = [
  { name: 'Interior Architect (National Professional)', date: '2019' },
  { name: 'PMP (Project Management Professional)', date: '2022' },
  { name: 'LEED AP ID+C', date: '2021' },
];
