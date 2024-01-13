"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import { FormData, Event } from "@/models";
import { EventForm } from "@/components/molecules";
import styles from "./CreateEventForm.module.css";

const initialFormData: FormData = {
  title: "",
  description: "",
  image: "",
  location: "",
  name: "",
  email: "",
};

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
    <div className={styles.createEventFormContainer}>
      <EventForm formData={formData} onChange={handleOnChange} />

      <button className={styles.createEventFormButton} onClick={handleOnSubmit}>
        Add Event
      </button>
    </div>
  );
};
