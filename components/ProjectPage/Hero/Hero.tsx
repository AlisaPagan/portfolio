import Tag from "@/components/UI/Tag/Tag";
import styles from "./Hero.module.css";
import { Project } from "@/components/Home/Projects/project";
import Button from "@/components/UI/Button/Button";
import Link from "next/link";

type HeroProps = {
  project: Project;
};

function Hero({ project }: HeroProps) {
  const isDev = project.categories.includes("dev");
  const isUx = project.categories.includes("ux");
  const isGoRaiding = project.id === "go-raiding";

  const liveLink = project.links?.live;
  const gitLink = project.links?.github;

  const heroBackground = {
    backgroundImage: `url(${project.image})`,
  } as React.CSSProperties;

  return (
    <section className={`${styles.hero} section`} style={heroBackground}>
      <div className={styles.sectionWrapper}>
        <div className={styles.heroTop}>
          <h1> {project.title}</h1>
          <p className={styles.description}>{project.shortDescription}</p>
          <ul className={styles.techList}>
            {project.techStack.slice(0, 3).map((tech) => (
              <li key={tech}>
                <Tag>{tech}</Tag>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.ctaWrapper}>
          {isGoRaiding && gitLink && (
            <Link href={gitLink} target="_blank" className={styles.ctaLink}>
              <Button className={styles.ctaBtn}>View Code</Button>
            </Link>
          )}

          {isDev && liveLink && (
            <Link href={liveLink} target="_blank" className={styles.ctaLink}>
              <Button className={styles.ctaBtn}>View Live</Button>
            </Link>
          )}

          {isUx && !isGoRaiding && (
            <Link href={"/#goals"} className={styles.ctaLink}>
              <Button className={styles.ctaBtn}>View More</Button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

export default Hero;
