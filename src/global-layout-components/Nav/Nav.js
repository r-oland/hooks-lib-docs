// Componenets==============
import React from "react";
import styled from "styled-components";
import { NavContainer } from "../../global-ui-components/Container";
import Logo from "./sub-components/Logo";
import Navigation from "./sub-components/Navigation";
// =========================

const NavWrapper = styled.nav`
   height: 10vh;
   padding-top: 1em;

   @media screen and (min-aspect-ratio: 17/9) and (max-width: 1000px) {
      height: 20vh;
   }
`;

export default function Nav() {
   return (
      <NavWrapper>
         <NavContainer>
            <Logo />
            <Navigation />
         </NavContainer>
      </NavWrapper>
   );
}
