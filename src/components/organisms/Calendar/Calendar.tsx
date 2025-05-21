"use client";

import { TableMain } from "./tables/TableMain";
import { TableTimeRows } from "./tables/TableTimeRows";
import { TableWeedayColumns } from "./tables/TableWeedayColumns";
import { EventTimeSlot } from "./types";
import { DndCalendar } from "./dragndrop/DndCalendar";
import { useCellPosition } from "./hooks/useCellPosition";
import { useEvents } from "./hooks/useEvents";
import { EventOverlay } from "./dragndrop/EventOverlay";

type CalendarProps = {
  changeCalendar: (event: EventTimeSlot) => Promise<boolean>;
};

export const Calendar = ({ changeCalendar }: CalendarProps) => {
  const { ref, getVerticalCellPosition, getCellPosition } = useCellPosition();
  const { events, eventDraggable, addEvent, updateEventDragging, resetEvents } =
    useEvents({
      changeCalendar,
    });

  return (
    <>
      <button onClick={resetEvents}>Reset</button>
      <DndCalendar
        updateEventDragging={updateEventDragging}
        changeCalendar={changeCalendar}
        eventDraggable={eventDraggable}
      >
        <TableMain ref={ref}>
          <EventOverlay
            getCellPosition={getCellPosition}
            getVerticalCellPosition={getVerticalCellPosition}
          />
          <TableTimeRows addEvent={addEvent} />
          <TableWeedayColumns
            events={events}
            getVerticalCellPosition={getVerticalCellPosition}
          />
        </TableMain>
      </DndCalendar>
    </>
  );
};
