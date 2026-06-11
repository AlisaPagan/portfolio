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

  const introImg = project.gallery?.[0] ?? {
    src: project.image,
    alt: project.imageAlt,
  };

  const introImageSizes =
    "(max-width: 767px) 100vw, (max-width: 1439px) 364px, 700px";

  return (
    <section className={`${styles.intro} section`}>
      <div className={`${styles.sectionWrapper} container`}>
        <div
          className={`${styles.content} ${isGoRaiding ? styles.goRaidingContent : ""}`}
        >
          <div
            className={`${styles.leftContainer} ${isGoRaiding ? styles.goRaidingLeft : ""}`}
          >
            {isGoRaiding && (
              <div className={styles.idea}>
                <h2 className={styles.title}>Product Idea</h2>
                <p className={styles.description}>{project.description}</p>
              </div>
            )}

            {(isDev || isUx) && (
              <div className={styles.imageContainer}>
                <Image
                  src={introImg.src}
                  alt={introImg.alt}
                  width={1920}
                  height={1920}
                  className={styles.img}
                  sizes={introImageSizes}
                />
              </div>
            )}
          </div>

          <div className={styles.rightContainer}>
            {isDev && !isGoRaiding && (
              <div className={styles.info}>
                <h2 className={styles.title}>Overview</h2>
                <p>{project.description}</p>
              </div>
            )}

            {isUx && (
              <div className={styles.info}>
                <h2 className={styles.title}>Goals</h2>
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
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Intro;
