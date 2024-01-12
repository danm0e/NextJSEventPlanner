import { Event } from "@/models";
import { EventCard } from "@/components/molecules";
import styles from "./EventsList.module.css";

const getEvents = async () => {
  const events = await fetch("http://localhost:4000/events");
  return events.json();
};

export const EventsList = async () => {
  const events: Event[] = await getEvents();

  return (
    <div className={styles.eventCardGrid}>
      {events.map((event: Event) => (
        <EventCard event={event} key={event.id} />
      ))}
    </div>
  );
};
