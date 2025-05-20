"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { EVENTS, TIME_SLOTS, WEEK_DAYS } from "./constants";
import { flushSync } from "react-dom";
import { useWindowSize } from "react-use";
import { TableMain } from "./TableMain";
import { TimeRows } from "./TimeRows";
import { WeekColumns } from "./WeekColumns";
import { EventCard } from "./types";
import { closestCenter, DndContext } from "@dnd-kit/core";
import { restrictToWindowEdges, snapCenterToCursor } from "@dnd-kit/modifiers";

type CalendarProps = { changeCalendar: (event: EventCard) => void };

export const Calendar = ({ changeCalendar }: CalendarProps) => {
  const [isWeekDayInFront, setIsWeekDayInFront] = useState(false);
  const [events, setEvents] = useState<EventCard[]>([]);
  const columnsRef = useRef<HTMLTableRowElement>(null);
  const rowsRef = useRef<HTMLDivElement>(null);
  const windowSize = useWindowSize();
  const [eventOverlay, setEventOverlay] = useState<EventCard | null>(null);

  const addNewEvent = (eventData: EventCard) => {
    setEvents((prev) => [...prev, eventData]);
  };

  const handleCellPosition =
    (time: string) => (e: React.MouseEvent<HTMLTableCellElement>) => {
      flushSync(() => {
        setIsWeekDayInFront(true);
      });
      const element = document.elementFromPoint(e.clientX, e.clientY);
      const dataWeek = element?.getAttribute("data-week");
      if (!dataWeek) return;
      const dataWeekIndex = WEEK_DAYS.indexOf(dataWeek);
      const dataTimeIndex = TIME_SLOTS.indexOf(time);
      const newEvent = {
        day: dataWeekIndex,
        time: dataTimeIndex,
        duration: 2,
        type: "event",
      } as const;
      addNewEvent(newEvent);
      setIsWeekDayInFront(false);
      changeCalendar(newEvent);
    };

  const getRowHeight = (rowIndex: number) =>
    rowsRef.current?.children[0].children[1].children[
      rowIndex
    ]?.getBoundingClientRect().height ?? 0;

  const getEventInset = useCallback(
    (rowIndex: number, duration: number) => {
      const rowHeight = getRowHeight(rowIndex);

      return `${(rowHeight * rowIndex).toFixed(2)}px 0% -${(
        rowHeight * rowIndex +
        rowHeight * duration
      ).toFixed(2)}px`;
    },
    [windowSize]
  );

  const deleteEvent = (day: number, time: number) => {
    setEvents((prev) =>
      prev.filter((event) => event.day !== day || event.time !== time)
    );
  };

  useEffect(() => {
    setEvents(EVENTS);
  }, []);

  return (
    <>
      <button
        onClick={() => {
          setEvents([]);
        }}
      >
        Reset
      </button>
      <DndContext
        collisionDetection={closestCenter}
        onDragStart={() => {
          setIsWeekDayInFront(true);
        }}
        modifiers={[restrictToWindowEdges, snapCenterToCursor]}
        onDragMove={(event) => {
          const duration = event?.active?.data?.current?.duration ?? 2;

          const week = event.collisions?.filter((droppable) =>
            droppable?.id?.toString().includes("week-")
          )?.[0]?.data?.droppableContainer?.data?.current?.week;

          const time = event.collisions?.filter((droppable) =>
            droppable?.id?.toString().includes("time-")
          )?.[0]?.data?.droppableContainer?.data?.current?.time;

          const eventOverlay = {
            day: WEEK_DAYS.indexOf(week),
            time: TIME_SLOTS.indexOf(time),
            duration: Number(duration),
            type: "overlay",
          } as const;

          setEventOverlay(eventOverlay);
        }}
        onDragEnd={() => {
          setEventOverlay(null);
          setIsWeekDayInFront(false);
        }}
      >
        <TableMain>
          <TimeRows handleCellPosition={handleCellPosition} rowsRef={rowsRef} />
          <WeekColumns
            deleteEvent={deleteEvent}
            getEventInset={getEventInset}
            isWeekDayInFront={isWeekDayInFront}
            events={[...events, ...(!!eventOverlay ? [eventOverlay] : [])]}
            columnsRef={columnsRef}
          />
        </TableMain>
      </DndContext>
    </>
  );
};
