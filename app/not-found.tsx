import styles from "./not-found.module.css";
import LinkButton from "@/components/UI/LinkButton/LinkButton";

function NotFound() {
  return (
    <main className={`${styles.notFound} section`}>
      <div className={`${styles.sectionWrapper} container`}>
        <h1>404</h1>
        <p>{"Oops! This page doesn't exist!"}</p>
        <LinkButton href={"/"} className={styles.btn404link}>
          Return Home
        </LinkButton>
      </div>
    </main>
  );
}

export default NotFound;
