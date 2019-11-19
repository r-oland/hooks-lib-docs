// Components==============
import React from "react";
import styled from "styled-components";
import { Container, flexUnit } from "../../style/Mixins";
// =========================

const MenuWrapper = styled.div`
  /* @media screen and (min-width: 1000px) {
    display: none;
  } */
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.white};
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
    margin: 0;
    padding: 0.5em 1em 2em;
    text-align: center;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(125px, 1fr));
    grid-gap: 2em 2em;
  }

  li {
    cursor: pointer;
    border: ${({ theme }) => theme.white} 2px solid;
    border-radius: 5px;
    padding: 1em;
    ${flexUnit(3, 17, 18, "vw", "font-size")}
    transition: 0.2s;

    &:hover {
      border: ${({ theme }) => theme.white} 2px solid;
      background-color: ${({ theme }) => theme.white};
      color: ${({ theme }) => theme.primary};
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
