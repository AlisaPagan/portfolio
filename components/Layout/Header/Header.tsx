"use client";

import Link from "next/link";
import styles from "./Header.module.css";
import Button from "@/components/UI/Button/Button";
import Icon from "@/components/UI/Icon/Icon";
import { PiSunDimThin, PiMoonThin } from "react-icons/pi";
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
          <Link
            href={"/#ongoing-works-and-learning"}
            className={styles.navLink}
          >
            Ongoing & Learning
          </Link>
          <Link href={"/#contact-me"} className={styles.navLink}>
            Contact
          </Link>
        </nav>
        <Button
          className={styles.themeButton}
          variant="text"
          onClick={toggleTheme}
          aria-label={
            theme === "dark" ? "Switch to light theme" : "Switch to dark theme"
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
  );
}

export default Header;
