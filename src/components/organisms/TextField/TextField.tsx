import { useId } from "react";
import { Flex } from "@/ui/primitives/Flex/Flex";
import { Input, InputProps } from "@/components/molecules/Input";
import { StyledErrorMessage } from "@/components/organisms/TextField";
import { Label } from "@/components/atoms/Label";

type TextFieldProps = Omit<InputProps, "type"> & {
  label?: string;
  error?: string;
  type?: "text" | "password" | "email";
};

export const TextField = ({ label, error, ...rest }: TextFieldProps) => {
  const autoId = useId();
  const inputId = rest?.id ?? autoId;

  return (
    <Flex $vertical $fullWidth $gap={5}>
      {!!label && <Label htmlFor={inputId}>{label}</Label>}
      <Input id={inputId} {...rest} isError={!!error} />
      {!!error && <StyledErrorMessage>{error}</StyledErrorMessage>}
    </Flex>
  );
};
