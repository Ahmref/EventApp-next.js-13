"use client";
import EventList from "@/components/events/event-list";
import { getAllEvents } from "../../../dummy-data";
import EventsSearch from "../../components/events/event-search";
import { Fragment } from "react";
import { useRouter } from "next/navigation";

export default function Events() {
  const events = getAllEvents();
  const router = useRouter();
  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }
  return (
    <Fragment>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  );
}
