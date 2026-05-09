import styles from "./Contact.module.css";
import Icon from "@/components/UI/Icon/Icon";
import {
  PiEnvelopeSimpleThin,
  PiGithubLogo,
  PiLinkedinLogoLight,
  PiPhoneThin,
} from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";
import Link from "next/link";
import ContactForm from "../ContactForm/ContactForm";

function Contact() {
  return (
    <section id="contact" className={`section ${styles.contactsSection}`}>
      <div className={styles.glow}></div>
      <div className={`${styles.sectionWrapper} container`}>
        <h2 className={styles.heading}>Contacts</h2>

        <div className={styles.topInfo}>
          <h3 className={styles.subheading}>Get in Touch with Me</h3>
          <p className={styles.intro}>
            is simply dummy text of the printing and typesetting industry.
          </p>
        </div>
        <hr className={styles.divider} />

        <div className={styles.contentWrapper}>
          <div className={styles.formContainer}>
            <ContactForm />
          </div>

          <div className={styles.contactsContaner}>
            <article className={styles.contacts}>
              <ul className={styles.contactsList}>
                <li className={styles.contactsItem}>
                  <Link
                    href={"mailto:alisapodgaynaya023@gmail.com"}
                    className={styles.contact}
                  >
                    <Icon
                      icon={PiEnvelopeSimpleThin}
                      size={24}
                      className={styles.contactIcon}
                    />
                    alisapodgaynaya023@gmail.com
                  </Link>
                </li>
                <li className={styles.contactsItem}>
                  <Link href={"tel:+15757065572"} className={styles.contact}>
                    <Icon
                      icon={PiPhoneThin}
                      size={24}
                      className={styles.contactIcon}
                    />
                    (575) 706-5572
                  </Link>
                </li>
                <li className={styles.contactsItem}>
                  <Icon
                    icon={CiLocationOn}
                    size={24}
                    className={styles.contactIcon}
                  />
                  Remote / Artesia, NM
                </li>
              </ul>
            </article>

            <article className={styles.socials}>
              <h4>{"Let's Connect"}</h4>
              <ul className={styles.soacialsList}>
                <li className={styles.socialsItem}>
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
                <li className={styles.socialsItem}>
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
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
