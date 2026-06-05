import { IconType } from "react-icons";
import styles from "./Icon.module.css";

type IconProps = {
  icon: IconType;
  size?: number;
  className?: string;
  ariaHidden?: boolean;
};

function Icon({
  icon: Icon,
  size = 24,
  className = "",
  ariaHidden = true,
}: IconProps) {
  return (
    <Icon
      size={size}
      className={`${styles.icon} ${className}`}
      aria-hidden={ariaHidden}
    />
  );
}

export default Icon;
