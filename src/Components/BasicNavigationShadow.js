// Components==============
import React from "react";
import styled, { css } from "styled-components";
import { Container, flexUnit } from "../style/Mixins";
// =========================

const NavWrapper = styled.div`
  width: 100vw;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.05);

  ${({ fixed }) =>
    fixed === true &&
    css`
      position: fixed;
    `}
`;

const FlexContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 65px;
`;

const Logo = styled.div`
  font-weight: 600;
  ${flexUnit(2, 19, 20, "vw", "font-size")}
`;

const MenuItems = styled.ul`
  display: none;
  justify-content: flex-end;
  align-items: center;
  margin: 0;
  color: ${({ theme }) => theme.gray};

  @media screen and (min-width: 900px) {
    display: flex;
  }

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

export default function BasicNavigationShadow({ fixed }) {
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
