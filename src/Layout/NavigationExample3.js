// Components==============
import { Container, flexUnit } from "mixins";
import React from "react";
import styled, { css } from "styled-components";
// =========================

const NavWrapper = styled.div`
  width: 100vw;
  background-color: ${({ theme: { primary } }) => primary.s4};

  ${({ fixed }) =>
    fixed === true &&
    css`
      position: fixed;
      top: 0;
      left: 0;
    `}
`;

const FlexContainer = styled(Container)`
  justify-content: space-between;
  align-items: center;
  height: 65px;

  display: flex;
`;

const Logo = styled.div`
  color: ${({ theme: { white } }) => white};
  font-weight: 600;
  ${flexUnit(2, 19, 20, "vw", "font-size")}
`;

export default function NavigationExample3({ fixed, children }) {
  return (
    <NavWrapper fixed={fixed}>
      <FlexContainer>
        <Logo>Logo</Logo>
        {children}
      </FlexContainer>
    </NavWrapper>
  );
}
