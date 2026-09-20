export interface ProjectData {
  title: string;
  slug: string;
  year: number;
  industry: string;
  summary: string;
  description: string;
  services: string[];
  technologies: string[];
  heroImage: string;
  featured: boolean;
  order: number;
  challenge?: string;
  approach?: string;
  solution?: string;
  results?: string[];
  gallery?: string[];
  metrics?: { label: string; value: string }[];
}
