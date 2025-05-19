"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { EVENTS, TIME_SLOTS, WEEK_DAYS } from "./constants";
import { flushSync } from "react-dom";
import { useWindowSize } from "react-use";
import { TableMain } from "./TableMain";
import { TimeRows } from "./TimeRows";
import { WeekColumns } from "./WeekColumns";
import { EventCard } from "./types";

type CalendarProps = { changeCalendar: (event: EventCard) => void };

export const Calendar = ({ changeCalendar }: CalendarProps) => {
  const [isWeekDayInFront, setIsWeekDayInFront] = useState(false);
  const [events, setEvents] = useState<EventCard[]>([]);
  const rowsRef = useRef<HTMLDivElement>(null);
  const windowSize = useWindowSize();

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
      };
      setEvents((prev) => [...prev, newEvent]);
      setIsWeekDayInFront(false);
      changeCalendar(newEvent);
    };

  const getRowHeight = (rowIndex: number) =>
    rowsRef.current?.children[0].children[1].children[
      rowIndex
    ].getBoundingClientRect().height ?? 0;

  const rowHeight = getRowHeight(1);

  const getEventInset = useCallback(
    (rowIndex: number, duration: number) => {
      return `${(rowHeight * rowIndex).toFixed(2)}px 0% -${(
        rowHeight * rowIndex +
        rowHeight * duration
      ).toFixed(2)}px`;
    },
    [windowSize, rowHeight]
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
      <TableMain>
        <TimeRows handleCellPosition={handleCellPosition} rowsRef={rowsRef} />
        <WeekColumns
          deleteEvent={deleteEvent}
          getEventInset={getEventInset}
          isWeekDayInFront={isWeekDayInFront}
          events={events}
        />
      </TableMain>
    </>
  );
};
