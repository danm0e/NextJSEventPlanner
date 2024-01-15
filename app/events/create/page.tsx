import { CreateEventForm } from "@/components/organisms";
import { PageProps } from "@/models";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
import { Button } from "@/components/atoms";
import styles from "./CreatePage.module.css";

const CreateEvent = ({ params }: PageProps) => (
  <section className={styles.createEvent}>
    <header className={styles.createEventPageHeader}>
      <h2>Create a new event</h2>

      <Button href="/events">
        <ArrowUturnLeftIcon className={styles.createEventPageButtonIcon} />
        Back
      </Button>
    </header>

    <CreateEventForm />
  </section>
);

export default CreateEvent;
