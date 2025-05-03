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
