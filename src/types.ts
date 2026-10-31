export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  architecturePoints?: string[];
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  videoDemo?: {
    type: 'youtube' | 'local';
    url: string;
    caption?: string;
  };
  metrics?: string;
  badge?: string;
  featured?: boolean;
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  bullets: string[];
  techStack: string[];
}

export interface HonorAccolade {
  title: string;
  organization: string;
  year?: string;
  description: string;
}

