import Image from "next/image";
import styles from "./FeaturedProject.module.css";
import { Project } from "../Projects/project";
import Tag from "@/components/UI/Tag/Tag";
import Button from "@/components/UI/Button/Button";

type fearutedProjectProps = {
  project: Project;
};

function FeaturedProject({ project }: fearutedProjectProps) {
  return (
    <section className={`${styles.featProjSection} section`}>
      <div className={`${styles.sectionWrapper} container`}>
        <div className={styles.imageWrapper}>
          <Image
            className={styles.img}
            src={project.image}
            alt={project.imageAlt}
            width={400}
            height={400}
            priority
          ></Image>
        </div>
        <div className={styles.infoWrapper}>
          <p className={styles.year}>{project.year}</p>
          <h3 className={styles.projectName}>{project.title}</h3>
          <p className={styles.description}>{project.shortDescription}</p>
          <ul className={styles.role}>{project.role}</ul>
          <ul className={styles.tagList}>
            {project.techStack
              .map((tech) => (
                <li key={tech} className={styles.techTag}>
                  <Tag>{tech}</Tag>
                </li>
              ))
              .slice(0, 5)}
          </ul>
        </div>
        <Button className={styles.btn}>View Details</Button>
      </div>
    </section>
  );
}

export default FeaturedProject;
