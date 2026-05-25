import styles from "./DevCtas.module.css";
import { Project } from "@/components/Home/Projects/project";
import LinkButton from "@/components/UI/LinkButton/LinkButton";

type DevCtasProps = {
  project: Project;
};

function DevCtas({ project }: DevCtasProps) {
  return (
    <div className={`${styles.ctasSection} section`}>
      <div className={`${styles.ctasWrapper} container`}>
        {project.links?.live && (
          <LinkButton
            href={project.links?.live}
            target="_blank"
            className={styles.ctaLink}
          >
            View Live
          </LinkButton>
        )}

        {project.links?.github && (
          <LinkButton
            href={project.links?.github}
            target="_blank"
            className={styles.ctaLink}
            variant="secondary"
          >
            View Code
          </LinkButton>
        )}

        {project.links?.backend && project.links?.frontend && (
          <div className={styles.frontBackWrapper}>
            {project.links?.backend && (
              <LinkButton
                href={project.links?.backend}
                target="_blank"
                className={styles.ctaLinkFB}
                variant="secondary"
              >
                View Backend
              </LinkButton>
            )}

            {project.links?.frontend && (
              <LinkButton
                href={project.links?.frontend}
                target="_blank"
                className={styles.ctaLinkFB}
                variant="secondary"
              >
                View Frontend
              </LinkButton>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default DevCtas;
