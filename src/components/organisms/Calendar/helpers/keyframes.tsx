import { KeyframeResolverParameters } from "@dnd-kit/core/dist/components/DragOverlay/hooks/useDropAnimation";

export const keyframes = (event: KeyframeResolverParameters) => {
  const {
    transform: { final, initial },
  } = event;

  const transformInitial = `translate3d(${initial.x}px, ${initial.y}px, 0)`;
  const transformFinal = `translate3d(${final.x}px, ${final.y}px, 0)`;

  return [
    {
      opacity: 1,
      transform: transformInitial,
    },
    {
      opacity: 1,
      transform: transformFinal,
    },
  ];
};
