import { useEffect, useState } from "react";
import { useDebounce } from "react-use";

export const useCloseDelayed = (isOpen: boolean, delay: number) => {
  const [isClosing, setIsClosing] = useState(false);
  const [isOpenDelayed, setIsOpenDelayed] = useState(isOpen);

  useDebounce(
    () => {
      if (!isOpen) {
        setIsOpenDelayed(false);
        setIsClosing(false);
      }
    },
    delay,
    [isOpen]
  );

  useEffect(() => {
    if (isOpen) {
      setIsOpenDelayed(true);
    }
    if (!isOpen) {
      setIsClosing(true);
    }
  }, [isOpen]);

  return {
    isClosing,
    isOpenDelayed,
  };
};
