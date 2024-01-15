import { Button } from "@/components/atoms";
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

    <Button href="/events">View Events</Button>
  </section>
);
