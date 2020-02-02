// Components==============
import { OverFlowFix } from "mixins";
import React from "react";
import styled, { ThemeProvider } from "styled-components";
import TransitionEffect from "../Components/TransitionEffect";
import GlobalStyles from "../style/GlobalStyles";
import { Variables } from "../style/themes";
import IEWarning from "./IE/IEWarning";
import Nav from "./Nav";
// =========================

const Flex = styled.div`
  display: flex;
`;

const Content = styled.div`
  width: 100%;
`;

export default function Layout({ children }) {
  return (
    <ThemeProvider theme={Variables}>
      <OverFlowFix>
        <IEWarning />
        <Flex>
          <Nav />
          <Content>
            <TransitionEffect>{children}</TransitionEffect>
          </Content>
        </Flex>
      </OverFlowFix>
      <GlobalStyles />
    </ThemeProvider>
  );
}
