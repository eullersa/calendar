import { componentsCSS, fontSizeCSS, fontWeightCSS } from "@/theme";
import styled, { css } from "styled-components";

type StyledSelectedOptionsProps = {
  $isDisabled?: boolean;
};

type StyledSelectedItemProps = {
  $isSelected?: boolean;
  $isDisabled?: boolean;
};

export const StyledSelectedItem = styled.div<StyledSelectedItemProps>`
  padding: 10px 20px;
  width: 100%;
  cursor: pointer;
  position: relative;
  font-size: ${fontSizeCSS("lg")};
  ${({ $isSelected }) =>
    $isSelected &&
    css`
      background: ${componentsCSS("ModalButton.background.hovered")};
    `}
  ${({ $isDisabled }) =>
    $isDisabled
      ? null
      : css`
          &:hover {
            background: ${componentsCSS("ModalButton.background.hovered")};
          }
        `}
`;

export const StyledSelectedRadio = styled.input`
  all: unset;
  inset: 0;
  position: absolute;
`;

export const StyledSelectedOptions = styled.div<StyledSelectedOptionsProps>`
  font-size: ${fontSizeCSS("lg")};
  font-weight: ${({ $isDisabled }) =>
    $isDisabled ? fontWeightCSS("regular") : fontWeightCSS("medium")};
  color: ${({ $isDisabled }) =>
    $isDisabled
      ? componentsCSS("Input.color.text.disabled")
      : componentsCSS("Input.color.text.default")};
  user-select: none;
  background-color: transparent;
  outline: none;
  border: none;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
`;

type StyledSelectProps = {
  $maxWidth?: number;
};

export const StyledSelect = styled.div<StyledSelectProps>`
  width: 100%;
  ${({ $maxWidth }) =>
    $maxWidth &&
    css`
      max-width: ${$maxWidth}px;
    `}
`;
