import { EventsList } from "@/components/organisms";
import { Event } from "@/models";

const getEvents = async () => {
  const events = await fetch("http://localhost:4000/events");
  return events.json();
};

const Events = async () => {
  const events: Event[] = await getEvents();

  return (
    <section>
      <h2>Events</h2>
      <EventsList events={events} />
    </section>
  );
};

export default Events;
