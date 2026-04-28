"use client";

import Link from "next/link";
import styles from "./Header.module.css";
import Button from "@/components/UI/Button/Button";
import Icon from "@/components/UI/Icon/Icon";
import {
  PiSunDimThin,
  PiMoonThin,
  PiUserFocusThin,
  PiCodeThin,
  PiGridFourThin,
  PiBriefcaseThin,
  PiGraduationCapThin,
  PiPhoneCallThin,
} from "react-icons/pi";
import { useEffect, useRef, useState } from "react";

const sectionIds = [
  "about",
  "skills",
  "projects",
  "experience",
  "ongoing-and-learning",
  "contact",
] as const;

type SectionId = (typeof sectionIds)[number];

function Header() {
  //theme toggle
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  //active link

  const [activeSection, setActiveSection] = useState("");
  const pendingSectionRef = useRef<SectionId | "">("");
  const pendingTimeoutRef = useRef<ReturnType<typeof window.setTimeout> | null>(
    null,
  );

  useEffect(() => {
    const getHashSection = () => {
      const hash = window.location.hash.replace("#", "");
      return sectionIds.includes(hash as (typeof sectionIds)[number])
        ? hash
        : "";
    };

    const getVisibleSection = () => {
      const observedSections = ["hero", ...sectionIds]
        .map((sectionId) => document.getElementById(sectionId))
        .filter((section): section is HTMLElement => Boolean(section));

      const activationPoint = window.innerHeight * 0.4;
      const activeSection =
        observedSections.find((section) => {
          const rect = section.getBoundingClientRect();
          return rect.top <= activationPoint && rect.bottom > activationPoint;
        }) ??
        observedSections
          .map((section) => ({
            section,
            distance: Math.abs(
              section.getBoundingClientRect().top - activationPoint,
            ),
          }))
          .sort((a, b) => a.distance - b.distance)[0]?.section;

      if (!activeSection) return "";

      return activeSection.id === "hero" ? "" : activeSection.id;
    };

    const updateUrl = (sectionId: string) => {
      const currentPath = `${window.location.pathname}${window.location.search}`;
      const currentUrl = `${currentPath}${window.location.hash}`;
      const nextUrl = sectionId ? `${currentPath}#${sectionId}` : currentPath;

      if (currentUrl !== nextUrl) {
        window.history.replaceState(null, "", nextUrl);
      }
    };

    const updateActiveSection = () => {
      setActiveSection(getHashSection());
    };

    updateActiveSection();

    const updateSectionFromScroll = () => {
      const pendingSection = pendingSectionRef.current;
      const visibleSection = getVisibleSection();

      if (pendingSection) {
        if (visibleSection === pendingSection) {
          pendingSectionRef.current = "";
        } else {
          return;
        }
      }

      setActiveSection(visibleSection);
      updateUrl(visibleSection);
    };

    window.addEventListener("scroll", updateSectionFromScroll, {
      passive: true,
    });
    window.addEventListener("resize", updateSectionFromScroll);

    window.addEventListener("hashchange", updateActiveSection);

    return () => {
      if (pendingTimeoutRef.current) {
        window.clearTimeout(pendingTimeoutRef.current);
      }
      window.removeEventListener("scroll", updateSectionFromScroll);
      window.removeEventListener("resize", updateSectionFromScroll);
      window.removeEventListener("hashchange", updateActiveSection);
    };
  }, []);

  const handleSectionClick = (sectionId: SectionId) => {
    pendingSectionRef.current = sectionId;

    if (pendingTimeoutRef.current) {
      window.clearTimeout(pendingTimeoutRef.current);
    }

    pendingTimeoutRef.current = window.setTimeout(() => {
      pendingSectionRef.current = "";
    }, 1200);

    setActiveSection(sectionId);
  };

  const handleHomeClick = () => {
    pendingSectionRef.current = "";
    setActiveSection("");
  };

  const getDesktopLinkClassName = (sectionId: SectionId) =>
    activeSection === sectionId
      ? `${styles.navLink} ${styles.navLinkActive}`
      : styles.navLink;

  const getMobileLinkClassName = (sectionId: SectionId) =>
    activeSection === sectionId
      ? `${styles.mobileLink} ${styles.activeLink}`
      : styles.mobileLink;

  return (
    <>
      <header className={styles.header}>
        <div className={`${styles.topBar} container`}>
          <Link href={"/"} className={styles.logo} onClick={handleHomeClick}>
            AP
          </Link>
          <nav className={styles.desktopNav}>
            <Link
              href={"/#about"}
              onClick={() => handleSectionClick("about")}
              className={getDesktopLinkClassName("about")}
            >
              About
            </Link>
            <Link
              href={"/#skills"}
              onClick={() => handleSectionClick("skills")}
              className={getDesktopLinkClassName("skills")}
            >
              Skills
            </Link>
            <Link
              href={"/#projects"}
              onClick={() => handleSectionClick("projects")}
              className={getDesktopLinkClassName("projects")}
            >
              Projects
            </Link>
            <Link
              href={"/#experience"}
              onClick={() => handleSectionClick("experience")}
              className={getDesktopLinkClassName("experience")}
            >
              Experience
            </Link>
            <Link
              href={"/#ongoing-and-learning"}
              onClick={() => handleSectionClick("ongoing-and-learning")}
              className={getDesktopLinkClassName("ongoing-and-learning")}
            >
              Ongoing & Learning
            </Link>
            <Link
              href={"/#contact"}
              onClick={() => handleSectionClick("contact")}
              className={getDesktopLinkClassName("contact")}
            >
              Contact
            </Link>
          </nav>
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

      <section className={styles.mobileBottomBar}>
        <nav className={`${styles.mobileNav} container`}>
          <Link
            href="/#about"
            aria-label="About"
            onClick={() => handleSectionClick("about")}
            className={getMobileLinkClassName("about")}
          >
            <Icon
              size={30}
              ariaHidden
              icon={PiUserFocusThin}
              className={styles.navIcon}
            ></Icon>
          </Link>

          <Link
            href="/#skills"
            aria-label="Skills"
            onClick={() => handleSectionClick("skills")}
            className={getMobileLinkClassName("skills")}
          >
            <Icon
              size={30}
              ariaHidden
              icon={PiCodeThin}
              className={styles.navIcon}
            ></Icon>
          </Link>

          <Link
            href="/#projects"
            aria-label="projects"
            onClick={() => handleSectionClick("projects")}
            className={getMobileLinkClassName("projects")}
          >
            <Icon
              size={30}
              ariaHidden
              icon={PiGridFourThin}
              className={styles.navIcon}
            ></Icon>
          </Link>

          <Link
            href="/#experience"
            aria-label="Experience"
            onClick={() => handleSectionClick("experience")}
            className={getMobileLinkClassName("experience")}
          >
            <Icon
              size={30}
              ariaHidden
              icon={PiBriefcaseThin}
              className={styles.navIcon}
            ></Icon>
          </Link>

          <Link
            href="/#ongoing-and-learning"
            aria-label="Ongoing-and-learning"
            onClick={() => handleSectionClick("ongoing-and-learning")}
            className={getMobileLinkClassName("ongoing-and-learning")}
          >
            <Icon
              size={30}
              ariaHidden
              icon={PiGraduationCapThin}
              className={styles.navIcon}
            ></Icon>
          </Link>

          <Link
            href="/#contact"
            aria-label="Contact"
            onClick={() => handleSectionClick("contact")}
            className={getMobileLinkClassName("contact")}
          >
            <Icon
              size={30}
              ariaHidden
              icon={PiPhoneCallThin}
              className={styles.navIcon}
            ></Icon>
          </Link>
        </nav>
      </section>
    </>
  );
}

export default Header;
