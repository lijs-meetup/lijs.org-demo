import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme, GlobalStyles } from "../../styles";

const Container = styled.div`
  text-align: center;
`;

const Layout: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <GlobalStyles />
        <main>{children}</main>
      </Container>
    </ThemeProvider>
  );
};

export { Layout };
