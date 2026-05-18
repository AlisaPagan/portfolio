import styles from "./Intro.module.css";
import { Project } from "@/components/Home/Projects/project";
import Image from "next/image";

type IntroProps = {
  project: Project;
};

function Intro({ project }: IntroProps) {
  const isDev = project.categories.includes("dev");
  const isUx = project.categories.includes("ux");
  const isGoRaiding = project.id === "go-raiding";

  const introImg = project.gallery?.[1] ?? {
    src: project.image,
    alt: project.imageAlt,
  };

  return (
    <section className={`${styles.intro} section`}>
      <div className={`${styles.sectionWrapper} container`}>
        {isGoRaiding && (
          <div className={styles.idea}>
            <h2 className={styles.title}>Product Idea</h2>
            <p className={styles.description}>{project.description}</p>
          </div>
        )}

        <div className={styles.content}>
          <div className={styles.leftContainer}>
            {(isDev || isUx) && (
              <div className={styles.imageContainer}>
                <Image
                  src={introImg.src}
                  alt={introImg.alt}
                  width={400}
                  height={400}
                  className={styles.img}
                />
              </div>
            )}
          </div>

          <div className={styles.rightContainer}>
            {isDev && !isGoRaiding && (
              <div className={styles.info}>
                <h3 className={styles.subtitle}>Overview</h3>
                <div className={styles.meta}>
                  <ul className={styles.metaList}>
                    <li className={styles.metaItem}>{project.year}</li>
                    <li className={styles.metaItem}>{project.type}</li>
                    <li className={styles.metaItem}>{project.status}</li>
                    <li className={styles.metaItem}>{project.categories}</li>
                  </ul>
                </div>
                <hr className={styles.divider} />
                <p>{project.description}</p>
              </div>
            )}

            {isUx && (
              <div className={styles.info}>
                <h3 className={styles.subtitle}>Problem & Solution</h3>

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
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Intro;
