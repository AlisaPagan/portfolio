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
import { GoDotFill, GoChevronRight, GoChevronLeft } from "react-icons/go";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

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
            <hr className={styles.divider} />
          </div>

          <div className={styles.cardAndLearning}>
            {ongoingProject && (
              <article className={styles.projectCard}>
                <div className={styles.galleryBlock}>
                  <div className={styles.imageContainer}>
                    <Swiper
                      className={styles.gallery}
                      modules={[Navigation]}
                      spaceBetween={24}
                      slidesPerView={1}
                      preventInteractionOnTransition={true}
                      speed={450}
                      navigation={{
                        prevEl: ".galleryPrev",
                        nextEl: ".galleryNext",
                      }}
                      scrollbar={{ draggable: true }}
                    >
                      {ongoingProject.gallery?.map((image) => (
                        <SwiperSlide key={image.src} className={styles.image}>
                          <Image
                            src={image.src}
                            alt={image.alt}
                            width={400}
                            height={400}
                            className={styles.projectImage}
                          ></Image>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>

                  <div className={styles.sliderControls}>
                    <Button
                      variant="secondary"
                      className={`${styles.navButton} galleryPrev`}
                      aria-label="Previous project"
                    >
                      <Icon
                        icon={GoChevronLeft}
                        size={24}
                        className={styles.controlsIcon}
                      />
                    </Button>

                    <Button
                      variant="secondary"
                      className={`${styles.navButton} galleryNext`}
                      aria-label="Next project"
                    >
                      <Icon
                        icon={GoChevronRight}
                        size={24}
                        className={styles.controlsIcon}
                      />
                    </Button>
                  </div>
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
                    <hr className={styles.divider} />

                    <li className={styles.goalItem}>
                      <span className={styles.goalLabel}>Solution: </span>
                      {ongoingProject.solution}
                    </li>
                  </ul>

                  <ul className={styles.roleList}>
                    {ongoingProject.role.slice(2, 6).map((roleItem) => (
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
                      <Link
                        href={ongoingProject.links.github}
                        target="_blank"
                        aria-label="View project on GitHub"
                        className={styles.btnLink}
                      >
                        <Button className={styles.btn}>
                          Open on GitHub
                          <Icon
                            icon={PiGithubLogo}
                            size={24}
                            className={styles.gitIcon}
                          ></Icon>
                        </Button>
                      </Link>
                    )}

                    <Link
                      href={`/projects/${ongoingProject.id}`}
                      aria-label="View project on GitHub"
                      className={styles.btnLink}
                    >
                      <Button className={styles.btn} variant="secondary">
                        View Details
                        <Icon icon={GoChevronRight} size={24}></Icon>
                      </Button>
                    </Link>
                  </div>
                </div>
              </article>
            )}

            <div className={styles.learning}>
              <div className={styles.top}>
                <h3 className={styles.title}>Learning</h3>
                <hr className={styles.divider} />
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
                  <hr className={styles.divider} />
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
                  <hr className={styles.divider} />
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
