// Components==============
import { Link } from "gatsby";
import { flexUnit, L } from "mixins";
import React, { useState } from "react";
import styled from "styled-components";
import Hamburger from "./Hamburger.inline.svg";
// =========================

const MenuWrapper = styled.div`
  /* @media screen and (min-width: 1000px) {
    display: none;
  } */
`;

const MenuSvg = styled(Hamburger)`
  ${flexUnit(6, 30, 33, "vw", "width")}
  cursor: pointer;
  position: relative;
  z-index: 151;
  transform: ${({ menustate }) =>
    menustate === "open" ? "rotate(180deg)" : "rotate(0)"};
  transition: 0.5s;

  #menu {
    fill: ${({ menustate, theme }) =>
      menustate === "open" ? theme.white : theme.black};
  }
`;

const MenuUnfolded = styled.div`
  background-color: ${({ theme: { primary } }) => primary.s4};
  z-index: 150;
  position: fixed;
  left: 0;
  top: ${({ menuState }) => (menuState === "closed" ? "-100vh" : "0vh")};
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: 0.8s;

  li {
    padding: ${({ theme: { spacing } }) => `${spacing.s7}`};
  }

  p {
    ${flexUnit(3, 20, 25, "vw", "font-size")}
    cursor: pointer;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
    color: ${({ theme: { white } }) => white};
    &:hover {
      transform: translateY(-5px);
      transition: 0.5s;
    }
  }
`;

export default function FullScreenWaterfallMenu() {
  const [menuState, setMenuState] = useState("closed");

  function changeMenu() {
    menuState === "closed" ? setMenuState("open") : setMenuState("closed");
  }

  return (
    <MenuWrapper>
      <button onClick={changeMenu}>
        <MenuSvg menustate={menuState} />
      </button>
      <MenuUnfolded menuState={menuState}>
        <ul>
          <li>
            <Link to="/" onClick={changeMenu}>
              <L>page 1</L>
            </Link>
          </li>
          <li>
            <Link to="/" onClick={changeMenu}>
              <L>page 2</L>
            </Link>
          </li>
          <li>
            <Link to="/" onClick={changeMenu}>
              <L>page 3</L>
            </Link>
          </li>
          <li>
            <Link to="/" onClick={changeMenu}>
              <L>page 4</L>
            </Link>
          </li>
        </ul>
      </MenuUnfolded>
    </MenuWrapper>
  );
}
