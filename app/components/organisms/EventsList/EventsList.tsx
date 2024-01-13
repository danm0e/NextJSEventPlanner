"use client";

import { useState } from "react";
import { Event } from "@/models";
import { EventCard, Modal, EventModal } from "@/components/molecules";
import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/solid";
import styles from "./EventsList.module.css";

interface EventsListProps {
  events: Event[];
}

const NoEvents = () => (
  <div className={styles.noEvents}>
    <MagnifyingGlassCircleIcon className={styles.noEventsIcon} />
    <div>
      <h2>No events just yet!</h2>
      <p>Add some to see them here!</p>
    </div>
  </div>
);

export const EventsList = ({ events }: EventsListProps) => {
  const [showModal, setShowModal] = useState(false);
  const [currentEvent, setCurrentEvent] = useState<Event | undefined>();

  const handleOnClose = () => {
    setShowModal(false);
    setCurrentEvent(undefined);
  };

  const handleOnClick = (event: Event) => {
    setCurrentEvent(event);
    setShowModal(true);
  };

  const shouldShowModal = !!(currentEvent && showModal);

  if (!events.length) return <NoEvents />;

  return (
    <div className={styles.eventCardGrid}>
      {events.map((event: Event, idx) => (
        <EventCard
          event={event}
          onClick={handleOnClick}
          key={event.id}
          count={idx + 1}
        />
      ))}

      {!!currentEvent && (
        <Modal isVisible={shouldShowModal} onClose={handleOnClose}>
          <EventModal event={currentEvent} />
        </Modal>
      )}
    </div>
  );
};
