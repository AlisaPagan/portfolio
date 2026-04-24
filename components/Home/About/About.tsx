import Image from "next/image";
import styles from "./About.module.css";

function About() {
  return (
    <section className={`${styles.about} section`} id="about">
      <div className={`${styles.sectionWrapper} container`}>
        <h2 className={styles.heading}>About me</h2>
        <div className={styles.sectionInner}>
          <div className={styles.imageContainer}>
            <Image
              className={styles.img}
              src="/Alisa_Pagan.webp"
              alt="Alisa Pagan"
              width={400}
              height={400}
              priority
            ></Image>
          </div>

          <div className={styles.info}>
            <h3 className={styles.subheading}>Key highlights</h3>
            <div className={styles.infoWrapper}>
              <ul className={styles.highlightsLIst}>
                <li className={styles.highlightsItem}>
                  <p className={styles.itemLabel}>Location:</p>
                  <p className={styles.itemValue}>Artesia, NM</p>
                </li>
                <li className={styles.highlightsItem}>
                  <p className={styles.itemLabel}>Background:</p>
                  <p className={styles.itemValue}>
                    Designer turned full-stack developer
                  </p>
                </li>
                <li className={styles.highlightsItem}>
                  <p className={styles.itemLabel}>Focus:</p>
                  <p className={styles.itemValue}>
                    Building full-stack web applications with modern JavaScript
                    tools
                  </p>
                </li>
                <li className={styles.highlightsItem}>
                  <p className={styles.itemLabel}>Strengths:</p>
                  <p className={styles.itemValue}>
                    UX-aware development, responsive interfaces, clean
                    implementation
                  </p>
                </li>
                <li className={styles.highlightsItem}>
                  <p className={styles.itemLabel}>CMS:</p>
                  <p className={styles.itemValue}>WordPress, Elementor</p>
                </li>
                <li className={styles.highlightsItem}>
                  <p className={styles.itemLabel}>Availability:</p>
                  <p className={styles.itemValue}>
                    Open to junior full-stack roles
                  </p>
                </li>
              </ul>
              <div className={styles.descriptionWrapper}>
                <p className={styles.description}>
                  is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the standard dummy text ever since the
                  1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book.
                </p>

                <p className={styles.description}>
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing
                </p>

                <p className={styles.description}>
                  Lorem Ipsum passages, and more recently with desktop
                  publishing software like Aldus PageMaker including versions of
                  Lorem Ipsum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
