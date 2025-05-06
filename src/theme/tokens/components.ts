import {
  colorCSS,
  borderRadiusCSS,
  spaceCSS,
  fontWeightCSS,
  fontSizeCSS,
  lineHeightCSS,
} from "@/theme";

export const components = {
  components: {
    Modal: {
      radii: borderRadiusCSS("radius.surface.default"),
      padding: spaceCSS("10"),
      background: {
        default: colorCSS("background.surface.default"),
        backdrop: colorCSS("background.surface.overlay"),
      },
      title: {
        lineHeight: lineHeightCSS("none"),
        fontWeight: fontWeightCSS("bold"),
        fontSize: fontSizeCSS("3xl"),
      },
    },
    ModalButton: {
      radii: borderRadiusCSS("radius.button.default"),
      background: {
        hovered: colorCSS("background.button.outlined.hovered"),
      },
    },
    Input: {
      color: {
        border: {
          default: colorCSS("border.input.default"),
          focus: colorCSS("border.input.hovered"),
        },
        icon: {
          focus: colorCSS("background.icon.default"),
          disabled: colorCSS("background.icon.disabled"),
        },
      },
      border: {
        radius: {
          default: borderRadiusCSS("radius.input.default"),
        },
      },
      padding: {
        default: spaceCSS("2"),
      },
    },
    SlotTime: {
      color: {
        background: {
          default: colorCSS("background.grid.default"),
          hovered: colorCSS("background.grid.hovered"),
        },
        borderColor: {
          default: colorCSS("border.grid.default"),
        },
      },
    },
  },
} as const;
