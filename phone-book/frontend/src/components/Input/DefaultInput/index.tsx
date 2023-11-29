import { useState } from "react";
import { Container, InputContainer } from "./styles";
import { DefaultInputProps } from "./types";
import { LabelText, Small } from "../../../styles/typography";

export function DefaultInput({
  label,
  placeholder,
  width,
  height,
  disabled,
  onChange,
  message,
}: DefaultInputProps) {
  const [value, setValue] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
    onChange(e.target.value);
  }

  return (
    <Container>
      <LabelText>{label}</LabelText>
      <InputContainer height={height} width={width}>
        <input
          placeholder={placeholder ? placeholder : `${"Insert here..."}`}
          value={value}
          onChange={handleChange}
          disabled={disabled ? disabled : false}
        />
      </InputContainer>
      {message && <Small>{message}</Small>}
    </Container>
  );
}
