import { createPortal } from "react-dom";
import {
  StyledModalCentered,
  StyledModalContent,
  StyledModalMask,
  StyledModal,
  StyledModalTitle,
  MODAL_ANIMATION_DURATION,
  MODAL_ROOT_ID,
} from "@/ui/feedback/Modal";
import { Flex } from "@/ui/primitives/Flex/Flex";
import { useDelayedClose } from "@/hooks/useDelayedClose";
import { CloseButton } from "@/ui/feedback/Modal";

export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
};

export const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
  const { isClosing, isVisible } = useDelayedClose(
    isOpen,
    MODAL_ANIMATION_DURATION
  );

  if (!isVisible) return null;

  if (isVisible) {
    const modalRoot = document.getElementById(MODAL_ROOT_ID);
    if (!modalRoot) {
      const newModalRoot = document.createElement("div");
      newModalRoot.id = MODAL_ROOT_ID;
      document.body.appendChild(newModalRoot);
    }
  }

  return createPortal(
    <StyledModal>
      <StyledModalMask $isClosing={isClosing} />
      <StyledModalCentered onClick={onClose} $isClosing={isClosing}>
        <StyledModalContent
          role="dialog"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <Flex $vertical $gap={10}>
            <CloseButton onClick={onClose} />
            <StyledModalTitle>{title}</StyledModalTitle>
            {children}
          </Flex>
        </StyledModalContent>
      </StyledModalCentered>
    </StyledModal>,
    document.getElementById(MODAL_ROOT_ID) as HTMLElement
  );
};
