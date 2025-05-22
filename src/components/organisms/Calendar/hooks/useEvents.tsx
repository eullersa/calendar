"use client";

import { useEffect, useState } from "react";
import { EventStatus, EventTimeSlot } from "../types";
import { EVENTS } from "../constants";
import { getCellFromPoint } from "../helpers/getCellFromPoint";
import { standartEvent } from "../helpers/standartEvent";

type UseEventsProps = {
  changeCalendar: (event: EventTimeSlot) => Promise<boolean>;
};

export const useEvents = ({ changeCalendar }: UseEventsProps) => {
  const [events, setEvents] = useState<EventTimeSlot[]>([]);
  const [eventDraggable, setEventDraggable] = useState<EventTimeSlot | null>(
    null
  );
  const eventDragging: EventTimeSlot[] = eventDraggable ? [eventDraggable] : [];
  const allEvents: EventTimeSlot[] = [...events, ...eventDragging];
  const isDragging = !!eventDraggable;

  const addEvent = async (e: React.MouseEvent<HTMLTableCellElement>) => {
    const eventsBefore = events;
    const event = getCellFromPoint(e.clientX, e.clientY);
    if (!event) return;
    const newEvent = standartEvent(event);
    setEvents((prev) => [...prev, newEvent]);
    const isConfirmedEvent = await changeCalendar(newEvent);
    if (!isConfirmedEvent) {
      setEvents(eventsBefore);
    }
  };

  const updateEventDragging = (event: EventTimeSlot | null) => {
    if (!event) {
      setEventDraggable(null);
      return;
    }
    setEventDraggable({ ...event, status: EventStatus.DRAGGING });
  };

  const markEventAsPending = (event: EventTimeSlot) => {
    setEvents((prev) =>
      prev.map((e) =>
        e.weekDay === event.weekDay && e.time === event.time
          ? { ...e, status: EventStatus.PENDING }
          : e
      )
    );
  };

  const markEventAsConfirmed = (event: EventTimeSlot) => {
    setEvents((prev) =>
      prev.map((e) =>
        e.weekDay === event.weekDay && e.time === event.time
          ? { ...e, status: EventStatus.CONFIRMED }
          : e
      )
    );
  };

  const updateEventPosition = (event: EventTimeSlot) => {
    setEvents((prev) =>
      prev.map((e) =>
        e.weekDay === event.weekDay && e.time === event.time && eventDraggable
          ? { ...eventDraggable, status: EventStatus.CONFIRMED }
          : e
      )
    );
  };

  const resetEvents = () => {
    setEvents(EVENTS);
  };

  useEffect(() => {
    setEvents(EVENTS);
  }, []);

  return {
    events: allEvents,
    eventDraggable,
    addEvent,
    resetEvents,
    updateEventDragging,
    isDragging,
    markEventAsPending,
    markEventAsConfirmed,
    updateEventPosition,
  };
};
