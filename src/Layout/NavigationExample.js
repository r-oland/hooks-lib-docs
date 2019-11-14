// Components==============
import React from "react";
import styled, { css } from "styled-components";
import { Container, flexUnit } from "../style/Mixins";
// =========================

const NavWrapper = styled.div`
  width: 100vw;

  ${({ fixed }) =>
    fixed === true &&
    css`
      position: fixed;
    `}
`;

const FlexContainer = styled(Container)`
  justify-content: space-between;
  align-items: center;
  height: 65px;

  @media screen and (min-width: 900px) {
    display: flex;
  }
`;

const Logo = styled.div`
  display: none;
  font-weight: 600;
  ${flexUnit(2, 19, 20, "vw", "font-size")}

  @media screen and (min-width: 900px) {
    display: block;
  }
`;

const MenuItems = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0;
  color: ${({ theme }) => theme.gray};

  li {
    padding-left: calc(3em + 1vw);
    font-weight: 500;
    transition: 0.3s;
    ${flexUnit(1.5, 17, 18, "vw", "font-size")}

    &:hover {
      color: ${({ theme }) => theme.primary};
      transform: translateY(-4px);
    }
  }

  a {
    color: ${({ theme }) => theme.gray};

    &:hover {
      color: ${({ theme }) => theme.primary};
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
