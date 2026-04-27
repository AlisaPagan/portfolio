import { Project } from "@/components/Home/Projects/project";
import styles from "./ProjectCard.module.css";
import Image from "next/image";
import Tag from "../Tag/Tag";
import Button from "../Button/Button";
import Link from "next/link";

type projectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: projectCardProps) {
  return (
    <article className={styles.projectCard}>
      <Image
        src={project.image}
        alt={project.imageAlt}
        width={400}
        height={400}
        className={styles.cardImage}
      />
      <div className={styles.projectInfoWrapper}>
        <h3 className={styles.heading}>{project.title}</h3>
        <p className={styles.description}>{project.shortDescription}</p>
        <ul className={styles.tagList}>
          {project.techStack.map((tech) => (
            <li key={tech} className={styles.techTag}>
              <Tag>{tech}</Tag>
            </li>
          ))}
        </ul>
        <div className={styles.buttonsWrapper}>
          {project.links?.frontend && (
            <Link
              href={project.links?.frontend}
              target="_blank"
              className={styles.btnLink}
            >
              <Button variant="secondary" className={styles.btn}>
                View Front-End
              </Button>
            </Link>
          )}
          {project.links?.backend && (
            <Link
              href={project.links?.backend}
              target="_blank"
              className={styles.btnLink}
            >
              <Button variant="secondary" className={styles.btn}>
                View Back-End
              </Button>
            </Link>
          )}
          {project.links?.live && (
            <Link
              href={project.links?.live}
              target="_blank"
              className={styles.btnLink}
            >
              <Button className={styles.btn}>View Live</Button>
            </Link>
          )}
          {project.links?.github && (
            <Link
              href={project.links?.github}
              target="_blank"
              className={styles.btnLink}
            >
              <Button variant="secondary" className={styles.btn}>
                View Code
              </Button>
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
