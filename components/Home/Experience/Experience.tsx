import Icon from "@/components/UI/Icon/Icon";
import styles from "./Experience.module.css";
import { jobs, certifications } from "./experienceInfo";
import { PiCalendarDotsThin } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";

function Experience() {
  return (
    <section id="experience" className={`${styles.experienceSection}`}>
      <div className={`container ${styles.sectionWrapper}`}>
        <h2 className={styles.heading}>Experience</h2>
        <div className={styles.experienceCardsWrapper}>
          {jobs.map((job) => (
            <article key={job.id} className={styles.jobCard}>
              <div className={styles.topWrapper}>
                <h3 className={styles.companyName}>{job.company}</h3>
                <h4 className={styles.position}>{job.position}</h4>
              </div>

              <ul className={styles.addInfo}>
                <li className={styles.addInfoItem}>
                  <Icon icon={PiCalendarDotsThin} size={24} />
                  {job.years}
                </li>
                <li className={styles.addInfoItem}>
                  <Icon icon={CiLocationOn} size={24} />
                  {job.location}
                </li>
              </ul>

              <ul className={styles.responsibilities}>
                {job.responsibilities.map((responsibility) => (
                  <li key={responsibility} className={styles.responsibility}>
                    {responsibility}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className={styles.certsWrapper}>
          <h3>Certifications</h3>
          {certifications.map((certification) => (
            <article key={certification.id}>
              <h3 className={styles.certName}>{certification.name}</h3>
              <h4 className={styles.certCompany}>{certification.company}</h4>
              <p className={styles.certYear}>{certification.year}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
