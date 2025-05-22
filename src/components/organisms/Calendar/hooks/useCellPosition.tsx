"use client";

import { useCallback, useRef } from "react";
import { useWindowSize } from "react-use";
import { TIME_SLOTS, WEEK_DAYS } from "../constants";
import { TimeSlotData, TimeSlot, EventTimeSlot } from "../types";

export const useCellPosition = () => {
  const ref = useRef<HTMLDivElement>(null);
  const windowSize = useWindowSize();

  const getCellWidth = (columnIndex: number) => {
    const dataWeekdayElement = ref.current?.querySelector(
      `[${TimeSlotData.WEEKDAY}='${WEEK_DAYS[columnIndex]}']`
    );

    const columnWidth = dataWeekdayElement?.getBoundingClientRect().width ?? 0;

    return columnWidth;
  };

  const getCellHeight = (rowIndex: number) => {
    const time = Math.floor(rowIndex);

    const dataTimeElement = ref.current?.querySelector(
      `[${TimeSlotData.TIME}='${TIME_SLOTS[time]}']`
    );

    const rowHeight = dataTimeElement?.getBoundingClientRect().height ?? 0;

    return rowHeight;
  };

  const getCellPosition = (event?: TimeSlot | null) => {
    if (!event) {
      return {
        top: 0,
        left: 0,
        width: 0,
        height: 0,
      };
    }

    const cellHeight = getCellHeight(event.time);
    const cellWidth = getCellWidth(event.weekDay);

    return {
      top: event.time * cellHeight,
      left: event.weekDay * cellWidth,
      width: cellWidth,
      height: cellHeight,
    };
  };

  const getVerticalCellPosition = useCallback(
    (event?: EventTimeSlot) => {
      if (!event) {
        return "0px 0% 0px";
      }

      const time = event?.time;
      const duration = event?.duration;
      const rowHeight = getCellHeight(time);

      return `${(rowHeight * time).toFixed(2)}px 0% -${(
        rowHeight * time +
        rowHeight * duration
      ).toFixed(2)}px`;
    },
    [windowSize]
  );

  return { getCellPosition, getVerticalCellPosition, ref };
};
