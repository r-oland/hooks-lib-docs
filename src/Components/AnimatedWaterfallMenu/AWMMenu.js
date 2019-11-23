// Components==============
import React from "react";
import styled from "styled-components";
import { Container } from "../../style/Mixins";
// =========================

const MenuWrapper = styled.div`
  /* @media screen and (min-width: 1000px) {
    display: none;
  } */
  background-color: ${({ theme: { primary } }) => primary.s4};
  color: ${({ theme: { white } }) => white};
  max-height: ${({ menuState }) => (menuState === "open" ? "60vh" : `0`)};
  visibility: ${({ menuState }) =>
    menuState === "open" ? "visible" : `hidden`};
  position: ${({ fixed }) => (fixed === true ? `fixed` : `block`)};
  top: 70px;
  right: 0;
  z-index: 150;
  transition: 0.8s;

  ul {
    opacity: ${({ menuState }) => (menuState === "open" ? "1" : `0`)};
    transition: 0.8s;
    margin: 0 auto;
    padding-bottom: ${({ theme: { spacing } }) => spacing.s5};
    text-align: center;
  }

  li {
    cursor: pointer;
    display: inline-block;
    background-color: ${({ theme: { white } }) => white};
    color: ${({ theme: { primary } }) => primary.s6};
    padding: ${({ theme: { spacing } }) => `${spacing.s2} ${spacing.s7}`};
    margin: ${({ theme: { spacing } }) => `${spacing.s3} ${spacing.s4}`};
    transition: 0.2s;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
    border-radius: ${({ theme: { borderRadius } }) => borderRadius};

    &:hover {
      background-color: ${({ theme: { primary } }) => primary.s6};
      color: ${({ theme: { white } }) => white};
    }
  }
`;

export default function AWMMenu({ menuState, setMenuState, fixed }) {
  function changeMenu() {
    menuState === "closed" ? setMenuState("open") : setMenuState("closed");
  }

  return (
    <MenuWrapper menuState={menuState} fixed={fixed}>
      <Container>
        <ul>
          <li onClick={changeMenu}>page 1</li>

          <li onClick={changeMenu}>page 2</li>

          <li onClick={changeMenu}>page 3</li>

          <li onClick={changeMenu}>page 4</li>
        </ul>
      </Container>
    </MenuWrapper>
  );
}
