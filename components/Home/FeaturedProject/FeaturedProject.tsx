import Image from "next/image";
import styles from "./FeaturedProject.module.css";
import { Project } from "../Projects/project";
import Tag from "@/components/UI/Tag/Tag";
import Icon from "@/components/UI/Icon/Icon";
import { GoDotFill } from "react-icons/go";
import LinkButton from "@/components/UI/LinkButton/LinkButton";

type FeaturedProjectProps = {
  project: Project;
};

function FeaturedProject({ project }: FeaturedProjectProps) {
  const displayedRole = project.featuredRole ?? project.role;
  return (
    <article className={styles.featProjSection}>
      <div className={`${styles.sectionWrapper} container`}>
        <div className={styles.imageContainer}>
          <Image
            className={styles.img}
            src={project.image}
            alt={project.imageAlt}
            width={1080}
            height={1080}
            priority
          ></Image>
          <span className={styles.labelFeat}>Featured Project</span>
        </div>

        <div className={styles.topWrapper}>
          <div className={styles.headingWrap}>
            <p className={styles.year}>{project.year}</p>
            <h3 className={styles.projectName}>{project.title}</h3>
          </div>
          <p className={styles.description}>{project.shortDescription}</p>
          <ul className={styles.tagList}>
            {project.techStack.slice(0, 5).map((tech) => (
              <li key={tech} className={styles.techTag}>
                <Tag>{tech}</Tag>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.contentWrapper}>
          <hr className="divider" />
          <h4>My Role</h4>
          <ul className={styles.roleList}>
            {displayedRole.map((roleItem) => (
              <li key={roleItem} className={styles.roleItem}>
                <Icon
                  icon={GoDotFill}
                  size={16}
                  className={styles.iconBullet}
                />
                {roleItem}
              </li>
            ))}
          </ul>
          <hr className="divider" />
          <LinkButton
            href={`projects/${project.id}`}
            className={styles.btnLink}
          >
            View Details
          </LinkButton>
        </div>
      </div>
    </article>
  );
}

export default FeaturedProject;
