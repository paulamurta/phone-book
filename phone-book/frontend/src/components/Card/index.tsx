import { formatPhoneNumber } from "../../common/utils/format/formatPhoneNumber";
import { IContactCreate } from "../../interfaces/IContact";
import { Body1, Body2 } from "../../styles/typography";
import { Container, PhoneContainer } from "./styles";
import { FaPhone } from "react-icons/fa6";
import { useTheme } from "styled-components";

export function Card({ firstName, lastName, phone }: IContactCreate) {
  const { colors: theme } = useTheme();
  const formattedPhone = formatPhoneNumber(phone);
  return (
    <Container>
      <Body1>
        {firstName} {lastName}
      </Body1>
      <PhoneContainer>
        <FaPhone />
        <Body2 fontcolor={theme.typography.lightGray}>{formattedPhone}</Body2>
      </PhoneContainer>
    </Container>
  );
}
