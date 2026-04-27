import Button from "@/components/UI/Button/Button";
import styles from "./ProjectsFilter.module.css";
import { ProjectFilter } from "../Projects/project";

type ProjectsFilterProps = {
  activeFilter: ProjectFilter;
  onFilterChange: (filter: ProjectFilter) => void;
};

function ProjectsFilter({ activeFilter, onFilterChange }: ProjectsFilterProps) {
  return (
    <div className={styles.filtersWrapper}>
      <Button
        variant="text"
        onClick={() => onFilterChange("all")}
        className={`${activeFilter === "all" ? styles.activeFilter : ""} ${styles.filterBtn}`}
      >
        All
      </Button>
      <Button
        variant="text"
        onClick={() => onFilterChange("dev")}
        className={`${activeFilter === "dev" ? styles.activeFilter : ""} ${styles.filterBtn}`}
      >
        Dev
      </Button>
      <Button
        variant="text"
        onClick={() => onFilterChange("ux")}
        className={`${activeFilter === "ux" ? styles.activeFilter : ""} ${styles.filterBtn}`}
      >
        UX
      </Button>
    </div>
  );
}

export default ProjectsFilter;
