import styled from "styled-components";
import { DROPDOWN_ANIMATION_DURATION } from "./constants";
import { fadeIn } from "./animations";

export const StyledDropdown = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
`;

export const StyledDropdownContent = styled.div`
  position: absolute;
  z-index: 2002;
`;

export const StyledDropdownCentered = styled.div`
  z-index: 2001;
  height: 100%;
  width: 100%;
  animation: ${fadeIn} ${DROPDOWN_ANIMATION_DURATION}ms ease-in-out forwards;
  overflow: hidden;
`;
