"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import {
  RectangleStackIcon,
  ChatBubbleBottomCenterIcon,
  PhotoIcon,
  MapPinIcon,
  UserIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/solid";
import styles from "./CreateEventForm.module.css";
import { Event } from "@/models";

interface FormData {
  title: string;
  description: string;
  image: string;
  location: string;
  date?: string;
  name: string;
  email: string;
}

const initialFormData = {
  title: "",
  description: "",
  image: "",
  location: "",
  name: "",
  email: "",
};

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

export const CreateEventForm = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const router = useRouter();

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleOnSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const newEvent: Event = {
      id: crypto.randomUUID(),
      title: formData.title,
      description: formData.description,
      image: formData.image,
      location: formData.location,
      created: {
        date: Date.now().toString(),
        name: formData.name,
        email: formData.email,
      },
    };

    const res = await fetch("http://localhost:4000/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newEvent),
    });

    if (res.status === 201) {
      router.refresh();
      router.push("/events");
    }
  };

  return (
    <section className={styles.createEventFormContainer}>
      <h3 className={styles.createEventFormTitle}>Add the event details</h3>

      <form className={styles.createEventForm}>
        {formFields.map(({ id, icon: Icon, placeholder }) => (
          <div className={styles.createEventFormControl} key={id}>
            <label className={styles.createEventFormLabel}>
              <Icon className={styles.createEventFormIcon} />
              {id}
            </label>
            <input
              type="text"
              id={id}
              value={formData?.[id]}
              onChange={handleOnChange}
              className={styles.createEventFormInput}
              placeholder={placeholder}
            />
          </div>
        ))}
      </form>

      <button className={styles.createEventFormButton} onClick={handleOnSubmit}>
        Add Event
      </button>
    </section>
  );
};
