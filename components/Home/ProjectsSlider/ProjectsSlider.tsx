import ProjectCard from "@/components/UI/ProjectCard/ProjectCard";
import type { ProjectPreview } from "../Projects/project";
import styles from "./ProjectsSlider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { GoChevronRight, GoChevronLeft } from "react-icons/go";
import Button from "@/components/UI/Button/Button";
import Icon from "@/components/UI/Icon/Icon";

import "swiper/css";
import "swiper/css/navigation";

type ProjectsGridProps = {
  projects: ProjectPreview[];
};

function ProjectGrid({ projects }: ProjectsGridProps) {
  return (
    <>
      <Swiper
        className={styles.projectsSwiper}
        modules={[Navigation]}
        spaceBetween={24}
        slidesPerView={1}
        preventInteractionOnTransition={true}
        speed={450}
        navigation={{
          prevEl: ".projectsPrev",
          nextEl: ".projectsNext",
        }}
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

      <div className={styles.sliderControls}>
        <Button
          variant="secondary"
          className={`${styles.navButton} projectsPrev`}
          aria-label="Previous project"
        >
          <Icon
            icon={GoChevronLeft}
            size={24}
            className={styles.controlsIcon}
          />
        </Button>

        <Button
          variant="secondary"
          className={`${styles.navButton} projectsNext`}
          aria-label="Next project"
        >
          <Icon
            icon={GoChevronRight}
            size={24}
            className={styles.controlsIcon}
          />
        </Button>
      </div>
    </>
  );
}

export default ProjectGrid;
