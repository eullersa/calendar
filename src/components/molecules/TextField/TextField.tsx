import { useId } from "react";
import { Flex } from "@/ui/primitives/Flex/Flex";
import { Input, InputProps } from "@/components/molecules/Input";
import {
  StyledErrorMessage,
  StyledLabel,
} from "@/components/molecules/TextField";

type TextFieldProps = Omit<InputProps, "type"> & {
  label?: string;
  error?: string;
};

export const TextField = ({ label, error, ...rest }: TextFieldProps) => {
  const autoId = useId();
  const inputId = rest?.id ?? autoId;

  return (
    <Flex $vertical $fullWidth $gap={5}>
      {!!label && <StyledLabel htmlFor={inputId}>{label}</StyledLabel>}
      <Input type="text" id={inputId} {...rest} isError={!!error} />
      {error && <StyledErrorMessage>{error}</StyledErrorMessage>}
    </Flex>
  );
};
