"use client";

import { useState } from "react";
import { Event } from "@/models";
import { EventCard, Modal } from "@/components/molecules";
import styles from "./EventsList.module.css";

interface EventsListProps {
  events: Event[];
}

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

  const shouldShowModal = (currentEvent && showModal) || false;

  return (
    <div className={styles.eventCardGrid}>
      {events.map((event: Event) => (
        <EventCard event={event} onClick={handleOnClick} key={event.id} />
      ))}

      <Modal isVisible={shouldShowModal} onClose={handleOnClose}>
        {currentEvent?.title}
      </Modal>
    </div>
  );
};
