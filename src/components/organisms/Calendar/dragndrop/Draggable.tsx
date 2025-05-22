import React, { CSSProperties } from "react";
import { DraggableAttributes, useDraggable } from "@dnd-kit/core";
import { SyntheticListenerMap } from "@dnd-kit/core/dist/hooks/utilities";

type ChildrenProps = {
  style: CSSProperties | undefined;
  listeners: SyntheticListenerMap | undefined;
  attributes: DraggableAttributes;
  setNodeRef: (element: HTMLElement | null) => void;
};

type DraggableProps = {
  id: string;
  data: Record<string, number | string>;
  children: (props: ChildrenProps) => React.ReactNode;
};

export const Draggable = ({ id, data, children }: DraggableProps) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
    data,
  });

  const style: CSSProperties | undefined = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        opacity: 0,
      }
    : undefined;

  return children({ style, listeners, attributes, setNodeRef });
};
