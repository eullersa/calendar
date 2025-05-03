import { getCssVar } from "@/theme";
import styled from "styled-components";

export const StyledTimeSlot = styled.div`
  transition: all 0.18s ease;
  width: 150px;
  height: 150px;
  cursor: pointer;
  background-color: ${getCssVar("colors.neutral.50")};
  border: 1px solid ${getCssVar("colors.neutral.300")};
  * &:hover {
    background-color: ${getCssVar("colors.neutral.100")};
  }
`;
