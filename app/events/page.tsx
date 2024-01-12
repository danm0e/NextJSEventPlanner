import { Suspense } from "react";
import Loading from "@/events/loading";
import { EventsList } from "@/components/organisms";
import { Event } from "@/models";

const getEvents = async () => {
  // await new Promise((resolve: any) => setTimeout(resolve, 3000));

  const events = await fetch("http://localhost:4000/events", {
    next: { revalidate: 0 },
  });

  return events.json();
};

const Events = async () => {
  const events: Event[] = await getEvents();

  return (
    <section className="w-full">
      <h2>Events</h2>

      <Suspense fallback={<Loading />}>
        <EventsList events={events} />
      </Suspense>
    </section>
  );
};

export default Events;
