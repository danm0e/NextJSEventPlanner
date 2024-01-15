import { EditEventForm } from "@/components/organisms";
import { Event, PageProps } from "@/models";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
import { Button } from "@/components/atoms";
import styles from "./EditPage.module.css";

const getEvent = async (id: string) => {
  const events = await fetch(`http://localhost:4000/events/${id}`, {
    next: { revalidate: 0 },
  });

  return events.json();
};

const EditEvent = async ({ params }: PageProps) => {
  const { id } = params;
  const event: Event = await getEvent(id);

  return (
    <section className={styles.editEvent}>
      <header className={styles.editEventPageHeader}>
        <h2>Edit Event</h2>

        <Button href="/events">
          <ArrowUturnLeftIcon className={styles.editEventPageButtonIcon} />
          Back
        </Button>
      </header>

      <EditEventForm event={event} />
    </section>
  );
};

export default EditEvent;
