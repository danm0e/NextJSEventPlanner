import { PropsWithChildren } from "react";
import Link from "next/link";
import styles from "./Button.module.css";

interface ButtonProps extends PropsWithChildren {
  href?: string;
  className?: string;
  onClick?: (e: any) => void;
}

export const Button = ({ href, onClick, children, className }: ButtonProps) => {
  if (!href)
    return (
      <button className={`${styles.primaryBtn} ${className}`} onClick={onClick}>
        {children}
      </button>
    );

  return (
    <Link href={href}>
      <button className={`${styles.primaryBtn} ${className}`}>
        {children}
      </button>
    </Link>
  );
};
