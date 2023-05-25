import { ThemeProvider } from "styled-components";
import { theme } from "./styles/Theme";
import {
  ButtonText,
  MainTitle,
  SectionSubtitle,
  SectionTitle,
  SubText,
  Text,
} from "./components/ui/Typography";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainTitle>Hello</MainTitle>
      <SectionTitle>Hello</SectionTitle>
      <SectionSubtitle>Hello</SectionSubtitle>
      <Text>Hello</Text>
      <SubText>Hello</SubText>
      <ButtonText>Hello</ButtonText>
    </ThemeProvider>
  );
}

export default App;
