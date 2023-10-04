import EventList from "@/components/events/event-list";
import ResultsTitle from "@/components/events/results-title";
import { getFilteredEvents } from "../../../../dummy-data";
import { Fragment } from "react";
import Button from "@/components/ui/button";
import ErrorAlert from "@/components/ui/error-alert";

export default function FilteredEvents({ params }) {
  const filterData = params.slug;
  console.log(filterData);
  if (!filterData) {
    return <p className="center">Loading ...</p>;
  }
  const filterYear = filterData[0];
  const filterMonth = filterData[1];
  const numYear = +filterYear;
  const numMonth = +filterMonth;
  if (
    isNaN(numYear) | isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>invalid Filter </p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }
  const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth });
  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No Events Found for chosen filter !</p>
        </ErrorAlert>
        <div className="center"></div>
        <Button link="/events">Show All Events</Button>
      </Fragment>
    );
  }
  const date = new Date(numYear, numMonth - 1);
  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </Fragment>
  );
}
