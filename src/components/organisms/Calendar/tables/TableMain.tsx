"use client";

import {
  StyledTableMainGrid,
  StyledTableMain,
  StyledTableData,
} from "../styles";

type TableMainProps = {
  children: React.ReactNode;
  ref: React.Ref<HTMLDivElement | null>;
};

export const TableMain = ({ children, ref }: TableMainProps) => (
  <StyledTableMain>
    <tbody>
      <tr>
        <StyledTableData>
          <StyledTableMainGrid ref={ref}>{children}</StyledTableMainGrid>
        </StyledTableData>
      </tr>
    </tbody>
  </StyledTableMain>
);
