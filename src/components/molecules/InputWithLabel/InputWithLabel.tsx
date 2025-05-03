import { Flex } from "@/ui/primitives/Flex/Flex";
import { Input, InputProps } from "../Input/Input";
import { useId } from "react";
import { StyledErrorMessage } from "./styles";

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
      <label htmlFor={inputId}>{label}</label>
      <Input id={inputId} {...rest} isError={!!error} />
      {error && <StyledErrorMessage>{error}</StyledErrorMessage>}
    </Flex>
  );
};
