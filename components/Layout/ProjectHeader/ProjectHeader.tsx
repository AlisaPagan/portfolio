"use client";
import styles from "./ProjectHeader.module.css";
import Link from "next/link";
import Button from "@/components/UI/Button/Button";
import Icon from "@/components/UI/Icon/Icon";
import { useState, useEffect, useRef } from "react";
import { PiSunDimThin, PiMoonThin, PiArrowDownThin } from "react-icons/pi";
import { GoChevronRight, GoChevronLeft } from "react-icons/go";
import projects from "@/components/Home/Projects/projectsInfo";

type projectHeaderProps = {
  currentProjectId: string;
};

function ProjectHeader({ currentProjectId }: projectHeaderProps) {
  //theme toggle
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const hasLoadedThemeRef = useRef(false);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      const savedTheme = localStorage.getItem("theme");

      if (savedTheme === "light") {
        setTheme("light");
      }

      hasLoadedThemeRef.current = true;
    });

    return () => window.cancelAnimationFrame(frameId);
  }, []);

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }

    if (hasLoadedThemeRef.current) {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  // up arrow appear on scroll

  const [showLink, setShowLink] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowLink(window.scrollY > 300);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // prev & next navigation
  const currentIndex = projects.findIndex(
    (project) => project.id === currentProjectId,
  );

  const prevProject =
    currentIndex > 0
      ? projects[currentIndex - 1]
      : projects[projects.length - 1];

  const nextProject =
    currentIndex < projects.length - 1
      ? projects[currentIndex + 1]
      : projects[0];

  return (
    <>
      <header className={styles.projectHeader}>
        <div className={`${styles.headerWrapper} container`}>
          <Link href="/" className={styles.logo}>
            AP
          </Link>

          <Button
            className={styles.themeButton}
            variant="text"
            onClick={toggleTheme}
            aria-label={
              theme === "dark"
                ? "Switch to light theme"
                : "Switch to dark theme"
            }
          >
            <Icon
              icon={theme === "dark" ? PiSunDimThin : PiMoonThin}
              size={25}
              ariaHidden
              className={styles.themeIcon}
            />
          </Button>
        </div>
      </header>

      <section className={`${styles.projectNav} container`}>
        <div className={`${styles.navBtnsWrap} `}>
          <Link
            href={`/projects/${prevProject.id}`}
            aria-label="previous-project"
            className={styles.projectNavLink}
          >
            <Button type="button" variant="primary" className={styles.navBtn}>
              <Icon icon={GoChevronLeft} size={28} className={styles.icon} />
              <span className={styles.btnText}>Previous</span>
            </Button>
          </Link>
          <Link
            href={`/projects/${nextProject.id}`}
            aria-label="next-project"
            className={styles.projectNavLink}
          >
            <Button type="button" variant="primary" className={styles.navBtn}>
              <span className={styles.btnText}>Next</span>

              <Icon icon={GoChevronRight} size={28} className={styles.icon} />
            </Button>
          </Link>
        </div>

        <Link
          href="#top"
          area-label="go-up"
          className={`${styles.topLink} ${showLink ? styles.linkVisible : ""}`}
        >
          <Icon
            icon={PiArrowDownThin}
            size={24}
            className={styles.iconUp}
          ></Icon>
        </Link>
      </section>
    </>
  );
}

export default ProjectHeader;
