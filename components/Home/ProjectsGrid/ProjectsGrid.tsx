import ProjectCard from "@/components/UI/ProjectCard/ProjectCard";
import { Project } from "../Projects/project";
import styles from "./ProjectsGrid.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type ProjectsGridProps = {
  projects: Project[];
};

function ProjectGrid({ projects }: ProjectsGridProps) {
  return (
    <div className={styles.projectsGrid}>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project}></ProjectCard>
      ))}
    </div>
  );
}

export default ProjectGrid;
