import Image from "next/image";
import styles from "./DevProcess.module.css";
import { Project } from "@/components/Home/Projects/project";
import Icon from "@/components/UI/Icon/Icon";
import { GoDotFill } from "react-icons/go";
import Tag from "@/components/UI/Tag/Tag";

type DevProcessProps = {
  project: Project;
};
function DevProcess({ project }: DevProcessProps) {
  const processImg = project.gallery?.[2] ?? {
    src: project.image,
    alt: project.imageAlt,
  };

  const isDev = project.categories.includes("dev");
  const isUx = project.categories.includes("ux");
  const isGoRaiding = project.id === "go-raiding";

  return (
    <section className={`${styles.devProcessSection} section`}>
      <div className={`${styles.glow} ${isUx ? styles.glowUx : ""}`}></div>

      <div className={`${styles.sectionWrapper} container`}>
        {isDev && !isGoRaiding && (
          <>
            <h2 className={styles.title}>Project Details</h2>
            <div className={styles.imageContainer}>
              <Image
                src={processImg.src}
                alt={processImg.alt}
                width={400}
                height={400}
                className={styles.img}
              ></Image>
            </div>
          </>
        )}

        <div className={styles.infoGrid}>
          <div className={styles.listContaier}>
            <h3 className={styles.infoTitle}>
              {isDev ? "Key Features" : "UX Decisions"}
            </h3>

            {isDev && (
              <ul className={styles.infoList}>
                {project.keyFeatures.map((feature) => (
                  <li key={feature} className={styles.infoListItem}>
                    <Icon icon={GoDotFill} size={16} className={styles.icon} />
                    {feature}
                  </li>
                ))}
              </ul>
            )}

            {isUx && (
              <ul className={styles.infoList}>
                {project.uxDecisions?.map((decision) => (
                  <li key={decision} className={styles.infoListItem}>
                    <Icon icon={GoDotFill} size={16} className={styles.icon} />
                    {decision}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className={styles.listContaier}>
            <h3 className={styles.infoTitle}>My Role</h3>
            <ul className={styles.infoList}>
              {project.role.map((roleItem) => (
                <li key={roleItem} className={styles.infoListItem}>
                  <Icon icon={GoDotFill} size={16} className={styles.icon} />
                  {roleItem}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.listContaier}>
            <hr className={styles.divider} />
            <h3 className={styles.infoTitle}>
              {isDev ? "Tech Stack" : "Design Toolkit"}
            </h3>
            <ul className={styles.infoListTech}>
              {project.techStack.map((tech) => (
                <li key={tech} className={styles.infoListItem}>
                  <Tag>{tech}</Tag>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DevProcess;
