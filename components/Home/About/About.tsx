import Image from "next/image";
import styles from "./About.module.css";
import Icon from "@/components/UI/Icon/Icon";
import { MdOutlineFileDownload } from "react-icons/md";
function About() {
  return (
    <section className={`${styles.about} section`} id="about">
      <div className={`${styles.sectionWrapper} container`}>
        <h2 className={styles.heading}>About me</h2>
        <div className={styles.sectionInner}>
          <div className={styles.imageContainer}>
            <Image
              className={styles.img}
              src="/Alisa_Pagan_image.webp"
              alt="Alisa Pagan sitting at her desk"
              width={1920}
              height={1920}
              priority
            ></Image>
          </div>

          <div className={styles.info}>
            <h3 className={styles.subheading}>Key highlights</h3>
            <div className={styles.infoWrapper}>
              <ul className={styles.highlightsList}>
                <li className={styles.highlightsItem}>
                  <p className={styles.itemLabel}>Location:</p>
                  <p className={styles.itemValue}>Artesia, NM / Remote</p>
                </li>
                <li className={styles.highlightsItem}>
                  <p className={styles.itemLabel}>Background:</p>
                  <p className={styles.itemValue}>
                    Designer turned front-end developer
                  </p>
                </li>
                <li className={styles.highlightsItem}>
                  <p className={styles.itemLabel}>Focus:</p>
                  <p className={styles.itemValue}>
                    React, Next.js, TypeScript, responsive UI
                  </p>
                </li>
                <li className={styles.highlightsItem}>
                  <p className={styles.itemLabel}>Strengths:</p>
                  <p className={styles.itemValue}>
                    UX-aware development, clean interfaces, clear communication
                  </p>
                </li>
                <li className={styles.highlightsItem}>
                  <p className={styles.itemLabel}>Web/CMS:</p>
                  <p className={styles.itemValue}>WordPress, Elementor</p>
                </li>
                <li className={styles.highlightsItem}>
                  <p className={styles.itemLabel}>Experience:</p>
                  <p className={styles.itemValue}>
                    5+ years in design and web work
                  </p>
                </li>
                <li className={styles.highlightsItem}>
                  <p className={styles.itemLabel}>Availability:</p>
                  <p className={styles.itemValue}>
                    Open to junior front-end and web developer roles
                  </p>
                </li>
              </ul>
              <div className={styles.descriptionWrapper}>
                <p className={styles.description}>
                  Junior front-end developer with a background in UX/UI, web
                  design, and visual design. Development became the next step
                  because I wanted to build the products behind the designs, not
                  only design them.
                </p>

                <p className={styles.description}>
                  15+ years of IT-adjacent experience across content, sales,
                  project coordination, business analysis, WordPress/web design,
                  and graphic design, including 5+ years focused on design and
                  web work.
                </p>

                <p className={styles.description}>
                  I’m looking for junior front-end and web developer roles where
                  I can help build clean, responsive, user-facing interfaces. My
                  strongest tools are HTML, CSS, JavaScript, React, and Next.js,
                  alongside current full-stack project work with Node.js,
                  Express, MongoDB, and REST APIs.
                </p>
                <a
                  href="/Alisa_Pagan_Fullstack_Developer.pdf"
                  download="Alisa_Pagan_Fullstack_Developer.pdf"
                  className={styles.btn}
                >
                  Download resume
                  <Icon
                    icon={MdOutlineFileDownload}
                    size={24}
                    className={styles.icon}
                  ></Icon>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
