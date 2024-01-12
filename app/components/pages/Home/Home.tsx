import Link from "next/link";
import styles from "./Home.module.css";

export const HomePage = () => (
  <section className={styles.home}>
    <h1 className={styles.homeTitle}>
      Welcome to the most awesome event planner ever!
    </h1>

    <p className={styles.homeText}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, totam error
      quas porro nisi iusto tempora, delectus modi veritatis impedit quasi
      itaque sapiente inventore quis fuga iste vel consequuntur voluptas.
    </p>

    <Link href="/events">
      <button className={styles.homeLink}>View Events</button>
    </Link>
  </section>
);
