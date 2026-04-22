import styles from "./Tag.module.css";

type TagProps = {
  children: React.ReactNode;
  className?: string;
};

function Tag({ children, className }: TagProps) {
  return <span className={`${styles.tag} ${className ?? ""}`}>{children}</span>;
}

export default Tag;
