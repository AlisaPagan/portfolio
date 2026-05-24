import styles from "./Loader.module.css";
import { Watch } from "react-loader-spinner";

function Loader() {
  return (
    <div className={styles.loaderWrapper}>
      <Watch
        visible={true}
        height="50"
        width="50"
        color="var(--nav-link)"
        ariaLabel="watch-loading"
        radius={48}
      />
    </div>
  );
}

export default Loader;
