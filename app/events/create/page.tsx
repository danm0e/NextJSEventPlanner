import { CreateEventForm } from "@/components/organisms";
import { PageProps } from "@/models";
import styles from "./CreatePage.module.css";

const CreateEvent = ({ params }: PageProps) => {
  console.log(params);

  return (
    <section className={styles.createEvent}>
      <h2>Create a new event</h2>
      <CreateEventForm />
    </section>
  );
};

export default CreateEvent;
