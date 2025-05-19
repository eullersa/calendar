import { opacityCSS } from "@/theme";
import styled from "styled-components";

type StyledInputIconButtonProps = {
  $isDisabled?: boolean;
};

export const StyledInputIconButton = styled.button<StyledInputIconButtonProps>`
  background-color: ${opacityCSS("transparent")};
  border-color: ${opacityCSS("transparent")};
  padding: 0;
  margin: 0;
  min-height: 0;
  min-width: 0;
  height: min-content;
  border-width: 0;
  cursor: ${({ $isDisabled }) => ($isDisabled ? "inherit" : "pointer")};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  flex-grow: 0;
`;
