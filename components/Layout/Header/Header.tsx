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
import { useEffect, useState } from "react";

function Header() {
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    if (typeof window === "undefined") return "dark";

    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "light" ? "light" : "dark";
  });

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
  return (
    <>
      <header className={styles.header}>
        <div className={`${styles.topBar} container`}>
          <Link href={"/"} className={styles.logo}>
            AP
          </Link>
          <nav className={styles.desktopNav}>
            <Link href={"/#about"} className={styles.navLink}>
              About
            </Link>
            <Link href={"/#skills"} className={styles.navLink}>
              Skills
            </Link>
            <Link href={"/#projects"} className={styles.navLink}>
              Works
            </Link>
            <Link href={"/#experience"} className={styles.navLink}>
              Experience
            </Link>
            <Link href={"/#ongoing-and-learning"} className={styles.navLink}>
              Ongoing & Learning
            </Link>
            <Link href={"/#contact"} className={styles.navLink}>
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
        <nav className={styles.mobileNav}>
          <Link href="/#about" aria-label="About">
            <Icon
              size={30}
              ariaHidden
              icon={PiUserFocusThin}
              className={styles.navIcon}
            ></Icon>
          </Link>

          <Link href="/#skills" aria-label="Skills">
            <Icon
              size={30}
              ariaHidden
              icon={PiCodeThin}
              className={styles.navIcon}
            ></Icon>
          </Link>

          <Link href="/#works" aria-label="Works">
            <Icon
              size={30}
              ariaHidden
              icon={PiGridFourThin}
              className={styles.navIcon}
            ></Icon>
          </Link>

          <Link href="/#experience" aria-label="Experience">
            <Icon
              size={30}
              ariaHidden
              icon={PiBriefcaseThin}
              className={styles.navIcon}
            ></Icon>
          </Link>

          <Link href="/#ongoing-and-learning" aria-label="Ongoing-and-learning">
            <Icon
              size={30}
              ariaHidden
              icon={PiGraduationCapThin}
              className={styles.navIcon}
            ></Icon>
          </Link>

          <Link href="/#contact" aria-label="Contact">
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
