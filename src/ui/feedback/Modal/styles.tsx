import styled from "styled-components";
import { MODAL_ANIMATION_DURATION } from "./constants";
import { Flex } from "@/ui/primitives/Flex/Flex";
import { fadeIn, fadeOut } from "./animations";

type StyledModalAnimationProps = {
  $isClosing?: boolean;
};

export const StyledModal = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledModalMask = styled.div<StyledModalAnimationProps>`
  z-index: 1000;
  position: fixed;
  inset: 0;
  height: 100%;
  background: ${({ theme }) => theme.modal.colors.mask};
  animation: ${({ $isClosing }) => ($isClosing ? fadeOut() : fadeIn())}
    ${MODAL_ANIMATION_DURATION}ms ease-in-out forwards;
`;

export const StyledModalCentered = styled.div<StyledModalAnimationProps>`
  z-index: 1001;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow: auto;
  animation: ${({ $isClosing }) => ($isClosing ? fadeOut(true) : fadeIn(true))}
    ${MODAL_ANIMATION_DURATION}ms ease-in-out forwards;
`;

export const StyledModalContent = styled.div`
  position: relative;
  z-index: 1002;
  background: ${({ theme }) => theme.modal.colors.background};
  border-radius: ${({ theme }) => theme.theme.borderRadius};
  padding: 40px;
  margin: auto;
  max-width: 500px;
  width: 100%;
`;

export const StyledModalContentHeader = styled(Flex)`
  position: absolute;
  width: 100%;
  top: 10px;
  right: 10px;
`;

export const StyledModalTitle = styled(Flex)`
  line-height: 1em;
  font-weight: ${({ theme }) => theme.modal.size.titleFontWeight};
  font-size: ${({ theme }) => theme.modal.size.titleSize};
  color: ${({ theme }) => theme.colors.text};
`;

export const StyledModalButton = styled(Flex)`
  transition: all 0.18s ease-in;
  width: 30px;
  height: 30px;
  border-radius: 5px;
  cursor: pointer;
  color: ${({ theme }) => theme.modal.colors.buttonColor};
  &:hover {
    background: ${({ theme }) => theme.modal.colors.buttonHover};
  }
`;
