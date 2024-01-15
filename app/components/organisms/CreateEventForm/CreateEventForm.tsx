"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import { FormData, Event } from "@/models";
import { EventForm } from "@/components/molecules";

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
      ...formData,
      id: crypto.randomUUID(),
      date: Date.now().toString(),
    };

    const res = await fetch("http://localhost:4000/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newEvent),
    });

    if (res.status === 201) {
      router.push("/events");
      router.refresh();
    }
  };

  return (
    <EventForm
      formData={formData}
      onChange={handleOnChange}
      onSubmit={handleOnSubmit}
      type="add"
    />
  );
};
