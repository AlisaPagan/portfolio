import ProjectCard from "@/components/UI/ProjectCard/ProjectCard";
import { projects } from "../Projects/projectsInfo";
import styles from "./ProjectsGrid.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function ProjectGrid() {
  return (
    <div className={styles.projectsGrid}>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project}></ProjectCard>
      ))}
    </div>
  );
}

export default ProjectGrid;
