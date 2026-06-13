import Icon from "@/components/UI/Icon/Icon";
import styles from "./Experience.module.css";
import { jobs, certifications } from "./experienceInfo";
import { PiCalendarDotsThin } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";
import { GoDotFill } from "react-icons/go";

function Experience() {
  return (
    <section
      id="experience"
      className={`${styles.experienceSection} section reveal`}
      data-reveal
    >
      <div className={styles.glow}></div>
      <div className={`container ${styles.sectionWrapper}`}>
        <h2 className={styles.heading}>Experience</h2>
        <div className={styles.experienceCardsWrapper}>
          {jobs.map((job, index) => (
            <article
              key={job.id}
              className={`${styles.jobCard} reveal reveal-up reveal-delay-${Math.min(index + 1, 4)}`}
              data-reveal
            >
              <div className={styles.topWrapper}>
                <h3 className={styles.companyName}>{job.company}</h3>
                <hr className="divider" />
                <h4>{job.position}</h4>
              </div>

              <ul className={styles.addInfo}>
                <li className={styles.addInfoItem}>
                  <Icon
                    icon={PiCalendarDotsThin}
                    size={24}
                    className={styles.icon}
                  />
                  {job.years}
                </li>
                <li className={styles.addInfoItem}>
                  <Icon icon={CiLocationOn} size={24} className={styles.icon} />
                  {job.location}
                </li>
              </ul>
              <ul className={styles.responsibilities}>
                {job.responsibilities.map((responsibility) => (
                  <li key={responsibility} className={styles.responsibility}>
                    <Icon
                      icon={GoDotFill}
                      size={16}
                      className={styles.iconBullet}
                    />
                    {responsibility}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className={styles.certsificationsWrapper}>
          <h3 className={styles.certHeading}>Certifications</h3>
          <div className={styles.certWrapper}>
            {certifications.map((certification, index) => (
              <article
                key={certification.id}
                className={`${styles.certItem} reveal reveal-up reveal-delay-${Math.min(index + 1, 4)}`}
                data-reveal
              >
                <ul className={styles.certList}>
                  <li>
                    <p className={styles.certYear}>{certification.year}</p>
                  </li>

                  <li>
                    <h4>{certification.name}</h4>
                  </li>
                  <li>
                    <h4 className={styles.certCompany}>
                      {certification.company}
                    </h4>
                  </li>
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
