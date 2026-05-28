import styles from "./NextSteps.module.css";
import { Project } from "@/components/Home/Projects/project";
import Image from "next/image";
import Icon from "@/components/UI/Icon/Icon";
import { GoChevronRight } from "react-icons/go";

type NextStepsProps = {
  project: Project;
};

function NextSteps({ project }: NextStepsProps) {
  const isGoraiding = project.id === "go-raiding";

  const galleryImage = project.gallery?.[1];
  const showOutcomeImage = !isGoraiding && galleryImage;

  return (
    <section className={`${styles.NextStepsSection} section `}>
      <div
        className={`${styles.sectionWrapper} container ${isGoraiding ? styles.grWrapper : ""}`}
      >
        {!isGoraiding && <h2 className={styles.title}>Outcome</h2>}
        {showOutcomeImage && (
          <div className={styles.imgWrapper}>
            <Image
              src={galleryImage.src}
              alt={galleryImage.alt}
              width={1920}
              height={1920}
              className={styles.img}
            />
          </div>
        )}

        <div className={styles.contentWrapper}>
          <h3 className={styles.subtitle}>Next Steps</h3>
          <ul className={styles.stepsList}>
            {project.nextSteps?.map((step) => (
              <li key={step} className={styles.stepsListItem}>
                <Icon icon={GoChevronRight} size={24} className={styles.icon} />
                {step}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default NextSteps;
