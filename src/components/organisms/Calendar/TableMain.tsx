"use client";

import {
  StyledTableMainGrid,
  StyledTableMain,
  StyledTableData,
} from "./styles";

type TableMainProps = {
  children: React.ReactNode;
};

export const TableMain = ({ children }: TableMainProps) => {
  return (
    <StyledTableMain>
      <tbody>
        <tr>
          <StyledTableData>
            <StyledTableMainGrid>{children}</StyledTableMainGrid>
          </StyledTableData>
        </tr>
      </tbody>
    </StyledTableMain>
  );
};
