"use client";

import {
  StyledRows,
  StyledTableDataRows,
  StyledTableRows,
  StyledTableTimeRow,
} from "../styles";
import { TIME_SLOTS } from "../constants";
import { ColgroupTime } from "../ColgroupTime";
import { AddEvent, TimeSlotData } from "../types";

type TableTimeRows = {
  addEvent: AddEvent;
};

export const TableTimeRows = ({ addEvent }: TableTimeRows) => (
  <StyledRows>
    <StyledTableRows>
      <ColgroupTime />
      <tbody>
        {TIME_SLOTS.map((time) => (
          <StyledTableTimeRow key={time}>
            <StyledTableDataRows>
              <div>
                {time.replaceAll(":00:00", ":00").replaceAll(":30:00", ":30")}
              </div>
            </StyledTableDataRows>
            <StyledTableDataRows
              {...{ [TimeSlotData.TIME]: time }}
              onClick={addEvent}
            />
          </StyledTableTimeRow>
        ))}
      </tbody>
    </StyledTableRows>
  </StyledRows>
);
