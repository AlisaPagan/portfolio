import Link from "next/link";
import styles from "./Header.module.css";
import Button from "@/components/UI/Button/Button";
import Icon from "@/components/UI/Icon/Icon";
import { PiSunDimThin } from "react-icons/pi";
import { PiMoonThin } from "react-icons/pi";

function Header() {
  return (
    <header className={styles.header}>
      <div className={`${styles.headerWrapper} container`}>
        <Link href={"/"} className={styles.logo}>
          AP
        </Link>
        <nav className={styles.nav}>
          <Link href={"/#about"} className={styles.link}>
            About
          </Link>
          <Link href={"/#skills"} className={styles.link}>
            Skills
          </Link>
          <Link href={"/#projects"} className={styles.link}>
            Projects
          </Link>
          <Link href={"/#experience"} className={styles.link}>
            Experience
          </Link>
          <Link href={"/#ongoing-works-and-learning"} className={styles.link}>
            Ongoing works & Learning
          </Link>
        </nav>
        <Button className={styles.themeButton}>
          <Icon
            icon={PiSunDimThin}
            size={24}
            ariaHidden
            className={styles.themeIcon}
          />
        </Button>
      </div>
    </header>
  );
}

export default Header;
