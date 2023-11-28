import { useEffect, useState } from "react";
import { SearchProps } from "./types";
import { useTheme } from "styled-components";
import { IoMdClose as CloseIcon } from "react-icons/io";
import { FiSearch as SearchIcon } from "react-icons/fi";
import { Container, IconBox } from "./styles";

export function Search({ inputWidth, currentValue, message, onSearch }: SearchProps) {
  const [value, setValue] = useState("");
  const { colors: theme } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentValue && currentValue.length > 0) {
        setValue(currentValue);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [currentValue]);

  //  const debounceChange = useDebounce(onSearch, 400);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  return (
    <Container size={inputWidth}>
      <IconBox>
        <SearchIcon />
      </IconBox>
      <input
        type="text"
        placeholder={message ? message : `${"Pesquisar"}`}
        value={value}
        onChange={handleChange}
      />
      {value ? (
        <button
          type="button"
          onClick={() => {
            setValue("");
            onSearch("");
          }}
        >
          <IconBox>
            <CloseIcon />
          </IconBox>
        </button>
      ) : (
        ""
      )}
    </Container>
  );
}
