import { useCallback, useRef, useState } from "react";

export function useConfirm() {
  const [open, setOpen] = useState(false);
  const resolverRef = useRef<undefined | ((value: boolean) => void)>(undefined);

  const confirm = useCallback(() => {
    return new Promise<boolean>((resolve) => {
      resolverRef.current = resolve;
      setOpen(true);
    });
  }, []);

  const handleClose = (result: boolean) => {
    resolverRef.current?.(result);
    resolverRef.current = undefined;
    setOpen(false);
  };

  return { confirm, open, handleClose };
}
