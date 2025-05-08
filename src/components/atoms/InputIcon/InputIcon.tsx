import { componentsCSS } from "@/theme";
import { IconContext } from "react-icons";
import { StyledInputIconButton } from "./styles";

type InputIconProps = {
  icon?: React.ReactNode;
  isActive?: boolean;
  isError?: boolean;
  isDisabled?: boolean;
  onClickIcon?: () => void;
};

export const InputIcon = ({
  icon,
  isError,
  isActive = false,
  isDisabled,
  onClickIcon,
}: InputIconProps) => {
  if (!icon) return null;

  return (
    <StyledInputIconButton $isDisabled={isDisabled} onClick={onClickIcon}>
      <IconContext.Provider
        value={{
          size: "25px",
          color: isError
            ? componentsCSS("Input.color.icon.error")
            : isDisabled
            ? componentsCSS("Input.color.icon.disabled")
            : isActive
            ? componentsCSS("Input.color.icon.focus")
            : componentsCSS("Input.color.icon.disabled"),
          style: {
            transition: "inherit",
          },
        }}
      >
        {icon}
      </IconContext.Provider>
    </StyledInputIconButton>
  );
};
