// Componenets==============
import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { flexUnit } from "../../../style/Mixins";
// =========================

const NavigationWrapper = styled.ul`
   display: flex;

   li {
      padding-left: 5em;
   }

   a {
      ${flexUnit(3, 24, 19, "vw", "font-size")}
   }
`;

export default function Navigation() {
   return (
      <NavigationWrapper>
         <li>
            <Link to="/">page1</Link>
         </li>
         <li>
            <Link to="/">page2</Link>
         </li>
         <li>
            <Link to="/">page3</Link>
         </li>
      </NavigationWrapper>
   );
}
