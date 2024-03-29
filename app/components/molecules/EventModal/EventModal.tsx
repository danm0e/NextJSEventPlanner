import { Event } from "@/models";
import Image from "next/image";
import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { getEventDetails } from "./Event.modal.utils";
import { Button } from "@/components/atoms";
import styles from "./EventModal.module.css";

interface EventModalProps {
  event: Event;
}

export const EventModal = ({
  event,
  event: { id, image, title, description, status },
}: EventModalProps) => {
  const details = getEventDetails(event);

  const Header = () => (
    <header className={styles.eventModalBodyHeader}>
      <h2 className={styles.eventModalTitle}>{title}</h2>
      {status && <small className={styles.eventModalStatus}>{status}</small>}
    </header>
  );

  const EventDetails = () => (
    <ul className={styles.eventModalDetails}>
      {details.map(({ id, text, icon: Icon }) => (
        <li className={styles.eventModalDetailItem} key={id}>
          <Icon className={styles.eventModalIcon} />
          {text}
        </li>
      ))}
    </ul>
  );

  const Content = () => (
    <div className={styles.eventModalContent}>
      <p>{description}</p>
      <EventDetails />
    </div>
  );

  return (
    <div className={styles.eventModal}>
      <div className={styles.eventModalHeader}>
        <div className={styles.eventModalEdit}>
          <Button href={`/events/${id}`}>
            <PencilSquareIcon className={styles.eventModalEditIcon} />
            Edit
          </Button>
        </div>

        <Image
          src={image}
          width="600"
          height="300"
          alt={title}
          className={styles.eventModalImage}
          priority
        />
      </div>

      <section className={styles.eventModalBody}>
        <Header />
        <Content />
      </section>
    </div>
  );
};
