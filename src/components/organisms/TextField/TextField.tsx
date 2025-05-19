import { useId, useState } from "react";
import { Flex } from "@/ui/primitives/Flex/Flex";
import { Input, InputProps } from "@/components/molecules/Input";
import { StyledErrorMessage } from "@/components/organisms/TextField";
import { Label } from "@/components/atoms/Label";

type TextFieldProps = Omit<InputProps, "type"> & {
  label?: string;
  error?: string;
  type?: "text" | "password" | "email";
  value?: string;
  onChange?: (value: string) => void;
};

export const TextField = ({
  label,
  error,
  onChange,
  ...rest
}: TextFieldProps) => {
  const [value, setValue] = useState(rest.value ?? "");
  const autoId = useId();
  const inputId = rest?.id ?? autoId;

  return (
    <Flex $vertical $fullWidth $gap={5}>
      {!!label && <Label htmlFor={inputId}>{label}</Label>}
      <Input
        id={inputId}
        {...rest}
        isError={!!error}
        value={value ?? rest.value}
        onChange={(e) => {
          setValue(e.target.value);
          onChange?.(e.target.value);
        }}
      />
      {!!error && <StyledErrorMessage>{error}</StyledErrorMessage>}
    </Flex>
  );
};
