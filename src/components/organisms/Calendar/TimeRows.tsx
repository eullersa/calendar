"use client";

import {
  StyledRows,
  StyledTableDataRows,
  StyledTableRows,
  StyledTableTimeRow,
} from "./styles";
import { TIME_SLOTS } from "./constants";
import { ColgroupTime } from "./ColgroupTime";

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
          <StyledTableTimeRow key={time}>
            <StyledTableDataRows data-time={time}>
              <div>
                {time.replaceAll(":00:00", ":00").replaceAll(":30:00", ":30")}
              </div>
            </StyledTableDataRows>
            <StyledTableDataRows
              data-time={time}
              onClick={handleCellPosition(time)}
            />
          </StyledTableTimeRow>
        ))}
      </tbody>
    </StyledTableRows>
  </StyledRows>
);
