"use client";

import styles from "./Projects.module.css";
import ProjectGrid from "../ProjectsSlider/ProjectsSlider";
import type { ProjectFilter } from "./project";
import { useState } from "react";
import projects, { featuredProject } from "./projectsInfo";
import ProjectsFilter from "../ProjectsFilter/ProjectsFilter";
import FeaturedProject from "../FeaturedProject/FeaturedProject";

function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("all");

  const visibleProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.categories.includes(activeFilter));

  return (
    <section id="projects" className={`section ${styles.projects}`}>
      <div className={`container ${styles.sectionWrapper}`}>
        <h2 className={styles.heading}>Projects</h2>
        {featuredProject && <FeaturedProject project={featuredProject} />}

        <ProjectsFilter
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />

        <div className={styles.projectGrid}>
          <ProjectGrid projects={visibleProjects} />
        </div>
      </div>
    </section>
  );
}

export default Projects;
