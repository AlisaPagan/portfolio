"use client";

import styles from "./Hero.module.css";
import Tag from "@/components/UI/Tag/Tag";

function Hero() {
  return (
    <section className="section">
      <div className={`container ${styles.sectionWrapper}`}>
        <h1 className={styles.homeHeading}>Alisa Pagan</h1>
        <h4 className={styles.homeSubheading}>
          Junior <span>Full Stack Engineer</span> & UX Designer
        </h4>
        <div
          className={styles.scroller}
          data-direction="left"
          data-speed="fast"
        >
          <ul className={`${styles.scrollerInner} ${styles.homeTagList}`}>
            <li className={styles.tag}>JavaScript</li>
            <li className={styles.tag}>TypeScript</li>
            <li className={styles.tag}>Node.js</li>
            <li className={styles.Ttg}>React</li>
            <li className={styles.tag}>Next.js</li>

            <li className={styles.tag}>JavaScript</li>
            <li className={styles.tag}>TypeScript</li>
            <li className={styles.tag}>Node.js</li>
            <li className={styles.Ttg}>React</li>
            <li className={styles.tag}>Next.js</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Hero;
