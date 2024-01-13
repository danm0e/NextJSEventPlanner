import Link from "next/link";
import { Suspense } from "react";
import Loading from "@/events/loading";
import { EventsList } from "@/components/organisms";
import { Event } from "@/models";
import { PlusIcon } from "@heroicons/react/24/solid";
import styles from "./EventsPage.module.css";

const getEvents = async () => {
  // await new Promise((resolve: any) => setTimeout(resolve, 3000));

  const events = await fetch("http://localhost:4000/events", {
    next: { revalidate: 0 },
  });

  return events.json();
};

const Events = async () => {
  const events: Event[] = await getEvents();

  return (
    <section className="w-full">
      <header className={styles.eventPageHeader}>
        <h2>Events</h2>
        <Link href="/events/create">
          <button className={styles.eventPageButton}>
            <PlusIcon className={styles.eventPageButtonIcon} />
            Add Event
          </button>
        </Link>
      </header>

      <Suspense fallback={<Loading />}>
        <EventsList events={events} />
      </Suspense>
    </section>
  );
};

export default Events;
