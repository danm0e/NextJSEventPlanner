import { PropsWithChildren } from "react";
import Link from "next/link";
import styles from "./Button.module.css";

interface ButtonProps extends PropsWithChildren {
  href?: string;
  onClick?: (e: any) => void;
}

export const Button = ({ href, onClick, children }: ButtonProps) => {
  if (!href)
    return (
      <button className={styles.primaryBtn} onClick={onClick}>
        {children}
      </button>
    );

  return (
    <Link href={href}>
      <button className={styles.primaryBtn}>{children}</button>
    </Link>
  );
};
