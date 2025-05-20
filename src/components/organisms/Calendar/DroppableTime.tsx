import { useDroppable } from "@dnd-kit/core";
import { StyledTableTimeRow } from "./styles";

type DroppableTimeProps = {
  id: string;
  children: React.ReactNode;
  data: Record<string, string>;
};

export const DroppableTime = ({ id, children, data }: DroppableTimeProps) => {
  const { setNodeRef } = useDroppable({
    id,
    data,
  });

  return <StyledTableTimeRow ref={setNodeRef}>{children}</StyledTableTimeRow>;
};
