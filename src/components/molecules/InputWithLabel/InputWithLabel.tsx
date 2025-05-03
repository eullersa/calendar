import { Flex } from "@/ui/primitives/Flex/Flex";
import { Input, InputProps } from "../Input/Input";
import { useId } from "react";
import { StyledErrorMessage, StyledLabel } from "./styles";

type InputWithLabelProps = InputProps & {
  label: string;
  error?: string;
};

export const InputWithLabel = ({
  label,
  error,
  ...rest
}: InputWithLabelProps) => {
  const autoId = useId();
  const inputId = rest?.id ?? autoId;

  return (
    <Flex $vertical $fullWidth $gap={5}>
      <StyledLabel htmlFor={inputId}>{label}</StyledLabel>
      <Input id={inputId} {...rest} isError={!!error} />
      {error && <StyledErrorMessage>{error}</StyledErrorMessage>}
    </Flex>
  );
};
