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

  keyFeatures: string[];
  techStack: string[];

  image: string;
  imageAlt: string;

  links?: {
    live?: string;
    github?: string;
    frontend?: string;
    backend?: string;
  };
};
