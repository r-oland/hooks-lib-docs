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
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 65px;
`;

const Logo = styled.div`
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  ${flexUnit(2, 19, 20, "vw", "font-size")}
  color: ${({ theme: { white } }) => white};
`;

const MenuItems = styled.ul`
  display: none;
  justify-content: flex-end;
  align-items: center;
  margin: 0;
  color: ${({ theme: { white } }) => white};

  @media screen and (min-width: 900px) {
    display: flex;
  }

  li {
    padding-left: calc(3em + 1vw);
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.semiBold};
    transition: 0.3s;

    &:hover {
      color: ${({ theme: { black } }) => black};
      transform: translateY(-4px);
    }
  }

  a {
    color: ${({ theme: { white } }) => white};

    &:hover {
      color: ${({ theme: { black } }) => black};
    }
  }
`;

export default function BasicNavigationColor({ fixed }) {
  return (
    <NavWrapper fixed={fixed}>
      <FlexContainer>
        <Logo>Logo</Logo>
        <MenuItems>
          <li>Menu item 1</li>
          <li>Menu item 2</li>
          <li>Menu item 3</li>
          <li>Menu item 4</li>
        </MenuItems>
      </FlexContainer>
    </NavWrapper>
  );
}
