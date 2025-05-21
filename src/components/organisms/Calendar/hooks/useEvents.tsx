"use client";

import { useEffect, useState } from "react";
import { EventTimeSlot, EventType } from "../types";
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
    setEventDraggable({ ...event, type: EventType.DRAGGING });
  };

  const resetEvents = () => {
    setEvents([]);
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
  };
};
