import { ThemeMode, neutralCSS, opacityCSS, radiiCSS, redCSS } from "@/theme";

// Source: https://cloudscape.design/foundation/visual-foundation/design-tokens/

// Category - The category of the token's output.
// For example: "color" for hex values, "size" for pixels, or "duration" for seconds.

// Type - A property descriptor of the category.
// For example: "background", "text", or "border".

// Item - The element or abstracted element group that's targeted by the token.
// For example: "dropdown", "control", "container", or "panel".

// Sub-item - Any differentiating aspect of the token or item that isn't state, often could be component variants.
// For example: "secondary", "primary", or "success".

// State - State-dependent aspects.
// For example: "default", "focused", "selected", or "disabled".

// Example: category.type.item.subItem.state
// e.g. color.background.input.disabled - CTI (Cloudscape)

export const semantic = <T extends ThemeMode>(mode: T) =>
  ({
    semantic: {
      color: {
        background: {
          page: {
            default:
              mode === ThemeMode.LIGHT ? neutralCSS("0") : neutralCSS("900"),
          },
          button: {
            outlined: {
              default: opacityCSS("transparent"),
              hovered:
                mode === ThemeMode.LIGHT
                  ? neutralCSS("150")
                  : neutralCSS("700"),
            },
          },
          grid: {
            default:
              mode === ThemeMode.LIGHT ? neutralCSS("0") : neutralCSS("850"),
            hovered:
              mode === ThemeMode.LIGHT ? neutralCSS("100") : neutralCSS("800"),
          },
          input: {
            default: opacityCSS("transparent"),
            hovered: opacityCSS("transparent"),
            disabled: opacityCSS("transparent"),
          },
          icon: {
            default:
              mode === ThemeMode.LIGHT ? neutralCSS("700") : neutralCSS("0"),
            disabled:
              mode === ThemeMode.LIGHT ? neutralCSS("500") : neutralCSS("400"),
            error: mode === ThemeMode.LIGHT ? redCSS("500") : redCSS("400"),
          },
          surface: {
            default:
              mode === ThemeMode.LIGHT ? neutralCSS("0") : neutralCSS("750"),
            overlay: opacityCSS("500"),
          },
        },
        border: {
          grid: {
            default:
              mode === ThemeMode.LIGHT ? neutralCSS("300") : neutralCSS("600"),
          },
          input: {
            default: `2px solid ${mode === ThemeMode.LIGHT ? neutralCSS("250") : neutralCSS("600")}`,
            hovered: `2px solid ${mode === ThemeMode.LIGHT ? neutralCSS("700") : neutralCSS("150")}`,
            error: `2px solid ${mode === ThemeMode.LIGHT ? redCSS("500") : redCSS("400")}`,
          },
        },
        text: {
          page: {
            default:
              mode === ThemeMode.LIGHT ? neutralCSS("750") : neutralCSS("0"),
          },
          input: {
            default:
              mode === ThemeMode.LIGHT ? neutralCSS("900") : neutralCSS("0"),
            error: mode === ThemeMode.LIGHT ? redCSS("500") : redCSS("400"),
          },
        },
      },
      border: {
        radius: {
          input: {
            default: radiiCSS("lg"),
          },
          button: {
            default: radiiCSS("lg"),
          },
          surface: {
            default: radiiCSS("lg"),
          },
        },
      },
    },
  }) as const;
