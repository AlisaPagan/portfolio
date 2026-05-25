"use client";
import styles from "./Button.module.css";

type ButtonVariant = "primary" | "secondary" | "text";

type ButtonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit";
  className?: string;
  ref?: React.Ref<HTMLButtonElement>;
  "aria-label"?: string;
  "aria-pressed"?: boolean;
  "aria-current"?: React.AriaAttributes["aria-current"];
};

function Button({
  children,
  variant = "primary",
  disabled = false,
  onClick,
  type = "button",
  className,
  ref,
  "aria-label": ariaLabel,
  "aria-pressed": ariaPressed,
  "aria-current": ariaCurrent,
}: ButtonProps) {
  return (
    <button
      ref={ref}
      type={type}
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel}
      aria-pressed={ariaPressed}
      aria-current={ariaCurrent}
      className={`${styles.btn}  ${styles[variant]} ${className ?? ""}`}
    >
      {children}
    </button>
  );
}

export default Button;
