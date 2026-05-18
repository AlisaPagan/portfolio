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

  const introImg = project.gallery?.[1];

  return (
    <section className={`${styles.intro} section`}>
      <div className={`${styles.sectionWrapper} container`}>
        <div className={styles.leftContainer}>
          {isGoRaiding && (
            <div className={styles.idea}>
              <h2 className={styles.title}>Product Idea</h2>
              <p className={styles.description}>{project.description}</p>
            </div>
          )}

          {isDev && isUx && (
            <div className={styles.imageContainer}>
              <Image src={introImg} alt={introImg?.alt}></Image>
            </div>
          )}
        </div>
        <div className={styles.rightContainer}></div>
      </div>
    </section>
  );
}
export default Intro;
