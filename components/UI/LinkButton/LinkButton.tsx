"use client";

import Link from "next/link";
import styles from "./LinkButton.module.css";

type LinkButtonVariant = "primary" | "secondary";

type LinkButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: LinkButtonVariant;
  className?: string;
  target?: "_blank" | "_self";
  rel?: string;
  "aria-label"?: string;
};

function LinkButton({
  children,
  href,
  variant = "primary",
  className,
  target = "_self",
  rel = "noopener",
  "aria-label": ariaLabel,
}: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={`${styles.linkButton} ${styles[variant]} ${className ?? ""}`}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
    >
      {children}
    </Link>
  );
}
export default LinkButton;
