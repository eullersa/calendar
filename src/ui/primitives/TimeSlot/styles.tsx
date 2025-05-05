import { componentsCSS } from "@/theme";
import styled from "styled-components";

export const StyledTimeSlot = styled.div`
  transition: all 0.18s ease;
  width: 150px;
  height: 150px;
  cursor: pointer;
  background-color: ${componentsCSS("SlotTime.background")};
  border: 1px solid ${componentsCSS("SlotTime.borderColor")};
  * &:hover {
    background-color: ${componentsCSS("SlotTime.backgroundHovered")};
  }
`;
