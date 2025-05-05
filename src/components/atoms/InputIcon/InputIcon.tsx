import { componentsCSS } from "@/theme";
import { IconContext } from "react-icons";

type InputIconProps = {
  icon?: React.ReactNode;
  isActive?: boolean;
};

export const InputIcon = ({ icon, isActive = false }: InputIconProps) => {
  if (!icon) return null;

  return (
    <IconContext.Provider
      value={{
        size: "25px",
        color: isActive
          ? componentsCSS("Input.iconColorHovered")
          : componentsCSS("Input.iconColor"),
        style: {
          transition: "inherit",
        },
      }}
    >
      {icon}
    </IconContext.Provider>
  );
};
