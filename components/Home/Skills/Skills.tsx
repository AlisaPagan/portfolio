"use client";

import styles from "./Skills.module.css";
import Icon from "@/components/UI/Icon/Icon";
import { GoDotFill } from "react-icons/go";
import skillGroups from "./skillGroups";

function Skills() {
  return (
    <section
      id="skills"
      className={`section ${styles.skillsSection} reveal`}
      data-reveal
    >
      <div className={styles.glow}></div>
      <div className={`${styles.sectionWrapper} container`}>
        <h2 className={styles.heading}>Skills</h2>

        <div className={styles.skillsGridWrapper}>
          {skillGroups.map((group, index) => (
            <div
              key={group.title}
              className={`${styles.listWrapper} reveal reveal-up reveal-delay-${Math.min(index + 1, 4)}`}
              data-reveal
            >
              <div className={styles.subheadingWrapper}>
                <Icon
                  icon={group.icon}
                  size={30}
                  className={styles.skillIcon}
                />
                <h3 className={styles.subheading}>{group.title}</h3>
              </div>
              <hr className="divider" />

              <ul className={styles.skillsList}>
                {group.skills.map((skill) => (
                  <li key={skill} className={styles.skillsListItem}>
                    <Icon
                      icon={GoDotFill}
                      size={16}
                      className={styles.skillIcon}
                    />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
