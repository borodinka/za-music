import { ThemeProvider, styled } from "styled-components";
import { theme } from "./styles/Theme";

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Title>Hello</Title>
    </ThemeProvider>
  );
}

export default App;
