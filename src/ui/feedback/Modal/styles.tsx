import styled from "styled-components";
import { MODAL_ANIMATION_DURATION } from "./constants";
import { Flex } from "@/ui/primitives/Flex/Flex";
import { fadeIn, fadeOut } from "./animations";
import { getCssVar } from "@/theme";

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
  background: ${getCssVar("colors.opacity.500")};
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
  background: ${getCssVar("colors.neutral.100")};
  border-radius: ${getCssVar("radii.lg")};
  padding: ${getCssVar("space.10")};
  margin: auto;
  max-width: 500px;
  width: 100%;
`;

export const StyledModalTitle = styled(Flex)`
  line-height: ${getCssVar("typography.lineHeight.none")};
  font-weight: ${getCssVar("typography.fontWeight.bold")};
  font-size: ${getCssVar("typography.fontSize.3xl")};
`;

export const StyledModalButton = styled(Flex)`
  position: absolute;
  top: 10px;
  right: 10px;
  transition: all 0.18s ease-in;
  width: 30px;
  height: 30px;
  border-radius: ${getCssVar("radii.md")};
  cursor: pointer;
  &:hover {
    background: ${getCssVar("colors.semantic.action.hover")};
  }
`;
