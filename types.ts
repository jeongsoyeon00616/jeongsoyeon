
export interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  galleryUrls?: string[];
  description: string;
  longDescription?: string;
  features?: string[];
  specs?: {
    location?: string;
    area?: string;
    period?: string;
  };
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
}

export interface Education {
  degree: string;
  school: string;
  period: string;
}

export interface Certification {
  name: string;
  date: string;
}

export enum AppState {
  HOME = 'HOME',
  UPLOADING = 'UPLOADING',
  ANALYZING = 'ANALYZING',
  RESULT = 'RESULT',
  RETOUCHING = 'RETOUCHING'
}

export enum DesignPersona {
  TIMELESS = 'TIMELESS', // Warm Luxury, Classic
  BRUTALIST = 'BRUTALIST', // Raw, Bold, Industrial
  EDITORIAL = 'EDITORIAL'  // Minimal, Magazine, Airy
}

export interface DesignAnalysis {
  styleName: string;
  description: string;
  palette: string[];
  scores: { [key: string]: number };
  elements: { item: string; score: number; feedback: string }[];
  suggestions: { title: string; description: string; actionType: string }[];
}
