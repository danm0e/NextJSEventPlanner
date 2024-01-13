import Link from "next/link";
import { CreateEventForm } from "@/components/organisms";
import { PageProps } from "@/models";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
import styles from "./CreatePage.module.css";

const CreateEvent = ({ params }: PageProps) => (
  <section className={styles.createEvent}>
    <header className={styles.createEventPageHeader}>
      <h2>Create a new event</h2>
      <Link href="/events">
        <button className={styles.createEventPageButton}>
          <ArrowUturnLeftIcon className={styles.createEventPageButtonIcon} />
          Back
        </button>
      </Link>
    </header>

    <CreateEventForm />
  </section>
);

export default CreateEvent;
