import Image from "next/image";
import styles from "./FeaturedProject.module.css";
import { Project } from "../Projects/project";
import Tag from "@/components/UI/Tag/Tag";
import Button from "@/components/UI/Button/Button";
import Icon from "@/components/UI/Icon/Icon";
import { GoDotFill } from "react-icons/go";

type FeaturedProjectProps = {
  project: Project;
};

function FeaturedProject({ project }: FeaturedProjectProps) {
  return (
    <article className={styles.featProjSection}>
      <div className={`${styles.sectionWrapper} container`}>
        <div className={styles.imageContainer}>
          <Image
            className={styles.img}
            src={project.image}
            alt={project.imageAlt}
            width={400}
            height={400}
            priority
          ></Image>
          <span className={styles.labelFeat}>Featured Project</span>
        </div>

        <div className={styles.topWrapper}>
          <div className={styles.headingWrap}>
            <p className={styles.year}>{project.year}</p>
            <h3 className={styles.projectName}>{project.title}</h3>
          </div>
          <p className={styles.description}>{project.description}</p>
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

        <div className={styles.contentWrapper}>
          <hr className={styles.divider} />
          <h4>My Role</h4>
          <ul className={styles.roleList}>
            {project.role.map((roleItem) => (
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
          <hr className={styles.divider} />

          <Button className={styles.btn}>View Details</Button>
        </div>
      </div>
    </article>
  );
}

export default FeaturedProject;
