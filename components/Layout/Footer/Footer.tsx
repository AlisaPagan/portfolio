import Link from "next/link";
import styles from "./Footer.module.css";
import Icon from "@/components/UI/Icon/Icon";
import {
  PiEnvelopeSimpleThin,
  PiGithubLogo,
  PiLinkedinLogoLight,
  PiPhoneThin,
} from "react-icons/pi";

function Footer() {
  return (
    <footer className={`${styles.footer} section`}>
      <div className={`${styles.footerWrapper} container`}>
        <div className={styles.footerTop}>
          <div className={styles.footerSection}>
            <Link href={"/"} className={styles.logo}>
              Alisa Pagan
            </Link>
            <p className={styles.position}>
              Full Stack Engineer & <br />
              UX Designer
            </p>
          </div>
          <div className={styles.footerSection}>
            <ul className={styles.links}>
              <li className={styles.linkItem}>
                <Link
                  href={"https://github.com/AlisaPagan"}
                  target="_blank"
                  className={styles.socialLink}
                >
                  <Icon
                    icon={PiGithubLogo}
                    size={30}
                    className={styles.socialIcon}
                  />
                </Link>
              </li>
              <li className={styles.linkItem}>
                <Link
                  href={"https://www.linkedin.com/in/alisa-pagan/"}
                  target="_blank"
                  className={styles.socialLink}
                >
                  <Icon
                    icon={PiLinkedinLogoLight}
                    size={30}
                    className={styles.socialIcon}
                  />
                </Link>
              </li>
              <li className={styles.linkItem}>
                <Link
                  href={"tel:+15757065572"}
                  className={styles.socialLink}
                  aria-label="Call Alisa"
                >
                  <Icon
                    icon={PiPhoneThin}
                    size={30}
                    className={styles.socialIcon}
                  />
                </Link>
              </li>
              <li className={styles.linkItem}>
                <Link
                  href={"mailto:alisapodgaynaya023@gmail.com"}
                  className={styles.socialLink}
                  aria-label="Email Alisa"
                >
                  <Icon
                    icon={PiEnvelopeSimpleThin}
                    size={30}
                    className={styles.socialIcon}
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <hr className="divider" />
        <div className={styles.footerBottom}>
          <p className={styles.copyrightLine}>
            &copy; {new Date().getFullYear()} Designed and coded by Alisa Pagan.
            All rights reserved.
          </p>

          <p className={styles.builtLine}>Built with Next.js and React.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
