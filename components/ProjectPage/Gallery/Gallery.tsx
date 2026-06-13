import styles from "./Gallery.module.css";
import { Project } from "@/components/Home/Projects/project";
import ImageSlider from "@/components/UI/ImageSlider/ImageSlider";

type GalleryProps = {
  project: Project;
};

function Gallery({ project }: GalleryProps) {
  const isUx = project.categories.includes("ux");
  const isGoRaiding = project.id === "go-raiding";
  const galleryVariant = isUx || isGoRaiding ? "scroll" : "cover";

  const galleryImageSizes = isGoRaiding
    ? "(max-width: 767px) 371px, (max-width: 1439px) 364px, 415px"
    : isUx
      ? "(max-width: 767px) 371px, (max-width: 1439px) 364px, 450px"
      : "(max-width: 767px) 371px, (max-width: 1439px) 364px, 696px";

  return (
    <section
      className={`${isUx ? styles.uxWrapper : ""}

    ${styles.gallerySection} section reveal`}
      data-reveal
    >
      {!isUx && <div className={styles.glow}></div>}
      <div
        className={`${styles.sectionWrapper} container ${isGoRaiding ? styles.grWrapper : ""}`}
      >
        {isUx && !isGoRaiding && <h2 className={styles.title}>Screens</h2>}
        {isUx && (
          <p className={styles.note}>
            * Scroll inside the images to view full screens.
          </p>
        )}
        {project.sliderGallery && (
          <ImageSlider
            images={project.sliderGallery}
            navId={`${project.id}-gallery`}
            variant={galleryVariant}
            className={styles.imgSwiper}
            slideClassName={`${styles.imgContainer} ${isUx ? styles.imgContainerVert : ""}  customScrollbar`}
            slidesPerView={1}
            slidesPerViewTablet={2}
            slidesPerViewDesktop={isUx ? 3 : 2}
            imageSizes={galleryImageSizes}
            reveal
            revealClassName="reveal-up reveal-delay-2"
          />
        )}
      </div>
    </section>
  );
}

export default Gallery;
