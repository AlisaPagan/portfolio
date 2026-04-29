import ProjectCard from "@/components/UI/ProjectCard/ProjectCard";
import { Project } from "../Projects/project";
import styles from "./ProjectsGrid.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

type ProjectsGridProps = {
  projects: Project[];
};

function ProjectGrid({ projects }: ProjectsGridProps) {
  return (
    <Swiper
      className={styles.projectsSwiper}
      modules={[Navigation, Pagination]}
      spaceBetween={24}
      slidesPerView={1}
      navigation
      scrollbar={{ draggable: true }}
      breakpoints={{
        768: {
          slidesPerView: 2,
          spaceBetween: 32,
        },

        1440: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      }}
    >
      {projects.map((project) => (
        <SwiperSlide key={project.id} className={styles.projectSlide}>
          <ProjectCard key={project.id} project={project}></ProjectCard>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ProjectGrid;
