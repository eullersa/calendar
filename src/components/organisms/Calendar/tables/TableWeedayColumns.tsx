"use client";

import {
  StyledColumns,
  StyledTableCols,
  StyledTableWeekRow,
  StyledColumn,
  StyledTableDataColumns,
} from "../styles";
import { WEEK_DAYS } from "../constants";
import { ColgroupTime } from "../components/ColgroupTime";
import {
  TimeSlotData,
  EventTimeSlot,
  GetVerticalCellPosition,
  ChangeCalendar,
} from "../types";
import { EventsColumn } from "../events/EventsColumn";

type TableWeedayColumnsProps = {
  changeCalendar: ChangeCalendar;
  getVerticalCellPosition: GetVerticalCellPosition;
  events: EventTimeSlot[];
};

export const TableWeedayColumns = ({
  getVerticalCellPosition,
  events,
  changeCalendar,
}: TableWeedayColumnsProps) => (
  <StyledColumns>
    <StyledTableCols>
      <ColgroupTime />
      <tbody>
        <StyledTableWeekRow>
          <StyledTableDataColumns />
          {WEEK_DAYS.map((weekday) => (
            <StyledTableDataColumns key={weekday}>
              <StyledColumn
                {...{ [TimeSlotData.WEEKDAY]: weekday }}
                key={weekday}
              >
                <EventsColumn
                  changeCalendar={changeCalendar}
                  getVerticalCellPosition={getVerticalCellPosition}
                  events={events}
                  week={weekday}
                />
              </StyledColumn>
            </StyledTableDataColumns>
          ))}
        </StyledTableWeekRow>
      </tbody>
    </StyledTableCols>
  </StyledColumns>
);
