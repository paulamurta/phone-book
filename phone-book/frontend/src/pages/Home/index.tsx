import { Header1 } from "../../styles/typography";
import { Background, GlassHeader, Content, EnterButton } from "./styles";
import { useTheme } from "styled-components";

const Home = () => {
  const { colors: theme } = useTheme();
  return (
    <Background>
      <GlassHeader>Home</GlassHeader>
      <Content>
        <Header1 fontColor={theme.typography.white}>Your contacts list.</Header1>
        <Header1 fontColor={theme.typography.white}>Anytime.</Header1>
        <Header1 fontColor={theme.typography.white}>Anywhere.</Header1>
        <EnterButton>START A TRIAL</EnterButton>
      </Content>
    </Background>
  );
};

export default Home;
