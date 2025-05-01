import { createPortal } from "react-dom";
import {
  StyledModalCentered,
  StyledModalContent,
  StyledModalMask,
  StyledModal,
  StyledModalContentHeader,
  StyledModalButton,
  StyledModalTitle,
} from "./styles";
import { MODAL_ANIMATION_DURATION, MODAL_ROOT_ID } from "./constants";
import { Flex } from "@/ui/primitives/Flex/Flex";
import { IoCloseSharp } from "react-icons/io5";
import { useCloseDelayed } from "@/hooks/useCloseDelayed";

export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
};

export const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
  const { isClosing, isOpenDelayed } = useCloseDelayed(
    isOpen,
    MODAL_ANIMATION_DURATION
  );

  if (!isOpenDelayed) return null;

  if (isOpenDelayed) {
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
            <StyledModalContentHeader $justify="flex-end">
              <StyledModalButton
                onClick={onClose}
                $align="center"
                $justify="center"
              >
                <IoCloseSharp size={22} />
              </StyledModalButton>
            </StyledModalContentHeader>
            <Flex $vertical $gap={10}>
              <StyledModalTitle>{title}</StyledModalTitle>
              {children}
            </Flex>
          </Flex>
        </StyledModalContent>
      </StyledModalCentered>
    </StyledModal>,
    document.getElementById(MODAL_ROOT_ID) as HTMLElement
  );
};
