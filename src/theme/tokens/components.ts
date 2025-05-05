import { semanticCSS } from "@/theme";

export const components = {
  components: {
    Modal: {
      background: semanticCSS("backgroundCard"),
      borderRadius: semanticCSS("cornerCard"),
      buttonHover: semanticCSS("hoverCard"),
    },
    Input: {
      borderColor: semanticCSS("borderInput"),
      borderColorHovered: semanticCSS("borderHoveredInput"),
      iconColor: semanticCSS("iconInput"),
      iconColorHovered: semanticCSS("iconHoveredInput"),
    },
    SlotTime: {
      background: semanticCSS("backgroundSlot"),
      backgroundHovered: semanticCSS("backgroundHoveredSlot"),
      borderColor: semanticCSS("borderSlot"),
    },
  },
} as const;
