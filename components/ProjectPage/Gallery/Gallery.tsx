import styles from "./Gallery.module.css";
import { Project } from "@/components/Home/Projects/project";
import ImageSlider from "@/components/UI/ImageSlider/ImageSlider";

type GalleryProps = {
  project: Project;
};

function Gallery({ project }: GalleryProps) {
  const isUx = project.categories.includes("ux");
  const isGoRaiding = project.id === "go-raiding";

  return (
    <section
      className={`${isUx ? styles.uxWrapper : ""}

    ${styles.gallerySection} section`}
    >
      {!isUx && <div className={styles.glow}></div>}
      <div
        className={`${styles.sectionWrapper} container ${isGoRaiding ? styles.grWrapper : ""}`}
      >
        {isUx && !isGoRaiding && <h2 className={styles.title}>Screens</h2>}

        {project.gallery && (
          <ImageSlider
            images={project.gallery}
            navId={`${project.id}-gallery`}
            className={styles.imgSwiper}
            slideClassName={styles.imgContainer}
            slidesPerView={1}
            slidesPerViewTablet={2}
            slidesPerViewDesktop={2}
          />
        )}
      </div>
    </section>
  );
}

export default Gallery;
