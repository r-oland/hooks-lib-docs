// Components==============
import { Container, flexUnit } from "mixins";
import React from "react";
import styled, { css } from "styled-components";
// =========================

const NavWrapper = styled.div`
  width: 100vw;

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
  display: none;
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  ${flexUnit(2, 19, 20, "vw", "font-size")}

  @media screen and (min-width: 900px) {
    display: block;
  }
`;

const MenuItems = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: ${({ theme: { gray } }) => gray.s7};

  li {
    padding-left: calc(3em + 1vw);
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.semiBold};
    transition: 0.3s;

    &:hover {
      color: ${({ theme: { primary } }) => primary.s4};
      transform: translateY(-4px);
    }
  }

  a {
    color: ${({ theme: { gray } }) => gray.s7};

    &:hover {
      color: ${({ theme: { primary } }) => primary.s4};
    }
  }
`;

export default function NavigationExample({ fixed, children }) {
  return (
    <NavWrapper fixed={fixed}>
      <FlexContainer>
        <Logo>Logo</Logo>
        <MenuItems>{children}</MenuItems>
      </FlexContainer>
    </NavWrapper>
  );
}
