import Image from "next/image";
import { Event } from "@/models";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";
import styles from "./EventCard.module.css";

interface EventCardProps {
  event: Event;
  onClick: (event: Event) => void;
  count: number;
}

interface StatusProps {
  status: "Accepted" | "Declined";
}

const StatusIcon = ({ status }: StatusProps) => {
  const icons = {
    Accepted: <CheckCircleIcon className={styles.acceptedIcon} />,
    Declined: <XCircleIcon className={styles.declinedIcon} />,
  };

  return icons[status];
};

export const EventCard = ({
  event,
  event: { id, image, title, status },
  count,
  onClick,
}: EventCardProps) => (
  <button className={styles.eventCardButton} onClick={() => onClick(event)}>
    <article className={styles.eventCard}>
      <Image
        src={image}
        width="600"
        height="300"
        alt={title}
        className={styles.eventCardImage}
        priority
      />

      <div className={styles.eventCardBody}>
        <span className={styles.eventCardNumber}>{count}</span>
        <h3 className={styles.eventCardTitle}>{title}</h3>
        {status && (
          <small className={styles.eventCardStatus}>
            <StatusIcon status={status} />
            {status}
          </small>
        )}
      </div>
    </article>
  </button>
);
