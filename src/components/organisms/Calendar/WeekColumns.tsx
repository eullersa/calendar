"use client";

import {
  StyledColumns,
  StyledTableCols,
  StyledTableWeekRow,
  StyledColumn,
  StyledColumnOver,
  StyledColumnCard,
  StyledTableDataColumns,
} from "./styles";
import { WEEK_DAYS } from "./constants";
import { ColgroupTime } from "./ColgroupTime";
import { EventCard } from "./types";

type WeekColumnsProps = {
  deleteEvent: (day: number, time: number) => void;
  getEventInset: (rowIndex: number, duration: number) => string;
  events: EventCard[];
  isWeekDayInFront: boolean;
};

export const WeekColumns = ({
  getEventInset,
  events,
  deleteEvent,
  isWeekDayInFront,
}: WeekColumnsProps) => {
  return (
    <StyledColumns $isWeekDayInFront={isWeekDayInFront}>
      <StyledTableCols>
        <ColgroupTime />
        <tbody>
          <StyledTableWeekRow>
            <StyledTableDataColumns />
            {WEEK_DAYS.map((week) => (
              <StyledTableDataColumns key={week}>
                <StyledColumn key={week} data-week={week}>
                  <StyledColumnOver>
                    {events
                      .filter((event) => event.day === WEEK_DAYS.indexOf(week))
                      .map((event, index) => (
                        <StyledColumnCard
                          key={index}
                          $inset={getEventInset(event.time, event.duration)}
                          onClick={() => {
                            deleteEvent(event.day, event.time);
                          }}
                        />
                      ))}
                  </StyledColumnOver>
                </StyledColumn>
              </StyledTableDataColumns>
            ))}
          </StyledTableWeekRow>
        </tbody>
      </StyledTableCols>
    </StyledColumns>
  );
};
