import styles from "./DevFocus.module.css";
import { Project } from "@/components/Home/Projects/project";

type DevFocusProps = {
  project: Project;
};
function DevFocus({ project }: DevFocusProps) {
  return (
    <section className={`${styles.devFocusSeciton} section reveal`} data-reveal>
      <div className={`${styles.sectionWrapper} container`}>
        <h2 className={styles.title}>Development Focus</h2>
        <div className={styles.content}>
          <div className={styles.leftContainer}>
            <ul className={styles.goals}>
              <li className={styles.goalItem}>
                <span className={styles.goalHeading}>Problem: </span>
                {project.problem}
              </li>
              <li className={styles.dividerItem} aria-hidden="true">
                <hr className="divider" />
              </li>

              <li className={styles.goalItem}>
                <span className={styles.goalHeading}>Solution: </span>
                {project.solution}
              </li>
            </ul>
          </div>
          <div className={styles.rightContainer}>
            {project.devFocus?.map((focus) => (
              <p key={focus} className={styles.description}>
                {focus}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default DevFocus;
