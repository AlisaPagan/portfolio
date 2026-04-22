"use client";
import styles from "./Button.module.css";

type ButtonVariant = "primary" | "secondary" | "text" | "reset";

type ButtonProps = {
  children: React.ReactNode;
  variant: ButtonVariant;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  className?: string;
};

function Button({
  children,
  variant = "primary",
  disabled = false,
  onClick,
  type = "button",
  className,
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${styles.btn}  ${styles[variant]} ${className} ?? ""`}
    >
      {children}
    </button>
  );
}

export default Button;
