import { Event } from "@/models";
import {
  MapPinIcon,
  CalendarIcon,
  UserIcon,
  AtSymbolIcon,
} from "@heroicons/react/24/solid";

export const getEventDetails = (event: Event) => {
  const { location, name, email, date } = event;
  const timeStamp = new Date(Number(date)).toLocaleDateString();

  const details = [
    {
      id: "location",
      text: location,
      icon: MapPinIcon,
    },
    {
      id: "date",
      text: timeStamp,
      icon: CalendarIcon,
    },
    {
      id: "name",
      text: name,
      icon: UserIcon,
    },
    {
      id: "email",
      text: email,
      icon: AtSymbolIcon,
    },
  ];

  return details;
};
