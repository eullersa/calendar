import { componentsCSS } from "@/theme";
import { IconContext } from "react-icons";

type InputIconProps = {
  icon?: React.ReactNode;
  isActive?: boolean;
  isError?: boolean;
};

export const InputIcon = ({
  icon,
  isError,
  isActive = false,
}: InputIconProps) => {
  if (!icon) return null;

  return (
    <IconContext.Provider
      value={{
        size: "25px",
        color: isError
          ? componentsCSS("Input.color.icon.error")
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
  );
};
