import Image from "next/image";
import { Event } from "@/models";
import styles from "./EventCard.module.css";

interface EventCardProps {
  event: Event;
}

export const EventCard = ({
  event: { id, image, title, status },
}: EventCardProps) => (
  <button className={styles.eventCardButton} key={id}>
    <article className={styles.eventCard}>
      <Image
        src={image}
        width="600"
        height="300"
        alt={title}
        className={styles.eventCardImage}
      />

      <div className={styles.eventCardBody}>
        <span className={styles.eventCardNumber}>{id}</span>
        <h3 className={styles.eventCardTitle}>{title}</h3>
        {status && <small className={styles.eventCardStatus}>{status}</small>}
      </div>
    </article>
  </button>
);
