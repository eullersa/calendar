import { css, keyframes } from "styled-components";

export const fadeIn = (isContent?: boolean) => keyframes`
  from {
    ${
      isContent
        ? css`
            transform: scale(0.9);
          `
        : null
    }
    opacity: 0;
  }
  to {
    ${
      isContent
        ? css`
            transform: scale(1);
          `
        : null
    }
    opacity: 1;
  }
`;

export const fadeOut = (isContent?: boolean) => keyframes`
  from {
    ${
      isContent
        ? css`
            transform: scale(1);
          `
        : null
    }
    opacity: 1;
  }
  to {
    ${
      isContent
        ? css`
            transform: scale(0.9);
          `
        : null
    }
    opacity: 0;
  }
`;
