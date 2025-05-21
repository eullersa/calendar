"use client";

import { useDndContext } from "@dnd-kit/core";
import { EventTimeSlot } from "../types";

export const useActiveEvent = () => {
  const { active } = useDndContext();

  const overlay = !!active
    ? ({
        ...(active.data.current as EventTimeSlot),
      } as const)
    : undefined;

  return overlay;
};
