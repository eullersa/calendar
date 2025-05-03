import { IconContext } from "react-icons";
import { useTheme } from "styled-components";

type InputIconProps = {
  icon?: React.ReactNode;
  isActive?: boolean;
};

export const InputIcon = ({ icon, isActive = false }: InputIconProps) => {
  const theme = useTheme();

  if (!icon) return null;

  return (
    <IconContext.Provider
      value={{
        size: "25px",
        color: theme.input.text,
        style: {
          opacity: isActive ? 1 : 0.65,
          transition: "inherit",
        },
      }}
    >
      {icon}
    </IconContext.Provider>
  );
};
