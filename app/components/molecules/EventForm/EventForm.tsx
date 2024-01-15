import { ChangeEvent, FormEvent } from "react";
import { FormData } from "@/models";
import {
  RectangleStackIcon,
  ChatBubbleBottomCenterIcon,
  PhotoIcon,
  MapPinIcon,
  UserIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/solid";
import styles from "./EventForm.module.css";

type FormFieldId =
  | "title"
  | "description"
  | "image"
  | "location"
  | "name"
  | "email";

interface FormFields {
  id: FormFieldId;
  icon: any;
  placeholder?: string;
}

const formFields: FormFields[] = [
  {
    id: "title",
    icon: RectangleStackIcon,
    placeholder: "What is this event about?",
  },
  {
    id: "description",
    icon: ChatBubbleBottomCenterIcon,
    placeholder: "Any additional info?",
  },
  {
    id: "image",
    icon: PhotoIcon,
    placeholder: "Enter your image url",
  },
  {
    id: "location",
    icon: MapPinIcon,
    placeholder: "Where is this to be held?",
  },
  {
    id: "name",
    icon: UserIcon,
    placeholder: "What is your name?",
  },
  {
    id: "email",
    icon: EnvelopeIcon,
    placeholder: "What is your email?",
  },
];

interface EventFormProps {
  formData: FormData;
  type: "add" | "edit";
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: FormEvent) => void;
}

export const EventForm = ({
  formData,
  type,
  onChange,
  onSubmit,
}: EventFormProps) => {
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => onChange(e);

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
      <button className={styles.eventFormButton} onClick={onSubmit}>
        {type} Event
      </button>
    </div>
  );
};
