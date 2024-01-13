import { Event } from "@/models";
import Image from "next/image";
import styles from "./EventModal.module.css";
import {
  MapPinIcon,
  CalendarIcon,
  UserIcon,
  AtSymbolIcon,
} from "@heroicons/react/24/solid";

interface EventModalProps {
  event: Event;
}

export const EventModal = ({
  event: { image, title, description, location, created, status },
}: EventModalProps) => {
  const timeStamp = new Date(Number(created.date)).toLocaleDateString();

  const details = [
    {
      id: "location",
      text: location,
      icon: MapPinIcon,
    },
    {
      id: "date",
      text: timeStamp,
      icon: CalendarIcon,
    },
    {
      id: "name",
      text: created.name,
      icon: UserIcon,
    },
    {
      id: "email",
      text: created.email,
      icon: AtSymbolIcon,
    },
  ];

  const Header = () => (
    <header className={styles.eventModalHeader}>
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
      <Image
        src={image}
        width="600"
        height="300"
        alt={title}
        className={styles.eventModalImage}
        priority
      />

      <section className={styles.eventModalBody}>
        <Header />
        <Content />
      </section>
    </div>
  );
};
