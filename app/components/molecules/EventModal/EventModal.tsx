import { Event } from "@/models";
import Image from "next/image";
import styles from "./EventModal.module.css";

interface EventModalProps {
  event: Event;
}

export const EventModal = ({
  event: { image, title, description, location, created, status },
}: EventModalProps) => {
  return (
    <div className={styles.eventModal}>
      <Image
        src={image}
        width="600"
        height="300"
        alt={title}
        className={styles.eventModalImage}
        priority
      />

      <section className={styles.eventModalBody}>
        <header className={styles.eventModalHeader}>
          <h2 className={styles.eventModalTitle}>{title}</h2>
          {status && (
            <small className={styles.eventModalStatus}>{status}</small>
          )}
        </header>

        <div className={styles.eventModalContent}>
          <p>{description}</p>
          <p>{location}</p>
          <p>{created.date}</p>
          <p>{created.name}</p>
          <p>{created.email}</p>
        </div>
      </section>
    </div>
  );
};
