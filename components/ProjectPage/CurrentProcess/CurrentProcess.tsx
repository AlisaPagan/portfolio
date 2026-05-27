import styles from "./CurrentProcess.module.css";
import { Project } from "@/components/Home/Projects/project";
import ImageSlider from "@/components/UI/ImageSlider/ImageSlider";
import Icon from "@/components/UI/Icon/Icon";
import { GoDotFill } from "react-icons/go";

type CurrentProcessProps = {
  project: Project;
};

function CurrentProcess({ project }: CurrentProcessProps) {
  return (
    <section className={`${styles.processSection} section`}>
      <div className={`${styles.sectionWrapper} container`}>
        {project.gallery && (
          <ImageSlider
            images={project.gallery.slice(1)}
            navId={`${project.id}-gallery-live`}
            className={styles.imgSwiper}
            slideClassName={styles.imgContainer}
            slidesPerView={1}
            slidesPerViewTablet={1}
            slidesPerViewDesktop={1}
          />
        )}

        <div className={styles.content}>
          <h3 className={styles.title}>Current Development Process</h3>
          <ul className={styles.processesList}>
            {project.currentDevProcess?.map((process) => (
              <li key={process} className={styles.processesListItem}>
                <Icon icon={GoDotFill} size={16} className={styles.icon} />
                {process}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default CurrentProcess;
