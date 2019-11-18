// Components==============
import React, { useState } from "react";
import styled from "styled-components";
import { flexUnit } from "../../style/Mixins";
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
  z-index: 150;
  margin: 0;
  transform: ${({ menustate }) =>
    menustate === "open" ? "rotate(180deg)" : "rotate(0)"};
  transition: 0.5s;

  #menu {
    fill: ${({ menustate, theme }) =>
      menustate === "open" ? theme.white : theme.black};
  }
`;

const MenuUnfolded = styled.div`
   background-color: ${({ theme }) => theme.primary};
   z-index: 30;
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
      padding: 2.5em 0;
   }

   p {
      margin: 0;
      cursor: pointer;
      ${flexUnit(6, 23, 30, "vw", "font-size")}
      color: ${({ theme }) => theme.white};
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
      <div onClick={changeMenu}>
        <MenuSvg menustate={menuState} />
      </div>
      <MenuUnfolded menuState={menuState}>
        <ul>
          <li onClick={changeMenu}>
            <p>page 1</p>
          </li>

          <li onClick={changeMenu}>
            <p>page 2</p>
          </li>

          <li onClick={changeMenu}>
            <p>page 3</p>
          </li>

          <li onClick={changeMenu}>
            <p>page 4</p>
          </li>
        </ul>
      </MenuUnfolded>
    </MenuWrapper>
  );
}
