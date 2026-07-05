"use client";

import Icon from "@/components/UI/Icon/Icon";
import styles from "./Hero.module.css";
import { particles } from "./particles";
import { PiArrowDownThin } from "react-icons/pi";

const tags = ["JavaScript", "TypeScript", "Node.js", "React", "Next.js"];
const copies = [0, 1, 2, 3];

function Hero() {
  return (
    <section
      className={`${styles.hero} section`}
      id="hero"
      style={{ minHeight: "100vh" }}
    >
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
      <div className={styles.glow}></div>
      <div className={styles.grid}></div>
      <div className={`container ${styles.sectionWrapper}`}>
        <h1 className={styles.homeHeading}>Alisa Pagan</h1>
        <h2 className={styles.homeSubheading}>
          <span>Front-End Developer</span> & UX/UI Designer
        </h2>
        <div
          className={styles.scroller}
          data-direction="left"
          data-speed="fast"
        >
          <div className={styles.scrollerTrack}>
            {copies.map((copyIndex) => (
              <ul
                key={copyIndex}
                className={styles.tagGroup}
                aria-hidden={copyIndex === 0 ? undefined : "true"}
              >
                {tags.map((tag) => (
                  <li key={`${copyIndex}-${tag}`} className={styles.tag}>
                    {tag}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <Icon icon={PiArrowDownThin} className={styles.arrowIcon} size={28} />
      </div>
    </section>
  );
}

export default Hero;
