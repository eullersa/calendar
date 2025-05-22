"use client";

import { TableMain } from "./tables/TableMain";
import { TableTimeRows } from "./tables/TableTimeRows";
import { TableWeedayColumns } from "./tables/TableWeedayColumns";
import { ChangeCalendar } from "./types";
import { DndCalendar } from "./dragndrop/DndCalendar";
import { useCellPosition } from "./hooks/useCellPosition";
import { useEvents } from "./hooks/useEvents";
import { EventOverlay } from "./dragndrop/EventOverlay";

type CalendarProps = {
  changeCalendar: ChangeCalendar;
};

export const Calendar = ({ changeCalendar }: CalendarProps) => {
  const { ref, getVerticalCellPosition, getCellPosition } = useCellPosition();
  const {
    isDragging,
    events,
    eventDraggable,
    addEvent,
    updateEventPosition,
    updateEventDragging,
    resetEvents,
    markEventAsPending,
    markEventAsConfirmed,
  } = useEvents({
    changeCalendar,
  });

  return (
    <>
      <button onClick={resetEvents}>Reset</button>
      <DndCalendar
        updateEventPosition={updateEventPosition}
        markEventAsConfirmed={markEventAsConfirmed}
        markEventAsPending={markEventAsPending}
        updateEventDragging={updateEventDragging}
        changeCalendar={changeCalendar}
        eventDraggable={eventDraggable}
      >
        <TableMain ref={ref}>
          <EventOverlay
            getCellPosition={getCellPosition}
            getVerticalCellPosition={getVerticalCellPosition}
            isDragging={isDragging}
          />
          <TableTimeRows addEvent={addEvent} />
          <TableWeedayColumns
            events={events}
            getVerticalCellPosition={getVerticalCellPosition}
            changeCalendar={changeCalendar}
          />
        </TableMain>
      </DndCalendar>
    </>
  );
};
