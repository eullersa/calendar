"use client";

import {
  StyledColumns,
  StyledTableCols,
  StyledTableWeekRow,
  StyledColumn,
  StyledColumnOver,
  StyledTableDataColumns,
  StyledColumnCard,
} from "./styles";
import { WEEK_DAYS } from "./constants";
import { ColgroupTime } from "./ColgroupTime";
import { EventCard } from "./types";
import { DraggableCard } from "./DraggableCard";
import { RefObject } from "react";
import { DroppableDay } from "./DroppableDay";

type WeekColumnsProps = {
  deleteEvent: (day: number, time: number) => void;
  getEventInset: (rowIndex: number, duration: number) => string;
  events: EventCard[];
  isWeekDayInFront: boolean;
  columnsRef: RefObject<HTMLTableRowElement | null>;
};

export const WeekColumns = ({
  getEventInset,
  events,
  isWeekDayInFront,
  columnsRef,
}: WeekColumnsProps) => {
  return (
    <StyledColumns ref={columnsRef} $isWeekDayInFront={isWeekDayInFront}>
      <StyledTableCols>
        <ColgroupTime />
        <tbody>
          <StyledTableWeekRow>
            <StyledTableDataColumns />
            {WEEK_DAYS.map((week) => (
              <DroppableDay id={`week-${week}`} data={{ week }} key={week}>
                <StyledColumn key={week} data-week={week}>
                  <StyledColumnOver>
                    {events
                      ?.filter((event) => event.day === WEEK_DAYS.indexOf(week))
                      ?.map((event, index) =>
                        event.type === "overlay" ? (
                          <StyledColumnCard
                            key={`overlay-${event.time}-${event.day}-${index}`}
                            $inset={getEventInset(event.time, event.duration)}
                          />
                        ) : (
                          <DraggableCard
                            key={`draggable-${event.time}-${event.day}-${index}`}
                            id={`draggable-${event.time}-${event.day}`}
                            data={{ duration: event.duration.toString() }}
                            inset={getEventInset(event.time, event.duration)}
                            isOverlaying={events.some(
                              (e) => e.type === "overlay"
                            )}
                          />
                        )
                      )}
                  </StyledColumnOver>
                </StyledColumn>
              </DroppableDay>
            ))}
          </StyledTableWeekRow>
        </tbody>
      </StyledTableCols>
    </StyledColumns>
  );
};
