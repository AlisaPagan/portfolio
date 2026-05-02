import styles from "./OngoingAndLearning.module.css";
import projects from "../Projects/projectsInfo";
import Image from "next/image";
import Tag from "@/components/UI/Tag/Tag";
import Button from "@/components/UI/Button/Button";
import Link from "next/link";
import Icon from "@/components/UI/Icon/Icon";
import { PiGithubLogo } from "react-icons/pi";
import { FaPython } from "react-icons/fa";
import { IoLogoReact } from "react-icons/io5";
function OngoingAndLearning() {
  const ongoingProject = projects.find((project) =>
    project.categories.includes("ongoing"),
  );

  return (
    <section
      id="ongoing-and-learning"
      className={`${styles.ongloingSection} section`}
    >
      <div className={`${styles.sectionWrapper} container`}>
        <h2 className={styles.heading}>Ongoing Projects & Learning</h2>

        <div className={styles.cardsWrapper}>
          <h3 className={styles.title}>{ongoingProject?.title}</h3>
          <hr className={styles.divider} />

          {ongoingProject && (
            <article className={styles.projectCard}>
              <div className={styles.imageContainer}>
                <Image
                  src={ongoingProject.image}
                  alt={ongoingProject.imageAlt}
                  width={400}
                  height={400}
                  className={styles.projectImage}
                ></Image>
              </div>
              <div className={styles.contentWrapper}>
                <div className={styles.topWrapper}>
                  <p className={styles.description}>
                    {ongoingProject.shortDescription}
                  </p>
                </div>

                <ul className={styles.goalsList}>
                  <li className={styles.goalItem}>
                    <span className={styles.goalLabel}>Problem: </span>
                    {ongoingProject.problem}
                  </li>
                  <hr className={styles.divider} />

                  <li className={styles.goalItem}>
                    <span className={styles.goalLabel}>Solution: </span>
                    {ongoingProject.solution}
                  </li>
                </ul>

                <ul className={styles.tagList}>
                  {ongoingProject.techStack
                    .map((tech) => (
                      <li key={tech} className={styles.techTag}>
                        <Tag>{tech}</Tag>
                      </li>
                    ))
                    .slice(0, 3)}
                </ul>

                {ongoingProject.links?.github && (
                  <Link
                    href={ongoingProject.links.github}
                    target="_blank"
                    aria-label="View project on GitHub"
                    className={styles.btnLInk}
                  >
                    <Button className={styles.btn}>
                      Open on GitHub <Icon icon={PiGithubLogo} size={24}></Icon>
                    </Button>
                  </Link>
                )}
              </div>
            </article>
          )}

          <div className={styles.learning}>
            <article className={styles.learningCard}>
              <div className={styles.techWrap}>
                <Icon
                  icon={FaPython}
                  size={24}
                  className={styles.techIcon}
                ></Icon>
                <h4 className={styles.techName}>Python</h4>
              </div>
              <hr className={styles.divider} />
              <p>
                Currently learning Python fundamentals, including syntax,
                variables, data types, operators, strings, collections, control
                flow, functions, files, modules, OOP, serialization, and working
                with classes.
              </p>
            </article>

            <article className={styles.learningCard}>
              <div className={styles.techWrap}>
                <Icon
                  icon={IoLogoReact}
                  size={24}
                  className={styles.techIcon}
                ></Icon>
                <h4 className={styles.techName}>React Native</h4>
              </div>
              <hr className={styles.divider} />
              <p>
                Learning mobile app development with React Native, focusing on
                setup, native components, styling, inputs, events, SVG,
                navigation, Firebase, lists, modals, AsyncStorage, app assets,
                localization, WebView, and app release.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OngoingAndLearning;
