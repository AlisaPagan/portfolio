import { Project } from "@/components/Home/Projects/project";
import styles from "./ProjectCard.module.css";
import Image from "next/image";
import Tag from "../Tag/Tag";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import { GoLinkExternal } from "react-icons/go";
import { PiGithubLogo } from "react-icons/pi";
import { CiServer } from "react-icons/ci";
import { PiBrowser } from "react-icons/pi";
import Link from "next/link";

type projectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: projectCardProps) {
  return (
    <article className={styles.projectCard}>
      <div className={styles.imageWrapper}>
        <Image
          src={project.image}
          alt={project.imageAlt}
          width={400}
          height={400}
          className={styles.cardImage}
        />

        <span className={styles.label}>{project.type}</span>

        <div className={styles.iconsWrapper}>
          {project.links?.github && (
            <Link
              href={project.links.github}
              target="_blank"
              aria-label="View GitHub repo"
              className={styles.iconLink}
            >
              <Icon icon={PiGithubLogo} size={22} className={styles.icon} />
            </Link>
          )}

          {project.links?.frontend && (
            <Link
              href={project.links.frontend}
              target="_blank"
              aria-label="View GitHub repo frontend"
              className={styles.iconLink}
            >
              <Icon icon={PiBrowser} size={22} className={styles.icon} />
            </Link>
          )}

          {project.links?.backend && (
            <Link
              href={project.links.backend}
              target="_blank"
              aria-label="View GitHub repo backend"
              className={styles.iconLink}
            >
              <Icon icon={CiServer} size={22} className={styles.icon} />
            </Link>
          )}

          {project.links?.live && (
            <Link
              href={project.links.live}
              target="_blank"
              aria-label="View live project"
              className={styles.iconLink}
            >
              <Icon icon={GoLinkExternal} size={22} className={styles.icon} />
            </Link>
          )}
        </div>
      </div>

      <div className={styles.projectInfoWrapper}>
        <div className={styles.headingWrapper}>
          <h3 className={styles.heading}>{project.title}</h3>
        </div>

        <p className={styles.description}>{project.shortDescription}</p>
        <ul className={styles.tagList}>
          {project.techStack
            .map((tech) => (
              <li key={tech} className={styles.techTag}>
                <Tag>{tech}</Tag>
              </li>
            ))
            .slice(0, 3)}
        </ul>
        <div className={styles.buttonsWrapper}>
          <Button className={styles.btn}>View Details</Button>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
