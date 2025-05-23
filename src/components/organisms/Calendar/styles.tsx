import styled from "styled-components";
import { BORDER_COLOR } from "./constants";
import { EventType } from "./types";

export const StyledCalendar = styled.div`
  height: 600px;
  overflow-y: scroll;
`;

export const StyledTableMain = styled.table`
  width: 100%;
  border: none;
  border-collapse: collapse;
  border-spacing: 0;
  border-color: transparent;
  border-radius: 0;
  border-style: none;
  border-width: 0;
  padding: 0;
  margin: 0;
`;

export const StyledTableData = styled.td`
  padding: 0;
  margin: 0;
`;

export const StyledTableDataColumns = styled(StyledTableData)`
  border-inline: 1px solid ${BORDER_COLOR};
`;

export const StyledTableDataRows = styled(StyledTableData)`
  border-block: 1px solid ${BORDER_COLOR};
`;

export const StyledTableMainGrid = styled.div`
  width: 100%;
  position: relative;
`;

export const StyledTableRows = styled(StyledTableMain)`
  height: 100%;
`;

export const StyledTableWeekRow = styled.tr`
  height: 100%;
`;

export const StyledTableTimeRow = styled.tr`
  height: 40px;
`;

export const StyledColumn = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  color: red;
`;

export const StyledColumnOver = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
`;

type StyledColumnCard = {
  $cellPosition: string;
  $cellType?: EventType;
};

export const StyledCard = styled.div<StyledColumnCard>`
  cursor: ${({ $cellType }) =>
    $cellType === EventType.BLOCK ? "not-allowed" : "pointer"};
  position: absolute;
  background-color: ${({ $cellType }) =>
    $cellType === EventType.BLOCK ? "#d9190037" : "#0ed90037"};
  z-index: 3;
  inset: ${({ $cellPosition }) => $cellPosition};
`;

export const StyledTableCols = styled(StyledTableRows)``;

export const StyledRows = styled.div`
  position: relative;
  inset: 0;
  z-index: 1;
`;

export const StyledColumns = styled.div`
  position: absolute;
  inset: 0;
`;
