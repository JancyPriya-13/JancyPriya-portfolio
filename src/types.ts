export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Mobile & IoT' | 'AI & Data Science' | 'Web & Full Stack';
  description: string;
  problemStatement: string;
  solution: string;
  technologies: string[];
  features: string[];
  architecturePoints: string[];
  metrics?: { label: string; value: string }[];
  liveDemoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  gradient: string;
  badge: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  passingYear: string;
  grade: string;
  gradeDetail?: string;
  status?: string;
  highlights: string[];
  skillsGained: string[];
}

export interface SkillItem {
  name: string;
  level: 'Proficient' | 'Intermediate' | 'Familiar';
  percentage: number;
  category: 'Programming' | 'Web & Mobile' | 'Data & AI' | 'Tools & Platforms';
  iconName?: string;
  description?: string;
}

export interface LanguageItem {
  language: string;
  fluency: string;
  nativeScript?: string;
  proficiency: number;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  skills: string[];
}
