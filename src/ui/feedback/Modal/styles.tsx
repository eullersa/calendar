import styled from "styled-components";
import { MODAL_ANIMATION_DURATION, fadeIn, fadeOut } from "@/ui/feedback/Modal";
import { Flex } from "@/ui/primitives/Flex/Flex";
import { componentsCSS } from "@/theme";

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

export const StyledModalContent = styled.div`
  background: ${componentsCSS("Modal.background.default")};
  border-radius: ${componentsCSS("Modal.radii")};
  padding: ${componentsCSS("Modal.padding")};
  position: relative;
  z-index: 1002;
  margin: auto;
  max-width: 500px;
  width: 100%;
`;

export const StyledModalMask = styled.div<StyledModalAnimationProps>`
  z-index: 1000;
  position: fixed;
  inset: 0;
  height: 100%;
  background: ${componentsCSS("Modal.background.backdrop")};
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

export const StyledModalTitle = styled(Flex)`
  line-height: ${componentsCSS("Modal.title.lineHeight")};
  font-weight: ${componentsCSS("Modal.title.fontWeight")};
  font-size: ${componentsCSS("Modal.title.fontSize")};
`;

export const StyledModalButton = styled(Flex)`
  position: absolute;
  top: 10px;
  right: 10px;
  transition: all 0.18s ease-in;
  width: 30px;
  height: 30px;
  border-radius: ${componentsCSS("ModalButton.radii")};
  cursor: pointer;
  &:hover {
    background: ${componentsCSS("ModalButton.background.hovered")};
  }
`;
