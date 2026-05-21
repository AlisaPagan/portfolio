"use client";

import styles from "./UxProcess.module.css";
import { Project } from "@/components/Home/Projects/project";
import ImageSlider from "@/components/UI/ImageSlider/ImageSlider";

type UxProcessProps = {
  project: Project;
};

function UxProcess({ project }: UxProcessProps) {
  const isUx = project.categories.includes("ux");
  const isGoRaiding = project.id === "go-raiding";

  return (
    <section className={`${styles.uxProcess} section`}>
      <div className={styles.glow}></div>
      <div
        className={`${isGoRaiding ? styles.sectionWrapperGoRaiding : ""} ${styles.sectionWrapper} container`}
      >
        {project.wireframes && (
          <ImageSlider
            images={project.wireframes}
            navId={`${project.id}-wireframes`}
            className={styles.imgSwiper}
            slideClassName={styles.imgContainer}
            slidesPerView={1}
            slidesPerViewTablet={isGoRaiding ? 2 : 1}
            slidesPerViewDesktop={isGoRaiding ? 2 : 1}
          />
        )}

        {isUx && !isGoRaiding && (
          <div className={styles.content}>
            <h2 className={styles.title}>Design Process</h2>
            <p className={styles.description}>{project.designProcess}</p>
          </div>
        )}

        {isGoRaiding && (
          <div className={styles.content}>
            <h2 className={styles.titleGoRaiding}>UX Planning</h2>
            <p className={styles.description}>{project.uxPlanning}</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default UxProcess;
