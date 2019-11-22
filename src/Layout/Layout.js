// Components==============
import Icon from "assets/Icon.svg";
import { OverFlowFix } from "mixins";
import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Nav from "../Nav";
import GlobalStyles from "../style/GlobalStyles";
import { Variables } from "../style/themes";
// =========================

const Wrapper = styled.div`
  width: ${({ isFoldedOut }) =>
    isFoldedOut === true ? `calc(100vw - 350px)` : `100vw`};
  transform: ${({ isFoldedOut }) =>
    isFoldedOut === true ? `translateX(350px)` : `translateX(0)`};
  transition: 1s;
  min-height: 100vh;
  padding-top: 0.65em;

  opacity: ${({ isFoldedOut }) => (isFoldedOut === true ? `0` : `1`)};

  @media screen and (min-width: 650px) {
    opacity: 1;
  }
`;

const Flex = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const IconSVG = styled.img`
  width: 25vw;
`;

export default function Layout({ children }) {
  const [isFoldedOut, setIsFoldedOut] = useState(true);
  const [category, setCategory] = useState(
    <Flex>
      <IconSVG src={Icon} alt="Icon" />
    </Flex>
  );

  return (
    <ThemeProvider theme={Variables}>
      <OverFlowFix>
        <Nav
          category={category}
          setCategory={setCategory}
          isFoldedOut={isFoldedOut}
          setIsFoldedOut={setIsFoldedOut}
        />
        {children}
        <Wrapper isFoldedOut={isFoldedOut}>{category}</Wrapper>
      </OverFlowFix>
      <GlobalStyles />
    </ThemeProvider>
  );
}
