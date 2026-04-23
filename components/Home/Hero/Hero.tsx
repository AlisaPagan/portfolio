"use client";

import styles from "./Hero.module.css";
import { particles } from "./particles";

function Hero() {
  return (
    <section className={`section ${styles.hero}`}>
      <div className={styles.particles}>
        {particles.map((particle) => (
          <span
            key={particle.id}
            className={styles.particle}
            style={{
              top: particle.top,
              left: particle.left,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          />
        ))}
      </div>
      <div className={styles.grid}></div>
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
