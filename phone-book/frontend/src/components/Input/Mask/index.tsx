import { useState } from "react";
import { Container, StyledInputMask } from "./styles";
import { MaskInputProps } from "./types";
import { LabelText, Small } from "../../../styles/typography";

export function MaskInput({
  label,
  placeholder,
  width,
  height,
  disabled,
  onChange,
  message,
  mask,
}: MaskInputProps) {
  const [value, setValue] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
    onChange(e.target.value);
  }

  return (
    <Container>
      <LabelText>{label}</LabelText>
      <StyledInputMask
        height={height}
        width={width}
        mask={mask}
        placeholder={placeholder}
        onChange={handleChange}
        disabled={disabled ? disabled : false}
        maskChar={null}
        value={value}
      />
      {message && <Small>{message}</Small>}
    </Container>
  );
}
