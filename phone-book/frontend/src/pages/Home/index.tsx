import { Header1, Header2 } from "../../styles/typography";
import {
  Background,
  GlassHeader,
  Content,
  EnterButton,
  TextContainer,
  LogoBox,
  HeaderButton,
} from "./styles";
import { useNavigate } from "react-router-dom";
import { useTheme } from "styled-components";
import { FiArrowRight } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { BiSolidContact } from "react-icons/bi";
import { ContainerRow } from "../../styles/global";
import { motion } from "framer-motion";

const Home = () => {
  const { colors: theme } = useTheme();
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Background>
        <GlassHeader>
          <ContainerRow position={"left"}>
            <HeaderButton>
              <FiInstagram />
            </HeaderButton>
            <HeaderButton>
              <FiFacebook />
            </HeaderButton>
            <HeaderButton>
              <FiMail />
            </HeaderButton>
          </ContainerRow>
          <ContainerRow position={"right"}>
            <HeaderButton>About</HeaderButton>
            <HeaderButton>FAQ</HeaderButton>
            <HeaderButton>Pricing</HeaderButton>
          </ContainerRow>
        </GlassHeader>
        <Content>
          <LogoBox>
            <BiSolidContact />
            <Header1 fontColor={theme.typography.body}>Phone Book App</Header1>
          </LogoBox>
          <TextContainer>
            <Header2 fontColor={theme.typography.white}>Your contacts list.</Header2>
            <Header2 fontColor={theme.typography.white}>Anytime.</Header2>
            <Header2 fontColor={theme.typography.white}>Anywhere.</Header2>
          </TextContainer>
          <EnterButton onClick={() => navigate("/contacts")}>
            START A TRIAL
            <FiArrowRight />
          </EnterButton>
        </Content>
      </Background>
    </motion.div>
  );
};

export default Home;
