// Components==============
import { Container } from "mixins";
import React from "react";
import styled from "styled-components";
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
  z-index: 100;
  transition: 0.8s;

  ul {
    opacity: ${({ menuState }) => (menuState === "open" ? "1" : `0`)};
    transition: 0.8s;
    margin: 0 auto;
    padding: 0.5em 1em 2em;
    text-align: center;
    display: flex;
    justify-content: space-between;
    max-width: 400px;
  }

  li {
    display: inline-block;
    cursor: pointer;
    padding: 1em;
    transition: 0.2s;

    &:hover {
      background-color: ${({ theme: { white } }) => white};
      color: ${({ theme: { primary } }) => primary.s4};
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
