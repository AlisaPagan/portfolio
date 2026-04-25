import { IconType } from "react-icons";
import styles from "./Icon.module.css";

type IconProps = {
  icon: IconType;
  size?: number;
  className?: string;
  ariaHidden?: boolean;
  href?: string;
};

function Icon({
  icon: Icon,
  size = 24,
  className = "",
  ariaHidden = true,
  href,
}: IconProps) {
  return (
    <Icon
      size={size}
      className={`${styles.icon} ${className}`}
      aria-hidden={ariaHidden}
      href={href}
    />
  );
}

export default Icon;
