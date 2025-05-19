import { createPortal } from "react-dom";
import {
  StyledDropdown,
  StyledDropdownCentered,
  StyledDropdownContent,
} from "@/components/molecules/Dropdown";
import { DROPDOWN_ROOT_ID, DROPDOWN_GAP } from "./constants";
import { ElementPosition } from "@/hooks/useElementPosition";
import { useDropdownPosition } from "./hooks/useDropdownPosition";
import React from "react";

export type DropdownProps = {
  isOpen: boolean;
  onClose: () => void;
  maxWidth?: number;
  anchorPosition: ElementPosition;
  children?: (maxHeight: number | string) => React.ReactNode;
  gap?: number;
  isSearchable?: boolean;
};

const DropdownComponent = ({
  onClose,
  anchorPosition,
  maxWidth = undefined,
  gap = DROPDOWN_GAP,
  children,
  isSearchable,
}: DropdownProps) => {
  const { ref, style, height } = useDropdownPosition(
    anchorPosition,
    gap,
    isSearchable
  );

  const modalRoot = document.getElementById(DROPDOWN_ROOT_ID);
  if (!modalRoot) {
    const newModalRoot = document.createElement("div");
    newModalRoot.id = DROPDOWN_ROOT_ID;
    document.body.appendChild(newModalRoot);
  }

  return createPortal(
    <StyledDropdown>
      <StyledDropdownCentered onClick={onClose}>
        <StyledDropdownContent
          onClick={(e) => e.stopPropagation()}
          ref={ref}
          role="dialog"
          style={{
            ...style,
            maxWidth,
            width: maxWidth ? "100%" : anchorPosition.width,
          }}
        >
          {children ? children(height) : null}
        </StyledDropdownContent>
      </StyledDropdownCentered>
    </StyledDropdown>,
    document.getElementById(DROPDOWN_ROOT_ID) as HTMLElement
  );
};

export const Dropdown = (props: DropdownProps) => {
  if (!props.isOpen) return null;

  return <DropdownComponent {...props} />;
};
