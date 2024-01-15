import { ChangeEvent, FormEvent, useState } from "react";
import { FormData } from "@/models";
import { Button } from "@/components/atoms";
import { getFormFields } from "./EventForm.utils";
import { EventDeleteModal, Modal } from "@/components/molecules";
import styles from "./EventForm.module.css";

interface EventFormProps {
  formData: FormData;
  type: "add" | "edit";
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: FormEvent) => void;
  onDelete: () => void;
}

export const EventForm = ({
  formData,
  type,
  onChange,
  onSubmit,
  onDelete,
}: EventFormProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => onChange(e);

  const formFields = getFormFields();

  const handleOnToggle = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div className={styles.eventFormContainer}>
      <form className={styles.eventForm}>
        {formFields.map(({ id, icon: Icon, placeholder }) => (
          <div className={styles.eventFormControl} key={id}>
            <label className={styles.eventFormLabel}>
              <Icon className={styles.eventFormIcon} />
              {id}
            </label>

            <input
              type="text"
              id={id}
              value={formData?.[id]}
              onChange={handleOnChange}
              className={styles.eventFormInput}
              placeholder={placeholder}
            />
          </div>
        ))}
      </form>
      <Button onClick={onSubmit}>{type} Event</Button>

      {type === "edit" && (
        <div className={styles.eventFormFooter}>
          <Button onClick={handleOnToggle} className={styles.eventFormButton}>
            Delete Event
          </Button>
        </div>
      )}

      {modalOpen && (
        <Modal hideClose>
          <EventDeleteModal onClose={handleOnToggle} onDelete={onDelete} />
        </Modal>
      )}
    </div>
  );
};
