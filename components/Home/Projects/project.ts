export type ProjectCategory = "dev" | "ux" | "ongoing" | "learning";
export type ProjectFilter = ProjectCategory | "all";
export type ProjectStatus = "completed" | "in progress" | "planned";

export type ProjectType =
  | "Full-stack app"
  | "Frontend app"
  | "Landing page"
  | "UX case study"
  | "Concept app";

export type Project = {
  id: string;
  title: string;
  year: string;
  type: ProjectType;
  status: ProjectStatus;
  categories: ProjectCategory[];
  featured?: boolean;

  shortDescription: string;
  description: string;
  role: string[];
  featuredRole?: string[];

  problem?: string;
  solution?: string;
  designProcess?: string;
  uxDecisions?: string[];
  nextSteps?: string[];
  uxPlanning?: string;
  currentDevProcess?: string[];

  keyFeatures: string[];
  techStack: string[];

  image: string;
  imageAlt: string;

  wireframes?: { src: string; alt: string }[];

  gallery?: {
    src: string;
    alt: string;
  }[];

  links?: {
    live?: string;
    github?: string;
    frontend?: string;
    backend?: string;
  };
};
