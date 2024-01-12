import Link from "next/link";
import styles from "./Header.module.css";

export const Header = () => (
  <header className={styles.header}>
    <Link href="/" className={styles.headerLink}>
      <h1>Next JS Event Planner</h1>
      <p>Keep track of all your amazing events!</p>
    </Link>
  </header>
);
