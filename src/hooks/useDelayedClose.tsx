import { useEffect, useState } from "react";

export const useDelayedClose = (isOpen: boolean, delay = 300) => {
  const [isVisible, setIsVisible] = useState(isOpen);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    if (isOpen) {
      setIsVisible(true);
      setIsClosing(false);
    } else {
      setIsClosing(true);
      timer = setTimeout(() => {
        setIsVisible(false);
        setIsClosing(false);
      }, delay);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [isOpen, delay]);

  return { isVisible, isClosing } as const;
};
