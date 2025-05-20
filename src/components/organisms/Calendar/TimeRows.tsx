"use client";

import { StyledRows, StyledTableDataRows, StyledTableRows } from "./styles";
import { TIME_SLOTS } from "./constants";
import { ColgroupTime } from "./ColgroupTime";
import { DroppableTime } from "./DroppableTime";

type TimeRows = {
  handleCellPosition: (
    time: string
  ) => (e: React.MouseEvent<HTMLTableCellElement>) => void;
  rowsRef: React.RefObject<HTMLDivElement | null>;
};

export const TimeRows = ({ handleCellPosition, rowsRef }: TimeRows) => (
  <StyledRows ref={rowsRef}>
    <StyledTableRows>
      <ColgroupTime />
      <tbody>
        {TIME_SLOTS.map((time) => (
          <DroppableTime id={`time-${time}`} data={{ time }} key={time}>
            <StyledTableDataRows data-time={time}>
              <div>
                {time.replaceAll(":00:00", ":00").replaceAll(":30:00", ":30")}
              </div>
            </StyledTableDataRows>
            <StyledTableDataRows
              data-time={time}
              onClick={handleCellPosition(time)}
            />
          </DroppableTime>
        ))}
      </tbody>
    </StyledTableRows>
  </StyledRows>
);
