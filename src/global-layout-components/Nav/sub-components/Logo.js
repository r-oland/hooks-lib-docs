// Componenets==============
import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
// =========================

const LogoWrapper = styled(Link)`
   display: flex;
   align-items: center;
`;

export default function Logo() {
   return <LogoWrapper to="/"></LogoWrapper>;
}
