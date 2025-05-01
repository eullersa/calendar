"use client";

import { StyledTimeSlot } from "./styles";

type TimeSlotProps = React.ComponentPropsWithoutRef<"div">;

export const TimeSlot = (props: TimeSlotProps) => {
  return <StyledTimeSlot {...props} />;
};
