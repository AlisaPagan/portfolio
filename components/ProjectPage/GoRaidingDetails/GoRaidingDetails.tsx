import { Project } from "@/components/Home/Projects/project";
import styles from "./GoRaidingDetails.module.css";
import Tag from "@/components/UI/Tag/Tag";
import Icon from "@/components/UI/Icon/Icon";
import { GoDotFill } from "react-icons/go";

type GoRaidingDetailsProps = { project: Project };

function GoRaidingDetails({ project }: GoRaidingDetailsProps) {
  return (
    <section className={`${styles.goRaidingDetailsSection} section`}>
      <div className={styles.glow}></div>

      <div className={`${styles.sectionWrapper} container`}>
        <div className={styles.listContaier}>
          <h3 className={styles.infoTitle}>My Role</h3>
          <ul className={styles.infoList}>
            {project.role.map((role) => (
              <li key={role} className={styles.infoListItem}>
                <Icon icon={GoDotFill} size={16} className={styles.icon} />
                {role}
              </li>
            ))}
          </ul>
          <hr className="divider" />
        </div>

        <div className={styles.listContaier}>
          <h3 className={styles.infoTitle}>Key Features</h3>
          <ul className={styles.infoList}>
            {project.keyFeatures.map((feature) => (
              <li key={feature} className={styles.infoListItem}>
                <Icon icon={GoDotFill} size={16} className={styles.icon} />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.listContaier}>
          <h3 className={styles.infoTitle}>Tech Stack</h3>
          <ul className={styles.infoListTech}>
            {project.techStack.map((tech) => (
              <li key={tech} className={styles.infoListItem}>
                <Tag>{tech}</Tag>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default GoRaidingDetails;
