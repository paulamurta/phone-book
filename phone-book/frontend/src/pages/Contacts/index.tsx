import { useState } from "react";
import { AddContactButton } from "../../components/Button/AddContactButton";
import { Search } from "../../components/Search";
import { ContainerRow, LogoBox } from "../../styles/global";
import { Header3, Header1 } from "../../styles/typography";
import { Background, Content } from "./styles";
import { motion } from "framer-motion";
import { BiSolidContact } from "react-icons/bi";
import { useTheme } from "styled-components";
import { useQuery } from "react-query";
import { api } from "../../api/api";
import { IContact } from "../../interfaces/IContact";

const Contacts = () => {
  const { colors: theme } = useTheme();
  const [searchParam, setSearchParam] = useState("");
  const [contacts, setContacts] = useState<IContact[]>([]);

  const { data, isLoading, error, refetch } = useQuery(
    [
      "contacts",
      //searchParam
    ],
    () => {
      // let params = new URLSearchParams();
      // if (searchParam.length > 0) params.append("search", searchParam);
      return api.get(
        "/contacts",
        // { params }
      );
    },
    {
      onSuccess: (dataOnSuccess) => {
        console.log(dataOnSuccess);
      },

      keepPreviousData: false,
    },
  );

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
            <Header1 fontColor={theme.typography.body}>Phone Book App</Header1>
          </LogoBox>

          <ContainerRow>
            <Header3>Contacts</Header3>
            <AddContactButton />
          </ContainerRow>

          <Search
            onSearch={(value) => {
              setSearchParam(value);
            }}
          />
        </Content>
      </Background>
    </motion.div>
  );
};

export default Contacts;
