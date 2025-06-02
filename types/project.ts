export interface Project {
  id: number;
  year: string;
  title: string;
  subtitle: string;
  image: string;
  demoUrl: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  challenges?: string;
  solutions?: string;
  features?: string[];
} 