"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import { FormData, Event } from "@/models";
import { EventForm } from "@/components/molecules";
import styles from "./EditEventForm.module.css";

interface EditFormProps {
  event: Event;
}

export const EditEventForm = ({ event }: EditFormProps) => {
  const initialFormData: FormData = {
    title: event.title,
    description: event.description,
    image: event.image,
    location: event.location,
    name: event.created.name,
    email: event.created.email,
  };

  const [formData, setFormData] = useState<FormData>(initialFormData);
  const router = useRouter();

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleOnSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const editedEvent: Event = {
      id: event.id,
      title: formData.title,
      description: formData.description,
      image: formData.image,
      location: formData.location,
      created: {
        date: event.created.date,
        name: formData.name,
        email: formData.email,
      },
    };

    const res = await fetch(`http://localhost:4000/events/${event.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editedEvent),
    });

    if (res.status === 200) {
      router.refresh();
      router.push("/events");
    }
  };

  return (
    <div className={styles.editEventFormContainer}>
      <EventForm formData={formData} onChange={handleOnChange} />

      <button className={styles.editEventFormButton} onClick={handleOnSubmit}>
        Edit Event
      </button>
    </div>
  );
};
