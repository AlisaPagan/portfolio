"use client";
import Tag from "@/components/UI/Tag/Tag";
import styles from "./page.module.css";
import Button from "@/components/UI/Button/Button";

export default function Home() {
  const handleOnClick = () => {
    console.log("clicked");
  };
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.intro}>
          <h1>To get started, edit the page.tsx file.</h1>

          <h2>We gonna code</h2>
          <h3>and more again</h3>
          <h4>and some more</h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </div>
        <div className={styles.ctas}>
          <div className={styles.btns}>
            <Button
              variant="primary"
              onClick={handleOnClick}
              className={styles.btn}
            >
              Primary
            </Button>

            <Button
              variant="primary"
              onClick={handleOnClick}
              className={styles.btn}
              disabled={true}
            >
              Disasbled
            </Button>

            <Button
              variant="secondary"
              onClick={handleOnClick}
              className={styles.btn}
            >
              Secondary
            </Button>
            <ul className={styles.tagsList}>
              <li>
                <Tag>Node.js</Tag>
              </li>
              <li>
                <Tag>React</Tag>
              </li>
              <li>
                <Tag>Next.js</Tag>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
