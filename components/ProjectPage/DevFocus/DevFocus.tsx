import styles from "./DevFocus.module.css";
import { Project } from "@/components/Home/Projects/project";

type DevFocusProps = {
  project: Project;
};
function DevFocus({ project }: DevFocusProps) {
  return (
    <section className={`${styles.devFocusSeciton} section`}>
      <div className={`${styles.sectionWrapper} container`}>
        <h2 className={styles.title}>Development Focus</h2>
        <div className={styles.leftContainer}>
          <ul className={styles.goals}>
            <li className={styles.goalItem}>
              <span className={styles.goalHeading}>Problem: </span>
              {project.problem}
            </li>
            <hr className={styles.divider} />

            <li className={styles.goalItem}>
              <span className={styles.goalHeading}>Solution: </span>
              {project.solution}
            </li>
          </ul>
        </div>
        <div className={styles.rightContainer}>
          <p className={styles.description}>{project.description}</p>
        </div>
      </div>
    </section>
  );
}

export default DevFocus;
