"use client";

import { WEEK_DAYS } from "../constants";
import {
  ChangeCalendar,
  EventStatus,
  EventTimeSlot,
  EventType,
  GetVerticalCellPosition,
  TimeSlotData,
} from "../types";
import { Draggable } from "../dragndrop/Draggable";
import { StyledColumnOver, StyledCard } from "../styles";

type EventsColumnProps = {
  changeCalendar: ChangeCalendar;
  getVerticalCellPosition: GetVerticalCellPosition;
  events: EventTimeSlot[];
  week: (typeof WEEK_DAYS)[number];
};

export const EventsColumn = ({
  getVerticalCellPosition,
  events,
  week,
  changeCalendar,
}: EventsColumnProps) => (
  <StyledColumnOver>
    {events
      ?.filter((event) => event.weekDay === WEEK_DAYS.indexOf(week))
      ?.map((event, index) => {
        const id = `${event.time}-${event.weekDay}-${index}`;
        const cellPosition = getVerticalCellPosition(event);

        return event.status === EventStatus.PENDING ? null : event.status ===
          EventStatus.DRAGGING ? (
          <StyledCard
            key={`${EventStatus.DRAGGING}-${id}`}
            $cellPosition={cellPosition}
          />
        ) : event.type === EventType.BLOCK ? (
          <StyledCard
            {...{ [TimeSlotData.TYPE]: event.type }}
            key={`${EventType.BLOCK}-${id}`}
            $cellPosition={cellPosition}
            $cellType={event.type}
          />
        ) : (
          <Draggable
            key={`${EventType.EVENT}-${id}`}
            id={`${EventType.EVENT}-${id}`}
            data={event}
          >
            {(props) => (
              <StyledCard
                $cellPosition={cellPosition}
                $cellType={event.type}
                ref={props.setNodeRef}
                style={props.style}
                {...props.listeners}
                {...props.attributes}
                onClick={() => changeCalendar(event)}
              />
            )}
          </Draggable>
        );
      })}
  </StyledColumnOver>
);
