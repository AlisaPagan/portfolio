import projects, { featuredProject } from "./projectsInfo";
import type { Project, ProjectPreview } from "./project";
import ProjectsClient from "./ProjectsClient";

const toProjectPreview = (project: Project): ProjectPreview => ({
  id: project.id,
  title: project.title,
  year: project.year,
  type: project.type,
  status: project.status,
  categories: project.categories,
  shortDescription: project.shortDescription,
  role: project.role,
  featuredRole: project.featuredRole,
  techStack: project.techStack,
  image: project.image,
  imageAlt: project.imageAlt,
  links: project.links,
});

function Projects() {
  return (
    <ProjectsClient
      projects={projects.map(toProjectPreview)}
      featuredProject={
        featuredProject ? toProjectPreview(featuredProject) : null
      }
    />
  );
}

export default Projects;
