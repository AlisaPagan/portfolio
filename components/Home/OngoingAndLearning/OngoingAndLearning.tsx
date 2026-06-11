import styles from "./OngoingAndLearning.module.css";
import projects from "../Projects/projectsInfo";
import Tag from "@/components/UI/Tag/Tag";
import Icon from "@/components/UI/Icon/Icon";
import { PiGithubLogo } from "react-icons/pi";
import { FaPython } from "react-icons/fa";
import { IoLogoReact } from "react-icons/io5";
import { GoDotFill, GoChevronRight } from "react-icons/go";
import ImageSlider from "@/components/UI/ImageSlider/ImageSlider";
import LinkButton from "@/components/UI/LinkButton/LinkButton";

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
          <div className={styles.top}>
            <h3 className={styles.title}>{ongoingProject?.title}</h3>
            <hr className="divider" />
          </div>

          <div className={styles.cardAndLearning}>
            {ongoingProject && (
              <article className={styles.projectCard}>
                <div className={styles.galleryBlock}>
                  {ongoingProject.gallery && (
                    <ImageSlider
                      images={ongoingProject.gallery}
                      navId={`${ongoingProject.id}-gallery`}
                      className={styles.gallery}
                      variant="cover"
                      slideClassName={styles.imageContainer}
                      slidesPerView={1}
                      slidesPerViewTablet={1}
                      slidesPerViewDesktop={1}
                      imageSizes="(max-width: 767px) 100vw, (max-width: 1439px) 382px, 718px"
                    />
                  )}
                </div>

                <div className={styles.contentWrapper}>
                  <p className={styles.description}>
                    {ongoingProject.shortDescription}
                  </p>

                  <p className={styles.longDescription}>
                    {ongoingProject.description}
                  </p>

                  <ul className={styles.goalsList}>
                    <li className={styles.goalItem}>
                      <span className={styles.goalLabel}>Problem: </span>
                      {ongoingProject.problem}
                    </li>
                    <li className={styles.dividerItem} aria-hidden="true">
                      <hr className="divider" />
                    </li>

                    <li className={styles.goalItem}>
                      <span className={styles.goalLabel}>Solution: </span>
                      {ongoingProject.solution}
                    </li>
                  </ul>

                  <ul className={styles.roleList}>
                    {ongoingProject.featuredRole?.map((roleItem) => (
                      <li key={roleItem} className={styles.roleItem}>
                        <Icon
                          icon={GoDotFill}
                          size={16}
                          className={styles.iconBullet}
                        />
                        {roleItem}
                      </li>
                    ))}
                  </ul>

                  <ul className={styles.tagList}>
                    {ongoingProject.techStack.slice(0, 3).map((tech) => (
                      <li key={tech} className={styles.techTag}>
                        <Tag>{tech}</Tag>
                      </li>
                    ))}
                  </ul>

                  <div className={styles.buttons}>
                    {ongoingProject.links?.github && (
                      <LinkButton
                        href={ongoingProject.links.github}
                        target="_blank"
                        aria-label={`View ${ongoingProject.title} on GitHub`}
                        className={styles.btnLink}
                      >
                        Open on GitHub
                        <Icon
                          icon={PiGithubLogo}
                          size={24}
                          className={styles.gitIcon}
                        ></Icon>
                      </LinkButton>
                    )}

                    <LinkButton
                      href={`/projects/${ongoingProject.id}`}
                      aria-label={`View ${ongoingProject.title} project details`}
                      className={styles.btnLink}
                      variant="secondary"
                    >
                      View Details
                      <Icon icon={GoChevronRight} size={24}></Icon>
                    </LinkButton>
                  </div>
                </div>
              </article>
            )}

            <div className={styles.learning}>
              <div className={styles.top}>
                <h3 className={styles.title}>Learning</h3>
                <hr className="divider" />
              </div>

              <div className={styles.learningCards}>
                <article className={styles.learningCard}>
                  <div className={styles.techWrap}>
                    <Icon
                      icon={FaPython}
                      size={24}
                      className={styles.techIcon}
                    ></Icon>
                    <h4 className={styles.techName}>Python</h4>
                  </div>
                  <hr className="divider" />
                  <p>
                    Currently learning Python fundamentals, including syntax,
                    variables, data types, operators, strings, collections,
                    control flow, functions, files, modules, OOP, serialization,
                    and working with classes.
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
                  <hr className="divider" />
                  <p>
                    Learning mobile app development with React Native, focusing
                    on setup, native components, styling, inputs, events, SVG,
                    navigation, Firebase, lists, modals, AsyncStorage, app
                    assets, localization, WebView, and app release.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OngoingAndLearning;
