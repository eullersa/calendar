"use client";

import { WEEK_DAYS } from "../constants";
import { EventTimeSlot, EventType, GetVerticalCellPosition } from "../types";
import { Draggable } from "../dragndrop/Draggable";
import { StyledColumnOver, StyledCard } from "../styles";

type EventsColumnProps = {
  getVerticalCellPosition: GetVerticalCellPosition;
  events: EventTimeSlot[];
  week: (typeof WEEK_DAYS)[number];
};

export const EventsColumn = ({
  getVerticalCellPosition,
  events,
  week,
}: EventsColumnProps) => (
  <StyledColumnOver>
    {events
      ?.filter((event) => event.weekDay === WEEK_DAYS.indexOf(week))
      ?.map((event, index) => {
        const id = `${event.time}-${event.weekDay}-${index}`;
        const isDragging = events.some((e) => e.type === EventType.DRAGGING);
        const cellPosition = getVerticalCellPosition(event);

        return event.type === EventType.DRAGGING ? (
          <StyledCard
            key={`${EventType.DRAGGING}-${id}`}
            $cellPosition={cellPosition}
          />
        ) : (
          <Draggable
            key={`${EventType.EVENT}-${id}`}
            id={`${EventType.EVENT}-${id}`}
            data={event}
            isDragging={isDragging}
          >
            {(props) => (
              <StyledCard
                $cellPosition={cellPosition}
                ref={props.setNodeRef}
                style={props.style}
                {...props.listeners}
                {...props.attributes}
              />
            )}
          </Draggable>
        );
      })}
  </StyledColumnOver>
);
