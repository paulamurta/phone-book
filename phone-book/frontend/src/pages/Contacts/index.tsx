import { useEffect, useState } from "react";
import { AddContactButton } from "../../components/Button/AddContactButton";
import { Search } from "../../components/Search";
import { ContainerRow, LogoBox } from "../../styles/global";
import { Header3, Header1 } from "../../styles/typography";
import { Background, Content, List } from "./styles";
import { motion } from "framer-motion";
import { BiSolidContact } from "react-icons/bi";
import { useTheme } from "styled-components";
import { useQuery } from "react-query";
import { api } from "../../api/api";
import { IContact } from "../../interfaces/IContact";
import { Card } from "../../components/Card";

const Contacts = () => {
  const { colors: theme } = useTheme();
  const [searchParam, setSearchParam] = useState("");
  const [contacts, setContacts] = useState<IContact[]>([]);

  const { refetch } = useQuery(
    ["contacts", searchParam],
    () => {
      if (searchParam.length === 0) {
        return api.get("/contacts");
      }
      if (searchParam.length > 0) {
        return api.get(`/contacts/${searchParam}`);
      }
    },
    {
      onSuccess: (dataOnSuccess) => {
        setContacts(dataOnSuccess?.data);
      },

      keepPreviousData: true,
      staleTime: 2000,
    },
  );

  useEffect(() => {
    refetch();
  }, [contacts, searchParam, refetch]);

  return (
    <motion.div
      initial={{ opacity: 0, x: "100%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "-100%" }}
      transition={{ duration: 1 }}
    >
      <Background>
        <Content>
          <LogoBox>
            <BiSolidContact />
            <Header1 fontcolor={theme.typography.body}>Phone Book App</Header1>
          </LogoBox>

          <ContainerRow>
            <Header3>Contacts</Header3>
            <AddContactButton />
          </ContainerRow>

          <Search
            message={"Search for contact by last name..."}
            onSearch={(value) => {
              setSearchParam(value);
            }}
          />

          <List>
            {contacts.map((contact) => (
              <Card
                key={contact.id}
                firstName={contact.firstName}
                lastName={contact.lastName}
                phone={contact.phone}
              />
            ))}
          </List>
        </Content>
      </Background>
    </motion.div>
  );
};

export default Contacts;
