"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import { FormData, Event } from "@/models";
import { EventForm } from "@/components/molecules";

interface EditFormProps {
  event: Event;
}

export const EditEventForm = ({ event }: EditFormProps) => {
  const [formData, setFormData] = useState<FormData>(event);
  const router = useRouter();

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleOnSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const editedEvent: Event = { ...event, ...formData };

    const res = await fetch(`http://localhost:4000/events/${event.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editedEvent),
    });

    if (res.status === 200) {
      router.push("/events");
      router.refresh();
    }
  };

  const handleOnDelete = async () => {
    const res = await fetch(`http://localhost:4000/events/${event.id}`, {
      method: "DELETE",
    });

    if (res.status === 200) {
      router.push("/events");
      router.refresh();
    }
  };

  return (
    <EventForm
      formData={formData}
      type="edit"
      onChange={handleOnChange}
      onSubmit={handleOnSubmit}
      onDelete={handleOnDelete}
    />
  );
};
