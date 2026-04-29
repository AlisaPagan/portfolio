"use client";
import styles from "./Button.module.css";

type ButtonVariant = "primary" | "secondary" | "text" | "reset";

type ButtonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  className?: string;
  ref?: React.Ref<HTMLButtonElement>;
};

function Button({
  children,
  variant = "primary",
  disabled = false,
  onClick,
  type = "button",
  className,
  ref,
}: ButtonProps) {
  return (
    <button
      ref={ref}
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${styles.btn}  ${styles[variant]} ${className ?? ""}`}
    >
      {children}
    </button>
  );
}

export default Button;
