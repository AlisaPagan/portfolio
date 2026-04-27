import styles from "./Projects.module.css";
import ProjectGrid from "../ProjectsGrid/ProjectsGrid";

function Projects() {
  return (
    <section id="projects" className={`section ${styles.projects}`}>
      <div className={`container ${styles.sectionWrapper}`}>
        <h2 className={styles.heading}>Projects</h2>

        <div className={styles.projectGrid}>
          <ProjectGrid />
        </div>
      </div>
    </section>
  );
}

export default Projects;
