import { IoCloseSharp } from "react-icons/io5";
import { StyledModalButton } from "@/ui/feedback/Modal";

type CloseButtonProps = {
  onClick: () => void;
};

export const CloseButton = ({ onClick }: CloseButtonProps) => (
  <StyledModalButton onClick={onClick} $align="center" $justify="center">
    <IoCloseSharp size={22} />
  </StyledModalButton>
);
