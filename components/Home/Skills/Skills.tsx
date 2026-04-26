import styles from "./Skills.module.css";
import Icon from "@/components/UI/Icon/Icon";
import { GoDotFill } from "react-icons/go";
import { FaLaptopCode, FaDev } from "react-icons/fa6";
import { MdOutlineWebAsset } from "react-icons/md";
import { SiMaterialdesignicons } from "react-icons/si";

function Skills() {
  return (
    <section id="skills" className="section">
      <div className={`${styles.sectionWrapper} container`}>
        <h2 className={styles.heading}>Skills</h2>

        <div className={styles.skillsGridWrapper}>
          <div className={styles.listWrapper}>
            <div className={styles.subheadingWrapper}>
              <Icon
                icon={FaLaptopCode}
                size={30}
                className={styles.skillIcon}
              />
              <h3 className={styles.subheading}>Programming</h3>
            </div>

            <ul className={styles.skillsList}>
              <li className={styles.skillsListItem}>
                <Icon icon={GoDotFill} size={16} className={styles.skillIcon} />
                JavaScript
              </li>
              <li className={styles.skillsListItem}>
                <Icon icon={GoDotFill} size={16} className={styles.skillIcon} />
                TypeScript
              </li>
              <li className={styles.skillsListItem}>
                <Icon icon={GoDotFill} size={16} className={styles.skillIcon} />
                Node.js
              </li>
              <li className={styles.skillsListItem}>
                <Icon icon={GoDotFill} size={16} className={styles.skillIcon} />
                Express.js
              </li>
              <li className={styles.skillsListItem}>
                <Icon icon={GoDotFill} size={16} className={styles.skillIcon} />
                React
              </li>
              <li className={styles.skillsListItem}>
                <Icon icon={GoDotFill} size={16} className={styles.skillIcon} />
                Next.js
              </li>
            </ul>
          </div>

          <div className={styles.listWrapper}>
            <div className={styles.subheadingWrapper}>
              <Icon
                icon={MdOutlineWebAsset}
                size={30}
                className={styles.skillIcon}
              />
              <h3 className={styles.subheading}>Web & CMS</h3>
            </div>

            <ul className={styles.skillsList}>
              <li className={styles.skillsListItem}>
                <Icon icon={GoDotFill} size={16} className={styles.skillIcon} />
                HTML5
              </li>
              <li className={styles.skillsListItem}>
                <Icon icon={GoDotFill} size={16} className={styles.skillIcon} />
                CSS3
              </li>
              <li className={styles.skillsListItem}>
                <Icon icon={GoDotFill} size={16} className={styles.skillIcon} />
                WordPress
              </li>
              <li className={styles.skillsListItem}>
                <Icon icon={GoDotFill} size={16} className={styles.skillIcon} />
                Elementor
              </li>
            </ul>
          </div>

          <div className={styles.listWrapper}>
            <div className={styles.subheadingWrapper}>
              <Icon
                icon={SiMaterialdesignicons}
                size={30}
                className={styles.skillIcon}
              />
              <h3 className={styles.subheading}>Design & UX</h3>
            </div>

            <ul className={styles.skillsList}>
              <li className={styles.skillsListItem}>
                <Icon icon={GoDotFill} size={16} className={styles.skillIcon} />
                Figma
              </li>
              <li className={styles.skillsListItem}>
                <Icon icon={GoDotFill} size={16} className={styles.skillIcon} />
                Adobe XD
              </li>
              <li className={styles.skillsListItem}>
                <Icon icon={GoDotFill} size={16} className={styles.skillIcon} />
                Adobe Photoshop
              </li>
              <li className={styles.skillsListItem}>
                <Icon icon={GoDotFill} size={16} className={styles.skillIcon} />
                Adobe Illustrator
              </li>
            </ul>
          </div>

          <div className={styles.listWrapper}>
            <div className={styles.subheadingWrapper}>
              <Icon icon={FaDev} size={30} className={styles.skillIcon} />
              <h3 className={styles.subheading}>Tools & Platforms</h3>
            </div>

            <ul className={styles.skillsList}>
              <li className={styles.skillsListItem}>
                <Icon icon={GoDotFill} size={16} className={styles.skillIcon} />
                Git & Github
              </li>
              <li className={styles.skillsListItem}>
                <Icon icon={GoDotFill} size={16} className={styles.skillIcon} />
                REST APIs
              </li>
              <li className={styles.skillsListItem}>
                <Icon icon={GoDotFill} size={16} className={styles.skillIcon} />
                Postman
              </li>
              <li className={styles.skillsListItem}>
                <Icon icon={GoDotFill} size={16} className={styles.skillIcon} />
                Vite
              </li>
              <li className={styles.skillsListItem}>
                <Icon icon={GoDotFill} size={16} className={styles.skillIcon} />
                Vercel
              </li>
              <li className={styles.skillsListItem}>
                <Icon icon={GoDotFill} size={16} className={styles.skillIcon} />
                Trello
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
