import React from "react";
import EventCard from "./EventCard";
import EventCarousel from "./EventCarousel";

interface Props {
  name: string;
  events: EventType[];
  containerClassName?: string;
}

const EventList = () => {
  return (
    <section className="flex  items-center flex-col">
      <div className="p-5">
        <h1 className="text-5xl font-black">Join Events and Have Fun!</h1>
      </div>
      <EventCarousel />
    </section>
  );
};

export default EventList;
