// Components==============
import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Nav from "../Nav";
import GlobalStyles from "../style/GlobalStyles";
import { OverFlowFix } from "../style/Mixins";
import { Variables } from "../style/themes";
// =========================

const Wrapper = styled.div`
   width: ${({ isFoldedOut }) =>
      isFoldedOut === true ? `calc(100vw - 350px)` : `100vw`};
   transform: ${({ isFoldedOut }) =>
      isFoldedOut === true ? `translateX(350px)` : `translateX(0)`};
   transition: 1s;
   height: 100vh;
`;

const Flex = styled.div`
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
`;

export default function Layout() {
   const [isFoldedOut, setIsFoldedOut] = useState(true);
   const [category, setCategory] = useState(
      <Flex>
         <h1>Welcome back.</h1>
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
            <Wrapper isFoldedOut={isFoldedOut}>{category}</Wrapper>
         </OverFlowFix>
         <GlobalStyles />
      </ThemeProvider>
   );
}
