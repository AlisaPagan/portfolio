import styles from "./DevCtas.module.css";
import Button from "@/components/UI/Button/Button";
import { Project } from "@/components/Home/Projects/project";
import Link from "next/link";

type DevCtasProps = {
  project: Project;
};

function DevCtas({ project }: DevCtasProps) {
  return (
    <div className={`${styles.ctasSection} section`}>
      <div className={`${styles.ctasWrapper} container`}>
        {project.links?.live && (
          <Link
            href={project.links?.live}
            target="_blank"
            className={styles.ctaLink}
          >
            <Button type="button" className={styles.ctaBtn}>
              View Live
            </Button>
          </Link>
        )}

        {project.links?.github && (
          <Link
            href={project.links?.github}
            target="_blank"
            className={styles.ctaLink}
          >
            <Button type="button" variant="secondary" className={styles.ctaBtn}>
              View Code
            </Button>
          </Link>
        )}

        {project.links?.backend && project.links?.frontend && (
          <div className={styles.frontBackWrapper}>
            {project.links?.backend && (
              <Link
                href={project.links?.backend}
                target="_blank"
                className={styles.ctaLinkFB}
              >
                <Button
                  type="button"
                  variant="secondary"
                  className={styles.ctaBtn}
                >
                  View Backend
                </Button>
              </Link>
            )}

            {project.links?.frontend && (
              <Link
                href={project.links?.frontend}
                target="_blank"
                className={styles.ctaLinkFB}
              >
                <Button
                  type="button"
                  variant="secondary"
                  className={styles.ctaBtn}
                >
                  View Frontend
                </Button>
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default DevCtas;
